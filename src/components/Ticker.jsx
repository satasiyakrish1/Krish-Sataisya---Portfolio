import React from 'react';
import './Ticker.css';

const ITEMS = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Figma', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'Tailwind CSS', 'GraphQL', 'React Native',
];

export default function Ticker() {
  return (
    <div className="ticker bg-black text-white py-4 overflow-hidden">
      <div className="ticker__track flex gap-8 whitespace-nowrap">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="ticker__item font-mono text-sm uppercase font-semibold flex items-center gap-8">
            {item}
            <span className="ticker__dot" style={{ color: 'var(--color-primary-500)' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
