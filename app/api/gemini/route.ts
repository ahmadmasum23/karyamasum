// app/api/gemini/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ABOUT } from "@/common/constants/about";
import { METADATA } from "@/common/constants/metadata";

// Personal data about Ahmad Ma'sum
const PERSONAL_DATA = {
  name: METADATA.creator,
  about: ABOUT.join(" "),
  skills: [
    "Frontend Development",
    "Flutter Development",
    "Next.js",
    "React",
    "Laravel",
    "FastAPI",
    "Backend Development",
    "UI/UX Design",
    "API Integration",
    "Database Management",
  ],
  education: "Software Engineering (RPL) at SMK Brantas Karangkates",
  experience:
    "Student with passion for creating functional and intuitive applications",
  technologies: [
    "Flutter",
    "Next.js",
    "React",
    "Laravel",
    "FastAPI",
    "Odoo",
    "JavaScript",
    "TypeScript",
    "Dart",
    "PHP",
    "Python",
    "Node.js",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Supabase",
  ],
  contact: {
    email: "ahmadmasum127@gmail.com", 
    portfolio: process.env.DOMAIN || "https://ahmadmasum23.vercel.app/",
  },
};

  const SYSTEM_PROMPT = `You are Ahmad Ma'sum's AI assistant on his personal website. You have comprehensive knowledge about Ahmad and can answer questions about his background, skills, projects, and experience.

  Personal Information:
  - Name: ${PERSONAL_DATA.name}
  - Education: ${PERSONAL_DATA.education}
  - About: ${PERSONAL_DATA.about}

  Skills & Technologies:
  ${PERSONAL_DATA.skills.map((skill) => `- ${skill}`).join("\n")}

  Technologies I work with:
  ${PERSONAL_DATA.technologies.join(", ")}

  When answering:
  1. For questions about Ahmad Ma'sum, use the personal information provided above
  2. Be friendly, professional, and helpful
  3. If asked about projects, mention that you can see his work on this portfolio website
  4. For questions outside Ahmad's information, provide general helpful responses like a regular AI assistant
  5. Always respond in the same language the user asks in (Indonesian or English)
  6. Keep responses concise but informative

  If someone asks about contacting Ahmad, direct them to the contact page on this website.`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      console.error("Gemini API: Missing GEMINI_API_KEY environment variable");
      return NextResponse.json(
        { error: "Gemini API key not configured", details: "Missing required environment variables" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${SYSTEM_PROMPT}\n\nUser question: ${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("Invalid response from Gemini API");
    }

    const aiResponse = data.candidates[0].content.parts[0].text;

    return NextResponse.json({
      message: aiResponse,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate response",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
