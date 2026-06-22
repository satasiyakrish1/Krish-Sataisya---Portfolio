import React from 'react';
import '../components/Projects.css';
import './ProjectsPage.css';

const DESIGN_PROJECTS = [
  // --- Behance Projects ---
  {
    title: "STATUE OF THE UNITY | DESIGN MINIMILISTIC",
    desc: "A stunning minimalist flat vector illustration and poster design of the majestic Statue of Unity monument.",
    category: "Graphic Design",
    tags: ["Minimalism", "Illustration", "Poster"],
    bg: "#1e293b",
    light: false,
    year: "2025",
    link: "https://www.behance.net/gallery/[project-id]/STATUE-OF-THE-UNITY-DESIGN-MINIMILISTIC",
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Trending/Portfolio Dashboard Design!!! ✌️",
    desc: "A sleek, dark-themed creative dashboard layout highlighting portfolio analytics, trends, and dynamic data widgets.",
    category: "UI/UX Design",
    tags: ["Dashboard", "Figma", "UI Kit"],
    bg: "#4F46E5",
    light: false,
    year: "2025",
    link: "https://www.behance.net/gallery/[project-id]/TredingPorfolio-Dashboard-Desing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Vultronix - Analysis Software",
    desc: "High-fidelity user interface design for a deep analytics and data rendering software platform tailored for enterprise scale.",
    category: "SaaS Design",
    tags: ["Analytics", "Figma", "Web App"],
    bg: "#0D9488",
    light: false,
    year: "2024",
    link: "https://www.behance.net/gallery/[project-id]/Vultronix-Aanalysis-Software",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Veltronyx - ESG Software Brand Guidelines",
    desc: "Comprehensive brand identity system, color tokens, and corporate guidelines designed for a green tech ESG software suite.",
    category: "Brand Guidelines",
    tags: ["Branding", "Identity", "ESG"],
    bg: "#059669",
    light: false,
    year: "2024",
    link: "https://www.behance.net/gallery/[project-id]/Veltronyx-ESG-Software-Brand-Guidelines",
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "HIRIX : AI BASED HR SYSTEM",
    desc: "An intelligent AI-powered HR platform layout optimizing candidate tracking, workforce analytics, and smart screening pipelines.",
    category: "UI/UX Design",
    tags: ["AI", "HRMS", "Product Design"],
    bg: "#2563EB",
    light: false,
    year: "2024",
    link: "https://www.behance.net/gallery/[project-id]/HIRIX-AI-BASED-HR-SYSTEM",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "STICKER PACK",
    desc: "A vibrant and playful custom-crafted brand illustration sticker pack designed for physical merchandise and corporate events.",
    category: "Graphic Design",
    tags: ["Stickers", "Illustration", "Merch"],
    bg: "#F59E0B",
    light: false,
    year: "2024",
    link: "https://www.behance.net/gallery/[project-id]/STICKER-PACK",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Clearbit – Website Redesign Case Study",
    desc: "A meticulous conversion-driven UX case study and user-centered website overhaul concept for clearbit.com.",
    category: "UX Case Study",
    tags: ["Web Design", "Clearbit", "Redesign"],
    bg: "#10B981",
    light: false,
    year: "2023",
    link: "https://www.behance.net/gallery/[project-id]/Clearbit-Website-Redesign-Case-Study",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Bounceless - UX Case Study",
    desc: "Deep-dive user research, empathy maps, UX architecture, and clean high-fidelity prototypes for a modern mobile app product.",
    category: "UX Case Study",
    tags: ["Mobile UX", "Case Study", "Research"],
    bg: "#D97706",
    light: false,
    year: "2023",
    link: "https://www.behance.net/gallery/[project-id]/Bounceless-UX-Case-Study",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop"
  },

  // --- Dribbble Projects ---
  {
    title: "June: B2B SaaS Product Analytics Tool",
    desc: "An exploration redesign for a B2B SaaS product analytics tool focusing on rich dashboard visual patterns and modern data charts.",
    category: "SaaS Design",
    tags: ["Analytics", "B2B SaaS", "Redesign"],
    bg: "#7c3aed",
    light: false,
    year: "2024",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Zharta: Real-time NFT Loan Lending Platform",
    desc: "A hypothetical, high-fidelity Web3 lending platform concept tailored for real-time NFT loan evaluations.",
    category: "SaaS Design",
    tags: ["NFT Lending", "Web3", "Crypto"],
    bg: "#ec4899",
    light: false,
    year: "2024",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Fintech Website Concept: Bright Accents",
    desc: "A creative web concept leveraging neon accents and sharp dark outlines in a modern neo-brutalist styling.",
    category: "Web Design",
    tags: ["Neo-brutalism", "Fintech", "Web Design"],
    bg: "#ff0055",
    light: false,
    year: "2024",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Ola Electric Book EV Bikes for Rent",
    desc: "Conceptual mobile application design system focused on booking and renting electric vehicles cleanly and efficiently.",
    category: "Mobile App Design",
    tags: ["EV App", "Rentals", "Mobile UI"],
    bg: "#84cc16",
    light: false,
    year: "2024",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Game App UI Components – Dark Theme",
    desc: "A sleek, premium gamified dashboard interface and component kit designed for modern dark theme environments.",
    category: "Mobile App Design",
    tags: ["Gaming", "UI Components", "Dark Theme"],
    bg: "#111827",
    light: false,
    year: "2024",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Smart Home Control App Interface",
    desc: "An intuitive IoT interface for home automation and device controls on a mobile app interface layout.",
    category: "Mobile App Design",
    tags: ["Smart Home", "IoT", "Mobile UI"],
    bg: "#3b82f6",
    light: false,
    year: "2024",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Slack – Landing Page Redesign",
    desc: "A hypothetical redesign of Slack's marketing landing page focusing on visual hierarchy and conversion optimization.",
    category: "Web Design",
    tags: ["Slack", "Redesign", "Landing Page"],
    bg: "#4a154b",
    light: false,
    year: "2023",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Freelance Marketplace Mobile App",
    desc: "A gamified freelance marketplace interface concept making gig platform tracking immersive and interactive.",
    category: "Mobile App Design",
    tags: ["Gig Platform", "Gamification", "Freelance"],
    bg: "#f59e0b",
    light: false,
    year: "2023",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Isometric Inspiration Website Concept",
    desc: "An isometric 3D inspired landing page concept featuring unique glitch hover animations and modern layouts.",
    category: "Web Design",
    tags: ["Isometric", "Animation", "Glitch Effect"],
    bg: "#06b6d4",
    light: false,
    year: "2023",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Design Inspiration – Typography",
    desc: "A high-concept grid poster and social creative exploring custom typography styling and editorial layouts.",
    category: "Graphic Design",
    tags: ["Typography", "Layout", "Inspiration"],
    bg: "#0f172a",
    light: false,
    year: "2023",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Minimal Business Card Design",
    desc: "A beautiful, premium corporate business card branding asset designed with elegant negative space.",
    category: "Brand Guidelines",
    tags: ["Business Card", "Branding", "Minimalism"],
    bg: "#f1f5f9",
    light: true,
    year: "2023",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Clear UI / Web / Illustration Works",
    desc: "A collection of clean layouts, product interfaces, and premium vector illustration works from my design catalog.",
    category: "Graphic Design",
    tags: ["UI Design", "Product", "Illustration"],
    bg: "#6366f1",
    light: false,
    year: "2023",
    link: "https://dribbble.com/satasiyakrish1",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop"
  },

  // --- Video Editing ---
  {
    title: "PRESCRIPTO | HMS | BRANDING DESIGN ✌️",
    desc: "Motion branding video for Prescripto — a Hospital Management System. Edited in After Effects & Premiere Pro.",
    category: "Video Editing",
    tags: ["After Effects", "Branding", "Motion"],
    bg: "#0f172a",
    light: false,
    year: "2026",
    duration: "0:10",
    views: 9,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Krish Satasiya | LARACON.IN | 2026",
    desc: "Event highlight reel for Laracon India 2026. Short-form video edited and produced for social media.",
    category: "Video Editing",
    tags: ["Event Reel", "Premiere Pro", "Laracon"],
    bg: "#FF2D20",
    light: false,
    year: "2026",
    duration: "0:11",
    views: 14,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "JS Gujarat Ahmedabad Meetup #1 | Highlights 🥳",
    desc: "Community highlight reel for JavaScript Gujarat's first Ahmedabad meetup — edited with dynamic cuts and transitions.",
    category: "Video Editing",
    tags: ["Event Reel", "Community", "Highlights"],
    bg: "#F7DF1E",
    light: true,
    year: "2025",
    duration: "0:30",
    views: 24,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Krish Satasiya | Kidolio",
    desc: "Promotional video for Kidolio — a kids' platform. Full video edit with motion graphics and sound design.",
    category: "Video Editing",
    tags: ["Promo", "Motion Graphics", "Product"],
    bg: "#f59e0b",
    light: false,
    year: "2025",
    duration: "0:50",
    views: 57,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Welcome to the Future of Healthcare – Priscripto 🩺",
    desc: "Cinematic product promo for Priscripto — a healthcare super-app. Built with MERN Stack; edited in Premiere Pro.",
    category: "Video Editing",
    tags: ["Healthcare", "Premiere Pro", "Cinematic"],
    bg: "#0D9488",
    light: false,
    year: "2025",
    duration: "0:23",
    views: 23,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Appointment Booking Website | Promo",
    desc: "Smooth promo video for an appointment booking web app — showcasing the UI with clean transitions.",
    category: "Video Editing",
    tags: ["Web App", "Promo", "UI Showcase"],
    bg: "#2563EB",
    light: false,
    year: "2025",
    duration: "0:28",
    views: 25,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Mr. Krish Satasiya | Personal Intro",
    desc: "A crisp personal introduction reel — edited with kinetic typography and ambient sound.",
    category: "Video Editing",
    tags: ["Personal Brand", "Typography", "Reel"],
    bg: "#1e293b",
    light: false,
    year: "2024",
    duration: "0:13",
    views: 12,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Ray Infrastructure Pvt. Ltd. | UI/UX Website Design",
    desc: "Website design promo video for Ray Infrastructure — showcasing the UI/UX work with smooth reveal animations.",
    category: "Video Editing",
    tags: ["UI/UX", "Website", "Corporate"],
    bg: "#059669",
    light: false,
    year: "2024",
    duration: "0:24",
    views: 40,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Finance Application Promo",
    desc: "High-energy promotional video for a finance application — motion graphics and dynamic cuts.",
    category: "Video Editing",
    tags: ["Fintech", "Motion Graphics", "Promo"],
    bg: "#D97706",
    light: false,
    year: "2024",
    duration: "0:25",
    views: 11,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Zoom Clone Reveal | Project Showcase",
    desc: "Project showcase reel for a Zoom Clone built with Next.js — clean UI reveal with transitions.",
    category: "Video Editing",
    tags: ["Dev Project", "Reel", "Next.js"],
    bg: "#2D8CFF",
    light: false,
    year: "2024",
    duration: "0:14",
    views: 25,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1616587226157-48e49175ee20?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Evently | Ticket Booking Website | Promo",
    desc: "Short promo reel for Evently — a ticket booking platform. Edited with energetic pacing and motion.",
    category: "Video Editing",
    tags: ["Events", "Promo", "Web App"],
    bg: "#7c3aed",
    light: false,
    year: "2024",
    duration: "0:14",
    views: 11,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "ExploitXplorers Website | Promo",
    desc: "Community website promo for ExploitXplorers — dynamic motion edit showcasing the brand and platform.",
    category: "Video Editing",
    tags: ["Community", "Website", "Branding"],
    bg: "#16A085",
    light: false,
    year: "2024",
    duration: "0:29",
    views: 18,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "ExploitXplorers Promo Logo | Design By Me 😊",
    desc: "Animated logo reveal for ExploitXplorers — designed and motion-edited entirely by Krish.",
    category: "Video Editing",
    tags: ["Logo Animation", "After Effects", "Brand"],
    bg: "#1A1A2E",
    light: false,
    year: "2024",
    duration: "0:11",
    views: 12,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Storage System Has Been Launched",
    desc: "Launch video for a new cloud storage system — premiere reveal with dynamic visual storytelling.",
    category: "Video Editing",
    tags: ["Product Launch", "Cloud", "Premiere"],
    bg: "#475569",
    light: false,
    year: "2024",
    duration: "0:23",
    views: 20,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "New Storage System Are Live | BETA Version",
    desc: "BETA launch promo for a cloud storage system — polished motion edit with cinematic text overlays.",
    category: "Video Editing",
    tags: ["Beta Launch", "SaaS", "Motion"],
    bg: "#0f172a",
    light: false,
    year: "2024",
    duration: "0:28",
    views: 60,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "New Website Promo 🗞️",
    desc: "Personal portfolio website promo — quick reveal edit with modern transitions and brand typography.",
    category: "Video Editing",
    tags: ["Portfolio", "Promo", "Web"],
    bg: "#4452FF",
    light: false,
    year: "2024",
    duration: "0:21",
    views: 11,
    link: "https://www.youtube.com/@satasiyakrish1",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&auto=format&fit=crop"
  },
];


