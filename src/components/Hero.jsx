import React, { useState, useEffect } from 'react';
import './Hero.css';
import PROFILE from '../utils/profile';

const NAMES = [
  "Krish Satasiya", // English
  "ક્રિશ સતાસીયા",   // Gujarati
  "क्रिश सतासीया",  // Hindi
  "கிரிஷ் சதாசியா", // Tamil
  "క్రిష్ సతాసియా"   // Telugu
];

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
  const [displayText, setDisplayText] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullText = NAMES[nameIndex];

    if (!isDeleting) {
      // Typing
      if (displayText !== currentFullText) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
          setTypingSpeed(80 + Math.random() * 40); // Natural random typing speed
        }, typingSpeed);
      } else {
        // Pause when full word is typed
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(40); // Faster speed when deleting
        }, 2200);
      }
    } else {
      // Deleting
      if (displayText !== '') {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, typingSpeed);
      } else {
        // Move to next language when fully deleted
        setIsDeleting(false);
        setNameIndex((prev) => (prev + 1) % NAMES.length);
        setTypingSpeed(120);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, nameIndex, typingSpeed]);

  return (
    <section className="hero" id="home">
      <div className="container pt-24 md:pt-32 lg:pt-48 pb-16 lg:pb-24">
        
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__identity-wrapper">
              <div className="hero__identity-line" />
              <span className="hero__pre-name font-mono">Hi, I'm</span>
            </div>
            <div className="hero__designer-box">
              <h2 className={`hero__name ${nameIndex === 1 ? 'lang-gujarati' : ''}`}>
                {displayText || '\u00a0'}
              </h2>
              <p className="hero__designation font-mono">{PROFILE.role}</p>
              <span className="hero__box-handle tl" />
              <span className="hero__box-handle tr" />
              <span className="hero__box-handle bl" />
              <span className="hero__box-handle br" />
            </div>
            <h1 className="hero__title mt-2">
              Building clarity where <br /> others add complexity
            </h1>
            <p className="hero__description">
              I help businesses design, build, and scale digital products with the right technology — whatever your stage or vision.
            </p>
            <div className="hero__actions">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Let's Connect →</a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__photo-wrapper">
              <svg className="hero__stamp-bg" width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M249.66 237.475C249.66 234.603 252.434 232.07 256 232.07V224.3C252.632 224.3 249.66 221.936 249.66 218.895C249.66 215.855 252.434 213.491 256 213.491V205.721C252.632 205.721 249.66 203.357 249.66 200.316C249.66 197.276 252.434 194.912 256 194.912V187.142C252.632 187.142 249.66 184.777 249.66 181.737C249.66 178.697 252.434 176.332 256 176.332V168.563C252.632 168.563 249.66 166.198 249.66 163.158C249.66 160.118 252.434 157.753 256 157.753V149.984C252.632 149.984 249.66 147.619 249.66 144.579C249.66 141.539 252.434 139.174 256 139.174V131.405C252.632 131.405 249.66 129.04 249.66 126C249.66 122.96 252.434 120.595 256 120.595V112.826C252.632 112.826 249.66 110.461 249.66 107.421C249.66 104.381 252.434 102.016 256 102.016V94.2467C252.632 94.2467 249.66 91.882 249.66 88.8418C249.66 85.8016 252.434 83.437 256 83.437V75.6676C252.632 75.6676 249.66 73.3029 249.66 70.2627C249.66 67.2225 252.434 64.8579 256 64.8579V57.0885C252.632 57.0885 249.66 54.7239 249.66 51.6836C249.66 48.6434 252.434 46.2788 256 46.2788V38.5094C252.632 38.5094 249.66 36.1448 249.66 33.1046C249.66 30.0643 252.434 27.6997 256 27.6997V19.9303C252.632 19.9303 249.66 17.5657 249.66 14.5255C249.66 11.4853 252.434 9.12065 256 9.12065V0L245.302 0C245.302 2.87131 242.528 5.40483 238.962 5.40483C235.396 5.40483 232.623 3.04021 232.623 0L223.51 0C223.51 2.87131 220.736 5.40483 217.17 5.40483C213.604 5.40483 210.83 3.04021 210.83 0L201.717 0C201.717 2.87131 198.943 5.40483 195.377 5.40483C191.811 5.40483 189.038 3.04021 189.038 0L179.925 0C179.925 2.87131 177.151 5.40483 173.585 5.40483C170.019 5.40483 167.245 3.04021 167.245 0L158.132 0C158.132 2.87131 155.359 5.40483 151.792 5.40483C148.226 5.40483 145.453 3.04021 145.453 0L136.34 0C136.34 2.87131 133.566 5.40483 130 5.40483C126.434 5.40483 123.66 3.04021 123.66 0L114.547 0C114.547 2.87131 111.774 5.40483 108.208 5.40483C104.642 5.40483 101.868 3.04021 101.868 0L92.7547 0C92.7547 2.87131 89.9811 5.40483 86.4151 5.40483C82.849 5.40483 80.0754 3.04021 80.0754 0L70.9623 0C70.9623 2.87131 68.1887 5.40483 64.6226 5.40483C61.0566 5.40483 58.283 3.04021 58.283 0L49.1698 0C49.1698 2.87131 46.3962 5.40483 42.8302 5.40483C39.2641 5.40483 36.4905 3.04021 36.4905 0L27.3773 0C27.3773 2.87131 24.6037 5.40483 21.0377 5.40483C17.4717 5.40483 14.698 3.04021 14.698 0L4 0L4 9.12065C7.36793 9.12065 10.3395 11.4853 10.3395 14.5255C10.3395 17.5657 7.56604 19.9303 4 19.9303L4 27.6997C7.36793 27.6997 10.3395 30.0643 10.3395 33.1046C10.3395 36.1448 7.56604 38.5094 4 38.5094L4 46.2788C7.36793 46.2788 10.3395 48.6434 10.3395 51.6836C10.3395 54.7239 7.56604 57.0885 4 57.0885V64.8579C7.36793 64.8579 10.3395 67.2225 10.3395 70.2627C10.3395 73.3029 7.56604 75.6676 4 75.6676V83.437C7.36793 83.437 10.3395 85.8016 10.3395 88.8418C10.3395 91.882 7.56604 94.2467 4 94.2467V102.016C7.36793 102.016 10.3395 104.381 10.3395 107.421C10.3395 110.461 7.56604 112.826 4 112.826L4 120.595C7.36793 120.595 10.3395 122.96 10.3395 126C10.3395 129.04 7.56604 131.405 4 131.405L4 139.174C7.36793 139.174 10.3395 141.539 10.3395 144.579C10.3395 147.619 7.56604 149.984 4 149.984L4 157.753C7.36793 157.753 10.3395 160.118 10.3395 163.158C10.3395 166.198 7.56604 168.563 4 168.563V176.332C7.36793 176.332 10.3395 178.697 10.3395 181.737C10.3395 184.777 7.56604 187.142 4 187.142V194.912C7.36793 194.912 10.3395 197.276 10.3395 200.316C10.3395 203.357 7.56604 205.721 4 205.721V213.491C7.36793 213.491 10.3395 215.855 10.3395 218.895C10.3395 221.936 7.56604 224.3 4 224.3L4 232.07C7.36793 232.07 10.3395 234.434 10.3395 237.475C10.3395 240.515 7.56604 242.879 4 242.879L4 252H14.698C14.698 249.129 17.4717 246.595 21.0377 246.595C24.6037 246.595 27.3773 248.96 27.3773 252H36.4905C36.4905 249.129 39.2641 246.595 42.8302 246.595C46.3962 246.595 49.1698 248.96 49.1698 252H58.283C58.283 249.129 61.0566 246.595 64.6226 246.595C68.1887 246.595 70.9623 248.96 70.9623 252H80.0754C80.0754 249.129 82.849 246.595 86.4151 246.595C89.9811 246.595 92.7547 248.96 92.7547 252H101.868C101.868 249.129 104.642 246.595 108.208 246.595C111.774 246.595 114.547 248.96 114.547 252H123.66C123.66 249.129 126.434 246.595 130 246.595C133.566 246.595 136.34 248.96 136.34 252H145.453C145.453 249.129 148.226 246.595 151.792 246.595C155.359 246.595 158.132 248.96 158.132 252H167.245C167.245 249.129 170.019 246.595 173.585 246.595C177.151 246.595 179.925 248.96 179.925 252H189.038C189.038 249.129 191.811 246.595 195.377 246.595C198.943 246.595 201.717 248.96 201.717 252H210.83C210.83 249.129 213.604 246.595 217.17 246.595C220.736 246.595 223.51 248.96 223.51 252H232.623C232.623 249.129 235.396 246.595 238.962 246.595C242.528 246.595 245.302 248.96 245.302 252H256V242.879C252.632 242.879 249.66 240.515 249.66 237.475Z" fill="#F7F8FB" stroke="#9ca3af" strokeWidth="1.5"/>
              </svg>
              <div className="hero__photo">
                <img className="hero__img hero__img--default" src="/Photos/Krish Satasiya/Krish Satasiya 2.png" alt={PROFILE.name} onError={e => e.target.src = 'https://avatars.githubusercontent.com/u/89667746?v=4'} />
                <img className="hero__img hero__img--hover" src="/Photos/Krish Satasiya/Krish S - Hover.png" alt={PROFILE.name} onError={e => e.target.src = 'https://avatars.githubusercontent.com/u/89667746?v=4'} />
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
