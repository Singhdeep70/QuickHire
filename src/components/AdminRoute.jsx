import React from 'react';
import { Navigate } from 'react-router-dom';

function AdminRoute({ children }) {
  // Check if user is authenticated and is an admin
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole'); // In a real app, this would come from your auth state

  if (!token) {
    // Not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (userRole !== 'admin') {
    // Not an admin, redirect to home
    return <Navigate to="/" replace />;
  }

  // User is authenticated and is an admin, render the protected route
  return children;
}

export default AdminRoute; 