import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
          <ul>
            <li className="mb-2">
              <Link to="/create-ticket" className="block py-2 px-4 hover:bg-gray-700">Create Ticket</Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/tickets" className="block py-2 px-4 hover:bg-gray-700">Manage Tickets</Link>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">User Management</h3>
          <ul>
            <li className="mb-2">
              <Link to="/create-user" className="block py-2 px-4 hover:bg-gray-700">Create User</Link>
            </li>
            <li className="mb-2">
              <Link to="/display-users" className="block py-2 px-4 hover:bg-gray-700">Manage Users</Link>
            </li>
          </ul>
          {/* Add more sidebar sections here */}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <div className="p-4">
          {/* Main content area */}
          <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
          {/* Include components or content based on the selected menu item */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


