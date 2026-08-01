'use client';

import { useEffect, useRef, useState } from 'react';
import './loader.css';

export default function Loader() {
    const [progress, setProgress] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [removed, setRemoved] = useState(false);

    const doneRef = useRef(false);
    const lastPos = useRef({ x: null, y: null });
    const cursorRef = useRef(null);
    const blobGRef = useRef(null);
    const blobORef = useRef(null);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.body.style.overflow = 'hidden';

        const start = performance.now();
        // Minimum time the loader stays up even on a fast connection, so it doesn't just flash.
        const baselineDuration = 1800;
        let rafId;

        const finish = () => {
            if (doneRef.current) return;
            doneRef.current = true;
            document.body.style.overflow = '';
            setTimeout(() => setHidden(true), 150);
            setTimeout(() => setRemoved(true), 950);
        };

        const tick = (now) => {
            if (doneRef.current) return;
            const elapsed = now - start;
            const baseline = Math.min(100, (elapsed / baselineDuration) * 100);
            setProgress((p) => (baseline > p ? baseline : p));
            // Only actually finish once the real page has loaded AND the baseline time has passed.
            if (baseline >= 100 && document.readyState === 'complete') {
                finish();
                return;
            }
            rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);

        // If the page finishes loading after the baseline already completed, this catches it.
        const onLoad = () => {
            if (progress >= 100) finish();
        };
        window.addEventListener('load', onLoad);

        const onMove = (x, y) => {
            if (!reduced) {
                if (cursorRef.current) {
                    cursorRef.current.style.left = x + 'px';
                    cursorRef.current.style.top = y + 'px';
                }
                const dx = window.innerWidth / 2 - x;
                const dy = window.innerHeight / 2 - y;
                if (blobGRef.current) blobGRef.current.style.transform = `translate(${dx * 0.02}px, ${dy * 0.02}px)`;
                if (blobORef.current) blobORef.current.style.transform = `translate(${-dx * 0.015}px, ${-dy * 0.015}px)`;
            }
            if (lastPos.current.x !== null && !doneRef.current) {
                const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);
                if (dist > 4) setProgress((p) => Math.min(100, p + Math.min(dist * 0.03, 2)));
            }
            lastPos.current = { x, y };
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
            window.removeEventListener('load', onLoad);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (removed) return null;

    return (
        <div
            className={`loader-overlay${hidden ? ' loader-hide' : ''}`}
            role="status"
            aria-live="polite"
            aria-label="Page loading"
        >
            <div ref={blobGRef} className="loader-blob loader-blob-green" />
            <div ref={blobORef} className="loader-blob loader-blob-orange" />
            <div ref={cursorRef} className="loader-cursor" />

            <div className="loader-mark">
                <span className="loader-ring loader-ring-1" />
                <span className="loader-ring loader-ring-2" />
                <span className="loader-ring loader-ring-3" />
            </div>

            <p className="loader-caption">
                Loading
                <span className="loader-dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </span>
            </p>

            <div className="loader-progress-wrap">
                <div className="loader-progress-track">
                    <div className="loader-progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="loader-progress-num">{Math.floor(progress)}%</span>
            </div>
        </div>
    );
}