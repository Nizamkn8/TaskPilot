import React from 'react'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='mx-auto relative'>
      <Navbar />
      <main>
        <div className='flex'>
          <Sidebar />
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout
