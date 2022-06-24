function Hero() {
    return (
        <div className="max-w-4xl lg:max-w-[51rem] xl:max-w-7xl mx-auto flex flex-row justify-between h-[37rem]">
            <div className="w-[26rem] h-full flex flex-col justify-center">

                <h1 className="w-[26rem] lg:w-[23rem] xl:w-[26rem] relative font-archia text-7xl font-black mb-48">
                    Watch.
                    Learn.
                    Grow.
                </h1>
                <div className="absolute w-[28rem] h-32 mt-80">
                    <div className="flex flex-row w-full h-full">
                        <input className="bg-white flex w-full h-full items-center justify-center font-archia pl-11 text-xl appearance-none outline-none border border-transparent focus:border-pistachio focus:shadow-2xl placeholder:text-raisinBlack shadow-xl hover:shadow-2xl transition-all" placeholder="Find your passion" />
                        <button className="relative text-black w-44 h-full font-archia transition ease-in button-up overflow-hidden hover:text-raisinBlack">
                            <span className="relative text-4xl z-30 font-bold">
                                Go
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-0 transition-all bg-macaroniAndCheese z-20" />
                            <span className="absolute left-0 top-0 w-full h-full bg-pistachio z-10" />
                        </button>
                    </div>
                </div>


            </div>
            <div className="w-[25rem] lg:w-[25rem] xl:w-[54rem] h-full">
                <ul className="flex flex-row justify-end w-full h-full space-x-10">
                    <li className="bg-gainsboro w-full min-w-16 lg:min-w-[4rem] xl:min-w-[10rem] h-full rounded-3xl flex justify-center items-center transition-all ease-in-out duration-[900ms] ">
                        <div className="w-full h-full bg-[url('https://uploads-ssl.webflow.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1.jpg')] bg-cover bg-center rounded-3xl">

                        </div>

                    </li >
                    <li className="bg-almond w-32 lg:w-32 xl:w-[10rem] min-w-16 lg:min-w-[4rem] xl:min-w-[10rem] h-full lg:hover:w-[100rem] xl:hover:w-[150rem] rounded-3xl flex justify-center items-center transition-all ease-in-out duration-[900ms] ">
                        <div className="w-full h-full bg-[url('https://uploads-ssl.webflow.com/617fa48948c7ab24b715140e/6183bce3e584104be2e330e0_hero_person-2.jpg')] bg-cover bg-center rounded-3xl">

                        </div>
                    </li>
                    <li className="bg-almond w-32 lg:w-32 xl:w-[10rem] min-w-16 lg:min-w-[4rem] xl:min-w-[10rem] h-full lg:hover:w-[100rem] xl:hover:w-[150rem] rounded-3xl flex justify-center items-center transition-all ease-in-out duration-[900ms] ">
                        <div className="w-full h-full bg-[url('https://uploads-ssl.webflow.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3.jpg')] bg-cover bg-center rounded-3xl">

                        </div>
                    </li>

                </ul>
            </div>


        </div>
    );
}

export default Hero;