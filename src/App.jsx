import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="antialiased font-body text-base">
        <main className="bg-white">
          <Navbar />
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
