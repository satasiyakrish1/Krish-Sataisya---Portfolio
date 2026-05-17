import React from 'react';
import './Prescripto.css';

/* ─── SVG Icons ─────────────────────────── */
const Ico = {
  User:    () => <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Doctor:  () => <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Shield:  () => <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Pill:    () => <svg viewBox="0 0 24 24"><line x1="10.5" y1="20.5" x2="3.5" y2="13.5"/><path d="M19.5 12.5L12.5 5.5"/><path d="M7 14.5l6.5-6.5"/><path d="M12.5 5.5a4.95 4.95 0 017 7"/><path d="M5.5 12.5a4.95 4.95 0 007 7"/></svg>,
  Eye:     () => <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Bell:    () => <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  Calendar:() => <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="0"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Lock:    () => <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="0"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>,
  Video:   () => <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="0"/></svg>,
  Chart:   () => <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  File:    () => <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>,
  Card:    () => <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="0"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
};

const ROLES = [
  {
    icon: 'User', name: 'Patient Portal',
    items: ['Online appointment booking', 'Real-time doctor availability', 'Digital prescription access', 'Medical history & EHR', 'Medicine ordering system', 'Lab report viewing', 'WhatsApp appointment reminders', 'Login history & notifications'],
  },
  {
    icon: 'Doctor', name: 'Doctor Portal',
    items: ['Verified doctor onboarding', 'Smart appointment management', 'Digital prescription generation', 'Patient history & EHR access', 'Consultation analytics', 'Calendar synchronization', 'Booking settings management', 'Revenue analytics dashboard'],
  },
  {
    icon: 'Shield', name: 'Admin Dashboard',
    items: ['Centralized management hub', 'User & doctor verification', 'Appointment analytics & reports', 'Notification center', 'Hospital vehicle GPS mgmt', 'CRM management system', 'Activity monitoring', 'System-wide analytics'],
  },
  {
    icon: 'Pill', name: 'Pharmacy Module',
    items: ['Inventory management', 'Medicine ordering & delivery', 'Prescription synchronization', 'Pharmacy CRM dashboard', 'Real-time stock updates', 'Apollo Pharmacy integration', 'Order management system', 'Prescription-based dispensing'],
  },
];

const FEATURES = [
  { no: '01', icon: 'Calendar', name: 'Smart Scheduling',      desc: 'AI-powered conflict-free appointment engine with live doctor availability, multi-timezone sync, and automated rescheduling — zero double-bookings guaranteed.' },
  { no: '02', icon: 'Lock',     name: 'Secure EHR Vault',      desc: 'HIPAA & GDPR compliant cloud-based Electronic Health Records with AES-256 encryption, version history, and granular role-based access control.' },
  { no: '03', icon: 'Video',    name: 'Telemedicine Ready',    desc: 'Telemedicine-ready architecture with WebRTC video consultation rooms, integrated scheduling gate — no third-party dependency.' },
  { no: '04', icon: 'Eye',      name: 'Vision Care AI',        desc: 'AI-powered eye scan interface with virtual try-on concept, prescription-based eyewear recommendations, and Lenskart e-commerce integration.' },
  { no: '05', icon: 'Bell',     name: 'Omni Notifications',   desc: 'WhatsApp Business API, Twilio SMS, and email notifications — automated appointment reminders, status updates, and real-time patient communication.' },
  { no: '06', icon: 'Card',     name: 'Payment Gateway',       desc: 'Stripe (international) + Razorpay (India) dual-gateway integration with multi-currency support, invoice generation, and refund management.' },
  { no: '07', icon: 'Chart',    name: 'Analytics Engine',      desc: 'Admin and doctor dashboards powered by MongoDB aggregation pipelines — revenue trends, appointment heatmaps, and platform KPIs in real-time.' },
  { no: '08', icon: 'File',     name: 'Digital Prescriptions', desc: 'Structured post-consultation digital prescriptions auto-synced with pharmacy module and Apollo integration — PDF receipts generated instantly.' },
  { no: '09', icon: 'Pill',     name: 'Pharmacy Commerce',     desc: 'Full pharmacy module with inventory management, prescription synchronization, medicine ordering, and delivery tracking integrated with Apollo Pharmacy.' },
];

