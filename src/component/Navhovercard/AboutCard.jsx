import { MdOutlineArrowOutward } from "react-icons/md";
import { FaUsers, FaTrophy, FaRocket, FaHandshake } from "react-icons/fa";

const AboutCard = () => {
    const stats = [
        { icon: <FaUsers className="w-4 h-4" />, value: "120+", label: "Team Members" },
        { icon: <FaTrophy className="w-4 h-4" />, value: "45+", label: "Industry Awards" },
        { icon: <FaRocket className="w-4 h-4" />, value: "500+", label: "Projects Completed" },
        { icon: <FaHandshake className="w-4 h-4" />, value: "98%", label: "Client Retention" },
    ];

    return (
        <div className="w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">About Us</h3>
                <p className="text-sm text-gray-500 mb-4">Driving search-first content since 2015</p>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    We're a team of organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, AI and LLM search.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                            <div className="text-[#2dd4bf] flex justify-center mb-1">{stat.icon}</div>
                            <p className="font-bold text-gray-800 text-lg">{stat.value}</p>
                            <p className="text-[10px] text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
                <button className="w-full py-2 text-sm font-medium text-[#2dd4bf] border-t border-gray-100 pt-4 flex items-center justify-center gap-1 hover:gap-2 transition-all">
                    Learn more about us <MdOutlineArrowOutward size={16} />
                </button>
            </div>
        </div>
    );
};

export default AboutCard;