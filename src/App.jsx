import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TopNav from './components/layout/TopNav';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/layout/SmoothScroll';
import Home from './pages/Home';

// 项目详情页（6 个项目，数据量大）按需加载，不进首屏 bundle
const Project = lazy(() => import('./pages/Project'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Page transition: fade out current page → fade in new page.
// mode="wait" so the old page finishes exiting before the new one mounts.
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  enter:   { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
};

function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <ScrollToTop />
      <TopNav />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Suspense fallback={null}>
            <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/work/:id"
              element={
                <PageTransition>
                  <Project />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
