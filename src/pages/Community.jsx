import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';
import './Community.css';

/* ─── All Contributions / Events ─── */
const EVENTS = [
  {
    id: '01', name: 'Silver Oak University', community: 'Silver Oak University',
    communityColor: '#003366', logoBg: '#003366', logoText: 'SOU',
    type: 'Education', role: 'Event Manager',
    date: 'Oct 2023 – Oct 2024', duration: '1 yr 1 mo', location: 'Ahmedabad',
    desc: 'Managed and coordinated university-level events, overseeing logistics, scheduling, and stakeholder communication to ensure seamless event execution across academic and extracurricular programs.',
    tags: ['Event Management', 'Coordination', 'University'], badge: null,
  },
  {
    id: '02', name: 'FOLK Clubs (ISKCON – Educational Clubs)', community: 'FOLK Clubs',
    communityColor: '#E67E22', logoBg: '#E67E22', logoText: 'FOLK',
    type: 'Environment', role: 'Student Volunteer',
    date: 'Jul 2023 – Nov 2024', duration: '1 yr 5 mos', location: 'Silver Oak University',
    desc: 'Volunteered with FOLK Clubs (Friends of Lord Krishna), an ISKCON-affiliated educational initiative focused on values-based learning, environmental awareness, and community outreach.',
    tags: ['Volunteering', 'Community', 'Environment', 'Education'], badge: null,
  },
  {
    id: '03', name: 'AWS Cloud Club – Silver Oak University', community: 'AWS Cloud Club',
    communityColor: '#FF9900', logoBg: '#FF9900', logoText: 'AWS',
    type: 'Education', role: 'Student Volunteer',
    date: 'Jan 2024 – Nov 2024', duration: '11 mos', location: 'Silver Oak University',
    desc: 'Supported AWS Cloud Club activities as a student volunteer — contributing to workshops, cloud sessions, and peer learning events focused on AWS services and cloud fundamentals.',
    tags: ['AWS', 'Cloud', 'Volunteering', 'Education'], badge: null,
  },
  {
    id: '04', name: 'Silver Oak University IEEE SB', community: 'IEEE Student Branch',
    communityColor: '#00629B', logoBg: '#00629B', logoText: 'IEEE',
    type: 'Arts & Culture', role: 'Creative Designer',
    date: 'Jan 2024 – Dec 2025', duration: '2 yrs', location: 'Silver Oak University',
    desc: 'Served as Creative Designer for IEEE Student Branch, designing promotional materials, event posters, social media graphics, and branding assets for technical fests and seminars.',
    tags: ['Graphic Design', 'IEEE', 'Branding', 'Creatives'], badge: null,
  },
  {
    id: '05', name: 'GirlScript Summer of Code', community: 'GirlScript',
    communityColor: '#FF6B35', logoBg: '#FF6B35', logoText: 'GSS',
    type: 'Science & Technology', role: 'Student Volunteer',
    date: 'May 2024 – Aug 2024', duration: '4 mos', location: 'Remote',
    desc: 'Volunteered at GirlScript Summer of Code (GSSoC), one of India\'s largest open-source programs — supporting participants, reviewing contributions, and promoting open-source culture.',
    tags: ['Open Source', 'GSSoC', 'Volunteering', 'Mentoring'], badge: null,
  },
  {
    id: '06', name: 'GDG on Campus: Silver Oak University', community: 'Google Developer Groups',
    communityColor: '#0F9D58', logoBg: '#0F9D58', logoText: 'GDC',
    type: 'Science & Technology', role: 'Cloud Facilitator',
    date: 'Sep 2024 – Dec 2024', duration: '4 mos', location: 'Silver Oak University',
    desc: 'Facilitated cloud learning sessions and workshops as Cloud Facilitator for GDG on Campus Silver Oak, helping students explore Google Cloud technologies and hands-on labs.',
    tags: ['Google Cloud', 'GDG', 'Facilitation', 'Workshop'], badge: null,
  },
  {
    id: '07', name: 'GDG on Campus: Silver Oak University', community: 'Google Developer Groups',
    communityColor: '#4285F4', logoBg: '#4285F4', logoText: 'GDC',
    type: 'Science & Technology', role: 'Technical Volunteer',
    date: 'Oct 2024 – Dec 2025', duration: '1 yr 3 mos', location: 'Silver Oak University',
    desc: 'Contributed as Technical Volunteer for GDG on Campus, assisting in technical event setup, speaker coordination, content creation, and community engagement activities.',
    tags: ['GDG', 'Technical', 'Volunteering', 'Community'], badge: null,
  },
  {
    id: '08', name: 'Google Maps', community: 'Google Maps',
    communityColor: '#EA4335', logoBg: '#EA4335', logoText: 'GM',
    type: 'Science & Technology', role: 'Freelance Contributor',
    date: 'Feb 2025 – Present', duration: '1 yr 4 mos', location: 'Remote',
    desc: 'Contributing to Google Maps as a Local Guide / Freelance contributor — submitting reviews, photos, place edits, and information to improve the accuracy of Google Maps data.',
    tags: ['Google Maps', 'Local Guide', 'Contribution', 'Geo'], badge: null,
  },
  {
    id: '09', name: 'GDG Cloud Gandhinagar', community: 'GDG Cloud Gandhinagar',
    communityColor: '#4285F4', logoBg: '#4285F4', logoText: 'GDG',
    type: 'Science & Technology', role: 'Graphics Designer Volunteer',
    date: 'Feb 2025 – Present', duration: '1 yr 4 mos', location: 'Gandhinagar',
    desc: 'Designing visual assets, event banners, and social media creatives for GDG Cloud Gandhinagar. Recognised with an Outstanding Contribution award for design excellence.',
    tags: ['Graphic Design', 'GDG Cloud', 'Creatives', 'Social Media'],
    badge: '⭐ Outstanding Contribution',
  },
  {
    id: '10', name: 'GirlScript Summer of Code', community: 'GirlScript',
    communityColor: '#FF6B35', logoBg: '#FF6B35', logoText: 'GSS',
    type: 'Science & Technology', role: 'Campus Ambassador',
    date: 'Jun 2025 – Jul 2025', duration: '2 mos', location: 'Remote',
    desc: 'Acted as Campus Ambassador for GSSoC 2025 — promoting the program on campus, onboarding student contributors, and being the primary point of contact for GSSoC at Silver Oak University.',
    tags: ['Campus Ambassador', 'GSSoC', 'Open Source', 'Outreach'], badge: null,
  },
  {
    id: '11', name: 'Google Developers Group Gandhinagar', community: 'GDG Gandhinagar',
    communityColor: '#4285F4', logoBg: '#4285F4', logoText: 'GDG',
    type: 'Science & Technology', role: 'Graphic Design & Management Team',
    date: 'Aug 2025 – Present', duration: '10 mos', location: 'Gandhinagar',
    desc: 'Part of the core team at GDG Gandhinagar handling Graphic Design and Event Management — creating visual branding, coordinating speakers, and managing community logistics.',
    tags: ['GDG', 'Design', 'Management', 'Community'], badge: null,
  },
  {
    id: '12', name: 'JavaScript Gujarat', community: 'JavaScript Gujarat',
    communityColor: '#B8860B', logoBg: '#B8860B', logoText: 'JSG',
    type: 'Science & Technology', role: 'Student Volunteer',
    date: 'Aug 2025 – Present', duration: '10 mos', location: 'Gujarat',
    desc: 'Volunteering with JavaScript Gujarat — the regional JS developer community — supporting meetups, workshops, and events focused on JavaScript, web development, and frontend ecosystems.',
    tags: ['JavaScript', 'Community', 'Volunteering', 'Web Dev'], badge: null,
  },
  {
    id: '13', name: 'Open Source Weekend', community: 'Open Source Weekend',
    communityColor: '#1A1A2E', logoBg: '#1A1A2E', logoText: 'OSW',
    type: 'Science & Technology', role: 'Graphics Designer Volunteer',
    date: 'Aug 2025 – Present', duration: '10 mos', location: 'Remote',
    desc: 'Designing graphics and visual assets for Open Source Weekend (OSW). Awarded Volunteer Badge and OSD Volunteer recognition.',
    tags: ['Open Source', 'Graphic Design', 'OSW', 'Volunteering'],
    badge: '🏅 Volunteer Badge · OSD Volunteer',
  },
  {
    id: '14', name: 'Pixelverse.community', community: 'Pixelverse',
    communityColor: '#6C3483', logoBg: '#6C3483', logoText: 'PXV',
    type: 'Science & Technology', role: 'Design Volunteer',
    date: 'Dec 2025 – Present', duration: '6 mos', location: 'Remote',
    desc: 'Contributing as Design Volunteer at Pixelverse.community — a design-focused tech community — creating visual content, event collaterals, and brand assets for community initiatives.',
    tags: ['Design', 'Pixelverse', 'Community', 'Branding'], badge: null,
  },
  {
    id: '15', name: 'Laracon India', community: 'Laracon India',
    communityColor: '#FF2D20', logoBg: '#FF2D20', logoText: 'LC',
    type: 'Science & Technology', role: 'Volunteer · Tech Event Coordinator',
    date: 'Jan 2026 – Present', duration: '5 mos', location: 'India',
    desc: 'Volunteering at Laracon India — the largest Laravel conference in India. Coordinating technical operations, on-ground logistics, volunteer teams, and digital/social media coverage.',
    tags: ['Laracon', 'Laravel', 'Event Coordination', 'Volunteer'], badge: null,
  },
];

