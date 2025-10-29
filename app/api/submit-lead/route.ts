import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/schemas/lead-form-schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = leadFormSchema.parse(body);

    // TODO: In production, integrate with:
    // - Email service (SendGrid, Resend, etc.)
    // - CRM (Salesforce, HubSpot, etc.)
    // - Database storage
    // - SMS notifications for urgent requests

    // For now, log the submission (in production, send email/save to DB)
    console.log("Lead submission received:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending (replace with actual email service)
    const emailContent = `
New Lead Submission - JW ProBuild

Property Details:
- Address: ${validatedData.propertyAddress}
- Type: ${validatedData.propertyType}
- Size: ${validatedData.propertySize} units
- Inspection Deadline: ${validatedData.inspectionDeadline}

Repairs Needed:
${validatedData.repairTypes.join(", ")}

Situation:
${validatedData.currentSituation}

Contact Information:
- Name: ${validatedData.name}
- Email: ${validatedData.email}
- Phone: ${validatedData.phone}

Urgency: ${validatedData.isUrgent ? "URGENT - Deadline Approaching!" : "Standard"}

Submitted at: ${new Date().toLocaleString()}
    `;

    console.log(emailContent);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted successfully",
        leadId: `LEAD-${Date.now()}`, // Generate a temporary ID
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead submission:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, error: "Invalid form data", details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
