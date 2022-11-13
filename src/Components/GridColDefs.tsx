import { Chip } from '@mui/material';
import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import { LaunchStatus } from '../Types/Types';
import { LAUNCH_STATUS_CHIP_COLORS } from '../Lib/Constants';
import { getLaunchStatusValue } from '../Lib/Functions';

const columnDefs: GridColDef[] = [
  {
    field: 'flight_number',
    headerName: 'No:',
    width: 80,
    headerClassName: 'lastcolumnSeparator',
  },
  {
    field: 'launch_date_utc',
    headerName: 'Launched (UTC)',
    flex: 2,
    headerClassName: 'lastcolumnSeparator',
  },
  {
    field: 'location',
    headerName: 'Location',
    flex: 2,
    headerClassName: 'lastcolumnSeparator',
    valueGetter: (params: GridValueGetterParams) =>
      params.row.launch_site.site_name,
  },
  {
    field: 'mission_name',
    headerName: 'Mission',
    flex: 2,
    headerClassName: 'lastcolumnSeparator',
  },
  {
    field: 'orbit',
    headerName: 'Orbit',
    sortable: false,
    flex: 1,
    headerClassName: 'lastcolumnSeparator',
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
    headerClassName: 'lastcolumnSeparator',
    valueGetter: (params: GridValueGetterParams) =>
      getLaunchStatusValue(params.row),
    renderCell: (params: GridRenderCellParams) => {
      const value: LaunchStatus = params.value;
      return (
        <Chip
          label={value}
          size='small'
          sx={{
            backgroundColor: LAUNCH_STATUS_CHIP_COLORS[value].backgroundColor,
            color: LAUNCH_STATUS_CHIP_COLORS[value].textColor,
            fontWeight: '500',
            paddingLeft: '5px',
            paddingRight: '5px',
            fontSize: '12px',
          }}
        />
      );
    },
  },
  {
    field: 'rocket',
    headerName: 'Rocket',
    sortable: false,
    flex: 2,
    headerClassName: 'lastcolumnSeparator',
    valueGetter: (params: GridValueGetterParams) =>
      params.row.rocket.rocket_name,
  },
];

export default columnDefs;
