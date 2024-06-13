import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();

  try {
    return NextResponse.json(
      { success: true, message: "Login Successful", token: "" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
