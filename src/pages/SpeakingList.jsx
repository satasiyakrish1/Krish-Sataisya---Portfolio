import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

export default function SpeakingList() {
  return (
    <div className="ip-root">
      <div className="ip-bg-accent" />
      <div className="container ip-wrap" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ padding: '3rem', border: '1px dashed #d4d4d4', borderRadius: '12px', background: 'rgba(255,255,255,0.5)', maxWidth: '500px' }}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>🎙️</span>
          <h2 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000', marginBottom: '0.5rem' }}>
            Speaking Engagements
          </h2>
          <p className="font-body" style={{ color: '#525252', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            A comprehensive list of my past and upcoming speaking sessions, workshops, and keynotes will be updated here soon.
          </p>
          <Link to="/speaking" className="ip-cta__btn-outline font-mono" style={{ display: 'inline-block' }}>
            ← Back to Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
