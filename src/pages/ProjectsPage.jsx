import React from 'react';
import '../components/Projects.css';
import './ProjectsPage.css';

const ALL_PROJECTS = [
  {
    title: 'Prescripto',
    desc: 'Enterprise-grade healthcare management system with doctor scheduling, EMR, and telemedicine.',
    category: 'Full Stack Web Applications',
    tags: ['MERN', 'Healthcare'],
    bg: '#4452FF', light: false, year: '2024', link: '/project/prescripto',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop',
  },
  {
    title: 'Hirix',
    desc: 'Admin Panel with centralized job posting, ATS tracking, real-time status updates, and company branding.',
    category: 'Full Stack Web Applications',
    tags: ['MERN', 'Clerk', 'n8n', 'Sentry'],
    bg: '#000000', light: false, year: '2024', link: '/project/hirix',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
  },
  {
    title: 'StoreIt',
    desc: 'Modern Google Drive clone with OTP auth, drag-and-drop uploads, and real-time storage dashboard.',
    category: 'Full Stack Web Applications',
    tags: ['Next.js 15', 'Appwrite', 'Tailwind'],
    bg: '#111827', light: false, year: '2024', link: '/project/quarix',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80&fit=crop',
  },
  {
    title: 'Blog CMS',
    desc: 'Professional blogging platform with WYSIWYG editor, SEO tools, and multi-author support.',
    category: 'Full Stack Web Applications',
    tags: ['MERN', 'CMS'],
    bg: '#1e3a5f', light: false, year: '2023', link: '/project/blogcms',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&fit=crop',
  },
  {
    title: 'Exploit Community',
    desc: 'Cybersecurity hub featuring CTF challenges, tutorials, and forums for professionals.',
    category: 'Full Stack Web Applications',
    tags: ['React', 'Security'],
    bg: '#064e3b', light: false, year: '2024',
    link: 'https://exploitxplorers-git-main-krishsatasiya-team.vercel.app/', external: true,
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&q=80&fit=crop',
  },
  {
    title: 'Gaudhara Organic',
    desc: 'E-commerce platform for organic farming with product catalog and online ordering.',
    category: 'Full Stack Web Applications',
    tags: ['React', 'E-commerce'],
    bg: '#f3f4f6', light: true, year: '2023',
    link: 'https://gaudhara-dairy-pvt-ltd.vercel.app/', external: true,
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80&fit=crop',
  },
  {
    title: 'Imagica AI',
    desc: 'AI-powered image generation platform using DALL-E and Stable Diffusion.',
    category: 'Full Stack Web Applications',
    tags: ['React', 'AI'],
    bg: '#7c3aed', light: false, year: '2024',
    link: 'https://github.com/satasiyakrish1/imagica', external: true,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&fit=crop',
  },
  {
    title: '3D Solar System',
    desc: 'Interactive 3D solar system simulator with realistic orbits and planetary textures.',
    category: 'Interactive Web Applications',
    tags: ['Three.js', 'WebGL'],
    bg: '#0f172a', light: false, year: '2023',
    link: '/Projects/3D Solar System/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80&fit=crop',
  },
  {
    title: 'Animated Periodic Table',
    desc: 'Educational chemistry tool with interactive element cards and detailed atomic info.',
    category: 'Interactive Web Applications',
    tags: ['HTML5', 'CSS3'],
    bg: '#ffffff', light: true, year: '2023',
    link: '/Projects/Animated Periodic Table/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=600&q=80&fit=crop',
  },
  {
    title: 'Graph Book',
    desc: 'Advanced graphing calculator for plotting functions and equations using Canvas API.',
    category: 'Interactive Web Applications',
    tags: ['Canvas', 'Math'],
    bg: '#10b981', light: false, year: '2023',
    link: '/Projects/Graph - Book/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&fit=crop',
  },
  {
    title: 'Digital Board',
    desc: 'Real-time collaborative whiteboard for remote teams built with Canvas API.',
    category: 'Interactive Web Applications',
    tags: ['Canvas', 'Collab'],
    bg: '#f97316', light: false, year: '2023',
    link: '/Projects/White Bord Pro/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80&fit=crop',
  },
  {
    title: 'Calculator Pro',
    desc: 'Scientific calculator web app with comprehensive math functions and offline PWA support.',
    category: 'Productivity Tools',
    tags: ['PWA', 'JS'],
    bg: '#3b82f6', light: false, year: '2022',
    link: '/Projects/Calculator/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&q=80&fit=crop',
  },
  {
    title: 'Calendar Pro',
    desc: 'Event management application with drag-and-drop scheduling and iCal export.',
    category: 'Productivity Tools',
    tags: ['React', 'Management'],
    bg: '#ec4899', light: false, year: '2023',
    link: '/Projects/Celender Pro/celender.html', external: true,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
  },
  {
    title: 'Notes PWA',
    desc: 'Minimalist note-taking app supporting Markdown and local storage sync.',
    category: 'Productivity Tools',
    tags: ['PWA', 'Markdown'],
    bg: '#111827', light: false, year: '2023',
    link: '/Projects/Notes/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80&fit=crop',
  },
  {
    title: 'Photo Editor',
    desc: 'Browser-based image manipulation tool with filters, adjustments, and cropping.',
    category: 'Productivity Tools',
    tags: ['Canvas', 'Design'],
    bg: '#8b5cf6', light: false, year: '2023',
    link: '/Projects/photo editing web application/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&fit=crop',
  },
  {
    title: 'Keyboard Learning',
    desc: 'Interactive typing tutor with WPM tests and accuracy tracking.',
    category: 'Productivity Tools',
    tags: ['Education', 'JS'],
    bg: '#f59e0b', light: false, year: '2022',
    link: '/Projects/Keybord/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&fit=crop',
  },
  {
    title: 'Cube Game',
    desc: '3D physics-based puzzle game built with Three.js and WebGL.',
    category: 'Interactive Games',
    tags: ['Three.js', 'WebGL'],
    bg: '#ef4444', light: false, year: '2023',
    link: '/Projects/Cube/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&q=80&fit=crop',
  },
  {
    title: 'Archery Game',
    desc: 'Sports simulation browser game with realistic arrow physics using Canvas API.',
    category: 'Interactive Games',
    tags: ['Canvas', 'Physics'],
    bg: '#22c55e', light: false, year: '2023',
    link: '/Projects/Archry/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=600&q=80&fit=crop',
  },
  {
    title: 'Spotify Clone',
    desc: 'Music streaming web application with audio player and playlist management.',
    category: 'Platform Clones',
    tags: ['MERN', 'Audio'],
    bg: '#1db954', light: false, year: '2023',
    link: 'https://github.com/satasiyakrish1/Spotify-Clone', external: true,
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&q=80&fit=crop',
  },
  {
    title: 'Figma Clone',
    desc: 'Real-time collaborative design tool built with Next.js and Fabric.js.',
    category: 'Platform Clones',
    tags: ['Next.js', 'Fabric.js'],
    bg: '#000000', light: false, year: '2024',
    link: 'https://krish-satasiya-figma-clone.vercel.app/', external: true,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&fit=crop',
  },
  {
    title: 'Zoom Clone',
    desc: 'Video conferencing platform built with Next.js and WebRTC for HD calls.',
    category: 'Platform Clones',
    tags: ['Next.js', 'WebRTC'],
    bg: '#2d8cff', light: false, year: '2024',
    link: 'https://github.com/satasiyakrish1/zoom-clone', external: true,
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&q=80&fit=crop',
  },
  {
    title: 'Note Plus',
    desc: 'Feature-rich Android note-taking app with Firebase cloud sync.',
    category: 'Mobile Applications',
    tags: ['Java', 'Firebase'],
    bg: '#fbbf24', light: false, year: '2022',
    link: 'https://play.google.com/store/apps/details?id=com.notesplus.KrishSatasiya&hl=en_IN', external: true,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop',
  },
  {
    title: 'CalculateMe',
    desc: 'Scientific calculator app for Android built with Material Design.',
    category: 'Mobile Applications',
    tags: ['Java', 'Material'],
    bg: '#374151', light: false, year: '2021',
    link: 'https://play.google.com/store/apps/details?id=com.calculatMe.KrishSatasiya&hl=en_IN', external: true,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&fit=crop',
  },
  {
    title: 'Task Manager',
    desc: 'Cross-platform task management app built with Flutter and Dart.',
    category: 'Mobile Applications',
    tags: ['Flutter', 'Dart'],
    bg: '#0284c7', light: false, year: '2023',
    link: 'https://github.com/satasiyakrish1/Flutter-Task-Manager', external: true,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80&fit=crop',
  },
  {
    title: 'Krish Satasiya — Portfolio App',
    desc: 'Native Android portfolio app showcasing projects, skills, and contact — built with Java.',
    category: 'Mobile Applications',
    tags: ['Java', 'Android'],
    bg: '#4452FF', light: false, year: '2025',
    link: 'https://github.com/satasiyakrish1/KrishSatasiya', external: true,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop',
  },
  {
    title: 'Electron Builder',
    desc: 'Desktop app development tool for creating cross-platform apps.',
    category: 'Development Tools',
    tags: ['Electron', 'Node.js'],
    bg: '#2b2d3a', light: false, year: '2023',
    link: '/Projects/electron-builder/dist/index.html', external: true,
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&q=80&fit=crop',
  },
  {
    title: 'Prescripto API',
    desc: 'Backend API for healthcare system with JWT auth and MongoDB.',
    category: 'API Services',
    tags: ['Node.js', 'Express'],
    bg: '#4f46e5', light: false, year: '2024',
    link: 'https://krishsatasiya-prescripto.onrender.com/', external: true,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&fit=crop',
  },
  {
    title: 'Flowza Pro',
    desc: 'Flowza – Pro Suite is a powerful all-in-one utility plugin designed to enhance your Figma workflow. It combines essential tools like document conversion, unit conversion, and smart export features into a single seamless experience.',
    category: 'Figma Plugins',
    tags: ['Figma API', 'Productivity', 'TS'],
    bg: '#A259FF', light: false, year: '2025',
    link: 'https://www.figma.com/community/plugin/1628437598032928929', external: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80&fit=crop',
  },
];

