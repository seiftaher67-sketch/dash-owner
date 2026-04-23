import React, { useState } from 'react'
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

const csvHeaders = ['التاريخ', 'اسم العقار', 'نوع العقار', 'وسيلة الدفع', 'الحالة', 'المبلغ']
const pdfColumnWidths = [150, 170, 110, 120, 90, 120]
const allOptionValue = 'all'
const allMonths = [
  'يناير',
  'فبراير',
  'مارس',
  'إبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر',
]

function createFileName(extension) {
  const dateLabel = new Date().toISOString().slice(0, 10)
  return `profits-report-${dateLabel}.${extension}`
}

function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function escapeCsvValue(value) {
  const normalizedValue = String(value ?? '').replace(/"/g, '""')
  return `"${normalizedValue}"`
}

function buildCsvContent(rows) {
  const headerRow = csvHeaders.map(escapeCsvValue).join(',')
  const dataRows = rows.map((row) =>
    [
      row.date,
      row.propertyName,
      row.propertyType,
      row.paymentMethod,
      row.status,
      row.amount,
    ]
      .map(escapeCsvValue)
      .join(',')
  )

  return ['\uFEFF' + headerRow, ...dataRows].join('\n')
}

function formatPdfTimestamp() {
  return new Date().toLocaleString('ar-EG')
}

function getTransactionMonthLabel(dateValue) {
  const parts = String(dateValue).trim().split(' ')
  return parts[1] ?? ''
}

function getFilterSummaryLines(filters) {
  return [
    `العقار: ${filters.propertyLabel}`,
    `الفترة: ${filters.monthLabel}`,
    `الدفع: ${filters.paymentLabel}`,
    `الحالة: ${filters.statusLabel}`,
  ]
}

function buildPdfFromJpegBytes(jpegBytes, imageWidth, imageHeight) {
  const encoder = new TextEncoder()
  const pdfWidth = 595.28
  const pdfHeight = 841.89
  const scale = Math.min(pdfWidth / imageWidth, pdfHeight / imageHeight)
  const drawWidth = imageWidth * scale
  const drawHeight = imageHeight * scale
  const offsetX = (pdfWidth - drawWidth) / 2
  const offsetY = (pdfHeight - drawHeight) / 2

  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    `3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pdfWidth.toFixed(2)} ${pdfHeight.toFixed(2)}]
/Resources << /XObject << /Im0 4 0 R >> >>
/Contents 5 0 R >>
endobj
`,
    `4 0 obj
<< /Type /XObject /Subtype /Image /Width ${imageWidth} /Height ${imageHeight}
/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>
stream
`,
    `5 0 obj
<< /Length ${encoder.encode(`q\n${drawWidth.toFixed(2)} 0 0 ${drawHeight.toFixed(2)} ${offsetX.toFixed(2)} ${offsetY.toFixed(2)} cm\n/Im0 Do\nQ\n`).length} >>
stream
q
${drawWidth.toFixed(2)} 0 0 ${drawHeight.toFixed(2)} ${offsetX.toFixed(2)} ${offsetY.toFixed(2)} cm
/Im0 Do
Q
endstream
endobj
`,
  ]

  const chunks = [encoder.encode('%PDF-1.4\n%\xFF\xFF\xFF\xFF\n')]
  const offsets = [0]
  let currentOffset = chunks[0].length

  objects.forEach((object, index) => {
    offsets[index + 1] = currentOffset
    const encoded = encoder.encode(object)
    chunks.push(encoded)
    currentOffset += encoded.length

    if (index === 3) {
      chunks.push(jpegBytes)
      currentOffset += jpegBytes.length
      const endStream = encoder.encode('\nendstream\nendobj\n')
      chunks.push(endStream)
      currentOffset += endStream.length
    }
  })

  const xrefOffset = currentOffset
  const xref = [
    `xref\n0 ${objects.length + 1}\n`,
    '0000000000 65535 f \n',
    ...offsets.slice(1).map((offset) => `${String(offset).padStart(10, '0')} 00000 n \n`),
    `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`,
  ].join('')

  chunks.push(encoder.encode(xref))
  return new Blob(chunks, { type: 'application/pdf' })
}

function dataUrlToUint8Array(dataUrl) {
  const base64 = dataUrl.split(',')[1]
  const binary = window.atob(base64)
  const bytes = new Uint8Array(binary.length)

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }

  return bytes
}

