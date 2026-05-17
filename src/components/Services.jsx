import React from 'react';
import './Services.css';

const SERVICES = [
  {
    title: 'Frontend Engineering',
    items: [
      'React, Next.js, Vue.js applications',
      'Pixel-perfect UI from Figma/XD designs',
      'Performance optimization & Core Web Vitals',
      'Component libraries & design systems',
    ],
  },
  {
    title: 'Backend & API Development',
    items: [
      'Node.js, Express, REST & GraphQL APIs',
      'Database design (PostgreSQL, MongoDB)',
      'Authentication, security & scalability',
      'Third-party integrations & microservices',
    ],
  },
  {
    title: 'UI/UX Design',
    items: [
      'User research & wireframing',
      'High-fidelity Figma prototypes',
      'Design systems for scalable platforms',
      'Conversion-focused interfaces',
    ],
  },
  {
    title: 'Mobile Development',
    items: [
      'React Native cross-platform apps',
      'iOS & Android deployments',
      'Offline-first architectures',
      'Performance tuning & app store publishing',
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      'CI/CD pipelines (GitHub Actions, Vercel)',
      'AWS, GCP, and cloud deployments',
      'Docker & containerization',
      'Monitoring, logging & uptime',
    ],
  },
  {
    title: 'Consulting & Code Review',
    items: [
      'Technical architecture planning',
      'Code audits & refactoring',
      'Team mentoring & pair programming',
      'Project estimation & roadmaps',
    ],
  },
];

export default function Services() {
  return (
    <section className="py-section" id="work">
      <div className="container">
        <h2 className="font-display text-3xl font-semibold lg:text-4xl uppercase">
          Crafting Digital Solutions
        </h2>
        <p className="text-xl lg:text-2xl mt-2 text-gray-600">
          I help businesses design, build, and scale digital products with the right technology — whatever your stage or vision.
        </p>
      </div>

      <div className="mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, index) => (
              <div
                key={svc.title}
                className="service-card group border p-8 hover:border-primary-500 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-medium mb-4">{svc.title}</h3>
                <ul className="service-card__list space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="text-gray-700 flex items-start">
                      <span className="mr-2 text-primary-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mt-12 pb-section">
        <div className="lg:flex lg:justify-end">
          <a href="#contact" className="block">
            <button className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap h-16 px-8 bg-black text-white hover:bg-primary-500 transition-colors w-full lg:w-auto">
              <span className="font-mono font-semibold uppercase whitespace-nowrap">Let's Work Together</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
