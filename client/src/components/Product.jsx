import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' }
  ];
  
  const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
  ];
  
function Product() {
    return (
      <div className="home-content ">
        <Topbar />
        <div className="content-container">
        <Sidebar />
      
        <DataGrid columns={columns} rows={rows} />
        </div>
      </div>
    );
  }
export default Product;