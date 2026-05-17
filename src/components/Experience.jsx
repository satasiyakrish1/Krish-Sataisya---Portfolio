import React from 'react';
import './Experience.css';

const EXPERIENCE = [
  {
    role: 'Technical Development / UI/UX',
    company: 'FREELANCER',
    period: 'Jan 2024 - Present',
    desc: 'Developed custom MERN applications & designed pixel-perfect interfaces using Figma for global clients.',
    tags: ['MERN', 'UI/UX', 'SEO'],
  },
  {
    role: 'Product Design Intern',
    company: 'RIDHIVAM',
    period: 'July 2025 - Present',
    desc: 'Collaborated with UI/UX teams to develop intuitive product prototypes and digital brand assets.',
    tags: ['Product Design', 'Figma', 'Prototyping'],
  },
  {
    role: 'Graphics & Social Media',
    company: 'WCOOPEF',
    period: 'Jan 2025 - July 2025',
    desc: 'Created visual content for social campaigns, improving user engagement by 35%.',
    tags: ['Branding', 'Analytics', 'Design'],
  },
  {
    role: 'Community Coordinator',
    company: 'EXPLOTXPLORERS',
    period: 'Dec 2023 - April 2025',
    desc: 'Led web development for community platforms and conducted UI/UX & Full-stack workshops.',
    tags: ['Leadership', 'Workshops', 'MERN'],
  },
];

const EDUCATION = [
  {
    school: 'Silver Oak University',
    degree: 'B.Tech Computer Engineering',
    year: '2023 - 2027',
    score: '9.4 SPI',
  },
  {
    school: 'The Imperial Science School',
    degree: 'Class XII (PCM - GSEB)',
    year: '2022 - 2023',
    score: 'High Honors',
  },
];

export default function Experience() {
  return (
    <section className="experience-section border-t" id="about">
      <div className="container py-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Experience */}
          <div className="lg:col-span-8">
            <div className="exp-timeline">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="exp-item group border p-8 mb-[-1px] hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase">{exp.role}</h3>
                      <p className="font-mono text-primary-500 font-bold uppercase text-sm mt-1">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs font-bold bg-black text-white px-3 py-1 uppercase self-start md:self-center">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] font-bold border px-2 py-0.5 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education & Awards */}
          <div className="lg:col-span-4">
            <div className="edu-stack mb-12">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="edu-item border p-6 mb-[-1px]">
                  <span className="font-mono text-[10px] text-primary-500 font-bold uppercase">{edu.year}</span>
                  <h4 className="font-display font-bold uppercase mt-1">{edu.degree}</h4>
                  <p className="text-sm text-gray-500 mb-4">{edu.school}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-black text-2xl">{edu.score}</span>
                    <span className="font-mono text-[10px] uppercase font-bold text-gray-400">Score</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="cert-tags flex flex-wrap gap-2">
              {['AWS Educate', 'Google Cloud', 'RedHat (DO101)', 'MERN (Udemy)', 'Java', 'GitHub Foundations'].map(cert => (
                <span key={cert} className="bg-gray-100 px-3 py-1 font-mono text-[10px] font-bold uppercase">
                  {cert}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
