import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import SectionIndicator from './components/elements/SectionIndicator';
import Modal from './components/elements/Modal';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <SectionIndicator />
        <Hero />
        <Portfolio />
      </main>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
