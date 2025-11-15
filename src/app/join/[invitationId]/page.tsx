'use client'

import React, { useEffect, useState } from 'react';
const JoinInvitation: React.FC<{ params: any }> = ({ params }) => {
  const { invitationId } = params;

  return <React.Fragment>
      <p>Id: {invitationId}</p>
    </React.Fragment>;
};

// TODO: Set up serviceworker connection to the table, and then redirect to the table lobby

export default JoinInvitation;
