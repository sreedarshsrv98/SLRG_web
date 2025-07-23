'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  return (
    <footer

    >


      <div className="w-full  sm:px-6 md:px-8 lg:px-0 pt-10 pb-10 sm:pt-12 sm:pb-12 text-[#5A5A5A] text-sm sm:text-base">
        {/* Logos: Scrollable in mobile */}
        {/* Logos Row - responsive */}
        <div className="w-full px-2  sm:px-6 md:px-8 lg:px-0">
          <div className="
    flex flex-wrap 
      justify-between md:justify-center
    items-center 
    gap-4 sm:gap-6">
            <img src="/Ministry_of_Tourism_India 1.svg" alt="Ministry Logo" className="h-6 sm:h-8 md:h-10" />
            <img src="/Group 1732.svg" alt="Group Logo" className="h-6 sm:h-8 md:h-10" />
            <img src="/Swachh_Bharat_Mission_Logo 1.svg" alt="SBM Logo" className="h-6 sm:h-8 md:h-10" />
            <img src="/DDWS_0 1.svg" alt="DDWS Logo" className="h-6 sm:h-8 md:h-10" />
            <img src="/Logo_of_UNICEF 1.svg" alt="UNICEF Logo" className="h-6 sm:h-8 md:h-10" />
          </div>
        </div>
        <div className="flex flex-col items-start md:flex-row md:justify-between gap-8 px-4 sm:px-6 md:px-10 footer-content">
          {/* Address + Social Icons — always visible */}
          <div className="w-full md:w-4/12 p-4 text-left">
            <div className="font-bold text-[#1A1A1A] mb-2">Suchitwa Mission</div>

            <p className="leading-[25px] max-w-[250px]">
              4th Floor, Revenue Tower Public Office Compound, Trivandrum, Kerala, India. PIN - 695 033
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#"><img src="/🦆 icon _Facebook F_.svg" alt="Facebook" className="h-5 w-5" /></a>
              <a href="#"><img src="/🦆 icon _Instagram_.svg" alt="Instagram" className="h-5 w-5" /></a>
              <a href="#"><img src="/twiter.svg" alt="Twitter" className="h-5 w-5" /></a>
              <a href="#"><img src="/linkdin.svg" alt="LinkedIn" className="h-5 w-5" /></a>
              <a href="#"><img src="/🦆 icon _Pinterest P_.svg" alt="Pinterest" className="h-5 w-5" /></a>
              <a href="#"><img src="/🦆 icon _YouTube_.svg" alt="YouTube" className="h-5 w-5" /></a>
            </div>
          </div>


          {/* About Section — hidden on mobile */}
          <div className=" md:w-7/12 p-4 text-left">
            <div className='hidden md:block'><div className="font-bold text-[#1A1A1A] mb-2">About GAP Assessment</div>
              <p className="leading-[25px] mb-4">
                For ease of making the SGLR process, the state has prepared an online system for performing the self-assessment where hospitality facilities can register and create an account of their-own to take part in self-assessment process.
              </p></div>


            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-6 sm:gap-y-2 text-sm text-left sm:text-inherit">
              <p
                // onClick={() => navigate("/disclaimer")}
                className="text-[#1A1A1A] font-mulish font-bold text-[16px] leading-[100%] cursor-pointer 
               sm:text-inherit sm:font-normal sm:text-base sm:leading-normal sm:font-sans"
              >
                Disclaimer
              </p>

              <p
                onClick={() =>router.push("/privacy-policy")}
                className="text-[#1A1A1A] font-mulish font-bold text-[16px] leading-[100%] cursor-pointer 
               sm:text-inherit sm:font-normal sm:text-base sm:leading-normal sm:font-sans"
              >
                Privacy Policy
              </p>

              <p
                // onClick={() => navigate("/cookies-policy")}
                className="text-[#1A1A1A] font-mulish font-bold text-[16px] leading-[100%] cursor-pointer 
               sm:text-inherit sm:font-normal sm:text-base sm:leading-normal sm:font-sans"
              >
                Cookies Policy
              </p>

              <p
                // onClick={() => navigate("/sitemap")}
                className="text-[#1A1A1A] font-mulish font-bold text-[16px] leading-[100%] cursor-pointer 
               sm:text-inherit sm:font-normal sm:text-base sm:leading-normal sm:font-sans"
              >
                Sitemap
              </p>

              <p
                onClick={() => router.push("/terms-conditions")}
                className="text-[#1A1A1A] font-mulish font-bold text-[16px] leading-[100%] cursor-pointer 
               sm:text-inherit sm:font-normal sm:text-base sm:leading-normal sm:font-sans"
              >
                General Terms & Conditions*
              </p>
            </div>

          </div>
        </div>


        {/* <div className="flex flex-col md:flex-row md:justify-between gap-8 px-4 sm:px-6 md:px-10">
   
    <div className="md:w-4/12 p-4 text-left">
      <div className="font-bold text-[#1A1A1A] mb-2">Suchitwa Mission</div>
      <p className="leading-[25px] max-w-[250px]">
        4th Floor, Revenue Tower Public Office Compound, Trivandrum, Kerala, India. PIN - 695 033
      </p>

      <div className="flex flex-wrap gap-4 mt-4">
        <a href="#"><img src="/🦆 icon _Facebook F_.svg" alt="Facebook" className="h-5 w-5" /></a>
        <a href="#"><img src="/🦆 icon _Instagram_.svg" alt="Instagram" className="h-5 w-5" /></a>
        <a href="#"><img src="/twiter.svg" alt="Twitter" className="h-5 w-5" /></a>
        <a href="#"><img src="/linkdin.svg" alt="LinkedIn" className="h-5 w-5" /></a>
        <a href="#"><img src="/🦆 icon _Pinterest P_.svg" alt="Pinterest" className="h-5 w-5" /></a>
        <a href="#"><img src="/🦆 icon _YouTube_.svg" alt="YouTube" className="h-5 w-5" /></a>
      </div>
    </div>


    <div className="md:w-7/12 p-4 text-left">
      <div className="font-bold text-[#1A1A1A] mb-2">About GAP Assessment</div>
      <p className="leading-[25px] mb-4">
        For ease of making the SGLR process, the state has prepared an online system for performing the self-assessment where hospitality facilities can register and create an account of their-own to take part in self-assessment process.
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-6 sm:gap-y-2 text-sm">
        <p className="cursor-pointer">Disclaimer</p>
        <p className="cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Cookies Policy</p>
        <p className="cursor-pointer">Sitemap</p>
        <p className="cursor-pointer">General Terms & Conditions*</p>
      </div>
    </div>
  </div> */}

        {/* Sticky Bottom */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 md:px-16 pt-4 sm:pt-[10px] pb-4 sm:pb-[35px] bg-[rgba(3,145,35,0.1)] mt-8">
          <p className="text-sm text-[#5A5A5A] text-center">© 2025 Suchitwa Mission. All Rights Reserved</p>
          <p className="text-sm text-[#5A5A5A] text-center">Powered by SRV InfoTech</p>
        </div>
      </div>

    </footer>
  );
}