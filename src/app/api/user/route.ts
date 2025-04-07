import { NextRequest, NextResponse } from "next/server";
import { authUser } from "@/utils/severHelpers";
import connectedToDB from "../../../../configs/db";
import { UserModel } from "../../../../models/User";
import { valiadteEmail } from "@/utils/auth";

interface UpdateUserBody {
  username: string;
  email: string;
}

interface DeleteUserBody {
  id: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
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
    const { username, email } = body;

    if (!username || typeof username !== "string") {
      return NextResponse.json({ message: "Enter name" }, { status: 400 });
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
          username,
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

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    await connectedToDB();

    const body = (await req.json()) as DeleteUserBody;
    const { id } = body;

    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { message: "Invalid ID provided." },
        { status: 400 }
      );
    }

    const user = await UserModel.findOneAndDelete({ _id: id });

    if (!user) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User removed successfully :))" },
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