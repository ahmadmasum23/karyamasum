import { createClient, createAdminClient } from "@/common/utils/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = createAdminClient();
  try {
    const { data, error } = await supabase
      .from("messages")
      .select()
      .order("created_at", { ascending: true });

    if (error) throw error;

    return NextResponse.json(data ?? [], { status: 200 });
  } catch (error) {
    console.error("[GET /api/chat] Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export const POST = async (req: Request) => {
  const supabase = createAdminClient();
  try {
    const body = await req.json();
    await supabase.from("messages").insert([body]);
    return NextResponse.json("Data saved successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};