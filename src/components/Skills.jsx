import React from "react";

export const Skills = ({ skills }) => {
  const renderIcon = (type) => {
    switch (type) {
      case "java":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        );
      case "c":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" y1="20" x2="15" y2="20"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
          </svg>
        );
      case "python":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1"></path>
            <path d="M8 8V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1"></path>
            <circle cx="9" cy="9" r="1"></circle>
            <circle cx="15" cy="15" r="1"></circle>
          </svg>
        );
      case "oop":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        );
      case "problem-solving":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          </svg>
        );
      case "dsa":
      default:
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Technical Competency</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Focused on mastering core programming languages and foundational computer science principles.
          </p>
        </div>

        <div className="skills-container">
          {/* Group 1: Programming Languages (Only Java, C, Python) */}
          <div className="skills-subgroup">
            <h3 className="skills-group-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span>Programming Languages</span>
            </h3>

            <div className="skills-grid">
              {skills.languages.map((lang) => (
                <div key={lang.id} className="skill-card">
                  <div className="skill-card-header">
                    <div className="skill-icon-wrapper" aria-hidden="true">
                      {renderIcon(lang.icon)}
                    </div>
                    {lang.badge && <span className="skill-tag-badge">{lang.badge}</span>}
                  </div>
                  <h4 className="skill-name">{lang.name}</h4>
                  <div className="skill-category">{lang.category}</div>
                  <p className="skill-desc">{lang.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Core Concepts */}
          <div className="skills-subgroup">
            <h3 className="skills-group-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Core Concepts &amp; Fundamentals</span>
            </h3>

            <div className="skills-grid">
              {skills.concepts.map((concept) => (
                <div key={concept.id} className="skill-card">
                  <div className="skill-card-header">
                    <div className="skill-icon-wrapper" aria-hidden="true">
                      {renderIcon(concept.icon)}
                    </div>
                    {concept.badge && (
                      <span
                        className={`skill-tag-badge ${concept.isLearning ? "badge-learning" : ""}`}
                      >
                        {concept.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="skill-name">{concept.name}</h4>
                  <div className="skill-category">{concept.category}</div>
                  <p className="skill-desc">{concept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
