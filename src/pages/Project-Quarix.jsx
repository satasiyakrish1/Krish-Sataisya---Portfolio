import React from 'react';
import './Prescripto.css';

const Ico = {
  Lock:    () => <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="0"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>,
  File:    () => <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>,
  Share:   () => <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  Cloud:   () => <svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
  Shield:  () => <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Eye:     () => <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Chart:   () => <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  User:    () => <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
};

const ROLES = [
  { icon: 'User', name: 'File Management', items: ['Drag-and-drop uploads', 'Multi-type file support', 'Real-time search & filters', 'Sorting by name/date/size', 'Folder organization', 'Storage quota tracking', 'Recent activity feed', 'Delete & restore files'] },
  { icon: 'Share', name: 'Collaboration', items: ['Shareable file links', 'Individual file management', 'Permission-based access', 'Public/Private toggles', 'Team member invites', 'Real-time sync', 'Comment system', 'Access logs'] },
  { icon: 'Chart', name: 'Storage Dashboard', items: ['Visual usage overview', 'File category breakdown', 'Recharts integration', 'Total storage stats', 'User profile management', 'Account settings', 'Plan details', 'Activity metrics'] },
  { icon: 'Shield', name: 'Security Hub', items: ['OTP Authentication', 'Email-based login', 'Environment security', 'Next.js Server Actions', 'Zod validation', 'Session management', 'Audit trails', 'Data encryption'] },
];

const FEATURES = [
  { no: '01', icon: 'Cloud',  name: 'OTP Authentication',  desc: 'Secure login and registration using email-based One-Time Passwords (OTP), ensuring high-level account security without traditional passwords.' },
  { no: '02', icon: 'Lock',   name: 'Server Actions',       desc: 'Critical file operations and metadata management handled via Next.js 15 Server Actions for enhanced security and performance.' },
  { no: '03', icon: 'Share',  name: 'Drag-and-Drop',        desc: 'Seamless file uploading experience with multi-type support for Documents, Images, Video, and Audio using Appwrite Storage.' },
  { no: '04', icon: 'File',   name: 'Real-time Search',     desc: 'Powerful search engine with instant results and advanced filtering by file type, name, and size for efficient navigation.' },
  { no: '05', icon: 'Chart',  name: 'Storage Insights',     desc: 'Dynamic dashboard visualization powered by Recharts, providing a clear overview of storage distribution across categories.' },
  { no: '06', icon: 'Shield', name: 'Zod Validation',       desc: 'Strict schema validation using Zod for all form inputs and API interactions, preventing malformed data and ensuring integrity.' },
  { no: '07', icon: 'User',   name: 'Responsive UI',        desc: 'Fully optimized interface using Shadcn UI and Tailwind CSS, providing a premium experience across Desktop, Tablet, and Mobile.' },
  { no: '08', icon: 'Eye',    name: 'Appwrite BaaS',        desc: 'Backend-as-a-Service integration for secure authentication, metadata database management, and robust cloud storage buckets.' },
];

const INTEGRATIONS = [
  { name: 'Appwrite',         purpose: 'BaaS (Auth, DB, Storage)' },
  { name: 'Recharts',         purpose: 'Dashboard Visualization' },
  { name: 'Lucide React',     purpose: 'Modern Icon Set' },
  { name: 'Shadcn UI',        purpose: 'Accessible UI Primitives' },
  { name: 'React Hook Form',  purpose: 'Form Management' },
  { name: 'Zod',              purpose: 'Schema Validation' },
  { name: 'Next.js 15',       purpose: 'Core Framework (App Router)' },
  { name: 'Tailwind CSS',     purpose: 'Utility-first Styling' },
  { name: 'Vercel',           purpose: 'Cloud Deployment' },
  { name: 'Turbopack',        purpose: 'Incremental Bundling' },
];

const TECH = [
  'Next.js 15', 'Appwrite', 'TypeScript', 'Tailwind CSS', 'Shadcn UI',
  'Recharts', 'React Hook Form', 'Zod', 'Lucide React', 'Turbopack',
  'Server Actions', 'App Router', 'Cloud Storage', 'BaaS',
];

