import React, { useState } from 'react';
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

type GridFilterProps = {
  setPeriodFilter: Function;
  setStatusFilter: Function;
};

const GridFilters: React.FC<GridFilterProps> = ({
  setPeriodFilter: setParentPeriodFilter,
  setStatusFilter: setParentStatusFilter,
}) => {
  const [periodFilter, setPeriodFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const handlePeriodFilterChange = (event: SelectChangeEvent) => {
    setPeriodFilter(event.target.value);
    setParentPeriodFilter(event.target.value);
  };

  const handleStatusFilterChange = (event: SelectChangeEvent) => {
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
            <MenuItem value='All'>All</MenuItem>
            <MenuItem value='6Month'>Past 6 Month</MenuItem>
            <MenuItem value='1Year'>Past 1 Year</MenuItem>
            <MenuItem value='3Year'>Past 3 Year</MenuItem>
            <MenuItem value='5Year'>Past 5 Year</MenuItem>
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
