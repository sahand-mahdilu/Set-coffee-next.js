import { isValidObjectId } from "mongoose";
import connectedToDB from "../../../../../../configs/db";
import SubDepartmentModel from "../../../../../../models/SubDepartment";

type SubDepartment = {
  _id: string;
  title: string;
  department: string;
};

type RequestWithParams = {
  params: {
    id: string;
  };
};


export async function GET(req: RequestWithParams): Promise<Response> {
  try {
    await connectedToDB(); 

    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return new Response(
        JSON.stringify({ message: "ID is not valid !!" }),
        { status: 422 }
      );
    }

    const subDepartments = await SubDepartmentModel.find({ department: id }).lean();

    const formattedSubDepartments: SubDepartment[] = subDepartments.map((subDepartment) => ({
      _id: subDepartment._id.toString(),
      title: subDepartment.title,
      department: subDepartment.department.toString(),
    }));

    return new Response(
      JSON.stringify(formattedSubDepartments),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
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