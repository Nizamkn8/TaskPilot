import React, { useEffect, useState } from 'react'
import UserDetailModal from '../components/common/UserDetailModal'

const Teams = () => {
  const [teamMembers,setTeamMembers] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")
  const [selectedUser,setSelectedUser] = useState(null)
  const [isModalOpen,setIsModalOpen] = useState(false)

  useEffect(() => {
    async function fetchUsers() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("failed to fetch users");
        let users = await res.json();
        setTeamMembers(users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  },[])

  const handleModalClick = (user) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  console.log(selectedUser);


  if(loading) return <div>Loading....</div>
  if(error) return <div>{error}</div>

  return (
    <div className='py-[80px] px-[40px]'>
      <h1>Team Members</h1>
      {teamMembers.map((user) => (
        <div key={user.id} className='p-3 bg-amber-100 mb-3 text-black'>
          <div >{user.name}</div>
          <div>{user.email}</div>
          <button onClick={() => handleModalClick(user)}>Show Details</button>
        </div>
      ))}

      {isModalOpen && (
        <UserDetailModal
          userDetail={selectedUser}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedUser(null)
          }}
        />
      )}

    </div>
  )
}

export default Teams
