import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div dir="rtl" className="dashboard-app">
      <Navbar />
      <div className="dashboard-shell">
        <Sidebar />
        <main className="dashboard-main">
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  )
}

export default Layout
