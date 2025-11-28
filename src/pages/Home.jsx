import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaClipboardList, FaUser } from 'react-icons/fa';

function Home() {
  const stats = [
    {
      title: 'Available Jobs',
      value: '12',
      icon: FaBriefcase,
      color: 'bg-purple-500',
      link: '/chore-jobs'
    },
    {
      title: 'My Applications',
      value: '3',
      icon: FaClipboardList,
      color: 'bg-blue-500',
      link: '/my-applications'
    },
    {
      title: 'Profile Completion',
      value: '85%',
      icon: FaUser,
      color: 'bg-green-500',
      link: '/profile'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Here's an overview of your QuickHire dashboard.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Link
            key={index}
            to={stat.link}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg text-white mr-4`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/chore-jobs"
            className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
          >
            <FaBriefcase className="h-5 w-5 text-purple-600 mr-3" />
            <span className="text-purple-600 font-medium">Browse Available Jobs</span>
          </Link>
          <Link
            to="/my-applications"
            className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
          >
            <FaClipboardList className="h-5 w-5 text-blue-600 mr-3" />
            <span className="text-blue-600 font-medium">View My Applications</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
          >
            <FaUser className="h-5 w-5 text-green-600 mr-3" />
            <span className="text-green-600 font-medium">Update Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 