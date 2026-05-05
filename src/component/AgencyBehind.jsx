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
                duration: 20,
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
        <div ref={scrollRef} className="pt-12 mb-[100px] px-4">
            <div className="flex items-center gap-10">

                <h1 className="shrink-0 font-normal text-[16px] text-black">
                    The agency behind.
                </h1>

                <div
                    className="relative flex-1 overflow-hidden py-2"
                    style={{
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 90%, transparent 100%)",
                        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 90%, transparent 100%)"
                    }}
                >

                    
                    <div className="pointer-events-none absolute top-0 right-0 h-full w-[15px] z-20 
                        bg-gradient-to-l from-black from-50% via-black/90 via-80% to-transparent">
                    </div>

                 
                    <div
                        ref={trackRef}
                        className="logo-track flex items-center gap-[140px] w-max whitespace-nowrap"
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