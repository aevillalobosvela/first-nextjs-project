import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello World" }, { status: 200 })
}

export async function POST(req: Request) {
    const { name } = await req.json();
    return NextResponse.json({ message: `Hello ${name}` }, { status: 201 })
}