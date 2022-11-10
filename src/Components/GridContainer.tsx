import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import GridFilters from './GridFilters';
import Grid from './Grid';
import { Launches } from '../Types/Lunches';
import { PeriodFilter, StatusFilter, StatusFilters } from '../Types/Filters';

const statusFilters: StatusFilters = [
  'All',
  'Upcoming',
  'Successful',
  'Failed',
];

const GridContainer: React.FC = () => {
  const [launches, setLaunches] = useState<Launches>([]);

  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');

  const getLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v3/launches');
    const data: Launches = await res.json();
    return data;
  };

  useEffect(() => {
    getLaunches().then((launches: Launches) => setLaunches(launches));
  }, []);

  return (
    <Stack>
      <GridFilters />
      <Grid launches={launches} />
    </Stack>
  );
};

export default GridContainer;
