import Hero from '@/components/sections/Hero';
import Categories from '@/components/sections/Categories';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import ContactCTA from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
