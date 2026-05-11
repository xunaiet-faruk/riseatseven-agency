import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const IndustriesCard = () => {
    return (
        <div className="p-4">
            {}
            <div className="bg-white group relative w-full max-w-[560px] h-[230px] rounded-[2rem] p-4 flex items-center justify-between shadow-sm border border-gray-50 overflow-hidden transition-all duration-500 hover:shadow-xl">

                {}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-black leading-tight">
                        B2B Marketing
                    </h1>
                    {}
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <MdOutlineArrowOutward className="text-[#2dd4bf] text-xl" />
                    </div>
                </div>

                {}
                <div className="relative h-full aspect-square overflow-hidden rounded-2xl">
                    <img
                        src="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1774455015&s=1bdf187a9fe57979c47f1ca52ffeed98"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt="B2B Marketing"
                    />
                </div>
            </div>
        </div>
    );
};

export default IndustriesCard;
