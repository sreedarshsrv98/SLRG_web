import ToggleButton from "./NewAssessment/ToggleButton";

export default function NewAssessment() {
  return (
    <>
      <ToggleButton />

      <div className="w-full h-auto  flex items-start justify-start px-30">
        <div className="relative w-full z-10 flex flex-col ">
<div className="w-full bg-[#EBFFF1] px-4 sm:px-6 py-6 rounded-md">
  <div className="relative w-full flex sm:items-start sm:justify-start items-center justify-center bg-[#EBFFF1] py-6 rounded-md">
    
    {/* Background quote image */}
    <img
      src="/invertedcommas.svg"
      alt="Quote"
      className="absolute sm:left-4 left-1/2 sm:translate-x-0 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-32  pointer-events-none select-none"
    />

    {/* Foreground text */}
    <div className="relative z-10 text-[#292934] text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-[28px] sm:leading-[32px] font-mulish sm:pl-[100px] whitespace-nowrap text-center sm:text-left">
      Hi Radison Blue,
    </div>
  </div>
</div>




          <div
            className="w-full flex flex-col sm:flex-row justify-between items-center rounded-[6px] bg-green-100/10 p-4 sm:p-5 gap-4 sm:gap-0 h-auto sm:h-[94px] mt-5"
            style={{ backgroundColor: "rgba(3, 145, 35, 0.1)" }}
          >
            {/* Title & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 w-full sm:w-auto text-center sm:text-left">
              <div className="font-bold text-[#1A1A1A] text-[17px] sm:text-[20px] leading-[24px] sm:leading-[26px] font-mulish">
                SGLR Phase 2
              </div>
              <div className="text-[#01295C] text-[15px] sm:text-[18px] leading-[24px] sm:leading-[26px] font-semibold font-mulish">
                Pending
              </div>
            </div>

            {/* Button */}
            <button
              className="w-full sm:w-[172px] h-[44px] text-white rounded-[6px] px-4 py-2 flex items-center justify-center hover:bg-green-600 transition duration-300"
              style={{ backgroundColor: "rgba(3, 145, 35, 1)" }}
            >
              <div className="text-sm sm:text-base leading-none tracking-normal font-medium font-mulish">
                Start Assessment
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
