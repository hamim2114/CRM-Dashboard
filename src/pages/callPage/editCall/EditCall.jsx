import { Add } from '@mui/icons-material'
import { Box, Button, Container, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { leadData } from '../../../data/leadsData'
import { useNavigate, useParams } from 'react-router-dom'

const EditCall = () => {
  const { id } = useParams();
  const data = leadData.find(data => data.id === id);
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
      <Typography variant='h5'>Edit Call</Typography>
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
        <Input value={data.name} />
      </CBox>
      <CBox>
        <Typography>Related To</Typography>
        <select className='select' disabled>
          <option value="" selected>Account</option>
          <option value="">Deal</option>
          <option value="">Campaign</option>
        </select>
        <Input value={data?.calls?.relatedTo} />
      </CBox>
      <CBox>
        <Typography>Call Type</Typography>
        <select className='select' disabled>
          <option value="" selected>Outbound</option>
          <option value="">InBound</option>
          <option value="">Missed</option>
        </select>
      </CBox>
      <CBox>
        <Typography>Outgoing Call Status</Typography>
        <select className='select' disabled>
          <option value="" selected>Overdue</option>
        </select>
      </CBox>
      <CBox>
        <Typography>Call Start Time</Typography>
        <Input type="date" />
        <Input type="time" />
      </CBox>

      <CBox>
        <Typography>Subject</Typography>
        <Input value={data?.calls?.subject} />
      </CBox>

      <Typography variant='text' fontWeight={'bold'}>Purpose Of Outgoing Call</Typography>
      <CBox>
        <Typography>Call Purpose</Typography>
        <select className='select'>
          <option value="" >-None-</option>
          <option value="" selected>Prospecting</option>
          <option value="" >Administrative</option>
          <option value="" >Negotiation</option>
          <option value="" >Demo</option>
          <option value="" >Project</option>
          <option value="" >Desk</option>
        </select>
      </CBox>
      <CBox>
        <Typography>Call Agenda</Typography>
        <Input />
      </CBox>
      {/* <CBox>
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
      </CBox> */}
      {/* <CBox>
        <Typography>Description</Typography>
        <Input fullWidth />
      </CBox> */}
    </Container>
  )
}

export default EditCall;