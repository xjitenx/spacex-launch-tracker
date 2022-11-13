import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { Launch, Launches } from '../Types/Lunches';
import columnDefs from './GridColDefs';
import { LaunchDialog } from './LaunchDialog';

type LaunchGridProps = {
  rows: Launches;
};

const LaunchGrid: React.FC<LaunchGridProps> = ({ rows }) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [currentLaunch, setCurrentLaunch] = useState<Launch>(rows[0]);

  const rowClickedEvent: GridEventListener<'rowClick'> = (params) => {
    setCurrentLaunch(params.row);
    setDialogOpen(true);
  };

  return (
    <Box height='100%' width='100%'>
      <DataGrid
        rows={rows}
        columns={columnDefs}
        pageSize={12}
        getRowId={(row) => row.flight_number}
        onRowClick={rowClickedEvent}
        disableSelectionOnClick
        sx={{
          '& > .MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
          '& .MuiDataGrid-columnHeaders': {
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
      <LaunchDialog launch={currentLaunch} open={dialogOpen} closeEvent={setDialogOpen} />
    </Box>
  );
};

export default LaunchGrid;
