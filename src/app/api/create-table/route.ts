import { PokerDataResponse } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Get poker table data in create mode from an id
 * @param request 
 * @returns 
 */
export async function GET(request: NextRequest) {
    try {
        const cookieStore = request.cookies;
        const tableId = (await cookieStore).get('poker_table_id')?.value;
        const authToken = (await cookieStore).get('auth_token')?.value;

        if (!authToken) {
            return NextResponse.json({ error: `Unauthorized` }, { status: 401 });
        } 
        
        if (!tableId) {
            return NextResponse.json({ error: `No table ID provided` }, { status: 400 });
        }

        const apiKeyValue = process.env.NEXT_EXTERNAL_POKER_API_KEY;
        if (!apiKeyValue) {
            console.error("EXTERNAL_POKER_API_KEY is undefined!");
            return NextResponse.json({ error: `BFF Configuration Error` }, { status: 500 });
        }
        const response = await fetch(`${process.env.NEXT_API_BASE_URL}/poker/table`, {
            method: 'GET',
            headers: {
                'x-api-key': apiKeyValue,
                'Authorization': `Bearer ${authToken}`
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

/**
 * Call mychips BFF to create a poker table in the external mychips api
 * 
 * @param request 
 * @returns 
 */
export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const cookies = request.cookies;
        const apiKeyValue = process.env.NEXT_EXTERNAL_POKER_API_KEY;

      if (!apiKeyValue) {
        // Detta borde hanteras i din inledande konfiguration, men är en bra fallback
        console.error("EXTERNAL_POKER_API_KEY is not defined in .env!");
        return NextResponse.json({ error: `BFF Configuration Error` }, { status: 500 });

      }
        const response = await fetch(`${process.env.NEXT_API_BASE_URL}/poker/table`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKeyValue,
            },
            body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
            throw new Error(`Failed to create table: ${response.status}`);
        }
        const responseData = await response.json() as PokerDataResponse; 
        cookies.set('poker_table_id', responseData.pokerTable.invitationId);
        cookies.set('auth_token', responseData.auth.token);

        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
} 