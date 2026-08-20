import React, { useEffect, useRef, useState } from 'react';

export default function AsciifyImage({ src, alt, className = "" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const requestRef = useRef(null);

  // We keep an offscreen canvas to sample pixels from
  const offscreenCanvasRef = useRef(null);
  const offscreenCtxRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageRef.current = img;
      setImageLoaded(true);

      // Initialize offscreen canvas
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0);
      offscreenCanvasRef.current = canvas;
      offscreenCtxRef.current = ctx;
    };
  }, [src]);

  useEffect(() => {
    if (!imageLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const getContainSize = (imageWidth, imageHeight, containerWidth, containerHeight) => {
      const imageRatio = imageWidth / imageHeight;
      const containerRatio = containerWidth / containerHeight;
      let w, h, x, y;

      if (imageRatio > containerRatio) {
        w = containerWidth;
        h = containerWidth / imageRatio;
        x = 0;
        y = (containerHeight - h) / 2;
      } else {
        h = containerHeight;
        w = containerHeight * imageRatio;
        x = (containerWidth - w) / 2;
        y = 0;
      }

      return { x, y, w, h };
    };

    // Deterministic pseudo-random hash based on cell coordinates (matches shader hash21)
    const hash21 = (x, y) => {
      const val = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      return Math.abs(val - Math.floor(val));
    };

    const render = () => {
      const img = imageRef.current;
      const container = containerRef.current;
      if (!img || !container || !canvas) return;

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Update canvas size if needed to match container
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw the normal image contained inside canvas bounds
      const bounds = getContainSize(img.naturalWidth, img.naturalHeight, width, height);
      ctx.drawImage(img, bounds.x, bounds.y, bounds.w, bounds.h);

      const mouse = mouseRef.current;
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

      // Only draw the ASCII lens if mouse is active and on desktop
      if (isDesktop && mouse.active) {
        const radius = 135; // lens radius
        const charW = 6;
        const charH = 10;
        const asciiChars = '@#S%?*+;:, ';

        const offscreenCanvas = offscreenCanvasRef.current;
        const offscreenCtx = offscreenCtxRef.current;

        if (offscreenCanvas && offscreenCtx) {
          // Configure font
          ctx.font = 'bold 9px monospace';
          ctx.textBaseline = 'top';

          // Dimensions for sampling
          const naturalW = offscreenCanvas.width;
          const naturalH = offscreenCanvas.height;

          // Loop through grid cells intersecting with the lens bounding box
          const startX = Math.max(0, Math.floor((mouse.x - radius) / charW) * charW);
          const endX = Math.min(width, Math.ceil((mouse.x + radius) / charW) * charW);
          const startY = Math.max(0, Math.floor((mouse.y - radius) / charH) * charH);
          const endY = Math.min(height, Math.ceil((mouse.y + radius) / charH) * charH);

          for (let y = startY; y < endY; y += charH) {
            for (let x = startX; x < endX; x += charW) {
              const cellCenterX = x + charW / 2;
              const cellCenterY = y + charH / 2;
              const dx = cellCenterX - mouse.x;
              const dy = cellCenterY - mouse.y;
              const d = Math.sqrt(dx * dx + dy * dy);

              if (d <= radius) {
                // Calculate dither mask (softness)
                const mask = Math.pow(1 - d / radius, 1.2);
                
                // Stochastic/dithered apply condition using deterministic coordinate hashing
                if (hash21(x, y) < mask) {
                  // Check if grid cell is within drawn bounds
                  if (
                    x >= bounds.x && x < bounds.x + bounds.w &&
                    y >= bounds.y && y < bounds.y + bounds.h
                  ) {
                    // Map screen coordinates to offscreen image coordinates
                    const relativeX = (x - bounds.x) / bounds.w;
                    const relativeY = (y - bounds.y) / bounds.h;
                    const imgX = Math.floor(relativeX * naturalW);
                    const imgY = Math.floor(relativeY * naturalH);
                    const imgW = Math.max(1, Math.floor((charW / bounds.w) * naturalW));
                    const imgH = Math.max(1, Math.floor((charH / bounds.h) * naturalH));

                    try {
                      const pixelData = offscreenCtx.getImageData(imgX, imgY, imgW, imgH).data;
                      let r = 0, g = 0, b = 0, count = 0;
                      
                      for (let p = 0; p < pixelData.length; p += 4) {
                        r += pixelData[p];
                        g += pixelData[p + 1];
                        b += pixelData[p + 2];
                        count++;
                      }

                      if (count > 0) {
                        r = Math.floor(r / count);
                        g = Math.floor(g / count);
                        b = Math.floor(b / count);
                      }

                      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
                      const charIdx = Math.floor((brightness / 255) * (asciiChars.length - 1));
                      const char = asciiChars[charIdx];

                      // Draw solid dark background for this block
                      ctx.fillStyle = '#0f0f13';
                      ctx.fillRect(x, y, charW, charH);

                      // Draw character with original color
                      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                      ctx.fillText(char, x, y);
                    } catch (e) {
                      // Fallback
                    }
                  }
                }
              }
            }
          }
        }
      }

      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [imageLoaded]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => { mouseRef.current.active = true; }}
      style={{ minHeight: '300px' }}
    >
      {!imageLoaded ? (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="animate-pulse text-gray-500 font-mono text-sm">Loading Image...</div>
        </div>
      ) : (
        <>
          {/* Normal image hidden/layout preserved */}
          <img
            src={src}
            alt={alt}
            style={{ visibility: 'hidden', maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
          />
          {/* Active rendering canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full cursor-none object-contain"
            style={{ pointerEvents: 'none', maxWidth: '100%', maxHeight: '80vh' }}
          />
        </>
      )}
    </div>
  );
}
