import './MeetingsPage.scss';
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
import { IconButton, Modal, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DataTable from '../../common/dataTable/DataTable';
import CommonModal from '../../common/modal/CommonModal';
import CreateMeeting from './createMeeting/CreateMeeting';
import EditMeeting from './editMeeting/EditMeeting';
import { useNavigate } from 'react-router-dom';



const MeetingsPage = () => {
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


  //for all meeetings button
  const [meetings, setMeetings] = useState('');

  const handleAllMeetingsChange = (event) => {
    setMeetings(event.target.value);
  };

  //for action button
  const [actions, setActions] = useState('');

  const handleActionsChange = (event) => {
    setActions(event.target.value);
  };

  const navigate = useNavigate();

  //for option menu in every row
  const RowWithOptionsMenu = ({ row }) => {
    const handleEditClick = (event, rowData) => {
      event.stopPropagation();
      navigate(`/meetings/edit/${rowData.id}`)
    }
  return (
    <div>
      <IconButton >
        <EditIcon onClick={(event) => handleEditClick(event, row)} />
        </IconButton>
    </div>
  );
};

const handleRowClick = (params) => {
  navigate(`/meetings/details/${params.row.id}`)
}


const [selectedRows, setSelectedRows] = useState([]);

const handleSelectionChange = (selection) => {
  setSelectedRows(selection);
};

const columns = [
  {
    field: 'title',
    headerName: 'Title',
    width: 180,
    headerClassName: 'table-header'
  },
  {
    field: 'from',
    headerName: 'From',
    width: 200,
    headerClassName: 'table-header'
  },
  {
    field: 'to',
    headerName: 'To',
    width: 200,
    headerClassName: 'table-header'
  },
  {
    field: 'relatedTo',
    headerName: 'Related To',
    width: 180,
    headerClassName: 'table-header'
  },
  {
    field: 'contactName',
    headerName: 'Contact Name',
    width: 180,
    headerClassName: 'table-header'
  },
  {
    field: 'host',
    headerName: 'Host',
    width: 120,
    headerClassName: 'table-header'
  },
  !selectedRows.length > 0 && {
    field: 'options',
    headerName: '',
    width: 70,
    renderCell: (params) => <RowWithOptionsMenu row={params.row} />,
  },
];

const row = leadData.reduce((result, data) => {
  if (data.meetings) {
    result.push({
      id: data.id,
      title: data.meetings.title,
      from: data.meetings.from,
      to: data.meetings.to,
      relatedTo: data.meetings.relatedTo,
      contactName: data.name,
      host: 'Logged User'
    })
  }
  return result;
}, [])

const [openCreateModal, setOpenCreateModal] = useState(false);
const handleClose = () => setOpenCreateModal(false);


return (
  <>
    <div className="topbar">
      <div className="topbar-container">
        <div className="left">
          {
            selectedRows.length > 0 ? <div className="after-select-btn">
              <select className="btn-option">
                <option value="" selected disabled>Tags</option>
                <option value="">Add Tags</option>
                <option value="">Remove Tags</option>
              </select>
              <div className="left-btn">Mass Update</div>
              <div className="left-btn">Delete</div>
            </div> : ''
          }


          <div style={{ visibility: selectedRows.length > 0 ? 'hidden' : '' }} className="filter-left-btn"><FilterAltIcon /></div>

          {!selectedRows.length > 0 && <FormControl className='all-contact-btn' sx={{ m: 0, minWidth: 140, borderRadius: '5px', }} size="small">
            <InputLabel id="demo-select-small-label">All Meetings</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={meetings}
              label="All Meetings"
              onChange={handleAllMeetingsChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value='All Meetings'>All Meetings</MenuItem>
              <MenuItem value='Cancelled Meetings'>Cancelled Meetings</MenuItem>
              <MenuItem value='Completed Meetings'>Completed Meetings</MenuItem>
              <MenuItem value='My Cencelled Meetings'>My Cencelled Meetings</MenuItem>
              <MenuItem value='My Completed Meetings'>My Completed Meetings</MenuItem>
              <MenuItem value='My Meetings'>My Meetings</MenuItem>
              <MenuItem value='My Todays Meetings'>My Todays Meetings</MenuItem>
              <MenuItem value='My Upcomming Meetings'>My Upcomming Meetings</MenuItem>
              <MenuItem value='My Weeks Meetings'>My Weeks Meetings</MenuItem>
              <MenuItem value='Todays Meetings'>Todays Meetings</MenuItem>
              <MenuItem value='Upcomming Meetings'>Upcomming Meetings</MenuItem>
            </Select>
          </FormControl>}

        </div>
        <div style={{ visibility: selectedRows.length > 0 ? 'hidden' : '' }} className="right">
          <Button onClick={() => navigate('/meetings/create')} sx={{ fontWeight: 'bold', textTransform: 'none', padding: '8px 20px' }} variant="contained">Create Meetings</Button>
          <div>
            <CommonModal
              openModal={openCreateModal}
              handleClose={handleClose}
            >
              <CreateMeeting handleClose={handleClose} />
            </CommonModal>
          </div>
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
            </Select>
          </FormControl>

        </div>
      </div>
    </div>


    <div className="meetings-page">
      <div className="meetings-page-container">
        <div className="top">
          <div className="total-record">
            <span>Total Records: <b>{leadData.reduce((count, item) => item.meetings ? count + 1 : count, 0)}</b></span>
          </div>
        </div>
        <div className="bottom">
          <div style={{ minWidth: '300px' }} className="left">
            <h3 >Filter Meetings by</h3>
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

export default MeetingsPage