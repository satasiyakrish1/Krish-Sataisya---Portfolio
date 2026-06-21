import React from 'react';

const DOCS = {
  cv: {
    label: 'Curriculum Vitae',
    short: 'CV',
    downloadUrl: 'https://docs.google.com/document/d/1nkAFtJFPve3sKFBC6_5Cf1w4AL847iJ5/export?format=pdf',
  },
  resume: {
    label: 'Resume',
    short: 'Resume',
    variants: [
      {
        key: 'creative',
        label: 'Creative Field',
        emoji: '🎨',
        desc: 'UI/UX & Design focused resume',
        downloadUrl: 'https://docs.google.com/document/d/1AO1doPUlODgsVvSWkFkdwr8xTnjUOGXk/export?format=pdf',
      },
      {
        key: 'tech',
        label: 'Tech Field',
        emoji: '💻',
        desc: 'Full Stack MERN & Dev focused resume',
        downloadUrl: 'https://docs.google.com/document/d/18QZvIwIryJjHsif7rSN893-Y7M6pE-EG/export?format=pdf',
      },
    ],
  },
};

const styles = `
  .dv-page {
    min-height: calc(100dvh - 64px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fafafa;
    font-family: 'Outfit', sans-serif;
    padding: 48px 20px;
  }
  @media (min-width: 1024px) {
    .dv-page { min-height: calc(100dvh - 80px); }
  }

  .dv-inner {
    width: 100%;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* ── Top label strip ── */
  .dv-label-strip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
  }
  .dv-pill {
    display: inline-block;
    padding: 3px 10px;
    font-size: 10px;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    background: #4452FF;
    color: #fff;
    border: 1.5px solid #000;
    box-shadow: 2px 2px 0 #000;
  }
  .dv-pill-line {
    font-size: 10px;
    font-family: 'JetBrains Mono', monospace;
    color: #a3a3a3;
    letter-spacing: 0.08em;
  }

  /* ── Heading ── */
  .dv-heading {
    font-size: clamp(28px, 6vw, 42px);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1;
    color: #000;
    margin: 0 0 6px;
  }
  .dv-heading span {
    color: #4452FF;
  }
  .dv-subtext {
    font-size: 14px;
    color: #737373;
    margin: 0 0 32px;
    font-weight: 500;
    line-height: 1.5;
  }

  /* ── Divider ── */
  .dv-divider {
    border: none;
    border-top: 1.5px solid #000;
    margin: 0 0 28px;
  }

  /* ── Section label ── */
  .dv-section-lbl {
    font-size: 10px;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #a3a3a3;
    margin-bottom: 12px;
  }

  /* ── Buttons ── */
  .dv-btn-group {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1.5px solid #000;
    box-shadow: 4px 4px 0 #000;
  }

  .dv-dl-btn {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 20px;
    text-decoration: none;
    cursor: pointer;
    background: #fff;
    color: #000;
    font-family: 'Outfit', sans-serif;
    border: none;
    border-bottom: 1.5px solid #000;
    transition: background 0.12s;
    position: relative;
  }
  .dv-dl-btn:last-child { border-bottom: none; }
  .dv-dl-btn:hover { background: #f5f5ff; }
  .dv-dl-btn:active { background: #eaebff; }

  .dv-dl-btn__icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    background: #f5f5f5;
    border: 1.5px solid #000;
    flex-shrink: 0;
  }

  .dv-dl-btn--creative .dv-dl-btn__icon {
    background: #eaebff;
    border-color: #4452FF;
  }
  .dv-dl-btn--tech .dv-dl-btn__icon {
    background: #f5f5f5;
    border-color: #000;
  }
  .dv-dl-btn--cv .dv-dl-btn__icon {
    background: #f5f5f5;
    border-color: #000;
  }

  .dv-dl-btn__body { flex: 1; }
  .dv-dl-btn__name {
    font-size: 15px;
    font-weight: 800;
    display: block;
    letter-spacing: -0.01em;
    color: #000;
  }
  .dv-dl-btn--creative .dv-dl-btn__name { color: #4452FF; }

  .dv-dl-btn__desc {
    font-size: 11px;
    color: #737373;
    display: block;
    margin-top: 2px;
    font-weight: 500;
    font-family: 'JetBrains Mono', monospace;
  }

  .dv-dl-btn__badge {
    font-size: 9px;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 2px 7px;
    border: 1.5px solid #000;
    background: #000;
    color: #fff;
    flex-shrink: 0;
  }
  .dv-dl-btn--creative .dv-dl-btn__badge {
    background: #4452FF;
    border-color: #4452FF;
  }

  /* ── Footer note ── */
  .dv-note {
    margin-top: 14px;
    font-size: 10px;
    font-family: 'JetBrains Mono', monospace;
    color: #a3a3a3;
    letter-spacing: 0.06em;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .dv-note::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #4452FF;
    flex-shrink: 0;
  }
`;

function PageShell({ badge, name, sub, children }) {
  return (
    <>
      <style>{styles}</style>
      <div className="dv-page">
        <div className="dv-inner">
          <div className="dv-label-strip">
            <span className="dv-pill">{badge}</span>
            <span className="dv-pill-line">krishsatasiya.netlify.app</span>
          </div>
          <h1 className="dv-heading">
            Krish <span>Satasiya</span>
          </h1>
          <p className="dv-subtext">{sub}</p>
          <hr className="dv-divider" />
          <p className="dv-section-lbl">Choose to Download</p>
          {children}
          <p className="dv-note">PDF · Instant Download · No Preview Required</p>
        </div>
      </div>
    </>
  );
}

export default function DocViewer({ type }) {
  const doc = DOCS[type];
  if (!doc) return null;

  if (type === 'resume') {
    return (
      <PageShell
        badge="Resume"
        sub="Select your field and download the matching resume instantly."
      >
        <div className="dv-btn-group">
          {doc.variants.map((v) => (
            <a
              key={v.key}
              href={v.downloadUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={`dv-dl-btn dv-dl-btn--${v.key}`}
            >
              <span className="dv-dl-btn__icon">{v.emoji}</span>
              <span className="dv-dl-btn__body">
                <span className="dv-dl-btn__name">{v.label} Resume</span>
                <span className="dv-dl-btn__desc">{v.desc}</span>
              </span>
              <span className="dv-dl-btn__badge">↓ PDF</span>
            </a>
          ))}
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      badge="CV"
      sub="Download my complete Curriculum Vitae — academic & professional record."
    >
      <div className="dv-btn-group">
        <a
          href={doc.downloadUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="dv-dl-btn dv-dl-btn--cv"
        >
          <span className="dv-dl-btn__icon">📄</span>
          <span className="dv-dl-btn__body">
            <span className="dv-dl-btn__name">Curriculum Vitae</span>
            <span className="dv-dl-btn__desc">Full academic & professional record</span>
          </span>
          <span className="dv-dl-btn__badge">↓ PDF</span>
        </a>
      </div>
    </PageShell>
  );
}
