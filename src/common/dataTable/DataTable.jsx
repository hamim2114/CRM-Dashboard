import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import './DataTable.scss';

const DataTable = ({ columns, row, handleSelectionChange, selectedRows, handleRowClick }) => {
  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      '& .table-header': {
        fontSize: '17px',
      },
    }}>
      <DataGrid
        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        onRowSelectionModelChange={handleSelectionChange}
        selectionModel={selectedRows}
        onRowClick={handleRowClick}
        getRowClassName={() => 'data-grid-row'}
      />
    </Box>
  )
}

export default DataTable