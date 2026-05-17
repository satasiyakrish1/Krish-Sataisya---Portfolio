import React from 'react';
import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Alignment',
    desc: 'We align on your goals, user needs, and technical constraints to define a clear, execution-ready roadmap.',
    dark: true,
  },
  {
    num: '02',
    title: 'Planning & Strategy',
    desc: 'Technical architecture planning, resource allocation, timeline creation, and risk assessment to ensure project success.',
    dark: false,
  },
  {
    num: '03',
    title: 'Design & Prototyping',
    desc: 'User flows, wireframes, and interactive prototypes that validate assumptions before development begins.',
    dark: true,
  },
  {
    num: '04',
    title: 'Development & QA',
    desc: 'Iterative development with continuous testing, security reviews, and transparent progress updates.',
    dark: false,
  },
  {
    num: '05',
    title: 'Launch & Support',
    desc: 'Deployment, monitoring, performance optimization, and ongoing enhancements as your product evolves.',
    dark: true,
  },
];

export default function Process() {
  return (
    <section className="py-section">
      <div className="container">
        <h2 className="font-display text-3xl font-semibold lg:text-4xl">My Development Process</h2>
        <p className="text-xl lg:text-2xl mt-2 text-gray-600">
          A structured, product-first approach designed to reduce risk, ensure clarity, and deliver predictable outcomes.
        </p>
      </div>

      <div className="mt-8 border-y border-black">
        <div className="container">
          <div className="flex flex-nowrap w-full overflow-x-auto lg:overflow-visible border-x border-black scrollbar-hide">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className={`flex-none w-[280px] md:w-1/3 lg:flex-1 lg:w-auto flex flex-col p-8 border-r last:border-r-0 border-black ${
                  step.dark ? 'bg-black text-white' : 'bg-gray-800 text-white'
                }`}
              >
                <div className="process-card__badge">
                  <span className="font-mono font-bold text-5xl" style={{ color: 'var(--color-primary-500)' }}>
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-medium mt-16 flex-1">
                  {step.title}
                </h3>
                <p className="text-lg mt-5 text-gray-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
