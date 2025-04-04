import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies(); 


  cookieStore.set("token", "", { maxAge: -1 }); 

  return NextResponse.json({ message: "Logout is done" });
}