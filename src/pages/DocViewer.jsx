import React, { useState, useEffect } from 'react';

const DOCS = {
  cv: {
    id: '1nkAFtJFPve3sKFBC6_5Cf1w4AL847iJ5',
    label: 'Curriculum Vitae',
    short: 'CV',
  },
  resume: {
    id: '18QZvIwIryJjHsif7rSN893-Y7M6pE-EG',
    label: 'Resume',
    short: 'Resume',
  },
};

export default function DocViewer({ type }) {
  const doc = DOCS[type];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!doc) return null;

  const previewUrl  = `https://docs.google.com/document/d/${doc.id}/preview`;
  const downloadUrl = `https://docs.google.com/document/d/${doc.id}/export?format=pdf`;
  const openUrl     = `https://docs.google.com/document/d/${doc.id}/view`;
  // Google Docs Viewer — works better on mobile
  const mobileUrl   = `https://docs.google.com/gview?embedded=true&url=https://docs.google.com/document/d/${doc.id}/export?format=pdf`;

  return (
    <>
      <style>{`
        .dv-wrap {
          position: fixed;
          top: 64px;
          left: 0; right: 0; bottom: 0;
          display: flex;
          flex-direction: column;
          background: #f0efe9;
          font-family: var(--font-body, sans-serif);
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .dv-wrap { top: 80px; }
        }

        /* ── Top Bar ── */
        .dv-bar {
          flex-shrink: 0;
          background: #fff;
          border-bottom: 2px solid #000;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .dv-bar__left { display: flex; align-items: center; gap: 10px; min-width: 0; }
        .dv-tag {
          flex-shrink: 0;
          padding: 3px 10px;
          font-size: 10px;
          font-weight: 800;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          border: 2px solid #000;
          background: #000;
          color: #fff;
          box-shadow: 2px 2px 0 #4452FF;
        }
        .dv-title {
          font-size: 14px;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (min-width: 480px) { .dv-title { font-size: 16px; } }
        .dv-sub {
          font-size: 10px;
          color: #777;
          font-family: monospace;
          margin: 1px 0 0;
        }
        .dv-actions { display: flex; gap: 6px; flex-shrink: 0; }
        .dv-btn {
          padding: 7px 12px;
          font-size: 10px;
          font-weight: 800;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 2px solid #000;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.1s;
          box-shadow: 2px 2px 0 #000;
          white-space: nowrap;
        }
        @media (min-width: 480px) { .dv-btn { padding: 8px 16px; font-size: 11px; } }
        .dv-btn:hover  { transform: translate(-1px,-1px); box-shadow: 3px 3px 0 #000; }
        .dv-btn:active { transform: translate(1px,1px);  box-shadow: 1px 1px 0 #000; }
        .dv-btn--dark  { background: #000; color: #fff; }
        .dv-btn--light { background: #fff; color: #000; }

        /* ── Iframe Container ── */
        .dv-frame {
          flex: 1;
          overflow: hidden;
          position: relative;
          -webkit-overflow-scrolling: touch;
        }
        .dv-frame iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ── Mobile Fallback Card ── */
        .dv-mobile-fallback {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          gap: 20px;
          text-align: center;
          background: #f0efe9;
        }
        .dv-mobile-icon {
          width: 72px;
          height: 72px;
          background: #000;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 4px 4px 0 #4452FF;
          font-size: 32px;
        }
        .dv-mobile-title {
          font-size: 22px;
          font-weight: 800;
          margin: 0 0 6px;
        }
        .dv-mobile-desc {
          font-size: 14px;
          color: #555;
          margin: 0;
          max-width: 280px;
          line-height: 1.6;
        }
        .dv-mobile-btns {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          max-width: 280px;
          margin-top: 8px;
        }
        .dv-mobile-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 20px;
          font-size: 13px;
          font-weight: 800;
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 2px solid #000;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.1s;
          box-shadow: 3px 3px 0 #000;
        }
        .dv-mobile-btn:hover  { transform: translate(-1px,-1px); box-shadow: 4px 4px 0 #000; }
        .dv-mobile-btn:active { transform: translate(1px,1px);  box-shadow: 1px 1px 0 #000; }
        .dv-mobile-btn--dark  { background: #000; color: #fff; }
        .dv-mobile-btn--blue  { background: #4452FF; color: #fff; border-color: #4452FF; box-shadow: 3px 3px 0 #000; }
        .dv-mobile-btn--light { background: #fff; color: #000; }
        .dv-mobile-note {
          font-size: 11px;
          color: #999;
          font-family: monospace;
          margin-top: 4px;
        }

        /* ── Embedded PDF on mobile (scrollable) ── */
        .dv-frame--mobile {
          flex: 1;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          position: relative;
        }
        .dv-frame--mobile iframe {
          display: block;
          width: 100%;
          height: 100%;
          min-height: calc(100vh - 120px);
          border: none;
        }
      `}</style>

      <div className="dv-wrap">
        {/* Bar */}
        <div className="dv-bar">
          <div className="dv-bar__left">
            <span className="dv-tag">{doc.short}</span>
            <div style={{ minWidth: 0 }}>
              <h1 className="dv-title">Krish Satasiya — {doc.label}</h1>
              <p className="dv-sub">Live · Auto-updates from Google Docs</p>
            </div>
          </div>
          <div className="dv-actions">
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="dv-btn dv-btn--dark">
              ↓ {isMobile ? 'PDF' : 'Download PDF'}
            </a>
          </div>
        </div>

        {/* Content */}
        {isMobile ? (
          <div className="dv-mobile-fallback">
            <div className="dv-mobile-icon">
              <span>📄</span>
            </div>
            <div>
              <p className="dv-mobile-title">{doc.label}</p>
              <p className="dv-mobile-desc">
                Open or download to view the full {doc.label} in your preferred app.
              </p>
            </div>
            <div className="dv-mobile-btns">
              <a href={openUrl} target="_blank" rel="noopener noreferrer" className="dv-mobile-btn dv-mobile-btn--blue">
                🔗 Open in Google Docs
              </a>
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="dv-mobile-btn dv-mobile-btn--dark">
                ↓ Download PDF
              </a>
            </div>
            <p className="dv-mobile-note">Tap "Open in Google Docs" for the best experience</p>
          </div>
        ) : (
          <div className="dv-frame">
            <iframe
              src={previewUrl}
              title={`Krish Satasiya ${doc.label}`}
              allow="autoplay"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        )}
      </div>
    </>
  );
}
