import React from 'react'

export default function ProcessHire() {
    const Process = [
        {
            img: '/assets/images/mobile-app/process/interview.svg',
            txt: 'Schedule Interview',
            desc: 'Interview shortlisted developers to evaluate their skills and choose the best team for your project.'
        },
        {
            img: '/assets/images/mobile-app/process/team.svg',
            txt: 'Team Allocation',
            desc: 'We’ll share developer profiles based on your requirements, allowing you to review and shortlist the best fit.'
        },
        {
            img: '/assets/images/mobile-app/process/appdev.svg',
            txt: 'Meet Our App Developers',
            desc: 'Connect with our experts to discuss your development goals and requirements.'
        },
        {
            img: '/assets/images/mobile-app/process/onboarding.svg',
            txt: 'Onboarding Process',
            desc: 'After hiring developers, you can track real-time progress and leverage their full technical expertise.'
        },
    ]

    return (
        <div className="container section mx-auto container_content px-4 py-16">
            <div className="relative flex flex-col items-center text-center xl:w-[900px] 2xl:w-[900px] mx-auto">
                <h1
                    className="text-[26px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-semibold text-[#02021E] leading-snug relative"
                >
                    A Streamlined{" "}
                    <span className="relative inline-block text-[#5D59EA]">
                        Process to Hire
                        <img
                            src="/assets/images/mobile-app/underline.svg"

                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                        />
                    </span>{" "}
                    App Developers
                </h1>

                <p className="mt-4 sm:mt-6 text-[#191919] text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed max-w-[600px] 2xl:max-w-[900px]">
                    Ready to boost your development capabilities? Follow our streamlined process to hire mobile app developers from our highly skilled and dedicated team
                </p>

                <div className="absolute hidden xl:block"
                    style={{ top: '-10px', right: '-200px' }}
                >
                    <div
                        className="relative w-[160px] sm:w-[180px] md:w-[200px] lg:w-[218px] h-[90px] lg:h-[95px] xl:h-[100px] 2xl:h-[122px] bg-white rounded-[10px] flex flex-col items-center justify-center shadow-lg"
                        style={{ boxShadow: "13px 14px 40px 0px #27628326" }}
                    >
                        <img
                            src="/assets/images/mobile-app/Vision.svg"

                            alt="Vision"
                            className="absolute -top-6 sm:-top-7 w-[40px] sm:w-[50px] md:w-[55px]"
                        />
                        <div className="absolute top-8 flex flex-col items-center">
                            <span className="text-[15px] xl:text-[18px] 2xl:text-[23px] font-bold text-[#020817] text-center">
                                Vision
                            </span>
                            <span className="text-[#4B4D4C] text-[12px] xl:text-[15px] 2xl:text-[15px]">
                                Empower Businesses With Innovative
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-start">
                {Process.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center sm:items-start sm:text-start bg-white rounded-[20px] py-5 px-3 sm:p-8 w-full sm:w-[300px] md:w-[320px] lg:w-[280px] xl:w-[320px] transition-all duration-300"
                    >
                        <img
                            src={item.img}
                            alt={item.txt}

                            className="w-[64px] h-auto"
                        />
                        <p className="mt-3 sm:mt-5 text-[#000000] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-snug">
                            {item.txt}
                        </p>
                        <p className="mt-2 sm:mt-4 text-[#000000CC] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
