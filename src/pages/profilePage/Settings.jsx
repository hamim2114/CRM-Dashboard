import { AccountCircle, AddOutlined, EmailOutlined, GppGoodOutlined, GroupOutlined, HttpsOutlined, ListAltOutlined, MilitaryTechOutlined, PhoneOutlined, SettingsOutlined, ShieldOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Input, Paper, Select, Stack, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from './Sidebar'


const Settings = () => {

  return (
    <Stack direction={'row'} sx={{
      bgcolor: 'lightGray',
      height: '95vh',
        overflowY: 'scroll'
    }}>
      <Sidebar />
      <Stack sx={{
        m: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}>
        <Typography variant='h5' fontWeight='bold'>Settings</Typography>

        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          bgcolor: '#fff',
          p: 4,
          borderRadius: 2
        }}>
          <Typography variant='body1'>Email notifications</Typography>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Stack gap={1}>
              <Typography variant='h6'>New sign-in to account alert</Typography>
              <Typography variant='subtitle'>Receive email alerts whenever your account is signed in from a new device, browser, or location.</Typography>
            </Stack>
            <Switch defaultChecked />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between' mb={2}>
            <Stack gap={1}>
              <Typography variant='h6'>Third-party app access alert</Typography>
              <Typography variant='subtitle'>Receive email alerts whenever your account is accessed from a new third-party app or location.</Typography>
            </Stack>
            <Switch defaultChecked />
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between' >
            <Stack gap={1}>
              <Typography variant='h6'>Newsletter subscription</Typography>
              <Typography variant='subtitle'>Receive marketing emails from Zoho and regional partners regarding Zoho's products, services, and events.</Typography>
            </Stack>
            <Switch defaultChecked />
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
              <Typography variant='h6'>Close Account</Typography>
              <Typography mb={4} variant='subtitle'>Permanently delete all the data associated with your account and the apps you use. </Typography>
              <Typography >Closing your Zoho Account will permanently delete all your account information and you will no longer be able to use any of the Zoho services.</Typography>
            </Stack>
          </Stack>
          <Button variant='contained' sx={{ width: '150px', alignSelf: 'center', textTransform: 'none',bgcolor: 'red' }}>Close Account</Button>
        </Paper>
      </Stack>
    </Stack>
  )
}

export default Settings