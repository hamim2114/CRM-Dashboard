import { Avatar, Box, Button, Paper, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import './ContactProfilePage.scss';
import { useParams } from 'react-router-dom';
import { leadData } from '../../../data/leadsData';

const ContactProfilePage = () => {

  const {id} = useParams()

  const data = leadData.find(item => item.id === id)

  const InfoBox = styled('Box')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center'
  })
  return (
    <Stack bgcolor='lightGray'>
      <Stack direction='row' bgcolor='#fff' height='30px' borderBottom='1px solid lightGray' justifyContent='space-between' p={4}>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Avatar src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' sx={{ width: 56, height: 56 }} />
          <Typography variant='h5'>{data.name}</Typography>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Button variant='contained' size='small'>Send Email</Button>
          <Button variant='outlined' size='small'>Edit</Button>
          <Button variant='outlined' size='small'>Delete</Button>
        </Stack>
      </Stack>
      <Stack direction='row'>
        <Stack
          sx={{
            width: '300px',
            bgcolor: '#fff',
            p: '40px 0px 40px 40px',
          }}
          spacing={2}
        >
          <Typography variant='h6'>Related List</Typography>
          <Typography>Notes</Typography>
          <Typography>Attachments</Typography>
          <Typography>Deals</Typography>
          <Typography>Open Activities</Typography>
          <Typography>Close Activities</Typography>
          <Typography>Invited Meetings</Typography>
          <Typography>Emails</Typography>
          <Typography>Campaigns</Typography>
          <Typography>Social</Typography>
        </Stack>
        <Box
          sx={{
            width: '100%',
            p: 3,
            height: '70vh',
            overflowY: 'scroll',
          }}
        >
          <Paper sx={{ p: 4 }}>
            <Typography variant='h6' mb={1.5}>Contact Information</Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 20,
                justifyContent: 'center',
              }}
            >
              <Stack >
                <div className='info-box'>
                  <span>Contact Owner</span>
                  <span>Logged User</span>
                </div>
                <div className='info-box'>
                  <span>Account Name</span>
                  <span>Morlong Associates </span>
                </div>
                <div className='info-box'>
                  <span>Email</span>
                  <span>tollner-morlong@noemail.com </span>
                </div>
                <div className='info-box'>
                  <span>Phone</span>
                  <span>555-555-555-555</span>
                </div>
                <div className='info-box'>
                  <span>Lead Source</span>
                  <span>{data.leadSource}</span>
                </div>
                <div className='info-box'>
                  <span>Industry</span>
                  <span>Optical Networking</span>
                </div>
                <div className='info-box'>
                  <span>Annual Revenue</span>
                  <span>$ 270,000.00</span>
                </div>
                <div className='info-box'>
                  <span>Email Opt Out</span>
                  <span>---</span>
                </div>
                <div className='info-box'>
                  <span>Modified By</span>
                  <span>Logged User</span>
                </div>
              </Stack>
              <Stack>
                <div className='info-box'>
                  <span>Company</span>
                  <span>{data.company}</span>
                </div>
                <div className='info-box'>
                  <span>Lead Name</span>
                  <span>{data.accountName}</span>
                </div>
                <div className='info-box'>
                  <span>Email</span>
                  <span style={{color: 'blue'}}>{data.email}</span>
                </div>
                <div className='info-box'>
                  <span>Fax</span>
                  <span>---</span>
                </div>
                <div className='info-box'>
                  <span>Website</span>
                  <span style={{color: 'blue'}}>{data.webSite}</span>
                </div>
                <div className='info-box'>
                  <span>Lead Status</span>
                  <span>Not Contacted</span>
                </div>
                <div className='info-box'>
                  <span>No. of Employees</span>
                  <span>---</span>
                </div>
                <div className='info-box'>
                  <span>Rating</span>
                  <span>---</span>
                </div>
                <div className='info-box'>
                  <span>Created By</span>
                  <span>Logged User</span>
                </div>
                <div className='info-box'>
                  <span>Skype ID</span>
                  <span>kayleigh-lace</span>
                </div>
                <div className='info-box'>
                  <span>Twitter</span>
                  <span>kayleighlace_sample</span>
                </div>
                <div className='info-box'>
                  <span>Secondary Email</span>
                  <span>---</span>
                </div>
              </Stack>
            </Box>

            <Typography variant='h6' mb={1.5} mt={1.5}>Address Information</Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 20,
                justifyContent: 'center',
              }}
            >
              <Stack >
                <div className='info-box'>
                  <span>Street</span>
                  <span>34 Center St</span>
                </div>
                <div className='info-box'>
                  <span>State</span>
                  <span>OH</span>
                </div>
                <div className='info-box'>
                  <span>Country</span>
                  <span>United State</span>
                </div>
              </Stack>
              <Stack
              >
                <div className='info-box'>
                  <span>City</span>
                  <span>Hamilton</span>
                </div>
                <div className='info-box'>
                  <span>Zip Code</span>
                  <span>26022</span>
                </div>
              </Stack>
            </Box>
            <Typography variant='h6' mb={1.5} mt={1.5}>Description Information</Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 20,
                justifyContent: 'center',
              }}
            >
              <Stack >
                <div className='info-box'>
                  <span>Description </span>
                  <span>---</span>
                </div>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Stack>
    </Stack>
  )
}

export default ContactProfilePage