import React from 'react';
import { useDashboardContext } from '../context/DashboardContext';
import AreaChartWidget from '../components/charts/AreaChartWidget';
import LineChartWidget from '../components/charts/LineChartWidget';
import BarChartWidget from '../components/charts/BarChartWidget';
import StatCard from '../components/StatCard';
import { TimeRange } from '../types';
import { 
  TrendingUp, 
  Users, 
  MousePointer, 
  Clock,
  Eye,
  Target
} from 'lucide-react';

interface AnalyticsPageProps {
  timeRange: TimeRange;
}

const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ timeRange }) => {
  const { stats } = useDashboardContext();

  const analyticsStats = [
    {
      title: "Page Views",
      value: "847,392",
      change: 15.2,
      icon: <Eye className="text-blue-500" />
    },
    {
      title: "Unique Visitors",
      value: "124,583",
      change: 8.7,
      icon: <Users className="text-green-500" />
    },
    {
      title: "Bounce Rate",
      value: "32.4%",
      change: -2.1,
      icon: <MousePointer className="text-orange-500" />
    },
    {
      title: "Avg. Session",
      value: "4m 32s",
      change: 12.3,
      icon: <Clock className="text-purple-500" />
    },
    {
      title: "Goal Completions",
      value: "2,847",
      change: 18.9,
      icon: <Target className="text-red-500" />
    },
    {
      title: "Conversion Rate",
      value: `${stats.conversionRate}%`,
      change: stats.conversionRateChange,
      icon: <TrendingUp className="text-indigo-500" />
    }
  ];

  return (
    <div className="space-y-6 pb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Analytics Overview</h1>
        <div className="text-sm text-gray-400">
          Detailed insights into your website performance
        </div>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {analyticsStats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
            />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChartWidget title="Traffic Overview" timeRange={timeRange} />
        <LineChartWidget title="User Engagement" timeRange={timeRange} />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartWidget title="Top Pages" timeRange={timeRange} />
        <BarChartWidget title="Traffic Sources" timeRange={timeRange} variant="horizontal" />
      </section>
    </div>
  );
};

export default AnalyticsPage;