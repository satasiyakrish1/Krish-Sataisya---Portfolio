import React from 'react';
import './InfoPage.css';

const EXPERIENCES = [
  {
    role: 'Tech Event Coordinator',
    company: 'Laracon India',
    type: 'Internship',
    location: 'On-Site',
    period: 'Jan 2026 – Jan 2026',
    description: 'Led event operations and technical execution for Laracon, managing on-ground coordination, volunteer teams, and smooth event flow. Contributed to social media handling, graphic design, and development support to ensure seamless digital and offline experiences.',
    stack: ['Event Management', 'Social Media', 'Graphic Design', 'Dev Support'],
    achievements: [
      'Managed on-ground coordination and volunteer teams for full event flow',
      'Handled social media publishing and live event digital coverage',
      'Provided graphic design and development support for event assets',
    ],
    logo: null,
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Kaizenith Technologies',
    type: 'Internship',
    location: 'Remote',
    period: 'Sep 2025 – Dec 2025',
    description: 'Worked on full-stack development projects, implementing CI/CD pipelines and managing workflows via GitHub to streamline deployment and collaboration.',
    stack: ['React', 'Node.js', 'GitHub', 'CI/CD', 'MongoDB'],
    achievements: [
      'Implemented CI/CD pipelines to automate deployment workflows',
      'Managed GitHub-based collaboration across cross-functional dev teams',
      'Built and shipped full-stack features for production-level applications',
    ],
    logo: null,
  },
  {
    role: 'Graphic Designer Intern',
    company: 'Ridhivam™',
    type: 'Internship',
    location: 'Remote',
    period: '2025 – Sep 2025',
    description: 'Designed elegant and eye-catching posters and banners for Ridhivam Jewellery as part of an internship, contributing to enhanced brand appeal and promotional outreach.',
    stack: ['Photoshop', 'Illustrator', 'Canva', 'Brand Design'],
    achievements: [
      'Designed premium posters and banners for jewellery brand campaigns',
      'Elevated brand visual identity through cohesive design language',
      'Delivered print-ready and digital assets for promotional outreach',
    ],
    logo: null,
  },
  {
    role: 'Jr. Graphic Designer',
    company: 'WCOOPEF',
    type: 'Part-Time',
    location: 'Remote',
    period: '2025',
    description: 'Developed engaging visuals and promotional materials to elevate WCOOPEF\'s event branding and outreach.',
    stack: ['Figma', 'Photoshop', 'Event Branding', 'Social Media'],
    achievements: [
      'Created event branding visuals and promotional graphics',
      'Designed social media assets aligned with brand outreach strategy',
      'Delivered high-impact visual content for event campaigns',
    ],
    logo: null,
  },
];

const SKILLS_HIGHLIGHT = [
  { label: 'Languages', value: 'JS · TS · Python · C' },
  { label: 'Frontend', value: 'React · Next.js · Vue' },
  { label: 'Backend', value: 'Node · Express · MongoDB' },
  { label: 'Tools', value: 'Git · Docker · AWS · Figma' },
];

export default function Experience() {
  return (
    <div className="ip-root">
      <div className="ip-bg-accent" />

      <div className="container ip-wrap">
        {/* Hero */}
        <header className="ip-hero">
          <div className="ip-hero__top">
            <div className="ip-hero__badge">
              <span className="ip-hero__badge-dot" />
              Professional Experience
            </div>
            <span className="ip-hero__date">2025 – Present</span>
          </div>

          <div className="ip-hero__body">
            <h1 className="ip-hero__title">
              <span className="ip-hero__line ip-hero__line--1">Ship.</span>
              <span className="ip-hero__line ip-hero__line--2">Scale.</span>
              <span className="ip-hero__line ip-hero__line--3">Lead.</span>
            </h1>
            <div className="ip-hero__meta">
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Current Role</span>
                <span className="ip-hero__meta-value">Full Stack Developer</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Experience</span>
                <span className="ip-hero__meta-value">4 Roles</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Stack</span>
                <span className="ip-hero__meta-value">MERN · Next.js · AWS</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Status</span>
                <span className="ip-hero__meta-value" style={{ color: '#4452FF' }}>Open to Work</span>
              </div>
            </div>
          </div>

          <p className="ip-hero__sub">
            Hands-on experience across startups, tech firms, and live events — building production systems, designing brand assets, and coordinating technical operations.
          </p>
        </header>

        {/* Quick Skills */}
        <div className="exp-skills-bar">
          {SKILLS_HIGHLIGHT.map(s => (
            <div key={s.label} className="exp-skill-item">
              <span className="exp-skill-label font-mono">{s.label}</span>
              <span className="exp-skill-value font-display">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Experience Cards */}
        <section className="ip-section">
          <div className="exp-section-header">
            <span className="exp-section-header__label font-mono">Work History</span>
            <span className="exp-section-header__count font-mono">{EXPERIENCES.length} Roles</span>
          </div>
          <div className="exp-list">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="exp-card">
                {/* Logo box */}
                <div className="exp-card__logo">
                  <span className="exp-card__logo-letter font-display">
                    {exp.company.charAt(0)}
                  </span>
                </div>

                <div className="exp-card__left">
                  <span className="exp-card__type font-mono">{exp.type}</span>
                  <span className="exp-card__period font-mono">{exp.period}</span>
                  <span className="exp-card__loc font-mono">{exp.location}</span>
                </div>

                <div className="exp-card__right">
                  <div className="exp-card__header">
                    <h2 className="exp-card__role font-display">{exp.role}</h2>
                    <span className="exp-card__company font-display">{exp.company}</span>
                  </div>
                  <p className="exp-card__desc">{exp.description}</p>
                  <ul className="exp-achievements">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="exp-achievement font-body">
                        <span className="exp-achievement__dot" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="exp-card__stack">
                    {exp.stack.map(s => (
                      <span key={s} className="edu-tag font-mono">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="ip-cta">
          <div className="ip-cta__inner">
            <span className="ip-cta__label font-mono">Open to Opportunities</span>
            <h2 className="ip-cta__title font-display">Let's Build Something Great Together.</h2>
            <a href="mailto:krishsatasiya44@gmail.com" className="ip-cta__btn font-mono">
              Get In Touch →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
