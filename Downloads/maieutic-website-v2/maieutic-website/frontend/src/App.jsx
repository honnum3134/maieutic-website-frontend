import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import EnquireNow from '@/components/EnquireNow';
import ApplyNow from '@/components/ApplyNow';
import LeadPopup from '@/components/LeadPopup';
import WhatsappButton from '@/components/WhatsappButton';
import { Toaster } from '@/components/ui/toaster';

import HomePage from '@/pages/HomePage';
import EducationPage from '@/pages/education/EducationPage';
import EnterprisePage from '@/pages/enterprise/EnterprisePage';
import CareersPage from '@/pages/careers/CareersPage';
import WhoWeArePage from '@/pages/whoweare/WhoWeArePage';
import TeamPage from '@/pages/team/TeamPage';
import ContactPage from '@/pages/contact/ContactPage';
import HrleadsPage from '@/pages/hr/HrleadsPage';
import Gallery from '@/pages/gallery/gallery';

function App() {
  const location = useLocation();
  const isHrPage = location.pathname === '/hr-leads';

  return (
    <>
      <ScrollToTop />
      {!isHrPage && <Header />}
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/education"  element={<EducationPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        <Route path="/careers"    element={<CareersPage />} />
        <Route path="/whoweare"   element={<WhoWeArePage />} />
        <Route path="/team"       element={<TeamPage />} />
        <Route path="/contact"    element={<ContactPage />} />
        <Route path="/gallery"    element={<Gallery />} />
        <Route path="/hr-leads"   element={<HrleadsPage />} />
      </Routes>
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
