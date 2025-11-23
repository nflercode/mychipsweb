// TODO: make page serverside, but forms and other parts serverside compatible
// Investigate if the invitationId can be generated server side and passed to the client
// and be certain that users cant manipulate the table by going to /create-table

import { Card } from '@/components/ui/card';
import { CreateGameForm, CreateGameFormLoading } from './components';
import type {InvitationId} from '@/types';
import { cookies } from 'next/headers';
import { getTable, createTable } from '@/services/create-table';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import Table from '@/types/table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CreateTable = async () => {
  let invitationId: InvitationId | undefined = undefined;
  
  const cookieStore = cookies();
  const existingTableId = (await cookieStore).get('poker_table_id')?.value;

  let tableData: Table;
  try {
    if (existingTableId) {
      tableData = await getTable();
      invitationId = tableData.invitationId;
      if (tableData.myRole !== 'host') {
        redirect(`/table/${existingTableId}`);
      }
    } else {
      tableData = await createTable({ /* table data here */ });
    }
  } catch (error) {
    console.error("Serverside Error:", error);

    //toast.warning('An error occurred while creating or fetching the table. Please try again later.');

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
// if (existingTableId) {
 //    getTable().then(data => {
 //      console.log("Tabledata:", data);
 //      if(data.player_role !== 'host') {
 //        if (typeof window !== 'undefined') {
 //          redirect(`/table/${existingTableId}`);
 //        }

 //        invitationId = data.invitation_id;
 //      }
 //    }).catch(error => {
 //      console.error("Error fetching table:", error);
 //      isErrored = true;
 //    });
 //  } else {
 //      await createTable({ /* table data here */ }).then(async data => {
 //        console.log("Created table:", data);
 //        invitationId = data.invitation_id;
 //      }).catch(error => {
 //          console.error("Error creating table:", error);
 //          isErrored = true;
 //      });
 //  }

  return (
    <div className="flex flex-col p-4 items-center">
      <Card className="p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold mb-4 text-left">Create table</h1>
        <CreateGameForm invitationId={invitationId} />
      </Card>
    </div>
  );
};

export default CreateTable;
