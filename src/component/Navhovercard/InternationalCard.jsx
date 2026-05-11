import { MdOutlineArrowOutward } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaBuilding, FaGlobeAmericas } from "react-icons/fa";

const InternationalCard = () => {
    const offices = [
        {
            icon: <FaBuilding className="w-5 h-5" />,
            location: "London, UK",
            role: "EMEA Headquarters",
            size: "45+ team members",
            color: "text-blue-600"
        },
        {
            icon: <FaGlobeAmericas className="w-5 h-5" />,
            location: "New York, USA",
            role: "North America Hub",
            size: "38+ team members",
            color: "text-red-600"
        },
        {
            icon: <IoLocationOutline className="w-5 h-5" />,
            location: "Berlin, Germany",
            role: "EU Operations",
            size: "28+ team members",
            color: "text-yellow-600"
        },
    ];

    return (
        <div className="w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Presence</h3>
                <p className="text-sm text-gray-500 mb-4">4 offices serving clients worldwide</p>
                <div className="space-y-3">
                    {offices.map((office, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer border border-gray-100">
                            <div className={`${office.color} mt-0.5`}>{office.icon}</div>
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 text-sm">{office.location}</p>
                                <p className="text-xs text-gray-500">{office.role}</p>
                                <p className="text-[10px] text-[#2dd4bf] mt-1">{office.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-4 w-full py-2 text-sm font-medium text-[#2dd4bf] border-t border-gray-100 pt-4 flex items-center justify-center gap-1 hover:gap-2 transition-all">
                    View global network <MdOutlineArrowOutward size={16} />
                </button>
            </div>
        </div>
    );
};

export default InternationalCard;