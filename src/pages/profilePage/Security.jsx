import { AccountCircle, AddOutlined, EmailOutlined, GppGoodOutlined, GroupOutlined, HttpsOutlined, ListAltOutlined, MilitaryTechOutlined, PhoneOutlined, SettingsOutlined, ShieldOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Input, Paper, Select, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from './Sidebar'


const Security = () => {
  const [profileEdit, setProfileEdit] = useState(false)
  return (
    <Stack direction={'row'} sx={{
      bgcolor: 'lightGray',
      height: '95vh'
    }}>
      <Sidebar />
      <Stack sx={{
        m: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}>
        <Typography variant='h5' fontWeight='bold'>Security</Typography>

        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          bgcolor: '#fff',
          p: 4,
          borderRadius: 2
        }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Stack direction='row' gap={2} alignItems='center'>
              <Stack>
                <Typography variant='h6'>Password</Typography>
                <Typography variant='subtitle'>Last changed 2 days ago</Typography>
              </Stack>
            </Stack>
            <Button variant='contained' onClick={() => setProfileEdit(true)}>Change Password</Button>
          </Stack>
        </Paper>

        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          bgcolor: '#fff',
          p: 4,
          borderRadius: 2,
        }}>
          <Stack direction='row' >
            <Stack>
              <Typography variant='h6'>Allowed IP Address</Typography>
              <Typography >Restrict access to your account by adding a range of trusted IP addresses.</Typography>
            </Stack>
          </Stack>
          <Button variant='contained' sx={{width: '220px', alignSelf: 'center', textTransform: 'none'}} startIcon={<AddOutlined />}>Add Allowed IP Address</Button>
        </Paper>
        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          bgcolor: '#fff',
          p: 4,
          borderRadius: 2,
        }}>
          <Stack direction='row' >
            <Stack>
              <Typography variant='h6'>Device Sign-ins</Typography>
              <Typography >View and manage the list of locations where you've signed in on your devices.</Typography>
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center' gap={20}>
              <Typography variant='h6'>Dextop-66537</Typography>
              <Typography >US 34 Street</Typography>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  )
}

export default Security