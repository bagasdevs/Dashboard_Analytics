import React from 'react';
import { useDashboardContext } from '../context/DashboardContext';
import LineChartWidget from '../components/charts/LineChartWidget';
import AreaChartWidget from '../components/charts/AreaChartWidget';
import StatCard from '../components/StatCard';
import { TimeRange } from '../types';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Zap,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

interface TrendsPageProps {
  timeRange: TimeRange;
}

const TrendsPage: React.FC<TrendsPageProps> = ({ timeRange }) => {
  const { stats } = useDashboardContext();

  const trendData = [
    {
      title: "Growth Rate",
      value: "24.8%",
      change: 5.2,
      icon: <TrendingUp className="text-green-500" />,
      trend: "up"
    },
    {
      title: "Market Share",
      value: "18.3%",
      change: 2.1,
      icon: <Activity className="text-blue-500" />,
      trend: "up"
    },
    {
      title: "Customer Churn",
      value: "3.2%",
      change: -0.8,
      icon: <TrendingDown className="text-red-500" />,
      trend: "down"
    },
    {
      title: "Engagement Score",
      value: "87.5",
      change: 4.3,
      icon: <Zap className="text-yellow-500" />,
      trend: "up"
    }
  ];

  const insights = [
    {
      title: "Revenue Acceleration",
      description: "Revenue growth has increased by 15% compared to last quarter",
      impact: "High",
      trend: "positive"
    },
    {
      title: "User Acquisition Slowdown",
      description: "New user registrations have decreased by 8% this month",
      impact: "Medium",
      trend: "negative"
    },
    {
      title: "Conversion Optimization",
      description: "Conversion rates improved by 12% after recent UI changes",
      impact: "High",
      trend: "positive"
    }
  ];

  return (
    <div className="space-y-6 pb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trends Analysis</h1>
        <div className="text-sm text-gray-400">
          Identify patterns and forecast future performance
        </div>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4">Key Trend Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendData.map((trend, index) => (
            <StatCard
              key={index}
              title={trend.title}
              value={trend.value}
              change={trend.change}
              icon={trend.icon}
            />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChartWidget title="Growth Trajectory" timeRange={timeRange} />
        <AreaChartWidget title="Performance Trends" timeRange={timeRange} />
      </section>

      <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Trend Insights</h3>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-lg">
              <div className={`p-2 rounded-full ${
                insight.trend === 'positive' ? 'bg-green-900/30' : 'bg-red-900/30'
              }`}>
                {insight.trend === 'positive' ? (
                  <ArrowUp size={16} className="text-green-400" />
                ) : (
                  <ArrowDown size={16} className="text-red-400" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{insight.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    insight.impact === 'High' 
                      ? 'bg-red-900/30 text-red-400' 
                      : 'bg-yellow-900/30 text-yellow-400'
                  }`}>
                    {insight.impact} Impact
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Forecast</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Next Month Revenue</span>
              <span className="font-semibold text-green-400">+18%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">User Growth</span>
              <span className="font-semibold text-blue-400">+12%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Market Position</span>
              <span className="font-semibold text-purple-400">Stable</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Risk Factors</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-400">Seasonal Decline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="text-sm text-gray-400">Competition Increase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-400">Market Expansion</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
          <div className="space-y-3">
            <div className="text-sm text-gray-400">
              • Focus on user retention strategies
            </div>
            <div className="text-sm text-gray-400">
              • Optimize conversion funnel
            </div>
            <div className="text-sm text-gray-400">
              • Expand marketing channels
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendsPage;