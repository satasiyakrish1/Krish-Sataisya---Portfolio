import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

// Helper: (filename, label, span, year, description)
const g = (file, label, span = 'normal', year = 2026, desc = '') => ({
  src: `/assets/gallery/${encodeURIComponent(file)}`,
  alt: `Krish Satasiya — ${label}`,
  label,
  span,
  year,
  desc: desc || `Krish Satasiya at ${label} — tech community event in Gujarat, India.`,
});

// ── GALLERY: newest first ──
const GALLERY = [
  // May 2026
  g('IMG-20260502-WA0007.jpg',                              'Tech Event May 2026',                 'normal', 2026, 'Krish Satasiya at a tech event, May 2026.'),

  // April 2026
  g('IMG_20260424_214629.jpg',                              'Night Event April 2026',              'wide',   2026, 'Krish Satasiya at a night community event, April 2026.'),
  g('IMG-20260424-WA0096.jpg',                              'Event Coordination April 2026',       'normal', 2026, 'Krish Satasiya coordinating a tech event, April 2026.'),
  g('IMG_20260404_133310.jpg',                              'Tech Gathering April 2026',           'normal', 2026, 'Krish Satasiya at a tech gathering, April 2026.'),

  // March 2026
  g('IMG_20260314_151530.jpg',                              'Community Event March 2026',          'wide',   2026, 'Krish Satasiya at a community event, March 2026.'),
  g('IMG-20260314-WA0017.jpg',                              'Dev Meetup March 2026',               'normal', 2026, 'Krish Satasiya at a developer meetup, March 2026.'),
  g('IMG-20260308-WA0019.jpg',                              'Tech Session March 2026',             'normal', 2026, 'Krish Satasiya at a tech session, March 2026.'),
  g('20260314_083840.jpg',                                  'Community Event March 2026 II',       'normal', 2026, 'Krish Satasiya at a developer community event, March 2026.'),
  g('IMG_20260301_152043.jpg',                              'Community Day March 2026',            'wide',   2026, 'Krish Satasiya at community day, March 2026.'),
  g('IMG_20260301_153209.jpg',                              'Team Collaboration March 2026',       'normal', 2026, 'Krish Satasiya with the team, March 2026.'),

  // February 2026 — Laracon India
  g('IMG_20260201_184757.jpg',                              'Laracon India 2026 — Evening',        'wide',   2026, 'Evening session at Laracon India 2026, attended by Krish Satasiya.'),
  g('IMG_20260201_165757.jpg',                              'Laracon India 2026 — Networking',     'normal', 2026, 'Networking session at Laracon India 2026.'),
  g('IMG_20260201_112442.jpg',                              'Laracon India 2026 — Conference',     'tall',   2026, 'Krish Satasiya at Laracon India conference, February 2026.'),
  g('IMG_20260201_112413.jpg',                              'Laracon India 2026 — Stage',          'wide',   2026, 'Krish Satasiya volunteering at Laracon India 2026.'),
  g('IMG_20260201_103117.jpg',                              'Laracon India 2026 — Backstage',      'normal', 2026, 'Behind the scenes at Laracon India 2026.'),
  g('IMG_20260201_100707.jpg',                              'Laracon India 2026 — Morning',        'normal', 2026, 'Morning setup at Laracon India 2026.'),
  g('IMG_20260201_100316.jpg',                              'Laracon India 2026 — Team',           'normal', 2026, 'Krish Satasiya with volunteer team at Laracon India 2026.'),

  // January 2026
  g('IMG_20260131_074832.jpg',                              'Morning Event Jan 2026 II',           'wide',   2026, 'Krish Satasiya at a morning community event, January 2026.'),
  g('IMG_20260131_074538.jpg',                              'Morning Tech Event January 2026',     'normal', 2026, 'Krish Satasiya at a morning tech event, January 2026.'),
  g('IMG_20260117_185948.jpg',                              'Community Event January 2026',        'normal', 2026, 'Krish Satasiya at a community event, January 2026.'),
  g('IMG_20260110_115343.jpg',                              'Community Meetup January 2026',       'wide',   2026, 'Krish Satasiya at a developer meetup, January 2026.'),
  g('IMG_20260110_110325.jpg',                              'Open Source Weekend Jan 2026',        'normal', 2026, 'Krish Satasiya at Open Source Weekend, January 2026.'),
  g('IMG_20260110_070431.jpg',                              'Early Morning Event Jan 2026',        'normal', 2026, 'Krish Satasiya at an early morning event, January 2026.'),

  // 2025 — Named Events
  g('JS Gujarat Team.jpg',                                  'JavaScript Gujarat — Team',           'wide',   2025, 'Krish Satasiya with JavaScript Gujarat community team.'),
  g('Js Gujarat Team 2.jpg',                                'JavaScript Gujarat — Meetup',         'normal', 2025, 'Krish Satasiya at JS Gujarat community meetup.'),
  g('Js Gujarat.jpg',                                       'JavaScript Gujarat Community',        'normal', 2025, 'Krish Satasiya at JavaScript Gujarat, the regional JS developer community.'),
  g('JS Gujarat (2).jpg',                                   'JavaScript Gujarat — Session',        'normal', 2025, 'JS Gujarat developer session attended by Krish Satasiya.'),
  g('FlutterFlow Event.jpg',                                'FlutterFlow Event',                   'wide',   2025, 'Krish Satasiya at the FlutterFlow community event.'),
  g('FlutterFlow Meetup - NFSU.jpg',                        'FlutterFlow Meetup — NFSU',           'normal', 2025, 'Krish Satasiya at FlutterFlow Meetup at NFSU, Gandhinagar.'),
  g('7 Span Meetup.jpg',                                    '7Span Meetup',                        'wide',   2025, 'Krish Satasiya at 7Span community meetup, Ahmedabad.'),
  g('7span - Visit.jpg',                                    '7Span Office Visit',                  'normal', 2025, 'Krish Satasiya visiting 7Span office, Ahmedabad.'),
  g('Atlasian Meetup.jpg',                                  'Atlassian Community Meetup',          'normal', 2025, 'Krish Satasiya at Atlassian community meetup, Gujarat.'),
  g('CCD - Cloud Community Day Gandhinagar 2.jpg',          'Cloud Community Day Gandhinagar',     'wide',   2025, 'Krish Satasiya at Cloud Community Day (CCD) Gandhinagar 2025.'),
  g('CCD - Cloud Community Day Gandhinagar.jpg',            'CCD Gandhinagar — Stage',             'normal', 2025, 'Stage event at Cloud Community Day Gandhinagar, GDG Cloud.'),
  g('CCD - GDG Cloud Gn Team.jpg',                          'GDG Cloud Gandhinagar Team',          'normal', 2025, 'Krish Satasiya with GDG Cloud Gandhinagar core team.'),
  g('Crew CCD.webp',                                        'CCD Crew — GDG Cloud',                'wide',   2025, 'Crew photo at Cloud Community Day, GDG Cloud Gandhinagar.'),
  g('Wrokshop CCD - Cloud Community Day Gandhinagar.jpg',   'CCD Workshop Session',                'normal', 2025, 'Workshop session at Cloud Community Day Gandhinagar.'),
  g('Best Volunter Award - ccd - gdg cloud gn.jpg',         'Best Volunteer Award — GDG Cloud GN','normal', 2025, 'Krish Satasiya receives Best Volunteer Award at GDG Cloud Gandhinagar CCD.'),

  // December 2025
  g('IMG_20251228_101959.jpg',                              'Community Event Dec 2025',            'wide',   2025, 'Krish Satasiya at a community event, December 2025.'),

  // November 2025
  g('IMG_20251122_124422.jpg',                              'Community Gathering Nov 2025',        'wide',   2025, 'Krish Satasiya at a community gathering, November 2025.'),
  g('IMG_20251122_133349.jpg',                              'Workshop Session Nov 2025',           'normal', 2025, 'Workshop session attended by Krish Satasiya, November 2025.'),
  g('IMG_20251129_101854321.jpg',                           'Tech Event Nov 2025',                 'normal', 2025, 'Krish Satasiya at a tech event, November 2025.'),
  g('IMG-20251116-WA0053.jpg',                              'Tech Event November 2025',            'normal', 2025, 'Krish Satasiya at a tech event, November 2025.'),
  g('IMG_20251102_080246.jpg',                              'Developer Meetup Nov 2025',           'wide',   2025, 'Krish Satasiya at a developer meetup, November 2025.'),
  g('IMG_20251102_140436.jpg',                              'Tech Session Nov 2025',               'normal', 2025, 'Tech session at a community event, November 2025.'),
  g('IMG_20251102_184002.jpg',                              'Evening Community Event Nov 2025',    'normal', 2025, 'Evening community event attended by Krish Satasiya, November 2025.'),

  // October 2025
  g('IMG_20251005_114437.jpg',                              'Community Event Oct 2025',            'wide',   2025, 'Krish Satasiya at a community event, October 2025.'),

  // July 2025
  g('IMG_20250720_134539.jpg',                              'Tech Meetup July 2025',               'wide',   2025, 'Krish Satasiya at a tech meetup, July 2025.'),
  g('IMG-20250705-WA0005.jpg',                              'Community Initiative July 2025',      'normal', 2025, 'Krish Satasiya at a community initiative, July 2025.'),

  // Unknown date — WhatsApp/generic
  g('1770219377784.jpg',                                    'Community Moment',                    'normal', 2025, 'Krish Satasiya at a community event.'),
  g('1770219378382.jpg',                                    'Community Moment II',                 'normal', 2025, 'Krish Satasiya at a community event.'),
  g('1770219380589.jpg',                                    'Community Moment III',                'normal', 2025, 'Krish Satasiya at a community event.'),

  // 2024
  g('Smart INDIA Hackathon  Team.jpg',                      'Smart India Hackathon — Team',        'wide',   2024, 'Krish Satasiya with team at Smart India Hackathon.'),
  g('E Cell Tech Fest.jpg',                                 'E-Cell Tech Fest Silver Oak',         'wide',   2024, 'Krish Satasiya at E-Cell Tech Fest, Silver Oak University.'),
  g('ECELL TECH FEST PEACH.jpg',                            'E-Cell Tech Fest — Award',            'normal', 2024, 'Award moment at E-Cell Tech Fest, Silver Oak University.'),
  g('RHA India Challenge 2024_page-0001.jpg',               'RHA India Challenge 2024',            'normal', 2024, 'Krish Satasiya — RHA India Challenge 2024 certificate.'),
  g('RHA WINNING AWARD BY DEAN SOU COT.jpg',                'RHA Winning Award — Dean SOU',        'normal', 2024, 'Krish Satasiya receiving RHA India Challenge winning award from Dean at Silver Oak University.'),
  g('DSC_7304.JPG',                                         'Community Event — Ahmedabad',         'normal', 2024, 'Krish Satasiya at a community event in Ahmedabad.'),

  // Portrait
  g('Krish Satasiya.jpg',                                   'Krish Satasiya — Portrait',           'tall',   2023, 'Krish Satasiya — Full Stack MERN Developer & UI/UX Designer, Ahmedabad, India.'),
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://krishsatasiya.netlify.app/gallery',
      name: 'Gallery — Krish Satasiya | Moments & Milestones',
      description: 'Photo gallery of Krish Satasiya — Full Stack MERN Developer & UI/UX Designer from Ahmedabad, India. Showcasing moments from GDG, Laracon India, hackathons, FlutterFlow events, JavaScript Gujarat, and more.',
      url: 'https://krishsatasiya.netlify.app/gallery',
      author: { '@type': 'Person', name: 'Krish Satasiya', url: 'https://krishsatasiya.netlify.app' },
      image: GALLERY.map((item) => ({
        '@type': 'ImageObject',
        contentUrl: `https://krishsatasiya.netlify.app${item.src}`,
        name: item.alt,
        description: item.desc,
        creator: { '@type': 'Person', name: 'Krish Satasiya' },
        copyrightHolder: { '@type': 'Person', name: 'Krish Satasiya' },
        license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
        acquireLicensePage: 'https://krishsatasiya.netlify.app/gallery',
      })),
    },
    {
      '@type': 'Person',
      '@id': 'https://krishsatasiya.netlify.app/#krish',
      name: 'Krish Satasiya',
      alternateName: 'Krish',
      description: 'Full Stack MERN Developer, UI/UX Designer, and active tech community contributor from Ahmedabad, Gujarat, India.',
      url: 'https://krishsatasiya.netlify.app',
      image: 'https://krishsatasiya.netlify.app/assets/gallery/Krish%20Satasiya.jpg',
      jobTitle: 'Full Stack MERN Developer & UI/UX Designer',
      worksFor: { '@type': 'Organization', name: 'Silver Oak University' },
      address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
      sameAs: [
        'https://www.linkedin.com/in/krishsatasiya',
        'https://github.com/krishsatasiya',
        'https://twitter.com/krishsatasiya',
      ],
    },
  ],
};

