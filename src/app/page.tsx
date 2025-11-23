import {Logotype} from '@/components/logotype/logotype';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
export default function Home({}: {} ) {
  return (
    <div className="flex flex-col p-4 items-center mt-4">
      <Card className="p-4 flex flex-col items-center gap-4 w-[300px]">
        <h1><Logotype /></h1>
        <h2 className='text-xl mt-4'>How it works</h2>
        <ul className='list-decimal pl-5 space-y-2'>
          <li>Create a table with one click</li> 
          <li>Invite your friends with the invitation link</li>
          <li>Start playing poker and keep track of chips</li>
        </ul>
        <a href="/create-table">
          <Button className=''>Create table</Button>
        </a>
      </Card>
    </div>
  );
}

