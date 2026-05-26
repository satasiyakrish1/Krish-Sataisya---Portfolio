import React from 'react';
import './Prescripto.css';

const Ico = {
  File:    () => <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>,
  Edit:    () => <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  Users:   () => <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  Chart:   () => <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  Search:  () => <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Bell:    () => <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  Tag:     () => <svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  Shield:  () => <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
};

const ROLES = [
  { icon: 'Edit', name: 'Author Portal', items: ['WYSIWYG rich-text editor', 'Markdown & HTML support', 'Draft autosave system', 'Image & media embedding', 'Post scheduling & queuing', 'SEO meta editor', 'Category & tag manager', 'Reading time estimator'] },
  { icon: 'Users', name: 'Reader Experience', items: ['Clean reading UI', 'Dark / light mode toggle', 'Comment & reactions', 'Newsletter subscription', 'Bookmark system', 'Reading progress bar', 'Related posts engine', 'Social share buttons'] },
  { icon: 'Shield', name: 'Admin Dashboard', items: ['User & author management', 'Content moderation queue', 'Comment spam filtering', 'SEO performance report', 'Site-wide analytics', 'Featured post controls', 'Theme & layout settings', 'Plugin/widget manager'] },
  { icon: 'Chart', name: 'Analytics Hub', items: ['Page view heatmaps', 'Referral source tracking', 'Post performance scores', 'Reader retention metrics', 'Newsletter open rates', 'Search term insights', 'Geo-location breakdown', 'Revenue from sponsored posts'] },
];

const FEATURES = [
  { no: '01', icon: 'Edit',   name: 'WYSIWYG Editor',      desc: 'Block-based rich-text editor with inline formatting, drag-and-drop media, code blocks with syntax highlighting, embeds, and slash-command shortcuts.' },
  { no: '02', icon: 'Search', name: 'SEO Engine',           desc: 'Built-in SEO toolkit — meta title/description editor, OpenGraph previews, XML sitemap generation, canonical URLs, and Lighthouse score tracking.' },
  { no: '03', icon: 'Users',  name: 'Multi-Author System',  desc: 'Role-based author management — invite collaborators, assign editor/author/contributor roles, content approval workflows, and attribution tracking.' },
  { no: '04', icon: 'Bell',   name: 'Newsletter Integration',desc: 'Built-in subscriber list management, drip email campaigns, post digest automation, and Mailchimp/Resend integration for transactional sends.' },
  { no: '05', icon: 'Tag',    name: 'Taxonomy & Tagging',   desc: 'Hierarchical categories, flat tags, custom taxonomies, and auto-suggested labels from post content using NLP-based keyword extraction.' },
  { no: '06', icon: 'Chart',  name: 'Analytics Dashboard',  desc: 'Post performance metrics, reader sessions, referral sources, search term insights, and conversion tracking — all in a clean admin dashboard.' },
  { no: '07', icon: 'Shield', name: 'Content Moderation',   desc: 'AI-assisted comment spam detection, manual moderation queue, user reputation scoring, report system, and word-filter rules.' },
  { no: '08', icon: 'File',   name: 'Content Scheduling',   desc: 'Post queue management with future-publish scheduling, recurring content cadences, time-zone aware publishing, and editorial calendar view.' },
];

const INTEGRATIONS = [
  { name: 'MongoDB Atlas',    purpose: 'Primary content database' },
  { name: 'Cloudinary',       purpose: 'Image & media CDN' },
  { name: 'Resend',           purpose: 'Newsletter & email' },
  { name: 'Google OAuth',     purpose: 'User authentication' },
  { name: 'reCAPTCHA v3',     purpose: 'Comment spam protection' },
  { name: 'Algolia',          purpose: 'Full-text post search' },
  { name: 'Vercel',           purpose: 'Frontend deployment' },
  { name: 'Render',           purpose: 'Backend deployment' },
];

const TECH = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT Auth',
  'Cloudinary', 'Algolia', 'Resend', 'OAuth 2.0', 'REST API', 'MERN Stack',
];

