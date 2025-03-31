import { NextRequest, NextResponse } from "next/server";
import {
  generateAccessToken,
  generateRefreshToken,
  validatePassword,
  validateUsername,
  verifyPassword,
} from "@/utils/auth";
import connectedToDB from "../../../../../configs/db";
import { UserModel } from "../../../../../models/User";
import { BodyRequest } from "@/app/types/types";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectedToDB();

    const bodyReq: BodyRequest = await req.json();
    const { username, password } = bodyReq;

    //  validation

    const isValidUsername = validateUsername(username);
    const isValidPassword = validatePassword(password);

    if (!isValidUsername || !isValidPassword) {
      return NextResponse.json(
        { message: "Username or password is incorrect" },
        { status: 401 }
      );
    }

    //  finding user in data base
    const user = await UserModel.findOne({ username });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    //  checking password
    const isCorrectPassword = await verifyPassword(password, user.password);
    if (!isCorrectPassword) {
      return NextResponse.json(
        { message: "Username or password is incorrect" },
        { status: 401 }
      );
    }

    //  generatig tokens

    const accessToken = generateAccessToken({ username });
    const refreshToken = generateRefreshToken({ username });

    //  setting refresh Token

    await UserModel.findOneAndUpdate({username},{
        $set :{refreshToken}
    })





    //  response

    return NextResponse.json(
      {
        message: "User logged in successfully",
       
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${accessToken}; path=/; httpOnly=true; Secure; SameSite=Strict`,
        },
      }
    );
  } catch (err) {
    console.error(err);

    // مدیریت خطا
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
