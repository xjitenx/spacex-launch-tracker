import React from 'react';
import { Stack } from '@mui/system';
import GridContainer from './Components/GridContainer';
import TopBar from './Components/TopBar';

const App: React.FC = () => {
  return (
    <Stack
      height='100vh'
      width='100vw'
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <TopBar />
      <GridContainer />
    </Stack>
  );
};

export default App;