export default function ProjectBlogCMS() {
  return (
    <div className="pc bg-white min-h-screen">
      <div style={{ height: '1rem' }} />

      <div className="pc-breadcrumb-bar">
        <a href="/projects">Work</a>
        <span className="pc-breadcrumb-sep">/</span>
        <span>Blog CMS</span>
      </div>

      <section className="pc-hero">
        <div className="pc-hero__inner">
          <div className="pc-hero__row1">
            <div className="pc-hero__logo-badge">
              <div className="pc-hero__logo-box" style={{ background: '#1e3a5f' }}>
                <span className="pc-hero__logo-letter">Bl</span>
                <div className="pc-hero__logo-dot" />
              </div>
              <div>
                <span className="pc-hero__logo-name">Blog CMS</span>
                <span className="pc-hero__logo-sub">Publishing Platform</span>
              </div>
            </div>
            <div className="pc-hero__row1-right">
              <span className="pc-hero__case-tag" style={{ color: '#1e3a5f', borderColor: '#1e3a5f' }}>Case Study</span>
              <span className="pc-hero__year-pill">2023</span>
            </div>
          </div>

          <div className="pc-hero__rule" />

          <div className="pc-hero__top">
            <div className="pc-hero__title-wrap">
              <h1 className="pc-hero__title">
                <span className="pc-hero__title-line1">Pro</span>
                <span className="pc-hero__title-line2">Blogging</span>
                <span className="pc-hero__title-accent" style={{ color: '#1e3a5f' }}>Platform.</span>
              </h1>
              <div className="pc-hero__tags-row">
                {['MERN Stack', 'CMS', 'WYSIWYG Editor', 'SEO Tools', 'Multi-author', 'Newsletter'].map(t => (
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
                <span className="pc-meta-value">Publishing CMS</span>
              </div>
              <div className="pc-meta-block">
                <span className="pc-meta-label">My Role</span>
                <span className="pc-meta-value">Full Stack Dev + Architect</span>
              </div>
              <div className="pc-meta-block">
                <span className="pc-meta-label">Year</span>
                <span className="pc-meta-value">2023</span>
              </div>
              <div className="pc-meta-block" style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                <a href="https://github.com/satasiyakrish1" className="pc-hero__cta"
                  onMouseEnter={e => { e.currentTarget.style.background = '#1e3a5f'; e.currentTarget.style.borderColor = '#1e3a5f'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; }}
                >Visit Live ↗</a>
                <a href="https://github.com/satasiyakrish1" className="pc-hero__cta-ghost"
                  onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
                >GitHub →</a>
              </div>
            </div>
          </div>

          <div className="pc-hero__rule" />

          <div className="pc-hero__image-wrap">
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" alt="Blog CMS Platform" />
          </div>
        </div>
      </section>

      <section className="pc-overview">
        <div className="pc-overview__inner">
          <div className="pc-overview__left">
            <span className="pc-eyebrow" style={{ color: '#1e3a5f' }}>01 / Overview</span>
            <h2 className="pc-section-title">Write. Publish.<br />Grow Your<br />Audience.</h2>
            <p className="pc-body-text">Blog CMS is a professional full-stack blogging and publishing platform — offering a WYSIWYG editor, multi-author support, built-in SEO tools, and newsletter integration in one cohesive system.</p>
            <p className="pc-body-text">Built for creators and teams who need more than a basic blog — with content scheduling, analytics, comment moderation, and Algolia-powered search baked in from day one.</p>
          </div>
          <div className="pc-overview__right">
            <span className="pc-eyebrow" style={{ color: '#1e3a5f' }}>Key Deliverables</span>
            <ul className="pc-service-list">
              {[
                'Block-based WYSIWYG Editor', 'Multi-author Role Management',
                'Built-in SEO Toolkit & Sitemaps', 'Newsletter & Email Campaigns',
                'Comment System with Moderation', 'Content Scheduling & Queue',
                'Algolia Full-text Search', 'Analytics & Performance Metrics',
                'Custom Taxonomies & Tags', 'Dark/Light Reader Mode',
                'Cloudinary Media Management', 'Reader Subscription System',
              ].map(s => <li key={s}><span className="pc-service-dot" style={{ background: '#1e3a5f' }} />{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="pc-stats">
        <div className="pc-stats__inner">
          {[
            { num: '8',  unit: '+', label: 'Third-party integrations' },
            { num: '4',  unit: '',  label: 'User roles built' },
            { num: '100', unit: '+', label: 'SEO score target' },
            { num: '30', unit: '+', label: 'Core features shipped' },
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
            <span className="pc-eyebrow" style={{ color: '#1e3a5f' }}>02 / The Challenge</span>
            <h2 className="pc-section-title">Blogging Tools<br />Are Either<br />Too Simple.</h2>
            <p className="pc-body-text">Most blogging platforms are either too simple for professionals or too complex and expensive for indie creators. The gap between personal blogs and full CMS systems like WordPress is enormous.</p>
            <p className="pc-body-text">Building a custom CMS required solving the trifecta: a flexible editor that handles rich content, an SEO system that competes with Yoast, and a reader experience that drives engagement and retention.</p>
          </div>
          <div className="pc-split__image">
            <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop" alt="Blogging challenge" />
          </div>
        </div>
      </section>

      <section className="pc-split">
        <div className="pc-split__inner pc-split--rev">
          <div className="pc-split__text">
            <span className="pc-eyebrow" style={{ color: '#1e3a5f' }}>03 / The Solution</span>
            <h2 className="pc-section-title">Custom CMS.<br />Pro Tools.<br />Clean UX.</h2>
            <p className="pc-body-text">Blog CMS is built MERN-stack with a block-based editor inspired by Notion and Ghost — supporting rich embeds, code syntax highlighting, and real-time autosave with MongoDB change streams.</p>
            <p className="pc-body-text">Algolia powers sub-50ms full-text search across all posts. The SEO module generates structured data, sitemaps, and OpenGraph previews automatically on publish — zero manual configuration.</p>
          </div>
          <div className="pc-split__image">
            <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop" alt="Blog CMS solution" />
          </div>
        </div>
      </section>

      <section className="pc-roles">
        <div className="pc-roles__inner">
          <div className="pc-roles__header">
            <h2 className="pc-features__title">Platform<br />Architecture</h2>
            <span className="pc-eyebrow" style={{ marginBottom: '1.5rem', color: '#1e3a5f' }}>04 / Modules</span>
          </div>
          <div className="pc-roles__grid">
            {ROLES.map(r => {
              const IcoComp = Ico[r.icon];
              return (
                <div key={r.name} className="pc-role-card">
                  <div className="pc-role-icon" style={{ background: '#1e3a5f' }}><IcoComp /></div>
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
          <span className="pc-showcase__label">Author Dashboard — Editor & Content Management</span>
          <div className="pc-showcase__screen">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop" alt="Blog editor" />
          </div>
          <div className="pc-showcase__two">
            <div className="pc-showcase__screen">
              <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop" alt="Reader view" style={{ height: '260px', objectFit: 'cover' }} />
            </div>
            <div className="pc-showcase__screen">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" alt="Analytics" style={{ height: '260px', objectFit: 'cover' }} />
            </div>
          </div>
          <span className="pc-showcase__caption">Reader Experience — Clean Article View &nbsp;&nbsp;&nbsp; Analytics — Post Performance & Traffic</span>
        </div>
      </section>

      <section className="pc-features">
        <div className="pc-features__header">
          <h2 className="pc-features__title" style={{ fontWeight: 900, color: '#000', WebkitTextStroke: 0 }}>Core Capabilities</h2>
          <span className="pc-eyebrow" style={{ marginBottom: '1.5rem', color: '#1e3a5f' }}>05 / Features</span>
        </div>
        <div className="pc-features__grid">
          {FEATURES.map(f => {
            const IcoComp = Ico[f.icon];
            return (
              <div key={f.no} className="pc-feature-card">
                <span className="pc-feature-no">{f.no} /</span>
                <div className="pc-feature-icon" style={{ background: '#1e3a5f' }}><IcoComp /></div>
                <h3 className="pc-feature-name">{f.name}</h3>
                <p className="pc-feature-desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pc-integrations">
        <div className="pc-integrations__inner">
          <span className="pc-eyebrow" style={{ color: '#1e3a5f' }}>06 / Third-Party Services Used</span>
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
          <span className="pc-eyebrow" style={{ color: '#1e3a5f' }}>07 / Technology Stack</span>
          <h2 className="pc-section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.25rem)', marginBottom: 0 }}>Built With the Right Tools.</h2>
          <div className="pc-tech__list">
            {TECH.map(t => <span key={t} className="pc-tech__pill">{t}</span>)}
          </div>
        </div>
      </section>

      <section className="pc-results" style={{ background: '#1e3a5f' }}>
        <div className="pc-results__inner">
          <div className="pc-results__left">
            <span className="pc-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>08 / Results</span>
            <h2 className="pc-results__heading">Complete<br />Publishing<br />Platform.</h2>
            <p className="pc-results__text">Blog CMS delivers a production-ready publishing system with WYSIWYG editing, SEO automation, multi-author support, and newsletter integration — all built solo as a MERN stack showcase.</p>
            <a href="https://github.com/satasiyakrish1" className="pc-results__link">View Live Platform ↗</a>
          </div>
          <div className="pc-results__right">
            <div className="pc-results__metrics">
              {[
                { num: '4',   label: 'User roles' },
                { num: '8+',  label: 'API integrations' },
                { num: '30+', label: 'Features shipped' },
                { num: 'SEO', label: 'Built-in toolkit' },
                { num: '100', label: 'Lighthouse target' },
                { num: 'AI',  label: 'Content moderation' },
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
