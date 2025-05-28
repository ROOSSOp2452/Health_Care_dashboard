import React from 'react';
import './Schedule.css';

const Schedule = () => {
  // Mock data for upcoming appointments
  const upcomingAppointments = {
    thursday: [
      {
        id: 1,
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "🏥",
        color: "completed"
      },
      {
        id: 2,
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
        color: "eye"
      }
    ],
    saturday: [
      {
        id: 3,
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
        color: "heart"
      },
      {
        id: 4,
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧠",
        color: "brain"
      }
    ]
  };

  const AppointmentCard = ({ appointment }) => (
    <div className={`appointment-card ${appointment.color}`}>
      <div className="appointment-icon">
        {appointment.icon}
      </div>
      <div className="appointment-details">
        <h4 className="appointment-title">{appointment.title}</h4>
        <p className="appointment-time">{appointment.time}</p>
      </div>
    </div>
  );

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h2 className="schedule-title">The Upcoming Schedule</h2>
      </div>

      <div className="schedule-content">
        <div className="day-section">
          <h3 className="day-title">On Thursday</h3>
          <div className="appointments-grid">
            {upcomingAppointments.thursday.map(appointment => (
              <AppointmentCard 
                key={appointment.id} 
                appointment={appointment} 
              />
            ))}
          </div>
        </div>

        <div className="day-section">
          <h3 className="day-title">On Saturday</h3>
          <div className="appointments-grid">
            {upcomingAppointments.saturday.map(appointment => (
              <AppointmentCard 
                key={appointment.id} 
                appointment={appointment} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;