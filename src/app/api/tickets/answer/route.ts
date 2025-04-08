import { NextRequest, NextResponse } from "next/server";
import { authUser } from "@/utils/severHelpers";
import connectedToDB from "../../../../../configs/db";
import TicketModel from "../../../../../models/Ticket";

interface RequestBody {
  title: string;
  body: string;
  department: string;
  subDepartment?: string; // Optional field
  priority: string;
  ticketID: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectedToDB();

    const reqBody: RequestBody = await req.json();
    const { title, body, department, subDepartment, priority, ticketID } = reqBody;
    const user = await authUser();
    

    await TicketModel.create({
      title,
      body,
      department,
      subDepartment,
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
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Internal Server Error" }, { status: 500 });
  }
}