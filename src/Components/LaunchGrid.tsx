import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { Launch, Launches } from '../Types/Lunches';
import columnDefs from './GridColDefs';
import { LaunchDialog } from './LaunchDialog';

type LaunchGridProps = {
  rows: Launches;
  loadingLaunches: boolean;
  filterApplied: boolean;
};

const LaunchGrid: React.FC<LaunchGridProps> = ({
  rows,
  loadingLaunches,
  filterApplied,
}) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [currentLaunch, setCurrentLaunch] = useState<Launch>(rows[0]);

  const rowClickedEvent: GridEventListener<'rowClick'> = (params) => {
    setCurrentLaunch(params.row);
    setDialogOpen(true);
  };

  return (
    <Box width='100%'>
      <DataGrid
        rows={rows}
        columns={columnDefs}
        pageSize={12}
        autoHeight
        getRowId={(row) => row.flight_number}
        onRowClick={rowClickedEvent}
        disableSelectionOnClick
        loading={loadingLaunches}
        sx={{
          '& > .MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'rgba(224, 224, 224, 0.368)',
          },
          '& .MuiDataGrid-cell': {
            border: 'none',
          },
        }}
        components={{
          NoRowsOverlay: () => (
            <Stack height='100%' alignItems='center' sx={{ marginTop: '60px' }}>
              {filterApplied
                ? 'No results found for the specified filter'
                : 'No rows in DataGrid'}
            </Stack>
          ),
          NoResultsOverlay: () => (
            <Stack height='100%' alignItems='center' sx={{ marginTop: '60px' }}>
              No results found for the specified filter
            </Stack>
          ),
        }}
      />
      <LaunchDialog
        launch={currentLaunch}
        open={dialogOpen}
        closeEvent={setDialogOpen}
      />
    </Box>
  );
};

export default LaunchGrid;
