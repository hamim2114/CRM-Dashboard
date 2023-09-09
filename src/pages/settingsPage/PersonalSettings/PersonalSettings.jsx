import { Avatar, Box, Button, Collapse, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Setup from '../Setup/Setup'
import { Edit, EmailOutlined, FaxOutlined, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material'
import './PersonalSettings.scss'


const PersonalSettings = () => {
  const [userinfoshow, setUserinfoshow] = useState(false)
  return (
    <Box sx={{
      bgcolor: 'lightGray',
      height: '95vh',
      display: 'flex'
    }}>
      <Setup />
      <Box sx={{
        width: '85%',
        p: 3,
        overflow: 'auto'
      }}>

        <Box sx={{
          bgcolor: '#fff',
          p: 3,
          borderRadius: 2,
          mb: 3
        }}>
          <Stack mb={4} width='100%' direction='row' alignItems='center' justifyContent='space-between'>
            <Stack direction='row' gap={3} alignItems='center'>
              <Avatar sx={{ width: '100px', height: '100px' }} />
              <Stack gap={2}>
                <Stack>
                  <Stack direction='row' gap={3} alignItems='center'>
                    <Typography variant='h6'>Logged User</Typography>
                    <Typography variant='subtitle2' sx={{
                      border: '1px solid red',
                      bgcolor: 'lightgoldenrodyellow',
                      color: 'red', pl: 1, pr: 1, borderRadius: 5
                    }}>Administrator</Typography>
                  </Stack>
                  <Typography variant='subtitle'>CEO at test</Typography>
                </Stack>
                <Stack direction='row' alignItems='center' gap={5} >
                  <Stack direction='row' alignItems='center' gap={1}><EmailOutlined /> <Typography>testmail@mail.com</Typography></Stack>
                  <Stack direction='row' alignItems='center' gap={1}><FaxOutlined /><Typography>555-555-5555</Typography></Stack>
                </Stack>
              </Stack>
            </Stack>
            <Edit />
          </Stack>
          <Button size='small' endIcon={!userinfoshow ? <KeyboardArrowDownOutlined /> : <KeyboardArrowUpOutlined />} onClick={() => setUserinfoshow(p => !p)}>{userinfoshow ? 'Hide Details' : 'Show Details'}</Button>

          <Collapse in={userinfoshow}>
            <Typography variant='h6'>User Information</Typography>
            <Stack>
              <div className='setting-info'>
                <span>First Name</span>
                <span>John</span>
              </div>
              <div className='setting-info'>
                <span>Last Name</span>
                <span>Due</span>
              </div>
              <div className='setting-info'>
                <span>Email</span>
                <span>testmail@mail.com</span>
              </div>
              <div className='setting-info'>
                <span>Role</span>
                <span>CEO</span>
              </div>
              <div className='setting-info'>
                <span>Profile</span>
                <span>Administrator</span>
              </div>
              <div className='setting-info'>
                <span>Added By</span>
                <span>Logged User <Typography variant='body2'>Sat, 12 Aug 2023 11:10 AM</Typography></span>
              </div>
              <div className='setting-info'>
                <span>Alias</span>
                <span>---</span>
              </div>
              <div className='setting-info'>
                <span>Phone</span>
                <span>555-555-5555</span>
              </div>
              <div className='setting-info'>
                <span>Mobile</span>
                <span>555-555-5555</span>
              </div>
              <div className='setting-info'>
                <span>Website</span>
                <span>johndue.com</span>
              </div>
              <div className='setting-info'>
                <span>Fax</span>
                <span>---</span>
              </div>
              <div className='setting-info'>
                <span>Date of Birth</span>
                <span>---</span>
              </div>
              <Typography variant='h6' mt={2}>Address Information</Typography>
              <div className='setting-info'>
                <span>Street</span>
                <span>---</span>
              </div>
              <div className='setting-info'>
                <span>City</span>
                <span>---</span>
              </div>
              <div className='setting-info'>
                <span>State</span>
                <span>Chittagong</span>
              </div>
              <div className='setting-info'>
                <span>Zip Code</span>
                <span>---</span>
              </div>
              <div className='setting-info'>
                <span>Country</span>
                <span>UK</span>
              </div>
            </Stack>
          </Collapse>
        </Box>

        <Box sx={{
          bgcolor: '#fff',
          p: 3,
          borderRadius: 2
        }}>
          <Typography variant='h6'>Local Information</Typography>
          <Stack>
            <div className='setting-info'>
              <span>Language</span>
              <span>English (United States)</span>
            </div>
            <div className='setting-info'>
              <span>Country Local</span>
              <span>United States</span>
            </div>
            <div className='setting-info'>
              <span>Date Format</span>
              <span>MM/DD/YYYY</span>
            </div>
            <div className='setting-info'>
              <span>Time Format</span>
              <span>12 Hours</span>
            </div>
            <div className='setting-info'>
              <span>Time Zone</span>
              <span>(GMT 6:0) Bangladesh Time (Asia/Dhaka)</span>
            </div>
            <div className='setting-info'>
              <span>Number Format</span>
              <span>123,456.789</span>
            </div>
          </Stack>
        </Box>

      </Box>
    </Box>
  )
}

export default PersonalSettings