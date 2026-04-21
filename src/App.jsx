import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage.jsx'
import PropertiesPage from './pages/PropertiesPage'
import BookingsPage from './pages/BookingsPage'
import AnalyticsPage from './pages/AnalyticsPage'
import ProfitsPage from './pages/ProfitsPage'
import CommentsPage from './pages/CommentsPage'
import PropertyEditPage from './pages/PropertyEditPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/profits" element={<ProfitsPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/properties/edit" element={<PropertyEditPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
