import React from 'react';
import './WhyMe.css';

const BENEFITS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill="currentColor" d="M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.35 3-3 3c-1.66 0-3-1.34-3-3H3v-3.5h2V15h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3c0-1.11.89-2 2-2h12v4z" />
      </svg>
    ),
    text: 'Faster go-to-market for digital products, platforms, and client-facing applications',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill="currentColor" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 11.9l-.7 1.3l-5.3-2.9V7h1.5v4.4z" />
      </svg>
    ),
    text: 'Modernization of legacy UI/codebases without disrupting business continuity',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill="currentColor" d="M3 21v-2l2-2v4zm4 0v-6l2-2v8zm4 0v-8l2 2.025V21zm4 0v-5.975l2-2V21zm4 0V11l2-2v12zM3 15.825V13l7-7l4 4l7-7v2.825l-7 7l-4-4z" />
      </svg>
    ),
    text: 'Scalable web, mobile, and cloud-native architectures built for long-term growth',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill="currentColor" d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06l-2.12-2.12zm-4.12 0L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5" />
      </svg>
    ),
    text: 'Reliable delivery timelines with clear communication and transparent progress',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill="currentColor" d="M3 6h18v12H3zm9 3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3M7 8a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2z" />
      </svg>
    ),
    text: 'Cost-efficient execution without compromising design quality, performance, or security',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill="currentColor" d="M13 10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3 3l3 3h5v4h2v-4h7v-6h-7zM6 6h11.17l1 1l-1 1H6zm12 10H6.83l-1-1l1-1H18z" />
      </svg>
    ),
    text: 'Reduced delivery friction through lean processes and modern tooling',
  },
];

export default function WhyMe() {
  return (
    <section className="relative">
      <div className="container py-section relative">
        <h2 className="font-display text-3xl font-semibold lg:text-4xl">
          Strategic Solutions for Your Next Project
        </h2>
        <p className="text-xl lg:text-2xl mt-2 text-gray-600">
          High-impact solutions balancing speed, quality, and design — without the agency overhead.
        </p>

        <div className="why-grid mt-8">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="why-card group flex flex-col justify-start gap-4 p-8 border"
            >
              <span className="why-card__icon shrink-0 size-8">{b.icon}</span>
              <p className="text-lg">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
