
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryNav from '../components/CategoryNav';
import FeaturedEvents from '../components/FeaturedEvents';
import PopularCategories from '../components/PopularCategories';
import UpcomingEvents from '../components/UpcomingEvents';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <CategoryNav />
      <FeaturedEvents />
      <PopularCategories />
      <UpcomingEvents />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
