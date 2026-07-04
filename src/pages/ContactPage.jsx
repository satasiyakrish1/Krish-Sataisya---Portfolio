import React from 'react';
import Contact from '../components/Contact';
import './InfoPage.css';

export default function ContactPage() {
  return (
    <div className="ip-root">
      <div className="ip-bg-accent" />
      <div className="container ip-wrap">
        <header className="ip-hero">
          <div className="ip-hero__top">
            <div className="ip-hero__badge">
              <span className="ip-hero__badge-dot" />
              Contact
            </div>
            <span className="ip-hero__date">Available for Work</span>
          </div>
          <div className="ip-hero__body">
            <h1 className="ip-hero__title">
              <span className="ip-hero__line ip-hero__line--1">Connect.</span>
              <span className="ip-hero__line ip-hero__line--2">Discuss.</span>
              <span className="ip-hero__line ip-hero__line--3">Deliver.</span>
            </h1>
          </div>
          <p className="ip-hero__sub">
            Let's discuss how we can work together to turn your ideas into reality. Reach out via the form below or standard social channels.
          </p>
        </header>
        <Contact />
      </div>
    </div>
  );
}
