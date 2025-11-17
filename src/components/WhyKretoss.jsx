import React, { useState, useEffect } from "react";

export default function WhyKretoss() {
    const keypointsOne = [
        "Over 14 Years of Industry Experience",
        "1100+ Skilled and Dedicated Developers",
        "98% Project Success Rate",
        "2600+ Satisfied Global Clients",
        "Proven Development Expertise",
        "Comprehensive End-to-End Support",
        "Flexible Hiring Models",
    ];

    const keypointsTwo = [
        "Access a Diverse Pool of Multi-Tech Experts",
        "Reduce Training and Retention Costs",
        "Optimize Your IT Capabilities",
        "Enjoy Flexible Engagement Plans",
        "Bridge and Strengthen Tech Gaps",
        "Foster Continuous Knowledge Exchange",
        "Communicate Directly with Your Team",
    ];

    const allCards = [
        { title: "Why Hire Mobile App Developers from Kretoss Technology", points: keypointsOne, img: "/assets/images/mobile-app/points2.svg" },
        { title: "Kretoss Technology’s Dedicated Team — Your Partner in Excellence", points: keypointsTwo, img: "/assets/images/mobile-app/points1.svg" },
    ];

    // SLIDER STATES
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    // Responsive behavior
    useEffect(() => {
        const updateItems = () => {
            if (window.innerWidth < 1024) setItemsPerPage(1);
            else setItemsPerPage(2);
        };

        updateItems();
        window.addEventListener("resize", updateItems);
        return () => window.removeEventListener("resize", updateItems);
    }, []);

    const totalPages = Math.ceil(allCards.length / itemsPerPage);

    // Auto slide every 5 sec
    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentPage((p) => (p + 1 < totalPages ? p + 1 : 0));
        }, 5000);

        return () => clearInterval(autoSlide);
    }, [totalPages]);

    const start = currentPage * itemsPerPage;
    const visibleCards = allCards.slice(start, start + itemsPerPage);

    // SWIPE (MOBILE)
    const [touchStartX, setTouchStartX] = useState(null);
    const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);

    const handleTouchEnd = (e) => {
        if (!touchStartX) return;
        const diff = touchStartX - e.changedTouches[0].clientX;

        if (diff > 50) {
            setCurrentPage((p) => (p + 1 < totalPages ? p + 1 : 0));
        } else if (diff < -50) {
            setCurrentPage((p) => (p - 1 >= 0 ? p - 1 : totalPages - 1));
        }

        setTouchStartX(null);
    };


    return (
        <div className="relative container section mx-auto container_content px-4 py-16">
            <div
                className="w-full max-w-[1620px] mx-auto rounded-[26px] p-6 sm:p-8 md:p-10 lg:p-14"
                style={{
                    background: "linear-gradient(96.57deg, #E6F0FF 0.24%, #FFFFFF 99.76%)",
                }}
            >
                {/* SLIDER CONTAINER */}
                <div
                    className="flex gap-8 xl:gap-[40px]"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {visibleCards.map((card, i) => (
                        <div
                            key={i}
                            className="relative z-10 bg-white border border-[#22222233] p-5 xl:p-8 2xl:p-10 rounded-[24px] flex-1 shadow-sm"
                        >
                            <h1 className="text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[38px] text-[#02021E] font-semibold leading-snug mb-6">
                                {card.title}
                            </h1>

                            <div className="mt-[20px] flex flex-col gap-3">
                                {card.points.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-[12px]"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(93,89,234,0.1) 50.23%, rgba(255,255,255,0) 100%)",
                                        }}
                                    >
                                        <img
                                            src="/assets/images/mobile-app/points.svg"
                                            className="w-[24px] xl:w-[28px] 2xl:w-[32px] h-[24px] xl:h-[28px] 2xl:h-[32px]"
                                            alt="point"
                                        />
                                        <p className="text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#000000] leading-snug">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <img
                                src={card.img}
                                className="absolute -top-6 -right-10 w-[100px] h-[100px]"
                                alt=""
                            />
                        </div>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center mt-6 gap-3">
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <button
                                key={pageIndex}
                                onClick={() => setCurrentPage(pageIndex)}
                                className={`w-3 h-3 rounded-full transition-all ${currentPage === pageIndex
                                    ? "bg-[#5D59EA] w-6"
                                    : "bg-[#D1D1D1] hover:bg-[#A1A1A1]"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="w-[122px] h-[229px] bg-[#0060F0] rounded-[144px] blur-[182px] absolute bottom-[250px] right-0"></div>
        </div>
    );
}
