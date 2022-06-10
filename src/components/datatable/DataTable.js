import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import { userColumns, userRows } from 'data';

import './datatable.scss';

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user')) {
      setData((data) => {
        return data.filter((item) => item.id !== id);
      });
    }
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cell-action'>
            <Link to={`/users/${params.row.id}`}>
              <button className='view-button'>View</button>
            </Link>
            <button
              className='delete-button'
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className='datatable'>
      <div className='datatable-title'>
        Add new user
        <Link to='/users/new' className='link'>
          Add new
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className='data-grid'
      />
    </div>
  );
};

export default DataTable;
