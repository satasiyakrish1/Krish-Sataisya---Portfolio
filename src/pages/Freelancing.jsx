import React from 'react';
import './InfoPage.css';

/* ─── Freelance Platforms ─── */
const PLATFORMS = [
  {
    id: '01',
    platform: 'Fiverr',
    badge: 'Top Rated',
    role: 'Professional Freelancer',
    period: '2023 – 2026',
    logoText: 'FVR',
    logoBg: '#1DBF73',
    description: 'As a 5 ⭐ rated freelancer on Fiverr, I offer a comprehensive range of design and development services including UI/UX design, web development, graphic design, and branding. Successfully completed numerous projects for clients worldwide, delivering high-quality solutions that exceed expectations and drive business growth.',
    tags: ['UI/UX Design', 'Web Development', 'Graphic Design', 'Branding'],
  },
  {
    id: '02',
    platform: 'Upwork',
    badge: 'Top Rated',
    role: 'Professional Freelancer',
    period: '2023 – 2026',
    logoText: 'UPW',
    logoBg: '#14A800',
    description: 'As a Top Rated freelancer on Upwork, I deliver exceptional design and development solutions to clients globally. Specializing in UI/UX design, web development, and branding, I\'ve successfully completed diverse projects across industries, maintaining a high client satisfaction rate and building long-term professional relationships.',
    tags: ['UI/UX Design', 'Web Development', 'Branding', 'Client Relations'],
  },
  {
    id: '04',
    platform: 'Skillspeer',
    badge: 'UI/UX Design',
    role: 'UI/UX Website Designer — Freelancing',
    period: '2024 – 2025',
    logoText: 'SKP',
    logoBg: '#4452FF',
    description: 'Designed intuitive and user-friendly interfaces for Skillspeer\'s web platform. Conducted user research, created wireframes and prototypes, and developed a comprehensive design system that enhanced user experience and improved platform engagement metrics.',
    tags: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design System'],
  },
];

const SERVICES = [
  { id: '01', title: 'Full Stack Web Apps', desc: 'End-to-end MERN / Next.js applications with auth, REST/GraphQL APIs, real-time features, and cloud deployment.', tags: ['React', 'Node.js', 'MongoDB', 'Next.js', 'AWS'] },
  { id: '02', title: 'UI/UX Design & Prototyping', desc: 'High-fidelity Figma prototypes, design systems, and pixel-perfect component libraries for modern digital products.', tags: ['Figma', 'Design System', 'Prototyping', 'Wireframing'] },
  { id: '03', title: 'Landing Pages & Portfolios', desc: 'Premium, fast-loading landing pages and portfolio sites with custom animations, SEO optimized, and fully responsive.', tags: ['HTML/CSS', 'React', 'Animation', 'SEO'] },
  { id: '04', title: 'E-Commerce Solutions', desc: 'WooCommerce, Shopify, or custom MERN store builds with payment gateway, inventory management, and admin dashboard.', tags: ['WooCommerce', 'Shopify', 'MERN', 'Payment'] },
  { id: '05', title: 'CMS & WordPress Development', desc: 'Custom WordPress themes, Odoo implementations, and headless CMS integrations for content-driven businesses.', tags: ['WordPress', 'Odoo', 'Headless CMS'] },
  { id: '06', title: 'API Integration & Automation', desc: 'Third-party API integrations (Stripe, Clerk, EmailJS, Twilio), webhook setups, and n8n automation workflows.', tags: ['REST API', 'Webhooks', 'n8n', 'Stripe'] },
];

const STATS = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '15+', label: 'Happy Clients' },
  { value: '100%', label: 'On-Time Delivery' },
  { value: '3+', label: 'Years of Experience' },
];

