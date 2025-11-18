import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ← replace useRouter
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
export default function Form({ title, buttontext, onClose, plan }) {
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
                {
                    ...formData,
                    plan: plan
                }
            );
            if (fillForm?.data?.success) {
                toast.success('Form submitted successfully.');
                onClose();
                setTimeout(() => {
                    router("/thankyou");
                }, 2000);
            }
        } catch (error) {
            console.log("error:", error);
        }
    };
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
            <div className="bg-white w-[650px] max-w-[90%] rounded-[12px] p-8 shadow-lg relative overflow-auto max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-500 text-xl cursor-pointer"
                >
                    ✕
                </button>


                <h2 className="text-[24px] font-semibold text-[#02021E] mb-6 text-center">
                    {title}
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
                                placeholder="John Deo"
                                onChange={handleChange}
                                value={formData.name}
                                className="w-full h-[48px] px-[12px] rounded-[6px] text-[#333] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="john.doe@gmail.com"
                                onChange={handleChange}
                                value={formData.email}
                                className="w-full h-[48px] px-[12px] rounded-[6px] text-[#333]  border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
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
                                className="w-full h-[48px] px-[12px] rounded-[6px] text-[#333]  border border-[#E0E0E0] bg-[#F5F8FC] text-[#666] outline-none"
                            >
                                <option value="">Select project budget</option>
                                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                                <option value="$50,000+">$50,000+</option>
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
                            className="w-full h-[120px] px-[12px] py-[10px] text-[#333]  rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] resize-none outline-none"
                        ></textarea>
                    </div>
                </div>
                <button
                    onClick={() => {
                        handleSubmit();
                    }}
                    className="bg-[#5D59EA] text-white w-full font-semibold py-2 rounded-full mt-2 hover:bg-[#4a47d1] transition"
                    style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                >
                    {buttontext}
                </button>
            </div>
        </div>
    )
}
