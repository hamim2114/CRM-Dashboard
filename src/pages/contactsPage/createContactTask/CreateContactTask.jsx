import { Add, Search } from '@mui/icons-material'
import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Input, Stack, Switch, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import CommonModal from '../../../common/modal/CommonModal'
import { useNavigate } from 'react-router-dom'

const CreateContactTask = () => {
  const [remainderOn, setRemainderOn] = useState(false);
  const handleRemainderOn = () => setRemainderOn(p => !p)
  const [repeatOn, setRepeatOn] = useState(false);
  const handleRepeatOn = () => setRepeatOn(p => !p)

  const navigate = useNavigate();

  const CBox = styled(Box)({
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
  })
  return (
    <Container
      sx={{
        my: '3rem'
      }}
    >
      <Stack gap={3}>
        <CBox sx={{ alignSelf: 'flex-end', gap: '10px' }}>
          <Button variant='outlined' size='small' onClick={() => navigate('/contacts')}>Cancel</Button>
          <Button variant='contained' size='small'>Save</Button>
        </CBox>
        <Typography variant='h5' fontWeight='bold'>Create Task</Typography>
        <CBox>
          <Typography>Subject</Typography>
          <Input />
          <select className='select'>
            <option value="">Email</option>
            <option value="">Call</option>
            <option value="">Meeting</option>
            <option value="">Send Letter</option>
            <option value="">Product Demo</option>
          </select>
        </CBox>
        <CBox>
          <Typography>Due Date</Typography>
          <Input type='date' />
        </CBox>
        <CBox>
          <Typography>Priority</Typography>
          <select className='select'>
            <option value="">High</option>
            <option value="">Highest</option>
            <option value="">Low</option>
            <option value="">Lowest</option>
            <option value="">Normal</option>
          </select>
        </CBox>
        <CBox>
          <Typography>Owner</Typography>
          <Typography color={'primary'}>Logged User</Typography>
        </CBox>
        <CBox>
          <Typography>Remainder</Typography>
          <Switch
            checked={remainderOn}
            onChange={handleRemainderOn}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          {
            <CommonModal
              openModal={remainderOn}
              handleClose={handleRemainderOn}
            >
              <Stack direction='row' gap={3} marginBottom={3}>
                <Input type="date" />
                <Input type="time" />
              </Stack>
              <Stack direction='row' gap={3}>
                <Typography>Alert</Typography>
                <select className='select'>
                  <option value="" selected>Pop-up</option>
                </select>
              </Stack>
              <Button onClick={handleRemainderOn} variant='contained' size='small' sx={{ mt: 3 }}>Done</Button>
            </CommonModal>
          }
        </CBox>
        <CBox>
          <Typography>Repeat</Typography>
          <Switch
            checked={repeatOn}
            onChange={handleRepeatOn}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <CommonModal
            openModal={repeatOn}
            handleClose={handleRepeatOn}
          >
            <Stack direction='row' alignItems='center' gap={3} marginBottom={3}>
              <Typography>Type</Typography>
              <select className='select'>
                <option value="" selected>Daily</option>
                <option value="">Weekly</option>
                <option value="">Monthly</option>
                <option value="">Yearly</option>
              </select>
              <Input placeholder='Custom' />
            </Stack>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <Typography>Ends</Typography>
              <Stack gap='10px'>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <input type="checkbox" />
                  <label>Never</label>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <input type="checkbox" />
                  <span>After</span><Input sx={{ width: '45px' }} type='number' /><span>Time(s)</span>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <input type="checkbox" />
                  <span>On</span><Input type='date' />
                </Box>
              </Stack>
            </Box>
            <Button onClick={handleRepeatOn} variant='contained' size='small' sx={{ mt: 3 }}>Done</Button>
          </CommonModal>
        </CBox>
        <CBox>
          <Typography>Contact Name</Typography>
          <select className='select'>
            <option value="" >Contact</option>
            <option value="" selected>Lead</option>
          </select>
          <Typography>Carissa Kidman</Typography>
          <Search />
        </CBox>
        <CBox>
          <Typography>Related To</Typography>
          <select className='select' disabled>
            <option value="" selected>Account</option>
          </select>
        </CBox>
        <CBox>
          <Typography>Status</Typography>
          <select className='select'>
            <option value="" selected>Not Started</option>
            <option value="" selected>Deferred</option>
            <option value="" selected>In Progress</option>
            <option value="" selected>Completed</option>
            <option value="" selected>Waiting for input</option>
          </select>
        </CBox>
        <CBox>
          <Typography>Description</Typography>
          <Input />
        </CBox>
      </Stack>
    </Container>
  )
}

export default CreateContactTask