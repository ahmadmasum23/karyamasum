import { NextResponse } from "next/server";
import { validateEnvironmentVariables } from "@/common/utils/env-validation";

export const GET = async () => {
  try {
    const envValidation = validateEnvironmentVariables();
    
    const healthCheck = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      domain: process.env.DOMAIN,
      vercel: {
        deployment_url: process.env.VERCEL_URL,
        region: process.env.VERCEL_REGION,
      },
      environmentVariables: {
        isValid: envValidation.isValid,
        missingVars: envValidation.missingVars,
        errors: envValidation.errors,
        configured: {
          GITHUB_READ_USER_TOKEN_PERSONAL: !!process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
          MONKEYTYPE_API_KEY: !!process.env.MONKEYTYPE_API_KEY,
          GEMINI_API_KEY: !!process.env.GEMINI_API_KEY,
          DOMAIN: !!process.env.DOMAIN,
        }
      },
      apiEndpoints: {
        github: `/api/github`,
        monkeytype: `/api/monkeytype`, 
        gemini: `/api/gemini`,
      }
    };

    // Log for Vercel Function Logs
    console.log('Health Check:', JSON.stringify(healthCheck, null, 2));

    return NextResponse.json(healthCheck, { 
      status: envValidation.isValid ? 200 : 500 
    });

  } catch (error) {
    console.error('Health Check Error:', error);
    return NextResponse.json(
      { 
        error: "Health check failed",
        details: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
};