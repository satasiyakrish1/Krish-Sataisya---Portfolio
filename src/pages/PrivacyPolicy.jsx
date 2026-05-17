import React from 'react';
import './PrivacyPolicy.css';

const SECTIONS = [
  {
    id: '01',
    title: 'Information Collection & Usage',
    body: 'When you share information with me—whether through contact forms, emails, or during a freelance/job assignment—your data is used solely for completing the services requested. I may collect basic personal information such as your name, email address, and files relevant to the project. These are used only to communicate, fulfill service commitments, and ensure quality deliverables. I do not collect sensitive personal details like Aadhaar numbers, banking credentials, or biometric information.',
  },
  {
    id: '02',
    title: 'Data Retention & Deletion',
    body: 'Once a project is completed and delivered, your data—including any files, access credentials, assets, or documents—is stored for up to 30 days. After this timeframe, all project-related information is permanently erased from my systems, including local machines and cloud storage. No backups are maintained or provided beyond this period. It is solely the client\'s responsibility to download and store deliverables safely. I do not offer data recovery or post-deletion file access.',
  },
  {
    id: '03',
    title: 'Confidentiality & Portfolio Usage',
    body: 'All shared content—whether private documentation, user databases, UI designs, or brand materials—is treated with the highest level of confidentiality. If you prefer a legally binding document, I am open to signing a Non-Disclosure Agreement (NDA) before project commencement. Unless bound by an NDA, I may showcase the final output of publicly visible work (excluding private data or proprietary code) in my portfolio.',
  },
  {
    id: '04',
    title: 'Project Agreements & Refund Policy',
    body: 'All freelance and job engagements are governed by mutual understanding unless a formal contract exists. Without a signed contract, I shall not be held liable for disputes or modifications post-project delivery. Please note that unless otherwise stated in writing, all services rendered are non-refundable once the work has been initiated or completed.',
  },
  {
    id: '05',
    title: 'Legal Compliance',
    body: 'This Privacy Policy adheres to applicable Indian laws, including the Information Technology Act, 2000, and upcoming provisions under the Personal Data Protection Bill. For U.S.-based clients, I also comply with the California Consumer Privacy Act (CCPA), the Federal Trade Commission Act (FTC Act), and the Computer Fraud and Abuse Act (CFAA). I follow global best practices in data minimization, usage limitation, and privacy protection across jurisdictions.',
  },
  {
    id: '06',
    title: 'Third-Party Services',
    body: 'In some cases, third-party services (e.g., Google Drive, Firebase, GitHub, Figma) may be used to collaborate on or host project files. While I ensure secure usage from my end, users are encouraged to review the privacy policies of these external services as I cannot control how they manage your data.',
  },
  {
    id: '07',
    title: 'Your Rights',
    body: 'As a user, you reserve the right to request early deletion of your data, inquire about what information is held during the active project window, or revoke access at any time—keeping in mind that this may affect the service timeline or outcome. I do not knowingly collect information from users under the age of 18. If you are a minor, please do not share any personal information through the website.',
  },
  {
    id: '08',
    title: 'Policy Updates',
    body: 'I may occasionally update this Privacy Policy to reflect changes in practices or legal requirements. Any modifications will be posted on this page with an updated date. By continuing to use this website or my services, you accept the revised policy in full.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pp-root">
      <div className="pp-bg-right" />
      <div className="pp-bg-blob" />
      <div className="noise" />

      <div className="container pp-wrap">
        {/* ── HERO ── */}
        <header className="pp-hero">
          <div className="pp-hero__top">
            <div className="pp-hero__badge">
              <span className="pp-hero__badge-dot" />
              Privacy Policy
            </div>
            <span className="pp-hero__date font-mono">Last Review: May 2026</span>
          </div>

          <h1 className="pp-hero__title">
            <span className="pp-hero__line pp-hero__line--1">Safe.</span>
            <span className="pp-hero__line pp-hero__line--2">Clear.</span>
            <span className="pp-hero__line pp-hero__line--3">Private.</span>
          </h1>

          <div className="pp-hero__sub font-body">
            At{' '}
            <a href="https://krishsatasiya.netlify.app" target="_blank" rel="noreferrer" className="pp-hero__link">
              krishsatasiya.netlify.app
            </a>
            , your privacy and trust are paramount. This policy outlines how your data is handled, used, and protected.
          </div>


        </header>

        {/* ── GRID ── */}
        <div className="pp-grid">
          {/* LEFT: Content */}
          <div className="pp-content">
            <div className="pp-quote">
              <div className="pp-quote__mark">"</div>
              <p className="pp-quote__text">
                I treat your project data with the same integrity I apply to my own code:{' '}
                <span className="pp-quote__accent">secure, clean, and private.</span>
              </p>
            </div>

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

          {/* RIGHT: Side Card */}
          <aside className="pp-aside">
            <div className="pp-card">
              <div className="pp-card__dot animate-ping-dot" />
              <span className="pp-card__label font-mono">Direct Communications</span>
              <h3 className="pp-card__title font-display">Reach Out About Data Concerns.</h3>

              <div className="pp-card__divider" />

              <a href="mailto:krishsatasiya44@gmail.com" className="pp-card__email-block">
                <span className="pp-card__email-label font-mono">Email</span>
                <span className="pp-card__email">krishsatasiya44@gmail.com</span>
              </a>

              <a href="https://krishsatasiya.netlify.app" target="_blank" rel="noreferrer" className="pp-card__email-block" style={{ marginTop: '1.5rem' }}>
                <span className="pp-card__email-label font-mono">Website</span>
                <span className="pp-card__email">krishsatasiya.netlify.app</span>
              </a>

              <div className="pp-card__footer">
                <div>
                  <span className="pp-card__footer-label font-mono">Identity</span>
                  <span className="pp-card__footer-name font-display">Krish Satasiya</span>
                </div>
                <div className="pp-card__live font-mono">
                  <span className="pp-card__live-dot" />
                  LIVE
                </div>
              </div>

              <div className="pp-card__bg-letter" aria-hidden="true">P</div>
            </div>

            <div className="pp-aside__note font-mono">
              <span className="pp-aside__note-icon">⚖</span>
              Governed by Indian IT Act, 2000 · CCPA · FTC Act · CFAA
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
