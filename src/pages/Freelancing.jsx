import React, { useState } from 'react';
import './InfoPage.css';
import './ContributionsList.css';

/* ─── Freelance Platforms ─── */
const PLATFORMS = [
  {
    id: 'upwork',
    platform: 'Upwork',
    badge: 'Top Rated',
    role: 'Professional Full Stack Freelancer',
    period: '2024 – Present',
    logoText: 'UPW',
    logoBg: '#fafafa',
    logoImg: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg',
    description: 'Deliver exceptional full-stack web applications and UI/UX designs to international clients with a 100% job success score.',
    tags: ['UI/UX Design', 'Full Stack Dev', 'Client Relations'],
  },
  {
    id: 'fiverr',
    platform: 'Fiverr',
    badge: 'Top Rated',
    role: 'Professional Web Developer & Designer',
    period: '2024 – Present',
    logoText: 'FVR',
    logoBg: '#fafafa',
    logoImg: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo_09.2020.svg',
    description: 'Provide end-to-end design-to-code services, custom landing pages, and interactive branding packages to global businesses.',
    tags: ['Web Design', 'React Development', 'Custom Branding'],
  },
  {
    id: 'freelancer',
    platform: 'Freelancer',
    badge: 'Verified',
    role: 'Freelance Software Engineer',
    period: '2024 – Present',
    logoText: 'FLR',
    logoBg: '#fafafa',
    logoImg: 'https://www.vectorlogo.zone/logos/freelancer/freelancer-icon.svg',
    description: 'Developed premium front-end products, responsive dashboards, and API automation systems for highly rated employers.',
    tags: ['Frontend Dev', 'API Automation', 'SEO Optimization'],
  },
  {
    id: '03',
    platform: 'Claro',
    badge: 'Identity',
    role: 'Logo Designer',
    period: '2026',
    logoText: 'CLR',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Claro.png',
    description: 'Conceptualized and crafted the modern, minimalist corporate logo identity to enhance the company\'s brand footprint.',
    tags: ['Logo Design', 'Vector Illustration', 'Brand Identity'],
  },
  {
    id: '08',
    platform: 'OKYNUS',
    badge: 'Graphic Design',
    role: 'Apparel & Print Designer',
    period: '2026',
    logoText: 'OKN',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/OKYNUS.png',
    description: 'Designed stylish custom corporate t-shirts and premium business stationery to support operational and marketing workflows.',
    tags: ['Tshirt Design', 'Business Card', 'Stationery Design', 'Print Media'],
  },
  {
    id: '13',
    platform: 'Syncromedix',
    badge: 'Branding',
    role: 'Logo Designer',
    period: '2026',
    logoText: 'SXM',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Syncromedix.png',
    description: 'Designed a highly professional, modern logo mark and visual elements tailored for the medical and healthcare services sector.',
    tags: ['Logo Design', 'Healthcare Branding', 'Vector Design'],
  },
  {
    id: '15',
    platform: 'Vltronix',
    badge: 'Logo & Brand',
    role: 'Brand Designer',
    period: '2026',
    logoText: 'VLX',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Vltronix.png',
    description: 'Created professional logo marks and comprehensive branding assets aligning with cutting-edge tech and electronics standards.',
    tags: ['Logo Design', 'Branding Design', 'Tech Identity'],
  },
  {
    id: 'hexatechllp',
    platform: 'Hexa Tech LLP',
    badge: 'Logo Design',
    role: 'Logo Designer',
    period: '2025',
    logoText: 'HTL',
    logoBg: '#fafafa',
    logoImg: '/logos/Group 14.png',
    description: 'Developed a professional, modern logo mark and visual elements for Hexa Tech LLP to establish their brand identity.',
    tags: ['Logo Design', 'Vector Graphics', 'Branding Identity'],
  },
  {
    id: '01',
    platform: 'AtharvaTech',
    badge: 'UI/UX & Cloud',
    role: 'Full Stack Developer & Designer',
    period: '2024 – 2025',
    logoText: 'ATT',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/AtharvaTech.png',
    description: 'Designed, deployed, and optimized high-performance web applications using modern UI/UX principles and scalable cloud services.',
    tags: ['Full Stack', 'UI/UX Design', 'Cloud Services', 'Deployment'],
  },
  {
    id: '04',
    platform: 'Devstree',
    badge: 'Frontend Dev',
    role: 'Frontend Developer',
    period: '2024',
    logoText: 'DST',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Devstree.png',
    description: 'Translated high-fidelity website designs into production-ready, pixel-perfect, and fully interactive frontend codebases.',
    tags: ['Website Design to Code', 'Frontend Development', 'React', 'CSS'],
  },
  {
    id: '05',
    platform: 'DIS',
    badge: 'Mobile UI/UX',
    role: 'Mobile App Designer',
    period: '2024',
    logoText: 'DIS',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/DIS.png',
    description: 'Designed comprehensive mobile application UI/UX flows and layouts tailored specifically for academic and tuition management.',
    tags: ['Mobile App Design', 'UI/UX Design', 'Academic / Tuition', 'Figma'],
  },
  {
    id: '06',
    platform: 'Faborbit',
    badge: 'Creative Design',
    role: 'Creative Designer & Developer',
    period: '2024',
    logoText: 'FBO',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Faborbit.png',
    description: 'Designed custom apparel (t-shirts, hoodies), created official corporate logo marks, and built the core responsive business website.',
    tags: ['Apparel Design', 'Logo Design', 'Website Design', 'Vector Art'],
  },
  {
    id: '09',
    platform: 'Prominent Technologies',
    badge: 'Corporate ID',
    role: 'Brand Identity Designer',
    period: '2024',
    logoText: 'PRT',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Prominent Technologies.png',
    description: 'Designed professional corporate and office stationery, maintaining absolute visual consistency across all brand assets.',
    tags: ['Office Stationery', 'Brand Identity', 'Print Design', 'Layouts'],
  },
  {
    id: '10',
    platform: 'Ray Infrastructure',
    badge: 'Web Redesign',
    role: 'UI/UX Web Designer',
    period: '2024',
    logoText: 'RYI',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Ray Infra.png',
    description: 'Conducted a comprehensive UI/UX redesign of the corporate website to elevate visual aesthetics, responsiveness, and user experience.',
    tags: ['UI/UX Design', 'Website Redesign', 'Figma', 'Prototyping'],
  },
  {
    id: '11',
    platform: 'Skillspeer',
    badge: 'Web UI/UX',
    role: 'UI/UX Website Designer',
    period: '2024',
    logoText: 'SKP',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/SKILSPEER.png',
    description: 'Crafted intuitive, high-fidelity web platform interfaces and comprehensive design systems to ensure optimal user engagement.',
    tags: ['Website Design', 'UI/UX Design', 'Design Systems', 'Figma'],
  },
  {
    id: '12',
    platform: 'SOLERO',
    badge: 'Branding',
    role: 'Logo Designer',
    period: '2024',
    logoText: 'SLR',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/SOLERO.png',
    description: 'Designed a unique corporate logo mark and developed style guidelines representing the company\'s modern vision.',
    tags: ['Logo Design', 'Vector Graphics', 'Branding Identity'],
  },
  {
    id: '02',
    platform: 'BOXCRAFTS',
    badge: 'Product Design',
    role: 'Product Designer & Developer',
    period: '2023 – 2024',
    logoText: 'BXC',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/BOXCRAFTS.png',
    description: 'Directed end-to-end product design processes and custom web development to deliver intuitive and responsive digital user interfaces.',
    tags: ['Product Design', 'Web Development', 'UX Design', 'UI Build'],
  },
  {
    id: '14',
    platform: 'THE Kesar Mango',
    badge: 'Creative & Dev',
    role: 'Brand & Full Stack Developer',
    period: '2023 – 2024',
    logoText: 'TKM',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/THE KESAR MANGO.png',
    description: 'Executed complete brand identity, package designs, sales funnel integration, and overall custom development initiatives to scale business operations.',
    tags: ['Branding Design', 'Package Design', 'Development', 'Sales Solutions'],
  },
  {
    id: '07',
    platform: 'Gokul Fashion',
    badge: 'Branding & BD',
    role: 'Branding Designer & BDE',
    period: '2023',
    logoText: 'GKF',
    logoBg: '#fafafa',
    logoImg: '/assets/logos/Gokul Fashion.png',
    description: 'Executed high-impact branding identity designs and performed strategic business development tasks to scale market outreach.',
    tags: ['Branding Design', 'Business Development', 'BDE', 'Marketing'],
  },
  {
    id: 'shikshan-na-prerna-pushpa',
    platform: 'Shikshan Na Prerna Pushpa',
    badge: 'Graphics & Quiz',
    role: 'Freelance Designer & Developer',
    period: '2021 – 2022',
    logoText: 'SNPP',
    logoBg: '#fafafa',
    logoImg: '/logos/Baldevpari.com.png',
    description: 'Designed educational graphics, built interactive quizzes, and managed various custom maintenance and technical support tasks.',
    tags: ['Graphics Design', 'Quiz Making', 'Content Creation', 'Maintenance'],
    link: 'https://www.baldevpari.com/',
  },
  {
    id: 'mathspari',
    platform: 'MathsPari',
    badge: 'Mobile App',
    role: 'Mobile App Developer',
    period: '2021 – 2022',
    logoText: 'MP',
    logoBg: '#fafafa',
    logoImg: '/logos/Mathsapari.png',
    description: 'Developed and optimized user interface designs and features for the MathsPari educational mobile application on Google Play.',
    tags: ['Mobile Dev', 'Kodular', 'UI/UX Design', 'App Publishing'],
    link: 'https://play.google.com/store/apps/details?id=io.kodular.balvant_pari.MATHS_PARI&hl=en_IN',
  },
];

