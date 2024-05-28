import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TicketForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open'); // Default status is Open
  const [userId, setUserId] = useState(1); // Default userId

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Submit the ticket form
      const response = await axios.post('http://localhost:5003/tickets', {
        title,
        description,
        status,
        userId
      });
      console.log("Ticket created:", response.data);
      // Clear form fields
      setTitle('');
      setDescription('');
      setStatus('Open');
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
          <ul>
            <li className="mb-2">
              <Link to="/admin/tickets/create" className="block py-2 px-4 hover:bg-gray-700">Create Ticket</Link>
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
          {/* Ticket Form */}
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-700 font-semibold mb-2">Status</label>
              <select
                id="status"
                value={status}
                onChange={handleStatusChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
              Create Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
