import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import Schedule from './components/Schedule';
import Calendar from './components/Calendar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <DashboardMainContent />
          {/* Add Schedule component if needed */}
          {/* <Schedule /> */}
        </div>
      </div>
    </div>
  );
};

export default App;