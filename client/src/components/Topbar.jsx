import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPowerOff } from 'react-icons/fa';

function Topbar() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#662671' }}>
      <a className="navbar-brand" href="#">
        <img
          src={`${process.env.PUBLIC_URL}/image_4.png`}
          height="60%"
          width="40%"
          style={{ marginLeft: '10%' }}
          className="d-inline-block align-top"
          alt="Logo"
        />
      </a>

      <button
        className="btn btn-outline-light ml-auto"
        onClick={() => setShowModal(true)}
        style={{ border: 'none', backgroundColor: 'transparent' }}
      >
        <FaPowerOff size={30} color="#fff" />
      </button>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Logout</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                  style={{ marginLeft: 'auto' }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to logout?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Topbar;
