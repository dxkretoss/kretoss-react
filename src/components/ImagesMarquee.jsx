// ImagesMarquee.jsx
import React from "react";
import SmoothMarquee from "./SmoothMarquee";

export function ImagesMarquee({ images }) {
    return (
        <SmoothMarquee speed={40} gapPx={5} className="lg:hidden mt-[40px]">
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`mob-${i}`}

                    className="h-[400px] shrink-0"
                />
            ))}
        </SmoothMarquee>
    );
}
