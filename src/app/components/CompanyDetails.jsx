




export default function CompanyDetails() {
    return (
        <>
        <div
  className="relative w-full max-w-[1128px] mx-auto rounded-[20px] gap-[10px] p-[16px] sm:p-[20px] md:p-[32px]"
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    opacity: 1,
  }}
>
  {/* Header */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-[8px]">
    <div
      className="text-[22px] sm:text-[24px] md:text-[26px] font-bold text-[rgba(26,26,26,1)]"
      style={{ fontFamily: "'Mulish', sans-serif" }}
    >
      Flamingo Marari Boutique Villa
    </div>

    <div>
      <span
        className="text-[15px] leading-[100%] tracking-[0] text-[rgba(3,145,35,1)]"
        style={{ fontFamily: "'Mulish', sans-serif" }}
      >
        <span className="inline-block h-[12px] w-[12px] rounded-full mr-[6px] bg-[rgba(3,145,35,1)]"></span>
        Active
      </span>
    </div>
  </div>

  {/* Tag */}
  <span
    className="inline-block text-[13px] font-semibold rounded-[3px] px-[6px] py-[2px] mt-[8px] text-[rgba(3,145,35,1)]"
    style={{ backgroundColor: 'rgba(3, 145, 35, 0.2)' }}
  >
    Hospitality
  </span>

  {/* Info */}
  <div className="flex flex-col gap-[12px] mt-[12px]">
    {/* District */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[4px] sm:gap-[8px]">
      <span className="font-mulish font-bold text-[14px] text-[rgba(90,90,90,1)]">District</span>
      <span className="font-mulish font-bold text-[14px] text-[rgba(26,26,26,1)]">Alappuzha</span>
    </div>

    {/* Localbody */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[4px] sm:gap-[8px]">
      <span className="font-mulish font-bold text-[14px] text-[rgba(90,90,90,1)]">Localbody</span>
      <span className="font-mulish font-bold text-[14px] text-[rgba(26,26,26,1)]">Mararikulam South</span>
    </div>

    {/* Date */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[4px] sm:gap-[8px]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[4px] sm:gap-[8px]">
        <span className="font-mulish font-bold text-[14px] text-[rgba(90,90,90,1)]">Date</span>
        <span className="font-mulish font-bold text-[14px] text-[rgba(26,26,26,1)]">30 September 2025</span>
      </div>
    </div>
  </div>
</div>
<div className="min-h-[100vh] flex items-center justify-center mt-4">
  <div
    className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[900px] aspect-[841/595] border-2 rounded-[24px] overflow-hidden"
    style={{
      borderColor: 'rgba(23, 147, 51, 1)',
    }}
  >
    <img
      src="/certificate 2.svg"
      alt="Centered Certificate"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </>
    );
}