import { Add } from '@mui/icons-material'
import { Box, Button, Container, Input, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateMeeting = () => {

  const navigate = useNavigate();

  const CBox = styled(Box)({
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  })
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        my: '3rem'
      }}
    >
      <Typography variant='h5'>Meeting Information</Typography>
      <CBox sx={{ alignSelf: 'flex-end', gap: '10px' }}>
        <Button variant='outlined' size='small' onClick={() => navigate('/meetings')}>Cancel</Button>
        <Button variant='contained' size='small'>Save</Button>
      </CBox>
      <Input placeholder='Title' sx={{width: '400px'}} />
      <Input placeholder='Location' sx={{width: '400px'}} />
      <CBox>
        <Typography>From</Typography>
        <Input type="date" />
        <Input type="time" />
      </CBox>
      <CBox>
        <Typography>To</Typography>
        <Input type="date" />
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
        <select className='select'>
          <option value="" selected>None</option>
          <option value="" >Lead</option>
          <option value="" >Contact</option>
          <option value="" >Others</option>
        </select>
      </CBox>
      <Input type='text' placeholder='Description' sx={{maxWidth: '800px'}} />
    </Container>
  )
}

export default CreateMeeting