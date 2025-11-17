import React from 'react'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ScalableSection from '../components/ScalableSection'
import Solution from '../components/Solution'
import Support from '../components/Support'
import Plans from '../components/Plans'
import GlobalExp from '../components/GlobalExp'
import Devlopment from '../components/Devlopment'
import SkillsSolutions from '../components/SkillsSolutions'
import IntoSuccess from '../components/IntoSuccess'
import ClientReviews from '../components/ClientReviews'
import SuccessTogather from '../components/SuccessTogather'
import ProcessHire from '../components/ProcessHire'
import WhyKretoss from '../components/WhyKretoss'
import Faqs from '../components/Faqs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function Home() {
    return (
        <div>
            <TopHeader />
            <Header />
            <Hero />
            <div id="about">
                <ScalableSection />
            </div>
            <div id="industries">
                <Solution />
            </div>
            <div id="services">
                <Support />
            </div>
            <Plans />
            <GlobalExp />
            <div id="hire">
                <Devlopment />
            </div>
            <SkillsSolutions />
            <IntoSuccess />
            <ClientReviews />
            <SuccessTogather />
            <ProcessHire />
            <WhyKretoss />
            <Faqs />
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </div>
    )
}