const PROCESS = [
  { step: '01', title: 'Discovery Call', desc: 'We discuss your requirements, goals, and timeline in a free 30-minute consultation.' },
  { step: '02', title: 'Proposal & Scope', desc: 'I deliver a detailed scope of work, tech stack recommendation, timeline, and fixed pricing.' },
  { step: '03', title: 'Design & Build', desc: 'Iterative development with regular check-ins, milestone demos, and full transparency.' },
  { step: '04', title: 'Deliver & Support', desc: '30 days of post-delivery support included with every project, no extra charge.' },
];
const BRANDS = [
  { name: 'Fiverr', icon: 'https://cdn.simpleicons.org/fiverr/1DBF73' },
  { name: 'Upwork', icon: 'https://cdn.simpleicons.org/upwork/6FDA44' },
  { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/96BF48' },
  { name: 'Stripe', icon: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg' },
  { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow/4353FF' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
  { name: 'Netlify', icon: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
  { name: 'Vercel', icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
  { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
];

const MARQUEE_STYLES = `
  .fl-marquee-wrap {
    overflow: hidden;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    background: #f5f5f5;
    padding: 20px 0;
    margin: 40px 0 8px 0;
    position: relative;
  }
  .fl-marquee-wrap::before,
  .fl-marquee-wrap::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }
  .fl-marquee-wrap::before { left: 0; background: linear-gradient(to right, #f5f5f5, transparent); }
  .fl-marquee-wrap::after  { right: 0; background: linear-gradient(to left, #f5f5f5, transparent); }
  .fl-marquee-track {
    display: flex;
    gap: 48px;
    width: max-content;
    animation: fl-scroll 28s linear infinite;
  }
  .fl-marquee-wrap:hover .fl-marquee-track { animation-play-state: paused; }
  @keyframes fl-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .fl-marquee-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 72px;
    flex-shrink: 0;
  }
  .fl-marquee-item img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: transform 0.2s;
  }
  .fl-marquee-item:hover img { transform: scale(1.15); }
  .fl-marquee-item span {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: var(--font-mono);
    color: #555;
    white-space: nowrap;
  }
`;

export default function Freelancing() {
  const doubled = [...BRANDS, ...BRANDS];
  return (
    <div className="ip-root">
      <style>{MARQUEE_STYLES}</style>
      <div className="ip-bg-accent" />

      <div className="container ip-wrap">
        {/* Hero */}
        <header className="ip-hero">
          <div className="ip-hero__top">
            <div className="ip-hero__badge">
              <span className="ip-hero__badge-dot" />
              Freelance Services
            </div>
            <span className="ip-hero__date">Available Now</span>
          </div>

          <div className="ip-hero__body">
            <h1 className="ip-hero__title">
              <span className="ip-hero__line ip-hero__line--1">Hire.</span>
              <span className="ip-hero__line ip-hero__line--2">Build.</span>
              <span className="ip-hero__line ip-hero__line--3">Launch.</span>
            </h1>
            <div className="ip-hero__meta">
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Platforms</span>
                <span className="ip-hero__meta-value">Fiverr · Upwork</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Rating</span>
                <span className="ip-hero__meta-value">5 ⭐ · Top Rated</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Projects Done</span>
                <span className="ip-hero__meta-value">25+ Delivered</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Availability</span>
                <span className="ip-hero__meta-value" style={{ color: '#4452FF' }}>● Open for Work</span>
              </div>
            </div>
          </div>

          <p className="ip-hero__sub">
            Premium freelance development and design services on Fiverr and Upwork — from idea to production. Trusted by clients worldwide with a 5-star rating and Top Rated status.
          </p>
        </header>

        {/* Stats */}
        <div className="fl-stats">
          {STATS.map((s, i) => (
            <div key={i} className="fl-stat">
              <span className="fl-stat__value font-display">{s.value}</span>
              <span className="fl-stat__label font-mono">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Client Brands Marquee */}
        <div className="fl-marquee-wrap">
          <div className="fl-marquee-track">
            {doubled.map((b, i) => (
              <div key={i} className="fl-marquee-item">
                <img src={b.icon} alt={b.name} />
                <span>{b.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance Platforms */}
        <section className="ip-section">
          <div className="exp-section-header">
            <span className="exp-section-header__label font-mono">Freelance History</span>
            <span className="exp-section-header__count font-mono">{PLATFORMS.length} Engagements</span>
          </div>
          <div className="exp-list">
            {PLATFORMS.map((p, idx) => (
              <div key={p.id} className="exp-card">
                <div className="exp-card__logo" style={{ background: p.logoBg }}>
                  <span className="exp-card__logo-letter font-mono" style={{ fontSize: '10px', letterSpacing: '0.05em' }}>{p.logoText}</span>
                </div>
                <div className="exp-card__left">
                  <span className="exp-card__type font-mono">{p.badge}</span>
                  <span className="exp-card__period font-mono">{p.period}</span>
                </div>
                <div className="exp-card__right">
                  <div className="exp-card__header">
                    <h2 className="exp-card__role font-display">{p.role}</h2>
                    <span className="exp-card__company font-display">{p.platform}</span>
                  </div>
                  <p className="exp-card__desc">{p.description}</p>
                  <div className="exp-card__stack">
                    {p.tags.map(t => (
                      <span key={t} className="edu-tag font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="ip-section">
          <div className="ip-section__label font-mono">What I Offer</div>
          <div className="fl-services">
            {SERVICES.map((svc) => (
              <div key={svc.id} className="fl-service-card">
                <div className="fl-service-card__head">
                  <span className="fl-service-card__id font-mono">{svc.id}</span>
                </div>
                <h2 className="fl-service-card__title font-display">{svc.title}</h2>
                <p className="fl-service-card__desc">{svc.desc}</p>
                <div className="fl-service-card__tags">
                  {svc.tags.map(t => (
                    <span key={t} className="edu-tag font-mono">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="ip-section">
          <div className="ip-section__label font-mono">How I Work</div>
          <div className="fl-process">
            {PROCESS.map((p) => (
              <div key={p.step} className="fl-process-step">
                <span className="fl-process-step__num font-mono">{p.step}</span>
                <div>
                  <h3 className="fl-process-step__title font-display">{p.title}</h3>
                  <p className="fl-process-step__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="ip-cta">
          <div className="ip-cta__inner">
            <span className="ip-cta__label font-mono">Start a Project</span>
            <h2 className="ip-cta__title font-display">Ready to turn your idea into reality?</h2>
            <div className="ip-cta__actions">
              <a href="mailto:krishsatasiya44@gmail.com" className="ip-cta__btn font-mono">
                Email Me →
              </a>
              <a href="https://krishsatasiya.netlify.app" target="_blank" rel="noreferrer" className="ip-cta__btn-outline font-mono">
                View Portfolio
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
