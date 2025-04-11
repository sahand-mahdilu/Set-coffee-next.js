import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../../configs/db";
import ProductModel from "../../../../../models/Product";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const productId = params.id;

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
    return NextResponse.json(
      { message: String(err) },
      { status: 500 }
    );
  }
}