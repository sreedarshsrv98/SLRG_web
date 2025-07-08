

export default function HomePage() {


    const steps = [
  {
    bgImage: "/group.svg",
    icon: "/pencil.svg",
    text: "Institutions sign in and complete the questionnaire.",
    number: "1",
  },
  {
    bgImage: "/group.svg",
    icon: "/solar_document-text-broken.svg",
    text: "Survey is submitted for review.",
    number: "2",
  },
  {
    bgImage: "/group.svg",
    icon: "/solar_user-plus-broken.svg",
    text: "DSM visits the institution to verify the survey",
    number: "3",
  },
  {
    bgImage: "/group.svg",
    icon: "/lets-icons_check-ring-round.svg",
    text: "Higher authority reviews the report and gives final approval.",
    number: "4",
  },
  {
    bgImage: "/group.svg",
    icon: "/hugeicons_certificate-01.svg",
    text: "Institutions get Certified by Suchitwa Mission",
    number: "5",
  },
];
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

{/* <div className="flex flex-wrap justify-center px-8 sm:px-8"> */}
  <div className="relative flex flex-wrap justify-center gap-8 px-4 sm:px-8">
    {/* <div className="hidden sm:block absolute bottom-[60px] left-0 right-0 h-[2px] bg-[#179333] z-0" /> */}
      {steps.map(({ bgImage, icon, text, number }, idx) => (
        <div
          key={idx}
          className="flex-1 min-w-[250px] max-w-[320px] p-4"
        >
          <div className="p-2 text-center flex flex-col gap-1 items-center">
            {/* Background container */}
            <div
              className="flex flex-col items-center justify-center w-[160px] h-[250px] bg-contain bg-center bg-no-repeat rounded-lg pb-[40px] gap-6"
              style={{ backgroundImage: `url('${bgImage}')` }}
            >
              <img src={icon} alt="" className="mx-auto" />
              <div className="font-sans font-semibold text-sm leading-none text-center text-[#179333] px-2">
                {text}
              </div>
              <div className="font-sans font-bold text-[23.36px] leading-none text-center text-[#179333]">
                {number}
              </div>
            </div>

            {/* Leaves image */}
            <img
              src="/leaves.svg"
              alt="Leaf"
              className="w-20 h-20"
            />

            {/* Circle */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full border border-[rgba(3,145,35,1)] z-10"></div>
              <div className="absolute inset-2 bg-[rgba(235,255,239,1)] rounded-full z-20"></div>
              <div className="absolute inset-2.5 bg-green-600 rounded-full z-30"></div>
            </div>
          </div>
        </div>
      ))}
    </div>

         



        </>
    );
}