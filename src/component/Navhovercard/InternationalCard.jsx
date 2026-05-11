import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const InternationalCard = () => {
    return (
        <div>
               <div className="p-4">
                        {}
                        <div className="bg-white group relative w-full max-w-[560px] h-[230px] rounded-[2rem] p-4 flex items-center justify-between shadow-sm border border-gray-50 overflow-hidden transition-all duration-500 hover:shadow-xl">
            
                            {}
                            <div className="flex-1 flex flex-col items-center justify-center  px-4">
                                <h1 className="text-2xl md:text-3xl font-semibold tracking-tighter text-black leading-tight">
                                  Us Digital PR<br/>
                                  Spain Digital PR<br/>
                                  gERMANY Digital PR<br/>
                                  Netherlands Digital PR<br/>

                                </h1>
                                {}
                                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <MdOutlineArrowOutward className="text-[#2dd4bf] text-xl" />
                                </div>
                            </div>
            
                            {}
                            <div className="relative h-full aspect-square overflow-hidden rounded-2xl">
                                <img
                            src='https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=9b6e0a98f94b563a89840f3250cd1656'
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt="B2B Marketing"
                                />
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default InternationalCard;
