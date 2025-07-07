
import React from 'react'




const data = [
  {
    title: "Flamingo Marari Boutique Villa",
    type: "Hospitality",
    district: "Alappuzha",
    localbody: "Mararikulam South",
    date: "30 September 2025",
    status: "Active",
  },
  {
    title: "Ocean View Retreat",
    type: "Hospitality",
    district: "Ernakulam",
    localbody: "Kochi Corporation",
    date: "12 August 2023",
    status: "Expired",
  },
  {
    title: "Greenland Public School",
    type: "Educational",
    district: "Kottayam",
    localbody: "Pampady Panchayat",
    date: "15 May 2024",
    status: "Active",
  },
  {
    title: "Flamingo Marari Boutique Villa",
    type: "Hospitality",
    district: "Alappuzha",
    localbody: "Mararikulam South",
    date: "30 September 2025",
    status: "Active",
  },
  {
    title: "Ocean View Retreat",
    type: "Hospitality",
    district: "Ernakulam",
    localbody: "Kochi Corporation",
    date: "12 August 2023",
    status: "Expired",
  },
  {
    title: "Greenland Public School",
    type: "Educational",
    district: "Kottayam",
    localbody: "Pampady Panchayat",
    date: "15 May 2024",
    status: "Active",
  },
];



export default function Companies() {
    return (
        <>


            <div className="relative mx-auto w-full max-w-screen-lg bg-white/50 backdrop-blur-md rounded-2xl px-4 py-6 flex flex-col sm:flex-row items-center gap-4">

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Name of Institute"
                    className="flex-grow min-w-0 w-full sm:max-w-[18rem] rounded-md px-4 py-3 text-base font-semibold text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 border border-green-700/20"
                />

                {/* Type Select */}
                <div className="relative w-full sm:max-w-[12rem]">
                    <select
                        className="w-full rounded-md px-4 py-3 text-base font-semibold text-gray-600 border border-green-700/20 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                    >
                        <option value="">Type</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="educational">Educational</option>
                        <option value="commercial">Commercial</option>
                    </select>
                    <img
                        src="/Rectangle 657.svg"
                        alt="Dropdown Icon"
                        className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4"
                    />
                </div>

                {/* District Select */}
                <div className="relative w-full sm:max-w-[13rem]">
                    <select
                        className="w-full rounded-md px-4 py-3 text-base font-semibold text-gray-600 border border-green-700/20 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                    >
                        <option value="">District</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="educational">Educational</option>
                        <option value="commercial">Commercial</option>
                    </select>
                    <img
                        src="/Rectangle 657.svg"
                        alt="Dropdown Icon"
                        className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4"
                    />
                </div>

                {/* Localbody Select */}
                <div className="relative w-full sm:max-w-[13rem]">
                    <select
                        className="w-full rounded-md px-4 py-3 text-base font-semibold text-gray-600 border border-green-700/20 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                    >
                        <option value="">Localbody</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="educational">Educational</option>
                        <option value="commercial">Commercial</option>
                    </select>
                    <img
                        src="/Rectangle 657.svg"
                        alt="Dropdown Icon"
                        className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4"
                    />
                </div>

                {/* Search Button */}
                <div className="flex justify-center sm:justify-end">
                    <button className="bg-green-600 hover:bg-green-700 text-white w-[3rem] h-[3rem] rounded-md flex items-center justify-center">
                        <img src="/search.svg" alt="Search" className="w-5 h-5" />
                    </button>
                </div>


            </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-10 px-30">
  {data.map((card, index) => (
    <div
      key={index}
      className="rounded-[10px] border p-[15px] w-full h-auto"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderColor: 'rgba(0, 170, 188, 0.1)',
        opacity: 1,
        transform: 'rotate(0deg)',
      }}
    >

      <div className="mb-2">
        <div className="font-mulish font-bold text-[18px] leading-[100%] tracking-[0] text-[rgba(42,42,42,1)]">
          {card.title}
        </div>

        <span
          className="inline-block text-[13px] font-semibold rounded-[3px] px-[6px] py-[2px] mt-2 text-[rgba(3,145,35,1)]"
          style={{ backgroundColor: 'rgba(3, 145, 35, 0.2)', opacity: 1 }}
        >
          {card.type}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mulish font-bold text-[14px] leading-[100%] tracking-[0] text-[rgba(90,90,90,1)]">
            District
          </span>
          <span className="font-mulish font-bold text-[14px] leading-[100%] tracking-[0] text-[rgba(26,26,26,1)]">
            {card.district}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mulish font-bold text-[14px] leading-[100%] tracking-[0] text-[rgba(90,90,90,1)]">
            Localbody
          </span>
          <span className="font-mulish font-bold text-[14px] leading-[100%] tracking-[0] text-[rgba(26,26,26,1)]">
            {card.localbody}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mulish font-bold text-[14px] leading-[100%] tracking-[0] text-[rgba(90,90,90,1)]">
              Date
            </span>
            <span className="font-mulish font-bold text-[14px] leading-[100%] tracking-[0] text-[rgba(26,26,26,1)]">
              {card.date}
            </span>
          </div>

          <div className="flex items-center justify-end mt-2">
            {card.status === 'Active' ? (
              <span className="text-sm font-medium text-green-600">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                Active
              </span>
            ) : (
              <span className="text-sm font-medium text-red-600">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500 mr-1"></span>
                Expired
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 py-6 sm:px-16 md:px-18 lg:px-30">
  {data.map((card, index) => (
    <div
      key={index}
      className="rounded-[10px] border p-4 sm:p-5 w-full h-auto"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderColor: 'rgba(0, 170, 188, 0.1)',
        opacity: 1,
      }}
    >
      {/* Title + Badge */}
      <div className="mb-2">
        <div className="font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)]">
          {card.title}
        </div>
        <span
          className="inline-block text-[13px] font-semibold rounded-[3px] px-[6px] py-[2px] mt-2 text-[rgba(3,145,35,1)]"
          style={{ backgroundColor: 'rgba(3, 145, 35, 0.2)' }}
        >
          {card.type}
        </span>
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mulish font-bold text-[14px] text-[rgba(90,90,90,1)]">District</span>
          <span className="font-mulish font-bold text-[14px] text-[rgba(26,26,26,1)]">{card.district}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mulish font-bold text-[14px] text-[rgba(90,90,90,1)]">Localbody</span>
          <span className="font-mulish font-bold text-[14px] text-[rgba(26,26,26,1)]">{card.localbody}</span>
        </div>

        <div className="flex flex-wrap justify-between items-center ">
          <div className="flex items-center gap-2">
            <span className="font-mulish font-bold text-[14px] text-[rgba(90,90,90,1)]">Date</span>
            <span className="font-mulish font-bold text-[14px] text-[rgba(26,26,26,1)]">{card.date}</span>
          </div>

          <div className=" sm:mt-0">
            {card.status === 'Active' ? (
              <span className="text-sm font-medium text-green-600">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                Active
              </span>
            ) : (
              <span className="text-sm font-medium text-red-600">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500 mr-1"></span>
                Expired
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


        </>
    );
}