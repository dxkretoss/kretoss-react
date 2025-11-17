import React, { useState } from 'react'

export default function SkillsSolutions() {

    const categories = {
        "App Development": [
            { name: "iOS", icon: "/assets/images/mobile-app/skills/ios.svg" },
            { name: "Android", icon: "/assets/images/mobile-app/skills/android.svg" },
            { name: "Swift", icon: "/assets/images/mobile-app/skills/swift.svg" },
            { name: "Kotlin", icon: "/assets/images/mobile-app/skills/kotlin.svg" },
            { name: "Flutter", icon: "/assets/images/mobile-app/skills/flutter.svg" },
            { name: "Python", icon: "/assets/images/mobile-app/skills/python.svg" },
        ],
        "Web Development": [
            { name: "NodeJS", icon: "/assets/images/mobile-app/skills/nodejs.svg" },
            { name: "PHP", icon: "/assets/images/mobile-app/skills/php.svg" },
            { name: "Codeigniter", icon: "/assets/images/mobile-app/skills/codeIgniter.svg" },
            { name: "Laravel", icon: "/assets/images/mobile-app/skills/laravel.svg" },
            { name: "Java Spring Boot", icon: "/assets/images/mobile-app/skills/spring.svg" },
            { name: "Python", icon: "/assets/images/mobile-app/skills/python1.svg" },
        ],
        "Front-End": [
            { name: "Angular", icon: "/assets/images/mobile-app/skills/angular.svg" },
            { name: "React JS", icon: "/assets/images/mobile-app/skills/React.svg" },
            { name: "Knockout JS", icon: "/assets/images/mobile-app/skills/knock.svg" },
            { name: "Express JS", icon: "/assets/images/mobile-app/skills/express.svg" },
            { name: "Vue.js", icon: "/assets/images/mobile-app/skills/Vue.js.svg" },
            { name: "Svelte", icon: "/assets/images/mobile-app/skills/Svelte.svg" },
        ],
        "Back-End": [
            { name: "NodeJS", icon: "/assets/images/mobile-app/skills/nodejs.svg" },
            { name: "Python", icon: "/assets/images/mobile-app/skills/python1.svg" },
            { name: "Java", icon: "/assets/images/mobile-app/skills/java.svg" },
            { name: "Express JS", icon: "/assets/images/mobile-app/skills/express.svg" },
            { name: "Spring", icon: "/assets/images/mobile-app/skills/spring.svg" },
            { name: "Laravel", icon: "/assets/images/mobile-app/skills/laravel.svg" },
        ],
        Microsoft: [
            { name: "ASP.NET", icon: "/assets/images/mobile-app/skills/dontnet.svg" },
            { name: "C#", icon: "/assets/images/mobile-app/skills/c.svg" },
            { name: "ASP.NET Core", icon: "/assets/images/mobile-app/skills/NET_Core.svg" },
            { name: "GitHub", icon: "/assets/images/mobile-app/skills/git.svg" },
            { name: "SQL", icon: "/assets/images/mobile-app/skills/Sql_data.svg" },
            { name: "Power Apps", icon: "/assets/images/mobile-app/skills/Powerapps.svg" },
        ],
        "Open Source": [
            { name: "WordPress", icon: "/assets/images/mobile-app/skills/wordpress.svg" },
            { name: "Magento", icon: "/assets/images/mobile-app/skills/magento.svg" },
            { name: "WooCommerce", icon: "/assets/images/mobile-app/skills/woo.svg" },
            { name: "Shopify", icon: "/assets/images/mobile-app/skills/shopify.svg" },
            { name: "Drupal", icon: "/assets/images/mobile-app/skills/drupal.svg" },
            { name: "Bagisto", icon: "/assets/images/mobile-app/skills/bagisto.svg" },
        ],
        Database: [
            { name: "MySQL", icon: "/assets/images/mobile-app/skills/Sql_data.svg" },
            { name: "Oracle", icon: "/assets/images/mobile-app/skills/oracle.svg" },
            { name: "MongoDB", icon: "/assets/images/mobile-app/skills/mongo.svg" },
            { name: "MariaDB", icon: "/assets/images/mobile-app/skills/maria.svg" },
            { name: "SQLite", icon: "/assets/images/mobile-app/skills/sqlite.svg" },
            { name: "Redis", icon: "/assets/images/mobile-app/skills/redis.svg" },
        ],
        Servers: [
            { name: "Amazon Web Services", icon: "/assets/images/mobile-app/skills/aws.svg" },
            { name: "Google Cloud", icon: "/assets/images/mobile-app/skills/google.svg" },
            { name: "Microsoft Azure", icon: "/assets/images/mobile-app/skills/micro-azure.svg" },
            { name: "IBM Cloud", icon: "/assets/images/mobile-app/skills/ibm.svg" },
            { name: "Oracle Cloud", icon: "/assets/images/mobile-app/skills/oracle-cloud.svg" },
            { name: "DigitalOcean", icon: "/assets/images/mobile-app/skills/digitalocean.svg" },
        ],
        DevOps: [
            { name: "Kubernetes", icon: "/assets/images/mobile-app/skills/kuber.svg" },
            { name: "Jenkins", icon: "/assets/images/mobile-app/skills/jenkins.svg" },
            { name: "Chef", icon: "/assets/images/mobile-app/skills/chef.svg" },
            { name: "Maven", icon: "/assets/images/mobile-app/skills/maven.svg" },
            { name: "Docker", icon: "/assets/images/mobile-app/skills/docer.svg" },
            { name: "OpenShift", icon: "/assets/images/mobile-app/skills/openswift.svg" },
        ],
    };

    const [activeTab, setActiveTab] = useState("App Development");
    return (
        <div
            className="relative container mx-auto container_content section h-auto 2xl:h-[750px] rounded-[24px]"
            style={{
                background: "linear-gradient(96.57deg, #FFFFFF 0.24%, #ECE6FF 99.76%)",
            }}
        >
            <div className='max-w-[900px] 2xl:max-w-[1300px] mx-auto pt-[50px] 2xl:pt-[113px]'>
                <h1
                    className="mx-auto text-[24px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-semibold text-[#02021E] text-center relative"
                >
                    Our Skilled Developers Use Their Technical Expertise To Deliver {" "}
                    <span className="relative inline-block text-[#5D59EA]">
                        Top-Quality, High-Performing
                        <img
                            src="/assets/images/mobile-app/underline.svg"
                            alt=""

                            className="absolute left-1/2 -translate-x-1/2 -bottom-1 translate-y-[12px]"
                        />
                    </span>{" "}
                    Solutions.
                </h1>
            </div>

            <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:left-20 2xl:-top-5 2xl:left-20">
                <div className="relative">
                    <div
                        className="w-[182px] h-[80px] bg-[#FFFFFF] rounded-[10px] flex flex-col items-center justify-center gap-2"
                        style={{
                            boxShadow: "13px 14px 40px 0px #27628326",
                        }}
                    >
                        <img src="/assets/images/mobile-app/Highq.svg" alt="Quick Support" className="absolute -top-5" />
                        <span className="text-[20px] font-semibold text-[#020817] text-center absolute top-10">
                            Highly Qualified
                        </span>
                    </div>
                </div>
            </div>

            <div className="relative pb-[50px] overflow-visible ">
                <div className="relative z-10 max-w-[1460px] gap-2 px-[30px] py-[19px] mx-auto h-[80px] 2xl:h-[100px] rounded-[100px] bg-[#5D59EA] mt-[50px] flex justify-between items-center overflow-x-auto overflow-y-hidden scrollbar-hide">
                    {Object.keys(categories).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`h-[51px] 2xl:h-[61px] px-4 py-2 rounded-full text-[15px] xl:text-[16px] 2xl:text-[18px] cursor-pointer font-medium whitespace-nowrap transition-all duration-300 ${activeTab === tab
                                ? "bg-white text-[#5D59EA] shadow-md"
                                : "hover:bg-[#6C68F5] text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>


                <div className="relative z-0 w-[89%] lg:w-[93%] 2xl:w-[87%] h-auto 2xl:h-[247px] -mt-2  justify-center items-center mx-auto grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center bg-white border rounded-b-[24px] border-[#02021E33]  py-6">
                    {categories[activeTab].map((item) => (
                        <div
                            key={item.name}
                            className="flex flex-col items-center gap-2 text-gray-700"
                        >
                            <div className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] 2xl:w-[80px] 2xl:h-[80px] flex justify-center items-center bg-[#FFFFFF] border border-[#02021E33] shadow-[#9E9E9E40] rounded-full px-3 py-2 2xl:px-5 2xl:py-4'>
                                <img src={item.icon} />
                            </div>
                            <span className="text-[15px] xl:text-[16px] 2xl:text-[20px] font-medium text-[#02021E] mt-[11px] text-center">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
