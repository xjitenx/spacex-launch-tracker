export const getLaunchStatusValue = ({ launch_success }: any) => {
  return launch_success === null
    ? 'Upcoming'
    : launch_success
    ? 'Success'
    : 'Failed';
};
