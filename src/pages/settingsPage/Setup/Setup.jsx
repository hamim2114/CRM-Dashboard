import { ArrowRight } from '@mui/icons-material'
import { Box, IconButton, Input, Stack, TextField, Typography, styled } from '@mui/material'
import { GridSearchIcon } from '@mui/x-data-grid'
import React, { useReducer } from 'react'
import './Setup.scss';
import { Link } from 'react-router-dom';

const Setup = () => {

  return (
    <Box sx={{
      width: '15%',
      bgcolor: '#fff',
      height: '100%',
      p: 3,
      bgcolor: '#fff'
    }}>
      <Typography variant='h6' fontWeight='bold' mb={2}>Setup</Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          fullWidth
          size="small"
          InputProps={{
            startAdornment: (
              <IconButton>
                <GridSearchIcon />
              </IconButton>
            ),
          }}
        />
      </div>
      <Stack mt={4} gap={2}>
        <div className='s-menu'>
          <div className="s-menu-name">
            <span>General</span>
          </div>
          <div className='s-menu-item active'>
            <Link className='link item-link active'>Personal Settings</Link>
            <Link className='link item-link'>Company Details</Link>
          </div>
        </div>
        <div className='s-menu'>
          <div className="s-menu-name">
            <span>User and Control</span>
          </div>
          <div className="s-menu-item">
            <Link className='link item-link'>Users</Link>
            <Link className='link item-link'>Security Control</Link>
            <Link className='link item-link'>Compliance Settings</Link>
          </div>
        </div>
        <div className='s-menu'>
          <div className="s-menu-name">
            <span>Channels</span>
          </div>
          <div className="s-menu-item">
            <Link className='link item-link'>Email</Link>
            <Link className='link item-link'>Notification SMS</Link>
            <Link className='link item-link'>Chat</Link>
          </div>
        </div>
      </Stack>
    </Box>
  )
}

export default Setup