const SERVICES = [
  { id: '01', title: 'Full Stack Web Apps', desc: 'End-to-end MERN / Next.js applications with auth, REST/GraphQL APIs, real-time features, and cloud deployment.', tags: ['React', 'Node.js', 'MongoDB', 'Next.js', 'AWS'] },
  { id: '02', title: 'UI/UX Design & Prototyping', desc: 'High-fidelity Figma prototypes, design systems, and pixel-perfect component libraries for modern digital products.', tags: ['Figma', 'Design System', 'Prototyping', 'Wireframing'] },
  { id: '03', title: 'Landing Pages & Portfolios', desc: 'Premium, fast-loading landing pages and portfolio sites with custom animations, SEO optimized, and fully responsive.', tags: ['HTML/CSS', 'React', 'Animation', 'SEO'] },
  { id: '04', title: 'E-Commerce Solutions', desc: 'WooCommerce, Shopify, or custom MERN store builds with payment gateway, inventory management, and admin dashboard.', tags: ['WooCommerce', 'Shopify', 'MERN', 'Payment'] },
  { id: '05', title: 'CMS & WordPress Development', desc: 'Custom WordPress themes, Odoo implementations, and headless CMS integrations for content-driven businesses.', tags: ['WordPress', 'Odoo', 'Headless CMS'] },
  { id: '06', title: 'API Integration & Automation', desc: 'Third-party API integrations (Stripe, Clerk, EmailJS, Twilio), webhook setups, and n8n automation workflows.', tags: ['REST API', 'Webhooks', 'n8n', 'Stripe'] },
];

