// Calendar.jsx - Calendar Component

import React from 'react';
import './Calendar.css';

const Calendar = () => {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  const calendarDays = [
    { day: 25, appointments: ['10:00', '11:00', '12:00'] },
    { day: 26, appointments: ['08:00', '09:00', '10:00', '13:00'] },
    { day: 27, appointments: ['12:00'] },
    { day: 28, appointments: ['10:00', '11:00'] },
    { day: 29, appointments: ['14:00', '16:00', '15:00'] },
    { day: 30, appointments: ['12:00', '14:00', '10:00'], isToday: true },
    { day: 31, appointments: ['09:00', '11:00'] }
  ];

  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <h2 className="calendar-title">October 2021</h2>
        <div className="calendar-nav">
          <button className="calendar-nav-btn">◀</button>
          <button className="calendar-nav-btn">▶</button>
        </div>
      </div>

      <div className="calendar-grid">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        
        {calendarDays.map((dayData, index) => (
          <div 
            key={index} 
            className={`calendar-day ${dayData.isToday ? 'today' : ''} ${dayData.appointments.length > 0 ? 'has-appointments' : ''}`}
          >
            <span className="day-number">{dayData.day}</span>
            <div className="appointment-times">
              {dayData.appointments.slice(0, 3).map((time, timeIndex) => (
                <span 
                  key={timeIndex} 
                  className={`appointment-time ${parseInt(time.split(':')[0]) < 12 ? 'morning' : 'afternoon'}`}
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointment-cards">
        <div className="appointment-card dentist">
          <div className="appointment-card-icon">🦷</div>
          <div className="appointment-card-title">Dentist</div>
          <div className="appointment-card-time">09:00-11:00</div>
          <div className="appointment-card-doctor">Dr. Cameron Williamson</div>
        </div>
        
        <div className="appointment-card physiotherapy">
          <div className="appointment-card-icon">⚠️</div>
          <div className="appointment-card-title">Physiotherapy Appointment</div>
          <div className="appointment-card-time">11:00-12:00</div>
          <div className="appointment-card-doctor">Dr. Kevin Djones</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;