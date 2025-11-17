import { useEffect, useRef, useState } from "react";

export default function CountUpNumber({
    target,
    duration = 2000,
    decimals = 0
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    /** Track if animation already started */
    const hasAnimatedRef = useRef(false);

    // ---- Intersection Observer (iOS Safe) ----
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;
                    startAnimation();
                    observer.disconnect(); // important for iOS
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -20% 0px" // prevents early iOS trigger
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    // ---- RAF animation ----
    const startAnimation = () => {
        let startTimestamp = null;
        const end = parseFloat(target);

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = end * progress;

            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    return (
        <span ref={ref}>
            {count.toFixed(decimals)}
        </span>
    );
}
