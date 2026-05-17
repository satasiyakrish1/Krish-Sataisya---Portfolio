import React from 'react';
import './Hero.css';
import PROFILE from '../utils/profile';

const Icons = {
  Location: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Education: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Email: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  GitHub: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container pt-24 md:pt-32 lg:pt-48 pb-16 lg:pb-24">
        
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__identity-wrapper">
              <div className="hero__identity-line" />
              <span className="hero__pre-name font-mono">Hi, I'm</span>
            </div>
            <h2 className="hero__name font-display">{PROFILE.name}</h2>
            <p className="hero__designation font-mono">{PROFILE.role}</p>
            <h1 className="hero__title mt-8">
              Building clarity where <br /> others add complexity
            </h1>
            <p className="hero__description">
              I help businesses design, build, and scale digital products with the right technology — whatever your stage or vision.
            </p>
            <div className="hero__actions">
              <a href="#work" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Let's Connect →</a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__photo-wrapper">
              <div className="hero__photo">
                <img src="/Photos/Krish Satasiya/Krish Satasiya.jpg" alt={PROFILE.name} onError={e => e.target.src = 'https://avatars.githubusercontent.com/u/89667746?v=4'} />
                <span className="hero__photo-initial">K</span>
              </div>
              <div className="hero__badge">
                <span className="hero__dot" /> Open to Work
              </div>
            </div>
          </div>
        </div>

        <div className="hero__info-card">
          <div className="card__main border-t-0">
            <div className="card__bio-section">
              <div className="card__group">
                <span className="card__label">Mission</span>
                <p className="card__text">{PROFILE.bio}</p>
              </div>
              <div className="card__group">
                <span className="card__label">Current Focus</span>
                <p className="card__focus">{PROFILE.goal}</p>
              </div>
            </div>

            <div className="card__tools-section">
              <div className="card__group">
                <span className="card__label">Design Tools</span>
                <div className="card__tags">
                  {PROFILE.tools.slice(0, 7).map(t => <span key={t} className="tag tag--light">{t}</span>)}
                </div>
              </div>
              <div className="card__group">
                <span className="card__label">Dev Tools</span>
                <div className="card__tags">
                  {PROFILE.tools.slice(7).map(t => <span key={t} className="tag tag--dark">{t}</span>)}
                </div>
              </div>
            </div>
          </div>

          <div className="card__footer">
            <div className="card__meta">
              <div className="card__meta-item"><Icons.Location /> {PROFILE.location}</div>
              <div className="card__meta-item"><Icons.Education /> {PROFILE.education}</div>
            </div>
            <div className="card__socials">
              <a href={`mailto:${PROFILE.email}`} className="social-link"><Icons.Email /></a>
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="social-link"><Icons.GitHub /></a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><Icons.LinkedIn /></a>
              <a href={PROFILE.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-link"><Icons.Twitter /></a>
            </div>
          </div>
        </div>

      </div>
      <div className="hero__bg-strip" />
    </section>
  );
}
