import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { DashboardProvider } from './context/DashboardContext';
import { TimeRange } from './types';

// Pages
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ReportsPage from './pages/ReportsPage';
import TrendsPage from './pages/TrendsPage';
import UsersPage from './pages/UsersPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');

  return (
    <DashboardProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
          <Header 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
          />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar open={sidebarOpen} />
            <main className="flex-1 overflow-auto p-4">
              <Routes>
                <Route path="/" element={<DashboardPage timeRange={timeRange} />} />
                <Route path="/analytics" element={<AnalyticsPage timeRange={timeRange} />} />
                <Route path="/reports" element={<ReportsPage timeRange={timeRange} />} />
                <Route path="/trends" element={<TrendsPage timeRange={timeRange} />} />
                <Route path="/users" element={<UsersPage timeRange={timeRange} />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </DashboardProvider>
  );
}

export default App;