import React from 'react';
import { Stack } from '@mui/system';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/spacex' />} />
          <Route path='/spacex' element={<GridContainer />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  );
};

export default App;
