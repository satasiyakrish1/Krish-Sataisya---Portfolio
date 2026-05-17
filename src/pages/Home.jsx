import React from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import WhyMe from '../components/WhyMe';
import Stats from '../components/Stats';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="divide-y divide-black last:border-b">
      <Hero />
      <Ticker />
      <WhyMe />
      <Stats />
      <Technologies />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
