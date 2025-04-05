import connectedToDB from "../../../../../configs/db";
import SubDepartmentModel from "../../../../../models/SubDepartment";


type Request = {
  json: () => Promise<{ title: string; department: string }>;
};


export async function POST(req: Request): Promise<Response> {
  try {
    await connectedToDB(); 

    const body = await req.json();
    const { title, department } = body;

    
    await SubDepartmentModel.create({ title, department });

    return new Response(
      JSON.stringify({ message: "SubDepartment created successfully :))" }),
      {
        status: 200,
      }
    );
  } catch (err) {
    
    return new Response(
      JSON.stringify({ message: err instanceof Error ? err.message : "Unknown error" }),
      {
        status: 500,
      }
    );
  }
}