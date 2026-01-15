import Hero from '@/components/Hero/Hero';
import CodingProfiles from '@/components/Profiles/CodingProfiles';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Layout/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <CodingProfiles />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
