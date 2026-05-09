import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const ReadytoRise = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        // স্ক্রিন সাইজ ট্র্যাক করার জন্য ফাংশন
        const handleResize = () => {
            const large = window.innerWidth >= 1024;
            setIsLarge(large);
        };

        window.addEventListener("resize", handleResize);

        // GSAP Context ব্যবহার করা হয়েছে যাতে রি-রেন্ডারের সময় অ্যানিমেশন ক্লিন থাকে
        let ctx = gsap.context(() => {
            if (!isLarge) return;

            const text = "Ready to Rise at Seven?";
            const element = textRef.current;
            if (!element) return;

            element.innerHTML = text
                .split("")
                .map(
                    (char) =>
                        `<span class="char" style="display:inline-block; margin-right:-0.05em;">
                            ${char === " " ? "&nbsp;" : char}
                        </span>`
                )
                .join("");

            const chars = element.querySelectorAll(".char");
            const path = "M0,100 C200,-100 400,300 600,100 800,-100 1000,200 1200,100";

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1.5,
                },
            });

            chars.forEach((char, i) => {
                tl.fromTo(
                    char,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        motionPath: {
                            path: path,
                            align: false,
                            autoRotate: false,
                            start: 1,
                            end: 0,
                        },
                        duration: 1,
                        ease: "none",
                    },
                    i * 0.05
                );
            });
        }, sectionRef);

        return () => {
            window.removeEventListener("resize", handleResize);
            ctx.revert(); // কম্পোনেন্ট আনমাউন্ট হলে সব ক্লিন করবে
        };
    }, [isLarge]); // isLarge চেঞ্জ হলে useEffect আবার রান করবে

    return (
        <section
            ref={sectionRef}
            // dynamic class: isLarge না হলে 'hidden' ক্লাস গ্যাপ রিমুভ করবে
            className={`${!isLarge ? "hidden" : "lg:flex"} w-full h-[70vh] items-center justify-center overflow-hidden`}
        >
            <h1
                ref={textRef}
                className="mb-[40vh] font-500 text-[256px]"
                style={{
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.04em",
                    lineHeight: "0.9",
                }}
            ></h1>
        </section>
    );
};

export default ReadytoRise;