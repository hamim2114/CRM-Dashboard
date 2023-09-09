import React from 'react';
import './EditLeadPage.scss';
import { Autocomplete, TextField } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person2';
import { leadData } from '../../../data/leadsData';

const EditLeadPage = () => {

  const {id} = useParams();
  const data = leadData.find((item) => item.id === id);
  
  return (
    <div className="create-lead">
      <div className="topbar">
        <div className="left">
          <span className='h1'>Edit Lead</span>
        </div>
        <div className="right">
          <Link to='/leads' className='outline-btn link'>Cancel</Link>
          <button className='outline-btn'>Save and New</button>
          <button className='filled-btn'>Save</button>
        </div>
      </div>
      <div className="img-upload">
        <span>Lead Image</span>
        <label htmlFor="img-upload"><Person2Icon/></label>
        <input id='img-upload' hidden type="file" />
      </div>
      <div className="lead-info">
        <span className='h5'>Lead Information</span>
        <div className="lead-info-container">
          <div className="left">
            <div className="left-wrapper">
              <div className="info-input">
                <span>First Name</span>
                <input className='info-field' type="text" placeholder='' value={data.name} />
              </div>
              <div className="info-input">
                <span>Last Name</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Title</span>
                <input className='info-field' type="text" placeholder=''  />
              </div>
              <div className="info-input">
                <span>Email</span>
                <input className='info-field' type="text" placeholder='' value={data.email} />
              </div>
              <div className="info-input">
                <span>Secondary Email</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Phone</span>
                <input className='info-field' type="text" placeholder='' value={data.phone} />
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
                <input className='info-field' type="text" placeholder='Logged User' value={'Logged User'} />
              </div>
              <div className="info-input">
                <span>Company</span>
                <input className='info-field' type="text" placeholder='' value={data.company} />
              </div>
              <div className="info-input">
                <span>Website</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Lead Status</span>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    { label: 'None' },
                    { label: 'Attempted to Contact' },
                    { label: 'Contact in Future' },
                    { label: 'Contacted' },
                    { label: 'Junk Lead' },
                    { label: 'Lost Lead' },
                    { label: 'Not Contacted' },
                    { label: 'Pre-Qualified' },
                    { label: 'Not Qualified' },
                  ]}
                  sx={{ width: '370px' }}
                  size='small'
                  renderInput={(params) => <TextField {...params} label="-Select-" />}
                />
              </div>
              <div className="info-input">
                <span>Lead Source</span>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    { label: 'None' },
                    { label: 'Advertisement' },
                    { label: 'Cold Call' },
                    { label: 'Employee Referral' },
                    { label: 'External Referral' },
                    { label: 'Online Store' },
                    { label: 'Twitter' },
                    { label: 'Facebook' },
                    { label: 'Partner' },
                    { label: 'Google+' },
                    { label: 'Public Relations' },
                    { label: 'Sales Email Alias' },
                    { label: 'Seminar Partner' },
                    { label: 'Internal Seminar' },
                    { label: 'Trade Show' },
                    { label: 'Web Download' },
                    { label: 'Web Research' },
                    { label: 'Chat' },
                  ]}
                  sx={{ width: '370px' }}
                  size='small'
                  renderInput={(params) => <TextField {...params} label="-Select-" />}
                />
              </div>
              <div className="info-input">
                <span>Industry</span>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    { label: 'None' },
                    { label: 'ASP (Application Service Provider)' },
                    { label: 'Data/Telecom OEM' },
                    { label: 'ERP (Enterprise Resource Planning)' },
                    { label: 'Government/Military' },
                    { label: 'Large Enterprise' },
                    { label: 'Management ISV' },
                    { label: 'MSP (Management Service Provider)' },
                    { label: 'Network Equipment Enterprise' },
                    { label: 'Non-management ISV' },
                    { label: 'Optical Network' },
                    { label: 'Service Provider' },
                    { label: 'Small/Medium Enterprice' },
                    { label: 'Storage Equipment' },
                    { label: 'Storage Service Provider' },
                    { label: 'System Integrator' },
                  ]}
                  sx={{ width: '370px' }}
                  size='small'
                  renderInput={(params) => <TextField {...params} label="-Select-" />}
                />
              </div>
              <div className="info-input">
                <span>No. of Employees</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Annual Revenue</span>
                <input className='info-field' type="text" placeholder='' />
              </div>
              <div className="info-input">
                <span>Industry</span>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    { label: 'None' },
                    { label: 'Acquired' },
                    { label: 'Active' },
                    { label: 'Market Failed' },
                    { label: 'Project Cancelled' },
                    { label: 'Shut Down' },
                  ]}
                  sx={{ width: '370px' }}
                  size='small'
                  renderInput={(params) => <TextField {...params} label="-Select-" />}
                />
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

export default EditLeadPage