import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const ServicesCard = () => {
    // এখানে সার্ভিসের নামগুলো আছে, আপনি চাইলে আরও অ্যাড বা রিমুভ করতে পারবেন
    const column1 = ["Search & Growth Strategy", "Onsite SEO", "Content Experience", "B2B Marketing"];
    const column2 = ["Digital PR", "Social Media & Campaigns", "Data & Insights", "Social SEO/Search"];

    return (
        <div className="container mx-auto px-4 my-10">
            {/* কার্ড কন্টেইনার: max-w-4xl দিয়ে উইডথ এবং h-auto বা নির্দিষ্ট হাইট কন্ট্রোল করা যায় */}
            <div className="bg-white rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm max-w-4xl mx-auto border border-gray-100 min-h-[300px]">

                {/* বাম পাশ: টেক্সট কন্টেন্ট */}
                <div className="w-full md:flex-1">
                    <p className="text-gray-400 font-bold text-[10px] mb-3 uppercase tracking-widest">
                        Core Services
                    </p>

                    {/* গ্রিড লেআউট: মোবাইলে ১ কলাম, বড় স্ক্রিনে ২ কলাম */}
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

                {/* ডান পাশ: ইমেজ সেকশন (এটার হাইট কমালে পুরো কার্ডের হাইট কমবে) */}
                <div className="relative w-full md:w-[280px] h-[220px] md:h-[240px] rounded-2xl overflow-hidden group">
                    <img
                        src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=600&q=80"
                        alt="Services"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* ফ্লিপ বাটন অ্যানিমেশন */}
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