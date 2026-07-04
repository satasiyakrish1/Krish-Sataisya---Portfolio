import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-white border-t border-black">
      {/* Bottom bar */}

      {/* Bottom bar */}
      <div className="footer__bottom bg-black text-white py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase text-gray-400">
            © {new Date().getFullYear()} Krish Satasiya. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/sitemap" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link to="/privacy-policy" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/examples" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              Examples
            </Link>
            <Link to="/resume" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              Resume
            </Link>
            <Link to="/cv" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              CV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
