import { getLaunchStatusValue } from '../Lib/Functions';
import { Launches } from '../Types/Lunches';

export const getLaunches = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/launches');
  const data = await res.json();
  const transformedData: Launches = data.map((launch: any, index: number) => ({
    ...launch,
    flight_number: index + 1,
    launch_status: getLaunchStatusValue(launch),
  }));
  return transformedData;
};
