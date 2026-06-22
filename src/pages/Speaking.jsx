import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

export default function Speaking() {
  return (
    <div className="ip-root">
      <div className="ip-bg-accent" />

      <div className="container ip-wrap">
        {/* Hero */}
        <header className="ip-hero">
          <div className="ip-hero__top">
            <div className="ip-hero__badge">
              <span className="ip-hero__badge-dot" />
              Speaking & Keynotes
            </div>
            <span className="ip-hero__date">Open for Bookings</span>
          </div>

          <div className="ip-hero__body">
            <h1 className="ip-hero__title">
              <span className="ip-hero__line ip-hero__line--1">Speak.</span>
              <span className="ip-hero__line ip-hero__line--2">Inspire.</span>
              <span className="ip-hero__line ip-hero__line--3">Share.</span>
            </h1>
            <div className="ip-hero__meta">
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Topics</span>
                <span className="ip-hero__meta-value">MERN · UI/UX · Cloud · AI</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Formats</span>
                <span className="ip-hero__meta-value">Workshops · Panels · Keynotes</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Availability</span>
                <span className="ip-hero__meta-value" style={{ color: '#4452FF' }}>● Open for Invitations</span>
              </div>
            </div>
          </div>

          <p className="ip-hero__sub">
            Passion for breaking down complex technologies, mentoring student communities, and leading technical discussions at events, universities, and developer meetups.
          </p>
        </header>

        {/* Booking / Speaking Details Section */}
        <section className="ip-section">
          <div className="ip-section__label font-mono">Speaking Details</div>
          
          <div className="achv-list" style={{ gap: '2rem' }}>
            <div className="achv-card" style={{ borderLeftColor: '#4452FF' }}>
              <div className="achv-card__top">
                <div className="achv-card__index font-mono">01</div>
                <div className="achv-card__meta">
                  <span className="achv-card__prize font-mono" style={{ color: '#4452FF', borderColor: '#4452FF44' }}>Core Topic</span>
                </div>
              </div>
              <h2 className="achv-card__title font-display">Full-Stack MERN & AI Integration</h2>
              <p className="achv-card__desc">
                Building scalable web applications, integrating AI models into frontend/backend systems, and orchestrating full-stack architectures. Sharing best practices, development strategies, and industry workflows.
              </p>
              <div className="achv-card__tags">
                <span className="edu-tag font-mono">MERN</span>
                <span className="edu-tag font-mono">React</span>
                <span className="edu-tag font-mono">Node.js</span>
                <span className="edu-tag font-mono">AI Integrations</span>
              </div>
            </div>

            <div className="achv-card" style={{ borderLeftColor: '#10b981' }}>
              <div className="achv-card__top">
                <div className="achv-card__index font-mono">02</div>
                <div className="achv-card__meta">
                  <span className="achv-card__prize font-mono" style={{ color: '#10b981', borderColor: '#10b98144' }}>Core Topic</span>
                </div>
              </div>
              <h2 className="achv-card__title font-display">UI/UX Design & Product Strategy</h2>
              <p className="achv-card__desc">
                Bridging the gap between engineering and design. Discussing design systems, user-centric interfaces, rapid prototyping, and creating premium user experiences that align with technical constraints.
              </p>
              <div className="achv-card__tags">
                <span className="edu-tag font-mono">UI/UX</span>
                <span className="edu-tag font-mono">Figma</span>
                <span className="edu-tag font-mono">Design Systems</span>
                <span className="edu-tag font-mono">Prototyping</span>
              </div>
            </div>

            <div className="achv-card" style={{ borderLeftColor: '#3b82f6' }}>
              <div className="achv-card__top">
                <div className="achv-card__index font-mono">03</div>
                <div className="achv-card__meta">
                  <span className="achv-card__prize font-mono" style={{ color: '#3b82f6', borderColor: '#3b82f644' }}>Core Topic</span>
                </div>
              </div>
              <h2 className="achv-card__title font-display">Cloud Infrastructure & Open Source</h2>
              <p className="achv-card__desc">
                Getting started with Google Cloud Platform, AWS, containerization with Docker/Kubernetes, and fostering an active contribution culture in open source projects.
              </p>
              <div className="achv-card__tags">
                <span className="edu-tag font-mono">Google Cloud</span>
                <span className="edu-tag font-mono">AWS</span>
                <span className="edu-tag font-mono">Open Source</span>
                <span className="edu-tag font-mono">DevOps</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ip-cta" style={{ marginTop: '4rem' }}>
          <div className="ip-cta__inner">
            <span className="ip-cta__label font-mono">Invitation</span>
            <h2 className="ip-cta__title font-display">Interested in having me speak at your next event?</h2>
            <div className="ip-cta__actions">
              <a href="mailto:krishsatasiya44@gmail.com" className="ip-cta__btn font-mono">Invite to Speak →</a>
              <Link to="/speaking/all" className="ip-cta__btn-outline font-mono">All Speaking</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
