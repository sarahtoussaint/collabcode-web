import React from 'react';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards'; // ✅ Correct import

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
