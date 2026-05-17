import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research' },
  { label: 'Design', href: '/design' },
  { label: 'About', href: '/#about' },
];

const MORE_LINKS = [
  { label: 'Achievements', href: '/achievements' },
  { label: 'Education', href: '/education' },
  { label: 'Experience', href: '/experience' },
  { label: 'Freelancing', href: '/freelancing' },
  { label: 'Community', href: '/community' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleScroll = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
      setMenuOpen(false);
      setMoreOpen(false);
    }
  };

  return (
    <header className="navbar sticky top-0 z-50 bg-white border-b border-black">
      <div className="navbar__inner h-16 flex items-stretch justify-between lg:h-20">

        {/* Logo */}
        <Link to="/" className="navbar__logo flex items-center">
          <svg width="200" height="21" viewBox="0 0 787 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto lg:h-8">
            <path d="M0 0H82V82H0V0Z" fill="black"/>
            <path d="M50 31C59.9411 31 68 39.0589 68 49C68 58.9411 59.9411 67 50 67C40.7349 67 33.1063 59.9998 32.1113 51H47C48.6569 51 50 49.6569 50 48V31ZM47 15C48.6569 15 50 16.3431 50 18V31C46.0306 31 42.3617 32.2854 39.3857 34.4619L36.2324 29C35.4626 27.6667 33.5374 27.6667 32.7676 29L25.4062 41.75C24.6367 43.0833 25.5992 44.7499 27.1387 44.75H32.5059C32.176 46.1128 32 47.5358 32 49C32 49.6761 32.0387 50.3433 32.1113 51H17C15.3431 51 14 49.6569 14 48V18C14 16.3431 15.3431 15 17 15H47ZM43.5938 41.75C44.3633 43.0833 43.4008 44.7499 41.8613 44.75H32.5059C33.5215 40.5546 36.0062 36.9335 39.3857 34.4619L43.5938 41.75Z" fill="#4452FF"/>
            <path d="M219.935 72.033V9.96703H233.66V72.033H219.935Z" fill="black"/>
            <path d="M262.884 73C257.814 73 253.443 72.1795 249.771 70.5385C246.158 68.8388 242.836 66.2894 239.805 62.8901L248.722 54.011C250.704 56.2967 252.889 58.0843 255.279 59.3736C257.727 60.6044 260.553 61.2198 263.759 61.2198C266.673 61.2198 268.916 60.6923 270.49 59.6374C272.122 58.5824 272.938 57.1172 272.938 55.2418C272.938 53.5421 272.413 52.1648 271.364 51.1099C270.315 50.0549 268.916 49.1465 267.168 48.3846C265.478 47.6227 263.584 46.8901 261.486 46.1868C259.446 45.4835 257.406 44.6923 255.366 43.8132C253.326 42.8755 251.432 41.7326 249.684 40.3846C247.994 38.978 246.624 37.2491 245.575 35.1978C244.526 33.0879 244.001 30.4506 244.001 27.2857C244.001 23.4762 244.905 20.1941 246.712 17.4396C248.576 14.685 251.141 12.6044 254.405 11.1978C257.668 9.7326 261.427 9 265.682 9C269.995 9 273.928 9.7619 277.484 11.2857C281.097 12.8095 284.069 14.8901 286.4 17.5275L277.484 26.4066C275.619 24.4725 273.725 23.0366 271.801 22.0989C269.936 21.1612 267.809 20.6923 265.42 20.6923C263.03 20.6923 261.136 21.1612 259.737 22.0989C258.338 22.978 257.639 24.2674 257.639 25.967C257.639 27.5494 258.164 28.8388 259.213 29.8352C260.262 30.7729 261.631 31.5934 263.321 32.2967C265.07 33 266.964 33.7033 269.004 34.4066C271.102 35.1099 273.171 35.9304 275.211 36.8681C277.25 37.8059 279.115 39.0073 280.806 40.4725C282.554 41.8791 283.953 43.696 285.002 45.9231C286.051 48.0916 286.575 50.7875 286.575 54.011C286.575 59.9304 284.477 64.5897 280.281 67.989C276.085 71.3297 270.286 73 262.884 73Z" fill="black"/>
            <path d="M383.357 73C378.286 73 373.915 72.1795 370.244 70.5385C366.63 68.8388 363.308 66.2894 360.278 62.8901L369.195 54.011C371.176 56.2967 373.362 58.0843 375.751 59.3736C378.199 60.6044 381.026 61.2198 384.231 61.2198C387.145 61.2198 389.389 60.6923 390.962 59.6374C392.594 58.5824 393.41 57.1172 393.41 55.2418C393.41 53.5421 392.886 52.1648 391.837 51.1099C390.788 50.0549 389.389 49.1465 387.64 48.3846C385.95 47.6227 384.056 46.8901 381.958 46.1868C379.918 45.4835 377.879 44.6923 375.839 43.8132C373.799 42.8755 371.905 41.7326 370.156 40.3846C368.466 38.978 367.097 37.2491 366.048 35.1978C364.999 33.0879 364.474 30.4506 364.474 27.2857C364.474 23.4762 365.377 20.1941 367.184 17.4396C369.049 14.685 371.613 12.6044 374.877 11.1978C378.141 9.7326 381.9 9 386.154 9C390.467 9 394.401 9.7619 397.956 11.2857C401.569 12.8095 404.542 14.8901 406.873 17.5275L397.956 26.4066C396.091 24.4725 394.197 23.0366 392.274 22.0989C390.409 21.1612 388.282 20.6923 385.892 20.6923C383.503 20.6923 381.608 21.1612 380.21 22.0989C378.811 22.978 378.112 24.2674 378.112 25.967C378.112 27.5494 378.636 28.8388 379.685 29.8352C380.734 30.7729 382.104 31.5934 383.794 32.2967C385.542 33 387.436 33.7033 389.476 34.4066C391.574 35.1099 393.643 35.9304 395.683 36.8681C397.723 37.8059 399.588 39.0073 401.278 40.4725C403.027 41.8791 404.425 43.696 405.474 45.9231C406.523 48.0916 407.048 50.7875 407.048 54.011C407.048 59.9304 404.95 64.5897 400.754 67.989C396.557 71.3297 390.758 73 383.357 73Z" fill="#4452FF"/>
            <path d="M598.664 73C593.594 73 589.223 72.1795 585.551 70.5385C581.938 68.8388 578.616 66.2894 575.585 62.8901L584.502 54.011C586.484 56.2967 588.669 58.0843 591.059 59.3736C593.507 60.6044 596.333 61.2198 599.539 61.2198C602.453 61.2198 604.696 60.6923 606.27 59.6374C607.902 58.5824 608.718 57.1172 608.718 55.2418C608.718 53.5421 608.193 52.1648 607.144 51.1099C606.095 50.0549 604.696 49.1465 602.948 48.3846C601.258 47.6227 599.364 46.8901 597.266 46.1868C595.226 45.4835 593.186 44.6923 591.146 43.8132C589.106 42.8755 587.212 41.7326 585.464 40.3846C583.774 38.978 582.404 37.2491 581.355 35.1978C580.306 33.0879 579.782 30.4506 579.782 27.2857C579.782 23.4762 580.685 20.1941 582.492 17.4396C584.357 14.685 586.921 12.6044 590.185 11.1978C593.448 9.7326 597.207 9 601.462 9C605.775 9 609.709 9.7619 613.264 11.2857C616.877 12.8095 619.849 14.8901 622.181 17.5275L613.264 26.4066C611.399 24.4725 609.505 23.0366 607.581 22.0989C605.716 21.1612 603.589 20.6923 601.2 20.6923C598.81 20.6923 596.916 21.1612 595.517 22.0989C594.119 22.978 593.419 24.2674 593.419 25.967C593.419 27.5494 593.944 28.8388 594.993 29.8352C596.042 30.7729 597.411 31.5934 599.102 32.2967C600.85 33 602.744 33.7033 604.784 34.4066C606.882 35.1099 608.951 35.9304 610.991 36.8681C613.031 37.8059 614.896 39.0073 616.586 40.4725C618.334 41.8791 619.733 43.696 620.782 45.9231C621.831 48.0916 622.355 50.7875 622.355 54.011C622.355 59.9304 620.257 64.5897 616.061 67.989C611.865 71.3297 606.066 73 598.664 73Z" fill="#4452FF"/>
            <path d="M631.098 72.033V9.96703H644.823V72.033H631.098Z" fill="#4452FF"/>
            <path d="M779.045 73C776.772 73 774.878 72.2088 773.362 70.6264C771.847 69.044 771.089 67.1392 771.089 64.9121C771.089 62.5678 771.847 60.6337 773.362 59.1099C774.878 57.5275 776.772 56.7363 779.045 56.7363C781.376 56.7363 783.27 57.5275 784.727 59.1099C786.242 60.6337 787 62.5678 787 64.9121C787 67.1392 786.242 69.044 784.727 70.6264C783.27 72.2088 781.376 73 779.045 73Z" fill="#4452FF"/>
            <path d="M117.725 72.033V41.4912L141.329 72.033H158.376L132.531 39.5048L157.501 9.96703H140.542L117.725 37.965V9.96703H104V72.033H117.725Z" fill="black"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M177.827 36.2527V20.6923H187.705C190.444 20.6923 192.543 21.4249 194 22.8901C195.457 24.3553 196.185 26.2015 196.185 28.4286C196.185 30.8315 195.427 32.7363 193.912 34.1429C192.455 35.5495 190.357 36.2527 187.618 36.2527H177.827ZM189.279 9.96703H177.827H174.592H164.102V72.033H177.827V46.4506H179.261L197.671 72.033H213.931L194.16 46.0037C196.261 45.6279 198.189 45.0149 199.944 44.1648C203.091 42.641 205.539 40.5311 207.288 37.8352C209.036 35.0806 209.91 31.8864 209.91 28.2527C209.91 24.6777 209.036 21.5128 207.288 18.7582C205.539 16.0037 203.12 13.8645 200.032 12.3407C196.943 10.7582 193.359 9.96703 189.279 9.96703Z" fill="black"/>
            <path d="M295.318 9.96703V72.033H309.043V46.0989H333.521V72.033H347.333V9.96703H333.521V34.1429H309.043V9.96703H295.318Z" fill="black"/>
            <path d="M433.842 9.96703L409.365 72.033H423.614L427.72 60.7802H451.912L455.96 72.033H470.472L446.256 9.96703H433.842ZM439.901 27.3934L447.863 49.5275H431.825L439.901 27.3934Z" fill="#4452FF"/>
            <path d="M498.936 22.011H518.256V9.96703H465.891V22.011H485.211V72.033H498.936V22.011Z" fill="#4452FF"/>
            <path d="M556.236 60.7802L560.284 72.033H574.796L550.58 9.96703H538.167L513.689 72.033H527.938L532.044 60.7802H556.236ZM544.225 27.3934L552.188 49.5275H536.149L544.225 27.3934Z" fill="#4452FF"/>
            <path d="M687.744 45.6429L709.687 9.96703H694.126L680.969 32.6303L667.812 9.96703H651.902L674.019 46.1917V72.033H687.744V45.6429Z" fill="#4452FF"/>
            <path d="M728.033 9.96703L703.556 72.033H717.805L721.911 60.7802H746.103L750.151 72.033H764.663L740.447 9.96703H728.033ZM734.092 27.3934L742.054 49.5275H726.016L734.092 27.3934Z" fill="#4452FF"/>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <div className="navbar__desktop hidden md:flex items-center" style={{ flex: 1, justifyContent: 'flex-end' }}>
          <nav className="navbar__nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}

            {/* More Dropdown */}
            <div className="navbar__more" ref={dropdownRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`nav-link navbar__more-btn ${moreOpen ? 'open' : ''}`}
              >
                More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {moreOpen && (
                <div className="navbar__dropdown">
                  {MORE_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <a
            href="/#contact"
            onClick={(e) => handleScroll(e, '/#contact')}
            className="navbar__cta hidden md:flex lg:h-20"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center md:hidden">
          <button
            className="hamburger bg-white text-black inline-flex items-center justify-center h-16 px-4 cursor-pointer hover:ring-2 hover:ring-inset hover:ring-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              ) : (
                <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              )}
            </svg>
          </button>
          <a href="/#contact" onClick={(e) => handleScroll(e, '/#contact')} className="bg-primary text-black border-l flex items-center justify-center h-16 px-4 cursor-pointer hover:ring-2 hover:ring-inset hover:ring-black">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="navbar__mobile md:hidden bg-white border-t border-black">
          {[...NAV_LINKS, ...MORE_LINKS].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 py-4 font-mono font-semibold text-sm uppercase border-b border-black hover:bg-gray-50"
              onClick={(e) => {
                handleScroll(e, link.href);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="block px-6 py-4 font-mono font-semibold text-sm uppercase bg-primary text-black hover:bg-primary-600"
            onClick={(e) => {
              handleScroll(e, '/#contact');
              setMenuOpen(false);
            }}
          >
            Get In Touch →
          </a>
        </nav>
      )}
    </header>
  );
}
