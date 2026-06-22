import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EVENT_GROUPS } from '../data/eventsData';
import './ContributionsList.css';

const parseDate = (d) => {
  const s = d.replace('Early ', '01 Jan ').trim();
  const rangeMatch = s.match(/^(\d+)[–—]\d+\s+(\w+\s+\d{4})/);
  if (rangeMatch) return Date.parse(`${rangeMatch[1]} ${rangeMatch[2]}`);
  const t = Date.parse(s.replace(/[–—].*/, '').trim());
  return isNaN(t) ? new Date(parseInt(s, 10), 0, 1).getTime() : t;
};

const ALL_EVENTS = EVENT_GROUPS
  .flatMap(g => g.events.map(ev => ({ ...ev, org: g.org, color: g.color })))
  .sort((a, b) => parseDate(b.date) - parseDate(a.date));

const PER_PAGE = 10;

export default function ContributionsList() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ALL_EVENTS.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = ALL_EVENTS.slice(start, start + PER_PAGE);

  return (
    <div className="cl-root">
      <div className="cl-container">

        {/* Header */}
        <div className="cl-header">
          <div className="cl-header__left">
            <Link to="/community" className="cl-back font-mono">← Back</Link>
            <div>
              <h1 className="cl-title font-display">All Events</h1>
              <p className="cl-sub font-mono">{ALL_EVENTS.length} events across communities · 2023 – Present</p>
            </div>
          </div>
          <span className="cl-total font-mono">{ALL_EVENTS.length}</span>
        </div>

        {/* Column labels */}
        <div className="cl-cols font-mono">
          <span className="cl-cols__num">#</span>
          <span className="cl-cols__role">Event</span>
          <span className="cl-cols__org">Date</span>
          <span className="cl-cols__period">Organiser</span>
        </div>

        {/* Rows */}
        <ul className="cl-list font-mono">
          {visible.map((ev, i) => (
            <li key={start + i} className="cl-row">
              <span className="cl-row__num">{(start + i + 1).toString().padStart(2, '0')}</span>
              <div className="cl-row__org">
                <span className="cl-row__org-name">{ev.name}</span>
                <span className="cl-row__category">{ev.chapter}</span>
              </div>
              <span className="cl-row__role">{ev.date}</span>
              <div className="cl-row__right">
                <span className="cl-row__award" style={{ color: ev.color }}>● {ev.org}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="cl-pagination font-mono">
          <button
            className="cl-page-btn"
            onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo(0, 0); }}
            disabled={page === 1}
          >← Prev</button>
          <span className="cl-page-info">Page {page} / {totalPages}</span>
          <button
            className="cl-page-btn"
            onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo(0, 0); }}
            disabled={page === totalPages}
          >Next →</button>
        </div>

        <div className="cl-footer font-mono">
          krish satasiya · community contributions
        </div>
      </div>
    </div>
  );
}

