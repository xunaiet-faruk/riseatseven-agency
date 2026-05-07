import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const ReadytoRise = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const text = "Ready to Rise at Seven?";
        const element = textRef.current;

        // split text into chars
        element.innerHTML = text
            .split("")
            .map(
                (char) =>
                    `<span class="char" style="display:inline-block;">${char === " " ? "&nbsp;" : char
                    }</span>`
            )
            .join("");

        const chars = element.querySelectorAll(".char");

        // SVG path (snake curve)
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
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    motionPath: {
                        path: path,
                        align: false,
                        autoRotate: false,
                        start: 1, // right থেকে শুরু
                        end: 0,  // left এ শেষ
                    },
                    duration: 1,
                    ease: "power3.out",
                },
                i * 0.05 // stagger timing
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                height: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <h1 className="mb-[40vh] font-500 text-[140px]"
                ref={textRef}
                style={{
             
                    whiteSpace: "nowrap",
                }}
            ></h1>
        </section>
    );
};

export default ReadytoRise;