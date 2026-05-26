import React from 'react';
import './Prescripto.css';

const Ico = {
  User:     () => <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Search:   () => <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Chart:    () => <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  Bell:     () => <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  Lock:     () => <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="0"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>,
  File:     () => <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>,
  Mail:     () => <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Shield:   () => <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Card:     () => <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="0"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
};

const ROLES = [
  { icon: 'User', name: 'Job Seeker', items: ['Profile & resume builder', 'Advanced job search', 'One-click apply', 'Application tracking', 'Skill assessment tests', 'Interview scheduling', 'Job alerts & notifications', 'Saved jobs & collections'] },
  { icon: 'Search', name: 'Admin (Recruiter) Panel', items: ['Job lifecycle management', 'ATS candidate pipeline', 'Application status control', 'Visibility toggling', 'Company branding', 'Resume screening', 'Bulk outreach tools', 'Analytics dashboard'] },
  { icon: 'Shield', name: 'Company Portal', items: ['Company profile management', 'Multi-seat recruiter access', 'Custom logo & branding', 'Hiring analytics', 'Job slot management', 'Brand visibility tools', 'Candidate CRM', 'API integrations'] },
  { icon: 'Chart', name: 'System Admin', items: ['Platform-wide analytics', 'User & company moderation', 'Job approval workflow', 'Revenue & billing mgmt', 'Sentry error monitoring', 'Webhook verification', 'Feature flag controls', 'Audit logs'] },
];

const FEATURES = [
  { no: '01', icon: 'Search', name: 'Job Lifecycle',        desc: 'Recruiters can create, publish, and manage job listings with granular details including salary ranges, experience levels, and specific categories.' },
  { no: '02', icon: 'File',   name: 'ATS Pipeline',         desc: 'Centralized view of all candidates who have applied for specific roles, enabling recruiters to review resumes and candidate profiles directly.' },
  { no: '03', icon: 'User',   name: 'Status Control',       desc: 'Allows recruiters to update application statuses (Pending, Accepted, Rejected) with real-time feedback and candidate notifications.' },
  { no: '04', icon: 'Bell',   name: 'Visibility Toggling',  desc: 'Recruiters can instantly hide or show job listings on the public job board based on hiring needs with a single click.' },
  { no: '05', icon: 'Chart',  name: 'Company Branding',     desc: 'Profile management for companies to maintain their identity with custom logos, descriptions, and branded job listings.' },
  { no: '06', icon: 'Lock',   name: 'Auth Security',        desc: 'Full authentication suite powered by Clerk with multi-role access control, secure session management, and encrypted data handling.' },
  { no: '07', icon: 'Mail',   name: 'Workflow Automation',  desc: 'Seamless automation using n8n for background tasks, candidate emails, and webhook-triggered events for efficient hiring.' },
  { no: '08', icon: 'Card',   name: 'Media Management',     desc: 'Secure image and resume uploads handled by Cloudinary with optimized delivery and persistent storage for candidate assets.' },
];

const INTEGRATIONS = [
  { name: 'Clerk',            purpose: 'Authentication & User Management' },
  { name: 'Cloudinary',       purpose: 'Resume & Image Storage' },
  { name: 'Sentry',           purpose: 'Error Tracking & Monitoring' },
  { name: 'Svix',             purpose: 'Clerk Webhook Verification' },
  { name: 'n8n',              purpose: 'Workflow Automation' },
  { name: 'MongoDB Atlas',    purpose: 'Primary Cloud Database' },
  { name: 'Vercel',           purpose: 'Frontend & Backend Deployment' },
  { name: 'Node.js/Express',  purpose: 'Core Backend Architecture' },
  { name: 'React (Vite)',     purpose: 'High-performance Frontend' },
  { name: 'Tailwind CSS',     purpose: 'Utility-first Styling' },
];

