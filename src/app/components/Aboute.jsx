import React from "react";

function Aboute() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-[1228px] mx-auto  py-5 rounded-[6px]">
  {/* Image first on mobile, right on desktop */}
  <div className="order-1 md:order-2 col-span-12 md:col-span-4 p-4 rounded">
    <div className="p-3 rounded">
      <div className="w-[347.44px] h-[337px] rounded-[9.49px] bg-[#03912314] opacity-100 flex items-center justify-center mx-auto">
        <img
          src="/swachhata-leaf-rating-booklet.svg"
          alt="Descriptive alt text"
          className="w-full h-full object-cover rounded-[9.49px]"
        />
      </div>
    </div>
  </div>

  {/* Text content second on mobile, left on desktop */}
  <div className="order-2 md:order-1 col-span-12 md:col-span-8 p-4 rounded py-5">
    <div className="p-3 rounded flex flex-col items-start gap-2">
      {/* Heading */}
      <div className="font-[Mulish] font-bold text-[32px] leading-[100%] tracking-[0] text-[#01295A] mb-3">
        About
      </div>

      {/* Paragraph 1 */}
      <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
        GAP Assessment is a structured, field-based sanitation evaluation
        initiative under the Suchitwa Mission, aimed at enhancing hygiene,
        cleanliness, and waste management standards in institutions across
        Kerala.
      </div>

      {/* Paragraph 2 */}
      <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A]">
        This assessment is conducted by trained and authorized field staff who
        physically visit institutions such as schools, offices, and public
        facilities to observe, inspect, and record sanitation-related practices.
        The evaluation follows a systematic approach that includes on-site
        inspections, structured questionnaires, and direct engagement with
        institutional staff.
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Aboute;
