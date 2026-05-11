import { MdOutlineArrowOutward } from "react-icons/md";
import { FaUsers, FaTrophy, FaRocket, FaHandshake } from "react-icons/fa";

const AboutCard = () => {


    return (
        <div className="p-4">
                 {}
                 <div className="bg-white group relative w-full max-w-[560px] h-[230px] rounded-[2rem] p-4 flex items-center justify-between shadow-sm border border-gray-50 overflow-hidden transition-all duration-500 hover:shadow-xl">
     
                     {}
                     <div className="flex-1 flex flex-col items-center justify-center px-4">
                         <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-black leading-tight">
                             About Us <br/>
                            Meet The Riser <br/>
                             Cukture<br/>
                             Testominal<br/>
                         </h1>
                         {}
                         <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <MdOutlineArrowOutward className="text-[#2dd4bf] text-xl" />
                         </div>
                     </div>
     
                     {}
                     <div className="relative h-full aspect-square overflow-hidden rounded-2xl">
                         <img
                        src="https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7487.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751838846&s=ea95f9b1f06ee4da75582cc8d2b9060c"
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                             alt="B2B Marketing"
                         />
                     </div>
                 </div>
             </div>
    );
};

export default AboutCard;
