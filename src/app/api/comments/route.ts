import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../configs/db";
import CommentModel from "../../../../models/comment";
import ProductModel from "../../../../models/product";



export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectedToDB()

    const reqBody = await req.json();
    const { username, body, email, score, productID } = reqBody;




  
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
    await connectedToDB()
    const comments = await CommentModel.find({}, "-__v");
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}