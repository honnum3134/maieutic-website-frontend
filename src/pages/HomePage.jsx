import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import DiscoverUs from '@/components/DiscoverUs';
import Resources from '@/components/Resources';
import Industry from '@/components/Industry';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Maieutic Edutech Private Limited | Online Degree & E-Learning Solutions</title>
        <meta name="description" content="Maieutic Edutech delivers end-to-end online degree program support and e-learning content solutions — from curriculum design and LMS deployment to admissions and student support." />
        <meta name="keywords" content="Maieutic Edutech, online degree programs India, online MBA, online MCA, online BCA, online BBA, e-learning content development, LMS deployment, curriculum design, student support services, EdTech Bengaluru, enterprise learning" />
        <meta property="og:url" content="https://maieuticedutech.com/" />
        <meta property="og:title" content="Maieutic Edutech Private Limited | Online Degree & E-Learning Solutions" />
        <meta property="og:description" content="End-to-end online degree program support and e-learning content solutions — curriculum design, LMS deployment, admissions, and student support." />
        <meta name="twitter:title" content="Maieutic Edutech Private Limited | Online Degree & E-Learning Solutions" />
        <meta name="twitter:description" content="End-to-end online degree program support and e-learning content solutions — curriculum design, LMS deployment, admissions, and student support." />
        <link rel="canonical" href="https://maieuticedutech.com/" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <main>
          <Hero />
          <Solutions />
          <DiscoverUs />
          <Resources />
          <Industry />
        </main>
      </div>
    </>
  );
};

export default HomePage;
