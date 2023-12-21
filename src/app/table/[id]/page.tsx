'use client'

import ReduxWrapper from '@/components/rexux-wrapper';
import React, { useEffect, useState } from 'react';

const Table: React.FC<{ params: any }> = ({ params }) => {
  const { id } = params;

  return <React.Fragment>
    <ReduxWrapper>
      <p>Id: {id}</p>
    </ReduxWrapper>
    </React.Fragment>;
};

export default Table;
