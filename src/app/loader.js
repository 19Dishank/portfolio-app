'use client';

import { useEffect, useRef, useState } from 'react';
import './loader.css';

export default function Loader({ isLoaded = false, progress: targetProgress = 0 }) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  const doneRef = useRef(false);
  const blobGRef = useRef(null);
  const blobORef = useRef(null);

  const targetProgressRef = useRef(targetProgress);
  const isLoadedRef = useRef(isLoaded);
  const currentDisplayRef = useRef(0);

  useEffect(() => {
    targetProgressRef.current = targetProgress;
  }, [targetProgress]);

  useEffect(() => {
    isLoadedRef.current = isLoaded;
  }, [isLoaded]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.style.overflow = 'hidden';

    let rafId;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      document.body.style.overflow = '';
      setTimeout(() => setHidden(true), 200);
      setTimeout(() => setRemoved(true), 900);
    };

    const tick = () => {
      if (doneRef.current) return;

      const target = targetProgressRef.current;
      let current = currentDisplayRef.current;

      if (current < target) {
        const step = Math.max(0.4, (target - current) * 0.15);
        current = Math.min(target, current + step);
        currentDisplayRef.current = current;
        setDisplayProgress(current);
      }

      // Finish when real fetching is completed and display progress reaches 100%
      if (isLoadedRef.current && target >= 100 && current >= 99.5) {
        currentDisplayRef.current = 100;
        setDisplayProgress(100);
        finish();
        return;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const onMove = (x, y) => {
      if (!reduced) {
        const dx = window.innerWidth / 2 - x;
        const dy = window.innerHeight / 2 - y;
        if (blobGRef.current) blobGRef.current.style.transform = `translate(${dx * 0.02}px, ${dy * 0.02}px)`;
        if (blobORef.current) blobORef.current.style.transform = `translate(${-dx * 0.015}px, ${-dy * 0.015}px)`;
      }
    };

    const onMouseMove = (e) => onMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      const t = e.touches[0];
      if (t) onMove(t.clientX, t.clientY);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = '';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`loader-overlay${hidden ? ' loader-hide' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {/* Signature background ambient blobs from v4-kit */}
      <div className="loader-glow">
        <div ref={blobGRef} className="loader-blob loader-blob-green" />
        <div ref={blobORef} className="loader-blob loader-blob-orange" />
      </div>

      <div className="loader-container">
        {/* Core Monogram "DP" Initials Mark */}
        <div className="loader-initials-wrap">
          <div className="loader-initials">
            <span className="first">D</span>
            <span className="last">P</span>
          </div>
          <div className="loader-initials-ring" />
        </div>

        {/* Monospace Eyebrow with Pulsing Status Indicator */}
        <div className="loader-eyebrow">
          <span className="loader-dot" />
          <span>Dishank Patel</span>
        </div>

        {/* Sleek Progress Track & Percentage */}
        <div className="loader-progress-wrap">
          <div className="loader-progress-track">
            <div
              className="loader-progress-fill"
              style={{ width: `${displayProgress}%` }}
            />
          </div>
          <span className="loader-progress-num">
            {Math.floor(displayProgress).toString().padStart(2, '0')}%
          </span>
        </div>
      </div>
    </div>
  );
}