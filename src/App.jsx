import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import More from './pages/More';
import VisionMission from './components/More/VisionMission';
import Products from './components/More/Products';
import Principles from './components/More/Principles';
import Technology from './components/More/Technology';
import AIFeatures from './components/More/AIFeatures';
import KeyClientele from './components/More/KeyClientele';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      {/* Navbar  */}
      <div className={`sticky top-0 z-200 transition-all duration-500 ${
        scrolled 
          ? 'shadow-xl'  
          : '' 
      }`}>
        <Navbar scrolled={scrolled} />
      </div>
      
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<More />}>
            <Route path="vision-mission" element={<VisionMission />} />
            <Route path="products" element={<Products />} />
            <Route path="principles" element={<Principles />} />
            <Route path="technology" element={<Technology />} />
            <Route path="ai-features" element={<AIFeatures />} />
            <Route path="key-clientele" element={<KeyClientele />} />
          </Route>
        </Routes>

    </Router>
  );
}

export default App;