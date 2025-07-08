export default function RegisterVerifyOtp() {
    return (

          <div className="   w-[360px] rounded-[27px] bg-white shadow-[0px_4px_25px_rgba(3,145,35,0.2)] py-5 px-4">
            <div className="flex flex-col h-full px-4 py-10 space-y-2">
                <div className=" flex items-center justify-center  mb-[25px]">
                    <img src="/phone.svg" alt="" />
                </div>
                <div className=" flex items-center justify-center">

                    <div className=" font-normal text-center text-[17px] leading-none tracking-normal text-[rgba(26,26,26,1)] mb-[7px] w-[222px] h-[21px] ">
                        We have sent an OTP on
                    </div>

                </div>
                <div className=" flex items-center justify-center">

                    <div
                        className="font-normal text-center text-[17px] leading-none tracking-normal mb-[7px] w-[338px] h-[21px]"
                        style={{ color: 'rgba(90, 90, 90, 1)' }}
                    >
                        +91 XXXX XXX 000
                    </div>

                </div>


                <div className="  flex items-center justify-center"><div class=" w-[300px] h-[50px] top-[516px] left-[929px] rounded-[6px] border border-[rgba(3,145,35,0.2)] flex items-center px-4 mt-[20px]">
                    <input
                        type="text"
                        placeholder="Enter mobile number"
                        className="w-full outline-none text-gray-700"
                    />
                </div></div>
                <div className=" flex items-center justify-center mt-[15px]">

                    <button
                        className=" flex flex-row items-center justify-center w-[300px] h-[44px] top-[586px] left-[929px] rounded-[6px] bg-[rgba(3,145,35,1)] gap-[10px] px-[20px] py-[12px]"
                    >
                        <span className="text-white font-normal text-[16px] leading-[20px] tracking-normal" style={{ fontFamily: '"Mulish", sans-serif' }}>
                            Verify
                        </span>
                    </button>
                </div>

<div className="flex flex-col gap-0 items-center justify-center mt-6"> 
  {/* Tight vertical spacing between both sections */}

  {/* Top Section: OTP Message */}
  {/* <div className="flex items-center justify-center"> */}
    <p
  className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left max-w-[500px]"
    >
      Don’t receive OTP?{' '}
      <span className="font-semibold text-[14px] leading-[100%] tracking-[0%] text-[rgba(1, 41, 90, 1)]">
        Resend
      </span>
    </p>
  {/* </div> */}

  {/* Bottom Section: Mobile Number + Icon */}
  <div className="flex items-center justify-center gap-x-2">
    <p
      className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left max-w-[500px]"
      style={{ color: "rgba(90, 90, 90, 1)" }}
    >
      Change your Mobile Number



      
    </p>
    <img src="/phoneLogo.svg" alt="Phone" />
  </div>
</div>
                {/* <div className=" flex items-center justify-center mt-6">

                    <div
                        className=" font-mulish font-normal text-center text-[14px] leading-[100%] tracking-[0%]  mb-[7px] w-[222px] h-[21px] font-[Mulish]"
                    >
                        Don’t receive OTP?{' '}
                        <span className="font-[Mulish] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[rgba(1, 41, 90, 1)]">
                            Resend
                        </span>
                    </div>

                </div>
                <div className=" flex items-center justify-center gap-x-2 ">

                    <p
                        className="font-mulish font-normal text-sm leading-[25px] tracking-normal text-left  max-w-[500px]"
                        style={{ color: "rgba(90, 90, 90, 1)" }}
                    >Change you Mobile Number</p>

                    <img src="/phoneLogo.svg" alt="" />

                </div> */}
            </div>
        </div>
    )

}