// StatsMarquee.jsx
import React from "react";
import SmoothMarquee from "./SmoothMarquee";

export function StatsMarquee({ stats }) {
    return (
        <SmoothMarquee speed={40} className="lg:hidden mt-[40px]">
            {stats.map((item, i) => (
                <div key={i} className="flex flex-col items-center shrink-0" style={{ width: 220 }}>
                    <img src={item.icon} alt="" className="w-10 h-10" />
                    <p className="text-[28px] font-semibold mt-[5px]">
                        {item.prefix}{item.value}{item.suffix}
                    </p>
                    <p className="text-[15px] text-start">{item.label}</p>
                </div>
            ))}
        </SmoothMarquee>
    );
}
