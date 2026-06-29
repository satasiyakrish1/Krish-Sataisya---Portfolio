import React, { useRef, useCallback, useState } from 'react';
import './Testimonials.css';

const STARS = (n) =>
  Array.from({ length: 5 }, (_, i) => (
    <svg key={i} className="star-icon" width="20" height="20" viewBox="0 0 24 24">
      <path
        fill={i < n ? '#f59e0b' : '#d4d4d4'}
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
      />
    </svg>
  ));

const TESTIMONIALS = [
  {
    name: 'Mr. Prashant Chettiyar',
    role: 'X-CID Crime Intern, Gandhinagar - Gujarat',
    rating: 5,
    text: 'I am delighted to recommend Krish Satasiya, who has been working with me as a Community Coordinator at ExploitXplorers. Krish has played a pivotal role in building and maintaining the official ExploitXplorers website. Krish excels in creative fields, including Adobe Premiere Pro, Photoshop, Illustrator, and much more.',
  },
  {
    name: 'Mr. Prince Dayani',
    role: 'Gujarat Yuva Former Justice, Amreli - Gujarat',
    rating: 5,
    text: 'I am pleased to recommend Krish Satasiya, who has contributed significantly as a Community Coordinator at ExploitXplorers. Krish has been instrumental in developing and managing the official ExploitXplorers website, showcasing his strong web design expertise.',
  },
  {
    name: 'Mr. Harsh Sanghani',
    role: 'Director, Ray Infrastructure Pvt. Ltd. | Global President — WCoopEF',
    rating: 5,
    text: 'It gives me immense pleasure to recommend Krish Satasiya, who has been a key asset in managing Social Media Marketing, Graphic Designing, and overall Digital Marketing for The Kesar Mango and the World Cooperation Economic Forum.',
  },
  {
    name: 'Mr. Nikhil Butani',
    role: 'Technical Lead | Senior Software Engineer',
    rating: 5,
    text: 'Krish Satasiya demonstrates exceptional expertise in MERN development. His innovative mindset, attention to detail, and strong UI/UX sense consistently lead to seamless functionality and outstanding user experiences.',
  },
  {
    name: 'Ms. Divya Shah',
    role: 'Engineering Mindset | Growth Enthusiast',
    rating: 5,
    text: "Krish's technical skills, problem-solving mindset, and creativity in UI/UX design set him apart. He consistently delivers reliable, high-quality outcomes with dedication.",
  },
  {
    name: 'Mr. Sanket Shah',
    role: 'Research Scholar | Assistant Professor, Silver Oak University',
    rating: 5,
    text: "Krish Satasiya's innovative mindset and strong technical expertise make him an invaluable asset to any academic or professional team.",
  },
  {
    name: 'Mr. Dev Shinde',
    role: 'Research Scholar, IIIT Bangalore',
    rating: 5,
    text: "Krish's ability to blend technical precision with creative innovation makes him a standout professional capable of delivering high-impact design and development solutions.",
  },
  {
    name: 'Mr. Jeel Vekariya',
    role: 'Cyber Security Instructor & Analyst',
    rating: 5,
    text: 'Krish Satasiya is a highly versatile professional with excellence in full-stack development, UI/UX design, and community leadership. His dedication and proactive mindset make him an asset to any forward-thinking organization.',
  },
];

function TestimonialCard({ t, onHoldStart, onHoldEnd }) {
  const [held, setHeld] = useState(false);
  const timerRef = useRef(null);
  const firedRef = useRef(false);

  const handleTouchStart = useCallback(() => {
    firedRef.current = false;
    onHoldStart(); // pause scroll animation
    timerRef.current = setTimeout(() => {
      firedRef.current = true;
      setHeld(true);
    }, 5000);
  }, [onHoldStart]);

  const handleTouchEnd = useCallback(() => {
    clearTimeout(timerRef.current);
    if (!firedRef.current) {
      onHoldEnd(); // resume scroll if timer didn't fire
    }
    // if fired, keep blue; user taps again to reset
  }, [onHoldEnd]);

  const handleTap = useCallback(() => {
    if (firedRef.current && held) {
      firedRef.current = false;
      setHeld(false);
      onHoldEnd(); // resume scroll
    }
  }, [held, onHoldEnd]);

  return (
    <div
      className={`testimonial-card flex-none${held ? ' mobile-held' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onClick={handleTap}
    >
      <div className="tc-stars">{STARS(t.rating)}</div>
      <p className="tc-text">"{t.text}"</p>
      <div className="tc-author">
        <p className="tc-author__name">{t.name}</p>
        <p className="tc-author__role">{t.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  const pauseScroll = useCallback(() => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  }, []);

  const resumeScroll = useCallback(() => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  }, []);

  return (
    <section className="py-section bg-gray-50">
      <div className="container">
        <h2 className="font-display text-3xl font-semibold lg:text-4xl">Voices of Success</h2>
        <p className="text-xl lg:text-2xl mt-2 text-gray-600">
          Real feedback from real projects.
        </p>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="testimonials-scroll">
          <div ref={trackRef} className="testimonials-track flex gap-4 animate-scroll">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} t={t} onHoldStart={pauseScroll} onHoldEnd={resumeScroll} />
            ))}
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={`${t.name}-dup`} t={t} onHoldStart={pauseScroll} onHoldEnd={resumeScroll} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
