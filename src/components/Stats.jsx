import React from 'react';
import './Stats.css';
import PROFILE from '../utils/profile';

const STATS = [
  {
    value: PROFILE.stats[0].val,
    label: PROFILE.stats[0].label,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=800&fit=crop&q=80',
    alt: 'Competition Winner',
  },
  {
    value: PROFILE.stats[1].val,
    label: PROFILE.stats[1].label,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=800&fit=crop&q=80',
    alt: 'Academic Excellence',
  },
  {
    value: PROFILE.stats[2].val,
    label: PROFILE.stats[2].label,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop&q=80',
    alt: 'Product Impact',
  },
  {
    value: PROFILE.stats[3].val,
    label: PROFILE.stats[3].label,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=800&fit=crop&q=80',
    alt: 'Reliable Engineering',
  },
];

export default function Stats() {
  return (
    <section className="stats-section" id="about">
      <div className="stats-grid">
        {STATS.map((stat, index) => {
          const StatBox = (
            <div key={`stat-${index}`} className={`stat-box stat-box-${index}`}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          );

          const ImgBox = (
            <div key={`img-${index}`} className={`img-box img-box-${index}`}>
              <img
                src={stat.image}
                alt={stat.alt}
                loading="lazy"
                className="grayscale-image"
              />
            </div>
          );

          return index % 2 === 0 ? (
            <React.Fragment key={index}>
              {StatBox}
              {ImgBox}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              {ImgBox}
              {StatBox}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}