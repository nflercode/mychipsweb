'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { InvitationId } from '@/types';
import { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import { toast } from 'sonner';

const handleFormSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  // Handle form submission logic here
};

const handleAliasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // Handle alias change logic here
};

const handleCreateTable = () => {
  // Handle create table logic here
};

export function CreateGameFormLoading() {
  return (
    <>
        <Skeleton className="w-[256px] h-[256px]" />
        <Skeleton className="pt-6 w-[128px] h-[32px]" />
        <Skeleton className="pt-4 w-[256px] h-[24px]" />
        <Skeleton className="pt-6 w-[128px] h-[32px]" />
      </>
  );
}

export function CreateGameForm({invitationId}: { invitationId?: InvitationId }) {
  const [alias, setAlias] = useState('');
  const [joinLink, setJoinLink] = useState('');

  if(!invitationId) {
    return <CreateGameFormLoading />;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin;
      setJoinLink(`${origin}/join/${invitationId}`);
    }
  }, [invitationId]);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Label>
          Alias:
          <Input type="text" value={alias} onChange={e => setAlias(e.target.value)} />
        </Label>
      </form>
        <QRCodeDisplay joinLink={joinLink} />
        <Button variant="outline" onClick={() => {
          navigator.clipboard.writeText(joinLink)
          toast.success('Link copied to clipboard!');
        }}>Copy link</Button>
        <PlayersJoined />
        <CreateGameButton />
    </>
  );
}

export function QRCodeDisplay({ joinLink }: { joinLink: string }) {
  return <QRCode value={joinLink} />;
}

export function CreateGameButton({}) {
  return <Button onClick={handleCreateTable}>Create a Table</Button>;
}

export function PlayersJoined() {
  const [playersJoined, setPlayersJoined] = useState(0);

  return <p>{playersJoined} players have joined the table.</p>;
}