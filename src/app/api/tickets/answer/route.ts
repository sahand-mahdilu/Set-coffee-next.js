import { NextRequest, NextResponse } from "next/server";
import { authUser } from "@/utils/severHelpers";
import connectedToDB from "../../../../../configs/db";
import TicketModel from "../../../../models/Ticket";
import { redirect } from "next/navigation";

interface RequestBody {
  title: string;
  body: string;
  department: string;
  priority: string;
  ticketID: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectedToDB();

    const reqBody: RequestBody = await req.json();
    const { title, body, department, priority, ticketID } = reqBody;
    const user = await authUser();

    if (!user) {
      redirect("/login-register");
    }
    await TicketModel.findOneAndUpdate(
      { _id: ticketID },
      {
        $set: {
          hasAnswer: true,
        },
      }
    );

    await TicketModel.create({
      title,
      body,
      department,
      priority,
      user: user._id,
      hasAnswer: false,
      isAnswer: true,
      mainTicket: ticketID,
    });

    return NextResponse.json(
      { message: "Answer saved successfully :))" },
      { status: 201 }
    );
  } catch (err: unknown) {
    let errorMessage = "Internal Server Error";
    if (err instanceof Error) {
      errorMessage = err.message;
      console.error("Error saving answer:", err.message);
    } else {
      console.error("An unknown error occurred while saving the answer:", err);
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
