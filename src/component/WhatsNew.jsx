import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { MdOutlineArrowOutward } from 'react-icons/md';

const WhatsNew = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [cardWidth, setCardWidth] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);

    const baseCards = [
        { id: 1, category: "News", image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=b59fc4a9963beea28e9f8a2a8d45c1b8", title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director", author: "Carrie Rose", authorImg: "https://randomuser.me/api/portraits/women/1.jpg", time: "2 mins" },
        { id: 2, category: "Food / Hospitality", image: "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=2000&h=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=66c3ca1b30a572b0c88d073167f801bd", title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them", author: "Ray Saddiq", authorImg: "https://randomuser.me/api/portraits/men/2.jpg", time: "2 mins" },
        { id: 3, category: "Retail", image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=3a8eaa4bc91ab5fc6d16035d1db68f35", title: "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz", author: "Carrie Rose", authorImg: "https://randomuser.me/api/portraits/women/3.jpg", time: "2 mins" }
    ];

    const infiniteCards = [...baseCards, ...baseCards, ...baseCards];
    const x = useMotionValue(0);
    const totalScrollWidth = cardWidth * baseCards.length;

    const progress = useTransform(x, [0, -totalScrollWidth], [0, 100]);
    const progressX = useTransform(progress, [0, 100], ["0%", "200%"]);

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);

            if (width < 768) {
                setCardWidth(width * 0.85);
            } else if (width >= 768 && width < 1024) {
                setCardWidth(width * 0.45);
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        const unsubscribe = x.on("change", (latest) => {
            if (cardWidth === 0) return;
            const limit = -(cardWidth * baseCards.length);
            if (latest <= limit * 2) x.set(latest + totalScrollWidth);
            else if (latest >= 0) x.set(latest - totalScrollWidth);
        });

        return () => {
            window.removeEventListener('resize', updateSize);
            unsubscribe();
        };
    }, [cardWidth, baseCards.length, totalScrollWidth, x]);

    const handleDragEnd = (event, info) => {
        const threshold = 50;
        if (info.offset.x < -threshold) {
            animate(x, x.get() - cardWidth, { type: "spring", stiffness: 300, damping: 30 });
        } else if (info.offset.x > threshold) {
            animate(x, x.get() + cardWidth, { type: "spring", stiffness: 300, damping: 30 });
        } else {
            animate(x, Math.round(x.get() / cardWidth) * cardWidth, { type: "spring" });
        }
    };

    // Desktop Layout
    if (!isMobile && !isTablet) {
        return (
            <section className="py-20 overflow-hidden container mx-auto px-4 font-sans">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="flex items-center gap-4 text-5xl md:text-[100px] font-medium tracking-tighter">
                        <span>What’s</span>
                        <img src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad" alt="" className="w-12 h-12 md:w-[100px] md:h-[100px] object-cover rounded-2xl" />
                        <span>New</span>
                    </h2>

                    {/* Desktop Button with Vertical Flip Animation */}
                    <button className="group relative overflow-hidden inline-flex items-center justify-center px-6 h-[50px] rounded-3xl font-medium bg-white text-black border border-gray-200 shadow-sm transition-all text-sm cursor-pointer">
                        <div className="relative h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                            <span className="flex items-center gap-2 h-full whitespace-nowrap">
                                Explore More Thoughts
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </span>
                            <span className="absolute top-full flex items-center gap-2 h-full whitespace-nowrap">
                                Explore More Thoughts
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </span>
                        </div>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {baseCards.map((card) => (
                        <div key={card.id} className="group relative cursor-none"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                            }}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={"relative aspect-[3/3.1] rounded-2xl overflow-hidden transition-all duration-500 "}>
                                <img src={card.image} alt="" className={"max-w-full max-h-full rounded-2xl transition-all duration-700"} />
                                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 scale-x-125 group-hover:scale-x-100 rounded-t-[100%] group-hover:rounded-none backdrop-blur-md transition-all duration-450 ease-in-out pointer-events-none" />
                                <span className="absolute top-5 left-8 backdrop-blur-md text-white px-3 py-1 rounded-full text-[12px] font-medium z-10">
                                    {card.category}
                                </span>
                                <AnimatePresence>
                                    {hoveredCard === card.id && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            className="pointer-events-none z-50 fixed flex items-center justify-center"
                                            style={{
                                                left: mousePos.x,
                                                top: mousePos.y,
                                                x: "-50%",
                                                y: "-50%",
                                                position: 'absolute'
                                            }}
                                        >
                                            <div className="bg-[#B2F6E3] text-black w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                                                <MdOutlineArrowOutward className="text-4xl transition-transform duration-500 " />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1 bg-white border border-gray-100 px-2 py-1 rounded-full shadow-sm">
                                        <img src={card.authorImg} alt="" className="w-6 h-6 rounded-full" />
                                        <span className="text-sm font-medium">{card.author}</span>
                                    </div>
                                    <span className="text-sm text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full">{card.time}</span>
                                </div>
                                <h3 className="text-[28px] font-medium leading-tight group-hover:underline underline-offset-4">{card.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // Mobile & Tablet Layout
    return (
        <section className="py-16 px-4 overflow-hidden  font-sans">
            <div className="flex justify-between items-center mb-12">
                <h2 className="flex items-center gap-4 text-5xl font-medium tracking-tighter">
                    <span>What’s</span>
                    <img src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad" alt="" className="w-12 h-12 object-cover rounded-2xl" />
                    <span>New</span>
                </h2>

                {/* Mobile Header Button */}
                <button className="group md:block hidden relative overflow-hidden flex items-center justify-center px-4 h-[40px] rounded-3xl font-medium bg-white text-black border border-gray-200 shadow-sm transition-all text-sm cursor-pointer">
                    <div className="relative h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        <span className="flex items-center gap-2 h-full whitespace-nowrap">
                            Explore More Thoughts
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                        <span className="absolute top-full flex items-center gap-2 h-full whitespace-nowrap">
                            Explore More Thoughts
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                    </div>
                </button>
            </div>

            <div className="relative cursor-grab active:cursor-grabbing">
                <motion.div
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -Infinity, right: Infinity }}
                    onDragEnd={handleDragEnd}
                    className="flex gap-4"
                >
                    {infiniteCards.map((card, idx) => (
                        <div key={idx} className="flex-shrink-0" style={{ width: cardWidth }}>
                            <div className="relative aspect-[3/3.1] rounded-[2rem] overflow-hidden mb-4 ">
                                <img src={card.image} alt="" className={"max-w-full max-h-full rounded-2xl transition-all duration-700"} />
                                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white">
                                    {card.category}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <img src={card.authorImg} className="w-6 h-6 rounded-full" alt="" />
                                    <span className="text-[11px] font-semibold">{card.author}</span>
                                    <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{card.time}</span>
                                </div>
                                <h3 className="text-md font-medium leading-tight pr-4">{card.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-12 h-[2px] w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-black"
                    style={{ width: "33.33%", x: progressX }}
                />
            </div>

            {/* Mobile Footer Button (Right under cards/progress bar) */}
            <div className="mt-8 md:hidden">
                <button className="group relative overflow-hidden w-full flex items-center justify-center h-[50px] rounded-full font-medium bg-white text-black border border-gray-200 shadow-sm active:bg-gray-50 transition-all">
                    <div className="relative h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        <span className="flex items-center gap-2 h-full whitespace-nowrap px-6">
                            Explore More Thoughts
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                        <span className="absolute top-full flex items-center gap-2 h-full whitespace-nowrap px-6">
                            Explore More Thoughts
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default WhatsNew;
