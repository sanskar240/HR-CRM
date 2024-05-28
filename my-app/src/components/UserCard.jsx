import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
      {/* You can add more elements/buttons/icons here */}
    </div>
  );
};

export default UserCard;
