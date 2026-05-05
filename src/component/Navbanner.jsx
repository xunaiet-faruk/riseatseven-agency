import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { FaBars, FaTimes, FaPlus } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

// ✅ একই ইমেজ হেডিং এবং ব্যাকগ্রাউন্ড উভয় জায়গায় ব্যবহার হবে
const allImages = [
    {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop"
    },
    {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop"
    },
    {
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop"
    },
    {
        url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&h=1080&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=300&h=300&fit=crop"
    },
    {
        url: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1920&h=1080&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=300&h=300&fit=crop"
    },
    {
        url: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1920&h=1080&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=300&h=300&fit=crop"
    },
];

// ✅ অ্যাওয়ার্ড লোগো
const awardLogos = [
    "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=590d094eb1537f802651cf997f550bbb",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=e302afbd58f1be1cd9a3b75a2d8969fe",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=8ab3593005a19fec2b91467ddd4869ea",
    "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UK-Content-Awards-White.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=1eb3d80746ace5c014434b6f0284de6f"
];

// ✅ পাতা আকৃতির SVG (লোগোর আগে এবং পরে)
const LeafSvg = ({ className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 38"
        fill="currentColor"
        className={`w-6 h-6 text-white ${className}`}
    >
        <path d="M25.826 36.2423C24.1628 35.2302 22.3284 34.9354 20.4357 34.7259C19.6852 34.6204 18.9236 34.4691 18.193 34.2705C17.3545 34.0474 16.5347 33.7576 15.7419 33.4062L16.4438 31.9431C17.2169 30.332 16.5375 28.3991 14.9263 27.6261L14.0759 29.3985C13.5361 30.5234 13.7046 31.805 14.4037 32.7394C13.3196 32.1373 12.3026 31.4146 11.3802 30.5845L12.6328 29.1752C13.8199 27.8396 13.6998 25.7945 12.364 24.6072L11.0579 26.0765C10.0602 27.199 9.98609 28.8225 10.7806 30.0168C10.6575 29.8939 10.5358 29.7692 10.4166 29.6422C9.49052 28.6654 8.6932 27.5814 8.02681 26.4223L9.41226 25.5441C10.9217 24.5875 11.3698 22.5885 10.4131 21.0791L8.75281 22.1315C7.7684 22.7554 7.23555 23.8229 7.24942 24.9087C6.7712 23.8595 6.39118 22.7641 6.11088 21.6429L7.61991 21.1998C9.33444 20.6962 10.3162 18.8982 9.81266 17.1835L7.92644 17.7374C6.85358 18.0523 6.06774 18.8744 5.75319 19.8655C5.57825 18.727 5.50281 17.5732 5.52904 16.4239L7.2633 16.4128C9.05024 16.4013 10.4897 14.9435 10.4782 13.1565L8.5124 13.1691C7.23035 13.1773 6.12736 13.93 5.61055 15.0146C5.73 13.7312 5.98818 12.4645 6.37211 11.2376L8.06062 11.7101C9.78144 12.1916 11.5669 11.1871 12.0486 9.46623L10.1554 8.93641C8.90673 8.58696 7.62424 9.02009 6.83038 9.94142C7.30904 8.72939 7.91213 7.56635 8.62664 6.47593L10.1355 7.40528C11.6568 8.34265 13.6501 7.86898 14.5873 6.3476L12.9135 5.31658C11.788 4.62331 10.4045 4.70222 9.38126 5.40589C9.87033 4.76053 10.4008 4.14639 10.9692 3.56888C11.3054 3.84679 11.7648 3.98423 12.2801 3.86023C12.6898 3.7616 13.1 3.57083 13.4724 3.24067C15.26 1.65751 15.26 0.0708753 15.26 0.0708753C13.0683 -0.225683 11.698 0.452629 10.855 1.28334C10.1931 1.93542 10.3013 2.86694 10.8194 3.42667C10.0988 4.13143 9.44456 4.88605 8.85752 5.68142C9.29 4.30204 8.75303 2.75334 7.46577 1.96057L5.792 0.929551C4.85463 2.45093 5.3283 4.44425 6.84968 5.3814L8.39642 6.33437C7.60321 7.51085 6.94961 8.76602 6.43887 10.0721C6.32463 8.76906 5.42108 7.61187 4.087 7.23857L2.19384 6.70876C1.71237 8.42958 2.71694 10.215 4.43776 10.6967L6.05409 11.1491C5.63353 12.4429 5.34824 13.7772 5.2004 15.1264C4.69182 13.9916 3.54916 13.2042 2.22571 13.2127L0.259922 13.2252C0.271412 15.0122 1.72927 16.4516 3.51621 16.4401L5.10068 16.4299C5.03933 17.8386 5.12691 19.2542 5.36667 20.6479C4.57671 19.6171 3.20665 19.1237 1.88601 19.5115L0 20.0652C0.503586 21.7797 2.30158 22.7615 4.01633 22.2579L5.59928 21.7931C5.90776 23.1092 6.35563 24.398 6.94419 25.6345C5.91621 24.9679 4.55222 24.917 3.44966 25.6157L1.78932 26.6681C2.74598 28.1776 4.74494 28.6257 6.25439 27.669L7.56983 26.8353C8.22039 27.9801 9.00038 29.0699 9.91151 30.0823C8.7617 29.767 7.48073 30.1015 6.63528 31.053L5.32916 32.5224C6.66476 33.7095 8.70989 33.5894 9.89721 32.2535L10.9189 31.1042C11.9553 32.0671 13.113 32.8948 14.3532 33.5737C13.0642 33.4781 11.7889 34.1658 11.196 35.4014L10.3455 37.1739C11.9566 37.9469 13.8895 37.2675 14.6625 35.6564L15.4065 34.1057C16.8386 34.7702 18.36 35.2451 19.9167 35.5122C20.2867 35.5738 20.73 35.6432 21.0908 35.6865C23.2018 35.9542 24.9211 36.55 26.5574 37.9224L27.162 37.1667C26.7397 36.8346 26.2964 36.5207 25.8264 36.2426Z" />
    </svg>
);

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
    const [scrolled, setScrolled] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Refs for GSAP
    const ellipseRef = useRef(null);
    const containerRef = useRef(null);
    const bgImageRef = useRef(null);
    const headingImageRef = useRef(null);
    const categoryWordRef = useRef(null);
    const leadersWordRef = useRef(null);

    // ✅ পেজ লোড হলে অ্যানিমেশন
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

        if (categoryWordRef.current && leadersWordRef.current) {
            gsap.set(categoryWordRef.current, { x: 0 });
            gsap.set(leadersWordRef.current, { x: 0 });
        }

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

    // ✅ ইমেজ রোটেটর (প্রতি ৫ সেকেন্ডে)
    useEffect(() => {
        const interval = setInterval(() => {
            if (categoryWordRef.current && leadersWordRef.current) {
                gsap.to(categoryWordRef.current, {
                    x: -40,
                    duration: 0.4,
                    ease: "power2.out"
                });
                gsap.to(leadersWordRef.current, {
                    x: 40,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }

            if (headingImageRef.current) {
                gsap.to(headingImageRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.3,
                    onComplete: () => {
                        setCurrentIndex((prev) => (prev + 1) % allImages.length);
                    }
                });
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // ✅ ইমেজ পরিবর্তন হলে
    useEffect(() => {
        if (bgImageRef.current) {
            gsap.fromTo(bgImageRef.current,
                { opacity: 0.3, scale: 1.1 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
            );
        }

        if (headingImageRef.current) {
            gsap.fromTo(headingImageRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1)" }
            );
        }

        setTimeout(() => {
            if (categoryWordRef.current && leadersWordRef.current) {
                gsap.to(categoryWordRef.current, {
                    x: 0,
                    duration: 0.4,
                    ease: "back.out(1)"
                });
                gsap.to(leadersWordRef.current, {
                    x: 0,
                    duration: 0.4,
                    ease: "back.out(1)"
                });
            }
        }, 600);
    }, [currentIndex]);

    // ✅ স্ক্রল ইফেক্ট
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden">

            {/* ✅ সার্কেল রিভিল ম্যাস্ক */}
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

            {/* ✅ ব্যাকগ্রাউন্ড ইমেজ */}
            <div className="absolute inset-0 overflow-hidden m-2 rounded-3xl">
                <div className="w-full h-full overflow-hidden bg-black rounded-3xl">
                    <img
                        ref={bgImageRef}
                        key={currentIndex}
                        src={allImages[currentIndex].url}
                        className="w-full h-full object-cover scale-105 transition-all duration-1000"
                        style={{ filter: "blur(6px)" }}
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            </div>

            {/* ✅ নেভবার */}
            <div className={`absolute top-0 left-0 w-full z-50 transition-all duration-500 px-2.5 pt-5 ${scrolled ? "-translate-y-full" : "translate-y-0"}`}>
                <div className="w-full flex items-center justify-between px-4 lg:px-3">
                    <a href="#" className="flex w-28 sm:w-32 md:w-40 z-20 relative">
                     <img src="/logo.png" alt="" />
                    </a>

                    <div className="hidden lg:flex items-center gap-x-1">
                        {navLinks.map((link) => (
                            <button key={link.id} className="group relative px-3 xl:px-4 py-1 font-medium text-white text-sm xl:text-base">
                                <span className="flex items-center gap-1">
                                    {link.name}
                                    {link.hasPlus && <FaPlus size={8} className="xl:text-[10px]" />}
                                </span>
                                {link.badge && (
                                    <span className="absolute -top-2 -right-2 text-[9px] xl:text-[10px] px-1 py-0.5 rounded-full bg-[#2dd4bf] text-black">
                                        {link.badge}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <button className="group inline-flex items-center gap-2 px-4 xl:px-6 py-2 xl:py-3 rounded-3xl font-medium bg-white text-black hover:rounded-xl transition-all text-sm xl:text-base">
                            Get in touch <MdOutlineArrowOutward className="text-xs" />
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(true)} className="p-2 text-white">
                            <FaBars size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* ✅ মোবাইল সাইডবার */}
            {menuOpen && (
                <div className="fixed top-0 right-0 w-[75%] h-full bg-black z-[60] flex flex-col p-6 gap-6 md:hidden">
                    <div className="flex justify-end">
                        <button onClick={() => setMenuOpen(false)} className="text-white">
                            <FaTimes size={22} />
                        </button>
                    </div>
                    {navLinks.map((link) => (
                        <button key={link.id} className="text-left text-white text-lg flex items-center justify-between">
                            <span>{link.name}</span>
                            {link.hasPlus && <FaPlus size={12} />}
                        </button>
                    ))}
                    <button className="mt-4 bg-[#2dd4bf] text-black px-4 py-2 rounded-full font-medium">
                        Get in touch <MdOutlineArrowOutward className="inline ml-1" />
                    </button>
                </div>
            )}

            {/* ✅ হিরো কন্টেন্ট */}
            <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4 py-24 sm:py-32">

                {/* ✅ অ্যাওয়ার্ড ব্যাজ - দুই লাইনে + SVG + লোগো */}
                <div className="award-badge mb-4 sm:mb-5">
                    <div className="text-[12px] sm:text-xs font-medium text-white/80 mb-3 max-w-[220px] sm:max-w-none mx-auto leading-relaxed">
                        #1 MOST RECOMMENDED<br />CONTENT MARKETING AGENCY
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        {/* বাম পাশের SVG পাতা */}
                        <LeafSvg />
                        {/* লোগো গুলো */}
                        {awardLogos.map((logo, idx) => (
                            <img key={idx} src={logo} className="w-[26px] opacity-80" alt="Award" />
                        ))}
                        {/* ডান পাশের SVG পাতা */}
                        <LeafSvg className="scale-x-[-1]" />
                        </div>
                </div>

                {/* ✅ হেডিং - We Create */}
                <div className="text-white">
                    <div className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[120px] font-medium leading-[1.1] tracking-tight">
                        <div className="flex flex-wrap justify-center gap-x-1 sm:gap-x-2 gap-y-2">
                            <span className="we-create-word inline-block">We</span>
                            <span className="we-create-word inline-block">Create</span>
                        </div>
                    </div>
                </div>

                {/* ✅ হেডিং - Category [Image] Leaders */}
                <div className="text-white mt-1 sm:mt-2">
                    <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 gap-y-2 sm:gap-y-3 text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[120px] font-medium leading-[1.1] tracking-tight">
                        <span ref={categoryWordRef} className="inline-block transition-all duration-300">
                            Category
                        </span>

                        <span className="inline-block w-[14vw] h-[14vw] sm:w-[12vw] sm:h-[12vw] md:w-[9vw] md:h-[9vw] lg:w-[8vw] lg:h-[8vw] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                ref={headingImageRef}
                                key={currentIndex}
                                src={allImages[currentIndex].thumbnail}
                                className="w-full h-full object-cover"
                                alt="Category visual"
                            />
                        </span>

                        <span ref={leadersWordRef} className="inline-block transition-all duration-300">
                            Leaders
                        </span>
                    </div>
                </div>

                {/* ✅ সাবটাইটেল - (নিচের প্ল্যাটফর্ম লোগো বাদ দেওয়া হয়েছে) */}
                <p className="subtitle-text mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl lg:text-[30px] text-white/80 font-medium px-2">
                    on every searchable platform
                </p>
            </div>

            {/* ✅ নিচের তথ্য */}
            <div className="bottom-info absolute bottom-0 left-0 z-20 w-full p-3 sm:p-4 md:p-7 flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                <p className="text-[#FFFFFF] text-[16px] font-400 sm:text-xs md:text-sm max-w-full sm:max-w-md text-center sm:text-left">
                    Organic media planners creating, distributing & optimising <br className="hidden sm:block" />
                    <strong className="font-500 text-white">search-first</strong> content for SEO, Social, PR, Ai and LLM search
                </p>
                <p className="text-[#FFFFFF] text-[16px] font-500 sm:text-xs md:text-sm text-center sm:text-right">
                    <strong className="font-500 text-white">4 Global Offices serving</strong><br />
                    UK, USA (New York) &amp; EU
                </p>
            </div>

            <style>{`
                .we-create-word {
                    display: inline-block;
                    white-space: nowrap;
                }
                @media (max-width: 500px) {
                    .we-create-word {
                        white-space: normal;
                    }
                }
            `}</style>
        </div>
    );
};

export default Navbanner;