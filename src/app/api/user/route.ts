import { NextRequest, NextResponse } from "next/server";
import { authUser } from "@/utils/severHelpers";
import connectedToDB from "../../../../configs/db";
import { UserModel } from "../../../../models/User";
import { valiadteEmail } from "@/utils/auth";

interface UpdateUserBody {
  name: string;
  email: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectedToDB();

    const user = await authUser();
    if (!user) {
      return NextResponse.json(
        { message: "Please login first!" },
        { status: 401 }
      );
    }

    const body = (await req.json()) as UpdateUserBody;
    const { name, email } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json({ message: "enter name" }, { status: 400 });
    }

    const isValidEmail = valiadteEmail(email);

    if (!email || typeof email !== "string" || !isValidEmail) {
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
    }

    await UserModel.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          name,
          email,
        },
      }
    );

    return NextResponse.json(
      { message: "User updated successfully!" },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { message: "An unknown error occurred." },
        { status: 500 }
      );
    }
  }
}
