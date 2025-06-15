import React from 'react';
import { useDashboardContext } from '../context/DashboardContext';
import PieChartWidget from '../components/charts/PieChartWidget';
import BarChartWidget from '../components/charts/BarChartWidget';
import { TimeRange } from '../types';
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react';

interface ReportsPageProps {
  timeRange: TimeRange;
}

const ReportsPage: React.FC<ReportsPageProps> = ({ timeRange }) => {
  const { stats } = useDashboardContext();

  const reportTypes = [
    {
      title: "Sales Report",
      description: "Comprehensive sales analysis and performance metrics",
      icon: <DollarSign className="text-green-500" />,
      lastGenerated: "2 hours ago",
      status: "Ready"
    },
    {
      title: "User Analytics",
      description: "User behavior patterns and engagement metrics",
      icon: <Users className="text-blue-500" />,
      lastGenerated: "1 day ago",
      status: "Ready"
    },
    {
      title: "Performance Report",
      description: "Website performance and optimization insights",
      icon: <TrendingUp className="text-purple-500" />,
      lastGenerated: "3 hours ago",
      status: "Processing"
    }
  ];

  return (
    <div className="space-y-6 pb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-colors">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-colors">
            <Calendar size={16} />
            Schedule Report
          </button>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4">Available Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reportTypes.map((report, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-gray-700/50">
                  {report.icon}
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  report.status === 'Ready' 
                    ? 'bg-green-900/30 text-green-400' 
                    : 'bg-yellow-900/30 text-yellow-400'
                }`}>
                  {report.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{report.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Last: {report.lastGenerated}</span>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-sm transition-colors">
                  <Download size={14} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChartWidget title="Revenue by Category" timeRange={timeRange} />
        <BarChartWidget title="Monthly Performance" timeRange={timeRange} />
      </section>

      <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Report History</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm">View All</button>
        </div>
        <div className="space-y-3">
          {[
            { name: "Q4 Sales Summary", date: "Dec 15, 2024", size: "2.4 MB", type: "PDF" },
            { name: "User Engagement Report", date: "Dec 10, 2024", size: "1.8 MB", type: "Excel" },
            { name: "Performance Analysis", date: "Dec 5, 2024", size: "3.1 MB", type: "PDF" },
          ].map((file, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-gray-400" />
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-400">{file.date} • {file.size} • {file.type}</p>
                </div>
              </div>
              <button className="text-indigo-400 hover:text-indigo-300 text-sm">Download</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReportsPage;