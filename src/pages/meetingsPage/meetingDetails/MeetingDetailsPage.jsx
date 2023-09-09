import { Add, ApartmentOutlined, ArrowBack, CalendarMonthOutlined, DomainVerificationOutlined, Email, FaxOutlined, LocalPhone, LocationOnOutlined, ScheduleOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';

const MeetingDetailsPage = () => {
  return (
    <Box sx={{
      bgcolor: 'lightGray',
      height: '100vh',
      overflowY: 'auto'
    }}>

      <Stack direction='row' justifyContent='space-between' alignItems='center' p={2} bgcolor='#fff'>
        <Stack >
          <Stack direction='row' gap={1} alignItems='center'>
            <Link className='link' to='/meetings'><ArrowBack /></Link>
            <CalendarMonthOutlined />
            <Typography variant='h6'>Seminar</Typography>
          </Stack>
          <Typography ml={8} variant=''><span style={{ color: 'blue' }}>Host</span> <span>Logged User</span></Typography>
        </Stack>
        <Stack direction='row' gap={2}>
          <Link to='/tasks/edit/2'><Button variant='contained' size='small'>Edit</Button></Link>
          <Button variant='outlined' size='small'>Delete</Button>
        </Stack>
      </Stack>

      <Stack direction='row'>
        <Stack sx={{
          width: '80%',
        }}>

          <Paper sx={{ mt: 3, ml: 3, mr: 3, p: 4, }}>
            <Stack direction='row' gap={1} mb={1}>
              <CalendarMonthOutlined />
              <Typography>Saturday, Aug 12</Typography>
            </Stack>
            <Stack direction='row' gap={1} mb={1}>
              <ScheduleOutlined />
              <Typography>03:12 PM - 05:12 PM</Typography>
            </Stack>
            <Stack direction='row' gap={1}>
              <LocationOnOutlined />
              <Typography>Online</Typography>
            </Stack>
          </Paper>

          <Paper sx={{ mt: 3, ml: 3, mr: 3, p: 4, }}>
            <Stack gap={1}>
              <Typography variant='h6'>Participants</Typography>
              <Typography variant='subtitle2' sx={{ color: 'gray' }}>No participant found</Typography>
            </Stack>
          </Paper>


          <Paper sx={{
            m: 3,
            p: 4,
          }}>
            <Typography variant='h6' mb={1}>Other Information</Typography>
            <Stack direction='row' gap={2} mb={1}>
              <Typography>Created By</Typography>
              <Typography variant='subtitle2'>Logged User</Typography>
              <Typography variant='subtitle'>Sat, 12 Aug 2023 11:12 AM</Typography>
            </Stack>
            <Stack direction='row' gap={2}>
              <Typography>Modified By</Typography>
              <Typography variant='subtitle2'>Logged User</Typography>
              <Typography variant='subtitle'>Sat, 12 Aug 2023 11:12 AM</Typography>
            </Stack>
          </Paper>

          <Paper sx={{ ml: 3, mr: 3, mb: 10, p: 4, }}>
            <Stack gap={1}>
              <Typography variant='h6'>Notes</Typography>
              <Typography variant='subtitle2' sx={{ color: 'gray' }}>No Notes found</Typography>
            </Stack>
          </Paper>

        </Stack>

        <Box sx={{
          bgcolor: '#fff',
          ml: 1,
          borderTop: '1px solid lightgray',
          p: 3,
          width: '20%',
        }}>
          <Stack gap={2}>
              <Typography variant='h6'>History</Typography>
              <Typography>No Last Activity done.</Typography>
          </Stack>
        </Box>

      </Stack>

    </Box>
  )
}

export default MeetingDetailsPage