'use client'

import React, { useEffect, useState } from 'react';

const Table: React.FC<{ params: any }> = ({ params }) => {
  const { id } = params;

  return <React.Fragment>
    <p>Id: {id}</p>
    </React.Fragment>;
};

export default Table;
