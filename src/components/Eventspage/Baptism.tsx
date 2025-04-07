"use client";
import React, { useState } from 'react';

const Baptism = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        land: '',
        address: '',
        message: '',
        course: false,
        baptized: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Add your API call or logic here
    };

    return (
        <div className="bg-[#F8F8F8] text-center py-8 px-4 sm:py-12 sm:px-8 lg:px-20 my-14">
            <h1 className="text-2xl sm:text-3xl font-[inter-bold] mb-4">TO BAPTIZE</h1>
            <div className="max-w-4xl mx-auto">
                <p className="italic text-sm sm:text-base mb-4">
                    <strong>Acts 2:38 –</strong> <em>"Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit."</em>
                </p>
                <p className="text-sm sm:text-base text-left mb-6">
                    Baptism is not a requirement for salvation, nor does it cleanse or offer forgiveness of sins. When we read Acts 2:38, the phrase simply means "because of the forgiveness of our sins". Therefore, we are baptized as a result of the forgiveness we have already received through Christ. True forgiveness comes through sincere repentance, paving the way for baptism by immersion not by ablutions. Baptism is an act of obedience that follows conversion, symbolizing our commitment to Christ.
                </p>
                <p className="italic text-sm sm:text-base text-left mb-8">
                    As 1 Peter 3:21 states, baptism is "the pledge of a clear conscience toward God."
                </p>
            </div>

            <div className="bg-[#02021e] text-white p-6 sm:p-8 rounded-xl max-w-4xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-[inter-bold] mb-4">Register for the baptism class or get baptized.</h2>
                <p className="text-sm sm:text-base mb-6">
                    We invite you to take this important step of faith. To register for the baptism course or to be baptized, please fill out the form. Send us your details and we will contact you to arrange an appointment.
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">Full name:</label>
                            <input 
                                name="fullName" 
                                value={formData.fullName} 
                                onChange={handleChange} 
                                className="w-full p-2 rounded text-black  text-sm sm:text-base bg-[#fff]" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">E-mail address:</label>
                            <input 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]" 
                                type="email" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">Phone number:</label>
                            <input 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]" 
                                required 
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">Land:</label>
                        <input 
                            name="land" 
                            value={formData.land} 
                            onChange={handleChange} 
                            className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]" 
                            required 
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">Address:</label>
                        <input 
                            name="address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]" 
                            required 
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block mb-2 text-sm sm:text-base text-left md:text-center font-[inter-bold]">Tell us briefly about you:</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            rows={4} 
                            className="w-full p-2 rounded text-black text-sm sm:text-base bg-[#fff]" 
                            required 
                        />
                    </div>

                    <div className="sm:col-span-3 flex flex-col sm:flex-row gap-4 mt-2">
                        <label className="flex items-center text-sm sm:text-base">
                            <input 
                                type="checkbox" 
                                name="course" 
                                checked={formData.course} 
                                onChange={handleChange} 
                                className="mr-2 h-4 w-4 bg-[#fff]" 
                            />
                            Taufeklass
                        </label>
                        <label className="flex items-center text-sm sm:text-base">
                            <input 
                                type="checkbox" 
                                name="baptized" 
                                checked={formData.baptized} 
                                onChange={handleChange} 
                                className="mr-2 h-4 w-4 bg-[#fff]" 
                            />
                            Get baptized
                        </label>
                    </div>

                    <div className="sm:col-span-3 mt-6">
                        <button 
                            type="submit" 
                            className="w-full sm:w-auto mx-auto bg-[#FF0000] hover:bg-red-700 text-white py-2 px-8 rounded text-sm sm:text-base red-button font-[inter-bold]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Baptism;