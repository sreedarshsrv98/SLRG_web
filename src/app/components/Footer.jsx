import React from 'react';

export default function Footer() {
  return (
    <footer

    >
      {/* <div className="relative w-full px-4 text-center text-[#5A5A5A] bg-[ rgba(235, 255, 239, 1);
] mb-4"
        style={{
          paddingTop: '60px', paddingBottom: '60px', paddingLeft: '100px',
          paddingRight: '100px', fontSize: '0.938rem', display: "block"
        }}> */}
        <div className="
  relative w-full px-4 sm:px-6 md:px-10 lg:px-20
  pt-10 pb-10 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16
  text-center text-[#5A5A5A] bg-customGreen
  text-sm sm:text-base
  mb-8
">
        <div className="flex flex-row justify-center items-center gap-[20px] p-6 ">
          <div className=" p-4"><img src="/Ministry_of_Tourism_India 1.svg" alt="" /></div>
          <div className=" p-4"><img src="/Group 1732.svg" alt="" /></div>
          <div className=" p-4"><img src="/Swachh_Bharat_Mission_Logo 1.svg" alt="" /></div>
          <div className=" p-4"><img src="/Logo_of_UNICEF 1.svg" alt="" /></div>

        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 p-4">


            <div className="flex flex-col space-y-4 items-start">

              <div>
                <div className="font-mulish font-bold text-base leading-none text-left   mb-2" style={{ color: "rgba(26, 26, 26, 1)" }}>
                  Suchitwa Mission
                </div>
              </div>


              <div>
                <p
                  className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[220px]"
                  style={{ color: "rgba(90, 90, 90, 1)" }}
                >
                  4th Floor, Revenue Tower Public
                  Office Compound, Trivandrum,
                  Kerala, India. PIN - 695 033
                </p>
              </div>


              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-blue-600 hover:text-blue-800"><img src="/🦆 icon _Facebook F_.svg" alt="" /></a>
                <a href="#" className="text-blue-400 hover:text-blue-600"><img src="/🦆 icon _Instagram_.svg" alt="" /></a>
                <a href="#" className="text-pink-600 hover:text-pink-800"><img src="/twiter.svg" alt="" /></a>
                <a href="#" className="text-blue-700 hover:text-blue-900"><img src="/linkdin.svg" alt="" /></a>
                <a href="#" className="text-blue-700 hover:text-blue-900"><img src="/🦆 icon _Pinterest P_.svg" alt="" /></a>
                <a href="#" className="text-blue-700 hover:text-blue-900"><img src="/🦆 icon _YouTube_.svg" alt="" /></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 items-start">

            <div>
              <div className="font-mulish font-bold text-base leading-none text-left   mb-2" style={{ color: "rgba(26, 26, 26, 1)" }}>
                About SGLR
              </div>
            </div>


            <div>
              <p
                className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[800px]"
                style={{ color: "rgba(90, 90, 90, 1)" }}
              >
                For ease of making the SGLR process, the state has prepared an online system for performing the self-assessment where hospitality facilities can register and create an account of their-own to take part in self-assessment process.
              </p>
            </div>


            <div className="flex space-x-4 mt-2">
              <p
                className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[250px]"
                style={{ color: "rgba(90, 90, 90, 1)" }}
              >Disclaimer</p>
              <p
                className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[250px]"
                style={{ color: "rgba(90, 90, 90, 1)" }}
              >Privacy Policy</p>
              <p
                className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[250px]"
                style={{ color: "rgba(90, 90, 90, 1)" }}
              >Cookies Policy</p>
              <p
                className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[250px]"
                style={{ color: "rgba(90, 90, 90, 1)" }}
              >Sitemap</p>
              <p
                className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[250px]"
                style={{ color: "rgba(90, 90, 90, 1)" }}
              >General Terms & Conditions*</p>

            </div>
          </div>
        </div>
      </div>
      <div
        className="sticky  top-[259px] w-full  h-[46px] flex justify-between px-[130px] pt-[10px] pb-[35px]"
        style={{ backgroundColor: 'rgba(3, 145, 35, 0.1)', opacity: 1 }}
      >
        <p
          className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[500px]"
          style={{ color: "rgba(90, 90, 90, 1)" }}
        >© 2025 Suchitwa Mission. All Rights Reserved</p>
        <p
          className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[500px]"
          style={{ color: "rgba(90, 90, 90, 1)" }}
        >Powered by SRV InfoTech</p>

      </div>

    </footer>
  );
}