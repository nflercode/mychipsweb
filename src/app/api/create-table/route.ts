import { NextRequest } from 'next/server';

/**
 * Call mychips BFF to create a poker table in the external mychips api
 * 
 * @param request 
 * @returns 
 */
export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const apiKeyValue = process.env.EXTERNAL_POKER_API_KEY;

      if (!apiKeyValue) {
        // Detta borde hanteras i din inledande konfiguration, men är en bra fallback
        console.error("EXTERNAL_POKER_API_KEY är odefinierad!");
        return new Response(`Error: BFF Configuration Error`, { status: 500 });

      }
        const response = await fetch(`${process.env.NEXT_API_BASE_URL}/poker/table`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKeyValue
            },
            body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
            throw new Error(`Failed to create table: ${response.status}`);
        }
        const responseData = await response.json();
        return new Response(JSON.stringify(responseData), { status: 200 });
    } catch (error) {
        return new Response(`Error: ${(error as Error).message}`, { status: 500 });
    }
} 