import React, { useState } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { 
  FaHome, 
  FaBriefcase, 
  FaUsers, 
  FaUser, 
  FaSignOutAlt,
  FaChartBar,
  FaCog
} from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    // Clear authentication token
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  const getNavLinkClass = ({ isActive }) => {
    return `flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
      isActive ? 'bg-white/20' : 'hover:bg-white/10'
    }`;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6 shadow-lg fixed h-full transition-all duration-300 ease-in-out z-10`}>
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl font-bold flex items-center ${!isSidebarOpen && 'justify-center'}`}>
            <span className="bg-white text-blue-700 p-1 rounded mr-2">Q</span>
            {isSidebarOpen && <span>QuickHire</span>}
          </h2>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-white/10"
          >
            {isSidebarOpen ? '←' : '→'}
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin"
                end
                className={getNavLinkClass}
              >
                <FaHome className="mr-3" />
                {isSidebarOpen && <span>Home</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/jobs"
                className={getNavLinkClass}
              >
                <FaBriefcase className="mr-3" />
                {isSidebarOpen && <span>Chore Jobs</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={getNavLinkClass}
              >
                <FaUsers className="mr-3" />
                {isSidebarOpen && <span>Users</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/analytics"
                className={getNavLinkClass}
              >
                <FaChartBar className="mr-3" />
                {isSidebarOpen && <span>Analytics</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/settings"
                className={getNavLinkClass}
              >
                <FaCog className="mr-3" />
                {isSidebarOpen && <span>Settings</span>}
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/10 mt-8 text-left"
              >
                <FaSignOutAlt className="mr-3" />
                {isSidebarOpen && <span>Logout</span>}
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard; 