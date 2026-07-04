import React from 'react';
import './PrivacyPolicy.css';

const SECTIONS = [
  {
    id: '01',
    title: 'Agreement to Terms',
    body: 'By accessing or using the website krishsatasiya.netlify.app, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.',
  },
  {
    id: '02',
    title: 'Intellectual Property',
    body: 'All content, including design assets, project case studies, custom source code samples, and portfolio text, is the property of Krish Satasiya unless specified otherwise. Unauthorized duplication, distribution, or commercial reuse without explicit written consent is prohibited.',
  },
  {
    id: '03',
    title: 'Service Engagements & Agreements',
    body: 'Any freelance, consulting, or project contract entered into via Fiverr, Upwork, or direct email communication will be governed by its own respective contract or service agreements. The materials provided on this website are for informational and showcase purposes.',
  },
  {
    id: '04',
    title: 'Disclaimer of Liability',
    body: 'This website and its content are provided on an "as-is" and "as-available" basis without any warranties of any kind. Krish Satasiya shall not be held liable for any damages arising out of the use or inability to use the site or its project code samples.',
  },
  {
    id: '05',
    title: 'Governing Law',
    body: 'These terms shall be governed and construed in accordance with the laws of India, Gujarat, and applicable international laws. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat, India.',
  },
];

export default function TermsOfService() {
  return (
    <div className="pp-root">
      <div className="pp-bg-right" />
      <div className="pp-bg-blob" />
      <div className="noise" />

      <div className="container pp-wrap">
        <header className="pp-hero">
          <div className="pp-hero__top">
            <div className="pp-hero__badge">
              <span className="pp-hero__badge-dot" />
              Terms of Service
            </div>
            <span className="pp-hero__date font-mono">Last Review: May 2026</span>
          </div>

          <h1 className="pp-hero__title">
            <span className="pp-hero__line pp-hero__line--1">Rules.</span>
            <span className="pp-hero__line pp-hero__line--2">Scope.</span>
            <span className="pp-hero__line pp-hero__line--3">Terms.</span>
          </h1>

          <div className="pp-hero__sub font-body">
            Governing regulations and terms for using krishsatasiya.netlify.app.
          </div>
        </header>

        <div className="pp-grid">
          <div className="pp-content">
            <div className="pp-sections">
              {SECTIONS.map((s) => (
                <section key={s.id} className="pp-section">
                  <div className="pp-section__inner">
                    <span className="pp-section__id font-mono">{s.id}</span>
                    <div className="pp-section__body">
                      <h2 className="pp-section__title font-display">{s.title}</h2>
                      <p className="pp-section__text font-body">{s.body}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          <aside className="pp-aside">
            <div className="pp-card">
              <span className="pp-card__label font-mono">Legal Agreement</span>
              <h3 className="pp-card__title font-display">Terms of Service</h3>
              <div className="pp-card__divider" />
              <p className="font-body text-sm text-gray-400" style={{ lineHeight: '1.6' }}>
                These terms govern your access to and use of this portfolio website.
              </p>
              <div className="pp-card__footer">
                <div>
                  <span className="pp-card__footer-label font-mono">Owner</span>
                  <span className="pp-card__footer-name font-display">Krish Satasiya</span>
                </div>
              </div>
              <div className="pp-card__bg-letter" aria-hidden="true">T</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
