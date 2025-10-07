import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container mx-auto relative'>
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
