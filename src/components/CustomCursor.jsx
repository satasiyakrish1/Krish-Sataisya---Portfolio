import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);

  useEffect(() => {
    const mouse = { x: 0, y: 0 };
    const cursor = { x: 0, y: 0 };
    let animationFrameId = null;
    let hasMoved = false;

    // Track active states inside ref to avoid stale closure in render loop
    const stateRef = { isTextHovered: false };

    const onMouseMove = (e) => {
      mouse.x = e.clientX - 2;
      mouse.y = e.clientY - 2;
      
      document.body.classList.remove('touch-active');
      
      if (!hasMoved) {
        cursor.x = mouse.x;
        cursor.y = mouse.y;
        hasMoved = true;
      }
      setIsVisible(true);
    };

    const onTouchStart = () => {
      setIsVisible(false);
      document.body.classList.add('touch-active');
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      if (!document.body.classList.contains('touch-active')) {
        setIsVisible(true);
      }
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive');

      const isText = 
        (target.tagName === 'INPUT' && !['button', 'submit', 'checkbox', 'radio'].includes(target.type)) || 
        target.tagName === 'TEXTAREA' || 
        target.closest('[contenteditable="true"]');

      setIsHovered(!!isInteractive);
      setIsTextHovered(!!isText);
      stateRef.isTextHovered = !!isText;
    };

    const render = () => {
      const ease = 0.14;
      cursor.x += (mouse.x - cursor.x) * ease;
      cursor.y += (mouse.y - cursor.y) * ease;

      if (cursorRef.current) {
        // Offset I-beam by half its width/height to center it on the text cursor point
        if (stateRef.isTextHovered) {
          cursorRef.current.style.transform = `translate3d(${cursor.x - 11}px, ${cursor.y - 12}px, 0)`;
        } else {
          cursorRef.current.style.transform = `translate3d(${cursor.x}px, ${cursor.y}px, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', onMouseOver);

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('touch-active');
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor-container ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''} ${isTextHovered ? 'text-hovered' : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="29"
        viewBox="0 0 54 57"
        fill="none"
        className="custom-cursor-svg"
      >
        <g filter="url(#filter0_d_102_13)">
          {isTextHovered ? (
            /* Custom text cursor I-beam matching arrow style */
            <>
              <path
                d="M18 12 h18 M27 12 v32 M18 44 h18"
                stroke="white"
                strokeWidth="7.5"
                strokeLinecap="round"
              />
              <path
                d="M18 12 h18 M27 12 v32 M18 44 h18"
                stroke="#1570EF"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </>
          ) : (
            /* Custom arrow */
            <path
              d="M16.4628 52.6383L2.03174 2.01395C1.84344 1.35337 2.52953 0.782943 3.15339 1.0814L50.9639 23.9537C51.6064 24.2611 51.5581 25.1831 50.8871 25.4209L29.5699 32.9739C29.3894 33.0379 29.2381 33.1637 29.1432 33.3287L17.9343 52.8181C17.5815 53.4315 16.6567 53.3185 16.4628 52.6383Z"
              fill="#1570EF"
              stroke="white"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
          )}
        </g>
        <defs>
          <filter
            id="filter0_d_102_13"
            x="0"
            y="0"
            width="53.4192"
            height="56.2195"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_13" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_13" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
