import React from 'react';
import Dashboard from '../components/Dashboard';
import { TimeRange } from '../types';

interface DashboardPageProps {
  timeRange: TimeRange;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ timeRange }) => {
  return <Dashboard timeRange={timeRange} />;
};

export default DashboardPage;