const FREELANCE_WORKS = [
  { id: '01', title: 'Full Stack MERN Web Application', client: 'Upwork', period: '2024 – Present', category: 'Development', status: 'Ongoing' },
  { id: '02', title: 'Custom Landing Pages & React Builds', client: 'Fiverr', period: '2024 – Present', category: 'Development & UI/UX', status: 'Ongoing' },
  { id: '03', title: 'Responsive Dashboards & Frontend Products', client: 'Freelancer', period: '2024 – Present', category: 'Development', status: 'Ongoing' },
  { id: '04', title: 'Claro Corporate Logo Identity', client: 'Claro', period: '2026', category: 'Branding & Design', status: 'Completed' },
  { id: '05', title: 'OKYNUS Custom T-Shirts & Stationery', client: 'OKYNUS', period: '2026', category: 'Print Design', status: 'Completed' },
  { id: '06', title: 'Syncromedix Medical Brand Logo', client: 'Syncromedix', period: '2026', category: 'Branding & Design', status: 'Completed' },
  { id: '07', title: 'Vltronix Brand Marks & Assets', client: 'Vltronix', period: '2026', category: 'Branding & Design', status: 'Completed' },
  { id: '08', title: 'ID Card Design, Re-Branding & Design Work', client: 'Abhishek Bhambhana', period: 'Jun 2026', category: 'Identity & Design', status: 'Canceled', link: 'https://abhishekup.work/' },
  { id: '09', title: 'Portfolio Design Work', client: 'Shyamal Jasani', period: 'Jun 2026', category: 'UI/UX Design', status: 'Canceled' },
  { id: '10', title: 'Hexa Tech LLP Logo Design & Identity', client: 'Hexa Tech LLP', period: '2025', category: 'Branding & Design', status: 'Completed' },
  { id: '11', title: 'AtharvaTech Full Stack App Deploys', client: 'AtharvaTech', period: '2024 – 2025', category: 'Development & UI/UX', status: 'Completed' },
  { id: '12', title: 'Devstree Design-to-Code Frontend React', client: 'Devstree', period: '2024', category: 'Development', status: 'Completed' },
  { id: '13', title: 'DIS Academic App UI/UX Figma Flows', client: 'DIS', period: '2024', category: 'UI/UX Design', status: 'Completed' },
  { id: '14', title: 'Faborbit Apparel & Responsive Website', client: 'Faborbit', period: '2024', category: 'Development & Design', status: 'Completed' },
  { id: '15', title: 'Prominent Technologies Brand Stationery', client: 'Prominent Technologies', period: '2024', category: 'Print Design', status: 'Completed' },
  { id: '16', title: 'Ray Infrastructure Corporate Web Redesign', client: 'Ray Infrastructure', period: '2024', category: 'UI/UX Design', status: 'Completed' },
  { id: '17', title: 'Skillspeer Interface & Design Systems', client: 'Skillspeer', period: '2024', category: 'UI/UX Design', status: 'Completed' },
  { id: '18', title: 'SOLERO Corporate Logo Guidelines', client: 'SOLERO', period: '2024', category: 'Branding & Design', status: 'Completed' },
  { id: '19', title: 'BOXCRAFTS Interactive Interfaces', client: 'BOXCRAFTS', period: '2023 – 2024', category: 'Development & Design', status: 'Completed' },
  { id: '20', title: 'THE Kesar Mango Funnel & Packaging', client: 'THE Kesar Mango', period: '2023 – 2024', category: 'Development & Branding', status: 'Completed' },
  { id: '21', title: 'Gokul Fashion Brand Identity & BD', client: 'Gokul Fashion', period: '2023', category: 'Branding & Marketing', status: 'Completed' },
  { id: '22', title: 'Shikshan Na Prerna Pushpa Graphics & Quizzes', client: 'Shikshan Na Prerna Pushpa', period: '2021 – 2022', category: 'Graphics & Dev', status: 'Completed' },
  { id: '23', title: 'MathsPari Mobile App Development', client: 'MathsPari', period: '2021 – 2022', category: 'Mobile Development', status: 'Completed' }
];

