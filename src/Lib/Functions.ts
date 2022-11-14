import moment from 'moment';
import { Launch } from '../Types/Lunches';
import { DATE_TIME_FORMAT } from './Constants';

export const filterLaunchesByPeriod = (launch: Launch, period: string) => {
  return true;
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
