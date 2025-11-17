import React, { useEffect, useState } from "react";

export default function IntoSuccess() {
    const successCards = [
        {
            title: "STARTUPS",
            subtitle: "Accelerate Your Launch. Maximize Your Seed.",
            shortDesc:
                "With Kretoss Technology, global startups can hire a dedicated development team to fast-track their project development, supported by talented developers and efficient cost management.",
            image: "/assets/images/mobile-app/success/success-1.svg",
        },
        {
            title: "Mid level Businesses",
            subtitle: "Scale with Confidence. Outpace Competitors.",
            shortDesc:
                "With Kretoss Technology, mid-size businesses can hire dedicated developers to develop powerful, future-ready digital solutions that deliver innovation, stability, and a clear path to excellence.",
            image: "/assets/images/mobile-app/success/success-2.svg",
        },
        {
            title: "Enterprise Level Businesses",
            subtitle: "Master Complexity. Drive Strategic Innovation.",
            shortDesc:
                "Kretoss Technology supports large-scale enterprises by providing experienced developers who can expertly handle complex development projects and drive high-value, strategic innovation.",
            image: "/assets/images/mobile-app/success/success-3.svg",
        },
    ];

    // -------------------------------------------------------------------
    // SLIDER LOGIC
    // -------------------------------------------------------------------
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const updateItems = () => {
            if (window.innerWidth < 1024) setItemsPerPage(1);
            else setItemsPerPage(3);
        };

        updateItems();
        window.addEventListener("resize", updateItems);
        return () => window.removeEventListener("resize", updateItems);
    }, []);

    const totalPages = Math.ceil(successCards.length / itemsPerPage);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentPage((p) => (p + 1 < totalPages ? p + 1 : 0));
        }, 5000);

        return () => clearInterval(autoSlide);
    }, [totalPages]);

    const startIndex = currentPage * itemsPerPage;
    const visibleCards = successCards.slice(startIndex, startIndex + itemsPerPage);

    // SWIPE HANDLERS
    const [touchStartX, setTouchStartX] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (!touchStartX) return;

        const endX = e.changedTouches[0].clientX;
        const diff = touchStartX - endX;

        if (diff > 50) {
            setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
        } else if (diff < -50) {
            setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));
        }

        setTouchStartX(null);
    };

    // -------------------------------------------------------------------

    return (
        <div className="container section container_content mx-auto px-4 xl:px-12 py-12 sm:py-16">

            {/* Heading */}
            <div className="max-w-[900px] mx-auto text-center px-2">
                <h1 className="text-[26px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-semibold text-[#02021E] leading-snug">
                    Hire Mobile App Developers To Turn Your{" "}
                    <span
                        style={{
                            background:
                                "linear-gradient(180deg, #FFFFFF 0%, #BBB9FF 130.23%)",
                        }}
                        className="font-bold text-[#5D59EA] rounded-md px-1 xl:px-2 whitespace-nowrap"
                    >
                        Idea Into Success.
                    </span>
                </h1>
            </div>

            <div className="max-w-[700px] mx-auto text-center mt-[20px]">
                <span>
                    Hire app developers to gain top-tier technical support and outpace your competitors.
                </span>
            </div>

            {/* SLIDER CONTAINER */}
            <div
                className="flex items-stretch gap-6 xl:gap-8 mt-5 xl:mt-7 overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {visibleCards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-1 h-[500px] lg:h-auto bg-[#5D59EA] rounded-[20px] p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-lg hover:scale-[1.02] transition-transform duration-300 min-h-[400px] lg:min-h-[450px] 2xl:min-h-[500px]"
                    >
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] text-white font-bold uppercase">
                                {card.title}
                            </h2>

                            <p className="text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[22px] text-white font-medium mt-3 sm:mt-4 leading-snug max-w-[90%] mx-auto">
                                {card.subtitle}
                            </p>

                            <p className="text-[15px] xl:text-[15px] text-[#dee4f0] font-medium mt-3 sm:mt-4 leading-snug max-w-[90%] mx-auto">
                                {card.shortDesc}
                            </p>
                        </div>

                        <div className="bg-[#B2C7FF] min-h-[185px] rounded-[16px] p-4 2xl:p-6 mt-4 2xl:mt-8 w-full flex justify-center items-center">
                            <img src={card.image} alt={card.title} className="object-contain" />
                        </div>
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
    );
}
