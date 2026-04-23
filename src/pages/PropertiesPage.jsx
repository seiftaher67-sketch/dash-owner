import React, { useEffect, useRef, useState } from 'react'
import {
  Bath,
  BedDouble,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Eye,
  Home,
  MapPin,
  Pencil,
  Play,
  Plus,
  Search,
  SlidersHorizontal,
  Check,
  Trash2,
  Upload,
  UtensilsCrossed,
  Waves,
  Wifi,
  X,
} from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'شقة سكنية',
    location: 'التجمع الخامس - القاهرة الجديدة',
    price: '2,300,000 ريال',
    image: '/image/2.jpg',
    status: 'متاح',
    selected: true,
    updatedAt: '15 مايو - 01:55 مساءً',
    relativeTime: 'منذ 16 يوماً',
    viewers: ['/image/1.jpg', '/image/2.jpg', '/image/1.jpg', '/image/2.jpg', '/image/1.jpg'],
  },
  {
    id: 2,
    title: 'غرفة فندقية',
    location: 'فندق رويال بلازا - التجمع الخامس، القاهرة الجديدة',
    price: '1,200 ريال / الليلة',
    image: '/image/1.jpg',
    status: 'قيد الانتظار',
    selected: false,
    updatedAt: '12 مايو - 10:20 صباحاً',
    relativeTime: 'منذ 13 يوماً',
    viewers: ['/image/2.jpg', '/image/1.jpg', '/image/2.jpg', '/image/1.jpg', '/image/2.jpg'],
  },
  {
    id: 3,
    title: 'فيلا فاخرة',
    location: 'التجمع الخامس - القاهرة الجديدة',
    price: '2,300,000 ريال',
    image: '/image/2.jpg',
    status: 'محجوز',
    selected: false,
    updatedAt: '09 مايو - 09:10 مساءً',
    relativeTime: 'منذ 20 يوماً',
    viewers: ['/image/1.jpg', '/image/2.jpg', '/image/1.jpg', '/image/2.jpg', '/image/1.jpg'],
  },
  {
    id: 4,
    title: 'شقة سكنية',
    location: 'التجمع الخامس - القاهرة الجديدة',
    price: '2,300,000 ريال',
    image: '/image/2.jpg',
    status: 'متاح',
    selected: false,
    updatedAt: '10 مايو - 03:40 مساءً',
    relativeTime: 'منذ 19 يوماً',
    viewers: ['/image/2.jpg', '/image/1.jpg', '/image/2.jpg', '/image/1.jpg', '/image/2.jpg'],
  },
  {
    id: 5,
    title: 'شاليه',
    location: 'مراسي - الساحل الشمالي',
    price: '6,200,000 ريال',
    image: '/image/1.jpg',
    status: 'قيد الانتظار',
    selected: false,
    updatedAt: '08 مايو - 11:15 صباحاً',
    relativeTime: 'منذ 21 يوماً',
    viewers: ['/image/1.jpg', '/image/2.jpg', '/image/1.jpg', '/image/2.jpg', '/image/1.jpg'],
  },
]

const statusClassName = {
  متاح: 'status-badge status-confirmed',
  'قيد الانتظار': 'status-badge status-pending',
  محجوز: 'status-badge status-cancelled',
}

const propertyTypeOptions = ['الجميع', 'شقه', 'فيلا', 'غرف فندقية', 'شاليهات', 'منتجعات فندقيه', 'كمبوند', 'استوديو']
const sortOptions = ['الأحدث أولاً', 'الأقدم أولاً', 'أعلى سعر', 'أقل سعر', 'الأكثر مشاهدة', 'الأعلى تقييماً']
const egyptianCities = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'المنصورة',
  'طنطا',
  'الزقازيق',
  'المنيا',
  'أسيوط',
  'سوهاج',
  'قنا',
  'الأقصر',
  'أسوان',
  'الإسماعيلية',
  'بورسعيد',
  'السويس',
  'دمياط',
  'الغردقة',
  'شرم الشيخ',
  'العلمين',
  'مرسى مطروح',
]

const propertyCategoryCards = [
  { label: 'شقة', image: '/image/4 (1).jpg' },
  { label: 'فيلا', image: '/image/4 (2).jpg' },
  { label: 'غرفة فندقية', image: '/image/4 (3).jpg' },
  { label: 'شاليه', image: '/image/4 (4).jpg' },
  { label: 'استوديو', image: '/image/4 (5).jpg' },
  { label: 'كمبوند', image: '/image/1.jpg' },
]

const propertyStatusOptions = ['متاح', 'محجوز', 'قيد التأكيد', 'متاح قريباً']
const rentalTypeOptions = ['يومي', 'أسبوعي', 'شهري', 'سنوي']
const kitchenAmenities = ['ثلاجة', 'فريزر', 'بوتاجاز', 'آلة قهوة', 'فرن', 'أواني الطبخ', 'غلاية', 'مايكروويف']
const bathroomAmenities = ['غسالة', 'بانيو', 'دش حديث', 'مراحيض', 'سخان مياه', 'منشفة', 'مجفف شعر']
const mainPropertyAmenities = [
  { label: 'غرفة نوم', icon: BedDouble },
  { label: 'مجلس', icon: Home },
  { label: 'مسبح', icon: Waves },
  { label: 'مطبخ', icon: UtensilsCrossed },
  { label: 'دورة مياه', icon: Bath },
]
const extraAmenities = [
  { label: 'إنترنت عالي السرعة', icon: Wifi },
  { label: 'موقف سيارات', icon: Home },
  { label: 'تكييف مركزي', icon: Waves },
  { label: 'حديقة', icon: Home },
  { label: 'هاتف', icon: Home },
  { label: 'نظام أمان وكاميرات', icon: Home },
]
const propertyFeatures = [
  'موقع مميز في قلب التجمع الخامس بالقرب',
  'تصميم عصري بلمسات فاخرة',
  'سهولة الوصول إلى الطرق الرئيسية والمواصلات',
  'قرب المدارس الدولية والمطاعم والمقاهي',
  'إطلالة مميزة على حديقة داخلية',
  'منطقة جلوس خارجية مثالية للعائلات',
  'نظام دخول ذكي (Smart Lock)',
]

