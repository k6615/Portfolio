import React, { useState, useEffect } from "react";
import { portfolioData } from "./data/portfolioData.js";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Certifications } from "./components/Certifications.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "certifications", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Navigation Bar */}
      <Navbar
        personal={portfolioData.personal}
        activeSection={activeSection}
        onNavigate={(href) => {
          const id = href.replace("#", "");
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      <main>
        {/* Hero Section */}
        <Hero personal={portfolioData.personal} hero={portfolioData.hero} />

        {/* Technical Skills Section */}
        <Skills skills={portfolioData.skills} />

        {/* Projects Section */}
        <Projects projects={portfolioData.projects} />

        {/* Certifications Section */}
        <Certifications initialCertifications={portfolioData.certifications} />

        {/* Contact Section */}
        <Contact personal={portfolioData.personal} onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="alert">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
