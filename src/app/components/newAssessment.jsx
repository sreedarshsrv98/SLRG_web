import ToggleButton from "./NewAssessment/ToggleButton";




export default function NewAssessment() {
    return (
        <>

            <ToggleButton />


            <div className="w-full h-auto  flex items-start justify-start px-30">



               
                <div className="relative w-full z-10 flex flex-col ">

                    <div className="relative w-full flex max-w-xl">
                    
                        <img
                            src="/invertedcommas.svg"
                            alt="Text Background"
                        // className="absolute top-1 -left-16 sm:-left-20 md:-left-24"
                        />

                        <div className="relative w-full text-[#292934] text-[25px] font-medium leading-[40px] tracking-normal z-10 ml-6 sm:ml-8 md:ml-10 mt-6 sm:mt-7">
                            Hi Radison Blue,
                        </div>
                    </div>

                    <div
                        className="w-full flex flex-col sm:flex-row justify-between items-center rounded-[6px] bg-green-100/10 p-4 sm:p-5 gap-4 sm:gap-0 h-auto sm:h-[94px] mt-5"
                        style={{ backgroundColor: 'rgba(3, 145, 35, 0.1)' }}
                    >
                 
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                            <div className="font-bold text-[#1A1A1A] text-[18px] sm:text-[20px] leading-[26px] tracking-normal font-mulish">
                                SGLR Phase 2
                            </div>
                            <div className="text-[#01295C] text-[16px] sm:text-[18px] leading-[26px] tracking-normal font-semibold font-mulish">
                                Pending
                            </div>
                        </div>

                        <button
                            className="w-full sm:w-[172px] h-[44px] text-white rounded-[6px] px-4 py-2 flex items-center justify-center hover:bg-green-600 transition duration-300 mr-0 sm:mr-6 md:mr-10"
                            style={{ backgroundColor: 'rgba(3, 145, 35, 1)' }}
                        >
                            <div
                                className="text-base leading-none tracking-normal font-medium font-mulish"
                                style={{ color: 'rgba(255, 255, 255, 1)' }}
                            >  Start Assessment</div>

                        </button>
                    </div>
                </div>



            </div>

        </>
    );
}