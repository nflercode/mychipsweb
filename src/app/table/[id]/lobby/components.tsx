'use client';

import { Button } from '@/components/ui/button';

export const StartGameButton: React.FC<{ invitationId: string }> = ({ invitationId }) => {
  const handleStartGame = () => {
    console.log(`Starting game for invitation ID: ${invitationId}`);
  };

  return (
    <Button className="col-span-3 mt-4" onClick={handleStartGame}>Start game</Button>
  );
};