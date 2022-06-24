function Navbar() {
    return (

        <div className="h-[7.5rem] bg-semuWhite z-40">
            <div className="max-w-7xl lg:max-w-[55rem] xl:max-w-7xl mx-auto flex fles-row justify-between items-center h-full font-archia font-normal">

                <div className="flex flex-row items-center">
                    <div className="w-[15rem]">
                        <h1 className="font-black text-2xl">
                            DolanLab

                        </h1>
                    </div>

                    <div className="w-[28rem] lg:w-96 xl:w-[28rem]">
                        <ul className="flex flex-row justify-between items-center">
                            <li>
                                Find passion
                            </li>
                            <li>
                                Categories
                            </li>
                            <li>
                                Skills
                            </li>
                            <li>
                                Customer
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="w-60">
                    <ul className="flex flex-row justify-between items-center">
                        <li>
                            Login
                        </li>
                        <li>
                            <button className="relative text-white w-40 h-11 rounded-full transition ease-in button-up overflow-hidden hover:text-raisinBlack">
                                <span className="relative z-30">
                                    Free Trial
                                </span>
                                <span className="absolute left-0 bottom-0 w-full h-0 transition-all bg-pistachio rounded-full z-20" />
                                <span className="absolute left-0 top-0 w-full h-full bg-raisinBlack z-10" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
