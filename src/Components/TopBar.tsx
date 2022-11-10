import React from 'react';
import { Stack } from '@mui/system';
import spacexLogo from '../Assets/Logos/spacexLogo.png';

const TopBar: React.FC = () => {
  return (
    <Stack
      alignItems='center'
      justifyContent='space-between'
      sx={{ 'borderBottom': '2px solid #e6e6e6', 'paddingTop': '10px', 'paddingBottom': '10px' }}
    >
      <img src={spacexLogo} alt='spacex-logo' height='50px' width='300px' />
    </Stack>
  );
};

export default TopBar;
