import React from 'react';
import './InfoPage.css';

const ACHIEVEMENTS = [
  {
    title: 'Fourth Next Best Poster Award',
    event: "GTU's National Level Poster Competition & Hackathon on AI-Powered Research & Innovation",
    organizer: 'Gujarat Technological University',
    date: 'Sep 2025',
    prize: '₹5,000 Consolation Prize',
    description: 'Awarded the Fourth Next Best Poster Award at GTU\'s National Level competition. Proudly represented Silver Oak College of Pharmacy under the esteemed guidance of Dr. Dharmesh Modi (Dean – College of Pharmacy). This achievement reflects our commitment to integrating AI with pharmaceutical research and fostering innovation-driven learning.',
    tags: ['AI Research', 'GTU', 'Silver Oak University', 'Innovation'],
    color: '#4452FF',
  },
  {
    title: 'Winner of E-CELL Tech Fest 2025',
    event: 'E-Cell Silver Oak University & Ignite SOU',
    organizer: 'E-Cell Silver Oak University',
    date: 'Feb 2025',
    prize: '2nd Rank',
    description: 'Secured the 2nd Rank at E-Cell Tech Fest 2025. Presented Prescripto, an AI-powered medical appointment booking system designed to make healthcare more accessible and efficient.',
    tags: ['Tech Fest', 'E-Cell', 'Prescripto', 'AI Healthcare'],
    color: '#10b981',
  },
  {
    title: 'Winner of IEEE Summer Code Quest',
    event: 'IEEE Summer Code Quest',
    organizer: 'IEEE SOU SB',
    date: 'Jul 2024',
    prize: 'Winner',
    description: 'Recognized for outstanding coding proficiency and innovative problem-solving skills in a competitive environment at the IEEE Summer Code Quest competition.',
    tags: ['IEEE', 'Coding', 'Problem Solving', 'Winner'],
    color: '#3b82f6',
  },
  {
    title: 'Winner of RHA India Challenge 2024',
    event: 'RHA India Challenge 2024',
    organizer: 'Red Hat with Electromech Ltd.',
    date: 'Jul 2024',
    prize: 'National Winner',
    description: 'Recognized as the Winner of the RHA India Challenge 2024, showcasing skills in Cyber Security and achieving top honors in a national competition. This accomplishment highlights ability to deliver innovative solutions and excel in a challenging environment.',
    tags: ['Red Hat', 'Cyber Security', 'National', 'Winner'],
    color: '#EE0000',
  },
];

