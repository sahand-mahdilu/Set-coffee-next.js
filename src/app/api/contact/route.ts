import { NextRequest, NextResponse } from "next/server";
import { valiadteEmail } from "@/utils/auth";
import connectedToDB from "../../../../configs/db";
import ContactModel from "../../../models/Contact";

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

    if (!name.trim()) {
      return NextResponse.json(
        { message: "نام باید حداقل شامل 3 کاراکتر باشد." },
        { status: 400 }
      );
    }

    const isvalidEmail = valiadteEmail(email);

    if (!isvalidEmail) {
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

    if (!message.trim()) {
      return NextResponse.json(
        { message: "درخواست خود را وارد کنید" },
        { status: 400 }
      );
    }

    await ContactModel.create({ name, email, phone, company, message });

    return NextResponse.json(
      { message: "پیغام شما با موفقیت ثبت شد." },
      { status: 201 }
    );
  } catch (err: unknown) {
    let errorMessage = "خطای داخلی سرور.";

    if (err instanceof Error) {
      errorMessage = `خطای داخلی سرور: ${err.message}`;
      console.error("خطا رخ داد:", err.message);
    } else {
      console.error("یک خطای ناشناخته رخ داد:", err);
    }

    return NextResponse.json(
      { message: errorMessage, error: errorMessage },
      { status: 500 }
    );
  }
}
