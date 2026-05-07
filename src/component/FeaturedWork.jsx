import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdOutlineArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, title: "SIXT", year: "2023-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=4fc6345587184c87793709b9ccab3b72", color: "bg-orange-500/40" },
    { id: 2, title: "Dojo - B2B", year: "2021-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=dd63f860a1924655216d5eb62cf5e592", color: "bg-cyan-500/40" },
    { id: 3, title: "Magnet Trade - B2B", year: "2023-2024", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=613668eb3a49745dfdb40ebf0c01086f", color: "bg-yellow-400/40" },
    { id: 4, title: "Leading E Sim", year: "2023-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=05dc6e7996a060df26c1aa2d95b30bf0", color: "bg-purple-500/40" },
    { id: 5, title: "Brand Globally", year: "2024", image: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=700eec41cd4af9ef431abdad699e4e0d", color: "bg-blue-500/40" },
    { id: 6, title: "JD Sports", year: "2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=cbb1e369eeca98550153bca9743dbacb", color: "bg-emerald-500/40" },
    { id: 7, title: "Parkdean Resorts", year: "2019-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=32d3a406e70332628dd96604f55c0b5c", color: "bg-pink-500/40" },
    { id: 8, title: "Pooky", year: "2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=11ae3735c6a97d516857fa82df85007b", color: "bg-green-500/40" },
    { id: 9, title: "Revolution Beauty", year: "2022-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=c10c767482740b56c94f9f5366777f61", color: "bg-indigo-500/40" },
    { id: 10, title: "Lloyds Pharmacy", year: "2022-2023", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=73c1e46713fdda8095e11060cb2b09d5", color: "bg-zinc-500/40" },
    { id: 11, title: "PrettyLittleThing", year: "2021-2023", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a202be154c30436386fd285345517e9b", color: "bg-blue-400/40" }
];

const FeaturedWork = () => {
    const sectionRef = useRef(null);
    const textScrollRef = useRef(null);
    const imageScrollRef = useRef(null);
    const cursorRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);
    const [isOverCard, setIsOverCard] = useState(false);

    // কার্সর মুভমেন্ট
    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.2,
                    ease: "power3.out"
                });
            }
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const textHeight = textScrollRef.current.scrollHeight;
            const imageHeight = imageScrollRef.current.scrollHeight;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${projects.length * 400}`,
                    pin: true,
                    scrub: 1,
                }
            });

            tl.to(imageScrollRef.current, {
                y: -(imageHeight - window.innerHeight * 0.90),
                ease: "none"
            }, 0);

            tl.to(textScrollRef.current, {
                y: -(textHeight - 400),
                ease: "none"
            }, 0);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-black text-white relative">

            {/* বড় রেড কাস্টম আইকন কার্সর */}
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 rounded-full bg-red-600 text-white shadow-2xl transition-transform duration-300 ${isOverCard ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            >
                <MdOutlineArrowOutward className="text-4xl" />
            </div>

            <section ref={sectionRef} className="h-screen flex items-center overflow-hidden relative">
                <div className="container mx-auto px-8 flex h-[90vh] items-center">

                    {/* বাম পাশে টেক্সট এরিয়া */}
                    <div className="w-1/2 ">
                        <p className="text-[22px] font-medium text-white mb-6">Featured Work</p>
                        <div className="relative h-[400px] overflow-hidden border-l border-zinc-900">
                            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-black/90 to-transparent z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />

                            <div ref={textScrollRef} className="flex flex-col pt-24 pb-48">
                                {projects.map((item) => (
                                    <div
                                        key={item.id}
                                        className="h-[90px] flex items-center group cursor-pointer transition-all duration-300 whitespace-nowrap"
                                        onMouseEnter={() => setHoveredId(item.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        <h2 className="text-4xl md:text-[75px] font-semibold uppercase leading-none tracking-tighter text-white transition-opacity duration-300 group-hover:opacity-100 opacity-60">
                                            {item.title}
                                        </h2>
                                        <span className="text-[10px] ml-4 font-mono text-white opacity-40 group-hover:opacity-100">
                                            [{item.year}]
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ডান পাশে ইমেজ কার্ড এরিয়া */}
                    <div className="w-1/2 h-full relative overflow-hidden ml-4">
                        <div ref={imageScrollRef} className="flex flex-col gap-6">
                            {projects.map((item) => (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setIsOverCard(true)}
                                    onMouseLeave={() => setIsOverCard(false)}
                                    className={`w-full h-[620px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-all duration-300 ${isOverCard ? 'cursor-none' : ''}`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${hoveredId === item.id ? 'scale-110' : 'scale-100'}`}
                                    />

                                    {/* ব্যাকগ্রাউন্ড কালার এনিমেশন */}
                                    <div className={`absolute bottom-0 right-0 w-0 h-0 transition-all duration-1000 ease-in-out z-10 mix-blend-overlay ${item.color} ${hoveredId === item.id ? 'w-[250%] h-[250%] rounded-full' : ''}`} />

                                    <div className="absolute bottom-6 left-6 z-20">
                                        <span className="text-[11px] font-bold uppercase tracking-widest bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default FeaturedWork;