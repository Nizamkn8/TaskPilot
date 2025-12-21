import React, { useState } from "react";
import UserModal from "../components/common/UserModal/UserModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  clearSelectedUser,
  loadMoreUsers,
  selectUser,
  updateUser,
} from "../redux/features/users/usersSlice";
import Search from "../features/search/Search";

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.list);
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const visibleCount = useSelector((state) => state.users.visibleCount);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAdd = (user) => {
    dispatch(addUser(user));
    setIsModalOpen(false);
    dispatch(clearSelectedUser());
  };

  const handleUpdate = (user) => {
    dispatch(updateUser(user));
    setIsModalOpen(false);
    dispatch(clearSelectedUser());
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-[80px] px-[40px] w-full bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            User Management
          </h1>

          <button
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            onClick={() => {
              dispatch(clearSelectedUser());
              setIsModalOpen(true);
            }}
          >
            + Add User
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <Search onSearch={(value) => setSearchTerm(value)} />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Role
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.slice(0, visibleCount).map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
                      onClick={() => {
                        dispatch(selectUser(user));
                        setIsModalOpen(true);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}

              {users.length > visibleCount && (
                <tr>
                  <td colSpan="4" className="py-4 text-center">
                    <button
                      onClick={() => dispatch(loadMoreUsers())}
                      className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300 transition"
                    >
                      Load More
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <UserModal
            close={() => {
              setIsModalOpen(false);
              dispatch(clearSelectedUser());
            }}
            onSubmit={selectedUser ? handleUpdate : handleAdd}
            editUser={selectedUser}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
