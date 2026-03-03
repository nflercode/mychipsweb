import { NextRequest, NextResponse } from "next/server";

/**
 * Join poker table via invitationId (BFF POST)
 * Expects JSON body: { invitationId: string }
 */
export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const invitationId = data?.invitationId;
        if (!invitationId) {
            return NextResponse.json({ error: `No invitationId provided` }, { status: 400 });
        }

        const apiKeyValue = process.env.NEXT_EXTERNAL_POKER_API_KEY;
        if (!apiKeyValue) {
            console.error("EXTERNAL_POKER_API_KEY is undefined!");
            return NextResponse.json({ error: `BFF Configuration Error` }, { status: 500 });
        }

        const response = await fetch(`${process.env.NEXT_API_BASE_URL}/poker/join/${invitationId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKeyValue
            },
            body: JSON.stringify({ alias: data?.alias })
        });

        if (!response.ok) {
            let responseData;
            let bodyText;
            try {
                bodyText = await response.text();
                responseData = JSON.parse(bodyText);
            } catch (parseError) {
                responseData = bodyText;
            }
            console.error("Join API Error - Status:", response.status);
            console.error("Join API Error - Response:", responseData);
            console.error("Join API Error - Headers:", Object.fromEntries(response.headers));
            throw new Error(`Failed to fetch table: ${response.status}`);
        }
        const responseData = await response.json();
        console.log("Join response data:", responseData);
        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        console.error("Join endpoint error:", error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}