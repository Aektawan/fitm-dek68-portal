
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import NewsSection from '../components/NewsSection';
import ChatBot from '../components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <NewsSection />
      <ChatBot />
    </div>
  );
};

export default Index;
