import { NextRequest, NextResponse } from "next/server";

import WishListModel from "../../../models/WishList";
import { WishListRequestBody } from "@/app/types/types";
import connectedToDB from "../../../../configs/db";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectedToDB();

    const body: WishListRequestBody = await req.json();
    const { user, product } = body;

    if (!user || !product) {
      return NextResponse.json(
        { message: "User and product are required." },
        { status: 400 }
      );
    }

    const wish = await WishListModel.findOne({ user, product });

    if (!wish) {
      await WishListModel.create({ user, product });
    }
    return NextResponse.json(
      { message: "Product added to wishlist successfully :))" },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("Error:", err);

    return NextResponse.json(
      {
        message: err instanceof Error ? err.message : "Internal server error.",
      },
      { status: 500 }
    );
  }
}
