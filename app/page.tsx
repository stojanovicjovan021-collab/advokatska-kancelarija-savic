import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { PracticeAreas } from '@/components/sections/PracticeAreas';
import { WhyUs } from '@/components/sections/WhyUs';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Blog } from '@/components/sections/Blog';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <WhyUs />
      <Process />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
