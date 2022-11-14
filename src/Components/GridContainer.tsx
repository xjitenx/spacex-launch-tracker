import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Launch, Launches } from '../Types/Lunches';
import {
  filterLaunchesByPeriod,
  filterLaunchesByStatus,
} from '../Lib/Functions';
import { getLaunches } from '../HttpClient/LaunchesHttpClient';
import GridFilters from './GridFilters';
import LaunchGrid from './LaunchGrid';

const GridContainer: React.FC = () => {
  const [launches, setLaunches] = useState<Launches>([]);
  const [loadingLaunches, setLoadingLaunches] = useState<boolean>(false);

  const [filteredLaunches, setFilteredLaunches] = useState<Launches>([]);

  const [periodFilter, setPeriodFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    setLoadingLaunches(true);
    getLaunches()
      .then((launches: Launches) => {
        setLoadingLaunches(false);
        setLaunches(launches);
      })
      .catch(() => setLoadingLaunches(false));
  }, []);

  useEffect(() => {
    let filteredLaunches_Temp: Launches = [];
    if (periodFilter === 'All' && statusFilter === 'All') {
      filteredLaunches_Temp = launches;
    } else {
      filteredLaunches_Temp = launches.filter((launch: Launch) => {
        if (periodFilter !== 'All' && statusFilter !== 'All') {
          return (
            filterLaunchesByStatus(launch, statusFilter) &&
            filterLaunchesByPeriod(launch, periodFilter)
          );
        } else if (periodFilter !== 'All') {
          return filterLaunchesByPeriod(launch, periodFilter);
        } else if (statusFilter !== 'All') {
          return filterLaunchesByStatus(launch, statusFilter);
        }
        return true;
      });
    }
    setFilteredLaunches(filteredLaunches_Temp);
  }, [launches, periodFilter, statusFilter]);

  return (
    <Stack
      direction='column'
      alignItems='center'
      height='100%'
      width='70%'
    >
      {!loadingLaunches && (
        <GridFilters
          setPeriodFilter={setPeriodFilter}
          setStatusFilter={setStatusFilter}
        />
      )}
      <LaunchGrid rows={filteredLaunches} loadingLaunches={loadingLaunches} filterApplied={launches.length !== filteredLaunches.length} />
    </Stack>
  );
};

export default GridContainer;
