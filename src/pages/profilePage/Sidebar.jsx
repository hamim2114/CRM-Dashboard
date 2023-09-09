import { Box, Stack, Typography } from '@mui/material'
import { AccountCircle, AddOutlined, EmailOutlined, GppGoodOutlined, GroupOutlined, HttpsOutlined, ListAltOutlined, MilitaryTechOutlined, PhoneOutlined, SettingsOutlined, ShieldOutlined } from '@mui/icons-material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <Box sx={{
      position: 'sticky',
      top: 0,
      bgcolor: 'deepBlue',
      width: '350px',
      p: '3rem 2rem ',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 5,

    }}>
      <Link to='/profile' className='link'>
        <Stack direction='row' gap={1} sx={{ color: pathname === '/profile' ? 'green' : '' }}>
          <AccountCircle />
          <Typography fontSize='16px'>Profile</Typography>
        </Stack>
      </Link>
      <Link to='/profile/security' className='link'>
        <Stack direction='row' gap={1} sx={{ color: pathname === '/profile/security' ? 'green' : '' }}>
          <ShieldOutlined />
          <Typography fontSize='16px'>Security</Typography>
        </Stack>
      </Link>
      {/* <Stack direction='row' gap={1}>
        <GppGoodOutlined />
        <Typography fontSize='16px'>Multi-Factor Authentication</Typography>
      </Stack> */}
      <Link to='/profile/settings' className='link'>
        <Stack direction='row' gap={1} sx={{ color: pathname === '/profile/settings' ? 'green' : '' }}>
          <SettingsOutlined />
          <Typography fontSize='16px'>Settings</Typography>
        </Stack>
      </Link>
      <Stack direction='row' gap={1}>
        <ListAltOutlined />
        <Typography fontSize='16px'>Sessions</Typography>
      </Stack>
      <Stack direction='row' gap={1}>
        <GroupOutlined />
        <Typography fontSize='16px'>Groups</Typography>
      </Stack>
      <Stack direction='row' gap={1}>
        <HttpsOutlined />
        <Typography fontSize='16px'>Privacy</Typography>
      </Stack>
      <Stack direction='row' gap={1}>
        <MilitaryTechOutlined />
        <Typography fontSize='16px'>Compliance</Typography>
      </Stack>
    </Box>
  )
}

export default Sidebar