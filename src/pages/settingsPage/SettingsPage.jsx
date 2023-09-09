import { useTheme } from '@emotion/react'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SettingsPage = () => {
  const theme = useTheme();
  const linkStyle = {
    fontSize: '19px',
    textDecoration: 'none',
    color: 'blue'
  }
  return (
    <Container
      sx={{
        p: 4
      }}
    >
      <Typography variant='h5' fontWeight='bold' mb='1.5rem'>Setup</Typography>
      <Stack direction='row' gap='30px' flexWrap='wrap'>
        <Card variant='outlined' sx={{ width: '250px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column',gap:'10px'  }}>
            <Typography variant='h6'  gutterBottom>General</Typography>
            <Link to='/settings/personal-settings' style={linkStyle}>Personal Settings</Link>
            <Link style={linkStyle}>Company Details</Link>
          </CardContent>
        </Card>
        <Card variant='outlined' sx={{ width: '250px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column',gap:'10px'  }}>
            <Typography variant='h6' gutterBottom>User and Control</Typography>
            <Link style={linkStyle}>User</Link>
            <Link style={linkStyle}>Security Control</Link>
            <Link style={linkStyle}>Compliance Settings</Link>
          </CardContent>
        </Card>
        <Card variant='outlined' sx={{ width: '250px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column',gap:'10px'  }}>
            <Typography variant='h6' gutterBottom>Channels</Typography>
            <Link style={linkStyle}>Email</Link>
            <Link style={linkStyle}>Notification SMS</Link>
            <Link style={linkStyle}>Chat</Link>
          </CardContent>
        </Card>
        <Card variant='outlined' sx={{ width: '250px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column',gap:'10px'  }}>
            <Typography variant='h6' gutterBottom>Automation</Typography>
            <Link style={linkStyle}>Workflow Rules</Link>
            <Link style={linkStyle}>Actions</Link>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  )
}

export default SettingsPage