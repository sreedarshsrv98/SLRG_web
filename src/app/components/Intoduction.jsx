

export default function HomePage() {
    return (
        <>

            <div className="flex flex-col items-center justify-center gap-4 w-full  mx-auto p-4  ">
                <div
                    className="  font-[Mulish]  text-[26px] leading-[100%] tracking-[0%] text-[rgba(1,41,90,1)]"
                >
                    Simple steps to get your institution rated
                </div>
                <div
                    className="font-[Mulish] font-black text-[60px] leading-[100%] tracking-[0%] capitalize"
                    style={{
                        color: 'rgba(3, 145, 35, 1)',
                        fontWeight: 900,
                        WebkitTextStroke: '0.5px rgba(3, 145, 35, 1)'
                    }}
                >
                    How It Works
                </div>
                <div className="  font-[Mulish]  text-[26px] leading-[100%] tracking-[0%] text-[rgba(1,41,90,1)]">from survey to final approval.</div>
                <button
                    className="w-[144px] h-[44px] py-3 px-5 bg-[rgba(3,145,35,1)] text-[rgba(255,255,255,1)] rounded-[6px] flex items-center justify-center gap-2.5 font-normal"

                >
                    Get Started
                </button>
            </div>



            <div className="flex flex-wrap sm:flex-nowrap justify-between px-30 justify-center gap-20 ">
                {/* Parent 1 */}
                <div className="flex-1 min-w-[150px]p-4 ">
                    <div className=" p-2 text-center">
                        <div className="flex flex-col gap-1">
                            {/* Parent 1 */}

                            <div className="flex items-center justify-center ">
                                <div className="text-center">

                                    <div
                                        className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg gap-6  pb-[40px]"
                                        style={{ backgroundImage: "url('/group.svg')" }}
                                    >


                                        <img src="/pencil.svg" alt="" />
                                        <div className="font-sans font-semibold text-sm leading-none text-center text-[#179333] px-[10px]">
                                            Institutions sign in and complete the questionnaire.
                                        </div>
                                        <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                                            1
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* Parent 2 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <img
                                        src="/leaves.svg"  // Ensure the path is correct
                                        alt="Leaf"
                                        className="w-20 h-20"
                                    />
                                </div>
                            </div>


                            {/* Parent 3 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <div className="relative w-10 h-10">


                                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="flex-1 min-w-[150px]p-4 ">
                    <div className=" p-2 text-center">
                        <div className="flex flex-col gap-1">
                            {/* Parent 1 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">

                                    <div
                                        className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg gap-6  pb-[40px]"
                                        style={{ backgroundImage: "url('/group.svg')" }}
                                    >


                                        <img src="/pencil.svg" alt="" />
                                        <div className="font-sans font-semibold text-sm leading-none text-center text-[#179333] px-[10px]">
                                     Survey is submitted for review.
                                        </div>
                                        <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                                        2
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Parent 2 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <img
                                        src="/leaves.svg"  // Ensure the path is correct
                                        alt="Leaf"
                                        className="w-20 h-20"
                                    />
                                </div>
                            </div>


                            {/* Parent 3 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <div className="relative w-10 h-10">


                                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="flex-1 min-w-[150px]p-4 ">
                    <div className=" p-2 text-center">
                        <div className="flex flex-col gap-1">
                            {/* Parent 1 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">

                                    <div
                                        className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg gap-6  pb-[40px]"
                                        style={{ backgroundImage: "url('/group.svg')" }}
                                    >


                                        <img src="/pencil.svg" alt="" />
                                        <div className="font-sans font-semibold text-sm leading-none text-center text-[#179333] px-[10px]">
                                       DSM visits the institution to verify the survey
                                        </div>
                                        <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                                            3
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Parent 2 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <img
                                        src="/leaves.svg"  // Ensure the path is correct
                                        alt="Leaf"
                                        className="w-20 h-20"
                                    />
                                </div>
                            </div>


                            {/* Parent 3 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <div className="relative w-10 h-10">


                                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="flex-1 min-w-[150px]p-4 ">
                    <div className=" p-2 text-center">
                        <div className="flex flex-col gap-1">
                            {/* Parent 1 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">

                                    <div
                                        className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg gap-6  pb-[40px]"
                                        style={{ backgroundImage: "url('/group.svg')" }}
                                    >


                                        <img src="/pencil.svg" alt="" />
                                        <div className="font-sans font-semibold text-sm leading-none text-center text-[#179333] px-[10px]">
                                     Higher authority reviews the report and gives final approval.
                                        </div>
                                        <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                                            4
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* Parent 2 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <img
                                        src="/leaves.svg"  // Ensure the path is correct
                                        alt="Leaf"
                                        className="w-20 h-20"
                                    />
                                </div>
                            </div>


                            {/* Parent 3 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <div className="relative w-10 h-10">


                                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="flex-1 min-w-[150px]p-4 ">
                    <div className=" p-2 text-center">
                        <div className="flex flex-col gap-1">

                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <div
                                        className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg gap-6  pb-[40px]"
                                        style={{ backgroundImage: "url('/group.svg')" }}
                                    >


                                        <img src="/pencil.svg" alt="" />
                                        <div className="font-sans font-semibold text-sm leading-none text-center text-[#179333] px-[10px]">
                                          Institutions get Certified by Suchitwa Mission
                                        </div>
                                        <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                                            5
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* Parent 2 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <img
                                        src="/leaves.svg"  // Ensure the path is correct
                                        alt="Leaf"
                                        className="w-20 h-20"
                                    />
                                </div>
                            </div>


                            {/* Parent 3 */}
                            <div className="flex items-center justify-center ">
                                <div className="text-center">
                                    <div className="relative w-10 h-10">


                                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>




            </div>



        </>
    );
}