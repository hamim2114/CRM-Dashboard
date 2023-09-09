import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Add, AddBox, Event, Notifications, Person, Search, Settings, Store } from '@mui/icons-material';
import ProfileBar from '../profileBar/ProfileBar';
import { Avatar, Box, Menu, MenuItem } from '@mui/material';

const Navbar = () => {
  const { pathname } = useLocation();
  const [showProfileBar, setShowProfileBar] = useState(false);

  const profileBarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (profileBarRef.current && !profileBarRef.current.contains(event.target)) {
      setShowProfileBar(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav ref={profileBarRef} className='navbar'>
      <div className="navbar-container">
        <div className="navbar-container-logo">CRM</div>
        <div className="navbar-container-link">
          <div>Home</div>
          <Link to='/leads' className={`link item ${pathname === '/leads' && 'active'}`}>Leads</Link>
          <Link to='/contacts' className={`link item ${pathname === '/contacts' && 'active'}`}>Contacts</Link>
          <Link to='/accounts' className={`link item ${pathname === '/accounts' && 'active'}`}>Accounts</Link>
          {/* <div>Deals</div> */}
          <Link to='/tasks' className={`link item ${pathname === '/tasks' && 'active'}`}>Tasks</Link>
          <Link to='/meetings' className={`link item ${pathname === '/meetings' && 'active'}`}>Meetings</Link>
          <Link to='/calls' className={`link item ${pathname === '/calls' && 'active'}`}>Calls</Link>
          <Link to='/reports' className={`link item ${pathname === '/reports' && 'active'}`}>Reports</Link>
          <div>Analytics</div>
          <div>Service</div>
          <div>Projects</div>
        </div>
        <div className="control">
          <div className="icons">
            <Box>
              <AddBox fontSize='large' onClick={handleClick} />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to='/leads/create' className='link flex-center'><Add fontSize='' />Lead</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to='/contacts/create' className='link flex-center'><Add fontSize='' />Contact</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to='/accounts/create' className='link flex-center'><Add fontSize='' />Account</Link>
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>
                  <Link to='/' className='link flex-center'><Add fontSize='' />Deal</Link>
                </MenuItem> */}
                <MenuItem onClick={handleClose}>
                  <Link to='/task/create' className='link flex-center'><Add fontSize='' />Task</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to='/meetings/create' className='link flex-center'><Add fontSize='' />Meeting</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to='/calls/create' className='link flex-center'><Add fontSize='' />Call</Link>
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>
                  <Link to='/' className='link flex-center'><Add fontSize='' />Campaign</Link>
                </MenuItem> */}
              </Menu>
            </Box>
            <Search />
            <Notifications />
            <Event />
            <Store />
            <Link className='link' to='/settings/index'><Settings /></Link>
          </div>
          <Avatar sx={{ cursor: 'pointer' }} onClick={() => setShowProfileBar(p => !p)} />
          <ProfileBar
            showProfileBar={showProfileBar}
            setShowProfileBar={setShowProfileBar}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar