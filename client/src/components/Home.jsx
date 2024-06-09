import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

function Home() {
    return (
      <div className="home-content">
        <Topbar />
        <Sidebar />
        <div className="content-container">
          
        </div>
      </div>
    );
  }
export default Home;