const earliestYear = Math.min(...PLATFORMS.map(p => {
  const yrs = p.period.match(/\d{4}/g);
  return yrs ? Math.min(...yrs.map(Number)) : new Date().getFullYear();
}));
const currentYear   = new Date().getFullYear();
const yearsOfExp    = currentYear - earliestYear;          // 2023 → 3 years as of 2026
const happyClients  = PLATFORMS.length;                    // 1 entry = 1 client

const totalWorks = FREELANCE_WORKS.length;
const completedWorks = FREELANCE_WORKS.filter(w => w.status === 'Completed').length;
const canceledWorks = FREELANCE_WORKS.filter(w => w.status === 'Canceled').length;
const totalFinished = completedWorks + canceledWorks;
const successRatio = totalFinished > 0 ? Math.round((completedWorks / totalFinished) * 100) : 100;

const STATS = [
  { value: `${totalWorks}+`, label: 'Projects Delivered' },
  { value: `${happyClients}+`,      label: 'Happy Clients'      },
  { value: `${successRatio}%`,      label: 'Success Ratio'      },
  { value: `${yearsOfExp}+`,        label: 'Years of Experience'},
];

const PROCESS = [
  { step: '01', title: 'Discovery Call', desc: 'We discuss your requirements, goals, and timeline in a free 30-minute consultation.' },
  { step: '02', title: 'Proposal & Scope', desc: 'I deliver a detailed scope of work, tech stack recommendation, timeline, and fixed pricing.' },
  { step: '03', title: 'Design & Build', desc: 'Iterative development with regular check-ins, milestone demos, and full transparency.' },
  { step: '04', title: 'Deliver & Support', desc: '30 days of post-delivery support included with every project, no extra charge.' },
];
const BRANDS = [
  { name: 'AtharvaTech', icon: '/assets/logos/AtharvaTech.png' },
  { name: 'BOXCRAFTS', icon: '/assets/logos/BOXCRAFTS.png' },
  { name: 'Claro', icon: '/assets/logos/Claro.png' },
  { name: 'Devstree', icon: '/assets/logos/Devstree.png' },
  { name: 'DIS', icon: '/assets/logos/DIS.png' },
  { name: 'Faborbit', icon: '/assets/logos/Faborbit.png' },
  { name: 'Gokul Fashion', icon: '/assets/logos/Gokul Fashion.png' },
  { name: 'Hexa Tech LLP', icon: '/logos/Group 14.png' },
  { name: 'MathsPari', icon: '/logos/Mathsapari.png' },
  { name: 'OKYNUS', icon: '/assets/logos/OKYNUS.png' },
  { name: 'Prominent Technologies', icon: '/assets/logos/Prominent Technologies.png' },
  { name: 'Ray Infra', icon: '/assets/logos/Ray Infra.png' },
  { name: 'SKILSPEER', icon: '/assets/logos/SKILSPEER.png' },
  { name: 'SOLERO', icon: '/assets/logos/SOLERO.png' },
  { name: 'Shikshan Na Prerna Pushpa', icon: '/logos/Baldevpari.com.png' },
  { name: 'Syncromedix', icon: '/assets/logos/Syncromedix.png' },
  { name: 'THE KESAR MANGO', icon: '/assets/logos/THE KESAR MANGO.png' },
  { name: 'Vltronix', icon: '/assets/logos/Vltronix.png' },
];

