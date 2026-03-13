import { useScrollReveal } from '@/hooks/useScrollReveal';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Destinations from '@/components/Destinations';
import Experiences from '@/components/Experiences';
import Testimonials from '@/components/Testimonials';
import Manifesto from '@/components/Manifesto';
import Gallery from '@/components/Gallery';
import Packages from '@/components/Packages';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Stats />
      <Destinations />
      <Experiences />
      <Testimonials />
      <Manifesto />
      <Gallery />
      <Packages />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
