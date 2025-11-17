import React from "react";

export default function Devlopment() {
    const developers = [
        {
            category: "Junior Developers",
            cost: "$17",
            experience: "1–2 Years",
            methodology: "Agile",
            manager: "Yes",
            timezone: "Yes",
            hours: "40 hours/Week",
        },
        {
            category: "Mid-Level Developers",
            cost: "$22",
            experience: "2–5 Years",
            methodology: "Agile",
            manager: "Yes",
            timezone: "Yes",
            hours: "40 hours/Week",
        },
        {
            category: "Senior Developers",
            cost: "$30",
            experience: "5+ Years",
            methodology: "Agile",
            manager: "Yes",
            timezone: "Yes",
            hours: "40 hours/Week",
        },
    ];

    return (
        <div className="relative container section container_content mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20">
            <div className="max-w-[900px] 2xl:max-w-[1300px] mx-auto text-center px-2">
                <h1
                    className="text-[26px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-semibold text-center text-[#02021E] leading-snug md:leading-tight relative mb-6"
                >
                    Hire App Developers to Empower Your Business with Our Proven Development{" "}
                    <span className="relative inline-block text-[#5D59EA]">
                        Expertise and Quality
                        <img
                            src="/assets/images/mobile-app/underline.svg"
                            alt=""

                            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[6px] sm:translate-y-[8px] md:translate-y-[12px]"
                        />
                    </span>
                </h1>
            </div>

            <div className="max-w-[700px] mx-auto text-center mt-[20px] mb-6">
                <span>
                    Hire Dedicated app developers and empower your business with our advanced technical capabilities.
                </span>
            </div>

            <div className="relative z-10 overflow-x-auto rounded-[12px] border border-[#C2C0F4]">
                <table className="min-w-full border-collapse text-left text-[#02021E] text-sm lg:text-base xl:text-lg 2xl:text-xl">
                    <thead>
                        <tr className="bg-[#5D59EA] text-white text-[16px] sm:text-[18px]">
                            <th className="p-3 sm:p-4 font-semibold border-r border-[#C2C0F4]">Category</th>
                            <th className="p-3 sm:p-4 font-semibold border-r border-[#C2C0F4]">Approx Cost</th>
                            <th className="p-3 sm:p-4 font-semibold border-r border-[#C2C0F4]">Years of Experience</th>
                            <th className="p-3 sm:p-4 font-semibold border-r border-[#C2C0F4]">Methodology</th>
                            <th className="p-3 sm:p-4 font-semibold border-r border-[#C2C0F4]">Project Manager</th>
                            <th className="p-3 sm:p-4 font-semibold border-r border-[#C2C0F4]">Time Zone Flexibility</th>
                            <th className="p-3 sm:p-4 font-semibold">Working Hours</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {developers.map((dev, index) => (
                            <tr
                                key={index}
                                className={`border-b border-[#C2C0F4] ${index === developers.length - 1 ? "border-b-0" : ""}`}
                            >
                                <td className="p-3 sm:p-4 font-semibold bg-[#E6F0FF] text-[#02021E] border-r border-[#C2C0F4]">
                                    {dev.category}
                                </td>
                                <td className="p-3 sm:p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.cost}</td>
                                <td className="p-3 sm:p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.experience}</td>
                                <td className="p-3 sm:p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.methodology}</td>
                                <td className="p-3 sm:p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.manager}</td>
                                <td className="p-3 sm:p-4 bg-[#FBFAFF] text-[#4C586F] border-r border-[#C2C0F4]">{dev.timezone}</td>
                                <td className="p-3 sm:p-4 bg-[#FBFAFF] text-[#4C586F]">{dev.hours}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className=" w-[122px] h-[229px] bg-[#0060F0] rounded-[144px] blur-[182px] absolute bottom-[150px] left-0"></div>

        </div>
    );
}
