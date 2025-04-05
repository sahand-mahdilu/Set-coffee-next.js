import connectedToDB from "../../../../configs/db";
import DepartmentModel from "../../../../models/Department";


type Request = {
  json: () => Promise<{ title: string }>;
};


export async function POST(req: Request): Promise<Response> {
  try {
    await connectedToDB(); 

    const body = await req.json();
    const { title } = body;

  
    await DepartmentModel.create({ title });

    return new Response(
      JSON.stringify({ message: "Department created successfully :))" }),
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