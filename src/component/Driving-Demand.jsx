import { MdOutlineArrowOutward } from "react-icons/md";

const DrivingDemand = () => {
    return (
        <section className="py-20 px-4  flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                {/* Left Side: Small Description */}
                <div className="">
                    <p className="text-[20px] md:text-[24px] leading-[1] font-500 text-black tracking-tight">
                        A global team of search-first content marketers engineering semantic relevancy & category <br/>signals for both the internet and people
                    </p>
                </div>

                {/* Right Side: Large Heading & Buttons */}
                <div className="flex flex-col gap-8">
                    <h1 className="text-[60px] md:text-[90px] lg:text-[75px] font-500 leading-[0.9]  text-black tracking-tighter">
                        Driving Demand & <br />
                        <span className="flex items-center gap-4">
                            Discovery
                            <span className="inline-block w-[80px] h-[60px] md:w-[75px] md:h-[75px] rounded-2xl overflow-hidden bg-gray-300">
                                <img
                                    src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                                    alt="Discovery image"
                                    className="w-full h-full object-cover"
                                />
                            </span>
                        </span>
                    </h1>

                    {/* Buttons */}
                    <div className="flex items-center">
                         <button className="group inline-flex text-[16px] items-center gap-2 px-4 xl:px-3 py-2 xl:py-2 rounded-3xl font-500 bg-white text-black hover:rounded-xl transition-all text-sm xl:text-base">
                             Our Story <MdOutlineArrowOutward className="text-xs" />
                                                </button>
                        <button className="group inline-flex items-center gap-2 text-[16px] px-4 xl:px-6 py-2 xl:py-3 rounded-3xl font-500  text-black hover:rounded-xl transition-all text-sm xl:text-base">
                           Our Services <MdOutlineArrowOutward className="text-xs" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DrivingDemand;