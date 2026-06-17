import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

const SITEMAP_SECTIONS = [
  {
    title: 'Core Navigation',
    links: [
      { name: 'Home / Landing Page', path: '/' },
      { name: 'Projects Portfolio', path: '/projects' },
      { name: 'Research Publications', path: '/research' },
      { name: 'Design Portfolio', path: '/design' },
    ],
  },
  {
    title: 'Home Page Sections',
    links: [
      { name: 'Core Skills & Stack', path: '/#skills' },
      { name: 'Why Hire Me', path: '/#whyme' },
      { name: 'Key Stats & Milestones', path: '/#stats' },
      { name: 'Client Testimonials', path: '/#testimonials' },
      { name: 'Contact & Inquiries', path: '/#contact' },
    ],
  },
  {
    title: 'Case Studies',
    links: [
      { name: 'Prescripto (AI Healthcare)', path: '/project/prescripto' },
      { name: 'Hirix (Job Platform)', path: '/project/hirix' },
      { name: 'Quarix (Enterprise App)', path: '/project/quarix' },
      { name: 'Blog CMS (Content Management)', path: '/project/blogcms' },
    ],
  },
  {
    title: 'Credentials & Journey',
    links: [
      { name: 'Achievements & Certificates', path: '/achievements' },
      { name: 'Education Timeline', path: '/education' },
      { name: 'Professional Experience', path: '/experience' },
      { name: 'Freelancing Services', path: '/freelancing' },
      { name: 'Community Contributions', path: '/community' },
      { name: 'Speaking & Keynotes', path: '/speaking' },
      { name: 'Contributions List', path: '/contributions' },
    ],
  },
  {
    title: 'Static Mini-Apps & Games',
    links: [
      { name: '3D Solar System Simulator', path: '/Projects/3D Solar System/index.html' },
      { name: 'Animated Periodic Table', path: '/Projects/Animated Periodic Table/index.html' },
      { name: 'Graph Book Canvas Calculator', path: '/Projects/Graph - Book/index.html' },
      { name: 'Digital Board Whiteboard', path: '/Projects/White Bord Pro/index.html' },
      { name: 'Calculator Pro PWA', path: '/Projects/Calculator/index.html' },
      { name: 'Calendar Pro Event Manager', path: '/Projects/Celender Pro/celender.html' },
      { name: 'Notes PWA Markdown Editor', path: '/Projects/Notes/index.html' },
      { name: 'Photo Editor Canvas App', path: '/Projects/photo editing web application/index.html' },
      { name: 'Keyboard Learning Typing Tutor', path: '/Projects/Keybord/index.html' },
      { name: 'Cube 3D Puzzle Game', path: '/Projects/Cube/index.html' },
      { name: 'Archery Game Canvas Physics', path: '/Projects/Archry/index.html' },
      { name: 'Electron Builder Dist App', path: '/Projects/electron-builder/dist/index.html' },
    ],
  },
  {
    title: 'Resources & Docs',
    links: [
      { name: 'Social Linktree', path: '/links' },
      { name: 'Curriculum Vitae (CV)', path: '/cv' },
      { name: 'Professional Resume', path: '/resume' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Sitemap', path: '/sitemap' },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="ip-root">
      <div className="ip-bg-accent" />

      <div className="container ip-wrap">
        {/* Hero */}
        <header className="ip-hero">
          <div className="ip-hero__top">
            <div className="ip-hero__badge">
              <span className="ip-hero__badge-dot" />
              Sitemap
            </div>
            <span className="ip-hero__date">Krish Satasiya</span>
          </div>

          <div className="ip-hero__body">
            <h1 className="ip-hero__title">
              <span className="ip-hero__line ip-hero__line--1">Map.</span>
              <span className="ip-hero__line ip-hero__line--2">Find.</span>
              <span className="ip-hero__line ip-hero__line--3">Explore.</span>
            </h1>
            <div className="ip-hero__meta">
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Total Pages</span>
                <span className="ip-hero__meta-value">37 Pages & Sections</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Domain</span>
                <span className="ip-hero__meta-value">krishsatasiya.netlify.app</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Updated</span>
                <span className="ip-hero__meta-value" style={{ color: '#4452FF' }}>● June 2026</span>
              </div>
            </div>
          </div>

          <p className="ip-hero__sub">
            A comprehensive overview of all pages, sections, local static projects, and professional documents available across this portfolio.
          </p>
        </header>

        {/* Sitemap Grid */}
        <section className="ip-section">
          <div className="ip-section__label font-mono">Index of Pages</div>
          
          <div className="cert-grid" style={{ background: '#e5e5e5', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px' }}>
            {SITEMAP_SECTIONS.map((section, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '2rem' }}>
                <h2 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem', color: '#000', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>
                  {section.title}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {section.links.map((link) => {
                    const isExternalOrStatic = link.path.startsWith('http') || link.path.includes('.html') || link.path.startsWith('/Projects/');
                    const LinkTag = isExternalOrStatic ? 'a' : Link;
                    const linkProps = isExternalOrStatic 
                      ? { href: link.path, target: '_blank', rel: 'noopener noreferrer' } 
                      : { to: link.path };
                    return (
                      <li key={link.path}>
                        <LinkTag
                          className="font-mono text-xs uppercase"
                          style={{ 
                            textDecoration: 'none', 
                            color: '#525252', 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            transition: 'color 0.2s, transform 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#4452FF';
                            e.currentTarget.style.transform = 'translateX(4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#525252';
                            e.currentTarget.style.transform = 'none';
                          }}
                          {...linkProps}
                        >
                          <span style={{ color: '#4452FF' }}>→</span> {link.name}
                        </LinkTag>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
