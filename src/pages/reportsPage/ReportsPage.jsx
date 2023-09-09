import './ReportsPage.scss';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import Menu from '@mui/material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { reportsData } from '../../data/reportsData';
import DataTable from '../../common/dataTable/DataTable';



const ReportsPage = () => {

  //for option menu in every row
  const RowWithOptionsMenu = ({ row }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };
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
          <MenuItem >Run</MenuItem>
          <MenuItem >Edit</MenuItem>
          <MenuItem >Clone</MenuItem>
          <MenuItem >Export</MenuItem>
          <MenuItem >Show Enclosing Folder</MenuItem>
          <MenuItem >Delete</MenuItem>
        </Menu>
      </div>
    );
  };


  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionChange = (selection) => {
    setSelectedRows(selection);
    console.log('Selected Row IDs:', selection);
  };

  const columns = [
    {
      field: 'reportName',
      headerName: 'Report Name',
      width: 300,
      headerClassName: 'table-header',
      renderCell: (params) => (
        <div
          style={{
            color: '#0186FB',
            cursor: 'pointer'
          }}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: 'description',
      headerName: 'description',
      width: 300,
      headerClassName: 'table-header'
    },
    {
      field: 'folder',
      headerName: 'Folder',
      width: 150,
      headerClassName: 'table-header'
    },
    {
      field: 'lastAccessedDate',
      headerName: 'Last Accessed Date',
      width: 180,
      headerClassName: 'table-header'
    },
    {
      field: 'createdBy',
      headerName: 'Created By',
      width: 150,
      headerClassName: 'table-header'
    },
    !selectedRows.length > 0 &&
    {
      field: 'option',
      headerName: '',
      width: 50,
      renderCell: (params) => <RowWithOptionsMenu row={params.row} />
    }
  ];

  const row = reportsData.map(data => ({
    id: data.id,
    reportName: data.reportName,
    description: data.description,
    folder: data.folder,
    lastAccessedDate: data.lastAccessedDate ? data.lastAccessedDate : '-',
    createdBy: data.createdBy ? data.createdBy : '-',
  }))

  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="left">


            {
              <diV className='search-report-input' >
                <SearchIcon />
                <input placeholder='Search All Reports' type="text" />
              </diV>
            }
            {
              <diV className='report-category' >
                <span>All Reports</span>
              </diV>
            }
          </div>
          <div style={{}} className="right">
            <Button sx={{ visibility: selectedRows.length > 0 ? 'hidden' : '', fontWeight: 'bold', textTransform: 'none', padding: '8px 20px' }} variant="contained">Create Report</Button>
            {
              selectedRows.length > 0 ?
                <div className="delete-btn">Delete</div>
                : ''
            }
          </div>
        </div>
      </div>


      <div className="reports-page">
        <div className="reports-page-container">
          <div className="top">
            <div className="total-record">
              <span>Total Reports: <b>{reportsData.length}</b></span>
            </div>
          </div>
          <div className="bottom">
            <div style={{ minWidth: '300px' }} className="left">
              <h3 >Folders</h3>
              <div className="search">
                <SearchIcon />
                <input type="search" placeholder='' />
              </div>
              <div className='report-list'>
                <Link className='link list-item active'>All Reports</Link>
                <Link className='link list-item'>My Reports</Link>
                <Link className='link list-item'>Favorites</Link>
                <Link className='link list-item'>Recently Viewed</Link>
                <Link className='link list-item'>Scheduled Reports</Link>
                <Link className='link list-item'>Recently Deleted</Link>
                <Link className='link list-item'>Account and contact Report</Link>
                <Link className='link list-item'>Deal Reports</Link>
                <Link className='link list-item'>Lead Reports</Link>
                <Link className='link list-item'>Campaign Reports</Link>
                <Link className='link list-item'>Case and Solution Reports</Link>
                <Link className='link list-item'>Product Reports</Link>
                <Link className='link list-item'>Vendor Reports</Link>
                <Link className='link list-item'>Quote Reports</Link>
                <Link className='link list-item'>Sales Order Reports</Link>
                <Link className='link list-item'>Purchase Order Reports</Link>
                <Link className='link list-item'>Invoice Report</Link>
                <Link className='link list-item'>Sales Metrics Report</Link>
                <Link className='link list-item'>Email Report</Link>
                <Link className='link list-item'>Meeting Report</Link>
              </div>
            </div>
            <div className="right">
              <DataTable
                columns={columns}
                row={row}
                handleSelectionChange={handleSelectionChange}
                selectedRows={selectedRows}
              />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ReportsPage