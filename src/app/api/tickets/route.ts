
import { authUser } from "@/utils/severHelpers";
import connectedToDB from "../../../../configs/db";
import TicketModel from "../../../../models/Ticket";
import { NextRequest, NextResponse } from "next/server";





export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectedToDB(); 

    const user = await authUser(); 

  
    if (!user || !user._id) {
      return new NextResponse(
        JSON.stringify({ message: "Unauthorized: User not authenticated" }),
        { status: 401 }
      );
    }

    const reqBody = await req.json();
    const { title, body, department, priority } = reqBody;

    
    if (!title || title.trim() === "") {
      return new NextResponse(
        JSON.stringify({ message: "Title is required" }),
        { status: 400 }
      );
    }

    if (!body || body.trim() === "") {
      return new NextResponse(
        JSON.stringify({ message: "Body is required" }),
        { status: 400 }
      );
    }

    if (!department || department.trim() === "") {
      return new NextResponse(
        JSON.stringify({ message: "Department is required" }),
        { status: 400 }
      );
    }

  

    if (priority !== undefined && ![1, 2, 3].includes(priority)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid priority value" }),
        { status: 400 }
      );
    }

  
    await TicketModel.create({
      title,
      body,
      department,
      
      priority: priority || 1, 
      user: user._id,
    });

    return new NextResponse(
      JSON.stringify({ message: "Ticket saved successfully :))" }),
      {
        status: 201,
      }
    );
  } catch (err) {
   
    return new NextResponse(
      JSON.stringify({
        message: err instanceof Error ? err.message : "Unknown error",
      }),
      {
        status: 500,
      }
    );
  }
}