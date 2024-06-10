import React, { useState } from 'react';
import axios from 'axios';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import './AddCategory.css';

function AddCategory() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/categories', {
        name,
        image,
        status,
      });
      // Redirect to the category list page or show a success message
      window.location.href = '/category';
    } catch (error) {
      console.error("Error adding category", error);
    }
  };

  return (
    <div className="home-content">
      <Topbar />
      <div className="main-container">
        <Sidebar />
        <div className="content-container">
          <h2>Add New Category</h2>
          <form onSubmit={handleSubmit} className="add-category-form">
            <div className="form-group">
              <label>Category Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Image URL:</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Add Category</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
