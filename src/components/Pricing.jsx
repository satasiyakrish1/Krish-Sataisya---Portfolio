import React from 'react';
import './Pricing.css';

const PROJECT_FEATURES = [
  'A Dedicated Senior Designer',
  'Defined scope, timeline & deliverables',
  'Fixed price based on requirements',
  'Optional no-code development',
  'No hidden costs',
  'Additional design support after delivery'
];

const SUBSCRIPTION_FEATURES = [
  'Website or Mobile App UI Design',
  'Branding & Packaging Design',
  'No-code Development',
  'Unlimited design requests (1 at a time)',
  '48h turnaround on most requests',
  'Direct communication with Founder',
  'Pause or cancel anytime'
];

export default function Pricing() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:krishsatasiya44@gmail.com?subject=Project%20Inquiry';
    }
  };

  return (
    <section className="pricing-section py-section" id="pricing">
      <div className="container relative">
        {/* Ghost background title */}
        <div className="pricing-watermark font-display" aria-hidden="true">
          PRICING
        </div>

        {/* Section Header */}
        <div className="pricing-header text-center">
          <h2 className="pricing-title font-display">
            Our pricing is transparent,
            <br />
            just like our process.
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {/* Card 1: Project-Based Package (Light) */}
          <div className="pricing-card pricing-card--light">
            <div className="pricing-card__header">
              <span className="pricing-badge font-mono">CUSTOM PLAN</span>
              <h3 className="pricing-card__title font-display">Project-Based Package</h3>
              <p className="pricing-card__desc">
                Best for one-time projects with clear scope, timeline, and fixed budget.
              </p>
            </div>

            <ul className="pricing-features">
              {PROJECT_FEATURES.map((item, idx) => (
                <li key={idx} className="pricing-feature-item">
                  <span className="pricing-check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pricing-card__footer">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="pricing-btn pricing-btn--primary font-mono"
              >
                Book a Free Call →
              </a>
            </div>
          </div>

          {/* Card 2: Unlimited Design Subscription (Dark) */}
          <div className="pricing-card pricing-card--dark">
            <div className="pricing-card__header">
              <span className="pricing-badge font-mono">UNLIMITED DESIGN SUBSCRIPTION</span>
              <div className="pricing-price font-display">
                <span className="pricing-amount">$3999</span>
                <span className="pricing-period font-mono">/month</span>
              </div>
              <p className="pricing-card__desc">
                Best for businesses needing ongoing design support with new requests every month.
              </p>
            </div>

            <ul className="pricing-features">
              {SUBSCRIPTION_FEATURES.map((item, idx) => (
                <li key={idx} className="pricing-feature-item">
                  {item === 'No-code Development' ? (
                    <span className="pricing-check-icon pricing-check-icon--nocode">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </span>
                  ) : (
                    <span className="pricing-check-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pricing-card__footer">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="pricing-btn pricing-btn--white font-mono"
              >
                Book a Free call →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
