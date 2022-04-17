import React from 'react';
import Appointment from '../../components/Appointment/Appointment';
import HeroSection from '../../components/HeroSection/HeroSection';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Services from '../../components/Services/Services';
import WhyXfit from '../../components/WhyXfit/WhyXfit';

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
    <section>
      <WhyXfit />
    </section>
    {/* <section>
      <NewsLetter />
    </section> */}
      
    </>
  );
};

export default Home;