export default function ProjectQuarix() {
  return (
    <div className="pc bg-white min-h-screen">
      <div style={{ height: '1rem' }} />

      <div className="pc-breadcrumb-bar">
        <a href="/projects">Work</a>
        <span className="pc-breadcrumb-sep">/</span>
        <span>Quarix</span>
      </div>

      <section className="pc-hero">
        <div className="pc-hero__inner">
          <div className="pc-hero__row1">
            <div className="pc-hero__logo-badge">
              <div className="pc-hero__logo-box" style={{ background: '#111827' }}>
                <span className="pc-hero__logo-letter">St</span>
                <div className="pc-hero__logo-dot" />
              </div>
              <div>
                <span className="pc-hero__logo-name">StoreIt</span>
                <span className="pc-hero__logo-sub">Modern Google Drive Clone</span>
              </div>
            </div>
            <div className="pc-hero__row1-right">
              <span className="pc-hero__case-tag" style={{ color: '#111827', borderColor: '#111827' }}>Case Study</span>
              <span className="pc-hero__year-pill">2024</span>
            </div>
          </div>

          <div className="pc-hero__rule" />

          <div className="pc-hero__top">
            <div className="pc-hero__title-wrap">
              <h1 className="pc-hero__title">
                <span className="pc-hero__title-line1">Modern</span>
                <span className="pc-hero__title-line2">Cloud</span>
                <span className="pc-hero__title-accent" style={{ color: '#111827' }}>Storage.</span>
              </h1>
              <div className="pc-hero__tags-row">
                {['Next.js', 'Cloud Storage', 'AES-256', 'Appwrite', 'SaaS', 'File Sharing'].map(t => (
                  <span key={t} className="pc-hero__inline-tag">{t}</span>
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
                <span className="pc-meta-value">Cloud Storage SaaS</span>
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
                <a href="https://krishsatasiya-storages.vercel.app/" target="_blank" rel="noopener noreferrer" className="pc-hero__cta"
                  onMouseEnter={e => { e.currentTarget.style.background = '#111827'; e.currentTarget.style.borderColor = '#111827'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; }}
                >Visit Live ↗</a>
                <a href="https://github.com/satasiyakrish1/Google-Drive-Clone" target="_blank" rel="noopener noreferrer" className="pc-hero__cta-ghost"
                  onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
                >GitHub →</a>
              </div>
            </div>
          </div>

          <div className="pc-hero__rule" />

          <div className="pc-hero__image-wrap">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Quarix Cloud Storage" />
          </div>
        </div>
      </section>

      <section className="pc-overview">
        <div className="pc-overview__inner">
          <div className="pc-overview__left">
            <span className="pc-eyebrow" style={{ color: '#111827' }}>01 / Overview</span>
            <h2 className="pc-section-title">Your Files.<br />Organized.<br />Everywhere.</h2>
            <p className="pc-body-text">StoreIt is a high-performance, responsive file management system built with Next.js 15 and Appwrite — delivering a seamless experience for uploading, organizing, and sharing your digital life.</p>
            <p className="pc-body-text">Designed for modern workflows, StoreIt features OTP authentication, real-time search, and a dynamic storage dashboard — making secure cloud storage feel native and effortless.</p>
          </div>
          <div className="pc-overview__right">
            <span className="pc-eyebrow" style={{ color: '#111827' }}>Key Deliverables</span>
            <ul className="pc-service-list">
              {[
                'Next.js 15 (App Router)', 'Appwrite BaaS Integration',
                'OTP-based Secure Authentication', 'Drag-and-Drop File Uploading',
                'Multi-type File Support', 'Real-time Search & Filtering',
                'Recharts Storage Dashboard', 'Responsive Shadcn UI Design',
                'Next.js Server Actions', 'Collaborative Share Links',
                'Zod Schema Validation', 'Individual File Management',
              ].map(s => <li key={s}><span className="pc-service-dot" style={{ background: '#111827' }} />{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="pc-stats">
        <div className="pc-stats__inner">
          {[
            { num: '256', unit: '-bit', label: 'AES encryption' },
            { num: '30',  unit: '+',   label: 'Supported file types' },
            { num: '4',   unit: '',    label: 'Core modules built' },
            { num: '99.9',unit: '%',   label: 'Uptime target' },
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
            <span className="pc-eyebrow" style={{ color: '#111827' }}>02 / The Challenge</span>
            <h2 className="pc-section-title">Cloud Storage<br />Shouldn't<br />Compromise.</h2>
            <p className="pc-body-text">Existing solutions force a trade-off: consumer apps are convenient but insecure; enterprise tools are secure but unusable. No middle ground exists for developers and teams who want both.</p>
            <p className="pc-body-text">Building a zero-knowledge system where the server never sees plaintext while still supporting real-time preview, collaboration, and sharing required rethinking the entire encryption architecture.</p>
          </div>
          <div className="pc-split__image">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" alt="Cloud security challenge" />
          </div>
        </div>
      </section>

      <section className="pc-split">
        <div className="pc-split__inner pc-split--rev">
          <div className="pc-split__text">
            <span className="pc-eyebrow" style={{ color: '#111827' }}>03 / The Solution</span>
            <h2 className="pc-section-title">Next.js 15.<br />Appwrite.<br />Turbopack.</h2>
            <p className="pc-body-text">StoreIt leverages Next.js 15 and Appwrite for a robust, scalable backend-as-a-service experience. Recharts handles complex data visualization for storage distribution.</p>
            <p className="pc-body-text">A premium Shadcn UI frontend with optimistic updates, Server Actions, and Turbopack for lightning-fast development ensures a state-of-the-art user experience.</p>
          </div>
          <div className="pc-split__image">
            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" alt="Quarix architecture" />
          </div>
        </div>
      </section>

      <section className="pc-roles">
        <div className="pc-roles__inner">
          <div className="pc-roles__header">
            <h2 className="pc-features__title">Platform<br />Architecture</h2>
            <span className="pc-eyebrow" style={{ marginBottom: '1.5rem', color: '#111827' }}>04 / Modules</span>
          </div>
          <div className="pc-roles__grid">
            {ROLES.map(r => {
              const IcoComp = Ico[r.icon];
              return (
                <div key={r.name} className="pc-role-card">
                  <div className="pc-role-icon" style={{ background: '#111827' }}><IcoComp /></div>
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
          <span className="pc-showcase__label">File Dashboard — Upload, Sync & Preview Interface</span>
          <div className="pc-showcase__screen">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop" alt="Quarix dashboard" />
          </div>
          <div className="pc-showcase__two">
            <div className="pc-showcase__screen">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop" alt="File sharing" style={{ height: '260px', objectFit: 'cover' }} />
            </div>
            <div className="pc-showcase__screen">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" alt="Analytics" style={{ height: '260px', objectFit: 'cover' }} />
            </div>
          </div>
          <span className="pc-showcase__caption">Sharing Module — Permissions & Links &nbsp;&nbsp;&nbsp; Storage Analytics — Usage & Quota</span>
        </div>
      </section>

      <section className="pc-features">
        <div className="pc-features__header">
          <h2 className="pc-features__title" style={{ fontWeight: 900, color: '#000', WebkitTextStroke: 0 }}>Core Capabilities</h2>
          <span className="pc-eyebrow" style={{ marginBottom: '1.5rem', color: '#111827' }}>05 / Features</span>
        </div>
        <div className="pc-features__grid">
          {FEATURES.map(f => {
            const IcoComp = Ico[f.icon];
            return (
              <div key={f.no} className="pc-feature-card">
                <span className="pc-feature-no">{f.no} /</span>
                <div className="pc-feature-icon" style={{ background: '#111827' }}><IcoComp /></div>
                <h3 className="pc-feature-name">{f.name}</h3>
                <p className="pc-feature-desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pc-integrations">
        <div className="pc-integrations__inner">
          <span className="pc-eyebrow" style={{ color: '#111827' }}>06 / Third-Party Services Used</span>
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
          <span className="pc-eyebrow" style={{ color: '#111827' }}>07 / Technology Stack</span>
          <h2 className="pc-section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.25rem)', marginBottom: 0 }}>Built With the Right Tools.</h2>
          <div className="pc-tech__list">
            {TECH.map(t => <span key={t} className="pc-tech__pill">{t}</span>)}
          </div>
        </div>
      </section>

      <section className="pc-results" style={{ background: '#111827' }}>
        <div className="pc-results__inner">
          <div className="pc-results__left">
            <span className="pc-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>08 / Results</span>
            <h2 className="pc-results__heading">Modern.<br />Fast.<br />Reliable.</h2>
            <p className="pc-results__text">StoreIt delivers a premium file management experience with OTP auth, real-time search, and dynamic dashboards — built solo as a showcase of modern Next.js 15 and Appwrite capabilities.</p>
            <a href="https://krishsatasiya-storages.vercel.app/" target="_blank" rel="noopener noreferrer" className="pc-results__link">View Live Platform ↗</a>
          </div>
          <div className="pc-results__right">
            <div className="pc-results__metrics">
              {[
                { num: '256',  label: 'AES encryption bits' },
                { num: '30+',  label: 'File type previews' },
                { num: '4',    label: 'Core modules' },
                { num: 'CDN',  label: 'Global delivery' },
                { num: '99.9%',label: 'Uptime target' },
                { num: '0',    label: 'Knowledge (zero)' },
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
            <a href="/project/blogcms" className="pc-next__link">
              <span className="pc-next__title">Blog CMS</span>
            </a>
          </div>
          <a href="/project/blogcms" style={{ textDecoration: 'none', color: '#000' }}>
            <span className="pc-next__arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
