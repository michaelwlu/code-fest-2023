import React from 'react';
import { useDebateContext } from './DebateContext';
import { Box } from '@mui/material';

const Title = () => {
  const { debateStarted } = useDebateContext();
  return (
    !debateStarted && (
      <Box mt={2} ml={2}>
        <h1 style={{ color: 'white' }}>Epic Debate Battles</h1>
      </Box>
    )
  );
};

export default Title;
