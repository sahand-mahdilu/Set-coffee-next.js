import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../../configs/db";
import ProductModel from "../../../../models/Product";

interface Params {
  id?: string;
}

interface Context {
  params: Params;
}

export async function DELETE(req: NextRequest, context: Context) {
  try {
    const productId = context.params?.id;

    if (!productId) {
      return NextResponse.json(
        { message: "Product ID not provided." },
        { status: 400 }
      );
    }

    await connectedToDB();
    const deletedProduct = await ProductModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return NextResponse.json(
        { message: "Product not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product deleted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}
