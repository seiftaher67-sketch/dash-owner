import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  BarChart3,
  Building2,
  Calendar,
  ChartColumnBig,
  DollarSign,
  Home,
  LogOut,
  MessageSquare,
} from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { label: 'الرئيسية', icon: Home, path: '/' },
    { label: 'إدارة العقارات', icon: Building2, path: '/properties' },
    { label: 'الحجوزات', icon: Calendar, path: '/bookings' },
    { label: 'الإحصائيات', icon: BarChart3, path: '/analytics' },
    { label: 'التعليقات', icon: MessageSquare, path: '/comments' },
    { label: 'الأرباح', icon: DollarSign, path: '/profits' },
  ]

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar-inner">
        <nav className="dashboard-sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`dashboard-sidebar-link ${isActive ? 'is-active' : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="dashboard-sidebar-footer">
         

          <button type="button" className="dashboard-sidebar-link dashboard-sidebar-logout">
            <LogOut size={20} />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
