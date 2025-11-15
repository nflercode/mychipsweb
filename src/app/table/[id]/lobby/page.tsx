'use client'

import React, { useEffect, useState } from 'react';

const Lobby: React.FC<{ params: any }> = ({ params }) => {
  const { id } = params;
  const [playersReady, setPlayersReady] = useState(0);

  const handleReadyUp = () => {
    // TODO: Implement ready up logic
  };

  return (
    <React.Fragment>
      <p>Id: {id}</p>
      <p>Players Ready: {playersReady}</p>
      <button onClick={handleReadyUp}>Ready Up</button>
    </React.Fragment>
  );
};
    
export default Lobby;
