import React from 'react';
import { Link } from 'react-router-dom';

const CreateTicket = () => {
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
              <Link to="/admin/tickets" className="block py-2 px-4 hover:bg-gray-700">View Tickets</Link>
            </li>
            {/* Add more sidebar sections here */}
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <div className="p-4">
          {/* Main content area */}
          <h1 className="text-2xl font-bold mb-4">Create Ticket</h1>
          <p>This is where you can create a new ticket.</p>
          {/* Button to create a ticket */}
          <Link to="/ticket-form" className="inline-block bg-blue-500 text-white font-semibold px-4 py-2 mt-4 rounded hover:bg-blue-600">
            Create a Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;

