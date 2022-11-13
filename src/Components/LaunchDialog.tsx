import React from 'react';
import {
  Chip,
  Link,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Theme,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Launch } from '../Types/Lunches';
import falconDragon from '../Assets/Logos/falconDragon.webp';
import youtubeIcon from '../Assets/Icons/youtubeIcon.png';
import wikipediaIcon from '../Assets/Icons/wikipediaIcon.png';
import nasaIcon from '../Assets/Icons/nasaIcon.png';
import { LAUNCH_STATUS_CHIP_COLORS } from '../Lib/Constants';
import { getLaunchStatusValue } from '../Lib/Functions';
import LaunchDetailsList from './LaunchDetailsList';

type LaunchDialogProps = {
  open: boolean;
  closeEvent: Function;
  launch: Launch;
};

export const LaunchDialog: React.FC<LaunchDialogProps> = ({
  open,
  closeEvent,
  launch,
}) => {
  const value = getLaunchStatusValue(launch || {});
  return (
    <Dialog open={open}>
      <DialogTitle>
        <Stack direction='row'>
          <img
            src={falconDragon}
            alt='mission-logo'
            height='100px'
            width='100px'
            className='mr-2'
          />
          <Stack>
            <Stack direction='row' alignItems='center'>
              <Typography variant='h5' fontWeight={500}>
                {launch?.mission_name}
              </Typography>
              <Chip
                label={value}
                size='small'
                sx={{
                  backgroundColor:
                    LAUNCH_STATUS_CHIP_COLORS[value].backgroundColor,
                  color: LAUNCH_STATUS_CHIP_COLORS[value].textColor,
                  fontWeight: '500',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  fontSize: '12px',
                  marginLeft: '20px',
                }}
              />
            </Stack>
            <Typography marginTop='5px'>
              {launch?.rocket.rocket_name}
            </Typography>
            <Stack direction='row' marginTop='14px'>
              <img
                src={nasaIcon}
                alt='source-logo'
                height='19px'
                width='22px'
                className='mr-1'
              />
              <img
                src={wikipediaIcon}
                alt='source-logo'
                height='18px'
                width='18px'
                className='mr-1'
              />
              <img
                src={youtubeIcon}
                alt='source-logo'
                height='18px'
                width='18px'
              />
            </Stack>
          </Stack>
        </Stack>
        <IconButton
          aria-label='close'
          disableRipple
          onClick={() => closeEvent(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme: Theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          {launch?.details}{' '}
          {launch?.links?.wikipedia && (
            <Link
              target='_blank'
              href={launch?.links.wikipedia}
              rel='noreferrer'
              underline='hover'
            >
              Wikipedia
            </Link>
          )}
        </Typography>
        <LaunchDetailsList launch={launch} />
      </DialogContent>
    </Dialog>
  );
};
