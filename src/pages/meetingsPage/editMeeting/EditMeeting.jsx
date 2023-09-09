import { Add } from '@mui/icons-material'
import { Box, Button, Container, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { leadData } from '../../../data/leadsData'
import { useNavigate, useParams } from 'react-router-dom'

const EditMeeting = () => {
  const { id } = useParams()
  const data = leadData.find(data => data.id === id)

  const navigate = useNavigate();
  const CBox = styled(Box)({
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  })
  return (
    <Container  sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      my: '3rem'
    }}>
      <Typography variant='h5'>Meeting Information</Typography>
      <CBox sx={{ alignSelf: 'flex-end', gap: '10px' }}>
        <Button variant='outlined' size='small' onClick={() => navigate('/meetings')}>Cancel</Button>
        <Button variant='contained' size='small'>Save</Button>
      </CBox>
      <Input placeholder='Title' sx={{width: '400px'}} value={data.meetings.title} />
      <Input placeholder='Location'  sx={{width: '400px'}}/>
      <CBox>
        <Typography>From</Typography>
        <Input type="date" />
        <Input type="time" />
      </CBox>
      <CBox>
        <Typography>To</Typography>
        <Input type="date" value={data.meetings.to} />
        <Input type="time" />
      </CBox>
      <CBox>
        <Typography>Host</Typography>
        <Typography color={'primary'}>Logged User</Typography>
      </CBox>
      <CBox>
        <Typography>Participants</Typography>
        <Typography>None</Typography>
        <Button startIcon={<Add />}> Add</Button>
      </CBox>
      <CBox>
        <Typography>Related To</Typography>
        <select style={{ border: 'none', outline: 'none', fontSize: '1rem' }}>
          <option value="" selected>None</option>
          <option value="" selected>Lead</option>
          <option value="" selected>Contact</option>
          <option value="" selected>Others</option>
        </select>
      </CBox>
      <Input type='text' placeholder='Description' sx={{maxWidth: '600px'}}/>
    </Container>
  )
}

export default EditMeeting