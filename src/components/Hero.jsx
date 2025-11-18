import React, { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";

const countryData = [
    {
        smallLogo: "/assets/images/mobile-app/maps/indiaCountry.svg",
        mapLogo: "/assets/images/mobile-app/maps/india.svg",
        countryName: "India",
        hourlyPrice: "$23.00",
    },
    {
        smallLogo: "/assets/images/mobile-app/maps/austContry.svg",
        mapLogo: "/assets/images/mobile-app/maps/aust.svg",
        countryName: "Australia",
        hourlyPrice: "AUD 150.00",
    },
    {
        smallLogo: "/assets/images/mobile-app/maps/newzealandContry.svg",
        mapLogo: "/assets/images/mobile-app/maps/newzealand.svg",
        countryName: "New Zealand",
        hourlyPrice: "NZD 170.00",
    },
    {
        smallLogo: "/assets/images/mobile-app/maps/usaCountry.svg",
        mapLogo: "/assets/images/mobile-app/maps/usamap.svg",
        countryName: "USA",
        hourlyPrice: "$150.00",
    },
    {
        smallLogo: "/assets/images/mobile-app/maps/europeCountry.svg",
        mapLogo: "/assets/images/mobile-app/maps/europe.svg",
        countryName: "Europe",
        hourlyPrice: "€130.00",
    },
];

const stats = [
    {
        icon: "/assets/images/mobile-app/exp.svg",
        value: "10+",
        label: "Experience",
    },
    {
        icon: "/assets/images/mobile-app/dev.svg",
        value: "2k+",
        label: "Developers",
    },
    {
        icon: "/assets/images/mobile-app/client.svg",
        value: "210+",
        label: "Clients",
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % countryData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentCountry = countryData[currentIndex];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white py-16 md:py-24 lg:py-0"
            style={{
                backgroundImage: "url('/assets/images/mobile-app/herobg.svg')",
                minHeight: "800px",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="container container_content relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 xl:px-8 2xl:px-18 gap-10 md:gap-14">
                <div className="w-full lg:w-[55%] flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h1 className="text-[40px] lg:text-[44px] 2xl:text-[56px] leading-tight mb-6 font-semibold text-white">
                        Hire{" "}
                        <span className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] font-bold text-white rounded-md px-3 sm:px-4 md:px-5 py-2 sm:py-3">
                            Mobile App
                        </span>{" "}
                        Developers
                    </h1>

                    <p className="text-[#FFFFFF] text-[16px] sm:text-[18px] md:text-[20px] 2xl:text-[24px]  sm:mt-6 mb-8 sm:mb-10 max-w-[600px]">
                        Hire a skilled team of app developers to deliver top-quality,
                        user-friendly app solutions tailored to your project needs.
                    </p>

                    <div className="sm:w-auto flex flex-wrap items-center mb-10 bg-white rounded-full border border-[#E4E3FF] px-4 sm:px-6 py-3 sm:py-4">
                        <span className="text-[#222222] text-[15px] sm:text-[16px] md:text-[18px] font-medium">
                            Starting at
                        </span>
                        <img
                            src="/assets/images/mobile-app/clock.svg"

                            className="ml-[5px] 2xl:ml-[15px] w-[20px] sm:w-[28px]"
                        />
                        <span className="text-[#02021E] text-[16px] md:text-[20px] xl:text-[24px] 2xl:text-[32px] font-semibold ml-1">
                            $22.00/
                        </span>
                        <span className="text-[#222222] text-[15px] 2xl:text-[18px] ml-1 items-end">
                            hour
                        </span>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="hidden ml-[10px] 2xl:ml-[15px] sm:w-auto sm:mt-0 xl:flex gap-2 items-center justify-center bg-[#5D59EA] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-[15px] sm:text-[16px] hover:opacity-90 transition"
                            style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                        >
                            Hire Mobile App Developer
                            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex ml-[8px] sm:ml-[15px] sm:w-auto sm:mt-0 xl:hidden gap-2 items-center justify-center bg-[#5D59EA] text-white px-4 sm:px-8 py-2 sm:py-3.5 rounded-full font-semibold text-[15px] sm:text-[16px] hover:opacity-90 transition"
                            style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                        >
                            Hire
                            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>

                    {isOpen && (
                        <Form title={'Hire Mobile App Developer'} buttontext={"Hire Mobile App Developer"} onClose={() => setIsOpen(false)} />
                    )}

                    <div className="flex flex-wrap items-center justify-start gap-5 text-gray-200 mb-10">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center sm:gap-4 flex-col sm:flex-row w-[90px] h-auto p-[10px] gap-2 sm:w-[160px] 2xl:w-[190px]  sm:h-[74px] border border-[#FFFFFF80] rounded-md"
                                style={{
                                    background: "#FFFFFF1F",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="w-[24px] 2xl:w-[32px]"
                                />
                                <div className="flex flex-col text-center sm:text-left">
                                    <span className="text-[#FFFFFF] text-[20px] 2xl:text-[26px] font-semibold">
                                        {item.value}
                                    </span>
                                    <span className="text-[#FFFFFF] text-[15px] 2xl:text-[17px]">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex  items-center mt-[30px] text-[#FFFFFF]">
                        <p className="text-[15px] sm:text-[22px] 2xl:text-[28px] font-light">
                            <span className="font-bold">Trusted</span> by:
                        </p>
                        <div className="flex items-center">
                            {[
                                "/assets/images/mobile-app/trusted/trusted-1.svg",
                                "/assets/images/mobile-app/trusted/trusted-2.svg",
                                "/assets/images/mobile-app/trusted/trusted-3.svg",
                                "/assets/images/mobile-app/trusted/trusted-4.svg",
                            ].map((src, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center p-[5px] sm:px-[10px] ${index !== 0 ? "border-l border-[#FFFFFF80]" : ""
                                        }`}
                                >
                                    <img
                                        src={src}

                                        className="w-[50px] sm:w-[100px] h-[35px] sm:h-[50px]"
                                        alt="trusted brand"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[400px] lg:w-[40%] lg:h-auto flex justify-center items-center mt-8 lg:mt-0 px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentCountry.countryName}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6 }}
                            className="
                                    relative 
                                    w-full 
                                    max-w-[650px]
                                    bg-gradient-to-b 
                                    from-[#FFFFFF] 
                                    to-[#CFE6FF] 
                                    border border-[#22222224] 
                                    rounded-2xl 
                                    p-6 sm:p-8 
                                    shadow-xl 
                                    text-center
                                "
                        >
                            {/* Top row (flags + logo) */}
                            <div className="flex justify-between items-center">
                                <img
                                    src={currentCountry.smallLogo}
                                    alt={currentCountry.countryName}
                                    className="w-[40px] sm:w-[50px] 2xl:w-[70px]"
                                />

                                <img
                                    src="/assets/images/mobile-app/logo.svg"
                                    className="w-[110px] sm:w-[130px] 2xl:w-[150px]"
                                    alt="logo"
                                />
                            </div>

                            {/* Middle content */}
                            <div className="
                                flex 
                                flex-col sm:flex-row 
                                justify-center sm:justify-between 
                                items-center 
                                mt-10 
                                gap-6 sm:gap-10
                            ">
                                <img
                                    src={currentCountry.mapLogo}
                                    alt={currentCountry.countryName}
                                    className="w-[150px] sm:w-[180px] lg:w-[200px] 2xl:w-[230px]"
                                />

                                <div className="flex flex-col text-center sm:text-left">
                                    <span className="text-[24px] md:text-[24px] 2xl:text-[32px] text-[#02021E] font-medium">
                                        {currentCountry.countryName}
                                    </span>

                                    <div className="flex items-center justify-center sm:justify-start">
                                        <span className="text-[24px] md:text-[24px] 2xl:text-[32px] text-[#02021E] font-bold">
                                            {currentCountry.hourlyPrice}/ hour
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
