import React from "react";

export const Hero = ({ personal, hero }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Personal info, headline, description, location, and action buttons */}
          <div className="hero-content">
            <div className="hero-badge-pill" aria-label="Current status">
              <span className="status-dot" aria-hidden="true"></span>
              <span>{personal.availabilityBadge || "Open to Internships & Opportunities"}</span>
            </div>

            <p className="hero-name-intro">Hi, I am</p>
            <h1 className="hero-title">{personal.name}</h1>

            <p className="hero-role">{personal.role}</p>

            <blockquote className="hero-headline-quote">
              &ldquo;{hero.headline}&rdquo;
            </blockquote>

            <p className="hero-description">{hero.description}</p>

            {/* Location with map pin icon */}
            <div className="hero-location-bar">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{personal.location}</span>
            </div>

            {/* Three required action buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>

              <a
                href={personal.resumeUrl}
                download="Karan_Resume.pdf"
                className="btn btn-secondary"
                title="Download Karan's Resume"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>

              <a href="#contact" className="btn btn-outline">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame with Profile Image & Tech Highlights */}
          <div className="hero-visual-card">
            {/* Top Floating Badge */}
            <div className="hero-floating-pill pill-1">
              <span style={{ color: "#2563eb", fontWeight: "bold" }}>&lt;/&gt;</span>
              <span>Java &bull; C &bull; Python</span>
            </div>

            <div className="hero-avatar-frame">
              <img
                src={personal.avatarUrl}
                alt={`${personal.name} - Profile Photo`}
                className="hero-avatar-img"
                onError={(e) => {
                  // Elegant fallback if image fails to load
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.style.display = "flex";
                    e.currentTarget.parentElement.style.alignItems = "center";
                    e.currentTarget.parentElement.style.justifyContent = "center";
                    e.currentTarget.parentElement.innerHTML = `<div style="font-size: 5rem; font-weight: 800; color: #2563eb;">K</div>`;
                  }
                }}
              />
              <div className="hero-avatar-badge">
                <div className="hero-badge-title">
                  <span>Aspiring Developer</span>
                  <span style={{ color: "#16a34a" }}>&bull; Active</span>
                </div>
                <p className="hero-badge-subtitle">Focus: Core Programming &amp; Algorithms</p>
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="hero-floating-pill pill-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
