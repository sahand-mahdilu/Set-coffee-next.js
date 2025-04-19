import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../configs/db";

import ProductModel from "../../../models/Product";
import CommentModel from "../../../models/comment";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectedToDB();

    const reqBody = await req.json();
    const { username, body, email, score, productID } = reqBody;

    // validation
    if (
      !username ||
      typeof username !== "string" ||
      username.trim().length === 0
    ) {
      return NextResponse.json(
        { message: "Invalid username: must be a non-empty string." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "string" || body.trim().length === 0) {
      return NextResponse.json(
        { message: "Invalid body: must be a non-empty string." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email: must be a valid email address." },
        { status: 400 }
      );
    }

    if (!score || typeof score !== "number" || score < 1 || score > 5) {
      return NextResponse.json(
        {
          message: "Invalid score: must be a number between 1 and 5.",
        },
        { status: 400 }
      );
    }

    if (!productID || typeof productID !== "string") {
      return NextResponse.json(
        { message: "Invalid product ID: must be a valid string." },
        { status: 400 }
      );
    }
    await connectedToDB();
    const comment = await CommentModel.create({
      username,
      body,
      email,
      score,
      productID,
    });

    await ProductModel.findOneAndUpdate(
      { _id: productID },
      { $push: { comments: comment._id } }
    );

    return NextResponse.json(
      { message: "Comment created successfully :))", data: comment },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    await connectedToDB();
    const comments = await CommentModel.find({}, "-__v");
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}
