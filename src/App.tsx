import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { CustomCursor } from './components/ui/CustomCursor';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { TechnicalFocusSection } from './components/sections/TechnicalFocusSection';
import { ContactSection } from './components/sections/ContactSection';

import { useLenis } from './hooks/useLenis';
import { useActiveSection } from './hooks/useActiveSection';

export function App() {
  // Initialize Lenis Smooth Scroll
  useLenis();

  // Track active section for top Navbar
  const sectionIds = ['hero', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-background text-zinc-100 font-sans selection:bg-blue-500/30 selection:text-blue-200 antialiased relative">
      {/* Scroll Progress Bar at top edge */}
      <ScrollProgress />

      {/* Interactive Cursor Spotlight */}
      <CustomCursor />

      {/* Glass Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <TechnicalFocusSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
