import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { FaBars, FaTimes, FaPlus } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

// ইমেজ এবং লোগো ডাটা (আপনার কোড অনুযায়ী)
const allImages = [
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=1198&h=1126&q=100&auto=format&fit=crop&dm=1751402284&s=4ad46c03819812b327e9b4643c1b0e6c", thumbnail: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=1198&h=1126&q=100&auto=format&fit=crop&dm=1751402284&s=4ad46c03819812b327e9b4643c1b0e6c" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1", thumbnail: "https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034&s=7fc16049313aefb0ea160470af9ae379", thumbnail: "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034&s=7fc16049313aefb0ea160470af9ae379" },
    { url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&h=1080&fit=crop", thumbnail: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=300&h=300&fit=crop" },
    { url: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1920&h=1080&fit=crop", thumbnail: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=300&h=300&fit=crop" },
    { url: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1920&h=1080&fit=crop", thumbnail: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=300&h=300&fit=crop" },
];

const awardLogos = [
    "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=590d094eb1537f802651cf997f550bbb",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=e302afbd58f1be1cd9a3b75a2d8969fe",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=8ab3593005a19fec2b91467ddd4869ea",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UK-Content-Awards-White.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=1eb3d80746ace5c014434b6f0284de6f"
];

const platformLogos = [
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/gogle.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=a8fbaa30c034a9f0f3e8c45a72821dfa", name: "Google" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/gemini.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847619&s=85f2d07d5813e1e94a205ada14ee59de", name: "Gemini" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/chat-gpt.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847621&s=6b1e43856b03001be774a0e64ca0f5e3", name: "ChatGPT" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/tiktok.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=f9eaa2ee7565c9f6bd8ef7f6b6eef163", name: "TikTok" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/youtube.png?w=1600&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=fc74e32de8b4a25b06c511128af1dced", name: "YouTube" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/pinterest.png?w=1600&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=ca78d434f542f8b3168dd7a4ea7bbe73", name: "Pinterest" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/amazon.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847619&s=949d16b0f2c81d21db457ea97fc85885", name: "Amazon" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/reddit.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=02ce04fce3083beec01d0f1370131602", name: "Reddit" },
    { url: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Social/White/giphy.png?w=2000&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847619&s=bec4a9b8c55146298993b8359f83a2c7", name: "Giphy" }
];

const navLinks = [
    { name: "Services", id: "services", hasPlus: true },
    { name: "International", id: "international", hasPlus: true },
    { name: "About", id: "about", hasPlus: true },
    { name: "Work", id: "work", hasPlus: false, badge: "25" },
    { name: "Careers", id: "careers", hasPlus: false },
    { name: "Blog", id: "blog", hasPlus: false },
    { name: "Webinar", id: "webinar", hasPlus: false },
];

