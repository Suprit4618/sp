import React, { useEffect, useRef } from 'react';
import { useMotionPreference } from '../../hooks/useMotionPreference';

interface Point {
  x: number;
  y: number;
  age: number;
  width: number;
}

export const InteractiveThreadCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useMotionPreference();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let points: Point[] = [];
    let animationFrameId: number | null = null;
    let isLoopRunning = false;
    let isVisible = true;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Main render step
    const render = () => {
      if (!isVisible || points.length === 0) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        isLoopRunning = false;
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < points.length; i++) {
        points[i].age += 1;
      }

      // Filter out expired points
      points = points.filter((p) => p.age < 28);

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        const last = points[points.length - 1];
        ctx.lineTo(last.x, last.y);

        // Silk thread style: burnt orange with gentle fade
        const alpha = Math.max(0, 1 - points[0].age / 28) * 0.35;
        ctx.strokeStyle = `rgba(184, 68, 45, ${alpha})`;
        ctx.lineWidth = points[0].width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Little stitch tick mark in warm beige
        const midIndex = Math.floor(points.length / 2);
        if (points[midIndex] && points[midIndex].age < 16) {
          const p = points[midIndex];
          ctx.fillStyle = `rgba(222, 197, 163, ${alpha * 1.2})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (points.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        isLoopRunning = false;
        animationFrameId = null;
      }
    };

    const startLoopIfNeeded = () => {
      if (!isLoopRunning) {
        isLoopRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Track cursor with light sampling
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isVisible) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      points.push({
        x: clientX,
        y: clientY,
        age: 0,
        width: 1.5 + Math.random() * 0.6,
      });

      if (points.length > 20) {
        points.shift();
      }

      startLoopIfNeeded();
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Handle tab visibility
    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
      if (!isVisible && animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        isLoopRunning = false;
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-30 w-full h-full transform-gpu ${className}`}
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
};
