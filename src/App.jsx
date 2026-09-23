import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import EnquireNow from '@/components/EnquireNow';
import ApplyNow from '@/components/ApplyNow';
import LeadPopup from '@/components/LeadPopup';
import WhatsappButton from '@/components/WhatsappButton';
import { Toaster } from '@/components/ui/toaster';
// The homepage is loaded eagerly — it is the landing page, and putting it
// behind a lazy() chunk adds a network round-trip before the hero (the LCP
// element) can render.
import HomePage from '@/pages/HomePage';

// ── Other pages are code-split — each route ships as its own chunk ────────────
const CareersPage   = lazy(() => import('@/pages/careers/CareersPage'));
const WhoWeArePage  = lazy(() => import('@/pages/whoweare/WhoWeArePage'));
const ContactPage   = lazy(() => import('@/pages/contact/ContactPage'));
const HrleadsPage   = lazy(() => import('@/pages/hr/HrleadsPage'));
const LeadsSheetPage = lazy(() => import('@/pages/hr/LeadsSheetPage'));
const Gallery       = lazy(() => import('@/pages/gallery/gallery'));
const FAQPage       = lazy(() => import('@/pages/faq/FAQPage'));
// EducationPage is retired — its content was merged into the four Digital
// Learning solution pages; /education 301s to the homepage via .htaccess.
// The file is kept at src/pages/education/ in case it's ever needed again.

// ── Solutions ─────────────────────────────────────────────────────────────────
const SolutionsPage = lazy(() => import('@/pages/solutions/SolutionsPage'));

// ── Solutions › Digital Learning ──────────────────────────────────────────────
const ContentDesignPage      = lazy(() => import('@/pages/solutions/digital-learning/ContentDesignPage'));
const MarketingDigitalPage   = lazy(() => import('@/pages/solutions/digital-learning/MarketingDigitalPage'));
const AcademicDeliveryPage   = lazy(() => import('@/pages/solutions/digital-learning/AcademicDeliveryPage'));
const LMSDeploymentPage      = lazy(() => import('@/pages/solutions/digital-learning/LMSDeploymentPage'));

// ── Solutions › Corporate Solutions ───────────────────────────────────────────
const InteractiveModelsPage  = lazy(() => import('@/pages/solutions/corporate-solutions/InteractiveModelsPage'));
const VideoBasedLearningPage = lazy(() => import('@/pages/solutions/corporate-solutions/VideoBasedLearningPage'));
const MotionGraphicsPage     = lazy(() => import('@/pages/solutions/corporate-solutions/MotionGraphicsPage'));

// ── Resources ─────────────────────────────────────────────────────────────────
const BlogsInsightsPage      = lazy(() => import('@/pages/resources/BlogsInsightsPage'));
const BlogPostPage           = lazy(() => import('@/pages/resources/BlogPostPage'));
const CaseStudiesPage        = lazy(() => import('@/pages/resources/CaseStudiesPage'));

// ── Our Clients ───────────────────────────────────────────────────────────────
const ClientsPage = lazy(() => import('@/pages/clients/ClientsPage'));

// ── Fallback ──────────────────────────────────────────────────────────────────
// The drafted legal pages (src/pages/legal/) are unrouted until legal review.
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// ── Route-level loading state — brand teal spinner ────────────────────────────
const PageLoader = () => (
  <div
    role="status"
    aria-label="Loading page"
    style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '116px',
      backgroundColor: '#ffffff',
    }}
  >
    <div
      className="animate-spin"
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '3px solid #d1ede9',
        borderTopColor: '#00615c',
      }}
    />
  </div>
);

function App() {
  const location = useLocation();
  // Internal pages: no header, footer, popups or sticky widgets.
  const isHrPage = ['/hr-leads', '/leadssheet'].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!isHrPage && <Header />}
      <Suspense fallback={<PageLoader />}>
        <Routes>

          {/* ── Core pages ── */}
          <Route path="/"           element={<HomePage />} />
          <Route path="/careers"    element={<CareersPage />} />
          <Route path="/about-us"   element={<WhoWeArePage />} />
          {/* /team is a "Coming Soon" placeholder — redirected to About Us
              until real team content exists. The server 301s direct hits too
              (public/.htaccess); this covers in-app navigation.
              src/pages/team/TeamPage.jsx is kept on disk. */}
          <Route path="/team"       element={<Navigate to="/about-us" replace />} />
          <Route path="/contact"    element={<ContactPage />} />
          <Route path="/gallery"    element={<Gallery />} />
          <Route path="/faqs"       element={<FAQPage />} />
          <Route path="/hr-leads"   element={<HrleadsPage />} />
          {/* /leadssheet?key=… downloads the all-forms Excel workbook from the backend */}
          <Route path="/leadssheet" element={<LeadsSheetPage />} />

          {/* ── FAQ alias — singular form kept alive, canonical is /faqs ── */}
          <Route path="/faq"        element={<FAQPage />} />

          {/* ── Education — nav-hidden, kept for SEO ── */}

          {/* ── Solutions overview ── */}
          <Route path="/solutions"  element={<SolutionsPage />} />

          {/* ── Solutions › Digital Learning ── */}
          <Route path="/solutions/content-design-development"           element={<ContentDesignPage />} />
          <Route path="/solutions/marketing-digital-products"           element={<MarketingDigitalPage />} />
          <Route path="/solutions/academic-delivery-student-success"    element={<AcademicDeliveryPage />} />
          <Route path="/solutions/lms-deployment-management"            element={<LMSDeploymentPage />} />

          {/* ── Solutions › Corporate Solutions ── */}
          <Route path="/solutions/interactive-models-articulate"        element={<InteractiveModelsPage />} />
          <Route path="/solutions/video-based-learning"                 element={<VideoBasedLearningPage />} />
          <Route path="/solutions/2d-3d-motion-graphics"                element={<MotionGraphicsPage />} />

          {/* ── Old routes kept alive for SEO — redirect to new page ── */}
          <Route path="/solutions/explainer-videos"                     element={<VideoBasedLearningPage />} />
          <Route path="/solutions/product-process-videos"               element={<VideoBasedLearningPage />} />
          <Route path="/solutions/scenario-based-videos"                element={<VideoBasedLearningPage />} />

          {/* ── Resources ── */}
          <Route path="/resources/blogs-insights"                       element={<BlogsInsightsPage />} />
          <Route path="/resources/blogs-insights/:slug"                 element={<BlogPostPage />} />
          <Route path="/resources/case-studies"                         element={<CaseStudiesPage />} />

          {/* ── Our Clients ── */}
          <Route path="/clients" element={<ClientsPage />} />

          {/* ── Catch-all 404 — must stay last ── */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Suspense>
      {!isHrPage && <Footer />}
      {!isHrPage && <EnquireNow />}
      {!isHrPage && <ApplyNow />}
      {!isHrPage && <LeadPopup />}
      {!isHrPage && <WhatsappButton />}
      <Toaster />
    </>
  );
}

export default App;
