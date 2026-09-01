import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';
import { defaultProfileData } from './data/profileData';

export const App: React.FC = () => {
  return (
    <div id="home" className="relative flex min-h-screen w-full flex-col bg-[#000000] text-slate-300 antialiased selection:bg-slate-500/20 selection:text-white">
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="flex flex-1 flex-col justify-center">
          <AboutSection profile={defaultProfileData} />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;


