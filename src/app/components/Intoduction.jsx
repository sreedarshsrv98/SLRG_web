

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

            <div class="flex flex-col ">
             <div className="flex flex-row gap-4 justify-center gap-25  ">
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

  <div class="flex flex-col ">
           <div className="relative flex flex-row gap-59  justify-center">
                <img
                    src="/leaves.svg"  // Make sure to use forward slash
                    alt="Leaf"
                //   className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-20 h-20 "
                />
                <img
                    src="/leaves.svg"  // Make sure to use forward slash
                    alt="Leaf"
                //   className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-20 h-20 "
                />
                <img
                    src="/leaves.svg"  // Make sure to use forward slash
                    alt="Leaf"
                //   className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-20 h-20 "
                />
                <img
                    src="/leaves.svg"  // Make sure to use forward slash
                    alt="Leaf"
                //   className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-20 h-20 "
                />
                <img
                    src="/leaves.svg"  // Make sure to use forward slash
                    alt="Leaf"
                //   className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-20 h-20 "
                />

            </div>
           <div className="relative flex flex-row gap-50 justify-center">

                {/* === Timeline Line - Starts from outer edge of first circle, ends at outer edge of last circle === */}
                <div
                    className="absolute top-1/2 h-0.5 bg-[rgb(115,217,139)] z-0"
                    style={{
                        left: 'calc(22% - 31px + 1rem)',   // Start from right edge of first outer circle
                        right: 'calc(22% - 31px + 1rem)',  // End at left edge of last outer circle
                        transform: 'translateY(-50%)',
                    }}
                ></div>

                {/* === Circle 1 === */}
                <div className="relative z-10 w-24 h-10 flex items-center justify-center">
                    <div className="relative w-10 h-10">


                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                    </div>
                </div>

                {/* === Circle 2 === */}
                <div className="relative z-10 w-24 h-10 flex items-center justify-center">
                    <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                    </div>
                </div>

                {/* === Circle 3 === */}
                <div className="relative z-10 w-24 h-10 flex items-center justify-center">
                    <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                    </div>
                </div>

                {/* === Circle 4 === */}
                <div className="relative z-10 w-24 h-10 flex items-center justify-center">
                    <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                    </div>
                </div>

                {/* === Circle 5 === */}
                <div className="relative z-10 w-24 h-10 flex items-center justify-center">
                    <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
                        <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
                        <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
                    </div>
                </div>

            </div>
  </div>

              
            </div>

           
      
            
            {/* <div className="flex flex-row gap-49 p-6 justify-center relative">

       
                <div
  className="absolute h-0.5 bg-[rgb(115,217,139)] top-1/2"
//   style={{
//     left: 'calc(16% + 2.5rem)',
//     right: 'calc(16% + 2.5rem)',
//     transform: 'translateY(-40%)'
//   }}
 style={{
      // Start from the right of the FIRST circle (which has width 24px + padding)
      left: 'calc(16% + 2.5rem )',

      // End at the left of the LAST circle
      right: 'calc(16% + 2.5rem )',

      transform: 'translateY(-50%)',
      zIndex: 0
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
            </div> */}
        </>
    );
}