import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaThLarge, FaTags, FaBox } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 " style={{ height: '100vh', width: '250px' ,backgroundColor:'#F4F4F4'}}>
     
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FaHome className="mr-2" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category" className="nav-link">
            <FaThLarge className="mr-2" /> Category
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/subcategory" className="nav-link">
            <FaTags className="mr-2" /> Subcategory
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            <FaBox className="mr-2" /> Products
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
