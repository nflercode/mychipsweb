export const getTable = async ({ invitationId }: { invitationId: string }) => {
    const baseRoute = process.env.NEXT_APP_BASE_URL;
    const response = await fetch(`${baseRoute}/api/join?invitationId=${invitationId}`, {
        method: 'GET',
    });

    if(!response.ok) {
        throw new Error(`Failed to get table: ${response.status}`);
    }

    return response.json();
};