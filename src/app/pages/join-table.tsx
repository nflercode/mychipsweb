import React, { useState } from 'react';

const JoinTable: React.FC = () => {
  const [alias, setAlias] = useState('');
  const [numUsers, setNumUsers] = useState(0);

  const handleAliasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlias(event.target.value);
  };

  const handleCreateTable = () => {
    // Logic to create the table
  };

  return (
    <div>
      <input type="text" value={alias} onChange={handleAliasChange} placeholder="Enter your alias" />
      <img src="qr-code.png" alt="QR Code" />
      <p>{numUsers} users have joined the table</p>
      <button disabled onClick={handleCreateTable}>Create Table</button>
    </div>
  );
};

export default JoinTable;
