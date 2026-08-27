import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';
import { defaultProfileData } from './data/profileData';

export const App: React.FC = () => {
  return (
    <div id="top" className="relative flex min-h-screen w-full flex-col bg-[#080c14] text-slate-300 antialiased selection:bg-emerald-500/20 selection:text-emerald-200">
      {/* Ambient background grid & radial light layers */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-60" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 bg-radial-gradient" 
      />

      {/* Main content layer */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        {/* Single-page content: About Me showcase */}
        <main className="flex flex-1 flex-col justify-center">
          <AboutSection profile={defaultProfileData} />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;


