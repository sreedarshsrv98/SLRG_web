import ToggleButton from "./NewAssessment/ToggleButton";




export default function History() {
    return (
        <>

            <ToggleButton />


            {/* <div
  className=" w-[1118px] h-[451px] opacity-100 top-[300px] left-[161px] rounded-[6px] p-[25px] gap-[15px] flex"
  style={{ backgroundColor: 'rgba(3, 145, 35, 0.1)' }}
>
  
</div> */}
            <div className=" flex items-center justify-center mt-15">
                <div
                    className="w-full h-auto rounded-[6px] p-[25px] gap-[15px] flex flex-col bg-custom-green-100 mx-[7%]"
                    style={{
                        backgroundColor: 'rgba(3, 145, 35, 0.1)',
                    }}
                >


                    <div
                        className="w-full flex flex-col sm:flex-row justify-between items-center rounded-[6px] bg-green-100/10 "

                    >

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                            <div className="font-bold text-[#1A1A1A] text-[18px] sm:text-[20px] leading-[26px] tracking-normal font-mulish">
                                SGLR Phase 1
                            </div>
                            <div
                                className="text-[16px] sm:text-[18px] leading-[26px] tracking-normal font-semibold font-mulish"
                                style={{ color: 'rgba(3, 145, 35, 1)' }}
                            >                              Approved
                            </div>
                        </div>

                        <button
                            className="w-full sm:w-[172px] h-[44px] text-white rounded-[6px] px-4 py-2 flex items-center justify-center hover:bg-green-600 transition duration-300 mr-0 "
                            style={{ backgroundColor: 'rgba(3, 145, 35, 1)' }}
                        >
                            <div
                                className="text-base leading-none tracking-normal font-medium font-mulish"
                                style={{ color: 'rgba(255, 255, 255, 1)' }}
                            >  Start Assessment</div>

                        </button>
                    </div>
                    <hr style={{ borderColor: 'rgba(3, 145, 35, 0.2)' }} />

                    <div className="flex flex-wrap -mx-2">
                        {/* Left Column */}
                        <div className="w-full md:w-1/2 px-2 mb-4">
                            <div className="flex flex-col space-y-4">
                                <div className="flex-[0_0_20%] p-1">
                                    {/* <div className="flex flex-row justify-between"> */}
                                    <div className="flex flex-row items-start gap-x-45">

                                        <div className="flex flex-col">
                                            {/* First child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                                    style={{ color: 'rgba(90, 90, 90, 1)' }}
                                                >
                                                    Reference ID
                                                </div>

                                            </div>

                                            {/* Second child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                                    style={{ color: 'rgba(1, 41, 90, 1)' }}
                                                >987456232364</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            {/* First child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                                    style={{ color: 'rgba(90, 90, 90, 1)' }}
                                                >
                                                    Institution Name
                                                </div>

                                            </div>

                                            {/* Second child */}
                                            <div>

                                                <div
                                                    className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                                    style={{ color: 'rgba(1, 41, 90, 1)' }}
                                                >Radison Blue</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex-[0_0_20%] p-1">
                                    <div className="flex flex-row items-start gap-x-45">
                                        <div className="flex flex-col">
                                            {/* First child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                                    style={{ color: 'rgba(90, 90, 90, 1)' }}
                                                >
                                                    Institution Type
                                                </div>

                                            </div>

                                            {/* Second child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                                    style={{ color: 'rgba(1, 41, 90, 1)' }}
                                                >Hospitality</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            {/* First child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                                    style={{ color: 'rgba(90, 90, 90, 1)' }}
                                                >
                                                    Mobile
                                                </div>

                                            </div>

                                            {/* Second child */}
                                            <div>

                                                <div
                                                    className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                                    style={{ color: 'rgba(1, 41, 90, 1)' }}
                                                >9876543210</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex-[0_0_20%] p-1">
                                    <div className="flex flex-row items-start gap-x-59">
                                        <div className="flex flex-col">
                                            {/* First child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                                    style={{ color: 'rgba(90, 90, 90, 1)' }}
                                                >
                                                    District
                                                </div>

                                            </div>

                                            {/* Second child */}
                                            <div>

                                                <div
                                                    className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                                    style={{ color: 'rgba(1, 41, 90, 1)' }}
                                                >Kannur</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            {/* First child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                                    style={{ color: 'rgba(90, 90, 90, 1)' }}
                                                >
                                                    Localbody
                                                </div>

                                            </div>

                                            {/* Second child */}
                                            <div>

                                                <div
                                                    className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                                    style={{ color: 'rgba(1, 41, 90, 1)' }}
                                                >Thalassery</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex-[0_0_20%] p-1">
                                    <div className="flex flex-row items-start gap-x-30">
                                        <div className="flex flex-col">
                                            {/* First child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                                    style={{ color: 'rgba(90, 90, 90, 1)' }}
                                                >
                                                    Submitted By
                                                </div>

                                            </div>

                                            {/* Second child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                                    style={{ color: 'rgba(1, 41, 90, 1)' }}
                                                >Suchitwa Mission,  03 Jan 2025,  02:20pm</div>
                                            </div>
                                        </div>
                                        {/* <div className="p-4 ">Column22222222</div> */}
                                    </div>

                                </div>
                                <div className="flex-[0_0_20%] p-1">
                                    <div className="flex flex-row items-start gap-x-30">
                                        <div className="flex flex-col">
                                            {/* First child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                                    style={{ color: 'rgba(90, 90, 90, 1)' }}
                                                >
                                                    Approved by
                                                </div>

                                            </div>

                                            {/* Second child */}
                                            <div>
                                                <div
                                                    className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                                    style={{ color: 'rgba(1, 41, 90, 1)' }}
                                                >Rajesh KP, 04 Jan 2025,  04:10pm</div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Right Column */}
                        <div className="w-full md:w-1/2 px-2 mb-4">
                            <div
                                className="bg-gray-100 w-full h-auto  rounded-[10px] p-[15px] flex flex-col gap-[10px] opacity-100 border-[3px]"
                                style={{

                                    borderColor: 'rgba(3, 145, 35, 0.25)',
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    backgroundColor: "rgba(255, 255, 255, 0.5)"
                                }}
                            >

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full sm:w-auto">
                                    <div className="font-bold text-[#1A1A1A] text-[18px] sm:text-[20px] leading-[26px] tracking-normal font-mulish">
                                        SGLR Phase 1
                                    </div>
                                    <div
                                        className="text-[16px] sm:text-[18px] leading-[26px] tracking-normal font-semibold font-mulish"
                                        style={{ color: 'rgba(3, 145, 35, 1)' }}
                                    >
                                        Approved
                                    </div>
                                </div>

                                <div className="bg-green-50 rounded-lg shadow-md p-4 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                                    <div
                                        className="text-center text-[18px] font-medium leading-[100%] align-middle font-mulish tracking-normal mb-2"
                                        style={{ color: 'rgba(1, 41, 90, 1)' }}
                                    >
                                        Assessment Mark
                                    </div>

                                   
                                    <div className="flex items-center justify-center gap-22">
                                        {/* First column - FSM */}
                                        <div className="flex flex-col text-center">
                                            <span className="text-[14px] leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(90, 90, 90, 1)' }}>FSM</span>
                                            <span className="text-[20px] font-bold leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(1, 41, 90, 1)' }}>60</span>
                                        </div>

                                        {/* Second column - SWM */}
                                        <div className="flex flex-col text-center">
                                            <span className="text-[14px]  leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(90, 90, 90, 1)' }}>SWM</span>
                                            <span className="text-[20px] font-bold leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(1, 41, 90, 1)' }}>60</span>
                                        </div>

                                        {/* Third column - GWM */}
                                        <div className="flex flex-col text-center">
                                            <span className="text-[14px]  leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(90, 90, 90, 1)' }}>GWM</span>
                                            <span className="text-[20px] font-bold leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(1, 41, 90, 1)' }}>30</span>
                                        </div>

                                        {/* Separator line */}
                                        <div className="h-[40px] w-[1px] bg-gray-300 mx-4" />

                                        {/* Total column */}
                                        <div className="flex flex-col text-center pl-2">
                                            <span className="text-[14px]  leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(90, 90, 90, 1)' }}>TOTAL</span>
                                            <span className="text-[20px] font-bold leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(1, 41, 90, 1)' }}>150</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="bg-green-50 rounded-lg shadow-md p-4 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                                    <div
                                        className="text-center text-[18px] font-medium leading-[100%] align-middle font-mulish tracking-normal mb-2"
                                        style={{ color: 'rgba(1, 41, 90, 1)' }}
                                    >
                                        Assessment Mark
                                    </div>

                                   
                                    <div className="flex items-center justify-center gap-22">
                                        {/* First column - FSM */}
                                        <div className="flex flex-col text-center">
                                            <span className="text-[14px] leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(90, 90, 90, 1)' }}>FSM</span>
                                            <span className="text-[20px] font-bold leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(1, 41, 90, 1)' }}>60</span>
                                        </div>

                                        {/* Second column - SWM */}
                                        <div className="flex flex-col text-center">
                                            <span className="text-[14px]  leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(90, 90, 90, 1)' }}>SWM</span>
                                            <span className="text-[20px] font-bold leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(1, 41, 90, 1)' }}>60</span>
                                        </div>

                                        {/* Third column - GWM */}
                                        <div className="flex flex-col text-center">
                                            <span className="text-[14px]  leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(90, 90, 90, 1)' }}>GWM</span>
                                            <span className="text-[20px] font-bold leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(1, 41, 90, 1)' }}>30</span>
                                        </div>

                                        {/* Separator line */}
                                        <div className="h-[40px] w-[1px] bg-gray-300 mx-4" />

                                        {/* Total column */}
                                        <div className="flex flex-col text-center pl-2">
                                            <span className="text-[14px]  leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(90, 90, 90, 1)' }}>TOTAL</span>
                                            <span className="text-[20px] font-bold leading-[100%] align-middle tracking-normal font-mulish" style={{ color: 'rgba(1, 41, 90, 1)' }}>150</span>
                                        </div>
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