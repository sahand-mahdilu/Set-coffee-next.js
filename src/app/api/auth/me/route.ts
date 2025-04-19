import {  NextResponse } from "next/server";
import { UserModel } from "../../../../../models/User";
import { verifyToken } from "@/utils/auth";
import connectedToDB from "../../../../../configs/db";
import { cookies } from "next/headers";




export async function GET(): Promise<NextResponse> {
  try {
   
    await connectedToDB();
    console.log("Database connected");

    
   const cookieInstant = cookies();
  
    const token = (await cookieInstant).get("token")?.value;//string
  
    let user = null;
   

    if (token) {
      
      const tokenPayload = verifyToken(token);
      

      
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