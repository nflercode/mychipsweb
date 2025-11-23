import { Card } from '@/components/ui/card';
import { StartGameButton } from './components';

const JoinInvitation: React.FC<{ params: any }> = ({ params }) => {
  const { invitationId } = params;
  const PlayersJoined = 1; // Placeholder for actual joined players count, connect with socket
  
  // TODO: fetch the table, get the players and my role (host/player/spectator)
  // Set up socket connection to listen for players joining and on start game event
  // If start event received, redirect to the table

  return (
    <div className="flex flex-col p-4 items-center">
      <Card className="p-4 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold mb-4 text-left">Lobby</h1>
        <p>{PlayersJoined} players joined</p>

        <div className="grid grid-cols-3 items-center">
          <div className="flex flex-col items-center p-2">
            <img src="/player.png" />
            <p>Player 1</p>
          </div>
          <div className="flex flex-col items-center p-2">
            <img src="/player.png" />
            <p>Player 2</p>
          </div>
          <div className="flex flex-col items-center p-2">
            <img src="/player.png" />
            <p>Player 3</p>
          </div>
          <div className="flex flex-col items-center p-2">
            <img src="/player.png" />
            <p>Player 4</p>
          </div>
          <div className="flex flex-col items-center p-2">
            <img src="/player.png" />
            <p>Player 5</p>
          </div>
          <div className="flex flex-col items-center p-2">
            <img src="/player.png" />
            <p>Player 6</p>
          </div>
          {/* if current role is host, show button */}
          <StartGameButton invitationId={invitationId} />
        </div>
      </Card>
    </div>);
};

// TODO: Set up serviceworker connection to the table, and then redirect to the table lobby

export default JoinInvitation;
