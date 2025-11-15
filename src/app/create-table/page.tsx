'use client'

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
    <div>
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
      <button onClick={handleCreateTable}>Create a Table</button>
    </div>
  );
};

export default CreateTable;
