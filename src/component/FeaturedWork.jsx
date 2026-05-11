import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
import { LuTrendingUp } from "react-icons/lu";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Projects data (Unchanged)
const projects = [
    { id: 1, title: "SIXT", year: "2023-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=4fc6345587184c87793709b9ccab3b72", color: "bg-[#CB7B3A]", desc: "An extra 3m clicks regionally through SEO.", bottomTag: "Car rental" },
    { id: 2, title: "Dojo - B2B", year: "2021-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=dd63f860a1924655216d5eb62cf5e592", color: "bg-[#FDD8C4]", desc: "A B2B success story for Dojo card machines", bottomTag: "Card Machines" },
    { id: 3, title: "Magnet Trade - B2B", year: "2023-2024", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=613668eb3a49745dfdb40ebf0c01086f", color: "bg-[#D8C4FD]", desc: "A full service SEO success story 170%+ increase", bottomTag: "" },
    { id: 4, title: "Leading E Sim", year: "2023-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=05dc6e7996a060df26c1aa2d95b30bf0", color: "bg-[#CB7B3A]", desc: "Increasing brand and non brand visibility UK/ES", bottomTag: "Esimas" },
    { id: 5, title: "Brand Globally", year: "2024", image: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=700eec41cd4af9ef431abdad699e4e0d", color: "bg-[#3A8CCB]", desc: "65% up YoY in clicks for JDSports FR, IT, ES.", bottomTag: "Trainers" },
    { id: 6, title: "JD Sports", year: "2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=cbb1e369eeca98550153bca9743dbacb", color: "bg-[#D2DCE6]", desc: "Dominating Google and AI search", bottomTag: "Easter Breaks" },
    { id: 7, title: "Parkdean Resorts", year: "2019-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=32d3a406e70332628dd96604f55c0b5c", color: "bg-[#39B0BD]", desc: "Driving demand for Pooky Rechargeable Lights", bottomTag: "Rechargeable Lights" },
    { id: 8, title: "Pooky", year: "2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=2000&h=1500&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=11ae3735c6a97d516857fa82df85007b", color: "bg-[#D29DD0]", desc: "Beautiful lighting and home decor for stylish residences.", bottomTag: "UKhlidays" },
    { id: 9, title: "Revolution Beauty", year: "2022-2025", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=c10c767482740b56c94f9f5366777f61", color: "bg-[#FECACC]", desc: "Social search and multi channel content to #1", bottomTag: "Beauty Dupes" },
    { id: 10, title: "Lloyds Pharmacy", year: "2022-2023", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=73c1e46713fdda8095e11060cb2b09d5", color: "bg-[#60DCFB]", desc: "Building the UK's leading beauty dupe brand", bottomTag: "STItests" },
    { id: 11, title: "PrettyLittleThing", year: "2021-2023", image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=2000&h=1500&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a202be154c30436386fd285345517e9b", color: "bg-[#FECACC]", desc: "Driving category leadership for STI tests", bottomTag: "Outfits" }
];

const FeaturedWork = () => {
    const sectionRef = useRef(null);
    const textScrollRef = useRef(null);
    const imageScrollRef = useRef(null);
    const cursorRef = useRef(null);
    const containerRef = useRef(null);
    const [hoveredId, setHoveredId] = useState(null);
    const [isOverCard, setIsOverCard] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1024 || !cursorRef.current) return;

        const xSetter = gsap.quickSetter(cursorRef.current, "x", "px");
        const ySetter = gsap.quickSetter(cursorRef.current, "y", "px");

        const handleMouseMove = (e) => {
            xSetter(e.clientX);
            ySetter(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        if (isOverCard) {
            document.body.style.cursor = 'none';
            gsap.to(cursorRef.current, { scale: 1, opacity: 1, visibility: 'visible', duration: 0.3, ease: "power2.out" });
        } else {
            document.body.style.cursor = 'auto';
            gsap.to(cursorRef.current, {
                scale: 0, opacity: 0, duration: 0.2, ease: "power2.in", onComplete: () => {
                    gsap.set(cursorRef.current, { visibility: 'hidden' });
                }
            });
        }

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isOverCard]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const imageHeight = imageScrollRef.current.scrollHeight;
            const textHeight = textScrollRef.current?.scrollHeight || 0;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${projects.length * 400}`,
                    scrub: 1.5,
                    pin: true,
                }
            });

            tl.to(imageScrollRef.current, {
                y: -(imageHeight - 570),
                ease: "none",
            }, 0);

            if (textScrollRef.current) {
                tl.to(textScrollRef.current, {
                    y: -(textHeight - 400),
                    ease: "none",
                }, 0);
            }
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="px-4 md:px-5 lg:px-0">
            <div ref={containerRef} className="bg-black text-white relative rounded-3xl overflow-hidden md:px-5 lg:px-0 px-5">

                {}
                <div
                    ref={cursorRef}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 9999,
                        pointerEvents: 'none',
                        visibility: 'hidden',
                        transform: 'translate(-50%, -50%)' 
                    }}
                    className="hidden lg:flex items-center justify-center w-32 h-32 rounded-full bg-[#B2F6E3] text-black shadow-2xl"
                >
                    <MdOutlineArrowOutward className="text-4xl font-bold" />
                </div>

                <section ref={sectionRef} className="lg:h-[750px] md:h-[750px] h-[630px] flex items-center overflow-hidden relative">
                    <div className="container mx-auto flex h-full items-start pt-8 lg:gap-12 lg:px-8">

                        {}
                        <div className="w-1/2 hidden lg:block">
                            <p className="text-[22px] font-medium text-white mb-6 pt-32">Featured Work</p>
                            <div className="relative h-[450px] overflow-hidden border-l border-zinc-900">
                                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-black/90 to-transparent z-10" />
                                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
                                <div ref={textScrollRef} className="flex flex-col pt-24 pb-48">
                                    {projects.map((item) => (
                                        <div
                                            key={item.id}
                                            className="h-[90px] flex items-center group cursor-pointer whitespace-nowrap"
                                            onMouseEnter={() => setHoveredId(item.id)}
                                            onMouseLeave={() => setHoveredId(null)}
                                        >
                                            <h2 className={`text-[75px] font-semibold uppercase leading-none tracking-tighter text-white transition-all duration-500 ${hoveredId === item.id ? 'translate-x-3' : 'translate-x-0'}`}>{item.title}</h2>
                                            <span className={`text-[10px] ml-4 font-mono text-white transition-all duration-500 ${hoveredId === item.id ? 'translate-x-3 ' : 'translate-x-0'}`}>[{item.year}]</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {}
                        <div className="w-full lg:w-1/2 h-full relative overflow-hidden py-4 md:py-8 lg:py-0">
                            <div ref={imageScrollRef} className="flex flex-col gap-8 md:gap-12 lg:gap-6">
                                {projects.map((item) => (
                                    <div
                                        key={item.id}
                                        onMouseEnter={() => { setIsOverCard(true); setHoveredId(item.id); }}
                                        onMouseLeave={() => { setIsOverCard(false); setHoveredId(null); }}
                                        className="w-full h-[320px] md:h-[500px] lg:h-[570px] flex-shrink-0 relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className={`w-full h-full object-cover transition-transform duration-500 
                                                ${hoveredId === item.id ? 'lg:scale-105' : 'scale-100'}`}
                                        />

                                        {}
                                        <div className="absolute bottom-0 left-1 z-30 lg:hidden">
                                            <div className="rounded-lg px-4 py-2">
                                                <p className="text-white/80 text-xs md:text-[12px] font-semibold">{item.year}</p>
                                                <h3 className="text-white text-[30px] md:text-[30px] font-semibold">{item.title}</h3>
                                            </div>
                                        </div>

                                        {}
                                        <div
                                            className={`absolute lg:block hidden inset-0 z-10 ${item.color} transition-all duration-700 ease-in-out p-8 md:p-12
                                                ${hoveredId === item.id ? 'opacity-100' : 'opacity-0 lg:opacity-0'}`}
                                            style={{
                                                clipPath: (hoveredId === item.id ? 'circle(150% at 50% 100%)' : 'circle(0% at 50% 100%)')
                                            }}
                                        >
                                            <div className={`w-full text-left transition-all duration-500 ${hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                                <p className="text-[28px] md:text-[45px] lg:text-[50px] font-semibold leading-tight text-black">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {}
                                        {item.id !== 3 && (
                                            <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:bottom-6 lg:right-6 lg:top-auto z-20">
                                                <div className="flex items-center gap-2 md:gap-3 px-2 py-1 md:px-6 md:py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                                                    <FaSearch className="text-xs md:text-sm shadow-sm" />
                                                    <span className="text-[12px] md:text-[14px] font-bold tracking-tight">{item.bottomTag}</span>
                                                    <LuTrendingUp className="text-md md:text-lg" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="flex justify-center items-center py-12">
                <button className="group relative overflow-hidden inline-flex items-center justify-center px-6 h-[50px] text-lg rounded-3xl font-medium bg-white text-black shadow-sm transition-all text-sm cursor-pointer">
                    <div className="relative h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        <span className="flex items-center gap-2 h-full whitespace-nowrap ">
                            Explore Our Work
                          <MdOutlineArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="absolute top-full flex items-center gap-2 h-full whitespace-nowrap">
                            Explore Our Work
                          <MdOutlineArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default FeaturedWork;
