import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart, 
  PieChart, 
  LineChart, 
  Settings, 
  Users, 
  Bell, 
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <BarChart size={20} />, label: 'Analytics', path: '/analytics' },
    { icon: <PieChart size={20} />, label: 'Reports', path: '/reports' },
    { icon: <LineChart size={20} />, label: 'Trends', path: '/trends' },
    { icon: <Users size={20} />, label: 'Users', path: '/users' },
    { icon: <Bell size={20} />, label: 'Notifications', path: '/notifications' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  if (!open) {
    return (
      <aside className="w-16 bg-gray-800 border-r border-gray-700">
        <div className="py-4 flex flex-col items-center">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`p-3 w-full flex justify-center rounded-md mx-2 mb-1 ${
                  isActive 
                    ? 'text-white bg-indigo-600 shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                } transition-all duration-200`}
                title={item.label}
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto py-4 flex flex-col items-center border-t border-gray-700">
          <button className="p-3 w-full flex justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200 rounded-md mx-2">
            <LogOut size={20} />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 transition-all duration-300">
      <div className="py-4 px-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`px-4 py-3 w-full flex items-center gap-3 rounded-md mb-1 ${
                isActive 
                  ? 'text-white bg-indigo-600 shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              } transition-all duration-200`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="mt-auto py-4 border-t border-gray-700 px-2">
        <button className="px-4 py-3 w-full flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200 rounded-md">
          <LogOut size={20} />
          <span className="font-medium">Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;