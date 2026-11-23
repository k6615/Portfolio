import React, { useState, useEffect } from "react";

export const Certifications = ({ initialCertifications, onOpenModal }) => {
  const [certs, setCerts] = useState(() => {
    // Load persisted edits from localStorage if available
    try {
      const saved = localStorage.getItem("karan_portfolio_certs");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not read localStorage for certs", e);
    }
    return initialCertifications;
  });

  const [activeCertForEdit, setActiveCertForEdit] = useState(null);
  const [activeCertForPreview, setActiveCertForPreview] = useState(null);

  // Sync state changes to localStorage
  const updateCert = (id, updatedFields) => {
    const updated = certs.map((cert) => (cert.id === id ? { ...cert, ...updatedFields } : cert));
    setCerts(updated);
    try {
      localStorage.setItem("karan_portfolio_certs", JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not persist cert to localStorage", e);
    }
  };

  const handleImageUpload = (certId, e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result;
      updateCert(certId, { imageUrl: base64Data });
    };
    reader.readAsDataURL(file);
  };

  const handleResetCerts = () => {
    if (window.confirm("Reset certifications to default details?")) {
      setCerts(initialCertifications);
      try {
        localStorage.removeItem("karan_portfolio_certs");
      } catch (e) {}
    }
  };

  return (
    <section id="certifications" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Verified Credentials</div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional skill validations and recognized technical certifications.
          </p>
        </div>

        <div className="certs-grid">
          {certs.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-header">
                <div className="cert-icon-box" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <span className={`cert-status-badge ${cert.status === "Verified" ? "verified" : ""}`}>
                  {cert.status || "Assessment Passed"}
                </span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>

              {/* Issuer Row with Edit option for 3rd cert or any cert */}
              <div className="cert-issuer-row">
                <span className="cert-issuer">
                  {cert.issuer || "Issuing Organization"}
                </span>
                {cert.isIssuerEditable && (
                  <button
                    type="button"
                    className="cert-issuer-editable-btn"
                    onClick={() => setActiveCertForEdit(cert)}
                    title="Click to edit issuing organization"
                  >
                    (Edit Organization)
                  </button>
                )}
              </div>

              <p className="cert-description">{cert.description}</p>

              {/* Certificate Image or Upload Preview Box */}
              <div className="cert-preview-box">
                {cert.imageUrl ? (
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.title} Certificate`}
                    className="cert-preview-img"
                    onClick={() => setActiveCertForPreview(cert)}
                    title="Click to view full certificate"
                  />
                ) : (
                  <div className="cert-doc-preview" onClick={() => setActiveCertForEdit(cert)} style={{ cursor: "pointer" }} title="Click to view details">
                    <div className="cert-doc-header">
                      <svg className="cert-doc-seal" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                      <span>Official Certificate</span>
                    </div>
                    <div className="cert-doc-name">Karan</div>
                    <div className="cert-doc-title">{cert.title}</div>
                    <div className="cert-doc-org">{cert.issuer}</div>
                    <div className="cert-doc-footer">Click &apos;Upload Image&apos; to attach document</div>
                  </div>
                )}
              </div>

              {/* Action Buttons: Upload image & Verify Link & Edit Details */}
              <div className="cert-actions-row">
                <div className="cert-action-btn-group">
                  {/* File Upload Hidden Input */}
                  <label className="cert-upload-btn-label" style={{ flex: 1, justifyContent: "center" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    <span>{cert.imageUrl ? "Change Image" : "Upload Image"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handleImageUpload(cert.id, e)}
                    />
                  </label>

                  {/* Edit Details Trigger */}
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setActiveCertForEdit(cert)}
                    title="Edit verification link and details"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                    <span>Edit</span>
                  </button>
                </div>

                {/* Working Verification Link Button */}
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ width: "100%" }}
                  >
                    <span>Verify Credential</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    style={{ width: "100%" }}
                    onClick={() => setActiveCertForEdit(cert)}
                  >
                    <span>+ Add Verification URL</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Edit Certificate Details (Issuing Org & Verification URL) */}
        {activeCertForEdit && (
          <div className="modal-backdrop" onClick={() => setActiveCertForEdit(null)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">Edit Certificate Details</h3>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveCertForEdit(null)}
                >
                  &times;
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setActiveCertForEdit(null);
                }}
              >
                <div className="form-group">
                  <label className="form-label">Certificate Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={activeCertForEdit.title}
                    onChange={(e) => {
                      const val = e.target.value;
                      setActiveCertForEdit({ ...activeCertForEdit, title: val });
                      updateCert(activeCertForEdit.id, { title: val });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Issuing Organization
                    {activeCertForEdit.isIssuerEditable && (
                      <span style={{ fontSize: "0.8rem", color: "#2563eb", marginLeft: "0.5rem" }}>
                        (Editable as requested)
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={activeCertForEdit.issuer}
                    placeholder="e.g. Google Cloud, Coursera, HackerRank"
                    onChange={(e) => {
                      const val = e.target.value;
                      setActiveCertForEdit({ ...activeCertForEdit, issuer: val });
                      updateCert(activeCertForEdit.id, { issuer: val });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Credential Verification URL</label>
                  <input
                    type="url"
                    className="form-control"
                    value={activeCertForEdit.credentialUrl || ""}
                    placeholder="https://example.com/verify/..."
                    onChange={(e) => {
                      const val = e.target.value;
                      setActiveCertForEdit({ ...activeCertForEdit, credentialUrl: val });
                      updateCert(activeCertForEdit.id, { credentialUrl: val });
                    }}
                  />
                  <small style={{ color: "var(--text-muted)", display: "block", marginTop: "0.3rem" }}>
                    Paste your HackerRank or course verification URL.
                  </small>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setActiveCertForEdit(null)}
                  >
                    Done
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: High-resolution Certificate Preview */}
        {activeCertForPreview && (
          <div className="modal-backdrop" onClick={() => setActiveCertForPreview(null)}>
            <div className="modal-container" style={{ maxWidth: "720px" }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">{activeCertForPreview.title}</h3>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveCertForPreview(null)}
                >
                  &times;
                </button>
              </div>
              <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <img
                  src={activeCertForPreview.imageUrl}
                  alt={activeCertForPreview.title}
                  style={{ width: "100%", maxHeight: "500px", objectFit: "contain", borderRadius: "8px" }}
                />
              </div>
              <div className="modal-actions">
                {activeCertForPreview.credentialUrl && (
                  <a
                    href={activeCertForPreview.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Open Verification Page
                  </a>
                )}
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setActiveCertForPreview(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
