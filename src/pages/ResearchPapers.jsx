import React from 'react';
import '../components/Projects.css';
import './ProjectsPage.css';

const RESEARCH_PAPERS = [
  {
    title: 'Introduction to AI and AI Problems',
    desc: 'A foundational overview of artificial intelligence concepts, key challenges, and emerging problem domains in the AI landscape.',
    category: 'Artificial Intelligence',
    tags: ['AI', 'Machine Learning'],
    bg: '#0a0a0a',
    light: false,
    year: '2024',
    link: 'https://www.researchgate.net/publication/400493929_Introduction_to_AI_and_AI_Problems',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'AI-Driven Remote Patient Monitoring Using Wearables and IoT',
    desc: 'A next-gen approach to preventive healthcare leveraging AI, wearable sensors, and IoT for continuous remote patient monitoring.',
    category: 'Healthcare AI',
    tags: ['AI', 'IoT', 'Healthcare', 'Wearables'],
    bg: '#0d1b2a',
    light: false,
    year: '2025',
    link: 'https://ijdieret.in/IJDI-ERET/Journal-Issues/June-2026-Vol-15-No-1',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=600&auto=format&fit=crop',
  },
];

const CATEGORIES = [...new Set(RESEARCH_PAPERS.map(p => p.category))];

export default function ResearchPapers() {
  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section id="projects-hero">
        <div className="container py-section">
          <div className="font-mono uppercase text-lg font-semibold leading-tight text-primary-500" style={{ marginBottom: '0.375rem' }}>
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
                <a key={i} href={proj.link} target="_blank" rel="noopener noreferrer" className="project-card group">
                  <div className="project-card__thumb" style={{ backgroundColor: proj.bg }}>
                    {proj.image ? (
                      <img src={proj.image} alt={proj.title} className="project-card__img" loading="lazy" />
                    ) : (
                      <span className={`project-card__initial ${proj.light ? 'text-black' : 'text-white'}`}>
                        {proj.title[0]}
                      </span>
                    )}
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
