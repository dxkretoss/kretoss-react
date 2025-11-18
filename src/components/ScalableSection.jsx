import React, { useState } from 'react'
import CountUpNumber from './CountUpNumber'
import { MoveRight } from "lucide-react";
import { StatsMarquee } from './StatsMarquee';
import { ImagesMarquee } from './ImagesMarquee';
import Form from './Form';

export default function ScalableSection() {
    const [isOpen, setIsOpen] = useState(false);
    const stats = [
        {
            icon: "/assets/images/mobile-app/mob-app.svg",
            value: <CountUpNumber target={200} />,
            suffix: "+",
            label: "Mobile Apps Delivered",
        },
        {
            icon: "/assets/images/mobile-app/bussines.svg",
            prefix: "$",
            value: <CountUpNumber target={1} decimals={1} />,
            suffix: "B+",
            label: "Business Impact for Our Clients",
        },
        {
            icon: "/assets/images/mobile-app/review.svg",
            value: <CountUpNumber target={600} />,
            suffix: "+",
            label: "Five-Star Client Reviews",
        },
        {
            icon: "/assets/images/mobile-app/award.svg",
            value: <CountUpNumber target={11} />,
            suffix: "+",
            label: "Awards for Kretoss",
        },
    ];

    const images = [
        "/assets/images/mobile-app/mobile/mob-1.png",
        "/assets/images/mobile-app/mobile/mob-2.png",
        "/assets/images/mobile-app/mobile/mob-3.png",
        "/assets/images/mobile-app/mobile/mob-4.png",
        "/assets/images/mobile-app/mobile/mob-5.png",
        "/assets/images/mobile-app/mobile/mob-6.png",
        "/assets/images/mobile-app/mobile/mob-7.png",
    ];
    return (
        <div
            className="container section container_content overflow-hidden"
        >

            <div className='flex flex-col lg:flex-row gap-5 h-[1000px] sm:h-[800px] rounded-[24px]'
                style={{
                    background: "linear-gradient(96.57deg, #E6F0FF 0.24%, #F8F8F8 99.76%)",
                }}>
                <div className='w-[100%] lg:w-[49%] p-[20px] lg:p-[50px] flex flex-col justify-center'>
                    <h1
                        className="text-[28px] sm:text-[34px] md:text-[40px] 2xl:text-[48px] font-semibold text-center lg:text-left text-[#02021E] relative leading-snug"
                    >
                        Hire Mobile App Developers to Build {" "}
                        <span className="relative inline-block text-[#5D59EA]">
                            Scalable, Innovative
                            <img
                                src={process.env.PUBLIC_URL + "/assets/images/mobile-app/underline.svg"}
                                alt=""
                                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[8px] sm:translate-y-[12px]"
                            />
                        </span> {" "}
                        Apps
                    </h1>

                    <div className='mt-[20px]'>
                        <span className='text-center md:text-left'>
                            Hire mobile app developers who bring expertise, creativity, and technical
                            excellence to every project. Our team builds scalable, innovative apps designed to
                            grow with your business. Turn your vision into a high-performance digital solution.
                        </span>
                    </div>

                    {/* <div className="scroll-wrapper lg:hidden mt-[40px]">
                        <div className="scroll-track">
                            {[...stats, ...stats].map((item, index) => (
                                <div key={index} className="flex flex-col items-center shrink-0 mx-6">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-12 h-12"
                                    />
                                    <p className="text-[28px] font-semibold mt-[5px]">
                                        {item.prefix}{item.value}{item.suffix}
                                    </p>
                                    <p className="text-[15px]">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <StatsMarquee stats={stats} />

                    <div className='lg:hidden flex justify-center'>
                        <button onClick={() => setIsOpen(true)} className="w-[270px] h-[61px] mt-[40px] text-[20px] items-center flex gap-2 rounded-full bg-[#5D59EA] text-white px-6 font-medium  hover:opacity-90 transition"
                            style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}>
                            Hire App Developer
                            <MoveRight />
                        </button>
                    </div>

                    {/* <div className="scroll-wrapper lg:hidden mt-[40px]">
                        <div className="scroll-track">
                            {[...images, ...images].map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt=""
                                    className="h-[400px] w-auto shrink-0"
                                />
                            ))}
                        </div>
                    </div> */}

                    <ImagesMarquee images={images} />

                    <div className='hidden lg:flex lg:flex-col'>
                        <div className="flex lg:mt-[20px] 2xl:mt-[30px]">
                            <div className='flex h-[136px] w-[296px] border-r border-b border-[#0000001A] p-5'>
                                <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mob-app.svg"} alt="" className='w-[53px] h-[53px]' />
                                <div className='ml-[22px] w-[144px]'>
                                    <p className="text-[28px] font-semibold text[#000000]"> <CountUpNumber target={200} />+</p>
                                    <p className="text-[#000000] text-[15px]">Mobile Apps Delivered</p>
                                </div>
                            </div>

                            <div className='flex h-[136px] w-[296px] border-b border-[#0000001A] p-5'>
                                <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/bussines.svg"} alt="" className='w-[53px] h-[53px]' />
                                <div className='ml-[22px] w-[144px]'>
                                    <p className="text-[28px] font-semibold text[#000000]">$<CountUpNumber target={1} decimals={1} />B+</p>
                                    <p className="text-[#000000] text-[15px]">Business Impact for Our Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='flex h-[136px] w-[296px] border-r border-[#0000001A] p-8'>
                                <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/review.svg"} alt="" className='w-[53px] h-[53px]' />
                                <div className='ml-[22px] w-[144px]'>
                                    <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={600} />+</p>
                                    <p className="text-[#000000] text-[15px]">Five-Star Client Reviews</p>
                                </div>
                            </div>

                            <div className='flex h-[136px] w-[296px] p-8'>
                                <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/award.svg"} alt="" className='w-[53px] h-[53px]' />
                                <div className='ml-[22px] w-[144px]'>
                                    <p className="text-[28px] font-semibold text[#000000]"><CountUpNumber target={11} />+</p>
                                    <p className="text-[#000000] text-[15px]">Awards for Kretoss</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(true)} className="w-[270px] h-[61px] mt-[40px] text-[20px] items-center flex gap-2 rounded-full bg-[#5D59EA] text-white px-6 font-medium  hover:opacity-90 transition"
                            style={{ boxShadow: '0px 0px 22px 0px #5D59EA99' }}>
                            Hire App Developer
                            <MoveRight />
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <Form title={'Hire Mobile App Developer'} buttontext={"Hire Mobile App Developer"} onClose={() => setIsOpen(false)} />
                )}

                <div className="hidden lg:flex gap-6">
                    {/* Column 1 */}
                    <div className="scroll-column">
                        <div className="scroll-inner">
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-1.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-2.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-1.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-2.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-1.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-2.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-1.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-2.png"} />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="scroll-column">
                        <div className="scroll-inner scroll-inner-delay">
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-3.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-4.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-5.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-3.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-4.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-5.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-3.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-4.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-5.png"} />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="scroll-column">
                        <div className="scroll-inner">
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-6.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-7.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-6.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-7.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-6.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-7.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-6.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-7.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-6.png"} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/mobile/mob-7.png"} />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