function GalleryImage({ src, alt, title, className }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="gl-image-container">
      {!isLoaded && <div className="gl-image-shimmer" />}
      <img
        src={src}
        alt={alt}
        title={title}
        className={`${className} ${isLoaded ? 'visible' : ''}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function Gallery() {
  const itemsRef = useRef([]);
  const [lightbox, setLightbox] = useState(null); // index of open photo

  // JSON-LD injection
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'gallery-jsonld';
    script.textContent = JSON.stringify(JSON_LD);
    document.head.appendChild(script);
    return () => document.getElementById('gallery-jsonld')?.remove();
  }, []);

  // Scroll-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gl-item--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    itemsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => (p + 1) % GALLERY.length);
      if (e.key === 'ArrowLeft')  setLightbox((p) => (p - 1 + GALLERY.length) % GALLERY.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const openLightbox  = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = (e) => { e.stopPropagation(); setLightbox((p) => (p - 1 + GALLERY.length) % GALLERY.length); };
  const next = (e) => { e.stopPropagation(); setLightbox((p) => (p + 1) % GALLERY.length); };

  return (
    <div className="gl-root" itemScope itemType="https://schema.org/CollectionPage">
      <meta itemProp="name" content="Gallery — Krish Satasiya" />
      <meta itemProp="description" content="Photo gallery of Krish Satasiya — events, hackathons, and community moments." />

      {/* Hero */}
      <div className="gl-hero">
        <div className="gl-hero__inner">
          <div className="gl-hero__badge">
            <span className="gl-hero__badge-dot" />
            Gallery
          </div>
          <h1 className="gl-hero__title">Moments &amp; Milestones</h1>
          <p className="gl-hero__sub">Snapshots from events, hackathons, community meetups &amp; behind the scenes.</p>
          <div className="gl-hero__meta">
            <span className="gl-hero__count">{GALLERY.length} Photos</span>
            <span className="gl-hero__sep">·</span>
            <span className="gl-hero__since">2023 – Present</span>
            <span className="gl-hero__sep">·</span>
            <span className="gl-hero__hint">Double-click to view full</span>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="gl-grid-wrap">
        <div className="gl-grid">
          {GALLERY.map((item, i) => (
            <figure
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="gl-item"
              style={{ '--delay': `${Math.min(i, 8) * 70}ms` }}
              onDoubleClick={() => openLightbox(i)}
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <meta itemProp="name" content={item.alt} />
              <meta itemProp="description" content={item.desc} />
              <meta itemProp="contentUrl" content={`https://krishsatasiya.netlify.app${item.src}`} />
              <GalleryImage
                src={item.src}
                alt={item.alt}
                title={`${item.alt} — Double-click to view full`}
                className="gl-item__img"
              />
              <figcaption className="gl-item__overlay">
                <span className="gl-item__label">{item.label}</span>
                <span className="gl-item__year">{item.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gl-lb" onClick={closeLightbox}>
          {/* Close */}
          <button className="gl-lb__close" onClick={closeLightbox} aria-label="Close">✕</button>

          {/* Prev */}
          <button className="gl-lb__nav gl-lb__prev" onClick={prev} aria-label="Previous">&#8592;</button>

          {/* Image */}
          <div className="gl-lb__frame" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              className="gl-lb__img"
            />
            <div className="gl-lb__caption">
              <span className="gl-lb__cap-label">{GALLERY[lightbox].label}</span>
              <span className="gl-lb__cap-year">{GALLERY[lightbox].year}</span>
              <span className="gl-lb__cap-count">{lightbox + 1} / {GALLERY.length}</span>
            </div>
          </div>

          {/* Next */}
          <button className="gl-lb__nav gl-lb__next" onClick={next} aria-label="Next">&#8594;</button>
        </div>
      )}
    </div>
  );
}
