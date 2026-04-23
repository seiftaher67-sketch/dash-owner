import React, { useState } from 'react'
import { BadgeCheck, ChevronDown, ChevronLeft, CornerUpLeft, Search, Star } from 'lucide-react'

const commentRows = [
  {
    id: 1,
    type: 'review',
    author: 'مشاري العتيبي',
    property: 'شقة السكنية - التجمع الخامس',
    date: 'الأربعاء، 15 أكتوبر',
    text: 'تجربة رائعة جدًا اللي بيه مكان مريح ونظيف ومرتب ومنسق بالتفاصيل الصغيرة حتى يجرب واللهم المضيف جدًا كان تعاونه ممتاز الله يباركله في حاله شكرا',
    rating: '4.9',
    avatar: '/image/2.jpg',
  },
  {
    id: 2,
    type: 'reply',
    author: 'فيصل الحربي',
    date: 'الأربعاء، 15 أكتوبر',
    text: 'شكراً جدًا على رأيك الجميل! سعداء إن تجربتك كانت مميزة وإن المكان نال إعجابك. نسعد باستقبالك دائمًا، ونتمنى نشوفك مرة ثانية قريب بإذن الله.',
    avatar: '/image/1.jpg',
  },
  {
    id: 3,
    type: 'review',
    author: 'مشاري العتيبي',
    property: 'شقة السكنية - التجمع الخامس',
    date: 'الخميس، 16 أكتوبر',
    text: 'تجربة رائعة جدًا اللي بيه مكان مريح ونظيف ومرتب ومنسق بالتفاصيل الصغيرة حتى يجرب واللهم المضيف جدًا كان تعاونه ممتاز الله يباركله في حاله شكرا',
    rating: '4.9',
    avatar: '/image/2.jpg',
  },
  {
    id: 4,
    type: 'review',
    author: 'مشاري العتيبي',
    property: 'شقة السكنية - التجمع الخامس',
    date: 'الجمعة، 17 أكتوبر',
    text: 'تجربة رائعة جدًا اللي بيه مكان مريح ونظيف ومرتب ومنسق بالتفاصيل الصغيرة حتى يجرب واللهم المضيف جدًا كان تعاونه ممتاز الله يباركله في حاله شكرا',
    rating: '4.9',
    avatar: '/image/2.jpg',
  },
  {
    id: 5,
    type: 'review',
    author: 'مشاري العتيبي',
    property: 'شقة السكنية - التجمع الخامس',
    date: 'السبت، 18 أكتوبر',
    text: 'تجربة رائعة جدًا اللي بيه مكان مريح ونظيف ومرتب ومنسق بالتفاصيل الصغيرة حتى يجرب واللهم المضيف جدًا كان تعاونه ممتاز الله يباركله في حاله شكرا',
    rating: '4.9',
    avatar: '/image/2.jpg',
  },
]

const propertyFilterOptions = ['جميع العقارات', 'الفلل', 'الشقق', 'الغرف الفندقية', 'الاستوديوهات']
const ratingFilterOptions = ['جميع التقييمات', '5 نجوم', '4 نجوم فأعلى', '3 نجوم فأعلى', 'أقل من 3 نجوم']
const sortFilterOptions = ['الأحدث أولاً', 'الأقدم أولاً', 'الأعلى تقييمًا', 'الأقل تقييمًا', 'الأكثر ردودًا']

