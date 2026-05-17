import React from 'react';
import '../components/Projects.css';
import './ProjectsPage.css';

const RESEARCH_PAPERS = [
  {
    title: 'Advancements in Medical AI',
    desc: 'An exploration of deep learning models in real-time medical imaging.',
    category: 'Machine Learning',
    tags: ['AI', 'Healthcare'],
    bg: '#000000',
    light: false,
    year: '2024',
    link: '#',
  },
  {
    title: 'Cloud Security Posture',
    desc: 'Analyzing vulnerabilities in multi-cloud architectures.',
    category: 'Cybersecurity',
    tags: ['Cloud', 'Security'],
    bg: '#111827',
    light: false,
    year: '2023',
    link: '#',
  }
];

const CATEGORIES = [...new Set(RESEARCH_PAPERS.map(p => p.category))];

export default function ResearchPapers() {
  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section id="projects-hero">
        <div className="container py-section">
          <div className="font-mono uppercase text-lg font-semibold leading-tight text-primary-500">
            Publications
          </div>
          <div className="mt-2 grid gap-2 lg:grid-cols-5 lg:gap-12">
            <div className="font-display text-3xl md:text-4xl font-semibold lg:text-5xl lg:col-span-2">
              <h1>Research Papers</h1>
            </div>
            <div className="[&_a]:underline text-lg self-end lg:col-span-3">
              <p>Explore my academic and independent research papers covering various fields in computer science and technology.</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-3 lg:gap-0 lg:items-end">
            <div className="mt-8 aspect-[32/9] overflow-hidden border w-full">
              <img 
                onError={(e) => e.target.setAttribute('data-error', 1)} 
                width="400" 
                height="650" 
                alt="Research" 
                loading="lazy" 
                src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2426&auto=format&fit=crop" 
                className="size-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid By Categories */}
      <div className="container projects-page__grid-wrap">
        {CATEGORIES.map(cat => (
          <div key={cat} className="projects-category-section mb-16">
            <h2 className="projects-category-title mb-8 text-2xl font-semibold border-b pb-2">{cat}</h2>
            <div className="projects-page__grid">
              {RESEARCH_PAPERS.filter(p => p.category === cat).map((proj, i) => (
                <a key={i} href={proj.link} className="project-card group">
                  <div className="project-card__thumb" style={{ backgroundColor: proj.bg }}>
                    <span className={`project-card__initial ${proj.light ? 'text-black' : 'text-white'}`}>
                      {proj.title[0]}
                    </span>
                  </div>
                  <div className="project-card__body">
                    <div className="project-card__top">
                      <h2 className="project-card__title">{proj.title}</h2>
                      <span className="project-card__arrow">→</span>
                    </div>
                    <p className="project-card__desc">{proj.desc}</p>
                    <div className="project-card__footer">
                      <div className="project-card__tags">
                        {proj.tags.map(t => (
                          <span key={t} className="project-card__tag">{t}</span>
                        ))}
                      </div>
                      <span className="project-card__year">{proj.year}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
