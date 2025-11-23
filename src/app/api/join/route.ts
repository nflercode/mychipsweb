import { NextRequest, NextResponse } from "next/server";

/**
 * Get poker table data in create mode from an invitationId
 * @param request 
 * @returns 
 */
export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        const invitationId = url.searchParams.get('invitationId');
        if (!invitationId) {
            return NextResponse.json({ error: `No invitationId provided` }, { status: 400 });
        }

        const apiKeyValue = process.env.NEXT_EXTERNAL_POKER_API_KEY;
        if (!apiKeyValue) {
            console.error("EXTERNAL_POKER_API_KEY is undefined!");
            return NextResponse.json({ error: `BFF Configuration Error` }, { status: 500 });
        }
        const response = await fetch(`${process.env.NEXT_API_BASE_URL}/poker/table?id=${invitationId}`, { // TODO: change to correct path
            method: 'GET',
            headers: {
                'x-api-key': apiKeyValue
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch table: ${response.status}`);
        }
        const responseData = await response.json();

        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}