import React, { useState } from 'react';

const TECH_CATEGORIES = [
  { id: 'languages', label: 'Languages & Core', skills: [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C Programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'DSA in C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  ]},
  { id: 'frontend', label: 'Frontend Frameworks', skills: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Vite', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg' },
  ]},
  { id: 'backend', label: 'Backend & Database', skills: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
  ]},
  { id: 'devops', label: 'DevOps & Cloud', skills: [
    { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
    { name: 'Google Cloud', icon: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' },
    { name: 'Netlify', icon: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
    { name: 'Railway', icon: 'https://railway.com/brand/logo-dark.svg' },
    { name: 'Render', icon: 'https://avatars.githubusercontent.com/u/114033652?s=200&v=4' },
    { name: 'Vercel', icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  ]},
  { id: 'mobile', label: 'Mobile & CMS', skills: [
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'WooCommerce', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/WooCommerce_logo_%282015%29.svg/3840px-WooCommerce_logo_%282015%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
    { name: 'Odoo', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Odoo_Official_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' },
  ]},
  { id: 'creative', label: 'Creative Tools', skills: [
    { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'Blender', icon: 'https://www.vectorlogo.zone/logos/blender/blender-icon.svg' },
    { name: 'Sketchup', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/SketchUp-Logo.png' },
    { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
    { name: 'Illustrator', icon: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
    { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
    { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
    { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' },
    { name: 'Affinity', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Affinity_%28App%29_Logo.svg/1280px-Affinity_%28App%29_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
    { name: 'Wondershare', icon: 'https://filmora.wondershare.com/favicon.ico' },
    { name: 'DaVinci Resolve', icon: 'https://cdn.simpleicons.org/davinciresolve/000000' },
    { name: 'Inkscape', icon: 'https://cdn.simpleicons.org/inkscape/000000' },
    { name: 'Spline', icon: 'https://avatars.githubusercontent.com/u/74983634?s=200&v=4' },
    { name: 'Lottie', icon: 'https://lottiefiles.com/favicon.ico' },
    { name: 'Penpot', icon: 'https://cdn.simpleicons.org/penpot/000000' },
    { name: 'Uizard', icon: 'https://uizard.io/favicon.ico' },
    { name: 'Visily', icon: 'https://www.visily.ai/favicon.ico' },
    { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/000000' },
  ]},
  { id: 'ai', label: 'AI Tools', skills: [
    { name: 'ChatGPT', icon: 'https://openai.com/favicon.ico' },
    { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic/000000' },
    { name: 'Gemini', icon: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
    { name: 'GitHub Copilot', icon: 'https://cdn.simpleicons.org/githubcopilot/000000' },
    { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor/000000' },
    { name: 'Bolt.new', icon: 'https://cdn.simpleicons.org/stackblitz/1389FD' },
    { name: 'v0.dev', icon: 'https://cdn.simpleicons.org/vercel/000000' },
    { name: 'Lovable', icon: 'https://lovable.dev/favicon.ico' },
    { name: 'Midjourney', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png' },
    { name: 'Stable Diffusion', icon: 'https://stability.ai/favicon.ico' },
    { name: 'Perplexity', icon: 'https://cdn.simpleicons.org/perplexity/000000' },
    { name: 'ElevenLabs', icon: 'https://cdn.simpleicons.org/elevenlabs/000000' },
    { name: 'Hugging Face', icon: 'https://cdn.simpleicons.org/huggingface/000000' },
  ]},
  { id: 'automation', label: 'Automation', skills: [
    { name: 'n8n', icon: 'https://n8n.io/favicon.ico' },
    { name: 'Google Opal', icon: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
    { name: 'GitHub Actions', icon: 'https://avatars.githubusercontent.com/u/44036562?s=200&v=4' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  ]},
  { id: 'seo', label: 'SEO Tools', skills: [
    { name: 'Google Search Console', icon: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
    { name: 'Google Analytics', icon: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg' },
    { name: 'Google Tag Manager', icon: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
    { name: 'Ahrefs', icon: 'https://ahrefs.com/favicon.ico' },
    { name: 'SEMrush', icon: 'https://cdn.simpleicons.org/semrush/FF642D' },
    { name: 'Yoast SEO', icon: 'https://cdn.simpleicons.org/yoast/A4286A' },
    { name: 'Schema Markup', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  ]},
  { id: 'platforms', label: 'Other Platforms', skills: [
    { name: 'Google AdSense', icon: 'https://www.vectorlogo.zone/logos/google_adsense/google_adsense-icon.svg' },
    { name: 'Google Ads', icon: 'https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg' },
    { name: 'Play Console', icon: 'https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg' },
    { name: 'Google Workspace', icon: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
    { name: 'Microsoft 365', icon: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg' },
    { name: 'Zoho Workspace', icon: 'https://www.zoho.com/favicon.ico' },
    { name: 'Appwrite', icon: 'https://avatars.githubusercontent.com/u/25003669?s=200&v=4' },
    { name: 'Jira', icon: 'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg' },
    { name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
    { name: 'Slack', icon: 'https://www.vectorlogo.zone/logos/slack/slack-icon.svg' },
    { name: 'Firebase Console', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: 'Stripe', icon: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg' },
    { name: 'Razorpay', icon: 'https://razorpay.com/favicon.png' },
    { name: 'Cloudflare', icon: 'https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg' },
    { name: 'Supabase', icon: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg' },
    { name: 'Twilio', icon: 'https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg' },
    { name: 'VS Code', icon: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg' },
    { name: 'Figma Dev', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'Linear', icon: 'https://cdn.simpleicons.org/linear/5E6AD2' },
    { name: 'Confluence', icon: 'https://cdn.simpleicons.org/confluence/172B4D' },
    { name: 'Trello', icon: 'https://cdn.simpleicons.org/trello/0052CC' },
    { name: 'Sentry', icon: 'https://cdn.simpleicons.org/sentry/362D59' },
    { name: 'Datadog', icon: 'https://cdn.simpleicons.org/datadog/632CA6' },
  ]},
];

const styles = `
  .tech-section {
    padding-top: var(--section-padding);
    padding-bottom: var(--section-padding);
    border-top: 1px solid #000;
    font-family: var(--font-body);
  }

  /* ── Mobile: stack tabs on top, content below ── */
  .tech-tabs-mobile {
    display: flex;
    overflow-x: auto;
    gap: 0.5rem;
    padding: 0 0 1rem 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-bottom: 1.25rem;
  }

  .tech-tabs-mobile::-webkit-scrollbar { display: none; }

  .tech-tab-pill {
    flex-shrink: 0;
    padding: 7px 14px;
    border: 1px solid #d4d4d4;
    border-radius: 100px;
    background: #fff;
    cursor: pointer;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: var(--font-mono);
    color: #737373;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
    white-space: nowrap;
  }

  .tech-tab-pill--active {
    background: #000;
    color: #fff;
    border-color: #000;
  }

  .tech-content-mobile {
    border: 1px solid #000;
    background: #fff;
  }

  .tech-content-mobile h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    padding: 16px 20px;
    font-family: var(--font-display);
    letter-spacing: -0.3px;
    color: #000;
    border-bottom: 1px solid #000;
  }

  .tech-grid-mobile {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-left: 1px solid #000;
    border-top: 1px solid #000;
  }

  /* ── Desktop: original sidebar layout ── */
  .tech-wrapper {
    display: none;
  }

  @media (min-width: 1024px) {
    .tech-tabs-mobile,
    .tech-content-mobile {
      display: none;
    }

    .tech-wrapper {
      display: flex;
      border: 1px solid #000;
      min-height: 600px;
      background: #fff;
    }

    .tech-sidebar {
      width: 270px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      background: #e8e8e8;
      border-right: 1px solid #000;
    }

    .tech-tab {
      height: 48px;
      padding: 0 20px;
      text-align: left;
      background: none;
      border: none;
      border-bottom: 1px solid #000;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: background 0.15s;
    }

    .tech-tab:last-child { border-bottom: none; }

    .tech-tab span {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: var(--font-mono);
    }

    .tech-tab--inactive { background: #e8e8e8; color: #555; }
    .tech-tab--inactive:hover { background: #d8d8d8; }

    .tech-tab--active {
      background: #fff;
      color: #000;
      width: calc(100% + 1px);
      position: relative;
      z-index: 2;
      border-right: 1px solid #fff;
      margin-right: -1px;
    }

    .tech-content {
      flex: 1;
      padding: 40px 48px;
      background: #fff;
      overflow-y: auto;
    }

    .tech-content h3 {
      font-size: 32px;
      font-weight: 700;
      margin: 0 0 28px 0;
      font-family: var(--font-display);
      letter-spacing: -0.5px;
      color: #000;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-left: 1px solid #000;
      border-top: 1px solid #000;
    }
  }

  @media (min-width: 1280px) {
    .tech-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  /* ── Shared cell styles ── */
  .tech-cell {
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 12px;
    transition: background 0.15s;
    cursor: default;
  }

  @media (min-width: 1024px) {
    .tech-cell { padding: 32px 16px; }
  }

  .tech-cell:hover { background: #f5f5f5; }

  .tech-cell img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 10px;
    transition: transform 0.2s;
  }

  @media (min-width: 1024px) {
    .tech-cell img { width: 52px; height: 52px; margin-bottom: 14px; }
  }

  .tech-cell:hover img { transform: scale(1.08); }

  .tech-cell span {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: center;
    font-family: var(--font-mono);
    color: #111;
  }

  @media (min-width: 1024px) {
    .tech-cell span { font-size: 10px; letter-spacing: 0.12em; }
  }
`;

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('languages');
  const activeCategory = TECH_CATEGORIES.find(cat => cat.id === activeTab) || TECH_CATEGORIES[0];

  return (
    <>
      <style>{styles}</style>
      <section className="tech-section">
        <div className="container mb-16">
          <h2 className="font-display text-3xl font-semibold lg:text-4xl">Skills &amp; Technologies</h2>
          <p className="text-xl lg:text-2xl mt-2 text-gray-600">
            A comprehensive set of modern tools and frameworks used to build scalable, high-performance digital products.
          </p>
        </div>

        <div className="container">
          {/* ── Mobile UI (hidden on desktop via CSS) ── */}
          <div className="tech-tabs-mobile">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`tech-tab-pill ${activeTab === cat.id ? 'tech-tab-pill--active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="tech-content-mobile">
            <h3>{activeCategory.label}</h3>
            <div className="tech-grid-mobile">
              {activeCategory.skills.map((skill) => (
                <div key={skill.name} className="tech-cell">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Desktop UI (hidden on mobile via CSS) ── */}
          <div className="tech-wrapper">
            <div className="tech-sidebar">
              {TECH_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`tech-tab ${activeTab === cat.id ? 'tech-tab--active' : 'tech-tab--inactive'}`}
                >
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
            <div className="tech-content">
              <h3>{activeCategory.label}</h3>
              <div className="tech-grid">
                {activeCategory.skills.map((skill) => (
                  <div key={skill.name} className="tech-cell">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}