const CATEGORIES = ['All', 'Science & Technology', 'Education', 'Arts & Culture', 'Environment'];

export default function Community() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? EVENTS
    : EVENTS.filter(e => e.type === activeFilter);

  return (
    <div className="ip-root">
      <div className="ip-bg-accent" />

      <div className="container ip-wrap">
        {/* Hero */}
        <header className="ip-hero">
          <div className="ip-hero__top">
            <div className="ip-hero__badge">
              <span className="ip-hero__badge-dot" />
              Community Contributions
            </div>
            <span className="ip-hero__date">2023 – Present</span>
          </div>

          <div className="ip-hero__body">
            <h1 className="ip-hero__title">
              <span className="ip-hero__line ip-hero__line--1">Meet.</span>
              <span className="ip-hero__line ip-hero__line--2">Share.</span>
              <span className="ip-hero__line ip-hero__line--3">Grow.</span>
            </h1>
            <div className="ip-hero__meta">
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Communities</span>
                <span className="ip-hero__meta-value">12+ Active</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Contributions</span>
                <span className="ip-hero__meta-value">15 Roles</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Since</span>
                <span className="ip-hero__meta-value">Jul 2023</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Status</span>
                <span className="ip-hero__meta-value" style={{ color: '#4452FF' }}>● Actively Contributing</span>
              </div>
            </div>
          </div>

          <p className="ip-hero__sub">
            Actively contributing across 12+ developer communities, open-source programs, and tech events — from Google Developer Groups to Laracon India.
          </p>
        </header>

        {/* ── All Contributions List with Logos ── */}
        <section className="ip-section">
          <div className="cm-events-header">
            <span className="exp-section-header__label font-mono">All Contributions</span>
            <span className="exp-section-header__count font-mono">{EVENTS.length} Roles</span>
          </div>

          {/* Filter pills */}
          <div className="cm-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`cm-filter-pill font-mono ${activeFilter === cat ? 'cm-filter-pill--active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Event list */}
          <div className="cm-events-list">
            {filtered.map((ev) => (
              <div key={ev.id} className="cm-event-row">
                {/* Logo */}
                <div className="cm-event-row__logo" style={{ background: ev.logoBg }}>
                  <span className="cm-event-row__logo-text font-mono">{ev.logoText}</span>
                </div>

                <div className="cm-event-row__body">
                  <div className="cm-event-row__top">
                    <div>
                      <h3 className="cm-event-row__name font-display">{ev.name}</h3>
                      <div className="cm-event-row__meta font-mono">
                        <span>{ev.role}</span>
                        <span className="cm-event-row__sep">·</span>
                        <span>{ev.date}</span>
                        <span className="cm-event-row__sep">·</span>
                        <span>{ev.location}</span>
                      </div>
                    </div>
                    <div className="cm-event-row__badges">
                      <span className="cm-event-row__type font-mono" style={{ borderColor: ev.communityColor, color: ev.communityColor }}>
                        {ev.type}
                      </span>
                      <span className="cm-event-row__date font-mono">{ev.duration}</span>
                    </div>
                  </div>

                  {ev.badge && (
                    <div className="cm-event-row__badge-award font-mono">{ev.badge}</div>
                  )}

                  <p className="cm-event-row__desc">{ev.desc}</p>

                  <div className="cm-event-row__tags">
                    {ev.tags.map(t => <span key={t} className="edu-tag font-mono">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="ip-cta">
          <div className="ip-cta__inner">
            <span className="ip-cta__label font-mono">Let's Connect</span>
            <h2 className="ip-cta__title font-display">Organizing an event or building a community?</h2>
            <div className="ip-cta__actions">
              <a href="mailto:krishsatasiya44@gmail.com" className="ip-cta__btn font-mono">Reach Out →</a>
              <Link to="/contributions" className="ip-cta__btn-outline font-mono">View All List</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
