import React from 'react';
import { Grid3X3, Clock, Calendar, BarChart3, MessageCircle, HelpCircle, Settings, Stethoscope, Activity } from 'lucide-react';
import './Sidebar.css';

const navigationItems = [
  { icon: Grid3X3, label: 'Dashboard', active: true },
  { icon: Clock, label: 'History' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Stethoscope, label: 'Appointments' },
  { icon: BarChart3, label: 'Statistics' },
  { icon: Activity, label: 'Tests' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: HelpCircle, label: 'Support' },
  { icon: Settings, label: 'Setting' }
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-title">General</h3>
        <nav className="navigation">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href="#"
                className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
              >
                <Icon className="nav-icon" />
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;