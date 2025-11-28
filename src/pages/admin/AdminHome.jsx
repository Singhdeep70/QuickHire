import React from 'react';
import { FaUsers, FaBriefcase, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

function AdminHome() {
  // Mock data for statistics
  const stats = [
    { title: 'Total Users', value: '1,234', icon: <FaUsers className="text-blue-500" />, change: '+12%', color: 'bg-blue-50' },
    { title: 'Active Jobs', value: '56', icon: <FaBriefcase className="text-green-500" />, change: '+5%', color: 'bg-green-50' },
    { title: 'Completed Jobs', value: '789', icon: <FaCheckCircle className="text-purple-500" />, change: '+8%', color: 'bg-purple-50' },
    { title: 'Pending Approvals', value: '23', icon: <FaExclamationTriangle className="text-yellow-500" />, change: '-2%', color: 'bg-yellow-50' },
  ];

  // Mock data for recent activity
  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'applied for', job: 'House Cleaning', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'completed', job: 'Garden Maintenance', time: '5 hours ago' },
    { id: 3, user: 'Mike Johnson', action: 'posted a new job', job: 'Pet Sitting', time: '1 day ago' },
    { id: 4, user: 'Sarah Williams', action: 'was hired for', job: 'Elderly Care', time: '2 days ago' },
    { id: 5, user: 'David Brown', action: 'cancelled', job: 'Tutoring', time: '3 days ago' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-lg p-6 shadow-sm`}>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
            <div className="mt-4 flex items-center">
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
              <span className="text-gray-500 text-sm ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <tr key={activity.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{activity.user}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{activity.action}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{activity.job}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminHome; 