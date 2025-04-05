
import { authUser } from "@/utils/severHelpers";
import connectedToDB from "../../../../configs/db";
import TicketModel from "../../../../models/Ticket";

// تعریف نوع درخواست
type Request = {
  json: () => Promise<{
    title: string;
    body: string;
    department: string;
    subDepartment: string;
    priority?: number;
  }>;
};


export async function POST(req: Request): Promise<Response> {
  try {
    await connectedToDB(); 

    const user = await authUser(); 

  
    if (!user || !user._id) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: User not authenticated" }),
        { status: 401 }
      );
    }

    const reqBody = await req.json();
    const { title, body, department, subDepartment, priority } = reqBody;

    
    if (!title || title.trim() === "") {
      return new Response(
        JSON.stringify({ message: "Title is required" }),
        { status: 400 }
      );
    }

    if (!body || body.trim() === "") {
      return new Response(
        JSON.stringify({ message: "Body is required" }),
        { status: 400 }
      );
    }

    if (!department || department.trim() === "") {
      return new Response(
        JSON.stringify({ message: "Department is required" }),
        { status: 400 }
      );
    }

    if (!subDepartment || subDepartment.trim() === "") {
      return new Response(
        JSON.stringify({ message: "SubDepartment is required" }),
        { status: 400 }
      );
    }

    if (priority !== undefined && ![1, 2, 3].includes(priority)) {
      return new Response(
        JSON.stringify({ message: "Invalid priority value" }),
        { status: 400 }
      );
    }

  
    await TicketModel.create({
      title,
      body,
      department,
      subDepartment,
      priority: priority || 1, 
      user: user._id,
    });

    return new Response(
      JSON.stringify({ message: "Ticket saved successfully :))" }),
      {
        status: 201,
      }
    );
  } catch (err) {
    // مدیریت خطا
    return new Response(
      JSON.stringify({
        message: err instanceof Error ? err.message : "Unknown error",
      }),
      {
        status: 500,
      }
    );
  }
}