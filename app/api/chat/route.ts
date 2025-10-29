import { NextRequest, NextResponse } from "next/server";
import { systemPrompt } from "@/lib/ai-system-prompt";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    // Validate OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY not configured");
      return NextResponse.json(
        {
          message:
            "Chat is temporarily unavailable. Please call us at (219) 344-8058 for immediate assistance.",
        },
        { status: 200 }
      );
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content ||
      "I'm having trouble responding right now. Please call (219) 344-8058 for immediate help.";

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        message:
          "I apologize, but I'm having trouble connecting right now. For immediate assistance with your inspection repairs, please call us at (219) 344-8058. We're available 24/7 for emergencies.",
      },
      { status: 200 }
    );
  }
}
