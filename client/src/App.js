import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Home from "./components/Home";
import Category from './components/Category';
import Subcategory from './components/Sub-category';
import Product from './components/Product';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import AddCategory from './components/AddCategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/category" element={<ProtectedRoute><Category /></ProtectedRoute>} />
        <Route path="/subcategory" element={<ProtectedRoute><Subcategory /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
        {/* <Route path="/add-category" element={<ProtectedRoute><AddCategory /></ProtectedRoute>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