function RatingStars() {
  return (
    <span className="comments-rating-stars" aria-hidden="true">
      {[...Array(5)].map((_, index) => (
        <Star key={index} size={19} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

function ReviewItem({ item }) {
  const isReply = item.type === 'reply'

  return (
    <article className={`comments-thread-item ${isReply ? 'is-reply' : ''}`}>
      <div className="comments-thread-main">
        <div className="comments-thread-head">
          <div className="comments-thread-date">{item.date}</div>

          <div className="comments-author-block">
            <img className="comments-avatar-image" src={item.avatar} alt={item.author} />

            <div className="comments-author-copy">
              <div className="comments-author-title">
                <h3>{item.author}</h3>
                <BadgeCheck size={20} />
              </div>

              {!isReply ? (
                <>
                  <div className="comments-author-rating">
                    <RatingStars />
                    <span>{item.rating}</span>
                  </div>
                  <a href="#/" className="comments-property-link">
                    {item.property}
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>

        <p className="comments-body-text">{item.text}</p>

        <button type="button" className="comments-reply-action">
          <CornerUpLeft size={20} />
          <span>{isReply ? 'ردك' : 'رد على التعليق'}</span>
        </button>
      </div>
    </article>
  )
}

function CommentsPage() {
  const [selectedPropertyFilter, setSelectedPropertyFilter] = useState('جميع العقارات')
  const [selectedRatingFilter, setSelectedRatingFilter] = useState('جميع التقييمات')
  const [selectedSortFilter, setSelectedSortFilter] = useState('الأحدث أولاً')
  const [openFilter, setOpenFilter] = useState(null)

  return (
    <section className="comments-page">
        <header className="comments-page-header">
          <div className="comments-page-title">
            <h1>التعليقات</h1>
            <div className="properties-breadcrumb">
              <span>الرئيسية</span>
              <ChevronLeft size={18} />
              <strong>التعليقات</strong>
            </div>
          </div>
        </header>

        <section className="comments-filters-bar">
          <label className="comments-search-field">
            <Search size={28} />
            <input type="search" placeholder="بحث باسم العميل أو العقار..." />
          </label>

          <div className={`properties-select-wrap ${openFilter === 'property' ? 'is-open' : ''}`}>
            <button
              type="button"
              className="comments-filter-chip comments-filter-chip-centered"
              onClick={() => setOpenFilter((current) => (current === 'property' ? null : 'property'))}
            >
              <ChevronDown size={23} />
              <span>{selectedPropertyFilter}</span>
            </button>

            {openFilter === 'property' && (
              <div className="properties-dropdown-menu">
                <div className="properties-dropdown-scroll">
                  {propertyFilterOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`properties-dropdown-option ${selectedPropertyFilter === option ? 'is-selected' : ''}`}
                      onClick={() => {
                        setSelectedPropertyFilter(option)
                        setOpenFilter(null)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={`properties-select-wrap ${openFilter === 'rating' ? 'is-open' : ''}`}>
            <button
              type="button"
              className="comments-filter-chip comments-filter-chip-centered"
              onClick={() => setOpenFilter((current) => (current === 'rating' ? null : 'rating'))}
            >
              <ChevronDown size={23} />
              <span>{selectedRatingFilter}</span>
            </button>

            {openFilter === 'rating' && (
              <div className="properties-dropdown-menu">
                <div className="properties-dropdown-scroll">
                  {ratingFilterOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`properties-dropdown-option ${selectedRatingFilter === option ? 'is-selected' : ''}`}
                      onClick={() => {
                        setSelectedRatingFilter(option)
                        setOpenFilter(null)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={`properties-select-wrap ${openFilter === 'sort' ? 'is-open' : ''}`}>
            <button
              type="button"
              className="comments-filter-chip comments-filter-chip-centered"
              onClick={() => setOpenFilter((current) => (current === 'sort' ? null : 'sort'))}
            >
              <ChevronDown size={23} />
              <span>{selectedSortFilter}</span>
            </button>

            {openFilter === 'sort' && (
              <div className="properties-dropdown-menu">
                <div className="properties-dropdown-scroll">
                  {sortFilterOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`properties-dropdown-option ${selectedSortFilter === option ? 'is-selected' : ''}`}
                      onClick={() => {
                        setSelectedSortFilter(option)
                        setOpenFilter(null)
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="comments-thread-panel">
          {commentRows.map((item) => (
            <ReviewItem key={item.id} item={item} />
          ))}
        </section>
    </section>
  )
}

export default CommentsPage
