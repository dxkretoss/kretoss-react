import React, { useState } from 'react';
import { MoveRight } from 'lucide-react';
import Form from './Form';

export default function GlobalExp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container section container_content mx-auto w-full">

            <div
                className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 
                           p-5 sm:p-8 lg:p-10 2xl:p-[30px] bg-gradient-to-b from-[#EEF0FF80] to-[#CFE6FF] rounded-[24px]"
            >
                <div className="flex-1 text-center lg:text-left max-w-full lg:max-w-[640px]">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/images/mobile-app/logo.svg"}
                        alt="Logo"

                        className="mx-auto lg:mx-0 w-[120px] sm:w-[140px] lg:w-[160px]"
                    />

                    <h1
                        className="mt-6 sm:mt-8 text-[26px] sm:text-[34px] md:text-[40px] 2xl:text-[48px] 
                                   font-semibold text-[#02021E]"
                    >
                        Tap Into{" "}
                        <span
                            className="bg-gradient-to-r from-[#5D59EA] to-[#B4B2FF] 
                                       font-bold text-white rounded-md px-3 py-1
                                       whitespace-nowrap"
                        >
                            Global Expertise
                        </span>
                    </h1>

                    <p
                        className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] 
                                   text-[#02021E] leading-relaxed max-w-[95%] lg:max-w-[600px] mx-auto lg:mx-0"
                    >
                        Our team of experts brings deep domain knowledge and innovative thinking to every project. Their dynamic, out-of-the-box approach sets us apart in the market.
                    </p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-6 sm:mt-8 md:mt-10 
                                   w-full sm:w-[240px] md:w-[260px] h-[44px] md:h-[50px] 2xl:h-[61px] 
                                   flex items-center justify-center gap-2 
                                   rounded-full bg-[#5D59EA] text-white 
                                   text-[15px] sm:text-[16px] md:text-[18px] 2xl:text-[20px] 
                                   font-medium hover:opacity-90 transition-all duration-300 
                                   shadow-md sm:shadow-lg mx-auto lg:mx-0"
                        style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}
                    >
                        Hire App Developer
                        <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>

                {isOpen && (
                    <Form title={'Hire Mobile App Developer'} buttontext={"Hire Mobile App Developer"} onClose={() => setIsOpen(false)} />
                )}
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/images/mobile-app/GlobalExp.svg"}
                        alt="Global Expertise"

                        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-[600px] 
                                   h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
