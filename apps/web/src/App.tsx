import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { WorkPage } from './pages/WorkPage'
import { ProjectPage } from './pages/ProjectPage'
import { SeoSystemsPage } from './pages/SeoSystemsPage'
import { WritingPage } from './pages/WritingPage'
import { ArticlePage } from './pages/ArticlePage'
import { JourneyPage } from './pages/JourneyPage'
import { NowPage } from './pages/NowPage'
import { ContactPage } from './pages/ContactPage'
import { SiteStatusPage } from './pages/SiteStatusPage'
import { NotFoundPage } from './pages/NotFoundPage'

// Path routing on the production host. (The canvas preview used HashRouter.)
export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<ProjectPage />} />
            <Route path="/seo-systems" element={<SeoSystemsPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/now" element={<NowPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/site-status" element={<SiteStatusPage />} />

            {/* Old URLs from the previous site */}
            <Route path="/portfolio" element={<Navigate to="/work" replace />} />
            <Route path="/pool-rental-near-me" element={<Navigate to="/work/pool-rental-near-me" replace />} />
            <Route path="/founders-click" element={<Navigate to="/work/founders-click" replace />} />
            <Route path="/books" element={<Navigate to="/writing#books" replace />} />
            <Route path="/blog" element={<Navigate to="/writing" replace />} />
            <Route path="/work-with-me" element={<Navigate to="/contact" replace />} />
            <Route path="/subscribe" element={<Navigate to="/contact" replace />} />
            <Route path="/services-for-developers" element={<Navigate to="/contact" replace />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
