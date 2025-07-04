

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

            <div className="flex flex-row gap-4 justify-center gap-25 p-4 ">
                <div className="p-4 ">

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
                <div className="p-4  ">

                    <div
                        className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg gap-6 pb-[40px]"
                        style={{ backgroundImage: "url('/group.svg')" }}
                    >


                        <img src="/pencil.svg" alt="" />
                        <div className="font-sans text-sm leading-none text-center text-[#179333] px-[10px]">
                            Survey is submitted for review.
                        </div>
                        <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                            2
                        </div>

                    </div>
                </div>
                <div className="p-4  ">

                    <div
                        className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg gap-6 pb-[40px]"
                        style={{ backgroundImage: "url('/group.svg')" }}
                    >


                        <img src="/pencil.svg" alt="" />
                        <div className="font-sans  text-sm leading-none text-center text-[#179333] px-[10px]">
                            DSM visits the institution to verify the survey
                        </div>
                        <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                            3
                        </div>

                    </div>
                </div>
                <div className="p-4  ">

                    <div
                        className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg gap-6 pb-[40px]"
                        style={{ backgroundImage: "url('/group.svg')" }}
                    >


                        <img src="/pencil.svg" alt="" />
                        <div className="font-sans text-sm leading-none text-center text-[#179333] px-[10px]">
                            Higher authority reviews the report and gives final approval.
                        </div>
                        <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                            4
                        </div>

                    </div>
                </div>
                <div className="p-4  ">

                    <div
                        className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg gap-6 pb-[40px]"
                        style={{ backgroundImage: "url('/group.svg')" }}
                    >


                        <img src="/pencil.svg" alt="" />
                        <div className="font-sans  text-sm leading-none text-center text-[#179333] px-[10px]">
                            Institution receives
                            1, 2, or 5 Leaf Rating based on survey score.
                        </div>
                        <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                            5
                        </div>

                    </div>
                </div>
            </div>


            <div className="flex flex-row gap-49 p-6 justify-center relative">

                {/* <div
                    className="absolute h-0.5 bg-green-600 top-1/2"
                    style={{
                        left: 'calc(5% + 2rem)',
                        right: 'calc(5% + 2rem)',
                        transform: 'translateY(-50%)'
                    }}
                ></div> */}
  <div 
    className="absolute h-0.5 bg-green-600 top-1/2"
    style={{
      left: 'calc(10% + 2.5rem)',     // Adjust based on circle size + spacing
      right: 'calc(10% + 2.5rem)',    // Same as above
      transform: 'translateY(-40%)'
    }}
  ></div>
                

                <div className=" p-4 rounded text-center relative w-24 h-24 flex flex-col items-center justify-center">
                    <div className="relative w-10 h-10">

                        <div className="absolute inset-0 rounded-full border-1 border-[rgba(3,145,35,1)]"></div>


                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full"></div>


                        <div className="absolute inset-2.5 bg-green-600 rounded-full"></div>
                    </div>
                </div>
                <div className=" p-4 rounded text-center relative w-24 h-24 flex flex-col items-center justify-center">
                    <div className="relative w-10 h-10">

                        <div className="absolute inset-0 rounded-full border-1 border-[rgba(3,145,35,1)]"></div>


                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full"></div>


                        <div className="absolute inset-2.5 bg-green-600 rounded-full"></div>
                    </div>
                </div>

                <div className="p-4  rounded text-center relative w-24 h-24 flex flex-col items-center justify-center">
                    <div className="relative w-10 h-10">

                        <div className="absolute inset-0 rounded-full border-1 border-[rgba(3,145,35,1)]"></div>


                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full"></div>


                        <div className="absolute inset-2.5 bg-green-600 rounded-full"></div>
                    </div>
                </div>

                <div className=" p-4  rounded text-center relative w-24 h-24 flex flex-col items-center justify-center">
                    <div className="relative w-10 h-10">

                        <div className="absolute inset-0 rounded-full border-1 border-[rgba(3,145,35,1)]"></div>


                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full"></div>


                        <div className="absolute inset-2.5 bg-green-600 rounded-full"></div>
                    </div>
                </div>


                <div className=" p-4  rounded text-center relative w-24 h-24 flex flex-col items-center justify-center">
                    <div className="relative w-10 h-10">

                        <div className="absolute inset-0 rounded-full border-1 border-[rgba(3,145,35,1)]"></div>


                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full"></div>


                        <div className="absolute inset-2.5 bg-green-600 rounded-full"></div>
                    </div>
                </div>
            </div>
        </>
    );
}