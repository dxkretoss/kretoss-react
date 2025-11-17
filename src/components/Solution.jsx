import React from 'react'

export default function Solution() {
    const solutionData = [
        { img: '/assets/images/mobile-app/solutions/edu.svg', txt: 'Education & e-learning' },
        { img: '/assets/images/mobile-app/solutions/ecom.svg', txt: 'Retail Ecommerce' },
        { img: '/assets/images/mobile-app/solutions/health.svg', txt: 'Healthcare & Fitness' },
        { img: '/assets/images/mobile-app/solutions/logi.svg', txt: 'Logistics & Distribution' },
        { img: '/assets/images/mobile-app/solutions/network.svg', txt: 'Social Networking' },
        { img: '/assets/images/mobile-app/solutions/estate.svg', txt: 'Real Estate' },
        { img: '/assets/images/mobile-app/solutions/travel.svg', txt: 'Travel & Tour' },
        { img: '/assets/images/mobile-app/solutions/food.svg', txt: 'Food & Restaurant' },
    ]
    return (
        <div className="container mx-auto section container_content py-12 px-4 sm:px-6 lg:px-8">
            <h1
                className="max-w-[900px] mx-auto text-[26px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-semibold text-center text-[#02021E] relative leading-snug"
            >
                Hire Mobile App Developer for Expertly Crafted{' '}
                <span className="relative inline-block text-[#5D59EA]">
                    Mobile Solutions.
                    <img
                        src="/assets/images/mobile-app/underline.svg"

                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[8px] sm:translate-y-[12px]"
                    />
                </span>
            </h1>

            <div className="max-w-[700px] mx-auto text-center mt-[20px]">
                <span>
                    Hire mobile app developer for customized,high-performing mobile solutions built
                    with expertise. We combine cutting-edge technology and creative design to deliver
                    results-driven apps. Partner with us to bring your vision to life.
                </span>
            </div>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 2xl:grid-cols-8 gap-[5px] justify-items-center">
                {solutionData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center  bg-white border border-[#22222224] rounded-[22px] p-5 sm:p-6 w-full h-[160px] sm:h-[180px]"
                        style={{ boxShadow: '0px 0px 21px 0px #0000001A' }}
                    >
                        <img src={item.img} className="w-[50px] sm:w-[42px] 2xl:w-[62px] h-[50px] sm:h-[62px]" />
                        <span className="text-[#02021E] font-medium text-[15px] sm:text-[16px] 2xl:text-[22px] mt-4 sm:mt-5 text-center">
                            {item.txt}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
