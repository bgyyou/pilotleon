import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Trilogy from '../components/home/Trilogy';
import WorkGrid from '../components/home/WorkGrid';
import Stack from '../components/home/Stack';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Trilogy />
      <WorkGrid />
      <About />
      <Stack />
      <Contact />
    </>
  );
}
