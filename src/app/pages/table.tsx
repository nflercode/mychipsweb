import React from 'react';

interface TableProps {
  players: string[];
}

const Table: React.FC<TableProps> = ({ players }) => {
  return (
    <div className="table">
      <h1>Poker Table</h1>
      <div className="players">
        {players.map((player, index) => (
          <div key={index} className="player">
            {player}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
