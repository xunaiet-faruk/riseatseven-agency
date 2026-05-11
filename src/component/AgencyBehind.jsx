import { useEffect, useRef } from "react";
import gsap from "gsap";

const AgencyBehind = () => {
    const scrollRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(trackRef.current, {
                x: "-33.333%",
                ease: "none",
                duration: 30,
                repeat: -1,
            });
        }, scrollRef);

        return () => ctx.revert();
    }, []);

    const logos = [
        "/riseatseven.com-svg-7.svg",
        "/riseatseven.com-svg-9.svg",
        "/riseatseven.com-svg-10.svg",
        "/riseatseven.com-svg-11.svg",
        "/riseatseven.com-svg-12.svg",
        "/riseatseven.com-svg-13.svg",
    ];

    return (
        <div ref={scrollRef} className="container mx-auto mb-[100px]">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">

                {}
                <h1 className="shrink-0 font-normal text-[16px] text-black w-full md:w-auto text-left">
                    The agency behind.
                </h1>

                {}
                <div className="relative w-full flex-1 overflow-hidden py-2 md:ml-0">

                    
                    <div className="md:hidden pointer-events-none absolute top-0 left-0 h-full w-[25px] z-20 
    bg-gradient-to-r from-black/30 via-white/30 to-transparent">
                    </div>

                    {}
                    <div className="hidden md:block  pointer-events-none absolute top-0 left-0 h-full w-[25px] z-20 
    bg-[#EFEEEC]/30 backdrop-blur-sm">
                    </div>

                    {}
                    <div className="pointer-events-none absolute top-0 right-0 h-full w-[25px] z-20 
                        bg-gradient-to-l from-black/30 via-white/30 to-transparent">
                    </div>

                    <div
                        ref={trackRef}
                        className="logo-track flex items-center gap-[140px] w-max whitespace-nowrap"
                        style={{
                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 90%, transparent 100%)",
                            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 90%, transparent 100%)"
                        }}
                    >
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="brand"
                                className="w-[70px] h-auto grayscale opacity-60 hover:opacity-100 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgencyBehind;
