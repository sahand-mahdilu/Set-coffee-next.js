import { NextResponse } from "next/server"; // استفاده از NextResponse برای مدیریت پاسخ
import connectedToDB from "../../../../../configs/db";

export async function GET(req: Request): Promise<NextResponse> {
  try {
   
    await connectedToDB();

    
    return NextResponse.json({ message: "success response 11:)11" }, { status: 201 });
  } catch (error) {
   
    console.error("Error:", error);
    return NextResponse.json(
      { message: "An error occurred while connecting to the database" },
      { status: 500 }
    );
  }
}