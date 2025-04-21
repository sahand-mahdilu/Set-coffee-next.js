import { NextRequest, NextResponse } from "next/server";
import { authUser } from "@/utils/severHelpers";
import connectedToDB from "../../../../../configs/db";
import WishListModel from "../../../../models/WishList";

interface Params {
  id: string;
}

export async function DELETE(req: NextRequest, { params }: { params: any }) {
  try {
    await connectedToDB();
    const user = await authUser();

    if (!user) {
      return NextResponse.json(
        { message: "Please login first !!" },
        { status: 401 }
      );
    }

    const productID = params.id;
    await WishListModel.findOneAndDelete({
      user: user._id,
      product: productID,
    });

    return NextResponse.json({ message: "Product removed successfully :))" });
  } catch (err) {
    return NextResponse.json(
      { message: (err as Error).message || "An error occurred." },
      { status: 500 }
    );
  }
}
