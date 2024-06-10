import React, { useState, useEffect } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import './Category.css';

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="home-content">
      <Topbar />
      <div className="main-container">
        <Sidebar />
        <div className="content-container">
          <div className="category-header">
            <h2>Category</h2>
            <button className="add-new-btn">Add New</button>
          </div>
          <table className="category-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Category name</th>
                <th>Image</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td><img src={category.image} alt={category.name} className="category-image" /></td>
                  <td className={category.status === 'Active' ? 'status-active' : 'status-inactive'}>
                    {category.status}
                  </td>
                  <td className="action-buttons">
                    <button className="edit-btn">✏️</button>
                    <button className="delete-btn">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Category;
