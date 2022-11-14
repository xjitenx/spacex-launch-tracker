import moment from 'moment';
import { Launch } from '../Types/Lunches';
import { DATE_TIME_FORMAT } from './Constants';

const CURRENT_DATE = '2010-01-01';

export const filterLaunchesByPeriod = (launch: Launch, period: string) => {
  const noOfYears = Number(period[0]);
  const launchDate = moment(launch.launch_date_utc);
  let currentDate = moment(CURRENT_DATE);
  let yearsDiff = 0;
  if (period[1] === 'U') {
    yearsDiff = launchDate.diff(currentDate, 'years');
  } else if (period[1] === 'P') {
    yearsDiff = currentDate.diff(launchDate, 'years');
  }
  if (yearsDiff >= 0 && yearsDiff <= noOfYears) return true;
};

export const filterLaunchesByStatus = (
  { launch_status }: Launch,
  status: string,
) => {
  return launch_status === status;
};

export const getLaunchStatusValue = ({ launch_success }: any) => {
  return launch_success === null
    ? 'Upcoming'
    : launch_success
    ? 'Success'
    : 'Failed';
};

export const getDateTimeFormatted = (dateTime: Date) => {
  return moment(dateTime).format(DATE_TIME_FORMAT);
};
