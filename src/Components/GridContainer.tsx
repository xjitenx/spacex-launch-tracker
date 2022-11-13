import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Launch, Launches } from '../Types/Lunches';
import GridFilters from './GridFilters';
import Grid from './Grid';

const GridContainer: React.FC = () => {
  const [launches, setLaunches] = useState<Launches>([]);

  const [filteredLaunches, setFilteredLaunches] = useState<Launches>([]);

  const [periodFilter, setPeriodFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const getLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v3/launches');
    const data: Launches = await res.json();
    return data;
  };

  useEffect(() => {
    getLaunches().then((launches: Launches) => setLaunches(launches));
  }, []);

  useEffect(() => {
    let filteredLaunches_Temp: Launches = [];
    if (periodFilter === 'All' && statusFilter === 'All') {
      filteredLaunches_Temp = launches;
    } else {
      filteredLaunches_Temp = launches.filter((launch: Launch) => launch.flight_number < 50);
    }
    setFilteredLaunches(filteredLaunches_Temp);
  }, [launches, periodFilter, statusFilter]);

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      height='100%'
      width='70%'
    >
      <GridFilters
        setPeriodFilter={setPeriodFilter}
        setStatusFilter={setStatusFilter}
      />
      <Grid rows={filteredLaunches} />
    </Stack>
  );
};

export default GridContainer;
