import React, { useState, useEffect } from "react";

export const Navbar = ({ personal, activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          <a href="#hero" className="brand-logo" onClick={() => handleNavClick("#hero")}>
            <span>{personal.name}</span>
            <span className="brand-dot" aria-hidden="true"></span>
          </a>

          {/* Desktop Navigation */}
          <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mobile-only-resume" style={{ display: mobileMenuOpen ? "block" : "none" }}>
              <a
                href={personal.resumeUrl}
                download="Karan_Resume.pdf"
                className="btn btn-primary btn-sm"
                style={{ width: "100%", textAlign: "center" }}
              >
                Download Resume
              </a>
            </li>
          </ul>

          <div className="header-actions">
            <a
              href={personal.resumeUrl}
              download="Karan_Resume.pdf"
              className="btn btn-outline btn-sm desktop-only"
              title="Download Karan's Resume"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
