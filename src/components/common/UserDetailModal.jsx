import React from 'react'

const UserDetailModal = ({userDetail,onClose}) => {

  return (
    <div className='fixed top-[30%] left-[50%] -translate-x-1/2 bg-[#f0d8d8] p-8 rounded-2xl text-center'>
      <h1>User Details</h1>
      <div>{userDetail.id}</div>
      <div>{userDetail.name}</div>
      <div>{userDetail.email}</div>
      <button
        className='mt-3 border-2 rounded-lg text-black px-3'
        onClick={onClose}
      >Close</button>
    </div>
  )
}

export default UserDetailModal
