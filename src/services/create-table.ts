import { PokerDataResponse } from "@/types";

export const createTable = async (tableData: any) => {

    const baseRoute = process.env.NEXT_PUBLIC_APP_BASE_URL || '';
    const response = await fetch(`${baseRoute}/api/create-table`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tableData),
    });

    if(!response.ok) {
      throw new Error(`Failed to create table: ${response.status}`);
    }
    const serverresponse = await response.json() as PokerDataResponse;
    return serverresponse;
}

export const getTable = async () => {
    const baseRoute = process.env.NEXT_PUBLIC_APP_BASE_URL || '';
    const response = await fetch(`${baseRoute}/api/create-table`, {
        method: 'GET',
    });

    if(!response.ok) {
        throw new Error(`Failed to get table: ${response.status}`);
    }
    return await response.json();
}