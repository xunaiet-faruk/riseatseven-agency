import { MdOutlineArrowOutward } from "react-icons/md";
import { FaNewspaper, FaFileAlt, FaVideo, FaPodcast } from "react-icons/fa";

const BlogResourcesCard = () => {
    const resources = [
        { icon: <FaNewspaper className="w-4 h-4" />, title: "Latest Blog Posts", desc: "Weekly insights & updates" },
        { icon: <FaFileAlt className="w-4 h-4" />, title: "Case Studies", desc: "Success stories & metrics" },
        { icon: <FaVideo className="w-4 h-4" />, title: "Video Library", desc: "Tutorials & webinars" },
        { icon: <FaPodcast className="w-4 h-4" />, title: "Podcast", desc: "Expert interviews" },
    ];

    return (
        <div className="w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Blog & Resources</h3>
                <p className="text-sm text-gray-500 mb-4">Stay updated with latest insights</p>
                <div className="space-y-3">
                    {resources.map((resource, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                            <div className="text-[#2dd4bf] mt-0.5">{resource.icon}</div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800 text-sm">{resource.title}</p>
                                <p className="text-xs text-gray-500">{resource.desc}</p>
                            </div>
                            <MdOutlineArrowOutward size={14} className="text-gray-400" />
                        </div>
                    ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="bg-gradient-to-r from-[#2dd4bf]/10 to-transparent p-3 rounded-xl">
                        <p className="text-xs font-semibold text-gray-800">Featured Whitepaper</p>
                        <p className="text-[10px] text-gray-500 mt-1">The Future of Search-First Content Marketing 2025</p>
                        <button className="mt-2 text-xs text-[#2dd4bf] font-medium flex items-center gap-1">
                            Download free <MdOutlineArrowOutward size={12} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogResourcesCard;