import React from 'react'

function HomePage() {

    return (
        <>
            <div
                className="mx-auto mt-4 w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover min-h-[600px]"
            
            >
                {/* <div className="flex flex-col md:flex-row gap-6">
            
                    <div className="w-full md:w-6/12 flex flex-col ">
                        <div className="flex flex-col w-full max-w-[715px] gap-4 mb-8 px-4 sm:px-6 md:px-0 mx-auto">
                            <div
                                className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left"
                                style={{ lineHeight: "1", fontFamily: "Mulish, sans-serif" }}
                            >
                                Begin the change today
                            </div>

                            <div
                                className="font-extrabold text-[36px] sm:text-[48px] md:text-[60px] leading-none tracking-normal capitalize font-mulish text-center md:text-left font-weight: 900"
                                style={{ color: "#039123", fontFamily: "Mulish, sans-serif", fontWeight: 900, }}
                            >
                                GAP Assessment
                            </div>

                            <div
                                className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left"
                                style={{ lineHeight: "1", fontFamily: "Mulish, sans-serif" }}
                            >
                                is your first step
                            </div>
          
                            <div
                                className="w-[582px] h-[64px] rounded-[32px] border flex items-center px-4 mt-3"
                                style={{
                                    background: "rgba(255, 255, 255, 1)",
                                    borderColor: "rgba(238, 238, 238, 1)",
                                    opacity: 1,
                                    transform: "rotate(0deg)",
                                    position: "relative",
                                }}
                            >

                                <input
                                    type="text"
                                    placeholder="Search Institute"
                                    className="flex-1 bg-transparent outline-none text-[16px] leading-[100%] placeholder:font-bold placeholder:text-[#7F7F7F] placeholder:font-mulish px-2"
                                />



                                <select
                                    className="bg-transparent outline-none text-[16px] leading-[100%] text-[#7F7F7F] font-bold font-mulish px-2 cursor-pointer custom-select"
                                    defaultValue="All Institutes"
                                >
                                    <option className="custom-option">All Institutes</option>
                                    <option className="custom-option">Institute A</option>
                                    <option className="custom-option">Institute B</option>
                                </select>


                                <button
                                    className="ml-4 h-[48px] px-5 rounded-full bg-[#002B5B] text-white flex items-center gap-2"
                                >
                                    Search
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                                        />
                                    </svg>
                                </button>
                            </div>


                        </div>
                    </div>


                    <div className="w-full md:w-6/12 flex flex-col ">
                        <div   >
                            <img src="/bg_circle.svg" alt="" className="ml-4" />

                        </div>
                    </div>



                </div> */}

<div className="flex flex-col md:flex-row gap-6 px-4 sm:px-6 md:px-0">
  {/* Left Column */}
  <div className="w-full md:w-6/12 flex flex-col">
    <div className="flex flex-col w-full max-w-[715px] gap-4 mb-8 mx-auto">
      
      <div className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left">
        Begin the change today
      </div>

      <div className="text-[36px] sm:text-[48px] md:text-[60px] leading-none tracking-normal capitalize font-mulish text-center md:text-left font-extrabold" style={{ color: "#039123" }}>
        GAP Assessment
      </div>

      <div className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left">
        is your first step
      </div>

      {/* Search Box: hidden on mobile, shown on md+ */}
      <div className="hidden md:flex w-full md:w-[582px] h-[64px] rounded-[32px] border items-center px-4 mt-3 bg-white border-[#EEEEEE] shadow-sm">
        <input
          type="text"
          placeholder="Search Institute"
          className="flex-1 bg-transparent outline-none text-[16px] leading-[100%] placeholder:font-bold placeholder:text-[#7F7F7F] placeholder:font-mulish px-2"
        />

        <select
          className="bg-transparent outline-none text-[16px] leading-[100%] text-[#7F7F7F] font-bold font-mulish px-2 cursor-pointer"
          defaultValue="All Institutes"
        >
          <option>All Institutes</option>
          <option>Institute A</option>
          <option>Institute B</option>
        </select>

        <button className="ml-4 h-[48px] px-5 rounded-full bg-[#002B5B] text-white flex items-center gap-2">
          Search
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Right Column - Image */}
  <div className="w-full md:w-6/12 flex flex-col items-center md:items-start">
    <img src="/bg_circle.svg" alt="" className="ml-0 md:ml-4 w-full max-w-[400px]" />
  </div>
</div>


                {/* <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-20">

                    <div className="md:w-1/2 space-y-4">
                        <div
                            className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left"
                            style={{ lineHeight: "1", fontFamily: "Mulish, sans-serif" }}
                        >How can</div>
                        <div
                            className="font-extrabold text-[36px] sm:text-[48px] md:text-[60px] leading-none tracking-normal capitalize font-mulish text-center md:text-left font-weight: 900"
                            style={{ color: "#039123", fontFamily: "Mulish, sans-serif", fontWeight: 900, }}
                        >
                            GAP Assessment
                        </div>
                        <div
                            className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left"
                            style={{ lineHeight: "1", fontFamily: "Mulish, sans-serif" }}
                        >
                            transform your sanitation system?
                        </div>
                        <div
                            className="font-bold text-[#5A5A5A] text-[18px] leading-[22px] tracking-[0%]  rounded"
                            style={{
                                fontFamily: "Mulish",

                            }}
                        >
                            GAP Assessment is a field-based survey where trained staff visit institutions to evaluate sanitation and waste management practices. Using structured questionnaires and inspections, key data is collected to identify gaps and support improvements in line with Suchitwa Mission guidelines.
                        </div>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
                        {[
                            { icon: "/ecg.svg", title: "Hospitality", count: "5,000+" },
                            { icon: "/school.svg", title: "Educational", count: "1,000+" },
                            { icon: "/holiday_village.svg", title: "Healthcare", count: "2,000+" },
                            { icon: "/home_work.svg", title: "Common Establishments", count: "4,000+" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center text-center text-center gap-[5px] rounded-[10px] py-4"
                                style={{
                                    width: "225px",
                                    height: "129px",
                                    background: "rgba(255, 255, 255, 0.6)",
                                    boxShadow: "4px 4px 20px 0px rgba(3, 145, 35, 0.1)",
                                }}
                            >
                                <div className="text-3xl"><img src={item.icon} alt="" /></div>
                                <div className="text-[16px] leading-[25px] font-bold text-center mb-1 text-[#5A5A5A] font-mulish">{item.title}</div>
                                <div className="text-[22px] leading-[25px] font-bold text-[#039123] font-mulish">{item.count}</div>
                            </div>
                        ))}
                    </div>






                </div> */}


<div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-20">
  {/* Left Side Text Content */}
  <div className="md:w-1/2 space-y-4 order-2 md:order-1">
    <div className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left">
      How can
    </div>
    <div
      className="font-extrabold text-[36px] sm:text-[48px] md:text-[60px] leading-none tracking-normal capitalize font-mulish text-center md:text-left"
      style={{ color: "#039123", fontWeight: 900 }}
    >
      GAP Assessment
    </div>
    <div className="text-[#01295A] font-mulish font-semibold text-xl sm:text-2xl md:text-[26px] leading-none tracking-normal text-center md:text-left">
      transform your sanitation system?
    </div>
    <div className="font-bold text-[#5A5A5A] text-[18px] leading-[22px] tracking-[0%] font-mulish">
      GAP Assessment is a field-based survey where trained staff visit institutions to evaluate sanitation and waste management practices. Using structured questionnaires and inspections, key data is collected to identify gaps and support improvements in line with Suchitwa Mission guidelines.
    </div>
  </div>

  {/* Right Side Cards */}
<div className="px-4 md:px-0 order-1 md:order-2">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center">
  {[
    { icon: "/ecg.svg", title: "Hospitality", count: "5,000+" },
    { icon: "/school.svg", title: "Educational", count: "1,000+" },
    { icon: "/holiday_village.svg", title: "Healthcare", count: "2,000+" },
    { icon: "/home_work.svg", title: "Common Establishments", count: "4,000+" },
  ].map((item, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center text-center gap-[5px] rounded-[10px] py-4 home-card"
      style={{
        width: "225px",
        height: "129px",
        background: "rgba(255, 255, 255, 0.6)",
        boxShadow: "4px 4px 20px 0px rgba(3, 145, 35, 0.1)",
      }}
    >
      <div className="text-3xl">
        <img src={item.icon} alt="" />
      </div>
      <div className="text-[16px] leading-[25px] font-bold text-[#5A5A5A] font-mulish">
        {item.title}
      </div>
      <div className="text-[22px] leading-[25px] font-bold text-[#039123] font-mulish">
        {item.count}
      </div>
    </div>
  ))}
</div>


</div>

</div>



                {/* <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8  py-6 bg-[#F0FFF5] mt-20">
                   
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img src="/homeicon.svg" alt="Survey Illustration" className="max-w-full h-auto" />
                    </div>

                 
                    <div className="w-full lg:w-1/2 flex flex-col gap-15 px-10">
                        <div className='gap-5'>
                            <div className="text-[26px] font-bold leading-[100%] font-mulish text-[#01295A]">
                                Why hotels, hospitals & institutions should
                            </div>

                            <div className="text-[60px] leading-[100%] font-black font-mulish capitalize text-[#039123] mt-2">
                                Join The Survey
                            </div>

                            <div className="text-[26px] font-bold leading-[100%] font-mulish text-[#01295A]">
                                and take the lead in sustainability.
                            </div>
                        </div>

                      
                        <div className="flex flex-col gap-10">
                            {[
                                {
                                    img: "/swachhata-leaf-rating-booklet.svg",
                                    title: "Improve Waste Management",
                                    desc: "Understand and enhance current disposal practices.",
                                },
                                {
                                    img: "/leaf5.svg",
                                    title: "Boost Health & Safety",
                                    desc: "Enhance hygiene for staff, visitors & community",
                                },
                                {
                                    img: "/EcoIcon.svg",
                                    title: "Contribute to a Greener Future",
                                    desc: "Be part of a collective step toward sustainability.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-[90px] h-[90px] rounded-full p-[10px] bg-white shadow-[4px_4px_20px_0px_rgba(3,145,35,0.1)] flex items-center justify-center">
                                        <img src={item?.img} alt="Logo" className="w-full h-full object-contain" />
                                    </div>


                                    <div>
                                        <div className="text-[rgba(3,145,35,1)] font-bold text-[20px] leading-[25px] font-mulish">
                                            {item.title}
                                        </div>

                                        <div className="text-[rgba(26,26,26,1)] text-[16px] leading-[25px] font-bold font-mulish">
                                            {item.desc}
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

<div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-y-10 gap-x-8 py-6 bg-[#F0FFF5] mt-20 px-4 md:px-8">
  {/* Right Side - Content */}
  <div className="w-full lg:w-1/2 flex flex-col gap-10">
    <div className="gap-5">
      <div className="text-[22px] md:text-[26px] font-bold leading-[100%] font-mulish text-[#01295A]">
        Why hotels, hospitals & institutions should
      </div>

      <div className="text-[36px] md:text-[60px] leading-[100%] font-black font-mulish capitalize text-[#039123] mt-2">
        Join The Survey
      </div>

      <div className="text-[22px] md:text-[26px] font-bold leading-[100%] font-mulish text-[#01295A]">
        and take the lead in sustainability.
      </div>
    </div>

    {/* List Items */}
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
      {[
        {
          img: "/swachhata-leaf-rating-booklet.svg",
          title: "Improve Waste Management",
          desc: "Understand and enhance current disposal practices.",
        },
        {
          img: "/leaf5.svg",
          title: "Boost Health & Safety",
          desc: "Enhance hygiene for staff, visitors & community",
        },
        {
          img: "/EcoIcon.svg",
          title: "Contribute to a Greener Future",
          desc: "Be part of a collective step toward sustainability.",
        },
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full p-[10px] bg-white shadow-[4px_4px_20px_0px_rgba(3,145,35,0.1)] flex items-center justify-center">
            <img src={item?.img} alt="Logo" className="w-full h-full object-contain" />
          </div>

          <div>
            <div className="text-[rgba(3,145,35,1)] font-bold text-[18px] md:text-[20px] leading-[25px] font-mulish">
              {item.title}
            </div>

            <div className="text-[rgba(26,26,26,1)] text-[16px] leading-[25px] font-bold font-mulish">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Left Side - Image */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img src="/homeicon.svg" alt="Survey Illustration" className="max-w-full h-auto" />
  </div>
</div>

            </div>

        </>
    )
}

export default HomePage