const INTEGRATIONS = [
  { name: 'MongoDB Atlas',       purpose: 'Primary cloud database' },
  { name: 'Cloudinary',          purpose: 'Media storage & CDN' },
  { name: 'Razorpay',            purpose: 'Indian payment gateway' },
  { name: 'Stripe',              purpose: 'International payment gateway' },
  { name: 'Zoho Payments',       purpose: 'Alternate payment processing' },
  { name: 'Appwrite',            purpose: 'Cloud backend & email functions' },
  { name: 'Google OAuth 2.0',    purpose: 'User authentication & login' },
  { name: 'Google AI (Gemini)',  purpose: 'AI-powered healthcare features' },
  { name: 'Google Fit',          purpose: 'Health data & wearable sync' },
  { name: 'Google Wallet',       purpose: 'Digital wallet & passes' },
  { name: 'Google Calendar API', purpose: 'Appointment synchronization' },
  { name: 'GitHub OAuth',        purpose: 'Developer sign-in option' },
  { name: 'Vonage / Nexmo',      purpose: 'SMS notifications & alerts' },
  { name: 'WhatsApp Business',   purpose: 'Patient communication & reminders' },
  { name: 'Resend',              purpose: 'Transactional email delivery' },
  { name: 'reCAPTCHA v3',        purpose: 'Bot protection & form security' },
  { name: 'Render',              purpose: 'Backend & frontend deployment' },
  { name: 'Vercel',              purpose: 'RxMeet (video) deployment' },
  { name: 'Apollo Pharmacy',     purpose: 'Medicine ordering & delivery' },
  { name: 'Lenskart',            purpose: 'Vision care & eyewear commerce' },
];

const TECH = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT Auth',
  'OAuth 2.0', 'AES-256', 'WebRTC', 'Socket.io', 'Stripe', 'Razorpay',
  'Cloudinary', 'Multer', 'Twilio API', 'WhatsApp Business API',
  'Google Calendar API', 'Google Cloud Platform', 'Cloudflare CDN',
  'REST API', 'MERN Stack',
];

