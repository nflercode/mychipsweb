export const getTable = async ({ invitationId, alias }: { invitationId: string, alias: string }) => {
    const baseRoute = process.env.NEXT_APP_BASE_URL;
    const response = await fetch(`${baseRoute}/api/join`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ invitationId, alias }),
    });

    if(!response.ok) {
        throw new Error(`Failed to get table: ${response.status}`);
    }

    return response.json();
};