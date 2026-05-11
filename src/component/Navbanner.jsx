import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { FaBars, FaTimes, FaPlus } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import ServicesCard from "./Navhovercard/ServicesCard";
import IndustriesCard from "./Navhovercard/IndustriesCard";
import InternationalCard from "./Navhovercard/InternationalCard";
import AboutCard from "./Navhovercard/AboutCard";
import BlogResourcesCard from "./Navhovercard/BlogResourcesCard";

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
const LeafIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 38"
        fill="currentColor"
        className={`w-5 sm:w-6 md:w-8 text-white ${className}`}
    >
        <path d="M25.826 36.2423C24.1628 35.2302 22.3284 34.9354 20.4357 34.7259C19.6852 34.6204 18.9236 34.4691 18.193 34.2705C17.3545 34.0474 16.5347 33.7576 15.7419 33.4062L16.4438 31.9431C17.2169 30.332 16.5375 28.3991 14.9263 27.6261L14.0759 29.3985C13.5361 30.5234 13.7046 31.805 14.4037 32.7394C13.3196 32.1373 12.3026 31.4146 11.3802 30.5845L12.6328 29.1752C13.8199 27.8396 13.6998 25.7945 12.364 24.6072L11.0579 26.0765C10.0602 27.199 9.98609 28.8225 10.7806 30.0168C10.6575 29.8939 10.5358 29.7692 10.4166 29.6422C9.49052 28.6654 8.6932 27.5814 8.02681 26.4223L9.41226 25.5441C10.9217 24.5875 11.3698 22.5885 10.4131 21.0791L8.75281 22.1315C7.7684 22.7554 7.23555 23.8229 7.24942 24.9087C6.7712 23.8595 6.39118 22.7641 6.11088 21.6429L7.61991 21.1998C9.33444 20.6962 10.3162 18.8982 9.81266 17.1835L7.92644 17.7374C6.85358 18.0523 6.06774 18.8744 5.75319 19.8655C5.57825 18.727 5.50281 17.5732 5.52904 16.4239L7.2633 16.4128C9.05024 16.4013 10.4897 14.9435 10.4782 13.1565L8.5124 13.1691C7.23035 13.1773 6.12736 13.93 5.61055 15.0146C5.73 13.7312 5.98818 12.4645 6.37211 11.2376L8.06062 11.7101C9.78144 12.1916 11.5669 11.1871 12.0486 9.46623L10.1554 8.93641C8.90673 8.58696 7.62424 9.02009 6.83038 9.94142C7.30904 8.72939 7.91213 7.56635 8.62664 6.47593L10.1355 7.40528C11.6568 8.34265 13.6501 7.86898 14.5873 6.3476L12.9135 5.31658C11.788 4.62331 10.4045 4.70222 9.38126 5.40589C9.87033 4.76053 10.4008 4.14639 10.9692 3.56888C11.3054 3.84679 11.7648 3.98423 12.2801 3.86023C12.6898 3.7616 13.1 3.57083 13.4724 3.24067C15.26 1.65751 15.26 0.0708753 15.26 0.0708753C13.0683 -0.225683 11.698 0.452629 10.855 1.28334C10.1931 1.93542 10.3013 2.86694 10.8194 3.42667C10.0988 4.13143 9.44456 4.88605 8.85752 5.68142C9.29 4.30204 8.75303 2.75334 7.46577 1.96057L5.792 0.929551C4.85463 2.45093 5.3283 4.44425 6.84968 5.3814L8.39642 6.33437C7.60321 7.51085 6.94961 8.76602 6.43887 10.0721C6.32463 8.76906 5.42108 7.61187 4.087 7.23857L2.19384 6.70876C1.71237 8.42958 2.71694 10.215 4.43776 10.6967L6.05409 11.1491C5.63353 12.4429 5.34824 13.7772 5.2004 15.1264C4.69182 13.9916 3.54916 13.2042 2.22571 13.2127L0.259922 13.2252C0.271412 15.0122 1.72927 16.4516 3.51621 16.4401L5.10068 16.4299C5.03933 17.8386 5.12691 19.2542 5.36667 20.6479C4.57671 19.6171 3.20665 19.1237 1.88601 19.5115L0 20.0652C0.503586 21.7797 2.30158 22.7615 4.01633 22.2579L5.59928 21.7931C5.90776 23.1092 6.35563 24.398 6.94419 25.6345C5.91621 24.9679 4.55222 24.917 3.44966 25.6157L1.78932 26.6681C2.74598 28.1776 4.74494 28.6257 6.25439 27.669L7.56983 26.8353C8.22039 27.9801 9.00038 29.0699 9.91151 30.0823C8.7617 29.767 7.48073 30.1015 6.63528 31.053L5.32916 32.5224C6.66476 33.7095 8.70989 33.5894 9.89721 32.2535L10.9189 31.1042C11.9553 32.0671 13.113 32.8948 14.3532 33.5737C13.0642 33.4781 11.7889 34.1658 11.196 35.4014L10.3455 37.1739C11.9566 37.9469 13.8895 37.2675 14.6625 35.6564L15.4065 34.1057C16.8386 34.7702 18.36 35.2451 19.9167 35.5122C20.2867 35.5738 20.73 35.6432 21.0908 35.6865C23.2018 35.9542 24.9211 36.55 26.5574 37.9224L27.162 37.1667C26.7397 36.8346 26.2964 36.5207 25.8264 36.2426Z" />
    </svg>
)

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
    { name: "Industries", id: "Industries", hasPlus: true },
    { name: "International", id: "international", hasPlus: true },
    { name: "About", id: "about", hasPlus: true },
    { name: "Work", id: "work", hasPlus: false, badge: "25" },
    { name: "Careers", id: "careers", hasPlus: false },
    { name: "Blog&Resourses", id: "blog", hasPlus: false },
    { name: "Webinar", id: "webinar", hasPlus: false },
];

