import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CreativeSection = () => {
    const marqueeRef = useRef(null);
    const containerRef = useRef(null);

    const items = [
        { id: 1, type: 'text', content: 'Not Algorithms' },
        { id: 2, type: 'image', content: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800' },
        { id: 3, type: 'text', content: 'Chasing Consumers' },
        { id: 4, type: 'image', content: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800' },
    ];

    const marqueeItems = [...items, ...items, ...items];

    useEffect(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth / 3;

        // ১. বেস এনিমেশন (নরমাল ডিরেকশন)
        const loop = gsap.to(marquee, {
            x: `-=${totalWidth}`,
            duration: 60,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
            }
        });

        // ২. স্ক্রল ইন্টারেকশন
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                const velocity = self.getVelocity();

                if (velocity < 0) {
                    // শুধুমাত্র স্ক্রল করার সময় উল্টো চলবে
                    gsap.to(loop, {
                        timeScale: -0.8, // উল্টো চলার স্পিড
                        duration: 0.3,
                        overwrite: true
                    });
                } else if (velocity > 0) {
                    // নিচে স্ক্রল করলে স্পিড বাড়বে
                    gsap.to(loop, {
                        timeScale: 1 + Math.abs(velocity / 1000),
                        duration: 0.3,
                        overwrite: true
                    });
                }
            },
            // স্ক্রল থামিয়ে দিলে এই ফাংশনটি কাজ করবে
            onRefresh: () => gsap.to(loop, { timeScale: 1, duration: 0.5 }),
            onLeave: () => gsap.to(loop, { timeScale: 1, duration: 0.5 }),
            onEnterBack: () => gsap.to(loop, { timeScale: 1, duration: 0.5 }),
        });

        // স্ক্রল থামলে আবার সোজা করার জন্য একটি চেকার
        let scrollTimeout;
        const handleScrollStop = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // স্ক্রল থেমে গেলে আবার সোজা (১) ডিরেকশনে ফিরে আসবে
                gsap.to(loop, { timeScale: 1, duration: 1, ease: "power2.out" });
            }, 100); // ১০০ মিলি-সেকেন্ড পর চেক করবে স্ক্রল থেমেছে কি না
        };

        window.addEventListener("scroll", handleScrollStop);

        return () => {
            loop.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
            window.removeEventListener("scroll", handleScrollStop);
        };
    }, []);

    return (
        <section ref={containerRef} className=" overflow-hidden ">
            <div className="flex whitespace-nowrap">
                <div ref={marqueeRef} className="flex items-center gap-4 md:gap-8">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 md:gap-8">
                            {item.type === 'text' ? (
                                <h2 className="text-[75px] lg:text-[220px] md:text-[75px] font-500 tracking-tighter text-[#1a1a1a]">
                                    {item.content}
                                </h2>
                            ) : (
                                <div className="w-24 h-24 lg:w-48 lg:h-48 md:h-28 md:w-28 rounded-3xl overflow-hidden shadow-lg shrink-0">
                                    <img
                                        src={item.content}
                                        alt="marquee"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreativeSection;