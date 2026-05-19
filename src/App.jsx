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
import Links from './pages/Links';
import DocViewer from './pages/DocViewer';
import './App.css';

const BARE_ROUTES = ['/links'];
const NO_PAD_ROUTES = ['/cv', '/resume'];
const NO_FOOTER_ROUTES = ['/cv', '/resume'];
const NO_LG_PAD_ROUTES = ['/achievements', '/education', '/experience', '/freelancing', '/community'];

function AppInner() {
  const { pathname } = useLocation();
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

