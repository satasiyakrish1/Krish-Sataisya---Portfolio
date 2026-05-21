import React, { useState, useEffect, useRef } from 'react';

const AVATAR = '/Photos/Krish Satasiya/Krish Satasiya.jpg';

const SECTIONS = [
  {
    id: 'social', label: 'Social Media',
    links: [
      { name: 'WhatsApp',    url: 'https://wa.me/916353112999',                                  icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/whatsapp.svg', bg: '#e8f5e9' },
      { name: 'LinkedIn',    url: 'https://linkedin.com/in/satasiyakrish1',                       icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/linkedin.svg', bg: '#e8f4fd' },
      { name: 'Instagram',   url: 'https://instagram.com/satasiyakrish1',                         icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/instagram.svg', bg: '#fce4ec' },
      { name: 'Facebook',    url: 'https://facebook.com/satasiyakrish1',                          icon: 'https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg', bg: '#e3f2fd' },
      { name: 'Twitter / X', url: 'https://x.com/satasiyakrish1',                                icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/x.svg', bg: '#f5f5f5' },
      { name: 'Pinterest',   url: 'https://pinterest.com/satasiyakrish1',                        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/pinterest.svg', bg: '#fce4e4' },
      { name: 'Telegram',    url: 'https://t.me/satasiyakrish1',                                 icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/telegram.svg', bg: '#e0f7fa' },
      { name: 'Discord',     url: 'https://discord.com/users/satasiyakrish1',                    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/discord.svg', bg: '#ede7f6' },
    ],
  },
  {
    id: 'dev', label: 'Developer Profiles',
    links: [
      { name: 'GitHub',           url: 'https://github.com/satasiyakrish1',                                                     icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/github.svg', bg: '#f5f5f5' },
      { name: 'GitLab',           url: 'https://gitlab.com/satasiyakrish1',                                                     icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/gitlab.svg', bg: '#fff3e0' },
      { name: 'CodePen',          url: 'https://codepen.io/satasiyakrish1',                                                     icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/codepen.svg', bg: '#f5f5f5' },
      { name: 'Stack Overflow',   url: 'https://stackexchange.com/users/29840235/krish-satasiya',                               icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/stackoverflow.svg', bg: '#fff8e1' },
      { name: 'LeetCode',         url: 'https://leetcode.com/satasiyakrish1',                                                   icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/leetcode.svg', bg: '#fff8e1' },
      { name: 'Google Developer', url: 'https://developers.google.com/profile/u/satasiyakrish1',                               icon: 'https://www.vectorlogo.zone/logos/google/google-icon.svg', bg: '#fce4ec' },
      { name: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/users/satasiyakrish1',                               icon: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg', bg: '#e3f2fd' },
      { name: 'GeeksforGeeks',    url: 'https://geeksforgeeks.org/user/satasiyakrish1',                                        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/geeksforgeeks.svg', bg: '#e8f5e9' },
    ],
  },
  {
    id: 'professional', label: 'Professional Networks',
    links: [
      { name: 'Topmate',             url: 'https://topmate.io/satasiyakrish1',                          icon: 'https://topmate.io/favicon.svg', bg: '#ede7f6' },
      { name: 'Behance',             url: 'https://behance.net/satasiyakrish1',                         icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/behance.svg', bg: '#e3f2fd' },
      { name: 'Dribbble',            url: 'https://dribbble.com/satasiyakrish1',                        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/dribbble.svg', bg: '#fce4ec' },
      { name: 'eChai Ventures',      url: 'https://echai.ventures/u/satasiyakrish1',                    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/meetup.svg', bg: '#fff3e0' },
      { name: 'Credly',              url: 'https://www.credly.com/users/satasiyakrish1',                icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/credly.svg', bg: '#fff3e0' },
      { name: 'Google Cloud Skills', url: 'https://www.skills.google/public_profiles/68b2c888-f20d-47ec-ac22-37221514a350', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/googlecloud.svg', bg: '#e3f2fd' },
      { name: 'Figma',               url: 'https://www.figma.com/@satasiyakrish1',                                          icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', bg: '#fce4ec' },
    ],
  },
  {
    id: 'learning', label: 'Learning Platforms',
    links: [
      { name: 'Udemy',    url: 'https://www.udemy.com/user/krish-satasiya/',    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/udemy.svg', bg: '#f3e5f5' },
      { name: 'Coursera', url: 'https://www.coursera.org/learner/satasiyakrish1', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/coursera.svg', bg: '#e3f2fd' },
    ],
  },
  {
    id: 'content', label: 'Content & Blogs',
    links: [
      { name: 'Medium', url: 'https://medium.com/@satasiyakrish1',     icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/medium.svg', bg: '#f5f5f5' },
      { name: 'Dev.to', url: 'https://dev.to/satasiyakrish1',          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/devdotto.svg', bg: '#f5f5f5' },
      { name: 'Reddit', url: 'https://reddit.com/user/satasiyakrish1', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/reddit.svg', bg: '#fff3e0' },
    ],
  },
  {
    id: 'portfolio', label: 'Portfolio & Contact',
    links: [
      { name: 'Portfolio',      url: 'https://krishsatasiya.netlify.app',         icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/netlify.svg', bg: '#e0f7fa' },
      { name: 'Projects',       url: 'https://krishsatasiya.netlify.app/projects', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/github.svg', bg: '#f5f5f5' },
      { name: 'UI/UX Designs',  url: 'https://krishsatasiya.netlify.app/design',   icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', bg: '#fce4ec' },
      { name: 'Personal Email', url: 'mailto:krishsatasiya44@gmail.com',           icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/gmail.svg', bg: '#fce4ec' },
    ],
  },
  {
    id: 'payment', label: 'Payment',
    links: [
      { name: 'Razorpay',      url: 'https://razorpay.me/@satasiyakish1',       icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/razorpay.svg', bg: '#e3f2fd' },
      { name: 'Buy Me Coffee', url: 'https://buymeacoffee.com/satasiyakrish1', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/buymeacoffee.svg', bg: '#fffde7' },
    ],
  },
  {
    id: 'booking', label: 'Booking & Events',
    links: [
      { name: 'Luma',   url: 'https://luma.com/user/satasiyakrish1',         icon: 'https://lu.ma/favicon.ico', bg: '#f5f5f5' },
      { name: 'Meetup', url: 'https://meetup.com/members/satasiyakrish1', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/meetup.svg', bg: '#fce4ec' },
    ],
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');


  .lt-root {
    min-height: 100vh;
    background: #1a1a1a;
    font-family: 'Space Grotesk', sans-serif;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
  }
  .lt-phone {
    width: 100%;
    max-width: 420px;
    min-height: 100vh;
    background: #f0efe9;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 80px rgba(0,0,0,0.6);
    position: relative;
    z-index: 1;
  }

  .lt-hero {
    border-bottom: 2px solid #000;
    background: #fff;
    padding: 40px 20px 0;
  }
  .lt-hero__inner {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .lt-hero__top {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;
  }
  .lt-avatar {
    width: 100%;
    height: 200px;
    border-radius: 4px;
    border: 2.5px solid #000;
    object-fit: cover;
    object-position: top center;
    box-shadow: 3px 3px 0 #000;
    background: #ddd;
    display: block;
  }
  .lt-avatar-wrap {
    width: 88px;
    height: 135px;
    flex-shrink: 0;
    border: 2.5px solid #000;
    overflow: hidden;
    border-radius: 4px;
    background: #ddd;
    align-self: stretch;
  }
  .lt-avatar-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 15%;
    transform: scale(1.6);
    transform-origin: center 18%;
    display: block;
  }
  .lt-hero__info { flex: 1; }
  .lt-name {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.5px;
    margin: 0 0 2px;
    line-height: 1.1;
  }
  .lt-handle {
    font-size: 13px;
    font-weight: 600;
    color: #555;
    margin: 0 0 10px;
    font-family: monospace;
  }
  .lt-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .lt-tag {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border: 1.5px solid #000;
    padding: 3px 10px;
    border-radius: 2px;
    background: #fff;
  }
  .lt-tag--blue  { background: #4452FF; color: #fff; border-color: #4452FF; }
  .lt-tag--green { background: #1DBF73; color: #fff; border-color: #1DBF73; }

  /* ── Tab Nav ── */
  .lt-tabs {
    display: flex;
    gap: 0;
    border-top: 2px solid #000;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .lt-tabs::-webkit-scrollbar { display: none; }
  .lt-tab {
    padding: 12px 18px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    border-right: 1.5px solid #000;
    background: transparent;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.1s;
    font-family: monospace;
    color: #555;
  }
  .lt-tab:first-child { border-left: none; }
  .lt-tab:hover { background: #f0efe9; color: #000; }
  .lt-tab--active { background: #000; color: #fff; }

  /* ── Body ── */
  .lt-body {
    padding: 24px 16px 80px;
    flex: 1;
  }

  /* ── Section ── */
  .lt-section { margin-bottom: 40px; }
  .lt-section-hd {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  .lt-section-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-family: monospace;
    color: #888;
  }
  .lt-section-line {
    flex: 1;
    height: 1.5px;
    background: #ccc;
  }

  /* ── Link Grid — single col ── */
  .lt-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* ── Link Card (7span style) ── */
  .lt-link {
    display: flex;
    align-items: center;
    gap: 14px;
    background: #fff;
    border: 2px solid #000;
    padding: 14px 16px;
    text-decoration: none;
    color: #000;
    position: relative;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
    box-shadow: 3px 3px 0 #000;
  }
  .lt-link:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #000;
  }
  .lt-link:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 #000;
  }
  .lt-link__icon-wrap {
    width: 40px; height: 40px;
    border: 1.5px solid #000;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    border-radius: 4px;
  }
  .lt-link__icon-wrap img {
    width: 22px; height: 22px;
    object-fit: contain;
  }
  .lt-link__name {
    font-size: 14px;
    font-weight: 700;
    flex: 1;
    letter-spacing: -0.2px;
  }
  .lt-link__arrow {
    font-size: 18px;
    font-weight: 700;
    color: #000;
    flex-shrink: 0;
  }

  .lt-footer {
    text-align: center;
    border-top: 2px solid #000;
    padding: 20px;
    background: #fff;
    font-size: 11px;
    font-family: monospace;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #555;
    margin-top: auto;
  }
`;

export default function Links() {
  const [active, setActive] = useState('all');
  const totalLinks = SECTIONS.reduce((acc, s) => acc + s.links.length, 0);
  const filtered = active === 'all' ? SECTIONS : SECTIONS.filter(s => s.id === active);

  useEffect(() => {
    const prev = { body: document.body.style.background, main: '' };
    const main = document.querySelector('main');
    document.body.style.setProperty('background', '#1a1a1a', 'important');
    document.documentElement.style.setProperty('background', '#1a1a1a', 'important');
    if (main) { prev.main = main.style.background; main.style.setProperty('background', '#1a1a1a', 'important'); }
    return () => {
      document.body.style.background = prev.body;
      document.documentElement.style.background = '';
      if (main) main.style.background = prev.main;
    };
  }, []);

  const [installBanner, setInstallBanner] = useState(false);
  const deferredPrompt = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setInstallBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    // If already installed, hide banner
    window.addEventListener('appinstalled', () => setInstallBanner(false));
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt.current) return;
    deferredPrompt.current.prompt();
    const { outcome } = await deferredPrompt.current.userChoice;
    deferredPrompt.current = null;
    setInstallBanner(false);
  };

  return (
    <div className="lt-root">
      <style>{styles}{`
        .lt-install-banner {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #000;
          color: #fff;
          border: 2px solid #4452FF;
          box-shadow: 4px 4px 0 #4452FF;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          z-index: 9999;
          white-space: nowrap;
          animation: slideUp 0.3s ease;
          cursor: default;
          max-width: calc(100vw - 32px);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .lt-install-btn {
          background: #4452FF;
          color: #fff;
          border: none;
          padding: 8px 16px;
          font-family: monospace;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: opacity 0.15s;
        }
        .lt-install-btn:hover { opacity: 0.85; }
        .lt-install-close {
          background: none;
          border: none;
          color: #aaa;
          font-size: 18px;
          cursor: pointer;
          padding: 0 4px;
          line-height: 1;
        }
      `}</style>
      <div className="lt-phone">

      <div className="lt-hero">
          <div className="lt-hero__inner">
          <div className="lt-hero__top">
            <div className="lt-avatar-wrap">
              <img
                src={AVATAR} alt="Krish Satasiya"
                onError={e => { e.target.src = 'https://ui-avatars.com/api/?name=Krish+Satasiya&background=4452FF&color=fff&size=200'; }}
              />
            </div>
            <div className="lt-hero__info">
              <h1 className="lt-name">Krish Satasiya</h1>
              <p className="lt-handle">@satasiyakrish1</p>
              <div className="lt-tags">
                <span className="lt-tag lt-tag--blue">Full-Stack Dev</span>
                <span className="lt-tag lt-tag--green">Freelancer</span>
                <span className="lt-tag">UI/UX Designer</span>
                <span className="lt-tag">Open to Work ●</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lt-tabs">
          <button className={`lt-tab${active === 'all' ? ' lt-tab--active' : ''}`} onClick={() => setActive('all')}>All ({totalLinks})</button>
          {SECTIONS.map(s => (
            <button key={s.id} className={`lt-tab${active === s.id ? ' lt-tab--active' : ''}`} onClick={() => setActive(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="lt-body">
        {filtered.map(section => (
          <div key={section.id} className="lt-section">
            <div className="lt-section-hd">
              <span className="lt-section-label">{section.label}</span>
              <div className="lt-section-line" />
            </div>
            <div className="lt-links">
              {section.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="lt-link">
                  <div className="lt-link__icon-wrap" style={{ background: link.bg }}>
                    <img src={link.icon} alt={link.name} onError={e => e.target.style.display = 'none'} />
                  </div>
                  <span className="lt-link__name">{link.name}</span>
                  <span className="lt-link__arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lt-footer">
        {totalLinks} links · @satasiyakrish1 · krishsatasiya.netlify.app
      </div>
      </div>

      {/* PWA Install Banner */}
      {installBanner && (
        <div className="lt-install-banner">
          <span>📲 Add to Home Screen</span>
          <button className="lt-install-btn" onClick={handleInstall}>Install</button>
          <button className="lt-install-close" onClick={() => setInstallBanner(false)}>✕</button>
        </div>
      )}
    </div>
  );
}
