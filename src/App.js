import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Service';
import Doctor from './components/Doctor';
import CTA from './components/CTA';
import Insurance from './components/Insurance';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';


function App() {
  return (
    <div className="App">

<div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctor />
        <CTA />
        <Insurance />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  </div>
  );
}

export default App;
