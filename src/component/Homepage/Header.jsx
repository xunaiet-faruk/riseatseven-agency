const Header = () => {
    const text = "ðŸš¨ They Category Leaderboard - Live Now";

    return (
        
        <div className="relative z-[200] cursor-pointer">
            <div className="bg-[#B2F6E3] rounded-full overflow-hidden group">
                <div className="relative h-9 sm:h-10 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">

                    <h1 className="absolute top-0 w-full lg:text-[14px] md:text-[12px] text-[12px] font-bold text-center py-2">
                        {text}
                    </h1>

                    <h1 className="absolute top-full w-full lg:text-[14px] md:text-[12px] text-[12px] font-bold text-center py-2">
                        {text}
                    </h1>

                </div>
            </div>
        </div>
    );
};

export default Header;
