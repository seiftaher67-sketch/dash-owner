import React from 'react'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Pencil,
  Plus,
  Search,
  SlidersHorizontal,
  Trash2,
} from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'شقة سكنية',
    location: 'التجمع الخامس - القاهرة الجديدة',
    price: '2,300,000 ريال',
    image: '/image/2.jpg',
    status: 'متاح',
    updatedAt: '15 مايو - 01:55 مساءً',
    relativeTime: 'منذ 16 يوماً',
    viewers: ['أ', 'ف', 'م', 'س', '+2'],
  },
  {
    id: 2,
    title: 'غرفة فندقية',
    location: 'فندق رويال بلازا - التجمع الخامس، القاهرة الجديدة',
    price: '1,200 ريال / الليلة',
    image: '/image/1.jpg',
    status: 'قيد الانتظار',
    updatedAt: '12 مايو - 10:20 صباحاً',
    relativeTime: 'منذ 13 يوماً',
    viewers: ['أ', 'ف', 'م', 'س', '+2'],
  },
  {
    id: 3,
    title: 'فيلا فاخرة',
    location: 'التجمع الخامس - القاهرة الجديدة',
    price: '2,300,000 ريال',
    image: '/image/2.jpg',
    status: 'محجوز',
    updatedAt: '09 مايو - 09:10 مساءً',
    relativeTime: 'منذ 20 يوماً',
    viewers: ['أ', 'ف', 'م', 'س', '+2'],
  },
  {
    id: 4,
    title: 'شقة سكنية',
    location: 'التجمع الخامس - القاهرة الجديدة',
    price: '2,300,000 ريال',
    image: '/image/2.jpg',
    status: 'متاح',
    updatedAt: '10 مايو - 03:40 مساءً',
    relativeTime: 'منذ 19 يوماً',
    viewers: ['أ', 'ف', 'م', 'س', '+2'],
  },
  {
    id: 5,
    title: 'شاليه',
    location: 'مراسي - الساحل الشمالي',
    price: '6,200,000 ريال',
    image: '/image/1.jpg',
    status: 'قيد الانتظار',
    updatedAt: '08 مايو - 11:15 صباحاً',
    relativeTime: 'منذ 21 يوماً',
    viewers: ['أ', 'ف', 'م', 'س', '+2'],
  },
]

const statusClassName = {
  متاح: 'status-badge status-confirmed',
  'قيد الانتظار': 'status-badge status-pending',
  محجوز: 'status-badge status-cancelled',
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

function PropertiesPage() {
  return (
    <section className="properties-page">
        <header className="properties-page-header">
          <div className="properties-page-title">
            <h1>إدارة العقارات</h1>
            <div className="properties-breadcrumb">
              <span>الرئيسية</span>
              <ChevronLeft size={18} />
              <strong>إدارة العقارات</strong>
            </div>
          </div>

          <button type="button" className="properties-add-button">
            <Plus size={30} />
            <span>أضف عقار جديد</span>
          </button>
        </header>

        <section className="properties-toolbar">
          <div className="properties-search">
            <Search size={28} />
            <input type="text" placeholder="ابحث عن عقارات" />
          </div>

          <button type="button" className="properties-filter-chip properties-select-chip">
            <ChevronDown size={24} />
            <span>نوع العقار</span>
          </button>

          <button type="button" className="properties-filter-chip properties-select-chip">
            <ChevronDown size={24} />
            <span>ترتيب حسب</span>
          </button>

          <button type="button" className="properties-filter-chip properties-advanced-chip">
            <SlidersHorizontal size={24} />
            <span>متقدم</span>
          </button>
        </section>

        <section className="properties-table-panel">
          <div className="properties-table-head">
            <div className="properties-table-cell checkbox-cell">
              <span className="fake-checkbox" />
            </div>
            <div className="properties-table-cell property-cell">العقار</div>
            <div className="properties-table-cell viewers-cell">المشاهدين</div>
            <div className="properties-table-cell status-cell">الحالة</div>
            <div className="properties-table-cell updated-cell">آخر تحديث</div>
            <div className="properties-table-cell actions-cell">الإجراءات</div>
          </div>

          <div className="properties-table-body">
            {properties.map((property) => (
              <article key={property.id} className="properties-row">
                <div className="properties-table-cell checkbox-cell">
                  <span className="fake-checkbox" />
                </div>

                <div className="properties-table-cell property-cell property-summary">
                  <img src={property.image} alt={property.title} className="property-thumb" />
                  <div className="property-copy">
                    <strong>{property.title}</strong>
                    <span>{property.location}</span>
                    <em>{property.price}</em>
                  </div>
                </div>

                <div className="properties-table-cell viewers-cell">
                  <ViewersStack viewers={property.viewers} />
                </div>

                <div className="properties-table-cell status-cell">
                  <span className={statusClassName[property.status]}>{property.status}</span>
                </div>

                <div className="properties-table-cell updated-cell">
                  <div className="property-updated">
                    <strong>{property.updatedAt}</strong>
                    <span>{property.relativeTime}</span>
                  </div>
                </div>

                <div className="properties-table-cell actions-cell">
                  <div className="property-actions">
                    <button type="button" className="action-icon delete">
                      <Trash2 size={28} />
                    </button>
                    <button type="button" className="action-icon edit">
                      <Pencil size={28} />
                    </button>
                    <button type="button" className="action-icon view">
                      <Eye size={28} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <footer className="properties-pagination">
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

export default PropertiesPage
