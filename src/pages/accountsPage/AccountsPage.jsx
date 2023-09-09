import './AccountsPage.scss';
import React, { useEffect, useRef } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import { useReducer, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { leadData } from '../../data/leadsData';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
//for select buttton
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Menu from '@mui/material/Menu';
import { IconButton } from '@mui/material';
import DataTable from '../../common/dataTable/DataTable';
import { Link, useNavigate } from 'react-router-dom';



const AccountsPage = () => {
  const [systemFilter, setSystemFilter] = useState(true);
  const [fieldsFilter, setFieldsFilter] = useState(true);

  const initialFilterState = {
    touchedRecords: false,
    untouchedRecords: false,
    recordAction: false,
    relatedRecordAction: false,
    locked: false,
    latestEmailStatus: false,
    activities: false,
    notes: false,
    campaigns: false,
    annual: false,
    city: false,
    company: false,
    convertedAccount: false,
    convertedContact: false,
    convertedDeal: false,
    country: false,
    createdBy: false,
    creatdeTime: false,
    email: false,
    emailOptOut: false,
    fax: false,
    firstName: false,
    industry: false,
    lastActivityTime: false,
    lastName: false,
    leadConversionTime: false,
    leadName: false,
    leadOwner: false,
    leadSource: false,
    leadStatus: false,
    mobile: false,
    modifiedBy: false,
    modifiedTime: false,
    noOfEmployees: false,
    phone: false,
    rating: false,
    salutation: false,
    secondaryEmail: false,
    skypeId: false,
    state: false,
    street: false,
    tag: false,
    title: false,
    twitter: false,
    unsubscribedMode: false,
    unsubscribedTime: false,
    website: false,
    zipCode: false,
  };

  const filterReducer = (state, action) => {
    switch (action.type) {
      case 'TOUCHED':
        return { ...state, touchedRecords: !state.touchedRecords };
      case 'UNTOUCHED':
        return { ...state, untouchedRecords: !state.untouchedRecords };
      case 'RECORD-ACTION':
        return { ...state, recordAction: !state.recordAction };
      case 'RELATED-RECORD-ACTION':
        return { ...state, relatedRecordAction: !state.relatedRecordAction };
      case 'LOCKED':
        return { ...state, locked: !state.locked };
      case 'EMAIL-STATUS':
        return { ...state, latestEmailStatus: !state.latestEmailStatus };
      case 'ACTIVITIES':
        return { ...state, activities: !state.activities };
      case 'NOTES':
        return { ...state, notes: !state.notes };
      case 'CAMPAIGN':
        return { ...state, campaigns: !state.campaigns };
      case 'ANNUAL':
        return { ...state, annual: !state.annual };
      case 'CITY':
        return { ...state, city: !state.city };
      case 'COMPANY':
        return { ...state, company: !state.company };
      case 'CONVERTED-ACCOUNT':
        return { ...state, convertedAccount: !state.convertedAccount };
      case 'CONVERTED-CONTACT':
        return { ...state, convertedContact: !state.convertedContact };
      case 'CONVERTED-DEAL':
        return { ...state, convertedDeal: !state.convertedDeal };
      case 'COUNTRY':
        return { ...state, country: !state.country };
      case 'CREATED-BY':
        return { ...state, createdBy: !state.createdBy };
      case 'CREATED-TIME':
        return { ...state, creatdeTime: !state.creatdeTime };
      case 'EMAIL':
        return { ...state, email: !state.email };
      case 'EMAIL-OPT-OUT':
        return { ...state, emailOptOut: !state.emailOptOut };
      case 'FAX':
        return { ...state, fax: !state.fax };
      case 'FIRST-NAME':
        return { ...state, firstName: !state.firstName };
      case 'INDUSTRY':
        return { ...state, industry: !state.industry };
      case 'LAST-ACTIVITY-TIME':
        return { ...state, lastActivityTime: !state.lastActivityTime };
      case 'LAST-NAME':
        return { ...state, lastName: !state.lastName };
      case 'LEAD-CONVERSION-TIME':
        return { ...state, leadConversionTime: !state.leadConversionTime };
      case 'LEAD-NAME':
        return { ...state, leadName: !state.leadName };
      case 'LEAD-OWNER':
        return { ...state, leadOwner: !state.leadOwner };
      case 'LEAD-SOURCE':
        return { ...state, leadSource: !state.leadSource };
      case 'LEAD-STATUS':
        return { ...state, leadStatus: !state.leadStatus };
      case 'MOBILE':
        return { ...state, mobile: !state.mobile };
      case 'MODIFIED-BY':
        return { ...state, modifiedBy: !state.modifiedBy };
      case 'MODIFIED-TIME':
        return { ...state, modifiedTime: !state.modifiedTime };
      case 'NO-OF-EMPLOYEES':
        return { ...state, noOfEmployees: !state.noOfEmployees };
      case 'PHONE':
        return { ...state, phone: !state.phone };
      case 'RATING':
        return { ...state, rating: !state.rating };
      case 'SALUTATION':
        return { ...state, salutation: !state.salutation };
      case 'SECONDARY-EMAIL':
        return { ...state, secondaryEmail: !state.secondaryEmail };
      case 'SKYPE-ID':
        return { ...state, skypeId: !state.skypeId };
      case 'STATE':
        return { ...state, state: !state.state };
      case 'STREET':
        return { ...state, street: !state.street };
      case 'TAG':
        return { ...state, tag: !state.tag };
      case 'TITLE':
        return { ...state, title: !state.title };
      case 'TWITTER':
        return { ...state, twitter: !state.twitter };
      case 'UNSUBSCRIBED-MODE':
        return { ...state, unsubscribedMode: !state.unsubscribedMode };
      case 'UNSUBSCRIBED-TIME':
        return { ...state, unsubscribedTime: !state.unsubscribedTime };
      case 'WEBSITE':
        return { ...state, website: !state.website };
      case 'ZIP-CODE':
        return { ...state, zipCode: !state.zipCode };
      default: return state;
    }
  }

  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

  const isAnyFilterActive = Object.values(filterState).some(Boolean);


  //for all contact button
  const [accounts, setAccounts] = useState('');

  const handleAllAccountsChange = (event) => {
    setAccounts(event.target.value);
  };

  //for action button
  const [actions, setActions] = useState('');

  const handleActionsChange = (event) => {
    setActions(event.target.value);
  };

  const navigate = useNavigate();
  //for option menu in every row
  const RowWithOptionsMenu = ({ row }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
      event.stopPropagation();
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleEdit = (rowData) => {
      navigate(`/accounts/edit/${rowData.id}`)
      handleMenuClose();
    };

    const handleDelete = () => {
      // Handle delete action here
      handleMenuClose();
    };

    const handleCreateTask = () => {
      navigate(`/accounts/createtask/${row.id}`)
    }

    return (
      <div>
        <IconButton onClick={handleMenuOpen}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleEdit(row)}>Edit</MenuItem>
          <MenuItem onClick={handleDelete}>Send Email</MenuItem>
          <MenuItem onClick={handleCreateTask}>Create Task</MenuItem>
          <MenuItem >Add Tags</MenuItem>
          <MenuItem >Delete</MenuItem>
          <MenuItem >Create Call</MenuItem>
          <MenuItem >Schedule a Call</MenuItem>
          <MenuItem >Log a Call</MenuItem>
          <MenuItem >Create Meeting</MenuItem>
        </Menu>
      </div>
    );
  };


  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
    console.log('Selected Row IDs:', selection);
  };

  const handleRowClick = (params) => {
    navigate(`/accounts/profile/${params.row.id}`)
  }

  const columns = [
    {
      field: 'accountName',
      headerName: 'Account Name',
      width: 200,
      headerClassName: 'table-header'
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 300,
      headerClassName: 'table-header'
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 190,
      headerClassName: 'table-header'
    },
    {
      field: 'website',
      headerName: 'website',
      width: 250,
      headerClassName: 'table-header'
    },
    {
      field: 'accountOwner',
      headerName: 'Account Owner',
      width: 150,
      headerClassName: 'table-header'
    },
    !selectedRows.length > 0 && {
      field: 'options',
      headerName: '',
      width: 70,
      renderCell: (params) => <RowWithOptionsMenu row={params.row} />,
    },
  ];

  const row = leadData.map(data => ({
    id: data.id,
    contactName: data.name,
    accountName: data.accountName,
    email: data.email,
    phone: data.phone,
    website: data.webSite,
    accountOwner: 'Logged User'
  }))



  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="left">
            {
              selectedRows.length > 0 ? <div className="after-select-btn">
                <div className="left-btn">Create Task</div>
                <select className="btn-option">
                  <option value="" selected disabled>Tags</option>
                  <option value="">Add Tags</option>
                  <option value="">Remove Tags</option>
                </select>
                <div className="left-btn">Mass Update</div>
                <select className="btn-option">
                  <option value="" selected disabled>Actions</option>
                  <option value="">Mail Merge</option>
                  <option value="">Delete</option>
                </select>
              </div> : ''
            }


            <div style={{ visibility: selectedRows.length > 0 ? 'hidden' : '' }} className="filter-left-btn"><FilterAltIcon /></div>

            {!selectedRows.length > 0 && <FormControl className='all-contact-btn' sx={{ m: 0, minWidth: 140, borderRadius: '5px', }} size="small">
              <InputLabel id="demo-select-small-label">All Accounts</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={accounts}
                label="All Accounts"
                onChange={handleAllAccountsChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='All-Contacts'>All Accounts</MenuItem>
                <MenuItem value='All-Locked-Contacts'>All Locked Accounts</MenuItem>
                <MenuItem value='Mailing-Labels'>Mailing Labels</MenuItem>
                <MenuItem value='My-Contacts'>My Accounts</MenuItem>
                <MenuItem value='New-Last-Week'>New Last Week</MenuItem>
                <MenuItem value='New-This-Week'>New This Week</MenuItem>
                <MenuItem value='Recently-Created-Contacts'>Recently Created Accounts</MenuItem>
                <MenuItem value='Recently-Modified-Contacts'>Recently Modified Accounts</MenuItem>
                <MenuItem value='Unread-Contacts'>Unread Accounts</MenuItem>
              </Select>
            </FormControl>}

          </div>
          <div style={{ visibility: selectedRows.length > 0 ? 'hidden' : '' }} className="right">
            <Link to='/accounts/create'>
              <Button sx={{ fontWeight: 'bold', textTransform: 'none', padding: '8px 20px' }} variant="contained">Create Account</Button>
            </Link>

            <FormControl className='actions-btn' sx={{ m: 0, minWidth: 120, borderRadius: '5px' }} size="small">
              <InputLabel id="demo-select-small-label">Actions</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={actions}
                label="Actions"
                onChange={handleActionsChange}
              >
                <MenuItem value='Mass-Delete'>Mass Delete</MenuItem>
                <MenuItem value='Mass-Update'>Mass Update</MenuItem>
                <MenuItem value='Manage-Tags'>Manage Tags</MenuItem>
                <MenuItem value='Drafts'>Drafts</MenuItem>
                <MenuItem value='Deduplicate-Contacts'>Deduplicate Contacts</MenuItem>
              </Select>
            </FormControl>

          </div>
        </div>
      </div>


      <div className="accounts-page">
        <div className="accounts-page-container">
          <div className="top">
            <div className="total-record">
              <span>Total Records: <b>{leadData.length}</b></span>
            </div>
          </div>
          <div className="bottom">
            <div style={{ minWidth: '300px' }} className="left">
              <h3 >Filter Accounts by</h3>
              <div className="search">
                <SearchIcon />
                <input type="search" />
              </div>
              <div className="filter-btn" onClick={() => setSystemFilter(!systemFilter)}>
                {systemFilter ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                <button>System Defined Filters</button>
              </div>
              <div className={`filter-list ${systemFilter && 'active'}`}>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'TOUCHED' })} type="checkbox" name="" id="touched-records" />
                    <label htmlFor="touched-records">Touched records</label>
                  </div>
                  <div className={`checkbox-item ${filterState.touchedRecords && 'active'}`}>
                    <div className="up">
                      <span>By</span>
                      <select name="">
                        <option value="">User & System</option>
                        <option value="">User Or System</option>
                        <option value="">User</option>
                        <option value="">System</option>
                        <option value="">Only by User</option>
                        <option value="">Only by System</option>
                      </select>
                    </div>
                    <div className="down">
                      <select className='select1' name="" id="">
                        <option value="">In the last</option>
                        <option value="">Today</option>
                        <option value="">This Week</option>
                        <option value="">This Month</option>
                        <option value="">This Year</option>
                        <option value="">In the last 30 days</option>
                        <option value="">In the last 60 days</option>
                        <option value="">In the last 90 days</option>
                        <option value="">Until Now</option>
                      </select>
                      <input type="text" value='2' />
                      <select className='select2' name="" id="">
                        <option value="">days</option>
                        <option value="">weeks</option>
                        <option value="">months</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox">
                    <input onClick={() => dispatch({ type: 'UNTOUCHED' })} type="checkbox" name="" id="untouched-records" />
                    <label htmlFor="untouched-records">Untouched records</label>
                  </div>
                  <div className={`checkbox-item ${filterState.untouchedRecords && 'active'}`}>
                    <div className="up">
                      <span>By</span>
                      <select name="">
                        <option value="">User & System</option>
                        <option value="">User Or System</option>
                        <option value="">User</option>
                        <option value="">System</option>
                        <option value="">Only by User</option>
                        <option value="">Only by System</option>
                      </select>
                    </div>
                    <div className="down">
                      <select className='select1' name="" id="">
                        <option value="">In the last</option>
                        <option value="">Today</option>
                        <option value="">This Week</option>
                        <option value="">This Month</option>
                        <option value="">This Year</option>
                        <option value="">In the last 30 days</option>
                        <option value="">In the last 60 days</option>
                        <option value="">In the last 90 days</option>
                        <option value="">Until Now</option>
                      </select>
                      <input type="text" value='2' />
                      <select className='select2' name="" id="">
                        <option value="">days</option>
                        <option value="">weeks</option>
                        <option value="">months</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox">
                    <input onClick={() => dispatch({ type: 'RECORD-ACTION' })} type="checkbox" name="" id="record-action" />
                    <label htmlFor="record-action">Record Action</label>
                  </div>
                  <div className={`checkbox-item ${filterState.recordAction && 'active'}`}>
                    <select name="">
                      <option value="">Modified</option>
                      <option value="">Not Modified</option>
                    </select>
                    <div className="up">
                      <span>By</span>
                      <select name="">
                        <option value="">User & System</option>
                        <option value="">User Or System</option>
                        <option value="">User</option>
                        <option value="">System</option>
                        <option value="">Only by User</option>
                        <option value="">Only by System</option>
                      </select>
                    </div>
                    <div className="down">
                      <select className='select1' name="" id="">
                        <option value="">In the last</option>
                        <option value="">Today</option>
                        <option value="">This Week</option>
                        <option value="">This Month</option>
                        <option value="">This Year</option>
                        <option value="">In the last 30 days</option>
                        <option value="">In the last 60 days</option>
                        <option value="">In the last 90 days</option>
                        <option value="">Until Now</option>
                      </select>
                      <input type="text" value='2' />
                      <select className='select2' name="" id="">
                        <option value="">days</option>
                        <option value="">weeks</option>
                        <option value="">months</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox">
                    <input onClick={() => dispatch({ type: 'RELATED-RECORD-ACTION' })} type="checkbox" name="" id="related-record-action" />
                    <label htmlFor="related-record-action">Related Records Action</label>
                  </div>
                  <div className={`checkbox-item ${filterState.relatedRecordAction && 'active'}`}>
                    <select name="">
                      <option value="">Done</option>
                      <option value="">Not Done</option>
                    </select>
                    <div className="up">
                      <span>By</span>
                      <select name="">
                        <option value="">User & System</option>
                        <option value="">User Or System</option>
                        <option value="">User</option>
                        <option value="">System</option>
                        <option value="">Only by User</option>
                        <option value="">Only by System</option>
                      </select>
                    </div>
                    <div className="down">
                      <select className='select1' name="" id="">
                        <option value="">In the last</option>
                        <option value="">Today</option>
                        <option value="">This Week</option>
                        <option value="">This Month</option>
                        <option value="">This Year</option>
                        <option value="">In the last 30 days</option>
                        <option value="">In the last 60 days</option>
                        <option value="">In the last 90 days</option>
                        <option value="">Until Now</option>
                      </select>
                      <input type="text" value='2' />
                      <select className='select2' name="" id="">
                        <option value="">days</option>
                        <option value="">weeks</option>
                        <option value="">months</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox">
                    <input onClick={() => dispatch({ type: 'LOCKED' })} type="checkbox" name="" id="locked" />
                    <label htmlFor="locked">Locked</label>
                  </div>
                  <div className={`checkbox-item ${filterState.locked && 'active'}`}>
                    <label for="option1">True</label>
                    <input type="radio" id="option1" name="options" />
                    <label for="option2">False</label>
                    <input type="radio" id="option2" name="options" />
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox">
                    <input onClick={() => dispatch({ type: 'EMAIL-STATUS' })} type="checkbox" name="" id="email-status" />
                    <label htmlFor="email-status">Latest Email Status</label>
                  </div>
                  <div className={`checkbox-item ${filterState.latestEmailStatus && 'active'}`}>
                    <div className="up">
                      <select name="">
                        <option value="">Sent</option>
                        <option value="">Not Sent</option>
                        <option value="">Not Opened</option>
                        <option value="">Clicked</option>
                        <option value="">Received</option>
                        <option value="">Not Received</option>
                        <option value="">Bounced</option>
                        <option value="">Opened and not responded</option>
                      </select>
                    </div>
                    <div className="down">
                      <select className='select1' name="" id="">
                        <option value="">In the last</option>
                        <option value="">On</option>
                        <option value="">Before</option>
                        <option value="">After</option>
                        <option value="">Between</option>
                        <option value="">Today</option>
                        <option value="">Yesterday</option>
                        <option value="">This Week</option>
                        <option value="">Last Week</option>
                        <option value="">This Month</option>
                        <option value="">Last Month</option>
                        <option value="">This Year</option>
                      </select>
                      <input type="text" value='2' />
                      <select className='select2' name="" id="">
                        <option value="">days</option>
                        <option value="">weeks</option>
                        <option value="">months</option>
                      </select>
                    </div>
                    <div className="email-status">
                      <span>and status is</span>
                      <div className="status-radio-group">
                        <input type="radio" name="status" id="opened" />
                        <label htmlFor="opened">opened</label>
                      </div>
                      <div className="status-radio-group">
                        <input type="radio" name="status" id="clicked" />
                        <label htmlFor="clicked">clicked</label>
                      </div>
                      <div className="status-radio-group">
                        <input type="radio" name="status" id="not-opened" />
                        <label htmlFor="not-opened">not opened</label>
                      </div>
                      <div className="status-radio-group">
                        <input type="radio" name="status" id="bounced" />
                        <label htmlFor="bounced">bounced</label>
                      </div>
                      <div className="status-radio-group">
                        <input type="radio" name="status" id="responded" />
                        <label htmlFor="responded">responded</label>
                      </div>
                      <div className="status-radio-group">
                        <input type="radio" name="status" id="opened-&-not-responded" />
                        <label htmlFor="opened-&-not-responded">opened and not responded</label>
                      </div>
                      <div className="status-radio-group">
                        <input type="radio" name="status" id="Any-of-the-above" />
                        <label htmlFor="Any-of-the-above">Any of the above</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox">
                    <input onClick={() => dispatch({ type: 'ACTIVITIES' })} type="checkbox" name="" id="activities" />
                    <label htmlFor="activities">Activities</label>
                  </div>
                  <div className={`checkbox-item ${filterState.activities && 'active'}`}>
                    <div className="activities">
                      <div className="status-radio-group">
                        <input type="radio" name="activities" id="Without-Open-Activity" />
                        <label htmlFor="Without-Open-Activity">Without Open Activity</label>
                      </div>
                      <div className="status-radio-group">
                        <input type="radio" name="activities" id="Overdue" />
                        <label htmlFor="Overdue">Overdue</label>
                      </div>
                      <div className="status-radio-group">
                        <input type="radio" name="activities" id="Activity-Due" />
                        <label htmlFor="Activity-Due">Activity Due</label>
                      </div>
                      <select name="">
                        <option value="">Today</option>
                        <option value="">Tomorrow</option>
                        <option value="">Next 7 days</option>
                        <option value="">Today + Overdue</option>
                      </select>
                      <div className="status-radio-group">
                        <input type="radio" name="activities" id="Without-Any-Activity" />
                        <label htmlFor="Without-Any-Activity">Without Any Activity</label>
                      </div>
                      <div className="status-radio-group">
                        <input type="radio" name="activities" id="Activity-Done" />
                        <label htmlFor="Activity-Done">Activity Done</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox">
                    <input onClick={() => dispatch({ type: 'NOTES' })} type="checkbox" name="" id="notes" />
                    <label htmlFor="notes">Notes</label>
                  </div>
                  <div className={`checkbox-item ${filterState.notes && 'active'}`}>
                    <div className="notes">
                      <div className="status-radio-group">
                        <input type="radio" name="notes" id="Without-Open-Activity" />
                        <label htmlFor="Without-Open-Activity">Without Open Activity</label>
                      </div>
                    </div>
                    <div className="down">
                      <select className='select1' name="" id="">
                        <option value="">In the last</option>
                        <option value="">On</option>
                        <option value="">Before</option>
                        <option value="">After</option>
                        <option value="">Between</option>
                        <option value="">Today</option>
                        <option value="">Yesterday</option>
                        <option value="">This Week</option>
                        <option value="">Last Week</option>
                        <option value="">This Month</option>
                        <option value="">Last Month</option>
                        <option value="">Until Today</option>
                      </select>
                      <input type="text" value='2' />
                      <select className='select2' name="" id="">
                        <option value="">days</option>
                        <option value="">weeks</option>
                        <option value="">months</option>
                      </select>
                    </div>
                    <div className="notes">
                      <div className="status-radio-group">
                        <input type="radio" name="notes" id="notes-added" />
                        <label htmlFor="notes-added">Notes Added</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox">
                    <input onClick={() => dispatch({ type: 'CAMPAIGN' })} type="checkbox" name="" id="campaign" />
                    <label htmlFor="campaign">Campaigns</label>
                  </div>
                  <div className={`checkbox-item ${filterState.campaigns && 'active'}`}>
                    <select className='select' name="" id="">
                      <option selected value="">Select Campaign Type -</option>
                      <option value="">Advertisement</option>
                      <option value="">Banner Ads</option>
                      <option value="">Conference</option>
                      <option value="">Direct mail</option>
                      <option value="">Email</option>
                      <option value="">Other</option>
                      <option value="">Partners</option>
                      <option value="">Public Relations</option>
                      <option value="">Referral Program</option>
                      <option value="">Telemarketing</option>
                      <option value="">Trade Show</option>
                      <option value="">Webinar</option>
                    </select>
                    <select className='select' name="" id="">
                      <option selected value="">Select Campaign Status -</option>
                      <option value="">Active</option>
                      <option value="">Complate</option>
                      <option value="">Inactive</option>
                      <option value="">Planning</option>
                    </select>
                    <input className='campaign-field' placeholder='Campaign Name' type="text" />
                  </div>
                </div>
              </div>
              {/* filter by fields */}
              <div className="filter-btn" onClick={() => setFieldsFilter(!fieldsFilter)}>
                {fieldsFilter ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                <button>Filter By Fields</button>
              </div>
              <div className={`filter-list ${fieldsFilter && 'active'}`}>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'ANNUAL' })} type="checkbox" name="" id="annual" />
                    <label htmlFor="annual">Annual Revenue</label>
                  </div>
                  <div className={`checkbox-item ${filterState.annual && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">between</option>
                        <option value="">not between</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'CITY' })} type="checkbox" name="" id="city" />
                    <label htmlFor="city">City</label>
                  </div>
                  <div className={`checkbox-item ${filterState.city && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'COMPANY' })} type="checkbox" name="" id="compay" />
                    <label htmlFor="compay">Company</label>
                  </div>
                  <div className={`checkbox-item ${filterState.company && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'CONVERTED-ACCOUNT' })} type="checkbox" name="" id="converted-account" />
                    <label htmlFor="converted-account">Converted Account</label>
                  </div>
                  <div className={`checkbox-item ${filterState.convertedAccount && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'CONVERTED-CONTACT' })} type="checkbox" name="" id="converted-contact" />
                    <label htmlFor="converted-contact">Converted Contact</label>
                  </div>
                  <div className={`checkbox-item ${filterState.convertedContact && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'CONVERTED-DEAL' })} type="checkbox" name="" id="converted-deal" />
                    <label htmlFor="converted-deal">Converted Deal</label>
                  </div>
                  <div className={`checkbox-item ${filterState.convertedDeal && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'COUNTRY' })} type="checkbox" name="" id="country" />
                    <label htmlFor="country">Country</label>
                  </div>
                  <div className={`checkbox-item ${filterState.country && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'CREATED-BY' })} type="checkbox" name="" id="created-by" />
                    <label htmlFor="created-by">Created By</label>
                  </div>
                  <div className={`checkbox-item ${filterState.createdBy && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'CREATED-TIME' })} type="checkbox" name="" id="created-time" />
                    <label htmlFor="created-time">Created Time</label>
                  </div>
                  <div className={`checkbox-item ${filterState.creatdeTime && 'active'}`}>
                    <div className="down">
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">in the last</option>
                        <option value="">due in</option>
                        <option value="">on</option>
                        <option value="">before</option>
                        <option value="">after</option>
                        <option value="">between</option>
                        <option value="">Today</option>
                        <option value="">Tommorow</option>
                        <option value="">Starting Tommorow</option>
                        <option value="">Yesterday</option>
                        <option value="">This Week</option>
                        <option value="">Last Month</option>
                        <option value="">This Year</option>
                        <option value="">Corrent FY</option>
                        <option value="">Corrent FQ</option>
                        <option value="">Last Year</option>
                        <option value="">Previous FY</option>
                        <option value="">Previous FQ</option>
                        <option value="">Next Year</option>
                        <option value="">Next FY</option>
                        <option value="">Next FQ</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '20px' }} type="text" value={2} />
                      <select name="" id="">
                        <option value="">days</option>
                        <option value="">weeks</option>
                        <option value="">months</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'EMAIL' })} type="checkbox" name="" id="email" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className={`checkbox-item ${filterState.email && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'EMAIL-OPT-OUT' })} type="checkbox" name="" id="email-opt-out" />
                    <label htmlFor="email-opt-out">Email Opt Out</label>
                  </div>
                  <div className={`checkbox-item ${filterState.emailOptOut && 'active'}`}>
                    <div className="down">
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <select name="" id="">
                        <option value="">Selected</option>
                        <option value="">Not Selected</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'FAX' })} type="checkbox" name="" id="fax" />
                    <label htmlFor="fax">Fax</label>
                  </div>
                  <div className={`checkbox-item ${filterState.fax && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'FIRST-NAME' })} type="checkbox" name="" id="first-name" />
                    <label htmlFor="first-name">First Name</label>
                  </div>
                  <div className={`checkbox-item ${filterState.firstName && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'LEAD-CONVERSION-TIME' })} type="checkbox" name="" id="lead-conversion-time" />
                    <label htmlFor="lead-conversion-time">Lead Conversion Time</label>
                  </div>
                  <div className={`checkbox-item ${filterState.leadConversionTime && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">between</option>
                        <option value="">not between</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'LEAD-NAME' })} type="checkbox" name="" id="lead-name" />
                    <label htmlFor="lead-name">Lead Name</label>
                  </div>
                  <div className={`checkbox-item ${filterState.leadName && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'TITLE' })} type="checkbox" name="" id="title" />
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className={`checkbox-item ${filterState.title && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'WEBSITE' })} type="checkbox" name="" id="website" />
                    <label htmlFor="website">Website</label>
                  </div>
                  <div className={`checkbox-item ${filterState.website && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

                <div className="filter-list-item">
                  <div className="checkbox" >
                    <input onClick={() => dispatch({ type: 'ZIP-CODE' })} type="checkbox" name="" id="zip-code" />
                    <label htmlFor="zip-code">Zip Code</label>
                  </div>
                  <div className={`checkbox-item ${filterState.zipCode && 'active'}`}>
                    <div className="down" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <select style={{ marginLeft: '0' }} className='select1' name="" id="">
                        <option value="">is</option>
                        <option value="">isn't</option>
                        <option value="">contains</option>
                        <option value="">doesn't contain</option>
                        <option value="">start with</option>
                        <option value="">ends with</option>
                        <option value="">is empty</option>
                        <option value="">is not empty</option>
                      </select>
                      <input style={{ width: '200px' }} type="text" placeholder='Type Here' />
                    </div>
                  </div>
                </div>

              </div>
              <div className={`apply-filter-btn ${isAnyFilterActive && 'active'}`}>
                <button className='apply-filter'>Apply Filter</button>
                <button className='clear'>Clear</button>
              </div>
            </div>
            <div className="right">
              <DataTable
                columns={columns}
                row={row}
                handleSelectionChange={handleSelectionChange}
                selectedRows={selectedRows}
                handleRowClick={handleRowClick}
              />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default AccountsPage