// TODO: make page serverside, but forms and other parts serverside compatible
// Investigate if the invitationId can be generated server side and passed to the client
// and be certain that users cant manipulate the table by going to /create-table

import { Card } from '@/components/ui/card';
import { CreateGameForm, PlayersJoined, QRCodeDisplay } from './components';
import type {InvitationId} from '@/types';

const CreateTable = () => {
  const invitationId = 'invitationId' as InvitationId; // TODO: placeholder

  return (
    <div className="flex flex-col p-4 items-center">
      <Card className="p-4 flex flex-col items-center gap-4">
        <CreateGameForm invitationId={invitationId} />
      </Card>
    </div>
  );
};

export default CreateTable;
