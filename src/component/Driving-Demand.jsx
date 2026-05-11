import { MdOutlineArrowOutward } from "react-icons/md";

const DrivingDemand = () => {
    return (
        <section className="py-10 px-4 flex flex-col justify-center">
            <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:gap-28 md:gap-20 items-start">

                {/* ✅ Heading */}
                <div className="order-1 md:order-2 flex flex-col gap-6">

                    <h1 className="text-[60px] md:text-[50px] lg:text-[90px] font-500 leading-[0.95] text-black tracking-tighter">

                        {/* ✅ small */}
                        <span className="block md:hidden">
                            Driving Demand 

                            <span className="flex items-center gap-3 mt-3">
                                <span className="inline-block w-[60px] h-[45px] rounded-2xl overflow-hidden bg-gray-300">
                                    <img
                                        src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                                        alt="Discovery"
                                        className="w-full h-full object-cover"
                                    />
                                </span>
                                Discovery
                            </span>
                        </span>

                        {/* ✅ md+ (unchanged) */}
                        <span className="hidden md:block">
                            Driving Demand & <br />
                            <span className="flex items-center gap-4 flex-wrap">
                                Discovery
                                <span className="inline-block w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] md:w-[50px] md:h-[50px] rounded-2xl overflow-hidden bg-gray-300">
                                    <img
                                        src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                                        alt="Discovery"
                                        className="w-full h-full object-cover "
                                    />
                                </span>
                            </span>
                        </span>
                    </h1>

                    {/* ✅ Description (small এ heading এর নিচে) */}
                    <p className="block md:hidden text-[18px]   leading-[1.3] font-500 text-black tracking-tight">
                        A global team of search-first content marketers engineering semantic relevancy & category
                        signals for both the internet and people
                    </p>

                    {/* ✅ Buttons (bottom feel + full width) */}
                    <div className="flex flex-col md:flex-row gap-3 mt-4">

                        <button className=" group inline-flex justify-center text-[16px] items-center gap-2 px-4 py-3 rounded-3xl font-500 bg-white text-black hover:rounded-xl transition-all">
                            Our Story <MdOutlineArrowOutward className="text-xs" />
                        </button>

                        <button className=" group inline-flex justify-center items-center gap-2 text-[16px] px-4 py-3 rounded-3xl font-500 text-black hover:rounded-xl transition-all">
                            Our Services <MdOutlineArrowOutward className="text-xs" />
                        </button>
                    </div>
                </div>

                {/* ✅ Description for md+ */}
                <div className="hidden md:flex order-2 md:order-1 ">
                    <p className="md:text-[18px] lg:text-[24px] leading-[1.2] font-500 text-black tracking-tight  max-w-[600px]">
                        A global team of search-first content marketers<br/> engineering semantic relevancy & category <br />
                        signals for both the internet and people
                    </p>
                </div>

            </div>
        </section>
    );
};

export default DrivingDemand;