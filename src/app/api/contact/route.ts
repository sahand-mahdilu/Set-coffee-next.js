import { NextRequest, NextResponse } from "next/server";
import connectedToDB from "../../../../configs/db";
import ContactModel from "../../../../models/Contact";
import { valiadteEmail } from "@/utils/auth";


interface IContact {
  name: string;
  email: string;
  phone: string;
  company?: string; 
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
   
    await connectedToDB();

 
    const body: IContact = await req.json();
    const { name, email, phone, company, message } = body;

   
    if (!name || name.trim().length < 3) {
      return NextResponse.json(
        { message: "نام باید حداقل شامل 3 کاراکتر باشد." },
        { status: 400 }
      );
    }

    const isvalidEmail= valiadteEmail(email)

    if (isvalidEmail) {
      return NextResponse.json(
        { message: "ایمیل وارد شده معتبر نیست." },
        { status: 400 }
      );
    }

    if (!phone || !/^\d+$/.test(phone)) {
      return NextResponse.json(
        { message: "شماره تماس فقط باید شامل اعداد باشد." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { message: "پیغام باید حداقل شامل 10 کاراکتر باشد." },
        { status: 400 }
      );
    }

   
    await ContactModel.create({ name, email, phone, company, message });

   
    return NextResponse.json(
      { message: "پیغام شما با موفقیت ثبت شد." },
      { status: 201 }
    );
  } catch (err: any) {
  
    return NextResponse.json(
      { message: "خطای داخلی سرور.", error: err.message },
      { status: 500 }
    );
  }
}