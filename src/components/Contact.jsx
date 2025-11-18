import { useState } from 'react';
import { useNavigate } from "react-router-dom"; // ← replace useRouter
import toast from 'react-hot-toast';
import axios from "axios";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
export default function Contact() {
    const router = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
        plan: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];
    const handleSubmit = async () => {
        if (!formData.name.trim()) return toast.error("Name is required");
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email))
            return toast.error("Enter a valid email address");
        const emailDomain = formData.email.split("@")[1];
        if (!allowedDomains.includes(emailDomain.toLowerCase())) {
            return toast.error("Please Enter a valid email address ");
        }
        if (!formData.phone.trim()) return toast.error("Phone number is required");
        const cleaned = formData.phone.replace(/\D/g, ""); // keep digits only

        if (cleaned.length < 8) {
            return toast.error("Enter a valid phone number");
        }
        const repeatedPatterns = [
            "1111111111", "2222222222", "3333333333",
            "4444444444", "5555555555", "6666666666",
            "7777777777", "8888888888", "9999999999",
            "0000000000", "1234567890", "0123456789"
        ];
        if (repeatedPatterns.includes(formData.phone)) {
            return toast.error("Enter a valid phone number");
        }
        if (!formData.budget.trim()) return toast.error("Budget is required");
        if (!formData.message.trim()) return toast.error("Message is required");
        if (formData.message.length > 1999)
            return toast.error("Message is too large");
        try {
            const fillForm = await axios.post(
                "https://shopifycustom.kretosstechnology.com/api/v1/kretoss/form",
                formData
            );
            if (fillForm?.data?.success) {
                toast.success('Form submitted successfully.');
                setTimeout(() => {
                    router("/thankyou");
                }, 2000);
            }
        } catch (error) {
            console.log("error:", error);
        }
    };
    return (
        <div
            className="section w-full py-[80px] md:py-[100px] bg-gradient-to-r from-[#F8F8F8] to-[#E6F0FF]"
        >
            <div className="container container_content mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[56px] items-start justify-center">

                    <div
                        className="w-full lg:w-1/2 bg-white rounded-[12px] p-[20px] sm:p-[30px] md:p-[40px] border border-[#E0E0E0] shadow-md"
                    >
                        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#5D59EA] mb-[24px]">
                            Let’s Talk
                        </h2>

                        <div className="flex flex-col gap-[20px]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                <div>
                                    <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                        Name
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="John Deo"
                                        onChange={handleChange}
                                        value={formData.name}
                                        className="w-full h-[48px] px-[12px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="john.doe@gmail.com"
                                        onChange={handleChange}
                                        value={formData.email}
                                        className="w-full h-[48px] px-[12px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                                <div>
                                    <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                        Phone Number
                                    </label>
                                    <PhoneInput
                                        country={'in'}
                                        value={formData.phone}
                                        onChange={(phone) => setFormData({ ...formData, phone })}
                                        inputClass="w-full h-[48px] px-[20px] rounded-[6px] text-[#000000] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                                        containerClass="w-full"
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                        Budget
                                    </label>
                                    <select
                                        name="budget"
                                        onChange={handleChange}
                                        value={formData.budget}
                                        className="w-full h-[48px] px-[12px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] text-[#666] outline-none"
                                    >
                                        <option>Select project budget</option>
                                        <option>$1,000 - $5,000</option>
                                        <option>$5,000 - $10,000</option>
                                        <option>$10,000 - $50,000</option>
                                        <option>$50,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    onChange={handleChange}
                                    value={formData.message}
                                    placeholder="Tell us about your requirements..."
                                    className="w-full h-[120px] px-[12px] py-[10px] rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] resize-none outline-none"
                                ></textarea>
                            </div>

                            <button
                                onClick={() => handleSubmit()}
                                className="w-[160px] sm:w-[180px] h-[48px] sm:h-[50px] rounded-[8px] bg-[#5D59EA] text-white font-semibold hover:bg-[#4a46d4] transition-all shadow-[0_4px_10px_rgba(93,89,234,0.4)] cursor-pointer"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[22px] sm:text-[24px] font-bold text-[#5D59EA] mb-[20px]">
                            Get in Touch
                        </h2>
                        <p className="text-[#000000B2] text-[14px] sm:text-[18px] leading-relaxed mb-[20px]">
                            Our skilled mobile app developers are ready to help you streamline your processes and elevate your business performance.
                        </p>

                        <div className="flex flex-col gap-[25px]">
                            <div className="flex gap-[16px] items-start">
                                <img src="/assets/images/mobile-app/email.svg" alt="email" />
                                <div>
                                    <p className="text-[18px] font-semibold text-[#000]">Email Us</p>
                                    <span className="text-[#323233] text-[16px]">info@kretoss.com</span>
                                </div>
                            </div>

                            <div className="flex gap-[16px] items-start">
                                <img src="/assets/images/mobile-app/wp.svg" alt="whatsapp" />
                                <div>
                                    <p className="text-[18px] font-semibold text-[#000]">WhatsApp Us</p>
                                    <span className="text-[#323233] text-[16px]">(+91) 63534-23473</span>
                                </div>
                            </div>

                            <div className="flex gap-[16px] items-start">
                                <img src="/assets/images/mobile-app/loc.svg" alt="location" />
                                <div className="flex flex-col gap-[10px] w-full">
                                    <div className="flex flex-col">
                                        <p className="text-[18px] font-semibold text-[#000]">Visit Us</p>
                                    </div>

                                    <div className='flex flex-col  gap-[15px]'>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mt-1">
                                                <img src="/assets/images/mobile-app/india.svg" alt="india" />
                                                <span className="text-[#323233] text-[16px]">India</span>
                                            </div>
                                            <span className="text-[#323233] text-[15px] mt-3 max-w-[400px]">
                                                B-1007, Shilp Corporate Park, Near Rajpath Club, Rajpath-Rangoli Road, Ahmedabad. 380054
                                            </span>
                                        </div>

                                        <div className="flex flex-col mt-[0px] lg:mt-[15px]">
                                            <div className="flex items-center gap-2 mt-[25px] sm:mt-0">
                                                <img src="/assets/images/mobile-app/usa.svg" alt="usa" />
                                                <span className="text-[#323233] text-[16px]">United States</span>
                                            </div>
                                            <span className="text-[#323233] text-[15px] mt-3 max-w-[400px]">
                                                9245 East Wood Drive, SCOTTSDALE, AZ 85260
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-white border border-[#E0E0E0] mt-[24px] rounded-[12px] px-[15px] py-[15px] shadow-sm">
                            <h1 className="text-[16px] text-[#000000] font-bold">Kretoss Technology</h1>
                            <span className="text-[#323233] text-[15px] sm:text-[16px] font-medium leading-relaxed block mt-1">
                                Need a mobile app for your business? Hire our expert mobile app developers to build tailored solutions that perfectly fit your goals and requirements.
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
}
