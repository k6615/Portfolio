import React from "react";

export const Footer = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="brand-logo" onClick={scrollToTop}>
              <span>{personal.name}</span>
              <span className="brand-dot" aria-hidden="true"></span>
            </a>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem" }}>
              {personal.role}
            </p>
          </div>

          <ul className="footer-links">
            <li><a href="#hero">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={scrollToTop}
              title="Scroll to top of page"
            >
              <span>Back to Top</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{personal.location}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
