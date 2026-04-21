import React from 'react'
import { Eye, Trash2, Edit } from 'lucide-react'

const RecentBookingsTable = ({ bookings }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'مؤكد':
        return 'bg-green-100 text-green-800'
      case 'معلق':
        return 'bg-yellow-100 text-yellow-800'
      case 'ملغى':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">الحجوزات الأخيرة</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-right py-3 px-4 font-semibold text-gray-700">العقار</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">التاريخ</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 text-gray-800">{booking.property}</td>
                <td className="py-3 px-4 text-gray-600">{booking.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2 justify-end">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentBookingsTable
