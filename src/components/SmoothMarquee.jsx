// SmoothMarquee.jsx
import React, { useRef, useEffect, useState } from "react";

/**
 * SmoothMarquee
 * props:
 *  - children: React nodes (this will be duplicated internally)
 *  - speed: pixels per second (number). default 120
 *  - gapPx: gap between child items in px (applied to each child wrapper)
 *  - className: outer wrapper classes
 *  - pauseOnHover: boolean (default true)
 */
export default function SmoothMarquee({
    children,
    speed = 120,
    gapPx = 24,
    className = "",
    pauseOnHover = true,
}) {
    const containerRef = useRef(null);
    const firstCopyRef = useRef(null);
    const trackRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    // Measure the width of the first copy after images/fonts render.
    useEffect(() => {
        if (!trackRef.current || !firstCopyRef.current) return;

        let cancelled = false;

        // measure function
        const measure = () => {
            if (cancelled) return;
            const width = firstCopyRef.current.getBoundingClientRect().width;
            // compute duration from speed px/sec
            const durationSec = Math.max(0.1, width / speed);
            // set css vars on the track element
            trackRef.current.style.setProperty("--shift", `${width}px`);
            trackRef.current.style.setProperty("--duration", `${durationSec}s`);
        };

        // Helper: wait for images in the first copy to load
        const images = Array.from(firstCopyRef.current.querySelectorAll("img"));
        if (images.length === 0) {
            // no images → measure immediately (but delay next tick to ensure layout)
            requestAnimationFrame(measure);
        } else {
            let remaining = images.length;
            const onOneLoaded = () => {
                remaining -= 1;
                if (remaining <= 0) {
                    // all loaded
                    // delay one tick so layout stabilizes
                    requestAnimationFrame(measure);
                }
            };

            images.forEach((img) => {
                if (img.complete) {
                    onOneLoaded();
                } else {
                    img.addEventListener("load", onOneLoaded, { once: true });
                    img.addEventListener("error", onOneLoaded, { once: true });
                }
            });
        }

        // also re-measure on resize (and when fonts / layout change)
        const ro = new ResizeObserver(() => {
            // delay a frame to allow layout to settle
            requestAnimationFrame(measure);
        });
        ro.observe(firstCopyRef.current);

        const onWinResize = () => requestAnimationFrame(measure);
        window.addEventListener("resize", onWinResize);
        window.addEventListener("orientationchange", onWinResize);

        // initial measure (in case no images)
        requestAnimationFrame(measure);

        return () => {
            cancelled = true;
            ro.disconnect();
            window.removeEventListener("resize", onWinResize);
            window.removeEventListener("orientationchange", onWinResize);
        };
    }, [children, speed]);

    // pause handlers (also toggles a class for CSS fallback)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        if (isPaused) el.classList.add("marquee--paused");
        else el.classList.remove("marquee--paused");
    }, [isPaused]);

    // Wrap children into inline items and apply gap via wrapper style
    // We duplicate the full children block once for seamless looping.
    const copyStyle = { display: "inline-flex", gap: `${gapPx}px`, alignItems: "center" };

    return (
        <div
            ref={containerRef}
            className={`marquee ${className}`}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            onTouchStart={() => pauseOnHover && setIsPaused(true)}
            onTouchEnd={() => pauseOnHover && setIsPaused(false)}
        >
            <div ref={trackRef} className="marquee-track">
                <div ref={firstCopyRef} className="marquee-copy" style={copyStyle}>
                    {children}
                </div>

                {/* duplicated copy */}
                <div className="marquee-copy" style={copyStyle} aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    );
}
