import React from 'react';

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

const BAR_H = 56; // px — top bar height

export default function DocViewer({ type }) {
  const doc = DOCS[type];
  if (!doc) return null;

  // drive.google.com/file preview renders correctly on mobile browsers
  const previewUrl  = `https://drive.google.com/file/d/${doc.id}/preview`;
  const downloadUrl = `https://docs.google.com/document/d/${doc.id}/export?format=pdf`;

  return (
    <>
      <style>{`
        /* Reset html/body so mobile scroll works */
        html { height: 100%; }
        body { height: 100%; overflow: hidden; }

        /* Full-screen container below navbar */
        .dv-wrap {
          display: flex;
          flex-direction: column;
          background: #f0efe9;
          font-family: var(--font-body, sans-serif);

          /* navbar is 64px on mobile, 80px on lg */
          height: calc(100dvh - 64px);
          position: fixed;
          top: 64px;
          left: 0; right: 0; bottom: 0;
        }
        @media (min-width: 1024px) {
          .dv-wrap {
            top: 80px;
            height: calc(100dvh - 80px);
          }
        }

        /* ── Top Bar ── */
        .dv-bar {
          flex: 0 0 ${BAR_H}px;
          background: #fff;
          border-bottom: 2px solid #000;
          padding: 0 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          z-index: 10;
        }
        .dv-bar__left {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
        }
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
          font-size: 13px;
          font-weight: 800;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (min-width: 480px) { .dv-title { font-size: 15px; } }
        @media (min-width: 768px) { .dv-title { font-size: 17px; } }
        .dv-sub {
          font-size: 10px;
          color: #777;
          font-family: monospace;
          margin: 2px 0 0;
          white-space: nowrap;
        }
        .dv-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
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
          background: #000;
          color: #fff;
        }
        .dv-btn--yellow {
          background: #FFE600;
          color: #000;
        }
        @media (min-width: 480px) { .dv-btn { padding: 8px 16px; font-size: 11px; } }
        .dv-btn:hover  { transform: translate(-1px,-1px); box-shadow: 3px 3px 0 #000; }
        .dv-btn:active { transform: translate(1px,1px);   box-shadow: 1px 1px 0 #000; }

        /* ── Warning Banner ── */
        .dv-warn {
          background: #FFE600;
          border-bottom: 2px solid #000;
          padding: 10px 14px;
          font-size: 11px;
          font-weight: 800;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-family: monospace;
          z-index: 9;
        }
        .dv-warn a {
          color: #000;
          text-decoration: underline;
          font-weight: 900;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .dv-warn {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }

        /* ── Iframe ── */
        .dv-frame {
          flex: 1 1 0;
          overflow: hidden;
          position: relative;
        }
        .dv-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
      `}</style>

      <div className="dv-wrap">
        <div className="dv-bar">
          <div className="dv-bar__left">
            <span className="dv-tag">{doc.short}</span>
            <div style={{ minWidth: 0 }}>
              <h1 className="dv-title">Krish Satasiya — {doc.label}</h1>
              <p className="dv-sub">Live · Google Drive Preview</p>
            </div>
          </div>
          <div className="dv-actions">
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="dv-btn">
              ↓ Download
            </a>
          </div>
        </div>

        <div className="dv-frame">
          <iframe
            src={previewUrl}
            title={`Krish Satasiya ${doc.label}`}
            allow="autoplay"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
