import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <h2>Health Care</h2>
        </div>
        <div className="search-container">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
      </div>
      <div className="header-right">
        <div className="notification-container">
          <Bell className="notification-icon" />
          <div className="notification-badge"></div>
        </div>
        <div className="user-profile">
          <div className="user-avatar">
           
          </div>
          <span className="user-name">Admin</span>
        </div>
        <button className="add-button">
          <Plus className="add-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;