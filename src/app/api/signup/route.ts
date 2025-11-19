import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: "name, email and password required" }, { status: 400 });
    }

    const [firstName, ...rest] = name.trim().split(" ");
    const lastName = rest.join(" ") || "";

    const payload = {
      firstName,
      lastName,
      email,
      username: email.split("@")[0],
      password,
    };

    const resp = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();

    if (!resp.ok) {
      return NextResponse.json({ message: data?.message || "Signup failed" }, { status: resp.status });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err?.message || "Server error" }, { status: 500 });
  }
}
