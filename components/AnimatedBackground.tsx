'use client';

import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Floating bubbles/clouds
    const bubbles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      opacity: number;
    }> = [];

    const colors = [
      'rgba(167, 139, 250, 0.4)', // purple-light
      'rgba(249, 168, 212, 0.4)', // pink-light
      'rgba(251, 191, 36, 0.3)',  // yellow
      'rgba(96, 165, 250, 0.3)',  // blue
      'rgba(52, 211, 153, 0.3)',  // green
    ];

    for (let i = 0; i < 25; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 60 + 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.3,
      });
    }

    // Sparkle stars
    const sparkles: Array<{
      x: number;
      y: number;
      size: number;
      phase: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 40; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      });
    }

    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw floating bubbles
      bubbles.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        // Wrap around
        if (b.x < -b.radius) b.x = width + b.radius;
        if (b.x > width + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = height + b.radius;
        if (b.y > height + b.radius) b.y = -b.radius;

        // Soft gradient bubble
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        gradient.addColorStop(0, b.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw sparkles (twinkling stars)
      sparkles.forEach((s) => {
        s.phase += s.speed;
        const opacity = (Math.sin(s.phase) + 1) / 2;
        const size = s.size * (0.5 + opacity * 0.5);

        // Star shape
        ctx.fillStyle = `rgba(124, 58, 237, ${opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Cross sparkle
        if (size > 2) {
          ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(s.x - size * 2, s.y);
          ctx.lineTo(s.x + size * 2, s.y);
          ctx.moveTo(s.x, s.y - size * 2);
          ctx.lineTo(s.x, s.y + size * 2);
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
