import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RegisterPage from './pages/RegisterPage';
import SponsorsPage from './pages/SponsorsPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import './styles/globals.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    document.title = 'GRAND SLAM PADEL';
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
            </>
          } />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/patrocinadores" element={<SponsorsPage />} />
          <Route path="/acerca-de" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;