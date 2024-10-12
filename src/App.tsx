import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import CranberryFacts from './components/CranberryFacts';
import GrowingProcess from './components/GrowingProcess';
import Quiz from './components/Quiz';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'facts':
        return <CranberryFacts />;
      case 'growing':
        return <GrowingProcess />;
      case 'quiz':
        return <Quiz />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-red-50">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;