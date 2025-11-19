import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientReviews() {
    const reviews = [
        {
            title: (
                <>
                    Smart <b>Tax Management App</b> Built for <b>Taxley</b>
                </>
            ),
            appUsed: ["Flutter", "NodeJS", "GCP", "Socket.IO"],
            description:
                "Kretoss developed a fast and user-friendly tax management app for Taxley, simplifying filings, tracking, and document handling with a clean and intuitive interface.",
            rating: 5,
            clientImage: "/assets/images/mobile-app/reviews/client-2.jpg",
            clientName: "Samantha Miller",
            clientPosition: "Founder of Taxley",
            reviewImage: "/assets/images/mobile-app/reviews/review2.jpg",
        },
        {
            title: (
                <>
                    Modern <b>App Experience</b> Designed for <b>Drawn Dating</b>
                </>
            ),
            appUsed: ["React Native"],
            description:
                "Working with Kretoss was a great experience. The app design is modern, clean, and perfectly matches our brand. Every feature works seamlessly, and the delivery was right on schedule. Highly recommended for reliable development work.",
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-1.jpg",
            clientName: "Ethan Collins",
            clientPosition: "Founder of Drawn Dating",
            reviewImage: "/assets/images/mobile-app/reviews/review1.jpg",
        },
        {
            title: (
                <>
                    Reliable <b>City2City</b> Travel Booking App — Built for Comfort & Convenience
                </>
            ),
            appUsed: ["Flutter", "NodeJS", "MongoDB", "Socket.IO"],
            description:
                "Kretoss delivered a smooth and intuitive travel booking app for City2City, offering fast search, easy reservations, and a seamless user experience across all devices.",
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-4.jpg",
            clientName: "Rebekah Johnson",
            clientPosition: "CEO of City2City",
            reviewImage: "/assets/images/mobile-app/reviews/review4.png",
        },
        {
            title: (
                <>
                    Innovative <b>Mobile App</b> Built for <b>Roamaly Travel App</b>
                </>
            ),
            appUsed: ["Flutter", "Shopify"],
            description:
                "The Kretoss team exceeded our expectations with a creative and high-quality travel app. Every detail was handled professionally, from UI design to backend setup. The experience was smooth, responsive, and truly impressive.",
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-5.jpg",
            clientName: "Lucas Bennett",
            clientPosition: "Founder of Roamaly",
            reviewImage: "/assets/images/mobile-app/reviews/review5.png",
        },
        {
            title: (
                <>
                    Seamless <b>Wellness Platform</b> for <b>Somnexis</b> — Designed to Inspire
                </>
            ),
            appUsed: ["Flutter", "Laravel", "MySQL"],
            description:
                "Kretoss delivered a flawless wellness app that perfectly captures our mission. Their expertise, communication, and design approach made development effortless. I’m confident this is the team for all our future projects.",
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-3.jpg",
            clientName: "Ryan Mitchell",
            clientPosition: "Founder of Somnexis",
            reviewImage: "/assets/images/mobile-app/reviews/review6.png",
        },
        {
            title: (
                <>
                    Powerful <b>Food Delivery Platform</b> for <b>Offarat</b> — Built for Speed & Scale
                </>
            ),
            appUsed: ["Flutter", "NodeJS", "MongoDB"],
            description:
                "Kretoss delivered a smooth, fast, and high-quality food delivery app for Offarat. Truly an outstanding development partner.",
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-6.jpg",
            clientName: "Michael Anderson",
            clientPosition: "Co-Founder of Offarat",
            reviewImage: "/assets/images/mobile-app/reviews/review3.png",
        },
        {
            title: (
                <>
                    Smart <b>Fitness Scheduling Platform</b> for <b>TriSchedule</b> — Built for Efficiency
                </>
            ),
            appUsed: ["Flutter", "Laravel", "SQL"],
            description:
                <>
                    Kretoss delivered a sleek and powerful fitness scheduling app for TriSchedule, complete with seamless <b>Apple Watch</b> and <b>Garmin integration</b>. The performance, usability, and attention to detail were outstanding.
                </>
            ,
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-7.jpg",
            clientName: "James Walker",
            clientPosition: "Founder of TriSchedule",
            reviewImage: "/assets/images/mobile-app/reviews/review7.png",
        },
        {
            title: (
                <>
                    Dynamic <b>Music Streaming Platform</b> for <b>Kolderkid Universe</b> — Built for Creators
                </>
            ),
            appUsed: ["React Native", "Laravel", "SQL"],
            description: (
                <>
                    Kretoss developed a fast, intuitive, and beautifully crafted music app for Kolderkid Universe, delivering seamless playback, smooth navigation, and an exceptional user experience tailored for artists and listeners alike.
                </>
            ),
            rating: 4,
            clientImage: "/assets/images/mobile-app/reviews/client-8.jpg",
            clientName: "Daniel Brooks",
            clientPosition: "Founder of Kolderkid Universe",
            reviewImage: "/assets/images/mobile-app/reviews/review8.png",
        }

    ];

    const [imageLoaded, setImageLoaded] = useState(true);
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % reviews.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const review = reviews[current];

    const variants = {
        enter: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 80 : -80,
        }),
        center: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
        exit: (direction) => ({
            opacity: 0,
            x: direction < 0 ? 80 : -80,
            transition: { duration: 0.5, ease: "easeInOut" },
        }),
    };

    const [touchStartX, setTouchStartX] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;

        const diff = touchStartX - e.changedTouches[0].clientX;

        if (diff > 50) {
            handleNext();
        } else if (diff < -50) {
            handlePrev();
        }

        setTouchStartX(null);
    };

    return (
        <div className="container section max-auto container_content">
            <h1
                className="max-w-[1100px] mx-auto text-[26px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-semibold text-[#02021E] text-center relative"
            >
                A Showcase of Our{" "}
                <span className="relative inline-block text-[#5D59EA]">
                    Global Client
                    <img
                        src={process.env.PUBLIC_URL + "/assets/images/mobile-app/underline.svg"}
                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[12px]"
                    />
                </span>{" "}
                Solutions
            </h1>

            <div className="relative mt-[60px] flex justify-center">
                <div
                    className="h-full lg:h-[600px] w-full rounded-[16px] transition-all duration-500 ease-in-out overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(96.57deg, #FCE6FF 0.24%, rgba(255, 255, 255, 0.8) 99.76%)",
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="grid grid-cols-1 lg:grid-cols-2 h-full"
                        >
                            <div className="py-[40px] lg:py-[20px] px-[50px] md:px-[50px] flex flex-col justify-center">
                                <h1 className="w-full text-[22px] md:text-[32px] text-[#02021E] leading-[46px]">
                                    {review.title}
                                </h1>

                                <div className="flex items-center mt-[9px]">
                                    <p className="text-[15px] font-bold flex flex-wrap gap-2 mt-2">
                                        {review.appUsed.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#486FEB]/10 text-[#486FEB] text-[15px] font-semibold px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </p>

                                </div>

                                <div className="mt-[22px]">
                                    <p className="text-[15px] 2xl:text-[16px] text-[#000000CC] max-w-[480px] leading-[28px]">
                                        “{review.description}”
                                    </p>
                                </div>

                                <div className="flex justify-center md:justify-start mt-[20px] gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <img
                                            key={i}
                                            src={
                                                i < review.rating
                                                    ? process.env.PUBLIC_URL + "/assets/images/mobile-app/reviews/fillstar.svg"
                                                    : process.env.PUBLIC_URL + "/assets/images/mobile-app/reviews/unfillstar.svg"
                                            }
                                            alt="star"
                                            className="w-[20px] h-[20px]"
                                        />
                                    ))}
                                </div>

                                <div className="mt-[20px] flex justify-center md:justify-start gap-[10px] items-center">
                                    <img
                                        src={process.env.PUBLIC_URL + review.clientImage}

                                        className="w-[45px] border-2 border-[#FFFFFF] rounded-full"
                                        alt={review.clientName}
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-[16px] font-semibold text-[#000000]">
                                            {review.clientName}
                                        </p>
                                        <span className="text-[15px] text-[#000000CC]">
                                            {review.clientPosition}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="h-full">
                                {imageLoaded ? (
                                    <img
                                        src={process.env.PUBLIC_URL + review.reviewImage}
                                        onError={() => setImageLoaded(false)}
                                        className="rounded-[16px] h-full w-full object-cover"
                                        alt={review.clientName}
                                    />
                                ) : (
                                    // Skeleton
                                    <div className="animate-pulse bg-gray-200 rounded-[16px] w-full h-[300px] lg:h-[600px]"></div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={handlePrev}
                    className="absolute right-aero  bg-[#1A1A1A] border-[4px] border-[#FFFFFF] rounded-full px-4 py-4 cursor-pointer hover:scale-105 transition-transform"
                    style={{
                        boxShadow: "0px 6px 20px -6px #1E2E4826",
                    }}
                >
                    <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/reviews/left.svg"} alt="Previous" />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute left-aero bg-[#1A1A1A] border-4 border-[#FFFFFF] rounded-full px-4 py-4 cursor-pointer hover:scale-105 transition-transform"
                    style={{
                        boxShadow: "0px 6px 20px -6px #1E2E4826",
                    }}
                >
                    <img src={process.env.PUBLIC_URL + "/assets/images/mobile-app/reviews/right.svg"} alt="Next" />
                </button>
            </div>
        </div>
    );
}

