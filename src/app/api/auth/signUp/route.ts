import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../../configs/db";
import { UserModel } from "../../../../models/User";
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constant";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectedToDB();

    const reqBody = await req.json();

    const { name, username, email, password } = reqBody;

    if (!name || !username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // validation

    const isUserExists = await UserModel.findOne({
      $or: [{ email }, { username }],
    });

    // checking if user exists

    if (isUserExists) {
      return NextResponse.json(
        { message: "user with this username or email is already exists" },
        { status: 409 }
      );
    }

    //  hashing password

    const hasedPassword = await hashPassword(password);

    // generating accessToken

    const accessToken = generateAccessToken({ username });

    // adding user
    const users = await UserModel.find({});

    await UserModel.create({
      name,
      username,
      email,
      password: hasedPassword,
      role: users.length > 0 ? roles.USER : roles.ADMIN,
    });

    // setting cookie

    return NextResponse.json(
      { message: "user signed up successfully  " },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token= ${accessToken}; path=/;httpOnly=true`,
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "An error occurred while connecting to the database" },
      { status: 500 }
    );
  }
}
