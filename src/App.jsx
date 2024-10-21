// App.jsx
import { StrictMode, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Cards from './Cards.jsx';
import Footer from './Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS stylesheet

function App() {
  useEffect(() => {
    AOS.init({ duration:1000,once:true }); // Initialize AOS with a default duration
  }, []);

  return (
    <StrictMode>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </StrictMode>
  );
}

export default App;
