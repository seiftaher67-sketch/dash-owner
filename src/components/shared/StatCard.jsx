import React from 'react'

const StatCard = ({ title, value, icon, color, change }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red: 'bg-red-50 text-red-600',
  }

  const iconBgClasses = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
    yellow: 'bg-yellow-100',
    red: 'bg-red-100',
  }

  const Icon = icon

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
          <div className={`text-sm font-medium ${colorClasses[color]}`}>
            {change} من الشهر الماضي
          </div>
        </div>
        <div className={`${iconBgClasses[color]} p-3 rounded-lg`}>
          <Icon className={`text-${color}-600`} size={24} />
        </div>
      </div>
    </div>
  )
}

export default StatCard
