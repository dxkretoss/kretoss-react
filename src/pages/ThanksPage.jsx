import React, { useEffect } from 'react'
import { ArrowLeft } from "lucide-react";

export default function ThanksPage() {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "pageview",
            page: "/hire-mobile-app-developers/thankyou",
        });
    }, []);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-[#efffef] text-center px-4">
            <img
                src={process.env.PUBLIC_URL + "/assets/images/mobile-app/logo.svg"}
                alt="Kretoss Technology"
            />

            <img
                src={process.env.PUBLIC_URL + "/assets/images/mobile-app/points.svg"}
                alt="Kretoss Technology"
                className='w-[100px]'
            />

            <h1 className="text-xl font-semibold mb-2">
                Your message has been received. <br />
                We will get back to you soon.
            </h1>

            {/* <a
                href="https://www.linkedin.com/company/kretoss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md font-medium hover:shadow-lg transition mb-6"
            >
                <Linkedin className="text-[#6E56CF]" size={18} />
                LinkedIn
            </a> */}

            <a
                href="/hire-mobile-app-developers"
                className="flex items-center justify-center gap-2 bg-[#6E56CF] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#5b47c5] transition"
            >
                <ArrowLeft size={18} />
                Back to Website
            </a>
        </div>
    )
}
