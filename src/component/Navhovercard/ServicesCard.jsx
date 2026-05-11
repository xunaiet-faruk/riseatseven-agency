import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const ServicesCard = () => {
    const column1 = ["Search & Growth Strategy", "Onsite SEO", "Content Experience", "B2B Marketing"];
    const column2 = ["Digital PR", "Social Media & Campaigns", "Data & Insights", "Social SEO/Search"];

    return (
        <div className="container mx-auto px-4 my-10">
            {}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm max-w-4xl mx-auto border border-gray-100 min-h-[300px]">

                {}
                <div className="w-full md:flex-1">
                    <p className="text-gray-400 font-bold text-[10px] mb-3 uppercase tracking-widest">
                        Core Services
                    </p>

                    {}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                        <div className="space-y-1">
                            {column1.map((item, i) => (
                                <h3 key={i} className="text-[17px] md:text-[18px] font-bold tracking-tight text-black hover:text-gray-500 cursor-pointer transition-all">
                                    {item}
                                </h3>
                            ))}
                        </div>
                        <div className="space-y-1">
                            {column2.map((item, i) => (
                                <h3 key={i} className="text-[17px] md:text-[18px] font-bold tracking-tight text-black hover:text-gray-500 cursor-pointer transition-all">
                                    {item}
                                </h3>
                            ))}
                        </div>
                    </div>
                </div>

                {}
                <div className="relative w-full md:w-[280px] h-[220px] md:h-[240px] rounded-2xl overflow-hidden group">
                    <img
                        src="https://rise-atseven.transforms.svdcdn.com/production/images/data.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751376823&s=8f73bd18c8daf6cdf9b073101bc82758"
                        alt="Services"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {}
                    <div className="absolute bottom-3 left-3">
                        <button className="group/btn relative overflow-hidden bg-[#111212] text-white h-[35px] px-4 rounded-full font-bold text-[11px] shadow-lg">
                            <div className="relative h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover/btn:-translate-y-full">
                                <span className="flex items-center gap-1.5 h-full whitespace-nowrap">
                                    View All Services <MdOutlineArrowOutward size={14} />
                                </span>
                                <span className="absolute top-full flex items-center gap-1.5 h-full whitespace-nowrap">
                                    View All Services <MdOutlineArrowOutward size={14} />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesCard;
