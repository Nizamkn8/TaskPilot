import React from "react";

const UserDetailModal = ({ userDetail, onClose }) => {
  if (!userDetail) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal Card */}
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl relative">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            User Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3 text-left">
          <div>
            <p className="text-sm text-gray-500">User ID</p>
            <p className="font-medium text-gray-800">{userDetail.id}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium text-gray-800">{userDetail.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">{userDetail.email}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
