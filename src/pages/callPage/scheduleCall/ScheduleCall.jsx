import { Add } from '@mui/icons-material'
import { Box, Button, Container, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ScheduleCall = ({handleClose}) => {
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
      <Typography variant='h5'>Schedule a Call</Typography>
      <CBox sx={{alignSelf: 'flex-end', gap: '10px'}}>
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
        <Typography>Call Type</Typography>
        <Input  disabled value='Outbond'/>
      </CBox>
      <CBox>
        <Typography>Outgoing Call Status</Typography>
        <Input  disabled value='Scheduled'/>
      </CBox>
      <CBox>
        <Typography>Call Start Time</Typography>
        <Input type="date"  />
        <Input type="time" />
      </CBox>
      <CBox>
        <Typography>Call Owner</Typography>
        <Typography color={'primary'}>Logged User</Typography>
      </CBox>
      <CBox>
        <Typography>Subject</Typography>
        <Input value={'Call scheduled with Unknown'}/>
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
    </Container>
  )
}

export default ScheduleCall