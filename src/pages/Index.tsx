
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import ServiceSection from '@/components/home/ServiceSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ServiceSection />
      <TestimonialSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
