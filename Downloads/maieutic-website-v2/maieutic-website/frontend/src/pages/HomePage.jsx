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
        <title>Maieutic Edutech Private Limited | Innovative Education Solutions</title>
        <meta name="description" content="Maieutic Edutech provides cutting-edge educational technology solutions across industries. Discover our services, resources, and expertise in transforming learning experiences." />
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
