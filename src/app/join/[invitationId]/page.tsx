'use client'

import React, { useEffect, useState } from 'react';
import ReduxWrapper from '@/components/rexux-wrapper';
const JoinInvitation: React.FC<{ params: any }> = ({ params }) => {
  const { invitationId } = params;

  return <React.Fragment>
      <ReduxWrapper>
        <p>Id: {invitationId}</p>
      </ReduxWrapper>
    </React.Fragment>;
};

// TODO: Set up serviceworker connection to the table, and then redirect to the table lobby

export default JoinInvitation;
