import React from 'react';
import './PrivacyPolicy.css';

const SECTIONS = [
  {
    id: '01',
    title: 'Agreement to Terms',
    body: 'By accessing this portfolio or engaging in professional freelance services with Krish Satasiya, you enter into a binding legal contract and agree to adhere to these Terms of Service. If you do not agree to these terms, you are prohibited from utilizing any deliverables or initiating any project engagement.',
  },
  {
    id: '02',
    title: 'Intellectual Property & Copyright Transfer',
    body: 'In accordance with the Indian Copyright Act, 1957, all custom source code, design layouts, digital assets, and documentation created remain the sole intellectual property of Krish Satasiya. Legal ownership and copyright transfer to the client occur exclusively upon the receipt and clearance of the final payment in full. Any unauthorized usage, staging, or deployment of the deliverables prior to final settlement is strictly prohibited and constitutes copyright infringement.',
  },
  {
    id: '03',
    title: 'Advance Deposit & Earnest Money Forfeiture',
    body: 'A 30% advance deposit is required before any project initiation. Pursuant to Section 74 of the Indian Contract Act, 1872, this deposit serves as earnest money and reasonable liquidated damages for reserved resource capacity. In the event of project cancellation, scope abandonment, or unilateral termination by the client, this 30% advance payment is strictly non-refundable and will be forfeited in full.',
  },
  {
    id: '04',
    title: 'Reciprocal Promises & Communication Delays',
    body: 'Under Section 54 of the Indian Contract Act, 1872, the developer’s performance is contingent upon the client fulfilling reciprocal promises, including providing feedback and assets. If the client fails to communicate, respond to queries, or answer phone calls for a period exceeding 3 consecutive business days, the developer reserves the right to immediately pause work, void all project deadlines, and apply a 10% delay surcharge to the final invoice to resume.',
  },
  {
    id: '05',
    title: 'Final Settlement Window & Service Suspension',
    body: 'The remaining balance must be cleared within 3 to 4 business days upon project completion or delivery. Under Section 55 of the Indian Contract Act, 1872, time is of the essence for payment obligations. Failure to settle the dues within this timeframe will lead to the immediate revocation of licenses, suspension of active hosting, removal of deployed source code, and a late fee surcharge.',
  },
  {
    id: '06',
    title: 'Governing Law & Dispute Resolution',
    body: 'These Terms of Service and all project engagements are governed by the laws of India, specifically the Indian Contract Act, 1872. Any legal disputes, claims, or arbitration arising from or related to the services shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.',
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
            <span className="pp-hero__date font-mono">Last Review: August 2026</span>
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