const propertyGalleryImages = [
  '/image/4 (1).jpg',
  '/image/4 (2).jpg',
  '/image/4 (3).jpg',
  '/image/4 (4).jpg',
  '/image/4 (5).jpg',
  '/image/1.jpg',
  '/image/2.jpg',
  '/image/4 (2).jpg',
]

const PROPERTY_MEDIA_THUMBS_LIMIT = 4

const MIN_PRICE_LIMIT = 1500
const MAX_PRICE_LIMIT = 1700000

function formatPrice(value) {
  return `${Number(value).toLocaleString('en-US')} ريال`
}

function ViewersStack({ viewers }) {
  return (
    <div className="property-viewers-stack">
      {viewers.map((viewer, index) => (
        <span key={`${viewer}-${index}`} className="property-viewer-badge">
          <img src={viewer} alt="" className="property-viewer-image" />
        </span>
      ))}
    </div>
  )
}

function PropertiesPage() {
  const [openMenu, setOpenMenu] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false)
  const [isAddPropertySuccessOpen, setIsAddPropertySuccessOpen] = useState(false)
  const [addPropertyStep, setAddPropertyStep] = useState(1)
  const [selectedType, setSelectedType] = useState('نوع العقار')
  const [selectedSort, setSelectedSort] = useState('ترتيب حسب')
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [propertyToDelete, setPropertyToDelete] = useState(null)
  const [propertyToEdit, setPropertyToEdit] = useState(null)
  const [deleteConfirmed, setDeleteConfirmed] = useState(false)
  const [selectedMainAmenities, setSelectedMainAmenities] = useState(mainPropertyAmenities.map((item) => item.label))
  const [selectedExtraAmenities, setSelectedExtraAmenities] = useState(extraAmenities.slice(1).map((item) => item.label))
  const [featureItems, setFeatureItems] = useState(propertyFeatures)
  const [newFeature, setNewFeature] = useState('')
  const [locationPinned, setLocationPinned] = useState(false)
  const [addPropertyName, setAddPropertyName] = useState('')
  const [addPropertyDescription, setAddPropertyDescription] = useState('')
  const [addPropertyArea, setAddPropertyArea] = useState('')
  const [addPropertyReference, setAddPropertyReference] = useState('')
  const [addPropertyFloor, setAddPropertyFloor] = useState('')
  const [addPropertyBuildingNumber, setAddPropertyBuildingNumber] = useState('')
  const [addPropertyDetailedAddress, setAddPropertyDetailedAddress] = useState('')
  const [addPropertyCity, setAddPropertyCity] = useState('')
  const [addPropertyDailyPrice, setAddPropertyDailyPrice] = useState('')
  const [addPropertyMonthlyPrice, setAddPropertyMonthlyPrice] = useState('')
  const [addPropertyYearlyPrice, setAddPropertyYearlyPrice] = useState('')
  const [addSelectedFeatures, setAddSelectedFeatures] = useState([])
  const [addPropertyFurnishing, setAddPropertyFurnishing] = useState('مفروشة بالكامل')
  const [addPropertyImages, setAddPropertyImages] = useState([])
  const [addPropertyVideos, setAddPropertyVideos] = useState([])
  const [addBedroomsCount, setAddBedroomsCount] = useState(0)
  const [addKitchensCount, setAddKitchensCount] = useState(0)
  const [addBathroomsCount, setAddBathroomsCount] = useState(0)
  const [addSelectedPropertyCategory, setAddSelectedPropertyCategory] = useState(propertyCategoryCards[0].label)
  const [addSelectedPropertyStatus, setAddSelectedPropertyStatus] = useState(propertyStatusOptions[0])
  const [addSelectedRentalTypes, setAddSelectedRentalTypes] = useState(['سنوي'])
  const [addSelectedMainAmenities, setAddSelectedMainAmenities] = useState(mainPropertyAmenities.map((item) => item.label))
  const [addSelectedExtraAmenities, setAddSelectedExtraAmenities] = useState(extraAmenities.map((item) => item.label))
  const [addSelectedKitchenAmenities, setAddSelectedKitchenAmenities] = useState([])
  const [addSelectedBathroomAmenities, setAddSelectedBathroomAmenities] = useState([])
  const [addLocationPinned, setAddLocationPinned] = useState(false)
  const [selectedPropertyCategory, setSelectedPropertyCategory] = useState(propertyCategoryCards[0].label)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(propertyGalleryImages[0])
  const [selectedGalleryVideo, setSelectedGalleryVideo] = useState(propertyGalleryImages[0])
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState('المدينة')
  const [minPrice, setMinPrice] = useState(MIN_PRICE_LIMIT)
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE_LIMIT)
  const filtersRef = useRef(null)
  const addPropertyFileInputRef = useRef(null)
  const addPropertyVideoInputRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const hasOpenModal = isAddPropertyOpen || isAddPropertySuccessOpen || isAdvancedOpen || Boolean(propertyToDelete) || Boolean(propertyToEdit)
    if (!hasOpenModal) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsAddPropertyOpen(false)
        setIsAddPropertySuccessOpen(false)
        setIsAdvancedOpen(false)
        setIsCityMenuOpen(false)
        setPropertyToDelete(null)
        setPropertyToEdit(null)
        setDeleteConfirmed(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isAddPropertyOpen, isAddPropertySuccessOpen, isAdvancedOpen, propertyToDelete, propertyToEdit])

  const toggleMenu = (menuName) => {
    setOpenMenu((current) => (current === menuName ? null : menuName))
  }

  const handleTypeSelect = (option) => {
    setSelectedType(option)
    setOpenMenu(null)
  }

  const handleSortSelect = (option) => {
    setSelectedSort(option)
    setOpenMenu(null)
  }

  const resetAdvancedFilters = () => {
    setSelectedCity('المدينة')
    setMinPrice(MIN_PRICE_LIMIT)
    setMaxPrice(MAX_PRICE_LIMIT)
    setIsCityMenuOpen(false)
    setIsAdvancedOpen(false)
  }

  const applyAdvancedFilters = () => {
    setIsCityMenuOpen(false)
    setIsAdvancedOpen(false)
  }

  const closeDeleteModal = () => {
    setPropertyToDelete(null)
    setDeleteConfirmed(false)
  }

  const closeEditModal = () => {
    setPropertyToEdit(null)
  }

  const closeAddPropertyModal = () => {
    addPropertyImages.forEach((image) => URL.revokeObjectURL(image.url))
    addPropertyVideos.forEach((video) => URL.revokeObjectURL(video.url))
    setAddPropertyImages([])
    setAddPropertyVideos([])
    setAddPropertyBuildingNumber('')
    setAddPropertyDetailedAddress('')
    setAddPropertyCity('')
    setAddPropertyDailyPrice('')
    setAddPropertyMonthlyPrice('')
    setAddPropertyYearlyPrice('')
    setAddSelectedFeatures([])
    setAddLocationPinned(false)
    setAddPropertyStep(1)
    setIsAddPropertyOpen(false)
  }

  const closeAddPropertySuccessModal = () => {
    setIsAddPropertySuccessOpen(false)
  }

  const handleAddPropertySubmit = () => {
    closeAddPropertyModal()
    setIsAddPropertySuccessOpen(true)
  }

  const openAddPropertyFilePicker = () => {
    addPropertyFileInputRef.current?.click()
  }

  const handleAddPropertyImagesChange = (event) => {
    const files = Array.from(event.target.files ?? [])
    if (!files.length) {
      return
    }

    const nextImages = files.map((file) => ({
      id: `${file.name}-${file.lastModified}`,
      name: file.name,
      url: URL.createObjectURL(file),
    }))

    setAddPropertyImages((current) => [...current, ...nextImages].slice(0, 4))
    event.target.value = ''
  }

  const openAddPropertyVideoPicker = () => {
    addPropertyVideoInputRef.current?.click()
  }

  const handleAddPropertyVideosChange = (event) => {
    const files = Array.from(event.target.files ?? [])
    if (!files.length) {
      return
    }

    const nextVideos = files.map((file) => ({
      id: `${file.name}-${file.lastModified}`,
      name: file.name,
      url: URL.createObjectURL(file),
    }))

    setAddPropertyVideos((current) => [...current, ...nextVideos].slice(0, 4))
    event.target.value = ''
  }

  const toggleAddRentalType = (type) => {
    setAddSelectedRentalTypes((current) =>
      current.includes(type)
        ? current.filter((item) => item !== type)
        : [...current, type]
    )
  }

  const toggleAddMainAmenity = (label) => {
    setAddSelectedMainAmenities((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    )
  }

  const toggleAddExtraAmenity = (label) => {
    setAddSelectedExtraAmenities((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    )
  }

  const toggleAddKitchenAmenity = (label) => {
    setAddSelectedKitchenAmenities((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    )
  }

  const toggleAddBathroomAmenity = (label) => {
    setAddSelectedBathroomAmenities((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    )
  }

  const changeAddCounter = (setter, delta) => {
    setter((current) => Math.max(0, current + delta))
  }

  const toggleAddFeature = (feature) => {
    setAddSelectedFeatures((current) =>
      current.includes(feature)
        ? current.filter((item) => item !== feature)
        : [...current, feature]
    )
  }

  const isAddPropertyReady = addPropertyName.trim() && addPropertyDescription.trim() && addSelectedPropertyCategory

  const handleAddPropertyNext = () => {
    if (addPropertyStep === 1 && !isAddPropertyReady) {
      return
    }

    if (addPropertyStep === 8) {
      handleAddPropertySubmit()
      return
    }

    setAddPropertyStep((current) => Math.min(current + 1, 8))
  }

  const handleAddPropertyPrevious = () => {
    setAddPropertyStep((current) => Math.max(current - 1, 1))
  }

  const toggleMainAmenity = (label) => {
    setSelectedMainAmenities((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    )
  }

  const toggleExtraAmenity = (label) => {
    setSelectedExtraAmenities((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    )
  }

  const addFeatureItem = () => {
    const value = newFeature.trim()
    if (!value) {
      return
    }

    setFeatureItems((current) => [...current, value])
    setNewFeature('')
  }

  useEffect(() => {
    if (propertyToEdit) {
      setSelectedPropertyCategory(propertyCategoryCards[0].label)
      setSelectedGalleryImage(propertyGalleryImages[0])
      setSelectedGalleryVideo(propertyGalleryImages[0])
    }
  }, [propertyToEdit])

  const handleMinPriceChange = (event) => {
    const value = Number(event.target.value)
    setMinPrice(Math.min(value, maxPrice - 1000))
  }

  const handleMaxPriceChange = (event) => {
    const value = Number(event.target.value)
    setMaxPrice(Math.max(value, minPrice + 1000))
  }

  const priceRangeStyle = {
    right: `${((minPrice - MIN_PRICE_LIMIT) / (MAX_PRICE_LIMIT - MIN_PRICE_LIMIT)) * 100}%`,
    left: `${100 - ((maxPrice - MIN_PRICE_LIMIT) / (MAX_PRICE_LIMIT - MIN_PRICE_LIMIT)) * 100}%`,
  }

  return (
    <>
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

          <button
            type="button"
            className="properties-add-button"
            onClick={() => {
              setIsAddPropertyOpen(true)
              setIsCityMenuOpen(false)
            }}
          >
            <Plus size={30} />
            <span>أضف عقار جديد</span>
          </button>
        </header>

        <section className="properties-toolbar" ref={filtersRef}>
          <div className="properties-search">
            <Search size={28} />
            <input type="text" placeholder="ابحث عن عقارات" />
          </div>

          <div className={`properties-select-wrap ${openMenu === 'type' ? 'is-open' : ''}`}>
            <button
              type="button"
              className="properties-filter-chip properties-select-chip"
              onClick={() => toggleMenu('type')}
            >
              <ChevronDown size={24} />
              <span>{selectedType}</span>
            </button>

            {openMenu === 'type' && (
              <div className="properties-dropdown-menu">
                <div className="properties-dropdown-scroll">
                  {propertyTypeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`properties-dropdown-option ${selectedType === option ? 'is-selected' : ''}`}
                      onClick={() => handleTypeSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={`properties-select-wrap ${openMenu === 'sort' ? 'is-open' : ''}`}>
            <button
              type="button"
              className="properties-filter-chip properties-select-chip"
              onClick={() => toggleMenu('sort')}
            >
              <ChevronDown size={24} />
              <span>{selectedSort}</span>
            </button>

            {openMenu === 'sort' && (
              <div className="properties-dropdown-menu">
                <div className="properties-dropdown-scroll">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`properties-dropdown-option ${selectedSort === option ? 'is-selected' : ''}`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            className="properties-filter-chip properties-advanced-chip"
            onClick={() => {
              setIsAdvancedOpen(true)
              setIsCityMenuOpen(false)
            }}
          >
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
                  <span className={`fake-checkbox ${property.selected ? 'is-checked' : ''}`}>
                    {property.selected && <Check size={18} strokeWidth={3} />}
                  </span>
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
                    <button type="button" className="action-icon delete" onClick={() => setPropertyToDelete(property)}>
                      <Trash2 size={28} />
                    </button>
                    <button type="button" className="action-icon edit" onClick={() => setPropertyToEdit(property)}>
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
            {[1, 2, 3, 4].map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
            <button type="button" className="page-arrow">
              <ChevronLeft size={28} />
            </button>
          </footer>
        </section>
      </section>

      {isAddPropertyOpen && (
        <div className="properties-modal-overlay" onClick={closeAddPropertyModal}>
          <div className="property-add-modal" dir="rtl" onClick={(event) => event.stopPropagation()}>
            <div className="property-add-header">
              <button type="button" className="property-add-close" onClick={closeAddPropertyModal}>
                <X size={28} />
              </button>
              <h2>إضافة عقار جديد</h2>
              <button type="button" className="property-add-draft">
                حفظ كمسودة
              </button>
            </div>

            <div className="property-add-progress">
              <span
                className="property-add-progress-bar"
                style={{ '--property-add-progress': `${(addPropertyStep / 8) * 100}%` }}
              />
            </div>

            <div className="property-add-body">
              {addPropertyStep === 1 ? (
                <section className="property-add-section">
                  <h3>
                    معلومات العقار <span>*</span>
                  </h3>

                  <div className="property-add-form">
                    <label>
                      <span>اسم العقار</span>
                      <input
                        type="text"
                        value={addPropertyName}
                        onChange={(event) => setAddPropertyName(event.target.value)}
                        placeholder="مثال: شقة سكنية حديثة بالتجمع الخامس"
                      />
                    </label>

                    <label>
                      <span>وصف العقار (وصف تفصيلي)</span>
                      <textarea
                        rows="7"
                        value={addPropertyDescription}
                        onChange={(event) => setAddPropertyDescription(event.target.value)}
                        placeholder={`مثال:
شقة مفروشة بالكامل بتصميم عصري، قريبة من جميع الخدمات، مناسبة للعائلات والإقامات الطويلة.`}
                      />
                    </label>
                    <div className="property-add-classification">
                      <div className="property-add-subtitle">
                        <strong>تصنيف العقار</strong>
                        <span>حدد التصنيف العقار المناسب لك</span>
                      </div>

                      <div className="property-add-category-grid">
                        {propertyCategoryCards.map((item) => (
                          <button
                            key={`add-${item.label}`}
                            type="button"
                            className={`property-category-card ${addSelectedPropertyCategory === item.label ? 'is-active' : ''}`}
                            onClick={() => setAddSelectedPropertyCategory(item.label)}
                          >
                            <img src={item.image} alt={item.label} />
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="property-add-options-grid">
                      <div className="property-add-option-block">
                        <div className="property-add-subtitle">
                          <strong>حالة العقار (اختياري)</strong>
                        </div>

                        <div className="property-add-choice-list">
                          {propertyStatusOptions.slice(0, 3).map((status) => (
                            <label key={`add-status-${status}`} className="property-add-choice-item">
                              <input
                                type="radio"
                                name="add-property-status"
                                checked={addSelectedPropertyStatus === status}
                                onChange={() => setAddSelectedPropertyStatus(status)}
                              />
                              <span>{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="property-add-option-block">
                        <div className="property-add-subtitle">
                          <strong>نوع الإيجار</strong>
                        </div>

                        <div className="property-add-choice-list">
                          {rentalTypeOptions
                            .filter((type) => type !== 'أسبوعي')
                            .map((type) => (
                              <label key={`add-rental-${type}`} className="property-add-choice-item">
                                <input
                                  type="checkbox"
                                  checked={addSelectedRentalTypes.includes(type)}
                                  onChange={() => toggleAddRentalType(type)}
                                />
                                <span>{type}</span>
                              </label>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ) : addPropertyStep === 2 ? (
                <section className="property-add-section">
                  <h3>
                    المواصفات الأساسية <span>*</span>
                  </h3>

                  <div className="property-add-form property-add-form--specs">
                    <div className="property-add-area-row">
                      <label className="property-add-area-field">
                        <span>مساحة عقارك</span>
                        <div className="property-add-area-input-wrap">
                          <input
                            type="text"
                            value={addPropertyArea}
                            onChange={(event) => setAddPropertyArea(event.target.value)}
                          />
                          <small>متر مربع</small>
                        </div>
                      </label>
                    </div>

                    <label>
                      <span>رقم المرجع</span>
                      <input
                        type="text"
                        value={addPropertyReference}
                        onChange={(event) => setAddPropertyReference(event.target.value)}
                        placeholder="ادخل رقم المرجع ..."
                      />
                    </label>

                    <label>
                      <span>الطابق</span>
                      <input
                        type="text"
                        value={addPropertyFloor}
                        onChange={(event) => setAddPropertyFloor(event.target.value)}
                        placeholder="ادخل رقم المرجع ..."
                      />
                    </label>

                    <div className="property-add-option-block">
                      <div className="property-add-subtitle">
                        <strong>المفروشات</strong>
                      </div>

                      <div className="property-add-choice-list property-add-choice-list--inline">
                        {['مفروشة بالكامل', 'غير مفروش'].map((option) => (
                          <label key={option} className="property-add-choice-item">
                            <input
                              type="radio"
                              name="add-property-furnishing"
                              checked={addPropertyFurnishing === option}
                              onChange={() => setAddPropertyFurnishing(option)}
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="property-add-option-block">
                      <div className="property-add-subtitle">
                        <strong>مرافق عقارك الرئيسية</strong>
                        <span>اختر كل المرافق الموجودة في عقارك</span>
                      </div>

                      <div className="property-add-amenities-grid">
                        {mainPropertyAmenities.map((item) => {
                          const Icon = item.icon

                          return (
                            <button
                              key={`add-main-${item.label}`}
                              type="button"
                              className={`property-add-amenity-card ${addSelectedMainAmenities.includes(item.label) ? 'is-active' : ''}`}
                              onClick={() => toggleAddMainAmenity(item.label)}
                            >
                              <Icon size={34} />
                              <span>{item.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="property-add-option-block">
                      <div className="property-add-subtitle">
                        <strong>مرافق عقارك</strong>
                        <span>اختر كل المرافق الموجودة في عقارك</span>
                      </div>

                      <div className="property-add-amenities-grid property-add-amenities-grid--extra">
                        {extraAmenities.map((item) => {
                          const Icon = item.icon

                          return (
                            <button
                              key={`add-extra-${item.label}`}
                              type="button"
                              className={`property-add-amenity-card ${addSelectedExtraAmenities.includes(item.label) ? 'is-active' : ''}`}
                              onClick={() => toggleAddExtraAmenity(item.label)}
                            >
                              <Icon size={34} />
                              <span>{item.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              ) : addPropertyStep === 3 ? (
                <section className="property-add-section">
                  <h3>
                    صور العقار <span>*</span>
                  </h3>

                  <input
                    ref={addPropertyFileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    multiple
                    className="property-add-file-input"
                    onChange={handleAddPropertyImagesChange}
                  />

                  <div className="property-add-upload-panel">
                    <button type="button" className="property-add-upload-box" onClick={openAddPropertyFilePicker}>
                      <div className="property-add-upload-icon">
                        <Upload size={42} />
                      </div>
                      <h4>اسحب والصق صور العقار هنا</h4>
                      <p>أو اضغط على "تصفح الملفات"</p>
                      <span className="property-add-upload-button">
                        <span>اختر صورة</span>
                      </span>
                      <small>يفضل رفع صور عالية الدقة بصيغة JPG / PNG فقط.</small>
                    </button>

                    <div className="property-add-upload-slots">
                      {Array.from({ length: 4 }).map((_, index) => {
                        const image = addPropertyImages[index]

                        return (
                          <button
                            key={`image-slot-${index}`}
                            type="button"
                            className={`property-add-upload-slot ${image ? 'has-image' : ''}`}
                            onClick={openAddPropertyFilePicker}
                          >
                            {image ? <img src={image.url} alt={image.name} /> : <span>{index === 0 ? '25+' : '+'}</span>}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </section>
              ) : addPropertyStep === 4 ? (
                <section className="property-add-section">
                  <h3>
                    فيديو العقار <span>*</span>
                  </h3>

                  <input
                    ref={addPropertyVideoInputRef}
                    type="file"
                    accept="video/mp4,video/quicktime,video/mov"
                    multiple
                    className="property-add-file-input"
                    onChange={handleAddPropertyVideosChange}
                  />

                  <div className="property-add-upload-panel">
                    <button type="button" className="property-add-upload-box" onClick={openAddPropertyVideoPicker}>
                      <div className="property-add-upload-icon">
                        <Upload size={42} />
                      </div>
                      <h4>اسحب والصق فيديو المنتج هنا</h4>
                      <p>أو اضغط على "تصفح الملفات"</p>
                      <span className="property-add-upload-button">
                        <span>اختر فيديو</span>
                      </span>
                      <small>يفضل رفع فيديو بدقة عالية، الصيغ المسموح بها MP4 / MOV فقط.</small>
                    </button>

                    <div className="property-add-upload-slots">
                      {Array.from({ length: 4 }).map((_, index) => {
                        const video = addPropertyVideos[index]

                        return (
                          <button
                            key={`video-slot-${index}`}
                            type="button"
                            className={`property-add-upload-slot ${video ? 'has-video' : ''}`}
                            onClick={openAddPropertyVideoPicker}
                          >
                            {video ? <span className="property-add-upload-slot-label">{video.name}</span> : <span>{index === 0 ? '2+' : '+'}</span>}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </section>
              ) : addPropertyStep === 5 ? (
                <section className="property-add-section">
                  <h3>
                    تفاصيل مرافق العقار <span>*</span>
                  </h3>

                  <div className="property-add-facilities-flow">
                    <div className="property-add-counter-row">
                      <span className="property-add-counter-label">عدد غرف النوم</span>
                      <div className="property-add-counter-box">
                        <button type="button" onClick={() => changeAddCounter(setAddBedroomsCount, 1)}>+</button>
                        <strong>{addBedroomsCount}</strong>
                        <button type="button" onClick={() => changeAddCounter(setAddBedroomsCount, -1)}>-</button>
                      </div>
                    </div>

                    <div className="property-add-counter-row">
                      <span className="property-add-counter-label">عدد المطبخ</span>
                      <div className="property-add-counter-box">
                        <button type="button" onClick={() => changeAddCounter(setAddKitchensCount, 1)}>+</button>
                        <strong>{addKitchensCount}</strong>
                        <button type="button" onClick={() => changeAddCounter(setAddKitchensCount, -1)}>-</button>
                      </div>
                    </div>

                    <div className="property-add-option-block">
                      <div className="property-add-subtitle">
                        <strong>مرافق المطبخ</strong>
                        <span>اختر كل المرافق الموجودة في المطبخ</span>
                      </div>

                      <div className="property-add-pill-grid">
                        {kitchenAmenities.map((item) => (
                          <button
                            key={`kitchen-${item}`}
                            type="button"
                            className={`property-add-pill ${addSelectedKitchenAmenities.includes(item) ? 'is-active' : ''}`}
                            onClick={() => toggleAddKitchenAmenity(item)}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="property-add-counter-row">
                      <span className="property-add-counter-label">عدد دورات المياه</span>
                      <div className="property-add-counter-box">
                        <button type="button" onClick={() => changeAddCounter(setAddBathroomsCount, 1)}>+</button>
                        <strong>{addBathroomsCount}</strong>
                        <button type="button" onClick={() => changeAddCounter(setAddBathroomsCount, -1)}>-</button>
                      </div>
                    </div>

                    <div className="property-add-option-block">
                      <div className="property-add-subtitle">
                        <strong>مرافق دورة المياه</strong>
                        <span>اختر كل المرافق الموجودة في دورة المياه</span>
                      </div>

                      <div className="property-add-pill-grid">
                        {bathroomAmenities.map((item) => (
                          <button
                            key={`bathroom-${item}`}
                            type="button"
                            className={`property-add-pill ${addSelectedBathroomAmenities.includes(item) ? 'is-active' : ''}`}
                            onClick={() => toggleAddBathroomAmenity(item)}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ) : addPropertyStep === 6 ? (
                <section className="property-add-section">
                  <h3>
                    عنوان العقار <span>*</span>
                  </h3>

                  <div className="property-add-form property-add-form--location">
                    <div className="property-add-address-card">
                      <div className="property-add-address-fields">
                        <label>
                          <span>رقم المبنى</span>
                          <input
                            type="text"
                            value={addPropertyBuildingNumber}
                            onChange={(event) => setAddPropertyBuildingNumber(event.target.value)}
                            placeholder="ادخل رقم المبنى ..."
                          />
                        </label>

                        <label>
                          <span>العنوان التفصيلي</span>
                          <input
                            type="text"
                            value={addPropertyDetailedAddress}
                            onChange={(event) => setAddPropertyDetailedAddress(event.target.value)}
                            placeholder="ادخل عنوان الشارع ..."
                          />
                        </label>

                        <label>
                      <span>المدينة</span>
                      <input
                        type="text"
                        value={addPropertyCity}
                        onChange={(event) => setAddPropertyCity(event.target.value)}
                        placeholder="مثال: القاهرة - التجمع الخامس"
                      />
                        </label>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`property-add-map-card ${addLocationPinned ? 'is-pinned' : ''}`}
                      onClick={() => setAddLocationPinned((current) => !current)}
                    >
                      <div className="property-add-map-overlay">
                        <span className="property-add-map-pin-button">
                          <MapPin size={18} />
                          تحديد موقعي تلقائيًا
                        </span>
                      </div>
                      <div className="property-add-map-marker">
                        <MapPin size={30} fill="currentColor" />
                      </div>
                      <div className="property-add-map-google">Google</div>
                    </button>
                  </div>
                </section>
              ) : addPropertyStep === 7 ? (
                <section className="property-add-section">
                  <h3>
                    الأسعار <span>*</span>
                  </h3>

                  <div className="property-add-form property-add-form--pricing">
                    <label>
                      <span>السعر اليومي</span>
                      <input
                        type="text"
                        value={addPropertyDailyPrice}
                        onChange={(event) => setAddPropertyDailyPrice(event.target.value)}
                        placeholder="مثال: 300 ريال / يوم"
                      />
                    </label>

                    <label>
                      <span>السعر الشهري</span>
                      <input
                        type="text"
                        value={addPropertyMonthlyPrice}
                        onChange={(event) => setAddPropertyMonthlyPrice(event.target.value)}
                        placeholder="مثال: 8000 ريال / شهر"
                      />
                    </label>

                    <label>
                      <span>السعر السنوي</span>
                      <input
                        type="text"
                        value={addPropertyYearlyPrice}
                        onChange={(event) => setAddPropertyYearlyPrice(event.target.value)}
                        placeholder="مثال: 90,000 ريال / سنة"
                      />
                    </label>
                  </div>
                </section>
              ) : (
                <section className="property-add-section">
                  <h3>
                    مميزات العقار <small>(اختياري)</small>
                  </h3>

                  <div className="property-add-feature-list">
                    {propertyFeatures.map((feature) => (
                      <label key={feature} className="property-add-feature-item">
                        <input
                          type="checkbox"
                          checked={addSelectedFeatures.includes(feature)}
                          onChange={() => toggleAddFeature(feature)}
                        />
                        <span>{feature}</span>
                      </label>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="property-add-actions">
              <button type="button" className="property-add-prev" onClick={handleAddPropertyPrevious}>
                السابق
              </button>
              <button
                type="button"
                className={`property-add-next ${isAddPropertyReady || addPropertyStep > 1 ? 'is-ready' : ''}`}
                data-label={addPropertyStep === 8 ? 'إضافة العقار' : 'التالي'}
                onClick={handleAddPropertyNext}
              >
                التالي
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddPropertySuccessOpen && (
        <div className="properties-modal-overlay" onClick={closeAddPropertySuccessModal}>
          <div className="property-add-success-modal" dir="rtl" onClick={(event) => event.stopPropagation()}>
            <div className="property-add-success-icon-wrap">
              <div className="property-add-success-icon">
                <CheckCircle2 size={72} strokeWidth={2.8} />
              </div>
            </div>

            <h2>تم إضافة العقار بنجاح!</h2>
            <p>
              نشكرك على إضافة عقارك، سيتم مراجعة البيانات للتأكد من صحتها خلال وقت قصير.
            </p>
            <strong>سوف تصلك إشعارات فور الموافقة عليه.</strong>

            <div className="property-add-success-actions">
              <button type="button" className="property-add-success-secondary" onClick={closeAddPropertySuccessModal}>
                الرجوع للصفحة الرئيسية
              </button>
              <button type="button" className="property-add-success-primary" onClick={closeAddPropertySuccessModal}>
                عرض حالة العقار
              </button>
            </div>
          </div>
        </div>
      )}

      {isAdvancedOpen && (
        <div
          className="properties-filter-modal-overlay"
          onClick={() => {
            setIsAdvancedOpen(false)
            setIsCityMenuOpen(false)
          }}
        >
          <div
            className="properties-filter-modal"
            dir="rtl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="properties-filter-modal-header">
              <button
                type="button"
                className="properties-filter-close"
                onClick={() => {
                  setIsAdvancedOpen(false)
                  setIsCityMenuOpen(false)
                }}
              >
                <X size={24} />
              </button>
              <h2>التصفية</h2>
              <span className="properties-filter-header-spacer" />
            </div>

            <div className="properties-filter-modal-body">
              <div className="properties-filter-field">
                <label>المدينة</label>
                <div className={`properties-select-wrap properties-modal-select ${isCityMenuOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="properties-filter-chip properties-select-chip"
                    onClick={() => setIsCityMenuOpen((current) => !current)}
                  >
                    <ChevronDown size={24} />
                    <span>{selectedCity}</span>
                  </button>

                  {isCityMenuOpen && (
                    <div className="properties-dropdown-menu">
                      <div className="properties-dropdown-scroll">
                        {egyptianCities.map((city) => (
                          <button
                            key={city}
                            type="button"
                            className={`properties-dropdown-option ${selectedCity === city ? 'is-selected' : ''}`}
                            onClick={() => {
                              setSelectedCity(city)
                              setIsCityMenuOpen(false)
                            }}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="properties-filter-field">
                <label>نطاق السعر</label>

                <div className="properties-price-slider">
                  <div className="properties-price-slider-track" />
                  <div className="properties-price-slider-range" style={priceRangeStyle} />

                  <input
                    type="range"
                    min={MIN_PRICE_LIMIT}
                    max={MAX_PRICE_LIMIT}
                    step={500}
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="properties-price-range-input"
                  />
                  <input
                    type="range"
                    min={MIN_PRICE_LIMIT}
                    max={MAX_PRICE_LIMIT}
                    step={500}
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="properties-price-range-input"
                  />
                </div>

                <div className="properties-price-labels">
                  <span>سعر الحد الأدنى</span>
                  <span>سعر الحد الأقصى</span>
                </div>

                <div className="properties-price-values">
                  <div className="properties-price-box">{formatPrice(minPrice)}</div>
                  <div className="properties-price-box">{formatPrice(maxPrice)}</div>
                </div>
              </div>
            </div>

            <div className="properties-filter-modal-actions">
              <button type="button" className="properties-filter-apply" onClick={applyAdvancedFilters}>
                تطبيق
              </button>
              <button type="button" className="properties-filter-reset" onClick={resetAdvancedFilters}>
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {propertyToDelete && (
        <div className="properties-modal-overlay" onClick={closeDeleteModal}>
          <div className="property-delete-modal" dir="rtl" onClick={(event) => event.stopPropagation()}>
            <img src={propertyToDelete.image} alt={propertyToDelete.title} className="property-delete-modal-image" />
            <h2>هل أنت متأكد من حذف هذا العقار؟</h2>
            <p>
              سيتم حذف جميع بيانات العقار بشكل نهائي، ولن تتمكن من استرجاعها بعد الحذف.
              <br />
              هل ترغبين بالمتابعة؟
            </p>

            <label className="property-delete-confirm">
              <input
                type="checkbox"
                checked={deleteConfirmed}
                onChange={(event) => setDeleteConfirmed(event.target.checked)}
              />
              <span>نعم، أوافق على حذف العقار نهائياً</span>
            </label>

            <div className="property-delete-actions">
              <button type="button" className="property-delete-cancel" onClick={closeDeleteModal}>
                إلغاء
              </button>
              <button
                type="button"
                className="property-delete-submit"
                disabled={!deleteConfirmed}
                onClick={closeDeleteModal}
              >
                نعم، حذف
              </button>
            </div>
          </div>
        </div>
      )}

      {propertyToEdit && (
        <div className="properties-modal-overlay" onClick={closeEditModal}>
          <div className="property-edit-modal" dir="rtl" onClick={(event) => event.stopPropagation()}>
            <div className="property-edit-header">
              <div className="property-edit-title-group">
                <h2>تعديل العقار</h2>
                <div className="properties-breadcrumb">
                  <span>الرئيسية</span>
                  <ChevronLeft size={16} />
                  <span>إدارة العقارات</span>
                  <ChevronLeft size={16} />
                  <strong>تعديل العقار</strong>
                </div>
              </div>
              <button type="button" className="property-edit-close" onClick={closeEditModal}>
                <X size={24} />
              </button>
            </div>

            <div className="property-edit-grid">
              <div className="property-edit-column">
                <section className="property-edit-card">
                  <h3>معلومات العقار <span>*</span></h3>
                  <div className="property-edit-form">
                    <label>
                      <span>اسم العقار</span>
                      <input type="text" defaultValue={propertyToEdit.title} />
                    </label>
                    <label>
                      <span>وصف العقار</span>
                      <textarea
                        rows="5"
                        defaultValue="شقة سكنية مفروشة بالكامل بتصميم عصري ومريحة للسكن العائلي أو الإقامات الطويلة تقع في موقع مميز قريب من جميع الخدمات مثل الأسواق، والمطاعم، والمواصلات العامة."
                      />
                    </label>
                    <div className="property-edit-block">
                      <span className="property-edit-label">تصنيف العقار</span>
                      <div className="property-category-grid">
                        {propertyCategoryCards.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            className={`property-category-card ${selectedPropertyCategory === item.label ? 'is-active' : ''}`}
                            onClick={() => setSelectedPropertyCategory(item.label)}
                          >
                            <img src={item.image} alt={item.label} />
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="property-edit-two-col">
                      <div className="property-edit-block">
                        <span className="property-edit-label">حالة العقار (اختياري)</span>
                        <div className="property-radio-list">
                          {propertyStatusOptions.map((status) => (
                            <label key={status} className="property-radio-item">
                              <input type="radio" name="property-status" defaultChecked={status === propertyToEdit.status} />
                              <span>{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="property-edit-block">
                        <span className="property-edit-label">نوع الإيجار</span>
                        <div className="property-checkbox-list">
                          {rentalTypeOptions.map((type) => (
                            <label key={type} className="property-check-item">
                              <input type="checkbox" defaultChecked />
                              <span>{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="property-edit-card">
                  <h3>المواصفات الأساسية <span>*</span></h3>
                  <div className="property-edit-form">
                    <div className="property-edit-two-col">
                      <label>
                        <span>مساحة عقارك</span>
                        <input type="text" defaultValue="92.86" />
                      </label>
                      <label>
                        <span>رقم المربع</span>
                        <input type="text" defaultValue="A-7890" />
                      </label>
                    </div>
                    <label>
                      <span>الطابق</span>
                      <input type="text" defaultValue="الخامس" />
                    </label>
                    <div className="property-edit-two-col">
                      <div className="property-edit-block">
                        <span className="property-edit-label">المفروشات</span>
                        <div className="property-radio-list inline">
                          <label className="property-radio-item">
                            <input type="radio" name="furnish" defaultChecked />
                            <span>مفروشة بالكامل</span>
                          </label>
                          <label className="property-radio-item">
                            <input type="radio" name="furnish" />
                            <span>غير مفروش</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="property-edit-block">
                      <span className="property-edit-label">مرافق عقارك الرئيسية</span>
                      <div className="property-icon-grid">
                        {mainPropertyAmenities.map((item) => {
                          const Icon = item.icon
                          return (
                            <button
                              key={item.label}
                              type="button"
                              className={`property-icon-card ${selectedMainAmenities.includes(item.label) ? 'is-active' : ''}`}
                              onClick={() => toggleMainAmenity(item.label)}
                            >
                              <Icon size={20} />
                              <span>{item.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="property-edit-card">
                  <h3>مرافق عقارك</h3>
                  <div className="property-icon-grid compact">
                    {extraAmenities.map((item) => {
                      const Icon = item.icon
                      return (
                        <button
                          key={item.label}
                          type="button"
                          className={`property-icon-card ${selectedExtraAmenities.includes(item.label) ? 'is-active' : ''}`}
                          onClick={() => toggleExtraAmenity(item.label)}
                        >
                          <Icon size={18} />
                          <span>{item.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </section>

                <section className="property-edit-card">
                  <h3>الأسعار <span>*</span></h3>
                  <div className="property-edit-form">
                    <label>
                      <span>السعر اليومي</span>
                      <input type="text" defaultValue="320 ريال / يوم" />
                    </label>
                    <label>
                      <span>السعر الشهري</span>
                      <input type="text" defaultValue="2,300,000 ريال / شهر" />
                    </label>
                    <label>
                      <span>السعر السنوي</span>
                      <input type="text" defaultValue="5,300,000 ريال / سنة" />
                    </label>
                  </div>
                </section>

                <section className="property-edit-card">
                  <h3>ميزات العقار <small>(اختياري)</small></h3>
                  <div className="property-feature-list">
                    {featureItems.map((feature, index) => (
                      <label key={feature} className="property-feature-item">
                        <input type="checkbox" defaultChecked={index < 5} />
                        <span>{feature}</span>
                      </label>
                    ))}
                  </div>
                  <div className="property-feature-add">
                    <button type="button" className="property-feature-add-button" onClick={addFeatureItem}>
                      إضافة
                    </button>
                    <input
                      type="text"
                      className="property-feature-add-input"
                      value={newFeature}
                      onChange={(event) => setNewFeature(event.target.value)}
                      placeholder="أضف ميزة جديدة"
                    />
                  </div>
                </section>
              </div>

              <div className="property-edit-column">
                <section className="property-edit-card">
                  <h3>صور العقار <span>*</span></h3>
                  <div className="property-media-preview">
                    <img src={selectedGalleryImage} alt={propertyToEdit.title} className="property-media-main" />
                    <div className="property-media-thumbs">
                      {propertyGalleryImages.slice(0, PROPERTY_MEDIA_THUMBS_LIMIT).map((image, index) => (
                        <button
                          key={`${image}-${index}`}
                          type="button"
                          className={`property-media-thumb ${selectedGalleryImage === image ? 'is-active' : ''}`}
                          onClick={() => setSelectedGalleryImage(image)}
                        >
                          <img src={image} alt="" />
                        </button>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="property-edit-card">
                  <h3>فيديو العقار <span>*</span></h3>
                  <div className="property-media-preview">
                    <div className="property-video-main-wrap">
                      <img src={selectedGalleryVideo} alt={propertyToEdit.title} className="property-media-main" />
                      <div className="property-video-badge">
                        <Play size={26} fill="currentColor" />
                      </div>
                    </div>
                    <div className="property-media-thumbs">
                      {propertyGalleryImages.slice(0, PROPERTY_MEDIA_THUMBS_LIMIT).map((image, index) => (
                        <button
                          key={`${image}-video-${index}`}
                          type="button"
                          className={`property-media-thumb ${selectedGalleryVideo === image ? 'is-active' : ''}`}
                          onClick={() => setSelectedGalleryVideo(image)}
                        >
                          <img src={image} alt="" />
                        </button>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="property-edit-card">
                  <h3>تفاصيل مرافق العقار <span>*</span></h3>
                  <div className="property-facilities-layout">
                    <div className="property-facility-counter">
                      <span>عدد غرف النوم</span>
                      <div className="property-counter-box"><button type="button">+</button><strong>4</strong><button type="button">-</button></div>
                    </div>
                    <div className="property-facility-counter">
                      <span>عدد المطابخ</span>
                      <div className="property-counter-box"><button type="button">+</button><strong>1</strong><button type="button">-</button></div>
                    </div>
                    <div className="property-facility-counter">
                      <span>عدد دورات المياه</span>
                      <div className="property-counter-box"><button type="button">+</button><strong>2</strong><button type="button">-</button></div>
                    </div>

                    <div className="property-facility-group">
                      <span className="property-edit-label">مرافق المطبخ</span>
                      <div className="property-tag-list">
                        {kitchenAmenities.map((item, index) => (
                          <button key={item} type="button" className={`property-tag ${index < 4 ? 'is-active' : ''}`}>{item}</button>
                        ))}
                      </div>
                    </div>

                    <div className="property-facility-group">
                      <span className="property-edit-label">مرافق دورة المياه</span>
                      <div className="property-tag-list">
                        {bathroomAmenities.map((item, index) => (
                          <button key={item} type="button" className={`property-tag ${index < 4 ? 'is-active' : ''}`}>{item}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="property-edit-card">
                  <h3>عنوان العقار <span>*</span></h3>
                  <div className="property-edit-form">
                    <label>
                      <span>رقم المبنى</span>
                      <input type="text" defaultValue="6" />
                    </label>
                    <label>
                      <span>العنوان التفصيلي</span>
                      <input type="text" defaultValue="القاهرة - التجمع الخامس" />
                    </label>
                    <label>
                      <span>المدينة</span>
                      <input type="text" defaultValue="القاهرة - التجمع الخامس" />
                    </label>
                    <button
                      type="button"
                      className={`property-map-card ${locationPinned ? 'is-pinned' : ''}`}
                      onClick={() => setLocationPinned(true)}
                    >
                      <div className="property-map-roads">
                        <span className="road road-a" />
                        <span className="road road-b" />
                        <span className="road road-c" />
                        <span className="road road-d" />
                        <span className="road road-e" />
                      </div>
                      <div className="property-map-areas">
                        <span className="area area-a" />
                        <span className="area area-b" />
                        <span className="area area-c" />
                      </div>
                      <div className="property-map-center-badge">
                        <span>تحديد موقعي تلقائياً</span>
                        <MapPin size={18} />
                      </div>
                      <div className="property-map-marker">
                        <MapPin size={28} />
                      </div>
                      <div className="property-map-google">Google</div>
                    </button>
                  </div>
                </section>

                <section className="property-edit-card property-edit-actions-card">
                  <button type="button" className="property-edit-primary">تعديل العقار</button>
                  <button type="button" className="property-edit-secondary">حفظ كمسودة</button>
                  <button type="button" className="property-edit-secondary" onClick={closeEditModal}>إلغاء</button>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PropertiesPage
