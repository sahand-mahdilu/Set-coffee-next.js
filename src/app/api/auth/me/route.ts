import { NextRequest, NextResponse } from "next/server";
import { UserModel } from "../../../../../models/User";
import { verifyToken } from "@/utils/auth";
import connectedToDB from "../../../../../configs/db";
import { cookies } from "next/headers";

// تعریف نوع کاربر (اختیاری، می‌توانید بسته به مدل خود آن را تغییر دهید)
interface IUser {
  email: string;
  name: string;
  [key: string]: any; 
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
 
    await connectedToDB();

   
   const cookieInstant = cookies();
   
     const token = (await cookieInstant).get("token")?.value;//string
   
     let user = null;

    if (token) {
      const tokenPayload = verifyToken(token);

    
      if (typeof tokenPayload === "object" && tokenPayload !== null && "email" in tokenPayload) {
        user = await UserModel.findOne(
          { email: (tokenPayload as { email: string }).email },
          "-password -refreshToken -__v"
        ).lean();
      }

      if (user) {
        return NextResponse.json(user);
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