const DESIGN_CATS  = [...new Set(DESIGN_PROJECTS.filter(p => p.category !== 'Video Editing').map(p => p.category))];
const VIDEO_ITEMS   = DESIGN_PROJECTS.filter(p => p.category === 'Video Editing');

export default function DesignProjects() {
  const [tab, setTab]       = React.useState('design');
  const [filter, setFilter] = React.useState('All');

  const designItems = filter === 'All'
    ? DESIGN_PROJECTS.filter(p => p.category !== 'Video Editing')
    : DESIGN_PROJECTS.filter(p => p.category === filter);

  const renderCard = (proj, i) => (
    <a key={i} href={proj.link} target="_blank" rel="noopener noreferrer" className="project-card group">
      <div className="project-card__thumb" style={{ backgroundColor: proj.bg, position: 'relative' }}>
        {proj.image ? (
          <img src={proj.image} alt={proj.title} className="project-card__img" loading="lazy" />
        ) : (
          <span className={`project-card__initial ${proj.light ? 'text-black' : 'text-white'}`}>{proj.title[0]}</span>
        )}
      </div>
      <div className="project-card__body">
        <div className="project-card__top">
          <h2 className="project-card__title">{proj.title}</h2>
          <span className="project-card__arrow">→</span>
        </div>
        <p className="project-card__desc">{proj.desc}</p>
        <div className="project-card__footer">
          <div className="project-card__tags">
            {proj.tags.map(t => <span key={t} className="project-card__tag">{t}</span>)}
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="projects-page">
      {/* Hero */}
      <section id="projects-hero">
        <div className="container py-section">
          <div className="font-mono uppercase text-lg font-semibold leading-tight text-primary-500" style={{ marginBottom: '0.375rem' }}>Creative Portfolio</div>
          <div className="mt-2 grid gap-2 lg:grid-cols-5 lg:gap-12">
            <div className="font-display text-3xl md:text-4xl font-semibold lg:text-5xl lg:col-span-2"><h1>Creativity</h1></div>
            <div className="text-lg self-end lg:col-span-3">
              <p>A showcase of my creative work — UI/UX design, graphic design, brand identity, and video editing — crafted with intention, aesthetics, and storytelling.</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-3 lg:gap-0 lg:items-end">
            <div className="mt-8 aspect-[32/9] overflow-hidden border w-full">
              <img onError={(e) => e.target.setAttribute('data-error', 1)} width="400" height="650" alt="Design" loading="lazy" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2426&auto=format&fit=crop" className="size-full object-cover" />
            </div>
          </div>
          <div className="platform-nav-card mt-8">
            <div className="platform-nav-header">
              <span className="font-mono text-xs uppercase tracking-wider text-gray-500">Platform Portfolios</span>
              <h3 className="font-display text-lg font-bold">Explore Full Creative Portfolios</h3>
            </div>
            <div className="platform-nav-buttons">
              <a href="https://dribbble.com/satasiyakrish1" target="_blank" rel="noopener noreferrer" className="portfolio-link-btn dribbble-btn">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/dribbble.svg" alt="Dribbble" className="btn-icon" /><span>Dribbble</span>
              </a>
              <a href="https://www.behance.net/satasiyakrish1" target="_blank" rel="noopener noreferrer" className="portfolio-link-btn behance-btn">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/behance.svg" alt="Behance" className="btn-icon" /><span>Behance</span>
              </a>
              <a href="https://www.figma.com/@satasiyakrish1" target="_blank" rel="noopener noreferrer" className="portfolio-link-btn figma-btn">
                <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" className="btn-icon" /><span>Figma</span>
              </a>
              <a href="https://www.youtube.com/@satasiyakrish1" target="_blank" rel="noopener noreferrer" className="portfolio-link-btn youtube-btn">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/youtube.svg" alt="YouTube" className="btn-icon" /><span>Videos</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div className="cr-tabs">
          <button className={`cr-tab ${tab === 'design' ? 'cr-tab--active' : ''}`} onClick={() => { setTab('design'); setFilter('All'); }}>
            🎨 Design <span className="cr-tab__count">{DESIGN_PROJECTS.filter(p => p.category !== 'Video Editing').length}</span>
          </button>
          <button className={`cr-tab ${tab === 'video' ? 'cr-tab--active' : ''}`} onClick={() => setTab('video')}>
            🎬 Video Editing <span className="cr-tab__count">{VIDEO_ITEMS.length}</span>
          </button>
        </div>
      </div>

      {/* Design Tab */}
      {tab === 'design' && (
        <div className="container projects-page__grid-wrap">
          {/* Sub-category filter pills */}
          <div className="cr-pills">
            {['All', ...DESIGN_CATS].map(c => (
              <button key={c} className={`cr-pill ${filter === c ? 'cr-pill--active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
          <div className="projects-page__grid">
            {designItems.map((proj, i) => renderCard(proj, i))}
          </div>
        </div>
      )}

      {/* Video Tab */}
      {tab === 'video' && (
        <div className="container projects-page__grid-wrap">
          <div className="cr-video-header">
            <p className="cr-video-sub">Short-form video edits produced in After Effects, Premiere Pro &amp; DaVinci Resolve.</p>
            <a href="https://www.youtube.com/@satasiyakrish1" target="_blank" rel="noopener noreferrer" className="cr-yt-btn">▶ View on YouTube</a>
          </div>
          <div className="projects-page__grid">
            {VIDEO_ITEMS.map((proj, i) => renderCard(proj, i))}
          </div>
        </div>
      )}
    </div>
  );
}
