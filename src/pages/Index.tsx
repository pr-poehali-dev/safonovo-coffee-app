import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import ChatWidget from "@/components/ChatWidget";

export default function Index() {
  const [activeSection, setActiveSection] = useState("Меню");
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const el = document.getElementById(section.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--coffee-milk)", fontFamily: "'Golos Text', sans-serif" }}>
      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onScrollTo={scrollTo}
        onOpenChat={() => setChatOpen(true)}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <HeroSection
        onScrollToMenu={() => scrollTo("Меню")}
        onOpenChat={() => setChatOpen(true)}
      />
      <ContentSections
        onOpenChat={() => setChatOpen(true)}
      />
      <ChatWidget
        chatOpen={chatOpen}
        onOpen={() => setChatOpen(true)}
        onClose={() => setChatOpen(false)}
      />
    </div>
  );
}
