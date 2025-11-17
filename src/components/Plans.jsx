import React, { useState } from "react";
import Form from "./Form";

export default function Plans() {

    const plans = [
        {
            id: 1,
            name: "Monthly Plan",
            mobbuttonduration: "Monthly",
            price: "$2499.00",
            duration: "/Month",
            shortDesc: "Hire best app developers on a flexible monthly plan designed to support ongoing development, updates, and feature enhancements. Ideal for businesses that need continuous support without long-term commitments.",
            img: "/assets/images/mobile-app/plans/monthly.svg",
            features: [
                "Dedicated developer time",
                "Weekly sprints & demos",
                "Bug fixes & maintenance",
            ],
        },
        {
            id: 2,
            name: "Quarterly Plan",
            mobbuttonduration: "Quarterly",
            price: "$6999.00",
            duration: "/Quarter",
            shortDesc: "Hire mobile app developers on a quarterly basis for strategic development cycles, improved planning, and consistent progress. Perfect for scaling projects with predictable timelines and smooth execution.",
            img: "/assets/images/mobile-app/plans/qurter.svg",
            features: [
                "Product roadmap support",
                "Bi-weekly milestones",
                "Priority bug fixes",
            ],
        },
        {
            id: 3,
            name: "Yearly Plan",
            mobbuttonduration: "Yearly",
            price: "$19,999.00",
            duration: "/Year",
            shortDesc: "Hire mobile app developers with a yearly plan to maximize value, optimize performance, and ensure long-term stability. Best for businesses committed to continuous innovation and sustained growth.",
            img: "/assets/images/mobile-app/plans/yearly.svg",
            features: [
                "Dedicated team",
                "Full-cycle delivery",
                "Quarterly strategy reviews",
            ],
        },
    ];

    const [activePlan, setActivePlan] = useState("Quarterly Plan");

    return (
        <div className="relative container section container_content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                <h1
                    className="text-[28px] sm:text-[34px] md:text-[40px] 2xl:text-[48px] font-semibold text-[#02021ECC] relative"
                >
                    <span className="relative inline-block text-[#5D59EA]">
                        Estimated Cost
                        <img
                            src="/assets/images/mobile-app/underline.svg"

                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-3"
                        />
                    </span>{" "}
                    to Hire Mobile App Developers
                </h1>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl">
                    Hire Mobile App Developers in India from <b>Kretoss Technology</b> Starting at
                </p>
            </div>

            <div className="flex justify-center gap-[10px] lg:hidden h-12 mt-10">
                {plans.map((plan) => (
                    <button
                        key={plan.id}
                        onClick={() => setActivePlan(plan.name)}
                        className={`
                px-6 py-2 rounded-full text-[15px] font-medium transition-all duration-300
                ${activePlan === plan.name
                                ? "bg-[#5D59EA] text-white shadow-md"
                                : "border border-[#5D59EA] text-[#5D59EA] bg-transparent"
                            }
            `}
                    >
                        {plan.mobbuttonduration}
                    </button>
                ))}
            </div>

            <div className="flex lg:hidden flex-wrap justify-center gap-6 w-full">
                {plans.filter((plan) => plan.name === activePlan).map((plan) => {
                    const isActive = plan.name === activePlan;
                    return (
                        <PlanCard key={plan.id} plan={plan} isActive={isActive} setActivePlan={setActivePlan} />
                    );
                })}
            </div>

            <div className="hidden lg:flex justify-center gap-6 w-full">
                {plans.map((plan) => {
                    const isActive = plan.name === activePlan;
                    return (
                        <PlanCard key={plan.id} plan={plan} isActive={isActive} setActivePlan={setActivePlan} />
                    );
                })}
            </div>



            <div className=" w-[122px] h-[229px] bg-[#0060F0] rounded-[144px] blur-[182px] absolute bottom-[10px] right-0"></div>
        </div>
    );
}

function PlanCard({ plan, isActive, setActivePlan }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`w-full lg:w-[30%] mt-10 sm:mt-16 rounded-2xl bg-white border p-6 sm:p-8 flex flex-col items-center justify-center transition-all duration-300 
                ${isActive
                    ? "border-[#5D59EA80] shadow-[0px_0px_25px_0px_#5D59EA99]"
                    : "border-[#02021E33]"
                }`}
        >
            <img
                src={plan.img}
                alt={plan.name}
                className="bg-[#E1E0FF] rounded-full p-4 sm:p-5 w-20 h-20"
            />

            <span className="text-[18px] sm:text-[22px] md:text-[28px] 2xl:text-[38px] text-[#02021E] font-semibold mt-4 sm:mt-5">
                {plan.name}
            </span>

            <div
                className="h-20 xl:h-[50px] 2xl:h-[83px] w-full mt-4 sm:mt-5 flex items-center justify-center"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(93, 89, 234, 0.2) 50.23%, rgba(255, 255, 255, 0) 100%)",
                }}
            >
                <span className="text-[18px] sm:text-[22px] md:text-[28px] 2xl:text-[38px] font-bold text-[#5D59EA]">
                    {plan.price}
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-medium text-[#02021E] ml-1">
                    {plan.duration}
                </span>
            </div>

            <span className="mt-4 text-center text-[16px]">
                {plan.shortDesc}
            </span>

            <ul className="list-disc pl-5 sm:pl-6 mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-[#4C586F] text-[16px] font-medium md:text-text-[18px]">
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <button
                onClick={() => {
                    setActivePlan(plan.name)
                    setIsOpen(true)
                }}
                className={`mt-4 sm:mt-6 w-full h-12 sm:h-[60px] text-sm sm:text-[20px] rounded-full transition-all duration-300 flex items-center justify-center
                    ${isActive
                        ? "bg-[#5D59EA] text-white"
                        : "button-border border border-[#5D59EA] text-[#5D59EA] bg-transparent"
                    }`}
                style={isActive ? { boxShadow: "0px 0px 22px 0px #5D59EA99" } : undefined}
            >
                Hire {plan.name.split(" ")[0]}
            </button>

            {isOpen && (
                <Form title={'Hire Mobile App Developer'} buttontext={"Hire"} onClose={() => setIsOpen(false)} plan={plan.name} />
            )}
        </div>
    );
}
