import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Info from './components/Info';
import Works from './components/Works';
import Featured from './components/Featured';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <HeroSection />
      <Info />
      <Works />
      <Featured />
      <Contact />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;

