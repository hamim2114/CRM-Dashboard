import { Add, ApartmentOutlined, ArrowBack, DomainVerificationOutlined, Email, FaxOutlined, LocalPhone, Tty } from '@mui/icons-material'
import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import './CallDetails.scss';

const CallDetails = () => {
  return (
    <Box sx={{
      bgcolor: 'lightGray',
      height: '100vh',
      overflowY: 'auto'
    }}>

      <Stack direction='row' justifyContent='space-between' p={2} bgcolor='#fff'>
        <Stack direction='row' gap={1} alignItems='center'>
          <Link className='link' to='/calls'><ArrowBack /></Link>
          <Tty />
          <Typography variant='h6'><span style={{color: 'blue'}}>Theola Frey</span> - Leads</Typography>
        </Stack>
        <Stack direction='row' gap={2}>
          <Button variant='contained' size='small'>Mark as Completed</Button>
          <Link to='/calls/edit/2'><Button variant='outlined' size='small'>Edit</Button></Link>
          <Button variant='outlined' size='small'>Delete</Button>
        </Stack>
      </Stack>

      <Stack direction='row'>
        <Stack sx={{
          width: '80%',
          mb: 10
        }}>

          <Paper sx={{
            mt: 3,
            ml: 3,
            mr: 3,
            p: 4,
          }}>
            <div className="call-info-box">
              <span>Call To</span>
              <span style={{color: 'blue'}}>Theola Frey</span>
            </div>
            <div className="call-info-box">
              <span>Related To</span>
              <span>---</span>
            </div>
            <div className="call-info-box">
              <span>Call Type</span>
              <span>Outbound</span>
            </div>
            <div className="call-info-box">
              <span>Outgoing Call Status</span>
              <span>Overdue</span>
            </div>
            <div className="call-info-box">
              <span>Call Start Time</span>
              <span>08/12/2023 01:12 PM</span>
            </div>
            <div className="call-info-box">
              <span>Call Owner</span>
              <span>Logged User</span>
            </div>
            <div className="call-info-box">
              <span>Subject</span>
              <span>Follow up with Lead</span>
            </div>
            <div className="call-info-box">
              <span>Created By</span>
              <span>Logged User <Typography variant='subtitle2'>Sat, 12 Aug 2023 11:12 AM</Typography></span>
              
            </div>
            <div className="call-info-box">
              <span>Modified By</span>
              <span>Logged User <Typography variant='subtitle2'>Sat, 12 Aug 2023 11:12 AM</Typography></span>
            </div>
          </Paper>

          <Paper sx={{
            m: 3,
            p: 4,
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center'
          }}>
            <Typography variant='h6'>Purpose Of Outgoing Call</Typography>
            <div className="call-info-box">
              <span>Call Purpose</span>
              <span>Prospecting</span>
            </div>
            <div className="call-info-box">
              <span>Call Agenda</span>
              <span>---</span>
            </div>
          </Paper>

        </Stack>

        <Box sx={{
          bgcolor: '#fff',
          ml: 1,
          borderTop: '1px solid lightgray',
          p: 3,
          width: '20%',
        }}>
          <Stack direction='row' alignItems='center' gap={2} mb={3}>
            <Avatar />
            <Stack>
              <Typography>Theola Frey</Typography>
              <Button size='small'>Send Email</Button>
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2} mt={2} sx={{ color: 'gray' }}>
            <ApartmentOutlined />
            <Typography>Dal Tile Corporation</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2} mt={2} sx={{ color: 'gray' }}>
            <FaxOutlined />
            <Typography>555-555-5555</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2} mt={2} sx={{ color: 'gray' }}>
            <LocalPhone />
            <Typography>555-555-5555</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' gap={2} mt={2} sx={{ color: 'gray' }}>
            <Email />
            <Typography sx={{ color: 'blue' }}>theola-frey@noemail.com</Typography>
          </Stack>
          <Button sx={{ mt: 2, mb: 2 }}>More Info</Button>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography variant='subtitle2'>Open Activities</Typography>
            <Button startIcon={<Add/>}>New</Button>
          </Stack>
          <Box sx={{
            border: '1px solid lightgray',
            p: 1,
            borderRadius: 2,
            mb: 2
          }}>Tasks 0</Box>
          <Box sx={{
            border: '1px solid lightgray',
            p: 1,
            borderRadius: 2,
            mb: 2
          }}>Meetings 0</Box>
          <Box sx={{
            border: '1px solid lightgray',
            p: 1,
            borderRadius: 2,
            mb: 2
          }}>Calls 0</Box>
        </Box>

      </Stack>

    </Box>
  )
}

export default CallDetails