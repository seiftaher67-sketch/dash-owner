import React from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ClipboardList,
  DollarSign,
  Download,
  TrendingUp,
} from 'lucide-react'

const summaryCards = [
  {
    title: 'إجمالي الأرباح',
    value: '25,250 ريال',
    icon: TrendingUp,
    accent: '#1559b7',
    soft: '#dfeaf8',
  },
  {
    title: 'أرباح هذا الشهر',
    value: '18,500 ريال',
    icon: Calendar,
    accent: '#31c45d',
    soft: '#dff5e6',
  },
  {
    title: 'أرباح اليوم',
    value: '750 ريال',
    icon: DollarSign,
    accent: '#ffc107',
    soft: '#fff4d6',
  },
  {
    title: 'الحجوزات المدفوعة',
    value: '7 حجوزات',
    icon: ClipboardList,
    accent: '#1559b7',
    soft: '#dfeaf8',
  },
]

const areaChartData = [
  { month: 'يناير', profit: 20500 },
  { month: 'فبراير', profit: 19800 },
  { month: 'مارس', profit: 19400 },
  { month: 'إبريل', profit: 23600 },
  { month: 'مايو', profit: 21400 },
  { month: 'يونيو', profit: 24200 },
]

const comparisonData = [
  { month: 'يناير', value: 140 },
  { month: 'فبراير', value: 300 },
  { month: 'مارس', value: 360 },
  { month: 'إبريل', value: 430 },
  { month: 'مايو', value: 500 },
  { month: 'يونيو', value: 540 },
  { month: 'يوليو', value: 610 },
]

const transactions = [
  {
    id: 1,
    date: '22 مايو 2025',
    propertyName: 'شقة في الزمالك',
    propertyType: 'شقة',
    paymentMethod: 'مدى',
    status: 'مدفوع',
    amount: '22,000 ريال',
  },
  {
    id: 2,
    date: '18 مايو 2025',
    propertyName: 'فيلا الشيخ زايد',
    propertyType: 'فيلا',
    paymentMethod: 'فيزا',
    status: 'معلق',
    amount: '22,000 ريال',
  },
  {
    id: 3,
    date: '16 مايو 2025',
    propertyName: 'شقة في الزمالك',
    propertyType: 'شقة',
    paymentMethod: 'مدى',
    status: 'مدفوع',
    amount: '22,000 ريال',
  },
  {
    id: 4,
    date: '16 مايو 2025',
    propertyName: 'شقة السكنية',
    propertyType: 'شقة',
    paymentMethod: 'ماستر كارد',
    status: 'مدفوع',
    amount: '22,000 ريال',
  },
  {
    id: 5,
    date: '12 مايو 2025',
    propertyName: 'شقة في الزمالك',
    propertyType: 'شقة',
    paymentMethod: 'مدى',
    status: 'مدفوع',
    amount: '22,000 ريال',
  },
]

const statusClassName = {
  مدفوع: 'status-badge status-confirmed',
  معلق: 'status-badge status-pending',
}

function SummaryCard({ card }) {
  const Icon = card.icon

  return (
    <article className="profits-summary-card" style={{ '--accent': card.accent, '--soft': card.soft }}>
      <div className="profits-summary-card-top">
        <div className="profits-summary-icon">
          <Icon size={30} />
        </div>
        <div className="profits-summary-copy">
          <h3>{card.title}</h3>
          <strong>{card.value}</strong>
        </div>
      </div>
    </article>
  )
}

