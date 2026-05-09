import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineArrowOutward, MdOutlineWatchLater } from "react-icons/md";

const WhatsNew = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredCard, setHoveredCard] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const progressBarRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

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

    const nextSlide = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            scrollToCard(currentIndex + 1);
        } else {
            setCurrentIndex(0);
            scrollToCard(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            scrollToCard(currentIndex - 1);
        } else {
            setCurrentIndex(cards.length - 1);
            scrollToCard(cards.length - 1);
        }
    };

    const scrollToCard = (index) => {
        if (sliderRef.current) {
            const cardWidth = isMobile ? 280 : 320;
            const gap = 16;
            const scrollPosition = index * (cardWidth + gap);
            sliderRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleProgressBarDrag = (e) => {
        if (!progressBarRef.current) return;

        const rect = progressBarRef.current.getBoundingClientRect();
        let clientX;

        if (e.touches) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }

        let percentage = (clientX - rect.left) / rect.width;
        percentage = Math.min(Math.max(percentage, 0), 1);

        const newIndex = Math.round(percentage * (cards.length - 1));
        setCurrentIndex(newIndex);
        scrollToCard(newIndex);
    };

    // Touch/Mouse drag for slider
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
    };

    const handleMouseMoveSlider = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX);

        if (Math.abs(walk) > 50) {
            if (walk > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleScroll = () => {
        if (sliderRef.current && !isDragging) {
            const cardWidth = isMobile ? 280 : 320;
            const gap = 16;
            const scrollPosition = sliderRef.current.scrollLeft;
            const newIndex = Math.round(scrollPosition / (cardWidth + gap));
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
                setCurrentIndex(newIndex);
            }
        }
    };

    const progress = (currentIndex / (cards.length - 1)) * 100;

    // For medium and small devices - horizontal scroll slider
    if (isMobile || isTablet) {
        return (
            <>
                <section className="py-20 overflow-hidden container mx-auto px-4 md:px-6 font-sans">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                        <h2 className="flex items-center gap-4 text-4xl sm:text-5xl md:text-6xl font-500 tracking-tighter">
                            <span>What’s</span>
                            <img
                                src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
                                alt=""
                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-cover rounded-2xl"
                            />
                            <span>New</span>
                        </h2>

                        <button className="group inline-flex items-center gap-2 px-4 py-2 rounded-3xl font-medium bg-white text-black hover:rounded-lg transition-all text-sm border border-gray-200 shadow-sm whitespace-nowrap">
                            Explore More Thoughts <MdOutlineArrowOutward className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                    </div>

                    {/* Cards Container with horizontal scroll */}
                    <div className="relative">
                        <div
                            ref={sliderRef}
                            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 cursor-grab active:cursor-grabbing"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                userSelect: 'none',
                                scrollBehavior: 'smooth'
                            }}
                            onScroll={handleScroll}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseUp}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMoveSlider}
                        >
                            <style>{`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>

                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    style={{
                                        minWidth: isMobile ? '280px' : '320px',
                                        maxWidth: isMobile ? '280px' : '320px',
                                    }}
                                    className="flex-shrink-0"
                                >
                                    <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-[2.5rem] bg-gray-100">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-5 bg-white/30 backdrop-blur-xl text-white px-3 py-1 rounded-full text-[12px] font-medium z-20">
                                            {card.category}
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-1 text-sm font-medium flex-wrap">
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

                                        <h3 className="text-xl font-500 leading-tight">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-black hover:bg-gray-800 text-white rounded-full p-2 shadow-lg transition-all duration-300 z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-black hover:bg-gray-800 text-white rounded-full p-2 shadow-lg transition-all duration-300 z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Progress Bar - Below Cards */}
                    <div className="w-full mt-8">
                        <div
                            ref={progressBarRef}
                            className="relative h-1 bg-gray-200 rounded-full cursor-pointer"
                            onMouseDown={handleProgressBarDrag}
                            onTouchStart={handleProgressBarDrag}
                            onTouchMove={handleProgressBarDrag}
                            onTouchEnd={() => { }}
                        >
                            <div
                                className="absolute h-full bg-black rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                            <div
                                className="absolute w-4 h-4 bg-black rounded-full shadow-lg top-1/2 -translate-y-1/2 transition-all duration-300"
                                style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
                            />
                        </div>
                    </div>
                </section>

                {/* Full-page Underline */}
                <div className="container mx-auto px-4 md:px-6">
                    <hr className="border-t border-gray-200 w-full" />
                </div>
            </>
        );
    }

    // Large device - original design with hover effects and custom mouse
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