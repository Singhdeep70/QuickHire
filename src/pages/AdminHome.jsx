import React from 'react';
import { FaUsers, FaBriefcase, FaChartLine, FaCheckCircle } from 'react-icons/fa';

function AdminHome() {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: FaUsers,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'increase'
    },
    {
      title: 'Active Jobs',
      value: '456',
      icon: FaBriefcase,
      color: 'bg-purple-500',
      change: '+5%',
      changeType: 'increase'
    },
    {
      title: 'Completed Jobs',
      value: '789',
      icon: FaCheckCircle,
      color: 'bg-green-500',
      change: '+8%',
      changeType: 'increase'
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: FaChartLine,
      color: 'bg-yellow-500',
      change: '+15%',
      changeType: 'increase'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard. Here's an overview of your platform.</p>
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
              <span className={`text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <FaUsers className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">New user registration</p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">View details</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminHome; 