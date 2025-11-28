import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaClipboardList,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  const navLinks = [
    { to: "/dashboard", icon: FaHome, label: "Home" },
    { to: "/dashboard/chore-jobs", icon: FaBriefcase, label: "Chore Jobs" },
    { to: "/dashboard/my-applications", icon: FaClipboardList, label: "My Applications" },
    { to: "/dashboard/profile", icon: FaUser, label: "Profile" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">QuickHire</h1>
        </div>
        <nav className="mt-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <link.icon className="mr-3" />
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors duration-200"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default UserDashboard; 