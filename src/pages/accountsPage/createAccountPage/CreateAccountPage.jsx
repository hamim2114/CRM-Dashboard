import React from 'react';
import './CreateAccountPage.scss';
import { Autocomplete, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person2';

const CreateAccountPage = () => {

  return (
    <div className="create-account">
      <div className="topbar">
        <div className="left">
          <span className='h1'>Create Account</span>
        </div>
        <div className="right">
          <Link to='/accounts' className='outline-btn link'>Cancel</Link>
          <button className='outline-btn'>Save and New</button>
          <button className='filled-btn'>Save</button>
        </div>
      </div>
      <div className="img-upload">
        <span>Account Image</span>
        <label htmlFor="img-upload"><Person2Icon/></label>
        <input id='img-upload' hidden type="file" />
      </div>
      <div className="lead-info">
        <span className='h5'>Account Information</span>
        <div className="lead-info-container">
          <div className="left">
            <div className="left-wrapper">
              <div className="info-input">
                <span>First Name</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Last Name</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Title</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Email</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Secondary Email</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Phone</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Fax</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Mobile</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Skype ID</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Twitter</span>
                <input className='info-field' type="text" placeholder='' />
              </div>

            </div>
          </div>
          <div className="right">
            <div className="right-wrapper">
              <div className="info-input">
                <span>Lead Owner</span>
                <input className='info-field' type="text" placeholder='Logged User' />
              </div>
              <div className="info-input">
                <span>Company</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Website</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              
              
              <div className="info-input">
                <span>No. of Employees</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Annual Revenue</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: '5rem 0' }} className="address-info">
        <span className='h5'>Address Information</span>
        <div className="lead-info-container">
          <div className="left">
            <div className="left-wrapper">
              <div className="info-input">
                <span>Street</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>State</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Country</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-wrapper">
              <div className="info-input">
                <span>City</span>
                <input className='info-field' type="text" />
              </div>
              <div className="info-input">
                <span>Zip Code</span>
                <input className='info-field' type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: '5rem 0' }} className="desc-info">
        <span className='h5'>Description Information</span>
        <div className="lead-info-container">
          <div className="left">
            <div className="left-wrapper">
              <div className="info-input">
                <span>Description</span>
                <textarea style={{border: '1px solid #C4C4C4'}} name="" id="" cols="110" rows="2"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountPage