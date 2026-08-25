import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AboutSection } from './components/AboutSection'
import { defaultProfileData } from './data/profileData'

export const App: React.FC = () => {
  return (
    <div id="top" className="flex min-h-screen w-full flex-col bg-[#f4f2ee] text-[#45423d]">
      <Header />

      {/* Single-page content: only the About Me section */}
      <main className="flex flex-1 flex-col justify-center">
        <AboutSection profile={defaultProfileData} />
      </main>

      <Footer />
    </div>
  )
}

export default App

