import React from 'react';
import './InfoPage.css';

/* ─── DATA ─── */
const EDUCATION = [
  {
    degree: 'B.Tech — Computer Engineering',
    institution: 'Silver Oak College of Technology (SOCET)',
    location: 'Silver Oak University, Ahmedabad',
    period: '2023 – Present',
    grade: 'Ongoing',
    description: 'Pursuing a Bachelor of Technology in Computer Engineering at Silver Oak University, actively engaged in Google Developer Groups (GDG), IEEE Clubs, AWS Clubs, and Red Hat Clubs alongside a strong technical curriculum.',
    highlights: ['Computer Engineering', 'Google Developer Groups', 'IEEE Club', 'AWS Club', 'Red Hat Club'],
    status: 'Ongoing',
    logoText: 'SOC',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/SOCET.png',
  },
  {
    degree: 'H.S.C — 12th Science (GSHEB)',
    institution: 'The Imperial Science School',
    location: 'Gujarat, India',
    period: '2021 – 2023',
    grade: 'Science Stream',
    description: 'Completed Higher Secondary Certificate under the Gujarat Secondary and Higher Secondary Education Board (GSHEB). Focused on Physics, Chemistry, Mathematics, and Computer Science, developing strong analytical and scientific reasoning.',
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'GSHEB Board'],
    status: 'Completed',
    logoText: 'IMP',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Impirial.png',
  },
  {
    degree: 'S.S.C — 10th Board (GSHEB)',
    institution: 'The Imperial Science School',
    location: 'Gujarat, India',
    period: '2020 – 2021',
    grade: 'Secondary Education',
    description: 'Completed Secondary School Certificate under GSHEB, excelling in Mathematics and Science with a strong foundation in logical thinking and academic discipline.',
    highlights: ['Mathematics', 'Science', 'English', 'Social Studies', 'GSHEB Board'],
    status: 'Completed',
    logoText: 'IMP',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Impirial.png',
  },
  {
    degree: '9th Standard (GSEB)',
    institution: 'The Imperial Science School',
    location: 'Gujarat, India',
    period: '2019 – 2020',
    grade: 'Secondary Education',
    description: 'Continued secondary education at Imperial Science School under GSEB, building core academic competencies in science, mathematics, and language skills.',
    highlights: ['Mathematics', 'Science', 'English', 'GSEB Board'],
    status: 'Completed',
    logoText: 'IMP',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Impirial.png',
  },
  {
    degree: 'LKG – 8th Standard (GSEB)',
    institution: 'Shree Lal Bahadur Vidhyalaya',
    location: 'Jamkandorna, Gujarat',
    period: 'Until 2019',
    grade: 'GSEB · Gujarati Medium',
    description: 'Completed foundational schooling from LKG through 8th Standard at Shree Lal Bahadur Vidhyalaya, Jamkandorna — a Gujarati medium institution affiliated with GSEB. Built a strong base in language, mathematics, and moral values.',
    highlights: ['Gujarati Medium', 'GSEB Board', 'Foundational Education', 'Mathematics', 'Languages'],
    status: 'Completed',
    logoText: 'SLB',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Lal Bhadur Vidhayalay.png',
  },
];

export default function Education() {
  return (
    <div className="ip-root">
      <div className="ip-bg-accent" />

      <div className="container ip-wrap">
        {/* Hero */}
        <header className="ip-hero">
          <div className="ip-hero__top">
            <div className="ip-hero__badge">
              <span className="ip-hero__badge-dot" />
              Academic Background
            </div>
            <span className="ip-hero__date">2019 – 2026</span>
          </div>

          <div className="ip-hero__body">
            <h1 className="ip-hero__title">
              <span className="ip-hero__line ip-hero__line--1">Learn.</span>
              <span className="ip-hero__line ip-hero__line--2">Grow.</span>
              <span className="ip-hero__line ip-hero__line--3">Build.</span>
            </h1>
            <div className="ip-hero__meta">
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Institution</span>
                <span className="ip-hero__meta-value">Silver Oak University</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Degree</span>
                <span className="ip-hero__meta-value">B.Tech — Computer Engineering</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Status</span>
                <span className="ip-hero__meta-value" style={{ color: '#4452FF' }}>Ongoing · 2023–Present</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Clubs</span>
                <span className="ip-hero__meta-value">GDG · IEEE · AWS · Red Hat</span>
              </div>
            </div>
          </div>

          <p className="ip-hero__sub">
            A structured academic path grounded in Computer Science, enriched by self-driven online certifications and real-world project building.
          </p>
        </header>

        {/* Timeline */}
        <section className="ip-section">
          <div className="ip-section__label font-mono">Education Timeline</div>
          <div className="edu-timeline">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-card__meta">
                  <span className="edu-card__period font-mono">{edu.period}</span>
                  <span className="edu-card__status">{edu.status}</span>
                </div>
                <div className="edu-card__body">
                  <div className="edu-card__logo" style={{ background: edu.logoBg || '#fafafa', overflow: 'hidden' }}>
                    {edu.logoImg ? (
                      <img src={edu.logoImg} alt={edu.institution} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                    ) : (
                      <span className="edu-card__logo-text font-mono">{edu.logoText}</span>
                    )}
                  </div>
                  <div className="edu-card__index font-mono">0{idx + 1}</div>
                  <div className="edu-card__content">
                    <h2 className="edu-card__degree font-display">{edu.degree}</h2>
                    <div className="edu-card__inst">
                      <span>{edu.institution}</span>
                      <span className="edu-card__sep">·</span>
                      <span className="edu-card__loc">{edu.location}</span>
                    </div>
                    <div className="edu-card__grade font-mono">{edu.grade}</div>
                    <p className="edu-card__desc">{edu.description}</p>
                    <div className="edu-card__tags">
                      {edu.highlights.map(h => (
                        <span key={h} className="edu-tag font-mono">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
