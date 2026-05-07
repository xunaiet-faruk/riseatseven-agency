import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineArrowOutward, MdOutlineWatchLater } from "react-icons/md";

const WhatsNew = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            id: 1,
            category: "News",
            image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=3a8eaa4bc91ab5fc6d16035d1db68f35",
            title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
            author: "Carrie Rose",
            authorImg: "https://randomuser.me/api/portraits/women/1.jpg",
            time: "2 mins"
        },
        {
            id: 2,
            category: "Food / Hospitality",
            image: "https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg?w=1200&h=1200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1776098692&s=82e9b10e4f34c3555b283c451312a8a4",
            title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
            author: "Ray Saddiq",
            authorImg: "https://randomuser.me/api/portraits/men/2.jpg",
            time: "2 mins"
        },
        {
            id: 3,
            category: "Retail",
            image: "https://rise-atseven.transforms.svdcdn.com/production/images/Noomz1-4.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1775034474&s=f9c776b16cac51416ce34a72ef5a2310",
            title: "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
            author: "Carrie Rose",
            authorImg: "https://randomuser.me/api/portraits/women/3.jpg",
            time: "2 mins"
        }
    ];

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <>
            <section className="py-20 overflow-hidden container mx-auto px-4 md:px-0 font-sans">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="flex items-center gap-4 text-5xl md:text-[100px] font-500 tracking-tighter">
                        <span>What’s</span>
                        <img
                            src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
                            alt=""
                            className="w-12 h-12 md:w-[100px] md:h-[100px] object-cover rounded-2xl"
                        />
                        <span>New</span>
                    </h2>

                    <button className="group inline-flex items-center gap-2 px-4 xl:px-6 py-2 xl:py-3 rounded-3xl font-medium bg-white text-black hover:rounded-lg transition-all text-sm xl:text-base border border-gray-200 shadow-sm">
                        Explore More Thoughts <MdOutlineArrowOutward className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className="group relative cursor-none"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <AnimatePresence>
                                {hoveredCard === card.id && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        className="absolute z-50 pointer-events-none hidden lg:flex items-center justify-center text-black w-14 h-14 rounded-full shadow-2xl bg-[#B2F6E3]"
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

                            <div
                                className={`relative aspect-[4/5] md:aspect-[3/3.5] mb-6 overflow-hidden rounded-[2.5rem] transition-all duration-500
                                ${index === 1 ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                            >
                                <div className={`w-full h-full flex items-center justify-center transition-all duration-500
                                    ${index === 1 ? 'px-5' : 'p-0'}`}>
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110
                                            ${index === 1 ? 'rounded-[1.8rem]' : 'rounded-none'}`}
                                    />
                                </div>

                                <AnimatePresence>
                                    {hoveredCard === card.id && (
                                        <motion.div
                                            initial={{ y: "105%", borderRadius: "0px" }}
                                            animate={{ y: 0, borderRadius: "2.5rem 2.5rem 0px 0px" }}
                                            exit={{ y: "105%", borderRadius: "0px" }}
                                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute inset-0 z-10 backdrop-blur-xl bg-white/10 pointer-events-none"
                                        />
                                    )}
                                </AnimatePresence>

                                <span className="absolute top-3 left-5 bg-white/30 backdrop-blur-xl text-white px-3 py-1 rounded-full text-[12px] font-medium z-20">
                                    {card.category}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-1 text-sm font-medium">
                                    <div className="flex items-center gap-1 bg-white border border-gray-100 px-2 py-1 rounded-full shadow-sm">
                                        <img
                                            src={card.authorImg}
                                            alt={card.author}
                                            className="w-6 h-6 rounded-full object-cover"
                                        />
                                        <span className="text-black pr-1">{card.author}</span>
                                    </div>

                                    <div className="flex items-center gap-2 bg-white border border-gray-100 px-3 py-1 rounded-full shadow-sm">
                                        <MdOutlineWatchLater className="text-gray-500 text-base" />
                                        <span className="text-gray-600">{card.time}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-[30px] font-500 leading-tight group-hover:underline decoration-1 underline-offset-4">
                                    {card.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Full-page Underline */}
            <div className="container mx-auto px-4 md:px-0">
                <hr className="border-t border-gray-200 w-full" />
            </div>
        </>
    );
};

export default WhatsNew;