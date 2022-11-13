import React from 'react';
import { Stack, Box, Chip } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import { Launches } from '../Types/Lunches';
import { LaunchStatus } from '../Types/Types';

type GridProps = {
  rows: Launches;
};

const LAUNCH_STATUS_CHIP_COLORS = {
  Upcoming: {
    backgroundColor: '#fff3e0',
    textColor: '#e65100'
  },
  Success: {
    backgroundColor: '#e8f5e9',
    textColor: '#1b5e20'
  },
  Failed: {
    backgroundColor: '#ffebee',
    textColor: '#d50000'
  },
};

const columnDefs: GridColDef[] = [
  {
    field: 'flight_number',
    headerName: 'No:',
    width: 80,
    headerClassName: 'lastcolumnSeparator super-app-theme--header',
  },
  {
    field: 'launch_date_utc',
    headerName: 'Launched (UTC)',
    flex: 2,
    headerClassName: 'lastcolumnSeparator super-app-theme--header',
  },
  {
    field: 'location',
    headerName: 'Location',
    flex: 2,
    headerClassName: 'lastcolumnSeparator super-app-theme--header',
    valueGetter: (params: GridValueGetterParams) =>
      params.row.launch_site.site_name,
  },
  {
    field: 'mission_name',
    headerName: 'Mission',
    flex: 2,
    headerClassName: 'lastcolumnSeparator super-app-theme--header',
  },
  {
    field: 'orbit',
    headerName: 'Orbit',
    sortable: false,
    flex: 1,
    headerClassName: 'lastcolumnSeparator super-app-theme--header',
    valueGetter: (params: GridValueGetterParams) =>
      params.row?.rocket?.second_stage?.payloads[0].orbit,
  },
  {
    field: 'launch_success',
    headerName: 'Launch Status',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    hideSortIcons: true,
    headerClassName: 'lastcolumnSeparator super-app-theme--header',
    valueGetter: (params: GridValueGetterParams) =>
      params.row.launch_success === null
        ? 'Upcoming'
        : params.row.launch_success
        ? 'Success'
        : 'Failed',
    renderCell: (params: GridRenderCellParams) => {
      const value: LaunchStatus = params.value;
      return (
        <Chip
          label={value}
          size='small'
          sx={{ backgroundColor:  LAUNCH_STATUS_CHIP_COLORS[value].backgroundColor, color: LAUNCH_STATUS_CHIP_COLORS[value].textColor, fontWeight: '500' }}
        />
      );
    },
  },
  {
    field: 'rocket',
    headerName: 'Rocket',
    sortable: false,
    flex: 2,
    headerClassName: 'lastcolumnSeparator super-app-theme--header',
    valueGetter: (params: GridValueGetterParams) =>
      params.row.rocket.rocket_name,
  },
];

const Grid: React.FC<GridProps> = ({ rows }) => {
  return (
    <Box height='100%' width='100%'>
      <DataGrid
        rows={rows}
        columns={columnDefs}
        pageSize={12}
        getRowId={(row) => row.flight_number}
        sx={{
          '& > .MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
          '& .super-app-theme--header': {
            backgroundColor: 'rgba(224, 224, 224, 0.368)',
          },
        }}
        components={{
          NoRowsOverlay: () => (
            <Stack height='100%' alignItems='center' sx={{ marginTop: '60px' }}>
              No rows in DataGrid
            </Stack>
          ),
          NoResultsOverlay: () => (
            <Stack height='100%' alignItems='center' sx={{ marginTop: '60px' }}>
              No results found for the specified filter
            </Stack>
          ),
        }}
      />
    </Box>
  );
};

export default Grid;