function truncateText(context, value, maxWidth) {
  if (context.measureText(value).width <= maxWidth) {
    return value
  }

  let truncated = value
  while (truncated.length > 0 && context.measureText(`${truncated}...`).width > maxWidth) {
    truncated = truncated.slice(0, -1)
  }

  return `${truncated}...`
}

function renderProfitsReportToCanvas(reportTransactions, filters) {
  const canvas = document.createElement('canvas')
  canvas.width = 1240
  canvas.height = 1754

  const context = canvas.getContext('2d')
  if (!context) {
    throw new Error('Canvas context is not available')
  }

  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.direction = 'rtl'
  context.textAlign = 'right'
  context.imageSmoothingEnabled = true

  context.fillStyle = '#0f172a'
  context.font = '700 40px Tahoma'
  context.fillText('تقرير الأرباح', 1120, 90)

  context.fillStyle = '#64748b'
  context.font = '24px Tahoma'
  context.fillText(`تاريخ الإنشاء: ${formatPdfTimestamp()}`, 1120, 135)
  getFilterSummaryLines(filters).forEach((line, index) => {
    context.fillText(line, 1120, 175 + index * 28)
  })

  const summaryCardWidth = 500
  const summaryCardHeight = 110
  const summaryGap = 32
  const summaryStartX = 620
  const summaryStartY = 320

  summaryCards.forEach((card, index) => {
    const column = index % 2
    const row = Math.floor(index / 2)
    const x = summaryStartX - column * (summaryCardWidth + summaryGap)
    const y = summaryStartY + row * (summaryCardHeight + summaryGap)

    context.fillStyle = '#f8fbff'
    context.strokeStyle = '#dbe4f0'
    context.lineWidth = 2
    context.beginPath()
    context.roundRect(x, y, summaryCardWidth, summaryCardHeight, 18)
    context.fill()
    context.stroke()

    context.fillStyle = '#475569'
    context.font = '24px Tahoma'
    context.fillText(card.title, x + summaryCardWidth - 28, y + 42)

    context.fillStyle = '#0f172a'
    context.font = '700 30px Tahoma'
    context.fillText(card.value, x + summaryCardWidth - 28, y + 82)
  })

  const tableX = 60
  const tableY = 630
  const rowHeight = 72
  const headerHeight = 72
  const totalWidth = pdfColumnWidths.reduce((sum, width) => sum + width, 0)

  context.fillStyle = '#eff6ff'
  context.fillRect(tableX, tableY, totalWidth, headerHeight)

  context.strokeStyle = '#dbe4f0'
  context.lineWidth = 2
  context.strokeRect(tableX, tableY, totalWidth, headerHeight + reportTransactions.length * rowHeight)

  let currentX = tableX + totalWidth
  context.fillStyle = '#0f172a'
  context.font = '700 22px Tahoma'

  csvHeaders.forEach((header, index) => {
    const width = pdfColumnWidths[index]
    currentX -= width
    context.strokeRect(currentX, tableY, width, headerHeight)
    context.fillText(header, currentX + width - 16, tableY + 44)
  })

  reportTransactions.forEach((transaction, rowIndex) => {
    const rowY = tableY + headerHeight + rowIndex * rowHeight
    const isEvenRow = rowIndex % 2 === 0

    context.fillStyle = isEvenRow ? '#ffffff' : '#f8fafc'
    context.fillRect(tableX, rowY, totalWidth, rowHeight)

    const values = [
      transaction.date,
      transaction.propertyName,
      transaction.propertyType,
      transaction.paymentMethod,
      transaction.status,
      transaction.amount,
    ]

    let cellX = tableX + totalWidth
    values.forEach((value, columnIndex) => {
      const width = pdfColumnWidths[columnIndex]
      cellX -= width
      context.strokeRect(cellX, rowY, width, rowHeight)
      context.fillStyle = '#1e293b'
      context.font = '21px Tahoma'
      const clippedValue = truncateText(context, value, width - 32)
      context.fillText(clippedValue, cellX + width - 16, rowY + 44)
    })
  })

  return canvas
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
  const propertyOptions = [
    { value: allOptionValue, label: 'جميع العقارات' },
    ...Array.from(new Set(transactions.map((transaction) => transaction.propertyName))).map((propertyName) => ({
      value: propertyName,
      label: propertyName,
    })),
  ]
  const monthOptions = [
    { value: allOptionValue, label: 'كل الشهور' },
    ...allMonths.map((month) => ({
      value: month,
      label: month,
    })),
  ]
  const paymentOptions = [
    { value: allOptionValue, label: 'جميع وسائل الدفع' },
    ...Array.from(new Set(transactions.map((transaction) => transaction.paymentMethod))).map((paymentMethod) => ({
      value: paymentMethod,
      label: paymentMethod,
    })),
  ]
  const statusOptions = [
    { value: allOptionValue, label: 'جميع الحالات' },
    ...Array.from(new Set(transactions.map((transaction) => transaction.status))).map((status) => ({
      value: status,
      label: status,
    })),
  ]

  const [selectedProperty, setSelectedProperty] = useState(allOptionValue)
  const [selectedMonth, setSelectedMonth] = useState(allOptionValue)
  const [selectedPayment, setSelectedPayment] = useState(allOptionValue)
  const [selectedStatus, setSelectedStatus] = useState(allOptionValue)

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesProperty = selectedProperty === allOptionValue || transaction.propertyName === selectedProperty
    const matchesMonth = selectedMonth === allOptionValue || getTransactionMonthLabel(transaction.date) === selectedMonth
    const matchesPayment = selectedPayment === allOptionValue || transaction.paymentMethod === selectedPayment
    const matchesStatus = selectedStatus === allOptionValue || transaction.status === selectedStatus

    return matchesProperty && matchesMonth && matchesPayment && matchesStatus
  })

  const selectedFilters = {
    propertyLabel: propertyOptions.find((option) => option.value === selectedProperty)?.label ?? 'جميع العقارات',
    monthLabel: monthOptions.find((option) => option.value === selectedMonth)?.label ?? 'كل الشهور',
    paymentLabel: paymentOptions.find((option) => option.value === selectedPayment)?.label ?? 'جميع وسائل الدفع',
    statusLabel: statusOptions.find((option) => option.value === selectedStatus)?.label ?? 'جميع الحالات',
  }

  const handleExportCsv = () => {
    const csvContent = buildCsvContent(filteredTransactions)
    downloadFile(csvContent, createFileName('csv'), 'text/csv;charset=utf-8;')
  }

  const handleExportPdf = () => {
    const canvas = renderProfitsReportToCanvas(filteredTransactions, selectedFilters)
    const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.95)
    const jpegBytes = dataUrlToUint8Array(jpegDataUrl)
    const pdfBlob = buildPdfFromJpegBytes(jpegBytes, canvas.width, canvas.height)

    downloadFile(pdfBlob, createFileName('pdf'), 'application/pdf')
  }

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
              <button
                type="button"
                className="profits-export-button profits-export-button-pdf"
                onClick={handleExportPdf}
              >
                <span>PDF</span>
                <Download size={22} />
              </button>
              <button
                type="button"
                className="profits-export-button profits-export-button-csv"
                onClick={handleExportCsv}
              >
                <span>CSV</span>
                <Download size={22} />
              </button>
            </div>
          </div>

          <div className="profits-filters-row">
            <label className="profits-filter-chip">
              <div className="profits-filter-control">
                <select value={selectedProperty} onChange={(event) => setSelectedProperty(event.target.value)}>
                  {propertyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={20} />
              </div>
            </label>
            <label className="profits-filter-chip">
              <div className="profits-filter-control">
                <select value={selectedMonth} onChange={(event) => setSelectedMonth(event.target.value)}>
                  {monthOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={20} />
              </div>
            </label>
            <label className="profits-filter-chip">
              <div className="profits-filter-control">
                <select value={selectedPayment} onChange={(event) => setSelectedPayment(event.target.value)}>
                  {paymentOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={20} />
              </div>
            </label>
            <label className="profits-filter-chip">
              <div className="profits-filter-control">
                <select value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value)}>
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={20} />
              </div>
            </label>
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
                {filteredTransactions.map((transaction) => (
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
                {filteredTransactions.length === 0 && (
                  <tr>
                    <td colSpan="6" className="profits-table-empty">
                      لا توجد معاملات مطابقة للفلاتر المختارة.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
    </section>
  )
}

export default ProfitsPage
