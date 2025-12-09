import React, { useState } from "react";
import UserModal from "../components/common/UserModal";
import { useDispatch, useSelector } from "react-redux";
import { addUser, clearSelectedUser, loadMoreUsers, selectUser, updateUser } from "../redux/features/users/usersSlice";
import Search from "../features/search/Search";

const Users = () => {
  // using redux implementation
  const dispatch = useDispatch();

  const users = useSelector(state => state.users.list);
  const selectedUser = useSelector(state => state.users.selectedUser);
  const visibleCount = useSelector(state => state.users.visibleCount)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm,setSearchTerm] = useState("");

  const handleAdd = (user) => {
    //redux
    dispatch(addUser(user))
    setIsModalOpen(false);
    dispatch(clearSelectedUser())
  };

  const handleUpdate = (user) => {
    dispatch(updateUser(user));
    setIsModalOpen(false);
    dispatch(clearSelectedUser());
  }

  //filter the user from recieved search query from Searc.jsx component
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="py-[80px] px-[40px] w-full">
      <div className="max-w-[500px] w-full">
        <div className="flex justify-between mb-4">
          <h1>User Management</h1>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => {
              dispatch(clearSelectedUser()) // Add mode
              setIsModalOpen(true);
            }}
          >
            + Add User
          </button>
        </div>

        <Search onSearch={(value) => setSearchTerm((value))}/>

        <table className="border-collapse border-2 w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.slice(0, visibleCount).map((user) => (
              <tr key={user.id}>
                <td className="border-1 p-2">{user.name}</td>
                <td className="border-1 p-2">{user.email}</td>
                <td className="border-1 p-2">{user.role}</td>
                <td className="border-1 p-2">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => {
                    dispatch(selectUser(user))
                    setIsModalOpen(true)
                  }}>Edit</button>
                </td>
              </tr>
            ))}

            {users.length > visibleCount && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  <button
                    //onClick={() => setUsersVisibleCount((prev) => prev + 5)}
                    onClick={() => dispatch(loadMoreUsers())}
                    className="bg-gray-200 px-4 py-2"
                  >
                    Load More
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {isModalOpen && (
          <UserModal
            close={() => {
              setIsModalOpen(false);
              dispatch(clearSelectedUser())
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
