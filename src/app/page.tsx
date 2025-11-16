import Hero from '@/components/hero/hero';
import {Logotype} from '@/components/logotype/logotype';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
export default function Home({}: {} ) {
  return (
    <div className="flex flex-col p-4 items-center">
      <Card className="p-4 flex flex-col items-center gap-4">
        <h1><Logotype /></h1>
        <a href="/create-table">
          <Button className=''>Create table</Button>
        </a>
      </Card>
    </div>
  );
}

