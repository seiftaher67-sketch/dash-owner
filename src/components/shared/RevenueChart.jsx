import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const RevenueChart = () => {
  const data = [
    { month: 'يناير', revenue: 12000 },
    { month: 'فبراير', revenue: 15000 },
    { month: 'مارس', revenue: 18000 },
    { month: 'أبريل', revenue: 22000 },
    { month: 'مايو', revenue: 25000 },
    { month: 'يونيو', revenue: 28000 },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">الإيرادات</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} dir="ltr">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `${value} ريال`} />
          <Bar dataKey="revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart
