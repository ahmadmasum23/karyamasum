import { NextResponse } from "next/server";

import { getMonkeytypeData } from "@/services/monkeytype";

export const GET = async () => {
  try {
    // Check if required environment variables are available
    if (!process.env.MONKEYTYPE_API_KEY) {
      console.error("Monkeytype API: Missing MONKEYTYPE_API_KEY environment variable");
      return NextResponse.json(
        { message: "Monkeytype API configuration error", error: "Missing required environment variables" },
        { status: 500 },
      );
    }

    const response = await getMonkeytypeData();
    
    if (response.status > 400) {
      console.error("Monkeytype API Error:", response);
      return NextResponse.json(
        { message: "Failed to fetch Monkeytype data", error: "External API error" },
        { status: response.status },
      );
    }
    
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Monkeytype API Route Error:", error);
    return NextResponse.json(
      { 
        message: "Internal Server Error", 
        error: error instanceof Error ? error.message : "Unknown error",
        details: "Failed to fetch Monkeytype statistics"
      },
      { status: 500 },
    );
  }
};
