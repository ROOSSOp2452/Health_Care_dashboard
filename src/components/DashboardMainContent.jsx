// DashboardMainContent.jsx - Main Dashboard Component

import React from 'react';
import './DashboardMainContent.css';
import Anatomy from './Anatomy';
import Calendar from './Calendar';
import Schedule from './Schedule';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h3 className="dashboard-title">Dashboard</h3>
        <div className="week-selector">
          <span>This Week</span>
          <div className="week-nav">
            <button className="week-nav-btn">◀</button>
            <span>October 2021</span>
            <button className="week-nav-btn">▶</button>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="left-section">
          <Anatomy />
        </div>
        <div className="right-section">
          <Calendar />
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;