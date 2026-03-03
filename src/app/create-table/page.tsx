// TODO: make page serverside, but forms and other parts serverside compatible
// Investigate if the invitationId can be generated server side and passed to the client
// and be certain that users cant manipulate the table by going to /create-table

import { Card } from '@/components/ui/card';
import { CreateGameForm } from './components';
import type {InvitationId, PokerDataResponse} from '@/types';
import { cookies } from 'next/headers';
import { getTable, createTable } from '@/services/create-table';
import { redirect } from 'next/navigation';
import Table from '@/types/table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CreateTable = async () => {
  let invitationId: InvitationId | undefined = undefined;
  
  const cookieStore = cookies();
  const existingTableId = (await cookieStore).get('poker_table_id')?.value;

  let tableData: PokerDataResponse;
  try {
    if (existingTableId) {
      tableData = await getTable();
      invitationId = tableData.pokerTable.invitationId;
     // if (tableData.myRole !== 'host') {
     //   redirect(`/table/${existingTableId}`);
     // }
    } else {
      tableData = await createTable({ alias: "Host" });
      console.log("Created table data:", tableData);
    }
  } catch (error) {
    console.error("Serverside Error:", error);

    return (
      <div className="flex flex-col p-4 items-center">
        <Card className="p-4 flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold mb-4 text-left">Create table</h1>
          <div className="mb-4 ">An error occurred while creating or fetching the table. Please try again later.</div>
          <Link href="/">
            <Button>Go back to home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 items-center">
      <Card className="p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold mb-4 text-left">Create table</h1>
        <CreateGameForm invitationId={tableData.pokerTable.invitationId} />
      </Card>
      <Card className="p-4 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold mb-4 text-left">You have joined the table! [debugging]</h1>
        <ul>
          <li><strong>Invitation ID:</strong> {tableData.pokerTable.invitationId}</li>
          <li><strong>Players:</strong> {tableData.game.players.map(p => p.alias).join(', ')}</li>
        </ul>
      </Card>
    </div>
  );
};

export default CreateTable;
