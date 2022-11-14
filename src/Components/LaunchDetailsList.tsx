import React from 'react';
import { Stack, Divider, Typography } from '@mui/material';
import { get } from 'lodash';
import { LIST_OF_LAUNCH_DETAILS } from '../Lib/Constants';
import { getDateTimeFormatted } from '../Lib/Functions';

const LaunchDetailsList: React.FC<any> = ({ launch }) => {
  return (
    <div className='d-flex flex-column mt-2'>
      {launch &&
        LIST_OF_LAUNCH_DETAILS.map((detail, index) => (
          <div key={detail.label}>
            <Stack
              direction='row'
              sx={{ paddingTop: '10px', paddingBottom: '10px' }}
            >
              <Typography sx={{ width: '200px' }}>{detail.label}</Typography>
              {detail.label === 'Launch Date' ? (
                <Typography>
                  {getDateTimeFormatted(
                    get(launch, detail.property, 'Not Available'),
                  )}
                </Typography>
              ) : (
                <Typography>
                  {get(launch, detail.property, 'Not Available')}
                </Typography>
              )}
            </Stack>
            {index !== LIST_OF_LAUNCH_DETAILS.length - 1 && (
              <Divider orientation='horizontal' />
            )}
          </div>
        ))}
    </div>
  );
};

export default LaunchDetailsList;
