import React, { useState } from 'react'
import { Bell, ChevronDown, MessageSquare, User } from 'lucide-react'

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const toggleProfileMenu = () => {
    setShowProfileMenu((current) => !current)
  }

  return (
    <nav className="topbar">
      <div className="topbar-logo">
        <img src="/image/3.png" alt="HOMEZY" className="topbar-logo-image" />
      </div>

      <div className="topbar-actions">
        <div className="topbar-profile">
          <div className="topbar-profile-row">
            <button
              type="button"
              onClick={toggleProfileMenu}
              className="topbar-chevron-button"
              aria-label="فتح القائمة"
            >
              <ChevronDown size={18} />
            </button>

            <button
              type="button"
              onClick={toggleProfileMenu}
              className="topbar-profile-button"
              aria-label="ملف المستخدم"
            >
              <span className="topbar-profile-name">فيصل الحربي</span>
              <img src="/image/1.jpg" alt="فيصل الحربي" className="topbar-avatar-image" />
            </button>
          </div>

          {showProfileMenu && (
            <div className="topbar-profile-menu">
              <a href="#">
                <User size={18} />
                الملف الشخصي
              </a>
              <a href="#">تسجيل الخروج</a>
            </div>
          )}
        </div>

        <button type="button" className="topbar-icon-button" aria-label="الإشعارات">
          <Bell size={22} />
        </button>

        <button type="button" className="topbar-icon-button" aria-label="الرسائل">
          <MessageSquare size={22} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
