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
import SpeakingList from './pages/SpeakingList';
import Sitemap from './pages/Sitemap';
import Links from './pages/Links';
import DocViewer from './pages/DocViewer';
import Gallery from './pages/Gallery';
import ContactPage from './pages/ContactPage';
import TermsOfService from './pages/TermsOfService';
import CustomCursor from './components/CustomCursor';
import './App.css';

const BARE_ROUTES = ['/links'];
const NO_PAD_ROUTES = ['/cv', '/resume'];
const NO_FOOTER_ROUTES = ['/cv', '/resume'];
const NO_LG_PAD_ROUTES = ['/achievements', '/education', '/experience', '/freelancing', '/community', '/speaking', '/sitemap', '/gallery', '/contact'];

const SEO_META = {
  '/': {
    title: 'Krish Satasiya | Full Stack MERN Developer & UI/UX Designer — Ahmedabad, India',
    desc: 'Krish Satasiya is a Full Stack MERN Developer, UI/UX Designer & Computer Engineering student at Silver Oak University, Ahmedabad. Explore 29+ projects, 54+ certifications, and 4 national hackathon wins.'
  },
  '/projects': {
    title: 'Web Development Projects | Krish Satasiya',
    desc: 'Explore 29+ Full Stack MERN projects built by Krish Satasiya, including AI medical booking systems, job boards, and custom figma plugins.'
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
  '/speaking/all': {
    title: 'All Speaking Engagements | Krish Satasiya - Ahmedabad, India',
    desc: 'Complete list of past and upcoming speaking engagements, tech workshops, and keynotes by Krish Satasiya in Ahmedabad, India. Looking for an expert speaker on MERN stack, UI/UX design, or AI? Discover Krish\'s speaking portfolio here.'
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
  '/gallery': {
    title: 'Community Gallery & Moments | Krish Satasiya',
    desc: 'Browse photos and memorable tech moments of Krish Satasiya volunteering, organizing, and speaking at major tech community meetups across Gujarat, India.'
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
  },
  '/contact': {
    title: 'Contact Krish Satasiya | Full Stack MERN Developer',
    desc: 'Get in touch with Krish Satasiya for freelance projects, job opportunities, or technical collaboration.'
  },
  '/terms': {
    title: 'Terms of Service | Krish Satasiya',
    desc: 'Terms of service and usage regulations for Krish Satasiya\'s official portfolio website.'
  },
  '/examples': {
    title: 'Project Examples & Showcase | Krish Satasiya',
    desc: 'Case studies and live code examples of Full Stack MERN applications built by Krish Satasiya.'
  },
  '/about': {
    title: 'About Krish Satasiya | MERN Developer & UI/UX Designer',
    desc: 'Biography and professional background of Krish Satasiya, full stack developer and designer.'
  },
  '/references': {
    title: 'References & Publications | Krish Satasiya',
    desc: 'Scholarly citations, publications, and professional references for Krish Satasiya.'
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
    setMeta('meta[property="og:image"]', 'content', 'https://krishsatasiya.netlify.app/Photos/krish-satasiya.jpg');
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', currentMeta.title);
    setMeta('meta[name="twitter:description"]', 'content', currentMeta.desc);
    setMeta('meta[name="twitter:image"]', 'content', 'https://krishsatasiya.netlify.app/Photos/krish-satasiya.jpg');
    setMeta('link[rel="canonical"]', 'href', `https://krishsatasiya.netlify.app${pathname}`);

    const schemaId = 'dynamic-seo-jsonld';
    const pageType = ['/projects', '/design', '/gallery', '/achievements', '/research', '/examples', '/references'].includes(pathname)
      ? 'CollectionPage'
      : pathname === '/contact'
        ? 'ContactPage'
        : ['/', '/about', '/experience', '/education', '/freelancing', '/community', '/speaking', '/links'].includes(pathname)
          ? 'AboutPage'
          : 'WebPage';

    const pageJsonLd = {
      "@context": "https://schema.org",
      "@type": pageType,
      "@id": `https://krishsatasiya.netlify.app${pathname === '/' ? '' : pathname}#webpage`,
      "name": currentMeta.title,
      "description": currentMeta.desc,
      "url": `https://krishsatasiya.netlify.app${pathname === '/' ? '' : pathname}`,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://krishsatasiya.netlify.app/#website"
      },
      "about": [
        { "@type": "Person", "@id": "https://krishsatasiya.netlify.app/#person" },
        { "@type": "Organization", "@id": "https://krishsatasiya.netlify.app/#organization" },
        { "@type": "Brand", "@id": "https://krishsatasiya.netlify.app/#brand" },
        { "@type": "Place", "@id": "https://krishsatasiya.netlify.app/#location" }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = schemaId;
    script.textContent = JSON.stringify(pageJsonLd);
    document.head.appendChild(script);

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [pathname]);

  const isBare = BARE_ROUTES.includes(pathname);
  const noPad = NO_PAD_ROUTES.includes(pathname);
  const noFooter = NO_FOOTER_ROUTES.includes(pathname);
  const noLgPad = NO_LG_PAD_ROUTES.includes(pathname);

  const mainClass = `bg-white${!isBare && !noPad ? (noLgPad ? ' pt-16' : ' pt-16 lg:pt-20') : ''}`;

  return (
    <div className="antialiased font-body text-base">
      <CustomCursor />
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
          <Route path="/speaking/all" element={<SpeakingList />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/contributions" element={<ContributionsList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/links" element={<Links />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/examples" element={<ProjectsPage />} />
          <Route path="/references" element={<ResearchPapers />} />
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

