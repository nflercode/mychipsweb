import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { createTable } from '@/services/create-table';
import { getTable } from '@/services/join';
import Link from 'next/dist/client/link';
import { notFound, redirect } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ invitationId: string }>
}) {    
  const { invitationId } = await params;
  let tableData;


  if(!invitationId) {
    notFound();
  }

  try {
      tableData = await getTable({ invitationId });
      redirect(`/table/${tableData.id}`);
    } catch (error) {
      console.error("Serverside Error:", error);

      return (
        <div className="flex flex-col p-4 items-center">
          <Card className="p-4 flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold mb-4 text-left">Invalid invitation</h1>
            <div className="mb-4 ">The invitation link is invalid or has expired.</div>
            <Link href="/">
              <Button >Go back to home</Button>
            </Link>
          </Card>
        </div>
      );
    }

  return (
    <div className="flex flex-col p-4 items-center">
      <Card className="p-4 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold mb-4 text-left">Verifying invitation..</h1>
        <Skeleton className="h-6 w-48 mb-2" />
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-6 w-64 mb-2" />
      </Card>
    </div>);
};
