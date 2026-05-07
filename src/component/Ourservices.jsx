import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

const Ourservices = () => {
    const services = [
        { id: 1, title: "Digital PR", img: "/image1.png" },
        { id: 2, title: "Organic Social & Content", img: "/image3.png" },
        { id: 3, title: "Search & Growth Strategy", img: "/image2.png" },
        { id: 4, title: "Content Experience", img: "/image5.jpg" },
        { id: 5, title: "Data & Insights", img: "/image4.JPG" },
        { id: 6, title: "Onsite SEO", img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=accb871028ea5d83e4420bc1b5e4cb6c" },
    ];

    return (
        <section className=" py-20 px-6 md:px-10 font-sans text-[#1a1a1a]">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-300 pb-8 gap-6">
                    <h2 className="text-6xl md:text-[100px] font-500 tracking-tight flex items-center gap-4">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative h-20 md:h-24 border-b border-gray-300 flex items-center px-2 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0">
                                <img
                                    src={service.img}
                                    className="w-full h-full object-cover rounded-full p-1"
                                    alt={service.title}
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-full m-1"></div>
                            </div>

                            <div className="relative z-10 flex items-center gap-2 md:gap-4 transition-all duration-500 group-hover:text-white group-hover:pl-4">

                                <div className="overflow-hidden w-0 group-hover:w-10 md:group-hover:w-14 transition-all duration-500 ease-in-out">
                                    <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        <MdOutlineArrowOutward className="text-3xl md:text-5xl text-white" />
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-[50px] font-500 tracking-tight leading-tight whitespace-nowrap">
                                    {service.title}
                                </h3>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ourservices;