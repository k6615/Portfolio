import React, { useState } from "react";

export const Contact = ({ personal, onShowToast }) => {
  const [linkedinUrl, setLinkedinUrl] = useState(() => {
    try {
      const saved = localStorage.getItem("karan_portfolio_linkedin");
      if (saved) return saved;
    } catch (e) {}
    return personal.linkedinUrl || "https://www.linkedin.com/in/karan-dhangar-4a07673a5";
  });

  const [isEditingLinkedIn, setIsEditingLinkedIn] = useState(false);
  const [tempLinkedIn, setTempLinkedIn] = useState(linkedinUrl);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    if (onShowToast) {
      onShowToast(`${label} copied to clipboard!`);
    }
  };

  const saveLinkedIn = (e) => {
    e.preventDefault();
    setLinkedinUrl(tempLinkedIn);
    try {
      localStorage.setItem("karan_portfolio_linkedin", tempLinkedIn);
    } catch (e) {}
    setIsEditingLinkedIn(false);
    if (onShowToast) {
      onShowToast("LinkedIn profile URL updated!");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Compose mailto link with pre-filled inputs
    const subject = encodeURIComponent(formState.subject || `Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Karan,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    if (onShowToast) {
      onShowToast("Opening email client...");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            I am actively seeking internship and entry-level software developer opportunities. Let&apos;s connect!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Details & Social Links */}
          <div className="contact-info-list">
            {/* Email Card */}
            <div className="contact-item-card">
              <div className="contact-item-left">
                <div className="contact-item-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Email Address</div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="contact-item-value"
                    title="Click to send an email"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <div className="contact-item-action">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleCopy(personal.email, "Email")}
                  title="Copy email to clipboard"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>Copy</span>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-item-card">
              <div className="contact-item-left">
                <div className="contact-item-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Phone Number</div>
                  <a
                    href={`tel:${personal.phone}`}
                    className="contact-item-value"
                    title="Click to call"
                  >
                    +91 {personal.phone}
                  </a>
                </div>
              </div>
              <div className="contact-item-action">
                <a
                  href={`tel:${personal.phone}`}
                  className="btn btn-secondary btn-sm"
                  title="Call number"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 7 23 1 17 1"></polyline>
                    <line x1="16" y1="8" x2="23" y2="1"></line>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Call</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-item-card">
              <div className="contact-item-left">
                <div className="contact-item-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Current Location</div>
                  <div className="contact-item-value">{personal.location}</div>
                </div>
              </div>
            </div>

            {/* Social Buttons: GitHub & LinkedIn (Keep LinkedIn Editable) */}
            <div className="social-links-box">
              <div className="social-links-title">Online Profiles &amp; Networks</div>
              <div className="social-buttons-grid">
                {/* GitHub Working Button */}
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="View GitHub Profile (opens in new tab)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                  </svg>
                  <span>GitHub Profile</span>
                </a>

                {/* LinkedIn Working Button */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="View LinkedIn Profile (opens in new tab)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              {/* Editable LinkedIn Trigger */}
              <div style={{ textAlign: "right" }}>
                <button
                  type="button"
                  className="linkedin-edit-trigger"
                  onClick={() => {
                    setTempLinkedIn(linkedinUrl);
                    setIsEditingLinkedIn(true);
                  }}
                >
                  ✏️ Edit LinkedIn Profile URL
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="contact-form-card">
            <div className="contact-form-header">
              <h3 className="contact-form-title">Send a Quick Message</h3>
              <p className="contact-form-subtitle">
                Have an inquiry or internship opportunity? Drop me a message below.
              </p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Hiring Manager"
                  className="form-control"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="form-control"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Internship / Project Opportunity"
                  className="form-control"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  className="form-control"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                <span>Send Message via Email</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Modal: Edit LinkedIn Profile URL */}
        {isEditingLinkedIn && (
          <div className="modal-backdrop" onClick={() => setIsEditingLinkedIn(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">Edit LinkedIn Profile URL</h3>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setIsEditingLinkedIn(false)}
                >
                  &times;
                </button>
              </div>

              <form onSubmit={saveLinkedIn}>
                <div className="form-group">
                  <label className="form-label">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    required
                    className="form-control"
                    placeholder="https://www.linkedin.com/in/your-profile"
                    value={tempLinkedIn}
                    onChange={(e) => setTempLinkedIn(e.target.value)}
                  />
                  <small style={{ color: "var(--text-muted)", display: "block", marginTop: "0.3rem" }}>
                    This updates your LinkedIn link across the portfolio and saves it in your browser.
                  </small>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsEditingLinkedIn(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save URL
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
