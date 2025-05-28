// Anatomy.jsx - Anatomy Component

import React from 'react';
import './Anatomy.css';
import heartImg from '../assets/heart.png';
const Anatomy = () => {
  const healthData = [
    {
      id: 1,
      title: 'Lungs',
      date: 'Oct. 26 Oct 2021',
      icon: '🫁',
      type: 'lungs',
      progress: 75
    },
    {
      id: 2,
      title: 'Teeth',
      date: 'Oct. 26 Oct 2021',
      icon: '🦷',
      type: 'teeth',
      progress: 90
    },
    {
      id: 3,
      title: 'Bone',
      date: 'Oct. 26 Oct 2021',
      icon: '🦴',
      type: 'bone',
      progress: 60
    }
  ];

  const activityData = [
    { day: 'Mon', height: 40, color: 'cyan' },
    { day: 'Tues', height: 80, color: 'blue' },
    { day: 'Wed', height: 30, color: 'cyan' },
    { day: 'Thurs', height: 60, color: 'purple' },
    { day: 'Fri', height: 90, color: 'cyan' },
    { day: 'Sat', height: 70, color: 'blue' },
    { day: 'Sun', height: 50, color: 'purple' }
  ];

  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="anatomy-figure">
          <div className="anatomy-indicators">
            <div className="health-indicator indicator-heart">
              Healthy Heart
            </div>
            <div className="health-indicator indicator-log">
              Healthy Log
            </div>
          </div>
           <img 
            src={heartImg} 
            alt="Human Anatomy" 
            className="anatomy-image"
          />
        </div>
        
        <div className="anatomy-stats">
          {healthData.map(item => (
            <div key={item.id} className={`health-card ${item.type}`}>
              <div className="health-icon">
                {item.icon}
              </div>
              <div className="health-info">
                <h3 className="health-title">{item.title}</h3>
                <p className="health-date">{item.date}</p>
                <div className="health-progress">
                  <div 
                    className={`progress-bar ${item.type === 'lungs' ? 'red' : item.type === 'teeth' ? 'green' : 'orange'}`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="activity-section">
        <div className="activity-header">
          <h3 className="activity-title">Activity</h3>
          <p className="activity-subtitle">3 appointments on this week</p>
        </div>
        
        <div className="activity-chart">
          {activityData.map((bar, index) => (
            <div key={index} className="chart-bar">
              <div 
                className={`bar ${bar.color}`}
                style={{ height: `${bar.height}px` }}
              ></div>
              <span className="chart-label">{bar.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Anatomy;