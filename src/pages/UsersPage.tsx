import React from 'react';
import { useDashboardContext } from '../context/DashboardContext';
import LineChartWidget from '../components/charts/LineChartWidget';
import BarChartWidget from '../components/charts/BarChartWidget';
import StatCard from '../components/StatCard';
import { TimeRange } from '../types';
import { 
  Users, 
  UserPlus, 
  UserMinus, 
  Activity,
  Search,
  Filter,
  MoreVertical
} from 'lucide-react';

interface UsersPageProps {
  timeRange: TimeRange;
}

const UsersPage: React.FC<UsersPageProps> = ({ timeRange }) => {
  const { stats } = useDashboardContext();

  const userStats = [
    {
      title: "Total Users",
      value: stats.users.toLocaleString(),
      change: stats.usersChange,
      icon: <Users className="text-blue-500" />
    },
    {
      title: "New Users",
      value: "2,847",
      change: 15.3,
      icon: <UserPlus className="text-green-500" />
    },
    {
      title: "Churned Users",
      value: "184",
      change: -8.2,
      icon: <UserMinus className="text-red-500" />
    },
    {
      title: "Active Users",
      value: "8,392",
      change: 12.7,
      icon: <Activity className="text-purple-500" />
    }
  ];

  const recentUsers = [
    { name: "Sarah Johnson", email: "sarah.j@example.com", status: "Active", joined: "2 hours ago", avatar: "SJ" },
    { name: "Michael Chen", email: "m.chen@example.com", status: "Active", joined: "5 hours ago", avatar: "MC" },
    { name: "Emily Davis", email: "emily.d@example.com", status: "Inactive", joined: "1 day ago", avatar: "ED" },
    { name: "James Wilson", email: "j.wilson@example.com", status: "Active", joined: "2 days ago", avatar: "JW" },
    { name: "Lisa Anderson", email: "lisa.a@example.com", status: "Pending", joined: "3 days ago", avatar: "LA" },
  ];

  return (
    <div className="space-y-6 pb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div className="flex gap-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-colors">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition-colors">
            <UserPlus size={16} />
            Add User
          </button>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-4">User Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {userStats.map((stat, index) => (
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
        <LineChartWidget title="User Growth Over Time" timeRange={timeRange} />
        <BarChartWidget title="User Acquisition Channels" timeRange={timeRange} />
      </section>

      <section className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold">Recent Users</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {recentUsers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {user.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{user.name}</div>
                        <div className="text-sm text-gray-400">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-green-900/30 text-green-400'
                        : user.status === 'Inactive'
                        ? 'bg-red-900/30 text-red-400'
                        : 'bg-yellow-900/30 text-yellow-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-white">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UsersPage;