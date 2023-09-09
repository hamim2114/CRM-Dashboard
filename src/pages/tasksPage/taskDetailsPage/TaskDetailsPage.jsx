import { Add, ApartmentOutlined, ArrowBack, DomainVerificationOutlined, Email, FaxOutlined, LocalPhone } from '@mui/icons-material'
import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react';
import './TaskDetails.scss';
import { Link } from 'react-router-dom';

const TaskDetailsPage = () => {
  return (
    <Box sx={{
      bgcolor: 'lightGray',
      height: '100vh',
      overflowY: 'auto'
    }}>

      <Stack direction='row' justifyContent='space-between' p={2} bgcolor='#fff'>
        <Stack direction='row' gap={1} alignItems='center'>
          <Link className='link' to='/tasks'><ArrowBack /></Link>
          <DomainVerificationOutlined />
          <Typography variant='h6'>Complete CRM Getting Started steps</Typography>
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

          <Paper sx={{
            mt: 3,
            ml: 3,
            mr: 3,
            p: 4,
            position: 'relative',
          }}>
            <Typography variant='h6' sx={{ position: 'absolute', right: '50px', top: '20px' }}>Completed</Typography>
            <div className="task-info-box">
              <span>Priority</span>
              <span>Normal</span>
            </div>
            <div className="task-info-box">
              <span>Due Date</span>
              <span>02/23/2023</span>
            </div>
            <div className="task-info-box">
              <span>Status</span>
              <span>Completed</span>
            </div>
            <div className="task-info-box">
              <span>Related To</span>
              <span>---</span>
            </div>
            <div className="task-info-box">
              <span>Task Owner</span>
              <span>Logged User</span>
            </div>
          </Paper>

          <Paper sx={{
            m: 3,
            p: 4,
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center'
          }}>
            <Typography variant='h6'>Task Information</Typography>
            <div className="task-info-box">
              <span>Task Owner</span>
              <span>Logged User</span>
            </div>
            <div className="task-info-box">
              <span>Subject</span>
              <span>Complete CRM Getting Started steps</span>
            </div>
            <div className="task-info-box">
              <span>Due Date</span>
              <span>02/23/2023</span>
            </div>
            <div className="task-info-box">
              <span>Lead</span>
              <span style={{ color: 'blue' }}>Theola Frey</span>
            </div>
            <div className="task-info-box">
              <span>Related</span>
              <span>---</span>
            </div>
            <div className="task-info-box">
              <span>Status</span>
              <span>Completed</span>
            </div>
            <div className="task-info-box">
              <span>Priority</span>
              <span>Normal</span>
            </div>
            <div className="task-info-box">
              <span>Created By</span>
              <span>Logged User <Typography variant='subtitle2'>Sat, 12 Aug 2023 11:12 AM</Typography></span>
            </div>
            <div className="task-info-box">
              <span>Modified By</span>
              <span>Logged User <Typography variant='subtitle2'>Sat, 12 Aug 2023 11:12 AM</Typography></span>
            </div>
            <div className="task-info-box">
              <span>Reminder</span>
              <span>---</span>
            </div>
            <div className="task-info-box">
              <span>Repeat</span>
              <span>---</span>
            </div>
            <div className="task-info-box">
              <span>Closed Time</span>
              <span>---</span>
            </div>
            <Typography variant='h6'>Description Information</Typography>
            <div className="task-info-box">
              <span>Description</span>
              <span style={{ width: '700px' }}>Complete all the steps from Getting Started wizard</span>
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

export default TaskDetailsPage