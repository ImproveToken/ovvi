
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer to reveal elements as they enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target all slide-up elements
    document.querySelectorAll('.slide-up').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