const MARQUEE_STYLES = `
  .fl-marquee-wrap {
    overflow: hidden;
    border-top: 1px solid rgba(0,0,0,0.06);
    border-bottom: 1px solid rgba(0,0,0,0.06);
    background: rgba(0,0,0,0.015);
    padding: 24px 0;
    margin: 32px 0 0 0;
  }
  .fl-marquee-track {
    display: flex;
    gap: 24px;
    width: max-content;
    animation: fl-scroll 36s linear infinite;
  }
  .fl-marquee-wrap:hover .fl-marquee-track { animation-play-state: paused; }
  @keyframes fl-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .fl-marquee-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-width: 120px;
    flex-shrink: 0;
    padding: 8px;
    transition: transform 0.25s;
  }
  .fl-marquee-item:hover {
    transform: translateY(-4px);
  }
  .fl-marquee-item img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    mix-blend-mode: multiply;
    filter: grayscale(100%) opacity(0.6);
    transition: transform 0.25s, filter 0.25s;
  }
  .fl-marquee-item:hover img { transform: scale(1.08); filter: grayscale(0%) opacity(1); }
  .fl-marquee-item span {
    font-size: 9.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-family: var(--font-mono);
    color: rgba(0, 0, 0, 0.7);
    white-space: nowrap;
    text-align: center;
    max-width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.25s;
  }
  .fl-marquee-item:hover span {
    color: rgba(0, 0, 0, 0.95);
  }

  /* ── Freelance History Grid ── */
  .fl-history-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  @media (min-width: 640px) {
    .fl-history-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1024px) {
    .fl-history-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .fl-history-card {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 0px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .fl-history-card:hover {
    transform: translateY(-5px);
    border-color: #4452FF;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
    background: #fff;
  }
  .fl-history-card__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .fl-history-card__logo-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .fl-history-card__logo {
    width: 48px;
    height: 48px;
    border-radius: 0px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    overflow: hidden;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
  .fl-history-card:hover .fl-history-card__logo {
    transform: scale(1.05);
  }
  .fl-history-card__logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: multiply;
  }
  .fl-history-card__meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .fl-history-card__company {
    font-size: 1rem;
    font-weight: 800;
    color: #000;
    margin: 0;
    line-height: 1.1;
  }
  .fl-history-card__badge {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #4452FF;
    background: rgba(68, 82, 255, 0.06);
    padding: 2px 8px;
    border-radius: 0px;
    width: fit-content;
  }
  .fl-history-card__period {
    font-size: 10px;
    font-weight: 700;
    color: #a3a3a3;
  }
  .fl-history-card__body {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
  }
  .fl-history-card__role {
    font-size: 1.15rem;
    font-weight: 800;
    color: #000;
    line-height: 1.25;
    margin: 0;
  }
  .fl-history-card__desc {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #525252;
    margin: 0;
  }
  .fl-history-card__footer {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    border-top: 1px dashed rgba(0,0,0,0.06);
    padding-top: 16px;
  }
  .fl-row-custom {
    display: grid !important;
    grid-template-columns: 2.5rem 1.5fr 1fr 1fr 0.8fr !important;
    gap: 1rem;
    align-items: center;
  }
  .fl-status-cell {
    text-align: right;
  }
  @media (max-width: 640px) {
    .fl-row-custom {
      grid-template-columns: 2rem 1fr !important;
      grid-template-rows: auto auto auto auto !important;
      gap: 0.4rem;
      padding: 1.25rem 0.5rem !important;
    }
    .fl-row-custom .cl-row__num {
      grid-column: 1 !important;
      grid-row: 1 / span 4 !important;
      align-self: start;
    }
    .fl-row-custom .cl-row__org,
    .fl-row-custom .cl-row__role,
    .fl-row-custom .cl-row__right,
    .fl-row-custom .fl-status-cell {
      grid-column: 2 !important;
      text-align: left !important;
    }
    .fl-status-cell {
      margin-top: 4px;
    }
  }
`;


