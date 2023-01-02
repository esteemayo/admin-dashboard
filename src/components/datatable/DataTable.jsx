import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';

import { userRows, productRows } from 'data';

import './datatable.scss';

const DataTable = ({ columns }) => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];

  const [data, setData] = useState([]);

  useEffect(() => {
    switch (path) {
      case 'users':
        setData(userRows);
        break;

      case 'products':
        setData(productRows);
        break;

      default:
        break;
    }
  }, [path]);

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
            <Link to={`/${path}/${params.row.id}`}>
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
        {path}
        <Link to={`/${path}/new`} className='link'>
          Add new
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className='data-grid'
      />
    </div>
  );
};

export default DataTable;
