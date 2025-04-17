import { NextRequest, NextResponse } from "next/server";

import { writeFile } from "fs/promises";
import path from "path";
import connectedToDB from "../../../../configs/db";
import ProductModel from "../../../../models/Product";



interface Product {
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  weight: number;
  suitableFor: string;
  smell: string;
  tags: string[];
  img?: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectedToDB();

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
     
      const body: Product = await req.json();
      const product = await ProductModel.create(body);

      return NextResponse.json(
        { message: "Product created successfully :))", data: product },
        { status: 201 }
      );
    } else if (contentType.includes("multipart/form-data")) {
   
      const formData = await req.formData();
      const name = formData.get("name")?.toString() || "";
      const price = Number(formData.get("price")) || 0;
      const shortDescription = formData.get("shortDescription")?.toString() || "";
      const longDescription = formData.get("longDescription")?.toString() || "";
      const weight = Number(formData.get("weight")) || 0;
      const suitableFor = formData.get("suitableFor")?.toString() || "";
      const smell = formData.get("smell")?.toString() || "";
      const tags = JSON.parse(formData.get("tags")?.toString() || "[]");
      const img = formData.get("img") as File;

      let imgPath = "";
      if (img) {
        const buffer = Buffer.from(await img.arrayBuffer());
        const filename = Date.now() + img.name;
        imgPath = path.join("/uploads/" + filename);

        await writeFile(path.join(process.cwd(), "public", imgPath), buffer);
      }

      const product = await ProductModel.create({
        name,
        price,
        shortDescription,
        longDescription,
        weight,
        suitableFor,
        smell,
        tags,
        img: img ? `http://localhost:3000${imgPath}` : undefined,
      });

      return NextResponse.json(
        { message: "Product created successfully :))", data: product },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { message: "Unsupported Content-Type" },
      { status: 400 }
    );
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectedToDB()
    const formData = await req.formData();
    const img = formData.get("img") as File;

    if (!img) {
      return NextResponse.json(
        { message: "Product has not image !!" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;
    const imgPath = path.join("/uploads/" + filename);

    await writeFile(path.join(process.cwd(), "public", imgPath), buffer);

    return NextResponse.json(
      { message: "File uploaded successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}

export async function GET() {
  try {
  await connectedToDB()

    const products = await ProductModel.find({}, "-__v").populate("comments");
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}

