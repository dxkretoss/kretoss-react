import React from "react";
import { motion } from "framer-motion";

export default function TopHeader() {
    return (
        <div className="bg-[#E6F0FF] h-[40px] xl:h-[50px] 2xl:h-[60px] flex items-center relative w-full">
            <div className="container mx-auto px-4">
                <div className="flex justify-center md:justify-between items-center w-full relative">

                    <div className="hidden md:flex gap-4 items-center">
                        <span className="text-[#222222] text-[15px] whitespace-nowrap">
                            Our Office
                        </span>
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/mobile-app//india.svg" alt="India" className="w-[20px] h-[20px]" />
                            {/* <span className="text-[#222222] text-[13px] sm:text-[12px] whitespace-nowrap">
                                +91 123 456 7890
                            </span> */}
                        </div>

                        <div className="h-6 w-[1px] bg-[#4C586F4D] hidden sm:block"></div>

                        <div className="flex items-center gap-2">
                            <img src="/assets/images/mobile-app//usa.svg" alt="USA" className="w-[20px] h-[20px]" />
                            {/* <span className="text-[#222222] text-[13px] sm:text-[12px] whitespace-nowrap">
                                +1 (309)123 4536
                            </span> */}
                        </div>
                    </div>

                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-center max-w-[80%] md:max-w-none">
                        <span className="text-[#222222] text-[18px] md:text-[16px] sm:text-[15px] font-medium whitespace-nowrap">
                            “User Friendly Apps Tailored To Your Project”
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* <img
                            src="/assets/images/mobile-app//call.svg"
                            alt="Call"
                            className="w-[18px] h-[18px] cursor-pointer hover:opacity-80 transition"
                        />
                        <div className="h-6 w-[1px] bg-[#4C586F4D] hidden sm:block"></div>
                        <img
                            src="/assets/images/mobile-app//mail.svg"
                            alt="Mail"
                            className="w-[18px] h-[18px] cursor-pointer hover:opacity-80 transition"
                        /> */}

                        {/* <div className="flex items-center gap-2 cursor-pointer">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="text-[13px] font-medium text-[#222]">
                                Black Friday Sale — Flat 20% OFF
                            </span>
                        </div> */}
                        <div className="flex items-center gap-2 bg-gradient-to-r from-[#5D59EA] to-[#A05BFF] text-white px-3 py-1 rounded-lg shadow-md cursor-pointer">
                            <span className="font-semibold text-[13px]">Black Friday Sale</span>
                            <span className="text-[12px]">20% OFF</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
