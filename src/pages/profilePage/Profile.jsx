import { AccountCircle, AddOutlined, EmailOutlined, GppGoodOutlined, GroupOutlined, HttpsOutlined, ListAltOutlined, MilitaryTechOutlined, PhoneOutlined, SettingsOutlined, ShieldOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Input, Paper, Select, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from './Sidebar'


const Personal = () => {
  const [profileEdit, setProfileEdit] = useState(false)
  return (
    <Stack direction={'row'} sx={{
      bgcolor: 'lightGray',
      height: '95vh'
    }}>
      <Sidebar/>
      <Stack sx={{
        p: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        overflowY: 'auto'
      }}>
        <Typography variant='h5' fontWeight='bold'>Profile</Typography>

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
              <Avatar />
              <Stack>
                <Typography variant='h5'>Logged User</Typography>
                <Typography >krismarrier@noemail.com</Typography>
              </Stack>
            </Stack>
            {!profileEdit && <Button variant='contained' onClick={() => setProfileEdit(true)}>Edit</Button>}
          </Stack>

          {profileEdit ? <> <Stack direction='row' gap={10} mb={2}>
            <Stack width={200}>
              <Typography>Fast Name</Typography>
              <Input value={'Mr'} />
            </Stack>
            <Stack width={200}>
              <Typography>Last Name</Typography>
              <Input value={'John'} />
            </Stack>
          </Stack>
            <Stack direction='row' gap={10} mb={2}>
              <Stack width={200}>
                <Typography>Display Name</Typography>
                <Input value={'Mr'} />
              </Stack>
              <Stack width={200} gap={2}>
                <Typography>Gender Name</Typography>
                <select className='select'>
                  <option value="">Male</option>
                  <option value="">Femail</option>
                  <option value="">I'd prefer not to say</option>
                </select>
              </Stack>
            </Stack>
            <Stack direction='row' gap={10} mb={2}>
              <Stack width={200}>
                <Typography>Country/Region</Typography>
                <Input />
              </Stack>
              <Stack width={200}>
                <Typography>Language</Typography>
                <Input />
              </Stack>
            </Stack>
            <Stack direction='row' gap={10} mb={2}>
              <Stack width={200}>
                <Typography>Time Zone</Typography>
                <Input />
              </Stack>
            </Stack>
            <Stack direction='row' gap={2} mb={2}>
              <Button variant='contained'>Save</Button>
              <Button onClick={() => setProfileEdit(false)} variant='outlined' >Cancel</Button>
            </Stack></>
            :
            <>
              <Stack direction='row' >
                <Stack width={400} gap={1}>
                  <Typography>Full Name</Typography>
                  <Typography variant='h6'>Mr John</Typography>
                </Stack>
                <Stack width={400} gap={1}>
                  <Typography>Display Name</Typography>
                  <Typography variant='h6'>Mr John</Typography>
                </Stack>
              </Stack>

              <Stack direction='row' >
                <Stack width={400} gap={1}>
                  <Typography>Gender</Typography>
                  <Typography variant='h6'>Mail</Typography>
                </Stack>
                <Stack width={400} gap={1}>
                  <Typography>Country</Typography>
                  <Typography variant='h6'>United State</Typography>
                </Stack>
              </Stack>

              <Stack direction='row' >
                <Stack width={400} gap={1}>
                  <Typography>Language</Typography>
                  <Typography variant='h6'>English</Typography>
                </Stack>
                <Stack width={400} gap={1}>
                  <Typography>Time Zone</Typography>
                  <Typography variant='h6'>(GMT +8:00) WEST COST</Typography>
                </Stack>
              </Stack>
            </>
          }
        </Paper>

        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          bgcolor: '#fff',
          p: 4,
          borderRadius: 2
        }}>
          <Stack direction='row' >
            <Stack direction='row' gap={2} alignItems='center'>
              <Stack>
                <Typography variant='h6'>My Email Addresses</Typography>
                <Typography >You can use the following email addresses to sign in to your account and also to reset your password if you ever forget it.</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction='row' gap={1} alignItems='center'>
            <EmailOutlined sx={{
              bgcolor: 'purple',
              color: '#fff',
              p: 2,
              borderRadius: '50%'
            }} />
            <Stack width={400} >
              <Typography>usermail@mail.com</Typography>
              <Typography variant='subtitle'>10 days ago</Typography>
            </Stack>
            <Button size='small' startIcon={<AddOutlined />}>Add Email Address</Button>
          </Stack>

        </Paper>

        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          bgcolor: '#fff',
          p: 4,
          borderRadius: 2
        }}>
          <Stack direction='row' >
            <Stack direction='row' gap={2} alignItems='center'>
              <Stack>
                <Typography variant='h6'>My Mobile Numbers</Typography>
                <Typography >View and manage all of the mobile numbers associated with your account.</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction='row' gap={1} alignItems='center'>
            <PhoneOutlined sx={{
              bgcolor: 'purple',
              color: '#fff',
              p: 2,
              borderRadius: '50%'
            }} />
            <Stack width={400} >
              <Typography>555-555-555-555</Typography>
              <Typography variant='subtitle'>10 days ago</Typography>
            </Stack>
            <Button size='small' startIcon={<AddOutlined />}>Add Phone Number</Button>
          </Stack>

        </Paper>
      </Stack>
    </Stack>
  )
}

export default Personal