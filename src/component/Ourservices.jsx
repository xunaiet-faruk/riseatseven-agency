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
        <section className="py-20 px-6 md:px-10 font-sans text-[#1a1a1a]">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:border-b md:border-gray-300 md:pb-8 lg:pb-8 gap-6">
                    {/* Heading - Small: 2 lines, Medium/Large: row layout */}
                    <div className="w-full sm:w-auto">
                        {/* Small device heading - 2 lines */}
                        <h2 className="block sm:hidden text-6xl font-500 tracking-tight">
                            Our
                            <span className="inline-block w-16 h-16 rounded-2xl ml-2 overflow-hidden shadow-lg align-middle mx-1">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200"
                                    alt="office"
                                    className="w-full h-full object-cover"
                                />
                            </span><br />
                            Services
                        </h2>

                        {/* Medium & Large device heading - row layout */}
                        <h2 className="hidden  sm:flex items-center gap-2 md:gap-4 text-5xl sm:text-6xl md:text-6xl lg:text-[100px] md:text-[75px] font-500 tracking-tight">
                            <span>Our</span>
                            <span className="inline-block w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200"
                                    alt="office"
                                    className="w-full h-full object-cover"
                                />
                            </span>
                            <span>Services</span>
                        </h2>
                    </div>

                    {/* Button - Hidden on small devices, visible on medium/large */}
                    <div className="hidden sm:flex justify-start sm:justify-center">
                        <button className="group relative overflow-hidden bg-white 
        w-fit h-[45px] md:h-[52px] px-6
        rounded-full text-sm font-semibold 
        flex items-center gap-2 whitespace-nowrap
        
        transition-all duration-300 shadow-sm">

                            {/* এনিমেশন কন্টেইনার */}
                            <div className="relative h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">

                                {/* প্রথম টেক্সট ও আইকন */}
                                <span className="flex items-center gap-2 h-full">
                                    View All Services <MdOutlineArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                                </span>

                                {/* দ্বিতীয় টেক্সট ও আইকন */}
                                <span className="absolute top-full flex items-center gap-2 h-full whitespace-nowrap">
                                    View All Services <MdOutlineArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                                </span>

                            </div>
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 md:grid-cols-2 md:gap-x-10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative h-20 md:h-24 border-b border-gray-300 flex items-center px-2 cursor-pointer"
                        >
                            {/* Large device hover effect */}
                            <div className="hidden lg:block absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0">
                                <img
                                    src={service.img}
                                    className="w-full h-full object-cover rounded-full p-1"
                                    alt={service.title}
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-full m-1"></div>
                            </div>

                            {/* Medium & Small devices - Image thumbnail before text */}
                            <div className="lg:hidden flex items-center gap-3 md:gap-4 w-full">
                                <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden flex-shrink-0">
                                    <img
                                        src={service.img}
                                        className="w-full h-full object-cover"
                                        alt={service.title}
                                    />
                                </div>
                                <h3 className=" sm:text-[30px] font-500 md:text-[30px] font-500 tracking-tight leading-tight">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Large device content with hover arrow */}
                            <div className="hidden lg:flex relative z-10 items-center gap-2 md:gap-4 transition-all duration-500 group-hover:text-white group-hover:pl-4">
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

                {/* Small device button - Bottom of content, full width */}
                <div className="block sm:hidden mt-8">
                    <button className="group relative overflow-hidden bg-white 
        w-full h-[48px] px-4 
        rounded-full text-sm font-semibold 
        flex items-center justify-center gap-2
        hover:bg-black hover:text-white 
        transition-all duration-300 shadow-sm">

                        {/* এনিমেশন কন্টেইনার */}
                        <div className="relative h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">

                            {/* প্রথম টেক্সট ও আইকন */}
                            <span className="flex items-center gap-2 h-full">
                                View All Services <MdOutlineArrowOutward className="text-lg" />
                            </span>

                            {/* দ্বিতীয় টেক্সট ও আইকন */}
                            <span className="absolute top-full flex items-center gap-2 h-full whitespace-nowrap">
                                View All Services <MdOutlineArrowOutward className="text-lg" />
                            </span>

                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Ourservices;