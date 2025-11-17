import React, { useState } from "react";

export default function Footer() {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSend = () => setShowThankYou(true);
    const closePopup = () => setShowThankYou(false);

    return (
        <footer
            className="w-full py-6 xl:py-14 2xl:py-20"
            style={{
                background: "linear-gradient(99.21deg, #343284 0.29%, #5D59EA 99.71%)",
            }}
        >
            <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:px-32">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 2xl:gap-24">
                    {/* Left Card */}
                    <div className="bg-[#FFFFFF1A] p-6 sm:p-8 md:p-10 border border-[#FFFFFF4D] rounded-[24px] flex-shrink-0 w-full md:w-[90%] lg:w-[420px] xl:w-[460px] 2xl:w-[500px]">
                        <img src="/assets/images/mobile-app/footerlogo.svg" alt="Kretoss Logo" className="w-[160px] sm:w-[180px]" />
                        <p className="mt-4 sm:mt-6 text-[#FFFFFF] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                            Have a great idea? We're here to bring it to life with innovative & digital solutions.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1">
                        <nav className="flex flex-wrap justify-start md:justify-between lg:justify-start gap-4 sm:gap-6 md:gap-10 mt-2 md:mt-4">
                            {[
                                { label: "About Us", target: "about" },
                                { label: "Services", target: "services" },
                                { label: "Hire Resources", target: "hire" },
                                { label: "Industries", target: "industries" },
                                { label: "Contact Us", target: "contact" },
                            ].map((link, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        const section = document.getElementById(link.target);
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="text-white text-[15px] lg:text-[18px] 2xl:text-[22px] hover:text-[#A9A7FF] transition-all bg-transparent border-none outline-none cursor-pointer"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        <hr className="mt-6 sm:mt-8 border-t border-[#FFFFFF4D]" />

                        {/* Bottom Section */}
                        <div className="mt-6 sm:mt-8 flex flex-col xl:flex-row justify-between sm:gap-10 xl:gap-16 2xl:gap-20">
                            {/* Social Media */}
                            <div className="flex flex-col items-center lg:items-start">
                                <h3 className="text-[15px] xl:text-[18px] 2xl:text-[22px] font-medium text-white">
                                    Social Media
                                </h3>
                                <div className="flex gap-2 2xl:gap-6 mt-3 sm:mt-4">
                                    <a
                                        href="https://www.linkedin.com/company/kretoss"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/assets/images/mobile-app//footer/linkedin.svg"
                                            alt="LinkedIn"
                                            className="cursor-pointer hover:scale-110 transition-transform w-[30px] lg:w-[40px]"
                                        />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/kretosstechnology"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/assets/images/mobile-app//footer/facebook.svg"
                                            alt="Facebook"
                                            className="cursor-pointer hover:scale-110 transition-transform w-[30px] lg:w-[40px]"
                                        />
                                    </a>
                                    {/* <a href="#" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="/assets/images/mobile-app//footer/x.svg"
                                            alt="X / Twitter"
                                            className="cursor-pointer hover:scale-110 transition-transform xl:w-[40px]"
                                        />
                                    </a> */}
                                    <a
                                        href="https://www.instagram.com/kretoss_technology_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/assets/images/mobile-app//footer/insta.svg"
                                            alt="Instagram"
                                            className="cursor-pointer hover:scale-110 transition-transform w-[30px] lg:w-[40px]"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="flex flex-col w-full xl:w-auto">
                                {/* <h3 className="text-[15px] xl:text-[18px] 2xl:text-[22px]  font-medium text-white">
                                    Subscribe To Our Newsletter
                                </h3> */}
                                <div className="mt-6 sm:mt-12 text-center">
                                    <p className="text-white text-[15px] sm:text-[16px] md:text-[18px] xl:text-[20px]">
                                        © 2025 | Designed By Kretoss Technology.
                                    </p>
                                </div>
                                {/* <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="border border-[#FFFFFF4D] bg-transparent rounded-full w-full sm:w-[240px] md:w-[280px] xl:w-[280px] 2xl:w-[420px] h-[36px] xl:h-[46px] 2xl:h-[52px] pl-4 placeholder-[#FFFFFFCC] text-white focus:outline-none"
                                    />
                                    <button
                                        onClick={handleSend}
                                        className="bg-white rounded-full w-full  h-[36px] xl:h-[46px] 2xl:h-[52px] sm:w-[120px] 2xl:w-[158px] px-6 sm:px-8 text-[15px] xl:text-[18px] 2xl:text-[20px] text-[#5D59EA] font-medium hover:bg-[#eaeaff] transition-all"
                                    >
                                        Submit
                                    </button>
                                </div> */}
                            </div>
                        </div>

                        {/* Thank You Popup */}
                        {showThankYou && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                <div className="bg-white w-[90%] sm:w-[400px] md:w-[450px] rounded-[12px] p-6 sm:p-8 shadow-lg relative">
                                    <button
                                        onClick={closePopup}
                                        className="absolute top-3 right-4 text-gray-500 text-xl cursor-pointer"
                                    >
                                        ✕
                                    </button>
                                    <div className="text-center py-8 sm:py-10">
                                        <img
                                            src="/assets/images/mobile-app//logo.svg"
                                            alt="Thank You"
                                            className="mx-auto w-[60px] sm:w-[80px] mb-4"
                                        />
                                        <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#02021E]">
                                            Thank You!
                                        </h3>
                                        <p className="text-gray-600 mt-2 text-[15px] sm:text-[16px]">
                                            We’ll get back to you shortly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Divider & Copyright */}
                {/* <hr className="mt-10 sm:mt-12 border-t border-[#FFFFFF4D]" />
                <div className="mt-6 sm:mt-8 text-center">
                    <p className="text-white text-[15px] sm:text-[16px] md:text-[18px] xl:text-[20px]">
                        © 2025 | Designed By Kretoss Technology.
                    </p>
                </div> */}
            </div>
        </footer>
    );
}
