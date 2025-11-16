'use client'

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React, { useState } from 'react';

const CreateTable = () => {
  const [alias, setAlias] = useState('');
  const [playersJoined, setPlayersJoined] = useState(0);
  const invitationId = 'invitationId';
  const handleAliasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlias(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to handle form submission and generate invitationId
    const invitationId = generateInvitationId();
    // Redirect to /join-table with the invitationId
    window.location.href = `/join-table:${invitationId}`;
  };

  const generateInvitationId = () => {
    // Logic to generate a unique invitationId
    // ...
    return 'invitationId';
  };

  const handleCreateTable = () => {
    // Logic to create a table
    // ...
  };

  return (
    <div className="flex flex-col p-4 items-center">
      <Card className="p-4 flex flex-col items-center gap-4">
        <form onSubmit={handleFormSubmit}>
        <label>
          Alias:
          <input type="text" value={alias} onChange={handleAliasChange} />
        </label>
        <button type="submit">Create Table</button>
      </form>
      <div>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?data=/join:${invitationId}`} alt="QR Code" />
      </div>
      <p>{playersJoined} players have joined the table.</p>
      <Button onClick={handleCreateTable}>Create a Table</Button>
      </Card>
    </div>
  );
};

export default CreateTable;