const Navbanner = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [navbarBgActive, setNavbarBgActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const bannerRef = useRef(null);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });
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
            setNavbarBgActive(currentScrollY > 0);
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

    const handleLinkHover = (linkId, event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setHoverPosition({
            top: rect.bottom + window.scrollY + 10,
            left: rect.left + window.scrollX - 50,
        });
        setHoveredLink(linkId);
    };

    return (
        <div ref={bannerRef} className="relative w-full overflow-hidden mb-12 rounded-3xl my-2 ">
            {}
            <div className="fixed inset-0 w-full h-full z-[100] pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
                    <defs>
                        <mask id="circleMask">
                            <rect width="100%" height="100%" fill="white" />
                            <ellipse ref={ellipseRef} cx="960" cy="2000" rx="0" ry="0" fill="black" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="#B2F6E3" mask="url(#circleMask)" />
                </svg>
            </div>

            {}
            <div className="absolute inset-0 w-full overflow-hidden">
                <div className="w-full h-full overflow-hidden bg-black">
                    <img
                        ref={bgImageRef}
                        key={currentIndex}
                        src={allImages[currentIndex].url}
                        className="w-full h-full object-cover scale-105 rounded-2xl"
                        style={{ filter: "blur(6px)" }}
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            </div>

            {}
            <div className={`fixed top-0 left-0 right-0 w-full z-[150] transition-all duration-500 ease-in-out
                ${isVisible ? "translate-y-0" : "-translate-y-full"}
            `}>
                <nav
                    className={`container mx-auto transition-all  duration-500  lg:rounded-full ease-in-out px-4 sm:px-6 md:px-1
                        ${navbarBgActive
                        ? "bg-[#9ca3bc]/80 text-black backdrop-blur-xl py-3 "
                            : "bg-transparent py-20 md:py-14 lg:py-14"}
                    `}
                >
                    <div className="container lg:px-5 md:px-4 px-3 mx-auto flex items-center justify-between">
                        {}
                        <a href="#" className="flex w-24 sm:w-28 md:w-36 lg:w-35 shrink-0">
                            <svg
                                className={`w-full h-full object-contain fill-current transition-colors
            ${navbarBgActive ? "text-black" : "text-white"}
        `}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 168 21"
                                fill="none"
                            >                                <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z" />
                                <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z" />
                                <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z" />
                                <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z" />
                                <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z" />
                                <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z" />
                                <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z" />
                                <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z" />
                                <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z" />
                                <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z" />
                                <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z" />
                                <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z" />
                                <path d="M164.759 7.94414L166.061 8.71517V8.08955L165.395 7.69051C165.437 7.68172 165.48 7.66954 165.521 7.65466C165.869 7.53157 166.061 7.24209 166.061 6.84034C166.061 6.57725 165.966 6.33579 165.801 6.17753C165.583 5.9638 165.277 5.93945 165.065 5.93945H164.191V8.63807H164.758V7.94346L164.759 7.94414ZM164.908 7.22856H164.76V6.47715H165.043C165.261 6.47715 165.495 6.57251 165.495 6.84102C165.495 7.10953 165.297 7.22856 164.908 7.22856H164.908Z" />
                                <path d="M165.127 10.1622C166.714 10.1622 168 8.87583 168 7.28913C168 5.70242 166.714 4.41602 165.127 4.41602C163.54 4.41602 162.254 5.70242 162.254 7.28913C162.254 8.87583 163.54 10.1622 165.127 10.1622ZM165.127 5.22763C166.264 5.22763 167.189 6.15219 167.189 7.28913C167.189 8.42606 166.264 9.35062 165.127 9.35062C163.99 9.35062 163.066 8.42606 163.066 7.28913C163.066 6.15219 163.99 5.22763 165.127 5.22763Z" />
                            </svg>
                        </a>

                        {}
                        {}
                        <div className="hidden lg:flex items-center gap-x-1 xl:gap-x-2 relative">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onMouseEnter={(e) => {
                                        if (link.name === "Services" || link.name === "Industries" ||
                                            link.name === "International" || link.name === "About" ||
                                            link.name === "Blog&Resourses") {
                                            handleLinkHover(link.id, e);
                                        }
                                    }}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    className={`relative hover:bg-white hover:rounded-full hover:text-black cursor-pointer hover:py-1 px-2 py-2 font-medium text-sm xl:text-base transition-all duration-300 
            ${navbarBgActive ? "text-black" : "text-white"}`}
                                >
                                    <span className="flex text-[16px] font-medium items-center gap-1">
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

                        {}
                        {hoveredLink && (
                            <div
                                className="hidden lg:block fixed z-[200] animate-in fade-in duration-200"
                                style={{
                                    top: hoverPosition.top,
                                    left: hoverPosition.left,
                                }}
                                onMouseEnter={() => setHoveredLink(hoveredLink)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                {hoveredLink === "services" && <ServicesCard />}
                                {hoveredLink === "Industries" && <IndustriesCard />}
                                {hoveredLink === "international" && <InternationalCard />}
                                {hoveredLink === "about" && <AboutCard />}
                                {hoveredLink === "blog" && <BlogResourcesCard />}
                            </div>
                        )}

                        {}
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button
                                className={`hidden lg:inline-flex group relative overflow-hidden items-center justify-center px-3 h-[35px] rounded-full font-medium transition-all text-xs xl:text-sm
    ${navbarBgActive
                                        ? "bg-black text-white"
                                        : "bg-white text-black"
                                    }`}
                            >
                                {}
                                <div className="relative h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">

                                    {}
                                    <span className="flex items-center gap-2 h-full whitespace-nowrap">
                                        Get in touch <MdOutlineArrowOutward />
                                    </span>

                                    {}
                                    <span className="absolute top-full flex items-center gap-2 h-full whitespace-nowrap">
                                        Get in touch <MdOutlineArrowOutward />
                                    </span>

                                </div>
                            </button>

                            {}
                            <button onClick={() => setMenuOpen(true)} className="lg:hidden p-2 text-white">
                                <FaBars size={22} />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {}
            {menuOpen && (
                <div className="fixed inset-0 w-full h-full bg-black  rounded-3xl  z-[250] flex flex-col overflow-y-auto">
                    {}
                    <div className="sticky top-0 bg-black z-10 p-6 pb-4 flex justify-end border-b border-white/10">
                        <button onClick={() => setMenuOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                            <FaTimes size={28} />
                        </button>
                    </div>

                    {}
                    <div className="flex-1 px-8 pt-8 pb-12">
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-left text-white text-2xl sm:text-3xl font-semibold flex items-center justify-between border-b border-white/10 pb-4 hover:text-[#2dd4bf] transition-colors group"
                                >
                                    <span>{link.name}</span>
                                    {link.hasPlus ? (
                                        <FaPlus size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                                    ) : link.badge && (
                                        <span className="text-xs bg-[#2dd4bf] text-black px-2 py-1 rounded-full">
                                            {link.badge}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        <button className="group relative overflow-hidden w-full mt-10 bg-white text-black h-14 rounded-full font-bold text-base flex items-center justify-center hover:bg-[#2dd4bf] transition-all duration-300">

                            {}
                            <div className="relative h-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">

                                {}
                                <span className="flex items-center justify-center gap-2 h-full w-full px-6 whitespace-nowrap">
                                    Get in touch <MdOutlineArrowOutward size={20} />
                                </span>

                                {}
                                <span className="absolute top-full flex items-center justify-center gap-2 h-full w-full px-6 whitespace-nowrap">
                                    Get in touch <MdOutlineArrowOutward size={20} />
                                </span>

                            </div>
                        </button>
                    </div>
                </div>
            )}

            {}
            <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-12  md:pt-20 lg:pt-30 pb- md:pb-32 lg:pb-40">
                <div className="award-badge mb-6 md:mb-8">
                    <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white/80 mb-3 md:mb-4 tracking-widest uppercase">
                        #1 MOST RECOMMENDED<br />CONTENT MARKETING AGENCY
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                       
                        <LeafIcon className="opacity-80" />

                     
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            {awardLogos.map((logo, idx) => (
                                <img
                                    key={idx}
                                    src={logo}
                                    className="w-7 sm:w-8 md:w-10 lg:w-12 opacity-90 object-contain"
                                    alt="Award"
                                />
                            ))}
                        </div>

                     
                        <LeafIcon className="opacity-80 scale-x-[-1]" />
                    </div>
                </div>

                <div className="text-white">
                    <div className="text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[100px] xl:text-[120px] font-medium leading-[1.1] tracking-tight">
                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
                            <span className="we-create-word">We</span>
                            <span className="we-create-word">Create</span>
                        </div>
                    </div>
                </div>

                <div className="text-white mt-1 md:mt-2">
                    <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-2 text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[100px] xl:text-[120px] font-medium leading-[1.1] tracking-tight">
                        <span ref={categoryWordRef} className="inline-block">Category</span>
                        <span className="inline-block w-[13vw] h-[13vw] sm:w-[10vw] sm:h-[10vw] md:w-[8vw] md:h-[8vw] lg:w-[90px] lg:h-[90px] xl:w-[110px] xl:h-[110px] rounded-2xl overflow-hidden shadow-2xl shrink-0">
                            <img ref={headingImageRef} key={currentIndex} src={allImages[currentIndex].thumbnail} className="w-full h-full object-cover" alt="visual" />
                        </span>
                        <span ref={leadersWordRef} className="inline-block">Leaders</span>
                    </div>
                </div>

                <p className="subtitle-text mt-5 sm:mt-6 md:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-white/80 font-medium">
                    on every searchable platform
                </p>

                {}
                <div className="platform-logos mt-8 sm:mt-10 md:mt-12 hidden lg:flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-12 px-4">
                    {platformLogos.map((logo, idx) => (
                        <img key={idx} src={logo.url} className="w-7 sm:w-8 md:w-10 lg:w-12 opacity-70 hover:opacity-100 transition-opacity" alt={logo.name} />
                    ))}
                </div>
            </div>

            {}
            <div className="bottom-info absolute bottom-0 left-0 z-20 w-full p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 pointer-events-none">
                <p className="text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm max-w-[240px] sm:max-w-xs md:max-w-sm text-left leading-relaxed hidden sm:block">
                    Organic media planners creating, distributing & optimising <br className="hidden lg:block" />
                    <strong className="font-bold">search-first</strong> content for SEO, Social, PR, Ai and LLM search
                </p>
                <p className="text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm md:text-left text-center leading-relaxed w-full sm:w-auto">
                    <strong className="font-bold">4 Global Offices serving</strong><br />
                    UK, USA (New York) & EU
                </p>
            </div>

            <style>{`
                .we-create-word { display: inline-block; white-space: nowrap; }
                @media (max-width: 480px) { 
                    .we-create-word { white-space: normal; } 
                }
            `}</style>
        </div>
    );
};

export default Navbanner;

