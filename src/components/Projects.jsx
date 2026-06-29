import React, { useRef, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Prescripto',
    desc: 'Enterprise-grade healthcare management system with doctor scheduling, EMR, and telemedicine.',
    tags: ['Full Stack', 'MERN', 'Healthcare'],
    bg: '#4452FF',
    light: false,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&q=80&fit=crop',
  },
  {
    title: 'Hirix',
    desc: 'Recruitment platform featuring advanced search, ATS, and recruiter dashboards.',
    tags: ['Full Stack', 'MERN', 'Job Portal'],
    bg: '#000000',
    light: false,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&q=80&fit=crop',
  },
  {
    title: 'Quarix',
    desc: 'Enterprise cloud storage system with secure uploads, file sharing, and AES-256 encryption.',
    tags: ['Full Stack', 'Next.js', 'Cloud'],
    bg: '#111827',
    light: false,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=640&q=80&fit=crop',
  },
  {
    title: 'Imagica AI',
    desc: 'AI-powered image generation platform using DALL-E and Stable Diffusion.',
    tags: ['Full Stack', 'React', 'AI'],
    bg: '#7c3aed',
    light: false,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=640&q=80&fit=crop',
  },
  {
    title: '3D Solar System',
    desc: 'Interactive 3D solar system simulator with realistic orbits and planetary textures.',
    tags: ['Interactive', 'Three.js', 'WebGL'],
    bg: '#0f172a',
    light: false,
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=640&q=80&fit=crop',
  },
  {
    title: 'Figma Clone',
    desc: 'Real-time collaborative design tool built with Next.js and Fabric.js.',
    tags: ['Clone', 'Next.js', 'WebSockets'],
    bg: '#000000',
    light: false,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&q=80&fit=crop',
  },
];

function ProjectCard({ proj, onHoldStart, onHoldEnd }) {
  const [held, setHeld] = useState(false);
  const timerRef = useRef(null);
  const firedRef = useRef(false);

  const handleTouchStart = useCallback(() => {
    firedRef.current = false;
    onHoldStart();
    timerRef.current = setTimeout(() => {
      firedRef.current = true;
      setHeld(true);
    }, 5000);
  }, [onHoldStart]);

  const handleTouchEnd = useCallback(() => {
    clearTimeout(timerRef.current);
    if (!firedRef.current) {
      onHoldEnd();
    }
  }, [onHoldEnd]);

  const handleTap = useCallback(() => {
    if (firedRef.current && held) {
      firedRef.current = false;
      setHeld(false);
      onHoldEnd();
    }
  }, [held, onHoldEnd]);

  return (
    <div
      className={`project-card group${held ? ' mobile-held' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onClick={handleTap}
    >
      <div className="project-card__thumb" style={{ backgroundColor: proj.bg }}>
        {proj.image ? (
          <img src={proj.image} alt={proj.title} className="project-card__img" />
        ) : (
          <span className={`project-card__initial ${proj.light ? 'text-black' : 'text-white'}`}>
            {proj.title[0]}
          </span>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__top">
          <h3 className="project-card__title">{proj.title}</h3>
          <span className="project-card__arrow">→</span>
        </div>
        <p className="project-card__desc">{proj.desc}</p>
        <div className="project-card__tags">
          {proj.tags.map(t => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const navigate = useNavigate();
  const trackRef = useRef(null);

  const pauseScroll = useCallback(() => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  }, []);

  const resumeScroll = useCallback(() => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  }, []);

  return (
    <section className="py-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <h2 className="font-display text-3xl font-semibold lg:text-4xl">Projects</h2>
            <p className="text-xl lg:text-2xl mt-2 text-gray-600">
              Real-world products built to solve problems and scale reliably.
            </p>
          </div>
          <button onClick={() => navigate('/projects')} className="projects-all-btn">
            View All Projects <span>→</span>
          </button>
        </div>
      </div>

      <div className="projects-marquee-wrapper">
        <div className="projects-marquee">
          <div ref={trackRef} className="projects-marquee__track">
            {[...PROJECTS, ...PROJECTS].map((proj, i) => (
              <ProjectCard key={i} proj={proj} onHoldStart={pauseScroll} onHoldEnd={resumeScroll} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
