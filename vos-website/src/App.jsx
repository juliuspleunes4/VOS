import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { preloadImages } from './utils/preloadImages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OverVOS from './pages/OverVOS';
import Diensten from './pages/Diensten';
import Contact from './pages/Contact';
import Privacyverklaring from './pages/Privacyverklaring';
import Klachtenregeling from './pages/Klachtenregeling';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(preloadImages);
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(preloadImages, 200);
    return () => clearTimeout(id);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/over-vos" element={<OverVOS />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyverklaring" element={<Privacyverklaring />} />
        <Route path="/klachtenregeling" element={<Klachtenregeling />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