const Navbanner = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [hasBackground, setHasBackground] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const ellipseRef = useRef(null);
    const bgImageRef = useRef(null);
    const headingImageRef = useRef(null);
    const categoryWordRef = useRef(null);
    const leadersWordRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            // ৫ পিক্সেলের বেশি স্ক্রল করলে ব্যাকগ্রাউন্ড আসবে এবং গ্যাপ চলে যাবে
            setHasBackground(currentScrollY > 5);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        gsap.to(ellipseRef.current, {
            attr: { rx: 2700, ry: 2150 },
            duration: 1.5,
            ease: "power2.out",
            delay: 0.2,
        });

        const weCreateWords = document.querySelectorAll(".we-create-word");
        gsap.fromTo(weCreateWords,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1)", delay: 0.3 }
        );

        gsap.fromTo(".subtitle-text",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, delay: 1.1, ease: "power2.out" }
        );
        gsap.fromTo(".bottom-info",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, delay: 1.3, ease: "power2.out" }
        );
        gsap.fromTo(".award-badge",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" }
        );
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (categoryWordRef.current && leadersWordRef.current) {
                gsap.to(categoryWordRef.current, { x: -40, duration: 0.4, ease: "power2.out" });
                gsap.to(leadersWordRef.current, { x: 40, duration: 0.4, ease: "power2.out" });
            }
            if (headingImageRef.current) {
                gsap.to(headingImageRef.current, {
                    opacity: 0, scale: 0.8, duration: 0.3,
                    onComplete: () => setCurrentIndex((prev) => (prev + 1) % allImages.length)
                });
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (bgImageRef.current) {
            gsap.fromTo(bgImageRef.current, { opacity: 0.3, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" });
        }
        if (headingImageRef.current) {
            gsap.fromTo(headingImageRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1)" });
        }
        setTimeout(() => {
            if (categoryWordRef.current && leadersWordRef.current) {
                gsap.to(categoryWordRef.current, { x: 0, duration: 0.4, ease: "back.out(1)" });
                gsap.to(leadersWordRef.current, { x: 0, duration: 0.4, ease: "back.out(1)" });
            }
        }, 600);
    }, [currentIndex]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* SVG Mask Background */}
            <div className="fixed inset-0 w-screen h-screen z-[100] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="none">
                    <defs>
                        <mask id="circleMask">
                            <rect width="100%" height="100%" fill="white" />
                            <ellipse ref={ellipseRef} cx="960" cy="2000" rx="0" ry="0" fill="black" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="#111212" mask="url(#circleMask)" />
                </svg>
            </div>

            {/* Banner Background */}
            <div className="absolute inset-0 overflow-hidden m-2 rounded-3xl">
                <div className="w-full h-full overflow-hidden bg-black rounded-3xl">
                    <img
                        ref={bgImageRef}
                        key={currentIndex}
                        src={allImages[currentIndex].url}
                        className="w-full h-full object-cover scale-105"
                        style={{ filter: "blur(6px)" }}
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            </div>

            {/* ✅ UPDATED NAVBAR SECTION */}
            <div className={`fixed left-0 right-0 z-[150] transition-all duration-500 ease-in-out
                ${isVisible ? "translate-y-0" : "-translate-y-full"}
                ${hasBackground ? "top-0" : "top-4"}`}
            >
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <nav
                        className={`transition-all duration-500 ease-in-out flex items-center justify-center w-full
                        ${hasBackground
                                ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10 rounded-none"
                                : "bg-transparent py-4 rounded-3xl"}`}
                    >
                        <div className="w-full flex items-center justify-between">
                            {/* Logo */}
                            <a href="#" className="flex w-24 sm:w-32 md:w-40 shrink-0">
                                <svg className="w-full h-full fill-current text-white" viewBox="0 0 168 21">
                                    <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z"></path>
                                    <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z"></path>
                                    <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z"></path>
                                    <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z"></path>
                                    <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z"></path>
                                    <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z"></path>
                                    <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z"></path>
                                </svg>
                            </a>

                            {/* Desktop Links */}
                            <div className="hidden lg:flex items-center gap-x-1 xl:gap-x-2">
                                {navLinks.map((link) => (
                                    <button key={link.id} className="relative px-3 py-2 font-medium text-white text-sm xl:text-base hover:opacity-70 transition-opacity">
                                        <span className="flex items-center gap-1">
                                            {link.name}
                                            {link.hasPlus && <FaPlus size={8} />}
                                        </span>
                                        {link.badge && (
                                            <span className="absolute -top-1 -right-0 text-[8px] px-1.5 py-0.5 rounded-full bg-[#2dd4bf] text-black font-bold">
                                                {link.badge}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* CTA & Toggle */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                {/* lg:inline-flex এর ফলে এটি শুধু ল্যাপটপ বা বড় স্ক্রিনে দেখাবে, মোবাইল ও ট্যাবলেটে লুকানো থাকবে */}
                                <button className="hidden lg:inline-flex group items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-white text-black hover:bg-[#2dd4bf] transition-all text-xs xl:text-sm">
                                    Get in touch <MdOutlineArrowOutward />
                                </button>

                                {/* মোবাইল এবং ট্যাবলেটে মেনু বাটনটি দেখাবে */}
                                <button onClick={() => setMenuOpen(true)} className="lg:hidden p-2 text-white">
                                    <FaBars size={22} />
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile/Tablet Menu */}
            {menuOpen && (
                <div className="fixed inset-0 w-full h-full bg-black z-[250] flex flex-col p-8 overflow-y-auto">
                    <div className="flex justify-end">
                        <button onClick={() => setMenuOpen(false)} className="text-white p-2">
                            <FaTimes size={32} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 mt-10">
                        {navLinks.map((link) => (
                            <button key={link.id} className="text-left text-white text-3xl sm:text-4xl font-semibold flex items-center justify-between border-b border-white/10 pb-5 hover:text-[#2dd4bf] transition-colors">
                                <span>{link.name}</span>
                                {link.hasPlus && <FaPlus size={20} />}
                            </button>
                        ))}
                    </div>
                    <button className="mt-12 bg-white text-black px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2">
                        Get in touch <MdOutlineArrowOutward size={24} />
                    </button>
                </div>
            )}

            {/* Hero Content Section */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-48 pb-32">
                <div className="award-badge mb-8">
                    <div className="text-[10px] sm:text-xs font-bold text-white/80 mb-4 tracking-widest uppercase">
                        #1 MOST RECOMMENDED<br />CONTENT MARKETING AGENCY
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        {/* Award SVGs and Logos (Same as your code) */}
                        {awardLogos.map((logo, idx) => (
                            <img key={idx} src={logo} className="w-8 sm:w-10 opacity-90" alt="Award" />
                        ))}
                    </div>
                </div>

                <div className="text-white">
                    <div className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[110px] xl:text-[120px] font-medium leading-[1.1] tracking-tight">
                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
                            <span className="we-create-word">We</span>
                            <span className="we-create-word">Create</span>
                        </div>
                    </div>
                </div>

                <div className="text-white mt-2">
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[110px] xl:text-[120px] font-medium leading-[1.1] tracking-tight">
                        <span ref={categoryWordRef} className="inline-block">Category</span>
                        <span className="inline-block w-[14vw] h-[14vw] sm:w-[12vw] sm:h-[12vw] md:w-[9vw] md:h-[9vw] lg:w-[8vw] lg:h-[8vw] rounded-2xl overflow-hidden shadow-2xl shrink-0">
                            <img ref={headingImageRef} key={currentIndex} src={allImages[currentIndex].thumbnail} className="w-full h-full object-cover" alt="visual" />
                        </span>
                        <span ref={leadersWordRef} className="inline-block">Leaders</span>
                    </div>
                </div>

                <p className="subtitle-text mt-8 text-base sm:text-xl md:text-2xl lg:text-[28px] xl:text-[30px] text-white/80 font-medium">
                    on every searchable platform
                </p>

                <div className="platform-logos mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 px-4">
                    {platformLogos.map((logo, idx) => (
                        <img key={idx} src={logo.url} className="w-[28px] sm:w-[35px] md:w-[45px] lg:w-[50px] opacity-70 hover:opacity-100 transition-opacity" alt={logo.name} />
                    ))}
                </div>
            </div>

            {/* Bottom Info Section */}
            <div className="bottom-info absolute bottom-0 left-0 z-20 w-full p-6 md:p-10 flex flex-col sm:flex-row justify-between items-end gap-6 pointer-events-none">
                <p className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base max-w-[280px] sm:max-w-md text-left leading-relaxed">
                    Organic media planners creating, distributing & optimising <br className="hidden md:block" />
                    <strong className="font-bold">search-first</strong> content for SEO, Social, PR, Ai and LLM search
                </p>
                <p className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base text-right leading-relaxed">
                    <strong className="font-bold">4 Global Offices serving</strong><br />
                    UK, USA (New York) & EU
                </p>
            </div>

            <style>{`
                .we-create-word { display: inline-block; white-space: nowrap; }
                @media (max-width: 500px) { .we-create-word { white-space: normal; } }
            `}</style>
        </div>
    );
};

export default Navbanner;