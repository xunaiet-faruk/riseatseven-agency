import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const BlogResourcesCard = () => {
    return (
        <div>
               <div className="p-4">
                        {}
                        <div className="bg-white group relative w-full max-w-[560px] h-[230px] rounded-[2rem] p-4 flex items-center justify-between shadow-sm border border-gray-50 overflow-hidden transition-all duration-500 hover:shadow-xl">
            
                            {}
                            <div className="flex-1 flex flex-col items-center justify-center  px-4">
                                <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-black leading-tight">
                                    B2B Marketing <br/>
                                    Categori Leaderboard 
                                </h1>
                                {}
                                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <MdOutlineArrowOutward className="text-[#2dd4bf] text-xl" />
                                </div>
                            </div>
            
                            {}
                            <div className="relative h-full aspect-square overflow-hidden rounded-2xl">
                                <img
                            src="https://rise-atseven.transforms.svdcdn.com/production/images/987a2051e11c80faa2a669c0eb61c514c7cc2314.png?w=1600&h=1600&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846498&s=26659808d88078fc8ce0035319c201a6"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt="B2B Marketing"
                                />
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default BlogResourcesCard;
