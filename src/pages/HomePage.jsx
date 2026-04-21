import React from 'react'
import {
  BellRing,
  Building2,
  CalendarClock,
  Eye,
  MessageCircleMore,
  Star,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const stats = [
  {
    title: 'عدد العقارات',
    value: '12',
    note: '+ 7.3 %',
    trendLabel: 'مقارنة بآخر 7 أيام',
    trend: 'up',
    icon: Building2,
    accent: '#1559b7',
    soft: '#dfeaf8',
  },
  {
    title: 'عدد المشاهدات',
    value: '1,234',
    note: '+ 12.5 %',
    trendLabel: 'مقارنة بآخر 7 أيام',
    trend: 'up',
    icon: Eye,
    accent: '#31c45d',
    soft: '#e1f4e6',
  },
  {
    title: 'متوسط التقييم',
    value: '4.8',
    note: '+ 7.3 %',
    trendLabel: 'مقارنة بآخر 7 أيام',
    trend: 'up',
    icon: Star,
    accent: '#ffc107',
    soft: '#fff4d6',
  },
  {
    title: 'عدد الحجوزات',
    value: '45',
    note: '- 0.5 %',
    trendLabel: 'مقارنة بآخر 7 أيام',
    trend: 'down',
    icon: CalendarClock,
    accent: '#1559b7',
    soft: '#dfeaf8',
  },
]

const viewsByProperty = [
  { name: 'شقة مدينة نصر', views: 350 },
  { name: 'فيلا التجمع الخامس', views: 510 },
  { name: 'غرفة فندقية المعادي', views: 200 },
  { name: 'فيلا الشيخ زايد', views: 600 },
  { name: 'شقة 6 أكتوبر', views: 350 },
  { name: 'شقة التجمع الخامس', views: 300 },
  { name: 'فيلا الشيخ زايد 2', views: 600 },
  { name: 'شقة التجمع الخامس 2', views: 300 },
]

const propertyTypes = [
  { name: 'الشقق', value: 45, units: 5, color: '#1559b7' },
  { name: 'الفلل', value: 35, units: 4, color: '#17a2cc' },
  { name: 'الغرف الفندقية', value: 20, units: 3, color: '#2b4f8f' },
]

const latestComments = [
  {
    id: 1,
    author: 'مشاري العتيبي',
    rating: 4.9,
    date: 'الاثنين، 27 أكتوبر',
    avatar: 'م',
    text:
      'تجربة رائعة جدًا، المكان مريح ونظيف ومرتب، وتم الاهتمام بالتفاصيل الصغيرة بشكل واضح. التواصل كان ممتازًا طوال فترة الإقامة.',
  },
  {
    id: 2,
    author: 'مشاري العتيبي',
    rating: 4.9,
    date: 'الاثنين، 27 أكتوبر',
    avatar: 'م',
    text:
      'هذه من أفضل الإقامات التي جربتها، الشقة نظيفة جدًا وأشعرتني براحة كبيرة، وسأكرر التجربة مرة أخرى بالتأكيد.',
  },
]

const latestBookings = [
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

function DashboardStatCard({ stat }) {
  const Icon = stat.icon
  const trendUp = stat.trend === 'up'
  const TrendIcon = trendUp ? TrendingUp : TrendingDown

  return (
    <article className="dashboard-stat-card" style={{ '--accent': stat.accent, '--soft': stat.soft }}>
      <div className="dashboard-stat-top">
        <div className="dashboard-stat-icon">
          <Icon size={30} />
        </div>
        <div className="dashboard-stat-copy">
          <h3>{stat.title}</h3>
          <strong>{stat.value}</strong>
        </div>
      </div>

      <div className={`dashboard-stat-trend ${trendUp ? 'trend-up' : 'trend-down'}`}>
        <span>{stat.trendLabel}</span>
        <div className="dashboard-stat-trend-value">
          <TrendIcon size={22} />
          <span>{stat.note}</span>
        </div>
      </div>
    </article>
  )
}

function RatingStars() {
  return <span className="rating-stars">★★★★★</span>
}

function HomePage() {
  return (
    <section className="dashboard-home">
        <header className="dashboard-home-header">
          <div className="dashboard-home-actions">
             </div>

          <div className="dashboard-home-actions">
            <p className="dashboard-home-eyebrow">الرئيسية</p>
           
          </div>
        </header>

        <section className="dashboard-stats-grid">
          {stats.map((stat) => (
            <DashboardStatCard key={stat.title} stat={stat} />
          ))}
        </section>

        <section className="dashboard-two-column">
          <article className="dashboard-panel dashboard-panel-large">
            <div className="dashboard-panel-header">
              <h2>المشاهدات حسب العقار</h2>
            </div>

            <div className="dashboard-chart-area">
              <ResponsiveContainer width="100%" height={390}>
                <BarChart data={viewsByProperty} margin={{ top: 16, right: 0, left: 0, bottom: 24 }}>
                  <CartesianGrid stroke="#e8edf5" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    interval={0}
                    tick={{ fill: '#1f2937', fontSize: 14 }}
                  />
                  <YAxis tickLine={false} axisLine={false} tick={{ fill: '#1f2937', fontSize: 14 }} />
                  <Tooltip
                    cursor={{ fill: 'rgba(21, 89, 183, 0.08)' }}
                    contentStyle={{
                      borderRadius: 16,
                      border: '1px solid #dbe4f0',
                      boxShadow: '0 16px 30px rgba(15, 23, 42, 0.08)',
                    }}
                  />
                  <Bar dataKey="views" fill="#1559b7" radius={[10, 10, 0, 0]} maxBarSize={48} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="dashboard-panel dashboard-panel-medium">
            <div className="dashboard-panel-header">
              <h2>توزيع أنواع العقارات</h2>
            </div>

            <div className="distribution-layout">
              <div className="distribution-list">
                {propertyTypes.map((item) => (
                  <div key={item.name} className="distribution-item">
                    <div className="distribution-item-head">
                      <span className="distribution-dot" style={{ backgroundColor: item.color }} />
                      <strong>{item.name}</strong>
                      <span>{item.value}%</span>
                    </div>
                    <p>عدد الوحدات: {item.units}</p>
                  </div>
                ))}
              </div>

              <div className="distribution-chart">
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie
                      data={propertyTypes}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={76}
                      outerRadius={128}
                      paddingAngle={2}
                    >
                      {propertyTypes.map((item) => (
                        <Cell key={item.name} fill={item.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="distribution-center">
                  <strong>5</strong>
                  <span>إجمالي العقارات</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="dashboard-bottom-grid">
          <article className="dashboard-panel dashboard-comments-panel">
            <div className="dashboard-panel-header dashboard-panel-header-link">
              <h2>التعليقات الجديدة</h2>
              <button type="button">عرض الكل</button>
            </div>

            <div className="comments-list">
              {latestComments.map((comment) => (
                <article key={comment.id} className="comment-card">
                  <div className="comment-top">
                    <div className="comment-avatar">{comment.avatar}</div>
                    <div className="comment-meta">
                      <strong>{comment.author}</strong>
                      <span>{comment.date}</span>
                    </div>
                    <div className="comment-rating">
                      <span>{comment.rating}</span>
                      <RatingStars />
                    </div>
                  </div>

                  <p>{comment.text}</p>

                  <button type="button" className="comment-reply">
                    رد على التعليق
                  </button>
                </article>
              ))}
            </div>
          </article>

          <article className="dashboard-panel dashboard-bookings-panel">
            <div className="dashboard-panel-header dashboard-panel-header-link">
              <h2>أحدث الحجوزات</h2>
              <button type="button">عرض الكل</button>
            </div>

            <div className="bookings-table-wrap">
              <table className="dashboard-bookings-table">
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
                  {latestBookings.map((booking) => (
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
          </article>
        </section>
    </section>
  )
}

export default HomePage
