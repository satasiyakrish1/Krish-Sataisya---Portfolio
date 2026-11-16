import React, { useEffect, useRef } from 'react';

export default function BirdsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);
    let DPR = window.devicePixelRatio || 1;

    const resize = () => {
      if (!canvas) return;
      DPR = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let isHidden = false;
    const onVisibilityChange = () => {
      isHidden = document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const count = 8;
    const birds = Array.from({ length: count }, (_, i) => ({
      x: (W / count) * i + (Math.random() - 0.5) * 80,
      y: H * (0.1 + (i % 3) * 0.18 + Math.random() * 0.06),
      vx: 32 + Math.random() * 24,
      s: (14 + Math.random() * 6) * 0.8,
      flapSpeed: 4 + Math.random() * 1.5,
      ph: Math.random() * Math.PI * 2,
      wave: Math.random() * Math.PI * 2,
    }));

    const drawGull = (c, x, y, s, flap, a) => {
      if (a <= 0.01) return;
      const up = flap * s * 0.55;
      c.save();
      c.globalAlpha = a;
      c.lineCap = 'round';
      c.lineJoin = 'round';

      const path = (dy) => {
        c.beginPath();
        c.moveTo(x - s, y - up + dy);
        c.quadraticCurveTo(x - s * 0.45, y - s * 0.32 - up * 0.2 + dy, x, y + dy);
        c.quadraticCurveTo(x + s * 0.45, y - s * 0.32 - up * 0.2 + dy, x + s, y - up + dy);
      };

      c.strokeStyle = 'rgba(180, 185, 195, 0.25)';
      c.lineWidth = Math.max(1.8, s * 0.22);
      path(1.2);
      c.stroke();

      c.strokeStyle = 'rgba(130, 135, 145, 0.55)';
      c.lineWidth = Math.max(1.4, s * 0.16);
      path(0);
      c.stroke();

      c.restore();
    };

    let lastTime = performance.now();

    const loop = (now) => {
      if (isHidden) {
        animId = requestAnimationFrame(loop);
        return;
      }
      const dt = Math.min((now - lastTime) / 1000, 0.06);
      lastTime = now;

      ctx.clearRect(0, 0, W, H);

      for (const b of birds) {
        b.x += b.vx * dt;
        b.y += Math.sin(now * 0.0018 + b.wave) * 12 * dt;

        if (b.x > W + 60) {
          b.x = -60;
          b.y = H * (0.08 + Math.random() * 0.45);
        }

        b.ph += dt * b.flapSpeed;
        drawGull(ctx, b.x, b.y, b.s, Math.sin(b.ph), 0.7);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
