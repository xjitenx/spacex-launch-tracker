import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';

type GridFilterProps = {
  setPeriodFilter: Function;
  setStatusFilter: Function;
};

const GridFilters: React.FC<GridFilterProps> = ({
  setPeriodFilter: setParentPeriodFilter,
  setStatusFilter: setParentStatusFilter,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [periodFilter, setPeriodFilter] = useState<any>('All');
  const [statusFilter, setStatusFilter] = useState<any>('All');

  useEffect(() => {
    if (searchParams.has('periodFilter')) {
      setPeriodFilter(searchParams.get('periodFilter'));
      setParentPeriodFilter(searchParams.get('periodFilter'));
    }
    if (searchParams.has('statusFilter')) {
      setStatusFilter(searchParams.get('statusFilter'));
      setParentStatusFilter(searchParams.get('statusFilter'));
    }
  }, []);

  const setParamsEvent = (key: string, value: string) => {
    setSearchParams((): any => {
      const otherKey = key === 'statusFilter' ? 'periodFilter' : 'statusFilter';
      if (searchParams.has(otherKey)) {
        if (value === 'All') {
          return { [otherKey]: searchParams.get(otherKey) };
        }
        return { [otherKey]: searchParams.get(otherKey), [key]: value };
      } else {
        if (value === 'All') {
          return {};
        }
        return { [key]: value };
      }
    });
  };

  const handlePeriodFilterChange = (event: SelectChangeEvent) => {
    setParamsEvent('periodFilter', event.target.value);
    setPeriodFilter(event.target.value);
    setParentPeriodFilter(event.target.value);
  };

  const handleStatusFilterChange = (event: SelectChangeEvent) => {
    setParamsEvent('statusFilter', event.target.value);
    setStatusFilter(event.target.value);
    setParentStatusFilter(event.target.value);
  };

  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      width='100%'
      marginTop='50px'
      marginBottom='50px'
    >
      <Stack direction='row' alignItems='center'>
        <CalendarTodayOutlinedIcon
          sx={{ height: 16, width: 16, marginRight: '10px', marginTop: '-5px' }}
        />
        <FormControl variant='standard' sx={{ width: 200 }}>
          <Select
            value={periodFilter}
            onChange={handlePeriodFilterChange}
            disableUnderline
            IconComponent={KeyboardArrowDownIcon}
            sx={{ fontWeight: 500 }}
          >
            <MenuItem value='6UM'>Upcoming 6 Months</MenuItem>
            <MenuItem value='6UY'>Upcoming 1 Year</MenuItem>
            <MenuItem value='All'>All</MenuItem>
            <MenuItem value='6PM'>Past 6 Months</MenuItem>
            <MenuItem value='6PY'>Past 1 Year</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center'>
        <FilterAltOutlinedIcon
          sx={{ height: 20, width: 20, marginRight: '10px', marginTop: '-5px' }}
        />
        <FormControl variant='standard' sx={{ minWidth: 200 }}>
          <Select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            disableUnderline
            IconComponent={KeyboardArrowDownIcon}
            sx={{ fontWeight: 500 }}
          >
            <MenuItem value='All'>All</MenuItem>
            <MenuItem value='Failed'>Failed</MenuItem>
            <MenuItem value='Success'>Success</MenuItem>
            <MenuItem value='Upcoming'>Upcoming</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default GridFilters;
