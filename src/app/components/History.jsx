import ToggleButton from "./NewAssessment/ToggleButton";




export default function History() {
    return (
        <>

            <ToggleButton />



            <div className=" flex items-center justify-center mt-15">
                <div
                    className="w-full max-w-7xl rounded-[6px] p-4 sm:p-6 gap-4 flex flex-col bg-custom-green-100 mx-4"

                    // className="w-full h-auto rounded-[6px] p-[25px] gap-[15px] flex flex-col bg-custom-green-100 mx-[7%]"
                    style={{
                        backgroundColor: 'rgba(3, 145, 35, 0.1)',
                    }}
                >


                    <div
                        className="w-full flex flex-col sm:flex-row justify-between items-center rounded-[6px] bg-green-100/10 "

                    >

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                            <div className="font-bold text-[#1A1A1A] text-[18px] sm:text-[20px] leading-[26px] tracking-normal font-mulish">
                                GAP Assessment Phase 1
                            </div>
                            <div
                                className="text-[16px] sm:text-[18px] leading-[26px] tracking-normal font-semibold font-mulish"
                                style={{ color: 'rgba(3, 145, 35, 1)' }}
                            >                              Approved
                            </div>
                        </div>

                        <button
                            className="w-full sm:w-[172px] h-[44px] text-white rounded-[6px] px-2 py-2 flex items-center justify-center hover:bg-green-600 transition duration-300 mr-0 "
                            style={{ backgroundColor: 'rgba(3, 145, 35, 1)' }}
                        >
                            <div
                                className="text-base leading-none tracking-normal  font-mulish"
                                style={{ color: 'rgba(255, 255, 255, 1)' }}
                            >  View Report</div>

                        </button>
                    </div>
                    <hr style={{ borderColor: 'rgba(3, 145, 35, 0.2)' }} />


                    <div className="flex flex-wrap -mx-2">
                        {/* Left Column */}
                        <div className="w-full md:flex-1 min-w-[320px] px-2 mb-4">
                            <div className="flex flex-col space-y-4">
                                {/* Row 1 */}
                                <div className="p-">
                                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                                        <div className="flex flex-col w-full sm:w-[48%]">
                                            <div className="p-1 text-gray-600 font-mulish font-medium text-[16px]">Reference ID</div>
                                            <div className="p-1 text-blue-900 font-mulish font-semibold text-[16px]">987456232364</div>
                                        </div>
                                        <div className="flex flex-col w-full sm:w-[48%]">
                                            <div className="p-1 text-gray-600 font-mulish font-medium text-[16px]">Institution Name</div>
                                            <div className="p-1 text-blue-900 font-mulish font-semibold text-[16px]">Radison Blue</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Row 2 */}
                                <div className="p-">
                                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                                        <div className="flex flex-col w-full sm:w-[48%]">
                                            <div className="p-1 text-gray-600 font-mulish font-medium text-[16px]">Institution Type</div>
                                            <div className="p-1 text-blue-900 font-mulish font-semibold text-[16px]">Hospitality</div>
                                        </div>
                                        <div className="flex flex-col w-full sm:w-[48%]">
                                            <div className="p-1 text-gray-600 font-mulish font-medium text-[16px]">Mobile</div>
                                            <div className="p-1 text-blue-900 font-mulish font-semibold text-[16px]">9876543210</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Row 3 */}
                                <div className="p-">
                                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                                        <div className="flex flex-col w-full sm:w-[48%]">
                                            <div className="p-1 text-gray-600 font-mulish font-medium text-[16px]">District</div>
                                            <div className="p-1 text-blue-900 font-mulish font-semibold text-[16px]">Kannur</div>
                                        </div>
                                        <div className="flex flex-col w-full sm:w-[48%]">
                                            <div className="p-1 text-gray-600 font-mulish font-medium text-[16px]">Localbody</div>
                                            <div className="p-1 text-blue-900 font-mulish font-semibold text-[16px]">Thalassery</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Row 4 */}
                                <div className="p-">
                                    <div className="flex flex-col">
                                        <div className="p-1 text-gray-600 font-mulish font-medium text-[16px]">Submitted By</div>
                                        <div className="p-1 text-blue-900 font-mulish font-semibold text-[16px]">
                                            Suchitwa Mission, 03 Jan 2025, 02:20pm
                                        </div>
                                    </div>
                                </div>
                                {/* Row 5 */}
                                <div className="p-">
                                    <div className="flex flex-col">
                                        <div className="p-1 text-gray-600 font-mulish font-medium text-[16px]">Approved By</div>
                                        <div className="p-1 text-blue-900 font-mulish font-semibold text-[16px]">
                                            Rajesh KP, 04 Jan 2025, 04:10pm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}

                        <div className="w-full md:flex-1 min-w-[320px] px-2 mb-4">
                            <div className="flex justify-center md:justify-end mt-8">
                                <div
                                    className="bg-gray-100 w-[80%] md:w-[80%] rounded-lg p-4 flex flex-col gap-4 border-4"
                                    style={{
                                        borderColor: 'rgba(3,145,35,0.25)',
                                        backgroundColor: 'rgba(255,255,255,0.5)',
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-center">
                                        <div className="font-bold text-[#1A1A1A] text-[18px] sm:text-[20px] font-mulish">
                                            SGLR Phase 1
                                        </div>
                                        <div className="text-[16px] sm:text-[18px] font-semibold font-mulish" style={{ color: 'rgba(3,145,35,1)' }}>
                                            Approved
                                        </div>
                                    </div>


                                    {/* Assessment Mark 1 */}
                                    <div className="bg-green-50 rounded-lg shadow-md p-4">
                                        <div className="text-center text-[16px] sm:text-[18px] font-medium text-blue-900 font-mulish mb-2">
                                            Assessment Mark
                                        </div>
                                        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                                            <div className="flex flex-col text-center">
                                                <span className="text-[14px] text-gray-600 font-mulish">FSM</span>
                                                <span className="text-[18px] sm:text-[20px] font-bold text-blue-900 font-mulish">60</span>
                                            </div>
                                            <div className="flex flex-col text-center">
                                                <span className="text-[14px] text-gray-600 font-mulish">SWM</span>
                                                <span className="text-[18px] sm:text-[20px] font-bold text-blue-900 font-mulish">60</span>
                                            </div>
                                            <div className="flex flex-col text-center">
                                                <span className="text-[14px] text-gray-600 font-mulish">GWM</span>
                                                <span className="text-[18px] sm:text-[20px] font-bold text-blue-900 font-mulish">30</span>
                                            </div>
                                            <div className="hidden sm:block h-10 w-px bg-gray-300 mx-2"></div>
                                            <div className="flex flex-col text-center">
                                                <span className="text-[14px] text-gray-600 font-mulish">TOTAL</span>
                                                <span className="text-[18px] sm:text-[20px] font-bold text-blue-900 font-mulish">150</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Assessment Mark 2 */}
                                    <div className="bg-green-50 rounded-lg shadow-md p-4">
                                        <div className="text-center text-[16px] sm:text-[18px] font-medium text-blue-900 font-mulish mb-2">
                                            Assessment Mark
                                        </div>
                                        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                                            <div className="flex flex-col text-center">
                                                <span className="text-[14px] text-gray-600 font-mulish">FSM</span>
                                                <span className="text-[18px] sm:text-[20px] font-bold text-blue-900 font-mulish">60</span>
                                            </div>
                                            <div className="flex flex-col text-center">
                                                <span className="text-[14px] text-gray-600 font-mulish">SWM</span>
                                                <span className="text-[18px] sm:text-[20px] font-bold text-blue-900 font-mulish">60</span>
                                            </div>
                                            <div className="flex flex-col text-center">
                                                <span className="text-[14px] text-gray-600 font-mulish">GWM</span>
                                                <span className="text-[18px] sm:text-[20px] font-bold text-blue-900 font-mulish">30</span>
                                            </div>
                                            <div className="hidden sm:block h-10 w-px bg-gray-300 mx-2"></div>
                                            <div className="flex flex-col text-center">
                                                <span className="text-[14px] text-gray-600 font-mulish">TOTAL</span>
                                                <span className="text-[18px] sm:text-[20px] font-bold text-blue-900 font-mulish">150</span>
                                            </div>
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