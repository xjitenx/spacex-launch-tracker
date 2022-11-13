export const LAUNCH_STATUS_CHIP_COLORS = {
  Upcoming: {
    backgroundColor: '#fff3e0',
    textColor: '#e65100',
  },
  Success: {
    backgroundColor: '#e8f5e9',
    textColor: '#1b5e20',
  },
  Failed: {
    backgroundColor: '#ffebee',
    textColor: '#d50000',
  },
};

export const LIST_OF_LAUNCH_DETAILS = [
  {
    label: 'Flight NumbFer',
    property: 'flight_number',
  },
  {
    label: 'Mission Name',
    property: 'mission_name',
  },
  {
    label: 'Rocket Type',
    property: 'rocket.rocket_type',
  },
  {
    label: 'Rocket Name',
    property: 'rocket.rocket_name',
  },
  {
    label: 'Manufacturer',
    property: 'rocket.second_stage.payloads[0].manufacturer',
  },
  {
    label: 'Nationality',
    property: 'rocket.second_stage.payloads[0].nationality',
  },
  {
    label: 'Launch Date',
    property: 'launch_date_utc',
  },
  {
    label: 'Payload Type',
    property: 'rocket.second_stage.payloads[0].nationality',
  },
  {
    label: 'Orbit',
    property: 'rocket.second_stage.payloads[0].orbit',
  },
  {
    label: 'Launch Site',
    property: 'launch_site.site_name',
  },
];