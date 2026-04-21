import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const bookings = [
  {
    id: 1,
    client: 'أحمد علي',
    property: 'شقة في الزمالك',
    date: '8 نوفمبر 2025',
    status: 'مؤكد',
    amount: '22,000 ريال',
  },
  {
    id: 2,
    client: 'مشاري العتيبي',
    property: 'فيلا الشيخ زايد',
    date: '7 نوفمبر 2025',
    status: 'قيد الانتظار',
    amount: '22,000 ريال',
  },
  {
    id: 3,
    client: 'محمد حسن',
    property: 'فيلا الشيخ زايد',
    date: '6 نوفمبر 2025',
    status: 'مؤكد',
    amount: '22,000 ريال',
  },
  {
    id: 4,
    client: 'خالد محمود',
    property: 'فيلا الشيخ زايد',
    date: '5 نوفمبر 2025',
    status: 'ملغي',
    amount: '22,000 ريال',
  },
  {
    id: 5,
    client: 'خالد محمود',
    property: 'فيلا الشيخ زايد',
    date: '5 نوفمبر 2025',
    status: 'مؤكد',
    amount: '22,000 ريال',
  },
]

const statusClassName = {
  مؤكد: 'status-badge status-confirmed',
  'قيد الانتظار': 'status-badge status-pending',
  ملغي: 'status-badge status-cancelled',
}

function BookingsPage() {
  return (
    <section className="bookings-page">
        <header className="bookings-page-header">
          <div className="bookings-page-title">
            <h1>الحجوزات</h1>
            <div className="properties-breadcrumb">
              <span>الرئيسية</span>
              <ChevronLeft size={18} />
              <strong>الحجوزات</strong>
            </div>
          </div>
        </header>

        <section className="bookings-table-panel">
          <div className="bookings-table-header">
            <h2>أحدث الحجوزات</h2>
          </div>

          <div className="bookings-table-wrap-custom">
            <table className="bookings-clean-table">
              <thead>
                <tr>
                  <th>العميل</th>
                  <th>اسم العقار</th>
                  <th>التاريخ</th>
                  <th>الحالة</th>
                  <th>المبلغ</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.client}</td>
                    <td>{booking.property}</td>
                    <td className="muted-cell">{booking.date}</td>
                    <td>
                      <span className={statusClassName[booking.status]}>{booking.status}</span>
                    </td>
                    <td className="amount-cell">{booking.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className="properties-pagination bookings-pagination">
            <button type="button" className="page-arrow disabled">
              <ChevronRight size={28} />
            </button>
            <button type="button" className="page-number active">1</button>
            <button type="button" className="page-number">2</button>
            <button type="button" className="page-number">3</button>
            <button type="button" className="page-number dots">.....</button>
            <button type="button" className="page-number">15</button>
            <button type="button" className="page-number">16</button>
            <button type="button" className="page-arrow">
              <ChevronLeft size={28} />
            </button>
          </footer>
        </section>
    </section>
  )
}

export default BookingsPage
