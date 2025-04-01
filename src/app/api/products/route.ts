import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../configs/db";
import ProductModel from "../../../../models/product";

export async function POST(req: NextRequest) {
  try {
    await connectedToDB();

    const body = await req.json();
    const {
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitableFor,
      smell,
      tags,
    } = body;

    const product = await ProductModel.create({
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitableFor,
      smell,
      tags,
    });

    return NextResponse.json(
      { message: "Product created successfully :))", data: product },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectedToDB();

    const products = await ProductModel.find({}, "-__v").populate("comments");
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}
