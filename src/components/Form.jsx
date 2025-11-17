import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ← replace useRouter
import toast from 'react-hot-toast';

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

    const handleSubmit = async () => {
        if (!formData.name.trim()) return toast.error("Name is required");
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email))
            return toast.error("Enter a valid email address");
        if (!formData.phone.trim()) return toast.error("Phone number is required");
        if (!/^\d{10}$/.test(formData.phone))
            return toast.error("Enter a valid 10-digit phone number");
        if (!formData.budget.trim()) return toast.error("Budget is required");
        if (!formData.message.trim()) return toast.error("Message is required");
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
                            <input
                                name="phone"
                                type="text"
                                placeholder="123 432 3432"
                                onChange={handleChange}
                                value={formData.phone}
                                className="w-full h-[48px] px-[12px] rounded-[6px] text-[#333]  border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
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
