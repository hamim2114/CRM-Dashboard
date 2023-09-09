import styled from '@emotion/styled'
import { KeyboardArrowRight } from '@mui/icons-material'
import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import { Link } from 'react-router-dom'

const ProfileBar = ({showProfileBar,setShowProfileBar}) => {

  const Xbutton = {
    position: 'absolute',
    color: '#fff',
    top: '20px',
    left:'20px',
    backgroundColor: '#fff',
    color: 'black',
    border: '1px solid white',
    borderRadius: '50%',
    width: '40px',
    height: '40px'
  }

  return (
    <Box
      sx={{
        width: '350px',
        transform: showProfileBar ? 'translateX(0%)' : 'translateX(100%)',
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        bgcolor: '#fff',
        transition: '.5s',
        zIndex: 999,
        boxShadow: '5px 2px 10px 1px black'
      }}
    >
      <button style={Xbutton} onClick={() => setShowProfileBar(false)}><KeyboardArrowRight/></button>
      <Stack alignItems='center' gap='30px' sx={{height:'300px',bgcolor: 'deepBlue',pt: 5}}>
        <Avatar  sx={{ width: 76, height: 76 }}/>
        <Typography variant='h5'>Logged User</Typography>
        <Typography>User Id: 6827437264</Typography>
        <Stack direction='row' gap='20px' >
          <Link to='profile'><Button onClick={() => setShowProfileBar(false)} variant='outlined' sx={{color: 'white'}}>My Account</Button></Link>
          <Button variant='outlined' sx={{color: 'white'}}>Sign Out</Button>
        </Stack>
      </Stack>
      <Stack gap='10px' sx={{color: 'deepBlue', padding: '30px', }}>
        <Typography variant='h6' fontWeight='bold'>SUBSCRIPTION</Typography>
        <Typography variant='text' fontWeight='bold'>Free Edition <Link style={{marginLeft: '10px'}}>UPGRADE</Link></Typography>
      </Stack>
      <Stack gap='10px' sx={{color: 'deepBlue', padding: '30px', height: '100%'}}>
        <Typography variant='h6' fontWeight='bold'>NEED HELP?</Typography>
        <Button >Write to us</Button>
        <Button >Community</Button>
        <Button >Resources</Button>
        <Button >Take a tour</Button>
      </Stack>
    </Box>
  )
}

export default ProfileBar