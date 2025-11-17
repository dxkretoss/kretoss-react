import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Form from "./Form";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className="bg-[#FFFFFF] h-[80px] 2xl:h-[100px] flex items-center relative shadow-sm w-full">
            <div className="container mx-auto px-4 flex justify-between items-center w-full">
                <div className="flex items-center">
                    <img src="/assets/images/mobile-app//logo.svg" alt="Kretoss" className="w-[160px]" />
                </div>

                <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 text-center">
                    <ul className="flex items-center gap-8 text-[#222222] text-[16px] font-medium">
                        {[
                            { label: "About Us", target: "about" },
                            { label: "Industries", target: "industries" },
                            { label: "Services", target: "services" },
                            { label: "Hire Resources", target: "hire" },
                            { label: "Contact Us", target: "contact" },
                        ].map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => {
                                        const section = document.getElementById(item.target);
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="relative group transition bg-transparent border-none outline-none cursor-pointer"
                                >
                                    {item.label}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#007bff] transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#5D59EA] rounded-full text-white px-5 py-2 font-medium cursor-pointer hover:bg-[#4a47d1] transition"
                        style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                    >
                        Get A Free Quote
                    </button>
                </div>

                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-[#222222] text-3xl focus:outline-none"
                    >
                        <Menu />
                    </button>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/40 z-50">
                    <div className="fixed right-0 top-0 h-full w-[260px] bg-white shadow-lg p-6 flex flex-col  transition-transform duration-300 ease-in-out">
                        <div className="flex justify-between items-center mb-6">
                            <img src="/assets/images/mobile-app//logo.svg" alt="Kretoss" className="w-[130px]" />
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="text-gray-600 text-2xl"
                            >
                                <X />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-5 text-[#222222] text-[16px] font-medium">
                            {[
                                { label: "About Us", target: "about" },
                                { label: "Services", target: "services" },
                                { label: "Hire Resources", target: "hire" },
                                { label: "Industries", target: "industries" },
                                { label: "Contact Us", target: "contact" },
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`/#${item.target}`}
                                        className="block hover:text-[#5D59EA] transition"
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => {
                                setIsSidebarOpen(false);
                                setIsOpen(true);
                            }}
                            className="bg-[#5D59EA] rounded-full text-white px-5 py-2 font-medium cursor-pointer hover:bg-[#4a47d1] transition mt-6"
                            style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                        >
                            Get A Free Quote
                        </button>
                    </div>
                </div>
            )}

            {isOpen && (
                <Form title={'Get A Free Quote'} buttontext={"Get Quote"} onClose={() => setIsOpen(false)} />
            )}
        </header>
    );
}
