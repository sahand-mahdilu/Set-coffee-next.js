import connectedToDB from "../../../../../configs/db";
import { UserModel } from "../../../../../models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest): Promise<NextResponse> {
  try {
   
    await connectedToDB();

 
    const body = await req.json();
    const { id }: { id: string } = body;

   
    const user = await UserModel.findOne({ _id: id }).lean();

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

  
    await UserModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          role: user.role === "USER" ? "ADMIN" : "USER",
        },
      }
    );

    return NextResponse.json({ message: "User role updated successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "An error occurred while updating the user role" },
      { status: 500 }
    );
  }
}