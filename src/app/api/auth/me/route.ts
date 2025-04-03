import { NextRequest, NextResponse } from "next/server";
import { UserModel } from "../../../../../models/User";
import { verifyToken } from "@/utils/auth";
import connectedToDB from "../../../../../configs/db";
import { cookies } from "next/headers";

// تعریف نوع کاربر (اختیاری)
interface IUser {
  username: string;
  name: string;
  [key: string]: any;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    // اتصال به دیتابیس
    await connectedToDB();
    console.log("Database connected");

    // دریافت کوکی‌ها
   const cookieInstant = cookies();
  
    const token = (await cookieInstant).get("token")?.value;//string
  
    let user = null;
   

    if (token) {
      
      const tokenPayload = verifyToken(token);
      console.log("Token Payload:", tokenPayload); 

      
      if (
        typeof tokenPayload === "object" &&
        tokenPayload !== null &&
        "username" in tokenPayload
      ) {
        user = await UserModel.findOne(
          { username: (tokenPayload as { username: string }).username }, 
          "-password -refreshToken -__v" 
        ).lean();
        console.log("User Found:", user);
      }

      if (user) {
        return NextResponse.json(user,{status:200}); 
      }

      return NextResponse.json(
        {
          data: null,
          message: "User not found.",
        },
        { status: 404 } 
      );
    } else {
      return NextResponse.json(
        {
          data: null,
          message: "Not access !!",
        },
        { status: 401 } 
      );
    }
  } catch (error) {
    console.error("Error in GET handler:", error); 
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 } 
    );
  }
}