export default function ProjectPrescripto() {
  return (
    <div className="pc bg-white min-h-screen">

      <div style={{ height: '1rem' }} />

      {/* BREADCRUMB */}
      <div className="pc-breadcrumb-bar">
        <a href="/projects">Work</a>
        <span className="pc-breadcrumb-sep">/</span>
        <span>Prescripto</span>
      </div>

      {/* ══ HERO ══ */}
      <section className="pc-hero">
        <div className="pc-hero__inner">

          {/* Row 1 — logo + pills */}
          <div className="pc-hero__row1">
            <div className="pc-hero__logo-badge">
              <div className="pc-hero__logo-box">
                <span className="pc-hero__logo-letter">Rx</span>
                <div className="pc-hero__logo-dot" />
              </div>
              <div>
                <span className="pc-hero__logo-name">Prescripto</span>
                <span className="pc-hero__logo-sub">AI Healthcare Platform</span>
              </div>
            </div>
            <div className="pc-hero__row1-right">
              <span className="pc-hero__case-tag">Case Study</span>
              <span className="pc-hero__year-pill">2024</span>
            </div>
          </div>

          <div className="pc-hero__rule" />

          {/* Row 2 — title + meta */}
          <div className="pc-hero__top">
            <div className="pc-hero__title-wrap">
              <h1 className="pc-hero__title">
                <span className="pc-hero__title-line1">Digital</span>
                <span className="pc-hero__title-line2">Health</span>
                <span className="pc-hero__title-accent">Platform.</span>
              </h1>
              <div className="pc-hero__tags-row">
                {['AI Healthcare', 'MERN Stack', 'EHR System', 'Telemedicine', 'Multi-portal', 'SaaS'].map(t => (
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
                <span className="pc-meta-value">AI Healthcare SaaS</span>
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
                <a
                  href="https://prescripto.live"
                  target="_blank" rel="noopener noreferrer"
                  className="pc-hero__cta"
                  onMouseEnter={e => { e.currentTarget.style.background = '#4452FF'; e.currentTarget.style.borderColor = '#4452FF'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; }}
                >
                  Visit Live ↗
                </a>
                <a
                  href="https://github.com"
                  target="_blank" rel="noopener noreferrer"
                  className="pc-hero__cta-ghost"
                  onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          <div className="pc-hero__rule" />

          {/* Hero image */}
          <div className="pc-hero__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
              alt="Prescripto Healthcare Dashboard"
            />
          </div>

        </div>
      </section>

      {/* ══ OVERVIEW ══ */}
      <section className="pc-overview">
        <div className="pc-overview__inner">
          <div className="pc-overview__left">
            <span className="pc-eyebrow">01 / Overview</span>
            <h2 className="pc-section-title">
              Your Digital<br />
              Healthcare<br />
              Companion.
            </h2>
            <p className="pc-body-text" style={{ marginTop: '1rem' }}>
              Prescripto is an advanced AI-powered healthcare management platform that connects
              patients, doctors, pharmacies, diagnostic services, and administrators into a
              single, seamless digital ecosystem — accessible at <strong>prescripto.live</strong>.
            </p>
            <p className="pc-body-text">
              The platform solves real healthcare problems: delayed bookings, manual prescription
              handling, fragmented patient records, and poor provider-patient communication — all
              unified under one HIPAA & GDPR compliant cloud infrastructure.
            </p>
          </div>
          <div className="pc-overview__right">
            <span className="pc-eyebrow">Key Deliverables</span>
            <ul className="pc-service-list">
              {[
                'AI-Powered Healthcare Ecosystem', 'Multi-role Authentication (5 portals)',
                'Electronic Health Records (EHR)', 'Real-time Appointment Scheduling',
                'Digital Prescription System', 'Pharmacy Commerce Module',
                'Vision Care + AI Eye Scan', 'WhatsApp & SMS Notification System',
                'Dual Payment Gateway (Stripe + Razorpay)', 'HIPAA + GDPR + IT Act 2000 Compliance',
                'Google Cloud + Cloudflare Infrastructure', 'Admin Analytics & CRM Dashboard',
              ].map(s => (
                <li key={s}><span className="pc-service-dot" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="pc-stats">
        <div className="pc-stats__inner">
          {[
            { num: '10', unit: '+', label: 'Third-party integrations' },
            { num: '5',  unit: '',  label: 'User portals built' },
            { num: '99.9', unit: '%', label: 'Uptime target' },
            { num: '50', unit: '+', label: 'Core features shipped' },
          ].map((s, i) => (
            <div key={i} className="pc-stat">
              <span className="pc-stat__num">{s.num}<span>{s.unit}</span></span>
              <span className="pc-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CHALLENGE ══ */}
      <section className="pc-split">
        <div className="pc-split__inner">
          <div className="pc-split__text">
            <span className="pc-eyebrow">02 / The Challenge</span>
            <h2 className="pc-section-title">
              Fragmented<br />
              Healthcare<br />
              Is Broken.
            </h2>
            <p className="pc-body-text">
              Clinics operated on disconnected tools — appointments in one system, records
              in cabinets, prescriptions on paper, and no bridge to pharmacies.
              Patients faced delayed bookings, manual prescription handling, and zero visibility
              into their own medical history.
            </p>
            <p className="pc-body-text">
              The engineering challenge: architect a single platform where five distinct user
              roles — Patient, Doctor, Admin, Pharmacy, and Vision Care — share one data layer
              with zero state divergence and end-to-end encryption.
            </p>
          </div>
          <div className="pc-split__image">
            <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop" alt="Healthcare fragmentation" />
          </div>
        </div>
      </section>

      {/* ══ SOLUTION ══ */}
      <section className="pc-split">
        <div className="pc-split__inner pc-split--rev">
          <div className="pc-split__text">
            <span className="pc-eyebrow">03 / The Solution</span>
            <h2 className="pc-section-title">
              One Platform.<br />
              Five Portals.<br />
              Zero Friction.
            </h2>
            <p className="pc-body-text">
              Prescripto is built on the MERN stack with a single JWT issuer + OAuth 2.0
              powering five role-specific React SPAs — each with guarded routes, shared MongoDB
              Atlas data layer, and real-time synchronization.
            </p>
            <p className="pc-body-text">
              Google Cloud Platform hosts the infrastructure behind Cloudflare CDN for DDoS protection
              and performance. Apollo Pharmacy and Lenskart integrations extend the platform into
              commerce, making Prescripto a complete digital health ecosystem — not just a booking tool.
            </p>
          </div>
          <div className="pc-split__image">
            <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2092&auto=format&fit=crop" alt="Prescripto solution architecture" />
          </div>
        </div>
      </section>

      {/* ══ ROLES GRID ══ */}
      <section className="pc-roles">
        <div className="pc-roles__inner">
          <div className="pc-roles__header">
            <h2 className="pc-features__title">
              Multi-Role<br />
              Architecture
            </h2>
            <span className="pc-eyebrow" style={{ marginBottom: '1.5rem' }}>04 / Portals</span>
          </div>
          <div className="pc-roles__grid">
            {ROLES.map(r => {
              const IcoComp = Ico[r.icon];
              return (
                <div key={r.name} className="pc-role-card">
                  <div className="pc-role-icon"><IcoComp /></div>
                  <h3 className="pc-role-name">{r.name}</h3>
                  <ul className="pc-role-list">
                    {r.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ DARK SHOWCASE ══ */}
      <section className="pc-showcase">
        <div className="pc-showcase__inner">
          <span className="pc-showcase__label">Patient Dashboard — Appointment Booking & EHR Flow</span>
          <div className="pc-showcase__screen">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Patient dashboard" />
          </div>
          <div className="pc-showcase__two">
            <div className="pc-showcase__screen">
              <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop" alt="Doctor portal" style={{ height: '260px', objectFit: 'cover' }} />
            </div>
            <div className="pc-showcase__screen">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" alt="Admin analytics" style={{ height: '260px', objectFit: 'cover' }} />
            </div>
          </div>
          <span className="pc-showcase__caption">Doctor Portal — Prescription & EHR &nbsp;&nbsp;&nbsp; Admin Analytics — Revenue & Appointments</span>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section className="pc-features">
        <div className="pc-features__header">
          <h2 className="pc-features__title" style={{ fontWeight: 900, color: '#000', WebkitTextStroke: 0 }}>
            Core Capabilities
          </h2>
          <span className="pc-eyebrow" style={{ marginBottom: '1.5rem' }}>05 / Features</span>
        </div>
        <div className="pc-features__grid">
          {FEATURES.map(f => {
            const IcoComp = Ico[f.icon];
            return (
              <div key={f.no} className="pc-feature-card">
                <span className="pc-feature-no">{f.no} /</span>
                <div className="pc-feature-icon"><IcoComp /></div>
                <h3 className="pc-feature-name">{f.name}</h3>
                <p className="pc-feature-desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ INTEGRATIONS ══ */}
      <section className="pc-integrations">
        <div className="pc-integrations__inner">
          <span className="pc-eyebrow">06 / Third-Party Services Used</span>
          <h2 className="pc-section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', marginBottom: 0, WebkitTextStroke: 0, color: '#000' }}>
            Real Services. Real Stack.
          </h2>
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

      {/* ══ TECH STACK ══ */}
      <section className="pc-tech">
        <div className="pc-tech__inner">
          <span className="pc-eyebrow">07 / Technology Stack</span>
          <h2 className="pc-section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.25rem)', marginBottom: 0 }}>
            Built With the Right Tools.
          </h2>
          <div className="pc-tech__list">
            {TECH.map(t => <span key={t} className="pc-tech__pill">{t}</span>)}
          </div>
        </div>
      </section>

      {/* ══ RESULTS ══ */}
      <section className="pc-results">
        <div className="pc-results__inner">
          <div className="pc-results__left">
            <span className="pc-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>08 / Results</span>
            <h2 className="pc-results__heading">
              Complete<br />
              Healthcare<br />
              Ecosystem.
            </h2>
            <p className="pc-results__text">
              Prescripto went from concept to a live, full-featured platform at prescripto.live.
              5 dedicated portals, 10+ third-party integrations, dual payment gateways, and
              a cloud infrastructure designed for 99.9% uptime — all built as a solo full-stack project.
            </p>
            <a href="https://prescripto.live" target="_blank" rel="noopener noreferrer" className="pc-results__link">
              View Live Platform ↗
            </a>
          </div>
          <div className="pc-results__right">
            <div className="pc-results__metrics">
              {[
                { num: '5',    label: 'User portals built' },
                { num: '10+',  label: 'API integrations' },
                { num: '50+',  label: 'Features shipped' },
                { num: '3',    label: 'Security standards' },
                { num: '99.9%',label: 'Uptime target' },
                { num: '2',    label: 'Payment gateways' },
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

      {/* ══ NEXT PROJECT ══ */}
      <section className="pc-next" style={{ borderTop: '1px solid #000' }}>
        <div className="pc-next__inner">
          <div>
            <span className="pc-next__label">Back to Showcase</span>
            <a href="/projects" className="pc-next__link">
              <span className="pc-next__title">All Projects</span>
            </a>
          </div>
          <a href="/projects" style={{ textDecoration: 'none', color: '#000' }}>
            <span className="pc-next__arrow">→</span>
          </a>
        </div>
      </section>

    </div>
  );
}
