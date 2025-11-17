import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Support() {
    const Services = [
        { img: "/assets/images/mobile-app/support/mobDev.svg", txt: "Custom Mobile App Development", desc: "We specialize in developing, updating, and managing secure, custom Android apps using Java, Kotlin, and Android SDK." },
        { img: "/assets/images/mobile-app/support/fullstack.svg", txt: "Full-stack App Development", desc: "Hire skilled app developers to build secure, scalable, and feature-rich applications that drive efficiency and profitability from concept to launch." },
        { img: "/assets/images/mobile-app/support/appSol.svg", txt: "Enterprise App Solutions", desc: "Hire app developers to build adaptable enterprise solutions powered by smart data analytics, enhancing customer experience and workflow efficiency." },
        { img: "/assets/images/mobile-app/support/appdecv.svg", txt: "Cross platform app Development", desc: "We specialize in developing, updating, & managing secure, custom cross-platform apps using Flutter, React Native for seamless performance across devices.." },
        { img: "/assets/images/mobile-app/support/thirdparty.svg", txt: "Third Party Integration", desc: "Hire expert developers to integrate third-party APIs for seamless connectivity and enhanced app functionality." },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Responsive logic
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 768) setItemsPerPage(1);
            else if (window.innerWidth < 1280) setItemsPerPage(3);
            else setItemsPerPage(5);
        };
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(Services.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1 < totalPages ? prevPage + 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, [totalPages]);

    useEffect(() => {
        if (currentPage >= totalPages) setCurrentPage(totalPages - 1);
    }, [totalPages]);

    const startIndex = currentPage * itemsPerPage;
    const visibleServices = Services.slice(startIndex, startIndex + itemsPerPage);

    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;

        const difference = touchStartX - touchEndX;

        if (difference > 50) {
            setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
        } else if (difference < -50) {
            setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <div className="relative container section container_content mx-auto min-h-[570px] 2xl:h-[690px] rounded-[24px]">
            <div
                className="w-full max-w-[1620px] mx-auto rounded-[26px] p-4 sm:p-8 md:p-10 lg:p-14"
                style={{
                    background: "linear-gradient(96.57deg, rgba(255, 255, 255, 0.8) 0.24%, #FCE6FF 99.76%)",
                }}
            >
                {/* Heading */}
                <div className="max-w-[930px] mx-auto pt-[30px] text-center">
                    <h1 className="text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[48px] font-semibold text-[#02021E] leading-snug">
                        Hire Mobile App Programmers to Deliver{" "}
                        <span className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] font-bold text-white rounded-md px-2 py-1 inline-block">
                            Top Quality App Development
                        </span>{" "}
                        Services
                    </h1>
                </div>

                {/* Subtext */}
                <div className="max-w-[850px] mx-auto text-center mt-[20px]">
                    <span className="text-[15px] sm:text-[16px]">
                        Hire mobile app developers with expertise in custom app development,
                        full-stack solutions, enterprise applications, and cross-platform
                        mobile development. We deliver reliable, efficient, and tailored app
                        solutions to meet your unique business needs.
                    </span>
                </div>

                {/* Cards Section */}
                <div className="mt-[28px] relative overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex justify-center gap-[10px] w-full"
                        >
                            {visibleServices.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="border border-[#22222233] h-[250px] sm:h-auto rounded-[12px] bg-[#FFFFFF] p-[15px] flex-shrink-0"
                                    style={{
                                        width:
                                            itemsPerPage === 1
                                                ? "100%"
                                                : itemsPerPage === 3
                                                    ? "30%"
                                                    : "19%",
                                    }}
                                >
                                    <div className="flex items-start gap-[12px]">
                                        {/* <img
                                            src={item.img}
                                            className="bg-[#E1E0FF] p-2 rounded-full"
                                        /> */}
                                        <span className="text-[19px] 2xl:text-[18px] text-[#02021E] font-semibold">
                                            {item.txt}
                                        </span>
                                    </div>
                                    <div className="mt-[10px] lg:mt-[15px]">
                                        <span className="text-[#4C586F] text-[16px] 2xl:text-[16px]">
                                            {item.desc}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots Navigation */}
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
            </div>

            {/* Floating Quick Support */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:left-20 2xl:-top-5 2xl:left-20">
                <div className="relative">
                    <div
                        className="w-[182px] h-[80px] bg-[#FFFFFF] rounded-[10px] flex flex-col items-center justify-center gap-2"
                        style={{ boxShadow: "13px 14px 40px 0px #27628326" }}
                    >
                        <img
                            src="/assets/images/mobile-app/Qsupport.svg"

                            alt="Quick Support"
                            className="absolute -top-5"
                        />
                        <span className="text-[20px] font-semibold text-[#020817] text-center absolute top-10">
                            Quick Support
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
