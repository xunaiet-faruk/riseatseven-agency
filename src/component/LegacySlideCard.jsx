import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
    { id: 1, title: 'Pioneers', color: '#000000', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087', details: 'We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.', details2: 'We’re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.', rotation: 12 },
    { id: 2, title: 'Innovators', color: '#B2F6E3', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=e7cf97f291d3f983c8b99ab6a463f51e', details: 'A roll top bath full of 79 awards. Voted The Drums best agency outside of London.We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.', rotation: 10 },
    { id: 3, title: 'Visionaries', color: '#FFFFFF', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=211fe5c665b93a978c596f9070aed44c', details: 'People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.', rotation: 5 },
];

const StackedCards = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;
        gsap.set(cards, {
            xPercent: 0,
            yPercent: 0,
            scale: (i) => (i === 0 ? 0.96 : 1),
            rotation: (i) => cardsData[i].rotation,
            transformOrigin: "center center",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=500%",
                pin: true,
                pinSpacing: false,
                scrub: 1.5,
            }
        });

        cards.forEach((card, index) => {
            tl.to(card, {
                x: 250,
                yPercent: -180,
                rotation: -190,
                scale: 1,
                duration: 2,
                ease: "power2.inOut",
            }, index === 0 ? `card-${index}` : "-=1.4");
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
       <>
            <div className="mt-20">
                <h1 className="text-[16px] font-bold tracking-widest text-center text-black uppercase">
                    Legacy In The Making
                </h1>
            </div>
       
            <section className="relative w-full">

            
                <div
                    ref={containerRef}
                    className="relative w-full h-screen overflow-hidden flex flex-col items-center"
                >


                    <div className="relative w-full h-full flex items-center justify-center -mt-12">
                        {cardsData.map((card, index) => {
                            const isFirstCard = index === 0;
                            const textColor = isFirstCard ? 'text-white' : 'text-black';
                            const detailOpacity = isFirstCard ? 'text-white/90' : 'text-black/80';

                            return (
                                <div
                                    key={card.id}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    style={{
                                        backgroundColor: card.color,
                                        zIndex: cardsData.length - index + 10,
                                    }}
                                    className={`absolute w-[320px] h-[460px] md:w-[620px] md:h-[620px] rounded-[40px] shadow-2xl p-10 flex flex-col items-center border border-white/10 ${textColor}`}
                                >
                                    <div>
                                        <img className='w-[200px] rounded-2xl' src={card.image} alt={card.title} />
                                    </div>
                                    <h2 className="text-[60px] font-500 mb-4 tracking-tighter text-center leading-none">{card.title}</h2>
                                    <p className={`${detailOpacity} font-500 text-center text-sm md:text-[16px]`}>
                                        {card.details}
                                    </p>
                                    {card.details2 && (
                                        <p className={`${detailOpacity} pt-6 font-500 text-center text-sm md:text-[16px]`}>
                                            {card.details2}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* স্ক্রলিং এরিয়া: এই সেকশন পার হয়ে গেলে টাইটেল আর দেখা যাবে না */}
                <div style={{ height: "300vh" }}></div>
            </section>
       
       </>
    );
};

export default StackedCards;