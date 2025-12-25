import React, { useEffect, useState } from "react";
import UserDetailModal from "../components/common/UserDetailModal";
import UserCardSkeleton from "../components/skeletons/UserCardSkeleton";

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal,
        });

        if (!res.ok) throw new Error("failed to fetch users");

        const users = await res.json();
        setTeamMembers(users);
      } catch (err) {
        // ❗ Ignore abort errors
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();

    // clean up: abort request on unmount
    return () => {
      controller.abort();
    };
  }, []);

  const handleModalClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="py-[80px] px-[40px] max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Team Members</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <UserCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error)
    return (
      <div className="text-red-600 text-center font-medium mt-10">{error}</div>
    );

  return (
    <div className="py-[80px] px-[40px] max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Team Members</h1>

      {/* Team Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((user) => (
          <div
            key={user.id}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt={user.name}
              className="h-12 w-12 rounded-full"
            />
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <button
              onClick={() => handleModalClick(user)}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Show Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <UserDetailModal
          userDetail={selectedUser}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
};

export default Teams;
