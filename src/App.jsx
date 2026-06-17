import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ResearchPapers from './pages/ResearchPapers';
import DesignProjects from './pages/DesignProjects';
import ProjectPrescripto from './pages/Project-Prescripto';
import ProjectHirix from './pages/Project-Hirix';
import ProjectQuarix from './pages/Project-Quarix';
import ProjectBlogCMS from './pages/Project-BlogCMS';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Freelancing from './pages/Freelancing';
import Community from './pages/Community';
import AchievementsPage from './pages/Achievements';
import ContributionsList from './pages/ContributionsList';
import Speaking from './pages/Speaking';
import Sitemap from './pages/Sitemap';
import Links from './pages/Links';
import DocViewer from './pages/DocViewer';
import './App.css';

const BARE_ROUTES = ['/links'];
const NO_PAD_ROUTES = ['/cv', '/resume'];
const NO_FOOTER_ROUTES = ['/cv', '/resume'];
const NO_LG_PAD_ROUTES = ['/achievements', '/education', '/experience', '/freelancing', '/community', '/speaking', '/sitemap'];

const SEO_META = {
  '/': {
    title: 'Krish Satasiya | Full Stack MERN Developer & UI/UX Designer — Ahmedabad, India',
    desc: 'Krish Satasiya is a Full Stack MERN Developer, UI/UX Designer & Computer Engineering student at Silver Oak University, Ahmedabad. Explore 26+ projects, 54+ certifications, and 4 national hackathon wins.'
  },
  '/projects': {
    title: 'Web Development Projects | Krish Satasiya',
    desc: 'Explore 26+ Full Stack MERN projects built by Krish Satasiya, including AI medical booking systems, job boards, and custom content management systems.'
  },
  '/research': {
    title: 'Research Publications | Krish Satasiya',
    desc: 'Read published research papers by Krish Satasiya on AI-Driven Remote Patient Monitoring using Wearables & IoT for Preventive Healthcare.'
  },
  '/design': {
    title: 'UI/UX & Graphics Design Portfolio | Krish Satasiya',
    desc: 'Discover creative UI/UX case studies, responsive web design mockups, and visual graphics designed by Krish Satasiya.'
  },
  '/experience': {
    title: 'Professional Experience | Krish Satasiya',
    desc: 'Professional journey and technical roles of Krish Satasiya as a Full Stack MERN Developer and UI/UX Designer.'
  },
  '/education': {
    title: 'Education Timeline | Krish Satasiya',
    desc: 'Academic timeline of Krish Satasiya: Computer Engineering at Silver Oak University, Ahmedabad, India.'
  },
  '/freelancing': {
    title: 'Freelance MERN Web Development & Design | Krish Satasiya',
    desc: 'Hire Krish Satasiya for premium full stack web development and UI/UX design. Fiverr 5-Star & Upwork Top Rated professional.'
  },
  '/community': {
    title: 'Community Leadership & Volunteering | Krish Satasiya',
    desc: '15 leadership and volunteer roles held by Krish Satasiya across IEEE, Google Developer Group (GDG), AWS Cloud Club, and GirlScript.'
  },
  '/achievements': {
    title: 'Certifications, Awards & Hackathons | Krish Satasiya',
    desc: 'Browse 54+ industry credentials (Google Cloud, AWS, MongoDB, Red Hat, GitHub) and 4 national hackathon wins by Krish Satasiya.'
  },
  '/speaking': {
    title: 'Speaking & Keynotes | Krish Satasiya',
    desc: 'Public speaking, workshops, panel discussions, and keynotes by Krish Satasiya on MERN stack, UI/UX, Google Cloud, and AI.'
  },
  '/sitemap': {
    title: 'Sitemap | Krish Satasiya',
    desc: 'Comprehensive sitemap of all pages, case studies, and documents on Krish Satasiya\'s professional MERN & UI/UX portfolio.'
  },
  '/contributions': {
    title: 'Contributions List | Krish Satasiya',
    desc: 'Open source and professional contribution records of Full Stack MERN Developer Krish Satasiya.'
  },
  '/links': {
    title: 'Connect with Krish Satasiya | Social Links',
    desc: 'Unified hub of social links and profiles for MERN Developer & UI/UX Designer Krish Satasiya.'
  },
  '/cv': {
    title: 'Curriculum Vitae | Krish Satasiya',
    desc: 'Interactive preview and direct download of Krish Satasiya\'s professional Curriculum Vitae (CV).'
  },
  '/resume': {
    title: 'Professional Resume | Krish Satasiya',
    desc: 'Interactive Google Drive preview and download link for Krish Satasiya\'s latest Professional Resume.'
  },
  '/project/prescripto': {
    title: 'Prescripto Case Study | AI Medical Booking System',
    desc: 'Comprehensive case study of Prescripto: E-CELL 2nd Rank Winner AI-powered medical appointment system built using MERN.'
  },
  '/project/hirix': {
    title: 'Hirix Case Study | Full Stack Job Platform',
    desc: 'Case study of Hirix: A high-performance Job Board and recruitment platform built on the MERN stack.'
  },
  '/project/quarix': {
    title: 'Quarix Case Study | Full Stack Project',
    desc: 'Technical breakdown and architecture of the Quarix application designed by Krish Satasiya.'
  },
  '/project/blogcms': {
    title: 'Blog CMS Case Study | Dynamic Content Management',
    desc: 'Deep-dive into the custom MERN Blog Content Management System designed and coded by Krish Satasiya.'
  }
};

function AppInner() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const currentMeta = SEO_META[pathname] || SEO_META['/'];
    document.title = currentMeta.title;

    const setMeta = (selector, attr, val) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, val);
    };

    setMeta('meta[name="description"]', 'content', currentMeta.desc);
    setMeta('meta[property="og:title"]', 'content', currentMeta.title);
    setMeta('meta[property="og:description"]', 'content', currentMeta.desc);
    setMeta('meta[property="og:url"]', 'content', `https://krishsatasiya.netlify.app${pathname}`);
    setMeta('meta[name="twitter:title"]', 'content', currentMeta.title);
    setMeta('meta[name="twitter:description"]', 'content', currentMeta.desc);
    setMeta('link[rel="canonical"]', 'href', `https://krishsatasiya.netlify.app${pathname}`);
  }, [pathname]);

  const isBare = BARE_ROUTES.includes(pathname);
  const noPad = NO_PAD_ROUTES.includes(pathname);
  const noFooter = NO_FOOTER_ROUTES.includes(pathname);
  const noLgPad = NO_LG_PAD_ROUTES.includes(pathname);

  const mainClass = `bg-white${!isBare && !noPad ? (noLgPad ? ' pt-16' : ' pt-16 lg:pt-20') : ''}`;

  return (
    <div className="antialiased font-body text-base">
      {!isBare && <Navbar />}
      <main className={mainClass}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/research" element={<ResearchPapers />} />
          <Route path="/design" element={<DesignProjects />} />
          <Route path="/project/prescripto" element={<ProjectPrescripto />} />
          <Route path="/project/hirix" element={<ProjectHirix />} />
          <Route path="/project/quarix" element={<ProjectQuarix />} />
          <Route path="/project/blogcms" element={<ProjectBlogCMS />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/freelancing" element={<Freelancing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/contributions" element={<ContributionsList />} />
          <Route path="/links" element={<Links />} />
          <Route path="/cv" element={<DocViewer type="cv" />} />
          <Route path="/resume" element={<DocViewer type="resume" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isBare && !noFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

