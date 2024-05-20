import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <div className="admin-center">
        <h1>ADMIN PORTAL</h1>
        <img src="/logo.png" alt="Admin Profile" className="admin-logo" />
        <h2>Welcome Admin</h2>
        <div className="admin-buttons">
          <button className="admin-button" onClick={() => navigate('/adminpage/addtour')}>Add Tour</button>
          <button className="admin-button" onClick={() => navigate('/adminpage/addpackages')}>Add Packages</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