export default function Freelancing() {
  const [showWorkList, setShowWorkList] = useState(false);
  const doubled = [...BRANDS, ...BRANDS, ...BRANDS];
  return (
    <div className="ip-root">
      <style>{MARQUEE_STYLES}</style>
      <div className="ip-bg-accent" />

      <div className="container ip-wrap">
        {/* Hero */}
        <header className="ip-hero">
          <div className="ip-hero__top">
            <div className="ip-hero__badge">
              <span className="ip-hero__badge-dot" />
              Freelance Services
            </div>
            <span className="ip-hero__date">Available Now</span>
          </div>

          <div className="ip-hero__body">
            <h1 className="ip-hero__title">
              <span className="ip-hero__line ip-hero__line--1">Hire.</span>
              <span className="ip-hero__line ip-hero__line--2">Build.</span>
              <span className="ip-hero__line ip-hero__line--3">Launch.</span>
            </h1>
            <div className="ip-hero__meta">
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Platforms</span>
                <span className="ip-hero__meta-value">Fiverr · Upwork</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Rating</span>
                <span className="ip-hero__meta-value">5 ⭐ · Top Rated</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Projects Done</span>
                <span className="ip-hero__meta-value">{totalWorks}+ Delivered</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Availability</span>
                <span className="ip-hero__meta-value" style={{ color: '#4452FF' }}>● Open for Work</span>
              </div>
            </div>
          </div>

          <p className="ip-hero__sub">
            Premium freelance development and design services on Fiverr and Upwork — from idea to production. Trusted by clients worldwide with a 5-star rating and Top Rated status.
          </p>
        </header>

        {/* Stats */}
        <div className="fl-stats">
          {STATS.map((s, i) => {
            const isProjectsDelivered = s.label === 'Projects Delivered';
            const cardContent = (
              <>
                <span className="fl-stat__value font-display">{s.value}</span>
                <span className="fl-stat__label font-mono">{s.label}</span>
              </>
            );

            return isProjectsDelivered ? (
              <div
                key={i}
                className="fl-stat"
                onClick={() => {
                  setShowWorkList(true);
                  setTimeout(() => {
                    const el = document.querySelector('.cl-root');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                style={{
                  cursor: 'pointer',
                }}
              >
                {cardContent}
              </div>
            ) : (
              <div key={i} className="fl-stat">
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Client Logos Marquee */}
        <div style={{ marginBottom: '4px' }}>
          <div className="ip-section__label font-mono" style={{ marginBottom: '12px' }}>Clients & Brands</div>
        </div>
        <div className="fl-marquee-wrap">
          <div className="fl-marquee-track">
            {doubled.map((b, i) => (
              <div key={i} className="fl-marquee-item">
                <img src={b.icon} alt={b.name} loading="lazy" />
                <span>{b.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clients */}
        <section className="ip-section" style={{ paddingTop: '0px' }}>
          <div className="exp-section-header" style={{ marginBottom: '24px', borderRadius: '8px' }}>
            <span className="exp-section-header__label font-mono">Clients</span>
            <span className="exp-section-header__count font-mono">{PLATFORMS.length} Engagements</span>
          </div>
          <div className="fl-history-grid">
            {PLATFORMS.map((p) => {
              const CardContent = (
                <>
                  <div className="fl-history-card__top">
                    <div className="fl-history-card__logo-wrap">
                      <div className="fl-history-card__logo" style={{ background: p.logoBg || '#fafafa' }}>
                        {p.logoImg ? (
                          <img src={p.logoImg} alt={p.platform} />
                        ) : (
                          <span className="exp-card__logo-letter font-mono" style={{ fontSize: '10px', letterSpacing: '0.05em' }}>{p.logoText}</span>
                        )}
                      </div>
                      <div className="fl-history-card__meta">
                        <h3 className="fl-history-card__company font-display">{p.platform}</h3>
                        <span className="fl-history-card__badge font-mono">{p.badge}</span>
                      </div>
                    </div>
                    <span className="fl-history-card__period font-mono">{p.period}</span>
                  </div>
                  <div className="fl-history-card__body">
                    <h4 className="fl-history-card__role font-display">{p.role}</h4>
                    <p className="fl-history-card__desc">{p.description}</p>
                  </div>
                  <div className="fl-history-card__footer">
                    {p.tags.map(t => (
                      <span key={t} className="edu-tag font-mono">{t}</span>
                    ))}
                  </div>
                </>
              );

              return p.link ? (
                <a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fl-history-card"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {CardContent}
                </a>
              ) : (
                <div key={p.id} className="fl-history-card">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </section>

        {/* Services */}
        <section className="ip-section">
          <div className="ip-section__label font-mono">What I Offer</div>
          <div className="fl-services">
            {SERVICES.map((svc) => (
              <div key={svc.id} className="fl-service-card">
                <div className="fl-service-card__head">
                  <span className="fl-service-card__id font-mono">{svc.id}</span>
                </div>
                <h2 className="fl-service-card__title font-display">{svc.title}</h2>
                <p className="fl-service-card__desc">{svc.desc}</p>
                <div className="fl-service-card__tags">
                  {svc.tags.map(t => (
                    <span key={t} className="edu-tag font-mono">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="ip-section">
          <div className="ip-section__label font-mono">How I Work</div>
          <div className="fl-process">
            {PROCESS.map((p) => (
              <div key={p.step} className="fl-process-step">
                <span className="fl-process-step__num font-mono">{p.step}</span>
                <div>
                  <h3 className="fl-process-step__title font-display">{p.title}</h3>
                  <p className="fl-process-step__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="ip-cta">
          <div className="ip-cta__inner">
            <span className="ip-cta__label font-mono">Start a Project</span>
            <h2 className="ip-cta__title font-display">Ready to turn your idea into reality?</h2>
            <div className="ip-cta__actions">
              <a href="mailto:krishsatasiya44@gmail.com" className="ip-cta__btn font-mono">
                Email Me →
              </a>
              <a href="https://krishsatasiya.netlify.app" target="_blank" rel="noreferrer" className="ip-cta__btn-outline font-mono">
                View Portfolio
              </a>
              <button
                onClick={() => setShowWorkList(!showWorkList)}
                className="ip-cta__btn-outline font-mono"
                style={{ cursor: 'pointer', background: 'transparent' }}
              >
                {showWorkList ? 'Hide List of Work' : 'List of Work'}
              </button>
            </div>
          </div>
        </section>

        {showWorkList && (
          <div className="cl-root" style={{ minHeight: 'auto', padding: '4rem 0 2rem', background: 'transparent' }}>
            <div className="cl-container" style={{ padding: 0, maxWidth: 'none' }}>
              <div className="cl-header" style={{ borderBottomColor: 'rgba(0, 0, 0, 0.1)' }}>
                <div className="cl-header__left">
                  <div>
                    <h1 className="cl-title font-display" style={{ fontSize: '2rem' }}>Work History</h1>
                    <p className="cl-sub font-mono">{FREELANCE_WORKS.length} Projects & deliverables logged</p>
                  </div>
                </div>
                <span className="cl-total font-mono" style={{ color: '#e5e5e5', fontSize: '3rem' }}>{FREELANCE_WORKS.length}</span>
              </div>

              <div className="cl-cols font-mono fl-row-custom" style={{ background: 'rgba(0, 0, 0, 0.02)', borderBottomColor: 'rgba(0, 0, 0, 0.08)' }}>
                <span className="cl-cols__num">#</span>
                <span className="cl-cols__role">Work Done / Project</span>
                <span className="cl-cols__org">Period</span>
                <span className="cl-cols__period">Client / Platform</span>
                <span className="cl-cols__status" style={{ textAlign: 'right' }}>Status</span>
              </div>

              <ul className="cl-list font-mono">
                {FREELANCE_WORKS.map((work, idx) => (
                  <li key={work.id} className="cl-row fl-row-custom" style={{ borderBottomColor: 'rgba(0, 0, 0, 0.05)' }}>
                    <span className="cl-row__num">{(idx + 1).toString().padStart(2, '0')}</span>
                    <div className="cl-row__org">
                      {work.link ? (
                        <a href={work.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit', fontSize: '0.9rem', fontWeight: '700' }}>
                          {work.title}
                        </a>
                      ) : (
                        <span className="cl-row__org-name" style={{ fontSize: '0.9rem' }}>{work.title}</span>
                      )}
                      <span className="cl-row__category" style={{ background: 'rgba(68, 82, 255, 0.06)', color: '#4452FF', padding: '2px 8px', width: 'fit-content', marginTop: '4px', textTransform: 'uppercase', fontSize: '8px', fontWeight: '700' }}>
                        {work.category}
                      </span>
                    </div>
                    <span className="cl-row__role">{work.period}</span>
                    <div className="cl-row__right">
                      <span className="cl-row__award" style={{ color: '#4452FF', fontWeight: '700' }}>● {work.client}</span>
                    </div>
                    <div className="fl-status-cell">
                      <span style={{
                        background: work.status === 'Completed' ? 'rgba(34, 197, 94, 0.06)' : work.status === 'Canceled' ? 'rgba(239, 68, 68, 0.06)' : 'rgba(234, 179, 8, 0.06)',
                        color: work.status === 'Completed' ? '#22c55e' : work.status === 'Canceled' ? '#ef4444' : '#eab308',
                        padding: '2px 8px',
                        fontSize: '9px',
                        fontWeight: '700',
                        textTransform: 'uppercase'
                      }}>
                        {work.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
