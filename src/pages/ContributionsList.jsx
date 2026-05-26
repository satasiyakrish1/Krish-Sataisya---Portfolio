import React from 'react';
import { Link } from 'react-router-dom';
import './ContributionsList.css';

const LIST = [
  { id: 1,  org: 'Silver Oak University',                          role: 'Event Manager',                        period: 'Oct 2023 – Oct 2024',  category: 'Education' },
  { id: 2,  org: 'FOLK Clubs (ISKCON – Educational Clubs)',        role: 'Student Volunteer',                    period: 'Jul 2023 – Nov 2024',  category: 'Environment' },
  { id: 3,  org: 'AWS Cloud Club – Silver Oak University',         role: 'Student Volunteer',                    period: 'Jan 2024 – Nov 2024',  category: 'Education' },
  { id: 4,  org: 'Silver Oak University IEEE SB',                  role: 'Creative Designer',                    period: 'Jan 2024 – Dec 2025',  category: 'Arts & Culture' },
  { id: 5,  org: 'GirlScript Summer of Code',                     role: 'Student Volunteer',                    period: 'May 2024 – Aug 2024',  category: 'Science & Technology' },
  { id: 6,  org: 'GDG on Campus: Silver Oak University',          role: 'Cloud Facilitator',                    period: 'Sep 2024 – Dec 2024',  category: 'Science & Technology' },
  { id: 7,  org: 'GDG on Campus: Silver Oak University',          role: 'Technical Volunteer',                  period: 'Oct 2024 – Dec 2025',  category: 'Science & Technology' },
  { id: 8,  org: 'Google Maps',                                    role: 'Freelance Contributor',                period: 'Feb 2025 – Present',   category: 'Science & Technology' },
  { id: 9,  org: 'GDG Cloud Gandhinagar',                         role: 'Graphics Designer Volunteer',          period: 'Feb 2025 – Present',   category: 'Science & Technology', award: 'Outstanding Contribution' },
  { id: 10, org: 'GirlScript Summer of Code',                     role: 'Campus Ambassador',                    period: 'Jun 2025 – Jul 2025',  category: 'Science & Technology' },
  { id: 11, org: 'Google Developers Group Gandhinagar',           role: 'Graphic Design & Management Team',     period: 'Aug 2025 – Present',   category: 'Science & Technology' },
  { id: 12, org: 'JavaScript Gujarat',                             role: 'Student Volunteer',                    period: 'Aug 2025 – Present',   category: 'Science & Technology' },
  { id: 13, org: 'Open Source Weekend',                            role: 'Graphics Designer Volunteer',          period: 'Aug 2025 – Present',   category: 'Science & Technology', award: 'Volunteer Badge · OSD Volunteer' },
  { id: 14, org: 'Pixelverse.community',                          role: 'Design Volunteer',                     period: 'Dec 2025 – Present',   category: 'Science & Technology' },
  { id: 15, org: 'Laracon India',                                  role: 'Volunteer · Tech Event Coordinator',  period: 'Jan 2026 – Present',   category: 'Science & Technology' },
  { id: 16, org: 'Digital Commans For the Tech',                          role: 'Contributor',                          period: '2024 – 2025',          category: 'Science & Technology' },
  { id: 17, org: 'GeeksforGeeks',                                         role: 'Campus Mantri',                        period: '2024 – 2025',          category: 'Education' },
  { id: 18, org: 'ExploitXplorers',                                       role: 'Community Contributor',                period: '2023 – 2025',          category: 'Science & Technology' },
  { id: 19, org: 'LetsUpgrade',                                           role: 'Student Ambassador',                   period: '2024 – 2025',          category: 'Education' },
];

export default function ContributionsList() {
  return (
    <div className="cl-root">
      <div className="cl-container">

        {/* Header */}
        <div className="cl-header">
          <div className="cl-header__left">
            <Link to="/community" className="cl-back font-mono">← Back</Link>
            <div>
              <h1 className="cl-title font-display">All Contributions</h1>
              <p className="cl-sub font-mono">{LIST.length} roles across communities · 2023 – Present</p>
            </div>
          </div>
          <span className="cl-total font-mono">{LIST.length}</span>
        </div>

        {/* Column labels */}
        <div className="cl-cols font-mono">
          <span className="cl-cols__num">#</span>
          <span className="cl-cols__org">Organisation</span>
          <span className="cl-cols__role">Role</span>
          <span className="cl-cols__period">Period</span>
        </div>

        {/* Rows */}
        <ul className="cl-list font-mono">
          {LIST.map((item, index) => (
            <li key={item.id} className="cl-row">
              <span className="cl-row__num">{(index + 1).toString().padStart(2, '0')}</span>
              <div className="cl-row__org">
                <span className="cl-row__org-name">{item.org}</span>
                <span className="cl-row__category">{item.category}</span>
              </div>
              <span className="cl-row__role">{item.role}</span>
              <div className="cl-row__right">
                <span className="cl-row__period">{item.period}</span>
                {item.award && <span className="cl-row__award">🏆 {item.award}</span>}
              </div>
            </li>
          ))}
        </ul>

        <div className="cl-footer font-mono">
          krish satasiya · community contributions · {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
