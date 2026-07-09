import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopNav from './components/layout/TopNav';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import Home from './pages/Home';
import Project from './pages/Project';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <TopNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