const CERTIFICATIONS = [
  { name: 'Google Cloud Cybersecurity Certificate', issuer: 'Google Cloud', date: 'Jul 2024' },
  { name: 'Set Up an App Dev Environment on Google Cloud', issuer: 'Google Cloud', date: 'Aug 2024' },
  { name: 'Store, Process, and Manage Data on Google Cloud - Console', issuer: 'Google Cloud', date: 'Aug 2024' },
  { name: 'Manage Kubernetes in Google Cloud', issuer: 'Google Cloud', date: 'Aug 2024' },
  { name: 'Get Started with Dataplex', issuer: 'Google Cloud', date: 'Aug 2024' },
  { name: 'Store, Process, and Manage Data on Google Cloud - Command Line', issuer: 'Google Cloud', date: 'Aug 2024' },
  { name: 'Develop Your Google Cloud Network', issuer: 'Google Cloud', date: 'Aug 2024' },
  { name: 'Get Started with Pub/Sub', issuer: 'Google Cloud', date: 'Aug 2024' },
  { name: 'Using the Google Cloud Speech API', issuer: 'Google Cloud', date: 'Aug 2024' },
  { name: 'Prompt Design in Vertex AI', issuer: 'Google Cloud', date: 'Aug 2024' },
  { name: 'Develop Serverless Apps with Firebase', issuer: 'Google Cloud', date: 'Sep 2024' },
  { name: 'The Basics of Google Cloud Compute', issuer: 'Google Cloud', date: 'Oct 2024' },
  { name: 'Get Started with Cloud Storage', issuer: 'Google Cloud', date: 'Oct 2024' },
  { name: 'Get Started with API Gateway', issuer: 'Google Cloud', date: 'Oct 2024' },
  { name: 'Get Started with Looker', issuer: 'Google Cloud', date: 'Oct 2024' },
  { name: 'Build Real World AI Applications with Gemini and Imagen', issuer: 'Google Cloud', date: 'Dec 2024' },
  { name: 'Monitor Environments with Google Cloud Managed Service for Prometheus', issuer: 'Google Cloud', date: 'Jan 2025' },
  { name: 'App Engine: 3 Ways', issuer: 'Google Cloud', date: 'Apr 2025' },
  { name: 'Mitigate Threats and Vulnerabilities with Security Command Center', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Derive Insights from BigQuery Data', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Implement Load Balancing on Compute Engine', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Classify Images with TensorFlow on Google Cloud', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Cloud Functions: 3 Ways', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Explore Generative AI with the Vertex AI Gemini API', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Use Machine Learning APIs on Google Cloud', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Monitoring in Google Cloud', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Analyze Sentiment with Natural Language API', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Build a Website on Google Cloud', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Get Started with Eventarc', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Monitor and Manage Google Cloud Resources', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Streaming Analytics into BigQuery', issuer: 'Google Cloud', date: 'May 2025' },
  { name: 'Create a Secure Data Lake on Cloud Storage', issuer: 'Google Cloud', date: 'Jun 2025' },
  { name: 'Create a Streaming Data Lake on Cloud Storage', issuer: 'Google Cloud', date: 'Jun 2025' },
  { name: 'Secure BigLake Data', issuer: 'Google Cloud', date: 'Jun 2025' },
  { name: 'Build a Secure Google Cloud Network', issuer: 'Google Cloud', date: 'Jun 2025' },
  { name: 'Google Cloud Computing Foundations Certificate', issuer: 'Google Cloud', date: 'Jun 2025' },
  { name: 'Prepare Data for ML APIs on Google Cloud', issuer: 'Google Cloud', date: 'Jun 2025' },
  { name: 'Deploy Kubernetes Applications on Google Cloud', issuer: 'Google Cloud', date: 'Aug 2025' },
  { name: 'Protect Sensitive Data with Data Loss Prevention', issuer: 'Google Cloud', date: 'Aug 2025' },
  { name: 'Analyze Speech and Language with Google APIs', issuer: 'Google Cloud', date: 'Sep 2025' },
  { name: 'Cloud Speech API: 3 Ways', issuer: 'Google Cloud', date: 'Sep 2025' },
  { name: 'CRUD Operations in MongoDB', issuer: 'MongoDB', date: 'Jun 2025' },
  { name: 'Securing MongoDB Self-Managed: Authentication & Authorization', issuer: 'MongoDB', date: 'Jun 2025' },
  { name: 'From Relational Model (SQL) to MongoDB\'s Document Model', issuer: 'MongoDB', date: 'May 2025' },
  { name: 'Building AI-Powered Search with MongoDB Vector Search', issuer: 'MongoDB', date: 'Apr 2025' },
  { name: 'MongoDB Schema Design Patterns and Anti-patterns', issuer: 'MongoDB', date: 'Mar 2025' },
  { name: 'AWS Academy Graduate - Introduction to Cloud Semester 1', issuer: 'AWS', date: 'Jul 2024' },
  { name: 'AWS Educate Introduction to Cloud 101', issuer: 'AWS', date: 'Mar 2025' },
  { name: 'AWS Educate Introduction to Generative AI', issuer: 'AWS', date: 'Mar 2025' },
  { name: 'GitHub Foundations', issuer: 'GitHub', date: 'Feb 2025' },
  { name: 'Red Hat System Administration I (RH124 - RHA) - Ver. 9.3', issuer: 'Red Hat', date: 'Aug 2025' },
  { name: 'Introduction to OpenShift Applications 4.6', issuer: 'Red Hat', date: 'Oct 2024' },
  { name: 'Journey to Cloud: Envisioning Your Solution', issuer: 'IBM SkillsBuild', date: 'May 2025' },
  { name: 'Cloud Computing Fundamentals', issuer: 'IBM SkillsBuild', date: 'Oct 2024' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', date: 'Dec 2025' },
  { name: 'Oracle Data Platform 2025 Certified Foundations Associate', issuer: 'Oracle', date: 'Dec 2025' },
  { name: 'GitHub Copilot', issuer: 'Microsoft', date: 'Oct 2025' },
  { name: 'Microsoft Certified: Azure AI Fundamentals', issuer: 'Microsoft', date: 'Jan 2024' },
  { name: 'Terraform for Beginners: Hands-On AWS Infra Automation', issuer: 'Udemy', date: 'Oct 2025' },
  { name: 'UI/UX & Web Design', issuer: 'Udemy', date: 'Sep 2024' },
  { name: 'MongoDB - The Complete MongoDB Developers Course', issuer: 'Udemy', date: 'Aug 2024' },
  { name: 'Ui Ux Design (Adobe XD)', issuer: 'Udemy', date: 'Oct 2023' },
  { name: 'JavaScript Specialist Certification', issuer: 'Udemy', date: 'Feb 2023' },
  { name: 'Adobe Photoshop CC', issuer: 'Udemy', date: 'Jun 2023' },
  { name: 'Adobe Illustrator CC 2020', issuer: 'Udemy', date: 'Sep 2020' },
  { name: 'Programming in C Certification', issuer: 'Udemy', date: 'May 2021' },
  { name: 'Python Basics', issuer: 'Udemy', date: 'Sep 2020' },
  { name: 'Introduction to Generative AI', issuer: 'Google', date: 'Dec 2023' },
  { name: 'Google Play Academy - Store Listing Certificate', issuer: 'Google', date: 'Jun 2024' },
  { name: 'Digital Design & UX Job Simulation', issuer: 'Forage', date: 'Jan 2024' },
  { name: 'PwC Switzerland - Power BI Job Simulation', issuer: 'Forage', date: 'Dec 2023' },
  { name: 'Introduction to Programming Using Java', issuer: 'LearnRush LMS', date: 'Sep 2022' },
  { name: 'Flutter Workshop 101', issuer: 'Google Developer Groups', date: 'Aug 2023' },
  { name: 'Foundations of User Experience (UX) Design', issuer: 'Coursera', date: 'Jan 2024', link: 'https://coursera-certificate-images.s3.amazonaws.com/3Z1AJREXCQ1R' },
  { name: 'Foundations of Project Management', issuer: 'Coursera', date: 'Feb 2024', link: 'https://coursera.org/share/46a97d092c78fca806bc8712dfb1e8d8' },
  { name: 'Foundations of Cybersecurity', issuer: 'Coursera', date: 'Jul 2024', link: 'https://coursera.org/share/a54b7a886785b348ef235492663616b2' },
  { name: 'SketchUp: how to start modelling simple 3D objects', issuer: 'Coursera', date: 'Mar 2024', link: 'https://coursera.org/share/c7bf492e8ad0b15f3d665696ac70b057' },
  { name: 'AWS S3 Basics', issuer: 'Coursera', date: 'Mar 2025', link: 'https://coursera.org/share/0a5fac80c357506fd1dcdbbd972ea194' },
  { name: 'Developing a Google SRE Culture', issuer: 'Coursera', date: 'Dec 2023', link: 'https://coursera.org/share/e24df34e40a618d0fe775d9cb445d166' },
  { name: 'Build a Full Website using WordPress', issuer: 'Coursera', date: 'Jun 2024', link: 'https://coursera.org/share/218bfc9fc700f821de3c215d2664f10e' },
];

const ISSUER_META = {
  'Google Cloud': { color: '#4285F4', bg: '#f0f4ff', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/googlecloud.svg' },
  'Google': { color: '#4285F4', bg: '#f0f4ff', icon: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
  'Google Developer Groups': { color: '#4285F4', bg: '#f0f4ff', icon: 'https://www.vectorlogo.zone/logos/google/google-icon.svg' },
  'MongoDB': { color: '#00684A', bg: '#eef7f3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/mongodb.svg' },
  'AWS': { color: '#FF9900', bg: '#fff7eb', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
  'GitHub': { color: '#181717', bg: '#f3f3f3', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/github.svg' },
  'Red Hat': { color: '#EE0000', bg: '#fef2f2', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/redhat.svg' },
  'IBM SkillsBuild': { color: '#0F62FE', bg: '#eef3ff', icon: 'https://www.ibm.com/favicon.ico' },
  'Oracle': { color: '#F80000', bg: '#fff0f0', icon: 'https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg' },
  'Microsoft': { color: '#0078D4', bg: '#f0f6ff', icon: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg' },
  'Udemy': { color: '#A435F0', bg: '#f8f0ff', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/udemy.svg' },
  'Forage': { color: '#00B186', bg: '#edfaf5', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/120px-Eo_circle_green_checkmark.svg.png' },
  'LearnRush LMS': { color: '#FF6B35', bg: '#fff4f0', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  'Coursera': { color: '#0056D2', bg: '#f0f4ff', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/coursera.svg' },
};

export default function AchievementsPage() {
  const certGroups = {};
  CERTIFICATIONS.forEach(c => {
    if (!certGroups[c.issuer]) certGroups[c.issuer] = [];
    certGroups[c.issuer].push(c);
  });

  return (
    <div className="ip-root">
      <div className="ip-bg-accent" />

      <div className="container ip-wrap">
        {/* Hero */}
        <header className="ip-hero">
          <div className="ip-hero__top">
            <div className="ip-hero__badge">
              <span className="ip-hero__badge-dot" />
              Achievements & Certifications
            </div>
            <span className="ip-hero__date">2024 – 2025</span>
          </div>

          <div className="ip-hero__body">
            <h1 className="ip-hero__title">
              <span className="ip-hero__line ip-hero__line--1">Win.</span>
              <span className="ip-hero__line ip-hero__line--2">Earn.</span>
              <span className="ip-hero__line ip-hero__line--3">Prove.</span>
            </h1>
            <div className="ip-hero__meta">
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Awards</span>
                <span className="ip-hero__meta-value">{ACHIEVEMENTS.length} Competitions Won</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Certificates</span>
                <span className="ip-hero__meta-value">{CERTIFICATIONS.length} Credentials Earned</span>
              </div>
              <div className="ip-hero__meta-item">
                <span className="ip-hero__meta-label">Issuers</span>
                <span className="ip-hero__meta-value">Google · Oracle · Microsoft · AWS · MongoDB · Udemy</span>
              </div>
            </div>
          </div>

          <p className="ip-hero__sub">
            A track record of competitive wins, industry-recognized certifications, and continuous learning across cloud, security, and AI domains.
          </p>
        </header>

        {/* Achievements */}
        <section className="ip-section">
          <div className="ip-section__label font-mono">Awards & Competitions</div>
          <div className="achv-list">
            {ACHIEVEMENTS.map((a, idx) => (
              <div key={idx} className="achv-card" style={{ borderLeftColor: a.color }}>
                <div className="achv-card__top">
                  <div className="achv-card__index font-mono">0{idx + 1}</div>
                  <div className="achv-card__meta">
                    <span className="achv-card__date font-mono">{a.date}</span>
                    <span className="achv-card__prize font-mono" style={{ color: a.color, borderColor: a.color + '44' }}>{a.prize}</span>
                  </div>
                </div>
                <h2 className="achv-card__title font-display">{a.title}</h2>
                <div className="achv-card__event">{a.event}</div>
                <div className="achv-card__org font-mono">{a.organizer}</div>
                <p className="achv-card__desc">{a.description}</p>
                <div className="achv-card__tags">
                  {a.tags.map(t => (
                    <span key={t} className="edu-tag font-mono">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="ip-section">
          <div className="ip-section__label font-mono">Certifications & Badges · {CERTIFICATIONS.length} Credentials</div>
          {Object.entries(certGroups).map(([issuer, certs]) => {
            const meta = ISSUER_META[issuer] || { color: '#4452FF', bg: '#f5f5ff', icon: '' };
            return (
              <div key={issuer} className="cert-group" style={{ background: meta.bg }}>
                <div className="cert-group__header" style={{ background: meta.bg, borderColor: meta.color + '33' }}>
                  <img src={meta.icon} alt={issuer} className="cert-group__icon" width="24" height="24" />
                  <span className="cert-group__issuer font-display">{issuer}</span>
                  <span className="cert-group__count font-mono" style={{ borderColor: meta.color + '44', color: meta.color }}>{certs.length}</span>
                </div>
                <div className="cert-grid">
                  {certs.map((c, i) => {
                    const CardTag = c.link ? 'a' : 'div';
                    return (
                      <CardTag
                        key={i}
                        className={`cert-card ${c.link ? 'cert-card--clickable' : ''}`}
                        style={{ borderLeftColor: meta.color }}
                        {...(c.link ? { href: c.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <span className="cert-card__date font-mono">{c.date}</span>
                        <h3 className="cert-card__name font-display">{c.name}</h3>
                        <span className="cert-card__issuer font-mono">{c.issuer}</span>
                      </CardTag>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* Credly Link */}
        <div style={{ textAlign: 'center', padding: '2rem 0 4rem' }}>
          <a
            href="https://www.credly.com/users/satasiyakrish1/"
            target="_blank"
            rel="noopener noreferrer"
            className="cert-credly-btn font-mono"
          >
            View All on Credly →
          </a>
        </div>
      </div>
    </div>
  );
}
