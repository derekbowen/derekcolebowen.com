import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/ScrollToTop';
import CanonicalTag from './components/CanonicalTag';
import { Toaster } from '@/components/ui/toaster';
import Header from './components/Header';
import Footer from './components/Footer';
import InteractiveContactButton from './components/InteractiveContactButton';
import BottomNavigation from './components/BottomNavigation';

import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import BooksPage from './pages/BooksPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostDetail from './pages/BlogPostDetail';
import BlogPostDetailLogistics from './pages/BlogPostDetailLogistics';
import BlogPostDetailEntrepreneur from './pages/BlogPostDetailEntrepreneur';
import BlogPostDetailAI from './pages/BlogPostDetailAI';
import BlogPostDetailTrucking from './pages/BlogPostDetailTrucking';
import BlogPostDetailSEO from './pages/BlogPostDetailSEO';
import BlogPostDetailMarketplaceGraveyard from './pages/BlogPostDetailMarketplaceGraveyard';
import BlogPostDetailSitemap from './pages/BlogPostDetailSitemap';
import WorkWithMePage from './pages/WorkWithMePage';
import SubscribePage from './pages/SubscribePage';
import PoolRentalNearMePage from './pages/PoolRentalNearMePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ServicesForDevelopersPage from './pages/ServicesForDevelopersPage';
import FoundersClickPage from './pages/FoundersClickPage';
import NotFoundPage from './pages/NotFoundPage';

// Admin
import { AdminAuthProvider } from './contexts/AdminAuthContext.jsx';
import ProtectedAdminRoute from './components/ProtectedAdminRoute.jsx';
import AdminLoginPage from './pages/admin/AdminLoginPage.jsx';
import AdminPostsPage from './pages/admin/AdminPostsPage.jsx';
import AdminNewPostPage from './pages/admin/AdminNewPostPage.jsx';
import AdminEditPostPage from './pages/admin/AdminEditPostPage.jsx';

function App() {
  return (
    <AdminAuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#0A0E27]">
          <ScrollToTop />
          <CanonicalTag />
          <Header />
          <main className="flex-grow pb-20 md:pb-0">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/blog" element={<BlogIndexPage />} />
              <Route path="/blog/scaling-with-programmatic-seo" element={<BlogPostDetail />} />
              <Route path="/blog/logistics-digital-innovation" element={<BlogPostDetailLogistics />} />
              <Route path="/blog/entrepreneur-book-writing" element={<BlogPostDetailEntrepreneur />} />
              <Route path="/blog/game-boy-ai" element={<BlogPostDetailAI />} />
              <Route path="/blog/trucking-truth" element={<BlogPostDetailTrucking />} />
              <Route path="/blog/digital-waiting-room" element={<BlogPostDetailSEO />} />
              <Route path="/blog/marketplace-graveyard" element={<BlogPostDetailMarketplaceGraveyard />} />
              <Route path="/blog/1700-sitemap" element={<BlogPostDetailSitemap />} />
              <Route path="/work-with-me" element={<WorkWithMePage />} />
              <Route path="/subscribe" element={<SubscribePage />} />
              <Route path="/pool-rental-near-me" element={<PoolRentalNearMePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/services-for-developers" element={<ServicesForDevelopersPage />} />
              <Route path="/founders-click" element={<FoundersClickPage />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route 
                path="/admin/posts" 
                element={
                  <ProtectedAdminRoute>
                    <AdminPostsPage />
                  </ProtectedAdminRoute>
                } 
              />
              <Route 
                path="/admin/new" 
                element={
                  <ProtectedAdminRoute>
                    <AdminNewPostPage />
                  </ProtectedAdminRoute>
                } 
              />
              <Route 
                path="/admin/edit/:id" 
                element={
                  <ProtectedAdminRoute>
                    <AdminEditPostPage />
                  </ProtectedAdminRoute>
                }
              />

              {/* Catch-all 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <InteractiveContactButton />
          <BottomNavigation />
          <Toaster />
          <Analytics />
        </div>
      </Router>
    </AdminAuthProvider>
  );
}

export default App;