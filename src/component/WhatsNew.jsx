import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineArrowOutward } from "react-icons/md";

const WhatsNew = () => {
    // মাউস পজিশন ট্র্যাক করার জন্য স্টেট
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            id: 1,
            category: "News",
            image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=3a8eaa4bc91ab5fc6d16035d1db68f35",
            title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
            author: "Carrie Rose",
            time: "2 mins"
        },
        {
            id: 2,
            category: "Food / Hospitality",
            image: "https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1776098692&s=df90492f67348b2fb67e3ca0585ae735",
            title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth",
            author: "Ray Saddiq",
            time: "2 mins"
        },
        {
            id: 3,
            category: "Retail",
            image: "https://rise-atseven.transforms.svdcdn.com/production/images/Noomz1-4.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1775034474&s=f9c776b16cac51416ce34a72ef5a2310",
            title: "Rise at Seven Appointed by Langtins to drive demand for Noomz",
            author: "Carrie Rose",
            time: "2 mins"
        }
    ];

    const handleMouseMove = (e) => {
        // কার্ডের ভেতর মাউস কোথায় আছে তা বের করা
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section className="py-20  overflow-hidden container mx-auto px-4 md:px-0">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-5xl md:text-8xl font-500 tracking-tighter">What's New</h2>
                <button className="hidden md:block border border-gray-300 px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all text-sm font-medium">
                    Explore More Thoughts
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="group relative cursor-none" // আসল মাউস হাইড করা
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Custom Button Cursor */}
                        <AnimatePresence>
                            {hoveredCard === card.id && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                    className="absolute z-50 pointer-events-none hidden lg:flex items-center justify-center  text-black w-14 h-14 rounded-full shadow-xl bg-[#B2F6E3]"
                                    style={{
                                        left: mousePos.x,
                                        top: mousePos.y,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <MdOutlineArrowOutward className="text-2xl" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Image Container */}
                        {/* index === 1 এ background color এবং transition যোগ করা হয়েছে */}
                        <div className={`relative aspect-[4/5] md:aspect-[3/3.5] mb-6 overflow-hidden transition-all duration-500 ease-in-out
                            ${index === 1
                                ? 'bg-white group-hover:bg-[#F59674] p-6 md:p-8 rounded-[40px]'
                                : 'rounded-2xl'
                            }`}>

                            <img
                                src={card.image}
                                alt={card.title}
                                // index === 1 এর জন্য ইমেজে আলাদা করে রাউন্ডেড কর্নার দেওয়া হয়েছে
                                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 
                                    ${index === 1 ? 'rounded-[30px]' : 'rounded-2xl'}`}
                            />

                            {/* Blur Overlay */}
                            <div className={`absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[4px] transition-all duration-500 
                                ${index === 1 ? 'm-6 md:m-8 rounded-[30px]' : ''}`}
                            />

                            {/* Category Tag */}
                            <span className={`absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[12px] font-medium z-10 
                                ${index === 1 ? 'mt-4 ml-4' : ''}`}>
                                {card.category}
                            </span>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <div className="w-5 h-5 rounded-full bg-gray-200" /> {card.author}
                                </span>
                                <span>•</span>
                                <span>{card.time}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-medium leading-tight group-hover:underline decoration-1 underline-offset-4">
                                {card.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatsNew;