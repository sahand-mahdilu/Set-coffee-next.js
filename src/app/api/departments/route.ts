import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../configs/db";
import DepartmentModel from "../../../models/Department";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectedToDB();

    const body = await req.json();
    const { title } = body;

    await DepartmentModel.create({ title });

    return new NextResponse(
      JSON.stringify({ message: "Department created successfully :))" }),
      {
        status: 200,
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

type Department = {
  _id: string;
  title: string;
};

export async function GET(): Promise<NextResponse> {
  try {
    await connectedToDB();

    const departments = await DepartmentModel.find({}).lean();

    const formattedDepartments: Department[] = departments.map(
      (department) => ({
        _id: department._id.toString(),
        title: department.title,
      })
    );

    return new NextResponse(JSON.stringify(formattedDepartments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
      }
    );
  }
}
