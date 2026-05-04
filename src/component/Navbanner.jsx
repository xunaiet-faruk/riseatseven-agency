import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPlus } from "react-icons/fa";

const images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.unsplash.com/photo-1502767089025-6572583495b0",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
];

const navLinks = [
    { name: "Services", id: "services" },
    { name: "International", id: "international" },
    { name: "About", id: "about" },
    { name: "Work", id: "work" },
    { name: "Careers", id: "careers" },
    { name: "Blog", id: "blog" },
    { name: "Webinar", id: "webinar" },
];

const Navbanner = () => {
    const [index, setIndex] = useState(0);
    const [active, setActive] = useState("services");
    const [menuOpen, setMenuOpen] = useState(false);

    // 🔥 background image change
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden text-white">

            {/* 🔥 Background Image */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={images[index]}
                    src={`${images[index]}?auto=format&fit=crop&w=1600&q=80`}
                    className="absolute w-full h-full object-cover blur-2xl scale-110"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* 🔥 Navbar */}
            <div className="absolute top-0 left-0 w-full z-30 px-6 py-4 flex items-center justify-between">

                <h1 className="text-lg font-semibold">Rise at Seven</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setActive(link.id)}
                            className={`relative px-3 py-1 rounded-full text-sm transition flex items-center gap-1 ${active === link.id
                                    ? "bg-white text-black"
                                    : "hover:bg-white/20"
                                }`}
                        >
                            {link.name}

                            {/* + icon */}
                            {(link.name === "Services" ||
                                link.name === "International" ||
                                link.name === "About") && (
                                    <FaPlus size={10} />
                                )}

                            {/* Badge for Work */}
                            {link.name === "Work" && (
                                <span className="absolute -top-2 -right-3 text-[10px] px-2 py-[2px] rounded-full bg-[#B2F6E3] text-black">
                                    25
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
                        Get In Touch →
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden z-40">
                    <button onClick={() => setMenuOpen(true)}>
                        <FaBars size={20} />
                    </button>
                </div>
            </div>

            {/* 🔥 Mobile Sidebar */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 right-0 w-[75%] h-full bg-black z-40 flex flex-col p-6 gap-6 md:hidden"
                    >
                        {/* Cancel Button */}
                        <div className="flex justify-end">
                            <button onClick={() => setMenuOpen(false)}>
                                <FaTimes size={22} />
                            </button>
                        </div>

                        {/* Links */}
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    setActive(link.id);
                                    setMenuOpen(false);
                                }}
                                className="text-left text-lg flex items-center justify-between"
                            >
                                <span>{link.name}</span>

                                {(link.name === "Services" ||
                                    link.name === "International" ||
                                    link.name === "About") && (
                                        <FaPlus size={12} />
                                    )}
                            </button>
                        ))}

                        {/* CTA */}
                        <button className="mt-4 bg-white text-black px-4 py-2 rounded-full">
                            Get In Touch →
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 🔥 Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">

                <p className="text-xs mb-4 opacity-80">
                    #1 MOST RECOMMENDED CONTENT MARKETING AGENCY
                </p>

                <h1 className="text-[50px] md:text-[120px] leading-[0.9] font-medium">
                    We Create
                </h1>

                <h1 className="flex items-center gap-4 text-[50px] md:text-[140px] leading-[0.9] font-medium">
                    Category

                    {/* 🔥 Inline Image */}
                    <span className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-2xl overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={images[index]}
                                src={`${images[index]}?auto=format&fit=crop&w=300&q=80`}
                                className="w-full h-full object-cover"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.2, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </span>

                    Leaders
                </h1>

                <p className="mt-6 text-lg md:text-2xl opacity-80">
                    on every searchable platform
                </p>
            </div>
        </div>
    );
};

export default Navbanner;