import { NextResponse } from "next/server";

import { getGithubData } from "@/services/github";

export const GET = async () => {
  try {
    // Check if required environment variables are available
    if (!process.env.GITHUB_READ_USER_TOKEN_PERSONAL) {
      console.error("GitHub API: Missing GITHUB_READ_USER_TOKEN_PERSONAL environment variable");
      return NextResponse.json(
        { message: "GitHub API configuration error", error: "Missing required environment variables" },
        { status: 500 },
      );
    }

    const response = await getGithubData();
    
    if (response.status > 400) {
      console.error("GitHub API Error:", response);
      return NextResponse.json(
        { message: "Failed to fetch GitHub data", error: "External API error" },
        { status: response.status },
      );
    }
    
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("GitHub API Route Error:", error);
    return NextResponse.json(
      { 
        message: "Internal Server Error", 
        error: error instanceof Error ? error.message : "Unknown error",
        details: "Failed to fetch GitHub contributions data"
      },
      { status: 500 },
    );
  }
};