function ProfitsPage() {
  return (
    <section className="profits-page">
        <header className="profits-page-header">
          <div className="profits-page-title">
            <h1>الأرباح</h1>
            <div className="properties-breadcrumb">
              <span>الرئيسية</span>
              <ChevronLeft size={18} />
              <strong>الأرباح</strong>
            </div>
          </div>
        </header>

        <section className="profits-summary-grid">
          {summaryCards.map((card) => (
            <SummaryCard key={card.title} card={card} />
          ))}
        </section>

        <section className="profits-panel profits-panel-chart">
          <div className="profits-panel-head">
            <h2>أرباح آخر 6 أشهر</h2>
          </div>

          <div className="profits-area-chart-wrap">
            <ResponsiveContainer width="100%" height={520}>
              <AreaChart data={areaChartData} margin={{ top: 24, right: 12, left: 12, bottom: 10 }}>
                <defs>
                  <linearGradient id="profitsAreaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1559b7" stopOpacity={0.22} />
                    <stop offset="100%" stopColor="#1559b7" stopOpacity={0.04} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#eef3f9" vertical={true} strokeDasharray="0" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#9097a3', fontSize: 16 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#9097a3', fontSize: 16 }}
                  domain={[12000, 24000]}
                  ticks={[12000, 14000, 16000, 18000, 20000, 22000, 24000]}
                  tickFormatter={(value) => value.toLocaleString('en-US')}
                />
                <Tooltip
                  formatter={(value) => [`${Number(value).toLocaleString('en-US')} ريال`, 'الأرباح']}
                  labelFormatter={(label) => `شهر ${label}`}
                  contentStyle={{
                    borderRadius: 18,
                    border: '1px solid #dbe4f0',
                    boxShadow: '0 18px 34px rgba(15, 23, 42, 0.08)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#1559b7"
                  strokeWidth={4}
                  fill="url(#profitsAreaFill)"
                  activeDot={{ r: 7, strokeWidth: 0, fill: '#1559b7' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="profits-panel profits-panel-chart">
          <div className="profits-panel-head">
            <h2>مقارنة شهرية</h2>
          </div>

          <div className="profits-bar-chart-wrap">
            <ResponsiveContainer width="100%" height={430}>
              <BarChart data={comparisonData} margin={{ top: 16, right: 10, left: 10, bottom: 6 }}>
                <CartesianGrid stroke="#eef3f9" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#9097a3', fontSize: 16 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#111827', fontSize: 16 }}
                  domain={[0, 600]}
                  ticks={[0, 100, 200, 300, 400, 500, 600]}
                />
                <Tooltip
                  formatter={(value) => [value, 'القيمة']}
                  labelFormatter={(label) => `شهر ${label}`}
                  contentStyle={{
                    borderRadius: 18,
                    border: '1px solid #dbe4f0',
                    boxShadow: '0 18px 34px rgba(15, 23, 42, 0.08)',
                  }}
                />
                <Bar dataKey="value" fill="#1559b7" radius={[22, 22, 22, 22]} maxBarSize={138} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="profits-panel profits-transactions-panel">
          <div className="profits-panel-head profits-panel-head-actions">
            <h2>المعاملات التفصيلية</h2>

            <div className="profits-export-actions">
              <button type="button" className="profits-export-button profits-export-button-pdf">
                <span>PDF</span>
                <Download size={22} />
              </button>
              <button type="button" className="profits-export-button profits-export-button-csv">
                <span>CSV</span>
                <Download size={22} />
              </button>
            </div>
          </div>

          <div className="profits-filters-row">
            <button type="button" className="profits-filter-chip">
              <ChevronDown size={24} />
              <span>جميع العقارات</span>
            </button>
            <button type="button" className="profits-filter-chip">
              <ChevronDown size={24} />
              <span>الشهر</span>
            </button>
            <button type="button" className="profits-filter-chip">
              <ChevronDown size={24} />
              <span>جميع وسائل الدفع</span>
            </button>
            <button type="button" className="profits-filter-chip">
              <ChevronDown size={24} />
              <span>جميع الحالات</span>
            </button>
          </div>

          <div className="profits-table-wrap">
            <table className="profits-table">
              <thead>
                <tr>
                  <th>التاريخ</th>
                  <th>اسم العقار</th>
                  <th>نوع العقار</th>
                  <th>وسيلة الدفع</th>
                  <th>الحالة</th>
                  <th>المبلغ</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="profits-table-date">{transaction.date}</td>
                    <td>{transaction.propertyName}</td>
                    <td>{transaction.propertyType}</td>
                    <td>{transaction.paymentMethod}</td>
                    <td>
                      <span className={statusClassName[transaction.status]}>{transaction.status}</span>
                    </td>
                    <td className="profits-table-amount">{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
    </section>
  )
}

export default ProfitsPage