const CATEGORIES = [...new Set(ALL_PROJECTS.map(p => p.category))];

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section id="projects-hero">
        <div className="container py-section">
          <div className="font-mono uppercase text-lg font-semibold leading-tight text-primary-500" style={{ marginBottom: '0.375rem' }}>
            Portfolio
          </div>
          <div className="mt-2 grid gap-2 lg:grid-cols-3 lg:gap-12">
            <div className="font-display text-3xl md:text-4xl font-semibold lg:text-5xl col-span-2">
              <h1>Digital Solutions Engineered for Excellence</h1>
            </div>
            <div className="[&_a]:underline text-lg self-end">
              <p>Explore a collection of high-impact projects, from full-stack MERN applications and AI-powered tools to interactive 3D simulations and mobile apps.</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-3 lg:gap-0 lg:items-end">
            <div className="mt-8 aspect-[32/9] overflow-hidden border w-full">
              <img
                onError={(e) => e.target.setAttribute('data-error', 1)}
                width="400"
                height="650"
                alt="Projects"
                loading="lazy"
                sizes="(max-width: 768px) 360px, (max-width: 1024px) 768px, (max-width: 1280px) 1440px, 1920px"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid By Categories */}
      <div className="container projects-page__grid-wrap">
        {CATEGORIES.map(cat => (
          <div key={cat} className="projects-category-section mb-16">
            <h2 className="projects-category-title mb-8 text-2xl font-semibold border-b pb-2">{cat}</h2>
            <div className="projects-page__grid">
              {ALL_PROJECTS.filter(p => p.category === cat).map((proj, i) => (
                <a
                  key={i}
                  href={proj.link}
                  className={`project-card group${proj.link === '#' ? ' project-card--disabled' : ''}`}
                  target={proj.external ? '_blank' : undefined}
                  rel={proj.external ? 'noopener noreferrer' : undefined}
                  onClick={proj.link === '#' ? e => e.preventDefault() : undefined}
                  style={proj.link === '#' ? { cursor: 'not-allowed', opacity: 0.6 } : {}}
                >
                  <div className="project-card__thumb" style={{ backgroundColor: proj.bg }}>
                    {proj.image
                      ? <img src={proj.image} alt={proj.title} className="project-card__img" />
                      : <span className={`project-card__initial ${proj.light ? 'text-black' : 'text-white'}`}>{proj.title[0]}</span>
                    }
                  </div>
                  <div className="project-card__body">
                    <div className="project-card__top">
                      <h2 className="project-card__title">{proj.title}</h2>
                      <span className="project-card__arrow">{proj.link === '#' ? '–' : proj.external ? '↗' : '→'}</span>
                    </div>
                    <p className="project-card__desc">{proj.desc}</p>
                    <div className="project-card__footer">
                      <div className="project-card__tags">
                        {proj.tags.map(t => (
                          <span key={t} className="project-card__tag">{t}</span>
                        ))}
                      </div>
                      <span className="project-card__year">{proj.year}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
