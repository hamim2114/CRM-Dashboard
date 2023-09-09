import { Add } from '@mui/icons-material'
import { Box, Button, Container, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogCall = ({ handleClose }) => {
  const navigate = useNavigate();
  const CBox = styled(Box)({
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
  })
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      my: '3rem'
    }}>
      <Typography variant='h5'>Log a Call</Typography>
      <CBox sx={{ alignSelf: 'flex-end', gap: '10px' }}>
        <Button variant='outlined' size='small' onClick={() => navigate('/calls')}>Cancel</Button>
        <Button variant='contained' size='small'>Save</Button>
      </CBox>
      <Typography variant='text' fontWeight={'bold'}>Call Information</Typography>
      <CBox>
        <Typography>Call To</Typography>
        <select className='select'>
          <option value="" selected>Contact</option>
          <option value="">Lead</option>
        </select>
        <Input />
      </CBox>
      <CBox>
        <Typography>Related To</Typography>
        <select className='select'>
          <option value="" selected>Account</option>
          <option value="">Deal</option>
          <option value="">Campaign</option>
        </select>
        <Input />
      </CBox>
      <CBox>
        <Typography>Call Type</Typography>
        <select className='select'>
          <option value="" selected>Outbound</option>
          <option value="">InBound</option>
          <option value="">Missed</option>
        </select>
      </CBox>
      <CBox>
        <Typography>Call Start Time</Typography>
        <Input type="date" />
        <Input type="time" />
      </CBox>
      <CBox>
        <Typography>Call Duration</Typography>
        <Input value='00 minutes 00 seconds' />
      </CBox>
      <CBox>
        <Typography>Subject</Typography>
        <Input value={'Outgoing call to Unknown'} />
      </CBox>
      <CBox>
        <Typography>Voice Recording</Typography>
        <Input />
      </CBox>

      <Typography variant='text' fontWeight={'bold'}>Purpose Of Outgoing Call</Typography>
      <CBox>
        <Typography>Call Purpose</Typography>
        <select className='select'>
          <option value="" selected>-None-</option>
          <option value="" selected>Prospecting</option>
          <option value="" selected>Administrative</option>
          <option value="" selected>Negotiation</option>
          <option value="" selected>Demo</option>
          <option value="" selected>Project</option>
          <option value="" selected>Desk</option>
        </select>
      </CBox>
      <CBox>
        <Typography>Call Agenda</Typography>
        <Input />
      </CBox>
      <Typography variant='text' fontWeight={'bold'}>Outcome Of Outgoing Call</Typography>
      <CBox>
        <Typography>Call Result</Typography>
        <select className='select'>
          <option value="" selected>-None-</option>
          <option value="" selected>Interested</option>
          <option value="" selected>Not Interested</option>
          <option value="" selected>Not response/Busy</option>
          <option value="" selected>Requested more info</option>
          <option value="" selected>Requested Call back</option>
          <option value="" selected>Invalid number</option>
        </select>
      </CBox>
      <CBox>
        <Typography>Description</Typography>
        <Input />
      </CBox>
    </Container>
  )
}

export default LogCall