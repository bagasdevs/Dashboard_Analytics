import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { DashboardProvider } from './context/DashboardContext';
import { TimeRange } from './types';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');

  return (
    <DashboardProvider>
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
            <Dashboard timeRange={timeRange} />
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}

export default App;