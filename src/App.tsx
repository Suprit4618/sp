import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { WebsiteSidebar, type ShowcaseMode } from './components/layout/WebsiteSidebar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ShowcaseSection } from './components/sections/ShowcaseSection';
import { AboutSection } from './components/sections/AboutSection';
import { AtelierProcessSection } from './components/sections/AtelierProcessSection';
import { CustomOrderSection } from './components/sections/CustomOrderSection';
import { ContactSection } from './components/sections/ContactSection';
import { CreationDetailModal } from './components/sections/CreationDetailModal';
import { InteractiveThreadCanvas } from './components/artwork/InteractiveThreadCanvas';
import {
  ScallopedLaceRosette,
  SunburstDaisyMedallion,
  EightPetalNeedleworkBlossom,
} from './components/artwork/BackgroundEmbroideryMotifs';
import type { Creation } from './data/creations';

export default function App() {
  const [selectedCreation, setSelectedCreation] = useState<Creation | null>(null);
  const [prefilledTitle, setPrefilledTitle] = useState<string>('');
  const [showcaseMode, setShowcaseMode] = useState<ShowcaseMode>('embroidery');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sectionIds = ['contact', 'custom-order', 'process', 'about', 'creations', 'hero'];
          const scrollPos = window.scrollY + 220;

          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              if (scrollPos >= top) {
                const nextSection = id === 'hero' ? 'home' : id;
                setActiveSection((prev) => (prev !== nextSection ? nextSection : prev));
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateSection = (sectionId: string, mode?: ShowcaseMode) => {
    setActiveSection(sectionId);
    if (mode) {
      setShowcaseMode(mode);
    }
  };

  const handleOpenCustomOrder = (creation?: Creation) => {
    if (creation) {
      setPrefilledTitle(creation.title);
    }
    const orderElement = document.getElementById('custom-order');
    if (orderElement) {
      orderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireFromModal = (creation: Creation) => {
    setSelectedCreation(null);
    handleOpenCustomOrder(creation);
  };

  return (
    <div className="min-h-screen bg-artisan-linen text-[#301923] flex flex-col relative selection:bg-[#DEC5A3]/50 selection:text-[#301923] overflow-x-hidden">
      {/* Ephemeral Silk Thread Canvas Trail (GPU-optimized) */}
      <InteractiveThreadCanvas />

      {/* Atmospheric Embroidered Textile Background Watermark Motifs */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 transform-gpu"
        style={{ willChange: 'transform', contain: 'paint' }}
        aria-hidden="true"
      >
        {/* Top-Right Hero Rosette */}
        <div className="absolute -top-10 -right-16 opacity-35">
          <ScallopedLaceRosette size={340} color="#DEC5A3" accentColor="#B8442D" />
        </div>

        {/* Top-Left Hero Daisy Bloom */}
        <div className="absolute top-72 -left-20 opacity-25">
          <SunburstDaisyMedallion size={240} color="#DEC5A3" accentColor="#B8442D" />
        </div>

        {/* Mid-Hero Ambient Blossom */}
        <div className="absolute top-[680px] right-8 opacity-20 hidden md:block">
          <EightPetalNeedleworkBlossom size={160} color="#DEC5A3" accentColor="#533630" />
        </div>

        {/* Creations Section Left Watermark Rosette */}
        <div className="absolute top-[1250px] -left-24 opacity-25">
          <ScallopedLaceRosette size={300} color="#DEC5A3" accentColor="#B8442D" />
        </div>

        {/* Creations Section Right Sunburst */}
        <div className="absolute top-[1850px] -right-16 opacity-25">
          <SunburstDaisyMedallion size={260} color="#DEC5A3" accentColor="#B8442D" />
        </div>

        {/* Process Section Watermark Rosette */}
        <div className="absolute top-[2650px] -right-16 opacity-25 hidden md:block">
          <ScallopedLaceRosette size={280} color="#DEC5A3" accentColor="#B8442D" />
        </div>

        {/* Bespoke Custom Orders Watermark Blossom */}
        <div className="absolute top-[3350px] -left-12 opacity-30">
          <EightPetalNeedleworkBlossom size={180} color="#DEC5A3" accentColor="#B8442D" />
        </div>

        {/* Contact Section Rosette Watermark */}
        <div className="absolute top-[4100px] right-4 opacity-25">
          <SunburstDaisyMedallion size={260} color="#DEC5A3" accentColor="#533630" />
        </div>
      </div>

      {/* Website-wide Sidebar Drawer Navigation */}
      <WebsiteSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        showcaseMode={showcaseMode}
        onSelectShowcaseMode={(mode) => setShowcaseMode(mode)}
        onOpenCustomOrder={() => handleOpenCustomOrder()}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Top Navigation Header */}
      <Navbar
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onOpenCustomOrder={() => handleOpenCustomOrder()}
        onSelectShowcaseMode={(mode) => setShowcaseMode(mode)}
        showcaseMode={showcaseMode}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Page Sections */}
      <main className="flex-grow relative z-10">
        <HeroSection onOpenCustomOrder={() => handleOpenCustomOrder()} />
        <ShowcaseSection
          mode={showcaseMode}
          onModeChange={(mode) => setShowcaseMode(mode)}
          onSelectCreation={(creation) => setSelectedCreation(creation)}
          onOpenCustomOrder={handleOpenCustomOrder}
        />
        <AboutSection />
        <AtelierProcessSection onOpenCustomOrder={() => handleOpenCustomOrder()} />
        <CustomOrderSection prefilledCreationTitle={prefilledTitle} />
        <ContactSection onOpenCustomOrder={() => handleOpenCustomOrder()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Creation Detail Modal Dialog */}
      <CreationDetailModal
        creation={selectedCreation}
        onClose={() => setSelectedCreation(null)}
        onEnquire={handleEnquireFromModal}
      />
    </div>
  );
}
