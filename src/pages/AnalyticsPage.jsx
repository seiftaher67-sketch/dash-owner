import React from 'react'
import {
  BarChart3,
  Building2,
  CalendarClock,
  ChevronDown,
  ChevronLeft,
  Eye,
  Star,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import {
  Area,
  AreaChart,
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

const monthlyBookings = [
  { month: 'يناير', bookings: 5 },
  { month: 'فبراير', bookings: 9 },
  { month: 'مارس', bookings: 30 },
  { month: 'إبريل', bookings: 55 },
  { month: 'مايو', bookings: 7 },
  { month: 'يونيو', bookings: 14 },
  { month: 'يوليو', bookings: 56 },
  { month: 'أغسطس', bookings: 100 },
]

const topPerformers = [
  { name: 'شقة في الزمالك', views: 12, status: 'متاح', viewers: ['أ', 'ف', 'م', 'س', '+2'] },
  { name: 'فيلا الشيخ زايد', views: 7, status: 'متاح', viewers: ['أ', 'ف', 'م', 'س', '+2'] },
  { name: 'فيلا الشيخ زايد', views: 4, status: 'محجوز', viewers: ['أ', 'ف', 'م', 'س', '+2'] },
  { name: 'فيلا الشيخ زايد', views: 5, status: 'محجوز', viewers: ['أ', 'ف', 'م', 'س', '+2'] },
  { name: 'فيلا الشيخ زايد', views: 8, status: 'متاح', viewers: ['أ', 'ف', 'م', 'س', '+2'] },
]

const lowPerformers = [
  { name: 'استوديو المهندسين', views: 1, status: 'متاح', viewers: ['أ', 'ف', 'م', 'س', '+2'] },
  { name: 'شقة 6 أكتوبر', views: 2, status: 'متاح', viewers: ['أ', 'ف', 'م', 'س', '+2'] },
]

const statusClassName = {
  متاح: 'status-badge status-confirmed',
  محجوز: 'status-badge status-cancelled',
}

function AnalyticsStatCard({ stat }) {
  const Icon = stat.icon
  const trendUp = stat.trend === 'up'
  const TrendIcon = trendUp ? TrendingUp : TrendingDown

  return (
    <article className="analytics-stat-card" style={{ '--accent': stat.accent, '--soft': stat.soft }}>
      <div className="analytics-stat-top">
        <div className="analytics-stat-icon">
          <Icon size={26} />
        </div>
        <div className="analytics-stat-copy">
          <h3>{stat.title}</h3>
          <strong>{stat.value}</strong>
        </div>
      </div>

      <div className={`analytics-stat-trend ${trendUp ? 'trend-up' : 'trend-down'}`}>
        <span>{stat.trendLabel}</span>
        <div className="analytics-stat-trend-value">
          <TrendIcon size={20} />
          <span>{stat.note}</span>
        </div>
      </div>
    </article>
  )
}

function ViewersStack({ viewers }) {
  return (
    <div className="property-viewers-stack">
      {viewers.map((viewer, index) => (
        <span key={`${viewer}-${index}`} className={`property-viewer-badge ${viewer === '+2' ? 'is-count' : ''}`}>
          {viewer}
        </span>
      ))}
    </div>
  )
}

function PerformanceTable({ title, tone, rows }) {
  return (
    <section className="analytics-table-panel">
      <div className={`analytics-table-banner ${tone}`}>
        <span>{title}</span>
      </div>

      <div className="analytics-table-title">أحدث الحجوزات</div>

      <div className="analytics-performance-wrap">
        <table className="analytics-performance-table">
          <thead>
            <tr>
              <th>اسم العقار</th>
              <th>المشاهدين</th>
              <th>الطلبات</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.name}-${index}`}>
                <td>{row.name}</td>
                <td><ViewersStack viewers={row.viewers} /></td>
                <td>{row.views}</td>
                <td><span className={statusClassName[row.status]}>{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function AnalyticsPage() {
  return (
    <section className="analytics-page">
        <header className="analytics-page-header">
          <div className="analytics-page-title">
            <h1>الإحصائيات</h1>
            <div className="properties-breadcrumb">
              <span>الرئيسية</span>
              <ChevronLeft size={18} />
              <strong>الإحصائيات</strong>
            </div>
          </div>
        </header>

        <section className="analytics-filters">
          <button type="button" className="analytics-filter-chip">
            <ChevronDown size={22} />
            <span>جميع العقارات</span>
          </button>

          <button type="button" className="analytics-filter-chip">
            <ChevronDown size={22} />
            <span>آخر 7 أيام</span>
          </button>
        </section>

        <section className="analytics-stats-grid">
          {stats.map((stat) => (
            <AnalyticsStatCard key={stat.title} stat={stat} />
          ))}
        </section>

        <section className="analytics-two-column">
          <article className="analytics-panel">
            <div className="analytics-panel-title">المشاهدات حسب العقار</div>
            <div className="analytics-chart-wrap">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={viewsByProperty} margin={{ top: 12, right: 0, left: 0, bottom: 18 }}>
                  <CartesianGrid stroke="#e8edf5" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} interval={0} tick={{ fill: '#1f2937', fontSize: 12 }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fill: '#697586', fontSize: 12 }} />
                  <Tooltip
                    cursor={{ fill: 'rgba(21, 89, 183, 0.08)' }}
                    contentStyle={{ borderRadius: 14, border: '1px solid #dbe4f0' }}
                  />
                  <Bar dataKey="views" fill="#1559b7" radius={[8, 8, 0, 0]} maxBarSize={38} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="analytics-panel">
            <div className="analytics-panel-title">توزيع أنواع العقارات</div>
            <div className="distribution-layout analytics-distribution-layout">
              <div className="distribution-list">
                {propertyTypes.map((item) => (
                  <div key={item.name} className="distribution-item">
                    <div className="distribution-item-head">
                      <span className="distribution-dot" style={{ backgroundColor: item.color }} />
                      <strong>{item.name}</strong>
                      <span>{item.value}%</span>
                    </div>
                    <p>عدد الوحدات: {item.units} {item.name === 'الغرف الفندقية' ? 'غرف' : item.name === 'الفلل' ? 'فلل' : 'شقق'}</p>
                  </div>
                ))}
              </div>

              <div className="distribution-chart">
                <ResponsiveContainer width="100%" height={270}>
                  <PieChart>
                    <Pie
                      data={propertyTypes}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={62}
                      outerRadius={110}
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

        <section className="analytics-panel analytics-panel-wide">
          <div className="analytics-panel-title">الحجوزات الشهرية</div>
          <div className="analytics-chart-wrap analytics-area-wrap">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyBookings} margin={{ top: 12, right: 12, left: 12, bottom: 0 }}>
                <CartesianGrid stroke="#e8edf5" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#7b8794', fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fill: '#7b8794', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ borderRadius: 14, border: '1px solid #dbe4f0' }}
                  formatter={(value) => [`${value} حجز`, 'الحجوزات']}
                />
                <Area
                  type="monotone"
                  dataKey="bookings"
                  stroke="#1559b7"
                  strokeWidth={2}
                  fill="rgba(21, 89, 183, 0.25)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <PerformanceTable title="أعلى العقارات أداءً" tone="success" rows={topPerformers} />
        <PerformanceTable title="العقارات الأقل زيارة" tone="danger" rows={lowPerformers} />
    </section>
  )
}

export default AnalyticsPage
