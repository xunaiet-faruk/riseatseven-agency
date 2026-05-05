import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

const Ourservices = () => {
    const services = [
        { id: 1, title: "Digital PR", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500" },
        { id: 2, title: "Organic Social & Content", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500" },
        { id: 3, title: "Search & Growth Strategy", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500" },
        { id: 4, title: "Content Experience", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500" },
        { id: 5, title: "Data & Insights", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" },
        { id: 6, title: "Onsite SEO", img: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=500" },
    ];

    return (
        <section className="bg-[#f3f3f3] py-20 px-6 md:px-10 font-sans text-[#1a1a1a]">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-300 pb-8 gap-6">
                    <h2 className="text-6xl md:text-[100px] font-500 font-sans tracking-tight flex items-center gap-4">
                        Our
                        <span className="inline-block w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200"
                                alt="office"
                                className="w-full h-full object-cover"
                            />
                        </span>
                        Services
                    </h2>
                    <button className="bg-white border border-gray-200 mt-5 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-black hover:text-white transition-all duration-300 shadow-sm">
                        View All Services <MdOutlineArrowOutward />
                    </button>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative h-20 md:h-24 border-b border-gray-300 flex items-center px-4 md:px-2 cursor-pointer overflow-hidden"
                        >
                            <h3 className="text-2xl md:text-[50px] font-500 tracking-tight transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                                {service.title}
                            </h3>

                            {/* ২. হোভার লেয়ার (ইমেজ + অ্যানিমেটেড কন্টেন্ট) */}
                            <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10">
                                {/* ইমেজ ব্যাকগ্রাউন্ড */}
                                <img
                                    src={service.img}
                                    className="w-full h-full object-cover rounded-full p-1"
                                    alt={service.title}
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-full m-1"></div>

                                {/* ৩. হোভার কন্টেন্ট (টেক্সট এবং আইকন যা নিচ থেকে আসবে) */}
                                <div className="absolute inset-0 flex items-center justify-between px-6 md:px-10 text-white">
                                    <div className="flex items-center gap-4 overflow-hidden">
                                        {/* আইকন অ্যানিমেশন */}
                                        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                            <MdOutlineArrowOutward className="text-3xl md:text-4xl" />
                                        </div>
                                        {/* টেক্সট অ্যানিমেশন */}
                                        <h3 className="text-2xl md:text-4xl font-medium tracking-tight transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ourservices;