const TECH = [
  'React (Vite)', 'Node.js', 'Express.js', 'MongoDB', 'Clerk Auth',
  'Tailwind CSS', 'Cloudinary', 'Sentry', 'Svix', 'n8n Automation',
  'Axios', 'React Toastify', 'Quill Editor', 'Moment.js', 'Multer',
];

export default function ProjectHirix() {
  return (
    <div className="pc bg-white min-h-screen">
      <div style={{ height: '1rem' }} />

      <div className="pc-breadcrumb-bar">
        <a href="/projects">Work</a>
        <span className="pc-breadcrumb-sep">/</span>
        <span>Hirix</span>
      </div>

      <section className="pc-hero">
        <div className="pc-hero__inner">
          <div className="pc-hero__row1">
            <div className="pc-hero__logo-badge">
              <div className="pc-hero__logo-box" style={{ background: '#000' }}>
                <span className="pc-hero__logo-letter">Hi</span>
                <div className="pc-hero__logo-dot" />
              </div>
              <div>
                <span className="pc-hero__logo-name">Hirix</span>
                <span className="pc-hero__logo-sub">Recruitment Platform</span>
              </div>
            </div>
            <div className="pc-hero__row1-right">
              <span className="pc-hero__case-tag" style={{ color: '#000', borderColor: '#000' }}>Case Study</span>
              <span className="pc-hero__year-pill">2024</span>
            </div>
          </div>

          <div className="pc-hero__rule" />

          <div className="pc-hero__top">
            <div className="pc-hero__title-wrap">
              <h1 className="pc-hero__title">
                <span className="pc-hero__title-line1">Smart</span>
                <span className="pc-hero__title-line2">Hiring</span>
                <span className="pc-hero__title-accent" style={{ color: '#000' }}>Platform.</span>
              </h1>
              <div className="pc-hero__tags-row">
                {['AI Recruitment', 'MERN Stack', 'ATS System', 'Job Portal', 'SaaS', 'Multi-role'].map(t => (
                  <span key={t} className="pc-hero__inline-tag" style={{ '--hover-bg': '#000' }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="pc-hero__meta">
              <div className="pc-meta-block">
                <span className="pc-meta-label">Project Type</span>
                <span className="pc-meta-value">Personal Project</span>
              </div>
              <div className="pc-meta-block">
                <span className="pc-meta-label">Platform</span>
                <span className="pc-meta-value">Recruitment SaaS</span>
              </div>
              <div className="pc-meta-block">
                <span className="pc-meta-label">My Role</span>
                <span className="pc-meta-value">Full Stack Dev + Architect</span>
              </div>
              <div className="pc-meta-block">
                <span className="pc-meta-label">Year</span>
                <span className="pc-meta-value">2024</span>
              </div>
              <div className="pc-meta-block" style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                <a href="https://hirix-4y1n-i4wuuk63c-krishsatasiya-team.vercel.app/" target="_blank" rel="noopener noreferrer" className="pc-hero__cta"
                  onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; }}
                >Visit Live ↗</a>
                <a href="https://github.com/satasiyakrish1/Hirix" target="_blank" rel="noopener noreferrer" className="pc-hero__cta-ghost"
                  onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
                >GitHub →</a>
              </div>
            </div>
          </div>

          <div className="pc-hero__rule" />

          <div className="pc-hero__image-wrap">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" alt="Hirix Recruitment Platform" />
          </div>
        </div>
      </section>

      <section className="pc-overview">
        <div className="pc-overview__inner">
          <div className="pc-overview__left">
            <span className="pc-eyebrow" style={{ color: '#000' }}>01 / Overview</span>
            <h2 className="pc-section-title">Your Smart<br />Hiring<br />Engine.</h2>
            <p className="pc-body-text">
              The Admin Panel provides recruiters with a centralized dashboard to post jobs, manage listings, and track applicants. Recruiters can review candidate resumes, update application statuses (Accepted/Rejected), and toggle job visibility in real-time.
            </p>
            <p className="pc-body-text">
              It includes full authentication, company profile branding, and a streamlined interface for efficient end-to-end hiring management, ensuring a professional experience for both companies and candidates.
            </p>
          </div>
          <div className="pc-overview__right">
            <span className="pc-eyebrow" style={{ color: '#000' }}>Key Deliverables</span>
            <ul className="pc-service-list">
              {[
                'Job Lifecycle Management', 'Applicant Tracking System (ATS)',
                'Application Status Control', 'Visibility Toggling System',
                'Company Profile Branding', 'Clerk Authentication & Webhooks',
                'Cloudinary Media Storage', 'Sentry Error Monitoring',
                'n8n Workflow Automation', 'React (Vite) Frontend',
                'Node.js & Express Backend', 'MongoDB Database Persistence',
              ].map(s => <li key={s}><span className="pc-service-dot" style={{ background: '#000' }} />{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="pc-stats">
        <div className="pc-stats__inner">
          {[
            { num: '15', unit: '+', label: 'Third-party integrations' },
            { num: '4',  unit: '',  label: 'User portals built' },
            { num: '99', unit: '%', label: 'Match accuracy target' },
            { num: '40', unit: '+', label: 'Core features shipped' },
          ].map((s, i) => (
            <div key={i} className="pc-stat">
              <span className="pc-stat__num">{s.num}<span style={{ color: '#fff' }}>{s.unit}</span></span>
              <span className="pc-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pc-split">
        <div className="pc-split__inner">
          <div className="pc-split__text">
            <span className="pc-eyebrow" style={{ color: '#000' }}>02 / The Challenge</span>
            <h2 className="pc-section-title">Broken<br />Hiring Is<br />Expensive.</h2>
            <p className="pc-body-text">Recruiters drowning in resumes, job seekers lost in black-hole applications, and no unified system to bridge them. Legacy job boards commoditize listings without intelligence.</p>
            <p className="pc-body-text">The engineering challenge: build a real-time, multi-tenant platform where candidates, recruiters, and companies share one data layer — with AI matching, live ATS updates, and billing — at scale.</p>
          </div>
          <div className="pc-split__image">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Recruitment challenge" />
          </div>
        </div>
      </section>

      <section className="pc-split">
        <div className="pc-split__inner pc-split--rev">
          <div className="pc-split__text">
            <span className="pc-eyebrow" style={{ color: '#000' }}>03 / The Solution</span>
            <h2 className="pc-section-title">One Platform.<br />Four Portals.<br />Zero Friction.</h2>
            <p className="pc-body-text">Hirix is built on the MERN stack with Algolia powering semantic search, OpenAI API handling resume intelligence, and a real-time ATS kanban synced via WebSockets.</p>
            <p className="pc-body-text">Recruiters get a full pipeline management suite. Job seekers get AI-matched opportunities. Companies get branded employer pages with analytics — all under one authenticated roof.</p>
          </div>
          <div className="pc-split__image">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Hirix solution" />
          </div>
        </div>
      </section>

      <section className="pc-roles">
        <div className="pc-roles__inner">
          <div className="pc-roles__header">
            <h2 className="pc-features__title">Multi-Role<br />Architecture</h2>
            <span className="pc-eyebrow" style={{ marginBottom: '1.5rem', color: '#000' }}>04 / Portals</span>
          </div>
          <div className="pc-roles__grid">
            {ROLES.map(r => {
              const IcoComp = Ico[r.icon];
              return (
                <div key={r.name} className="pc-role-card">
                  <div className="pc-role-icon" style={{ background: '#000' }}><IcoComp /></div>
                  <h3 className="pc-role-name">{r.name}</h3>
                  <ul className="pc-role-list">{r.items.map(i => <li key={i}>{i}</li>)}</ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pc-showcase">
        <div className="pc-showcase__inner">
          <span className="pc-showcase__label">Candidate Dashboard — Job Search & Application Tracker</span>
          <div className="pc-showcase__screen">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop" alt="Hirix dashboard" />
          </div>
          <div className="pc-showcase__two">
            <div className="pc-showcase__screen">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop" alt="Recruiter ATS" style={{ height: '260px', objectFit: 'cover' }} />
            </div>
            <div className="pc-showcase__screen">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" alt="Analytics" style={{ height: '260px', objectFit: 'cover' }} />
            </div>
          </div>
          <span className="pc-showcase__caption">Recruiter Portal — ATS Kanban &nbsp;&nbsp;&nbsp; Analytics — Hiring Funnel & Metrics</span>
        </div>
      </section>

      <section className="pc-features">
        <div className="pc-features__header">
          <h2 className="pc-features__title" style={{ fontWeight: 900, color: '#000', WebkitTextStroke: 0 }}>Core Capabilities</h2>
          <span className="pc-eyebrow" style={{ marginBottom: '1.5rem', color: '#000' }}>05 / Features</span>
        </div>
        <div className="pc-features__grid">
          {FEATURES.map(f => {
            const IcoComp = Ico[f.icon];
            return (
              <div key={f.no} className="pc-feature-card">
                <span className="pc-feature-no">{f.no} /</span>
                <div className="pc-feature-icon" style={{ background: '#000' }}><IcoComp /></div>
                <h3 className="pc-feature-name">{f.name}</h3>
                <p className="pc-feature-desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pc-integrations">
        <div className="pc-integrations__inner">
          <span className="pc-eyebrow" style={{ color: '#000' }}>06 / Third-Party Services Used</span>
          <h2 className="pc-section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', marginBottom: 0, WebkitTextStroke: 0, color: '#000' }}>Real Services. Real Stack.</h2>
          <div className="pc-int-grid">
            {INTEGRATIONS.map(i => (
              <div key={i.name} className="pc-int-card">
                <p className="pc-int-name">{i.name}</p>
                <p className="pc-int-purpose">{i.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pc-tech">
        <div className="pc-tech__inner">
          <span className="pc-eyebrow" style={{ color: '#000' }}>07 / Technology Stack</span>
          <h2 className="pc-section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.25rem)', marginBottom: 0 }}>Built With the Right Tools.</h2>
          <div className="pc-tech__list">
            {TECH.map(t => <span key={t} className="pc-tech__pill" style={{ '--hover-bg': '#000' }}>{t}</span>)}
          </div>
        </div>
      </section>

      <section className="pc-results" style={{ background: '#000' }}>
        <div className="pc-results__inner">
          <div className="pc-results__left">
            <span className="pc-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>08 / Results</span>
            <h2 className="pc-results__heading">Complete<br />Hiring<br />Ecosystem.</h2>
            <p className="pc-results__text">Hirix delivers a production-grade recruitment platform with 4 dedicated portals, AI matching, ATS pipeline, and SaaS billing — built solo as a full-stack showcase of modern recruitment technology.</p>
            <a href="https://hirix-4y1n-i4wuuk63c-krishsatasiya-team.vercel.app/" target="_blank" rel="noopener noreferrer" className="pc-results__link">View Live Platform ↗</a>
          </div>
          <div className="pc-results__right">
            <div className="pc-results__metrics">
              {[
                { num: '4',   label: 'User portals built' },
                { num: '15+', label: 'API integrations' },
                { num: '40+', label: 'Features shipped' },
                { num: 'AI',  label: 'Semantic matching' },
                { num: '99%', label: 'Match accuracy' },
                { num: '2',   label: 'Payment gateways' },
              ].map((m, i) => (
                <div key={i}>
                  <span className="pc-results__metric-num">{m.num}</span>
                  <span className="pc-results__metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pc-next" style={{ borderTop: '1px solid #000' }}>
        <div className="pc-next__inner">
          <div>
            <span className="pc-next__label">Next Project</span>
            <a href="/project/quarix" className="pc-next__link">
              <span className="pc-next__title">Quarix</span>
            </a>
          </div>
          <a href="/project/quarix" style={{ textDecoration: 'none', color: '#000' }}>
            <span className="pc-next__arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
