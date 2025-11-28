import React from 'react';
import { FaChartLine, FaChartBar, FaChartPie, FaUsers } from 'react-icons/fa';

function AdminAnalytics() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,345',
      change: '+15%',
      icon: FaChartLine,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+8%',
      icon: FaUsers,
      color: 'bg-green-500'
    },
    {
      title: 'Jobs Posted',
      value: '456',
      change: '+12%',
      icon: FaChartBar,
      color: 'bg-purple-500'
    },
    {
      title: 'Completion Rate',
      value: '85%',
      change: '+5%',
      icon: FaChartPie,
      color: 'bg-yellow-500'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'job_completed',
      user: 'John Doe',
      details: 'Completed Lawn Mowing Service',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'new_user',
      user: 'Jane Smith',
      details: 'Joined QuickHire',
      time: '5 hours ago'
    },
    {
      id: 3,
      type: 'job_posted',
      user: 'Admin',
      details: 'Posted new House Cleaning job',
      time: '1 day ago'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600">Track platform performance and user engagement</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-green-500">
                {stat.change}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue Overview</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Revenue Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Growth</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">User Growth Chart Placeholder</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FaUsers className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">{activity.user}</p>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminAnalytics; 