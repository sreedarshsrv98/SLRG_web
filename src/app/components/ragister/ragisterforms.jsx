export default function RegisterLeftContent() {
  return (
    <>
      {/* <div className="flex flex-col w-[715px] gap-4 mb-8" style={{ marginBottom: '50px' }}>
                <div
                    className="text-[#01295A] font-mulish font-semibold text-[26px] leading-none tracking-normal"
                    style={{ lineHeight: '1', fontFamily: 'Mulish, sans-serif' }}
                >
                    Register for Swachhatha
                </div>
                <div
                    className="font-extrabold text-[60px] leading-none tracking-normal w-[538px]   capitalize font-mulish"
                    style={{ color: '#039123', fontFamily: 'Mulish, sans-serif' }}
                >
                    Green Leaf Rating
                </div>

                <div
                    className="text-[#01295A] font-mulish font-semibold text-[26px] leading-none tracking-normal"
                    style={{ lineHeight: '1', fontFamily: 'Mulish, sans-serif' }}
                >
                    in Hospitality Facilities
                </div>

            </div> */}
      <div className="flex flex-col w-full max-w-[715px] gap-4 mb-8 px-4 sm:px-6 md:px-0 mx-auto">
        <div
          className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left"
          style={{ lineHeight: "1", fontFamily: "Mulish, sans-serif" }}
        >
          Begin the change today
        </div>

        <div
          className="font-extrabold text-[36px] sm:text-[48px] md:text-[60px] leading-none tracking-normal capitalize font-mulish text-center md:text-left"
          style={{ color: "#039123", fontFamily: "Mulish, sans-serif" }}
        >
          GAP Assessment
        </div>

        <div
          className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left"
          style={{ lineHeight: "1", fontFamily: "Mulish, sans-serif" }}
        >
          is your first step
        </div>
      </div>

      
      <div className="flex flex-col w-full max-w-[715px] gap-4 px-4 sm:px-6 md:px-0 mx-auto">
        <div
          className="text-gray-700 text-xs sm:text-sm md:text-base font-medium tracking-normal text-center md:text-left mb-4"
          style={{ fontFamily: "Mulish, sans-serif", lineHeight: "1" }}
        >
          Certified in Four Steps
        </div>

        <div className="flex flex-nowrap justify-between items-center w-full gap-2">
          {[
            { label: "Self Assessment", icon: "/Group110.png", step: "1" },
            { label: "Review", icon: "/reviewicon.png", step: "2" },
            { label: "Approval", icon: "/approvelicon.png", step: "3" },
            {
              label: "Certification",
              icon: "/certificationicon.png",
              step: "4",
            },
          ].map(({ label, icon, step }, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center"
            >
              <div className="relative inline-block mb-1">
                <img
                  src={icon}
                  alt={`${label} Icon`}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16"
                />
                <div
                  className="absolute"
                  style={{
                    left: "-10px",
                    top: "0%",
                    width: "16px",
                    height: "30px",
                    fontSize: "22px",
                    color: "rgba(2, 64, 91, 0.15)",
                    fontFamily: "Mulish, sans-serif",
                    textAlign: "center",
                  }}
                >
                  {step}
                </div>
              </div>
              <span className="font-mulish font-medium text-[10px] sm:text-sm md:text-lg leading-tight text-gray-700">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex w-full max-w-[715px]  gap-5.25 mt-12 mb-12 mx-auto">
        <div className="w-[150px] h-fit rounded-lg p-2.5 flex flex-col bg-[rgba(255,255,255,0.6)] shadow-[4px_4px_20px_rgba(3,145,35,0.1)] backdrop-blur-md">
          <div className="flex gap-1.25">
            <div className="w-[150px] h-fit rounded-lg  flex flex-col  ">
              <div className=" flex justify-center mb-2 mb-2 ">
                <img
                  src="/ecg.svg"
                  alt="Image 1"
                  className="rounded-md w-[32px] h-[28.67px] rounded-md  "
                />
              </div>

              <div className=" flex justify-center ">
                {" "}
                <div
                  className="font-mulish flex justify-center font-medium  mb-1 rounded-md text-16px leading-25px w-[82px] h-[25px]  "
                  style={{ color: "rgba(90, 90, 90, 1)" }}
                >
                  Healthcare
                </div>
              </div>

              <div className=" flex justify-center  ">
                <div
                  className="font-mulish flex justify-center font-bold text-[22px] leading-[25px] tracking-normal w-[72px] h-[25px] rounded-md"
                  style={{ color: "rgba(3,145,35,1)" }}
                >
                  1000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[150px] h-fit rounded-lg p-2.5 flex flex-col bg-[rgba(255,255,255,0.6)] shadow-[4px_4px_20px_rgba(3,145,35,0.1)] backdrop-blur-md">
          <div className="w-[150px] h-fit rounded-lg  flex flex-col  ">
            <div className=" flex justify-center mb-2 mb-2 ">
              <img
                src="/school.svg"
                alt="Image 1"
                className="rounded-md w-[32px] h-[28.67px] rounded-md  "
              />
            </div>

            <div className=" flex justify-center ">
              {" "}
              <div
                className="font-mulish flex justify-center font-medium  mb-1 rounded-md text-16px leading-25px w-[82px] h-[25px]  "
                style={{ color: "rgba(90, 90, 90, 1)" }}
              >
                Educational
              </div>
            </div>

            <div className=" flex justify-center  ">
              <div
                className="font-mulish flex justify-center font-bold text-[22px] leading-[25px] tracking-normal w-[72px] h-[25px] rounded-md"
                style={{ color: "rgba(3,145,35,1)" }}
              >
                1000
              </div>
            </div>
          </div>
        </div>
        <div className="w-[150px] h-fit rounded-lg p-2.5 flex flex-col bg-[rgba(255,255,255,0.6)] shadow-[4px_4px_20px_rgba(3,145,35,0.1)] backdrop-blur-md">
          <div className="w-[150px] h-fit rounded-lg  flex flex-col  ">
            <div className=" flex justify-center mb-2 mb-2 ">
              <img
                src="/holiday_village.svg"
                alt="Image 1"
                className="rounded-md w-[32px] h-[28.67px] rounded-md  "
              />
            </div>

            <div className=" flex justify-center ">
              {" "}
              <div
                className="font-mulish flex justify-center font-medium  mb-1 rounded-md text-16px leading-25px w-[82px] h-[25px]  "
                style={{ color: "rgba(90, 90, 90, 1)" }}
              >
                Hospitality
              </div>
            </div>

            <div className=" flex justify-center  ">
              <div
                className="font-mulish flex justify-center font-bold text-[22px] leading-[25px] tracking-normal w-[72px] h-[25px] rounded-md"
                style={{ color: "rgba(3,145,35,1)" }}
              >
                1000
              </div>
            </div>
          </div>
        </div>
        <div className="w-[250px] h-fit rounded-lg p-2.5 flex flex-col bg-[rgba(255,255,255,0.6)] shadow-[4px_4px_20px_rgba(3,145,35,0.1)] backdrop-blur-md">
          <div className="w-[250px] h-fit rounded-lg  flex flex-col  ">
            <div className=" flex justify-center mb-2 mb-2 ">
              <img
                src="/home_work.svg"
                alt="Image 1"
                className="rounded-md w-[32px] h-[28.67px] rounded-md  "
              />
            </div>

            <div className=" flex justify-center ">
              {" "}
              <div
                className="font-mulish flex justify-center font-medium  mb-1 rounded-md text-16px leading-25px w-[250px] h-[25px]  "
                style={{ color: "rgba(90, 90, 90, 1)" }}
              >
                Common Establishments
              </div>
            </div>

            <div className=" flex justify-center  ">
              <div
                className="font-mulish flex justify-center font-bold text-[22px] leading-[25px] tracking-normal w-[72px] h-[25px] rounded-md"
                style={{ color: "rgba(3,145,35,1)" }}
              >
                1000
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
