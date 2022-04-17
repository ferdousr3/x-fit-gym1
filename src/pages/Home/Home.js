import React from 'react';
import Appointment from '../../components/Appointment/Appointment';
import HeroSection from '../../components/HeroSection/HeroSection';
import Services from '../../components/Services/Services';

const Home = () => {
  return (
    <>
    <HeroSection />
    <section className='bg-white ' >
      <Services />
    </section>
    <section>
      <Appointment />
    </section>
      
    </>
  );
};

export default Home;