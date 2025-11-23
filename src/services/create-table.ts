export const createTable = async (tableData: any) => {

    const baseRoute = process.env.NEXT_APP_BASE_URL;
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
    
    return await response.json();
}

export const getTable = async () => {
    const baseRoute = process.env.NEXT_APP_BASE_URL;
    const response = await fetch(`${baseRoute}/api/create-table`, {
        method: 'GET',
    });

    if(!response.ok) {
        throw new Error(`Failed to get table: ${response.status}`);
    }
    return await response.json();
}