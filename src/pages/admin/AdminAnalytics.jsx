import React, { useState } from 'react';
import { FaChartLine, FaChartBar, FaChartPie, FaUsers, FaBriefcase, FaMoneyBillWave } from 'react-icons/fa';

function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState('month');

  // Mock data for analytics
  const stats = [
    { title: 'Total Revenue', value: '₹45,678', icon: <FaMoneyBillWave className="text-green-500" />, change: '+15%', color: 'bg-green-50' },
    { title: 'Active Users', value: '1,234', icon: <FaUsers className="text-blue-500" />, change: '+8%', color: 'bg-blue-50' },
    { title: 'Jobs Posted', value: '567', icon: <FaBriefcase className="text-purple-500" />, change: '+12%', color: 'bg-purple-50' },
  ];

  // Mock data for job categories
  const jobCategories = [
    { category: 'House Cleaning', count: 150, percentage: 30 },
    { category: 'Garden Maintenance', count: 100, percentage: 20 },
    { category: 'Pet Sitting', count: 80, percentage: 16 },
    { category: 'Elderly Care', count: 70, percentage: 14 },
    { category: 'Tutoring', count: 50, percentage: 10 },
    { category: 'Other', count: 50, percentage: 10 },
  ];

  // Mock data for user growth
  const userGrowth = [
    { month: 'Jan', users: 800 },
    { month: 'Feb', users: 900 },
    { month: 'Mar', users: 1000 },
    { month: 'Apr', users: 1100 },
    { month: 'May', users: 1200 },
    { month: 'Jun', users: 1300 },
  ];

  // Mock data for job completion rate
  const jobCompletionRate = [
    { month: 'Jan', rate: 75 },
    { month: 'Feb', rate: 78 },
    { month: 'Mar', rate: 82 },
    { month: 'Apr', rate: 85 },
    { month: 'May', rate: 88 },
    { month: 'Jun', rate: 90 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded-lg ${timeRange === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setTimeRange('week')}
          >
            Week
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${timeRange === 'month' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${timeRange === 'year' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setTimeRange('year')}
          >
            Year
          </button>
        </div>
      </div>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              <span className="text-sm text-green-500">
                {stat.change}
              </span>
              <span className="text-gray-500 text-sm ml-2">from last {timeRange}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">User Growth</h2>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {userGrowth.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 rounded-t"
                  style={{ height: `${(item.users / 1300) * 100}%` }}
                ></div>
                <div className="text-xs text-gray-500 mt-2">{item.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Completion Rate Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-4">
            <FaChartBar className="text-green-500 mr-2" />
            <h2 className="text-xl font-semibold">Job Completion Rate</h2>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {jobCompletionRate.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-green-500 rounded-t"
                  style={{ height: `${item.rate}%` }}
                ></div>
                <div className="text-xs text-gray-500 mt-2">{item.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Categories Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center mb-4">
            <FaChartPie className="text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold">Job Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobCategories.map((category, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ 
                    backgroundColor: `hsl(${index * 60}, 70%, 50%)` 
                  }}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{category.category}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${category.percentage}%`,
                        backgroundColor: `hsl(${index * 60}, 70%, 50%)`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAnalytics; 