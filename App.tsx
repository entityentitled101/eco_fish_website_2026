import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomeView from './components/HomeView';
import TechView from './components/TechView';
import ProductView from './components/ProductView';
import TeamView from './components/TeamView';
import Footer from './components/Footer';

export type ViewState = 'home' | 'tech' | 'products' | 'team';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // 当视图切换时，自动回到顶部
  const handleViewChange = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-nature-paper text-primary-900 selection:bg-gold-200 selection:text-primary-950 flex flex-col">
      <Navigation currentView={currentView} onViewChange={handleViewChange} />
      
      <main className="flex-grow pt-20"> {/* Add padding top for fixed nav */}
        {currentView === 'home' && <HomeView onViewChange={handleViewChange} />}
        {currentView === 'tech' && <TechView />}
        {currentView === 'products' && <ProductView />}
        {currentView === 'team' && <TeamView />}
      </main>

      <Footer onViewChange={handleViewChange} />
    </div>
  );
};

export default App;