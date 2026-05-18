import React from 'react';
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
            <a href="/privacy-policy" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/links" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              Linktree
            </a>
            <a href="/resume" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              Resume
            </a>
            <a href="/cv" className="footer__social-link font-mono text-xs uppercase text-gray-400 hover:text-white transition-colors">
              CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
