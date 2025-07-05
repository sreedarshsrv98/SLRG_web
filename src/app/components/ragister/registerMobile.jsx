
'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MobileValidationSchema } from '@/app/utils/ValidationSchema';




export default function RegisterMobile() {





    return (

        // <div
        //     className="absolute top-1/2 left-[37%] -translate-x-1/2 -translate-y-1/2 right-[80px]  w-[360px] h-[468px] rounded-[27px] bg-white shadow-[0px_4px_25px_rgba(3,145,35,0.2)]"
        // >
        //     <div className="flex flex-col h-full px-4 py-15 space-y-2">
        //         <div className=" flex items-center justify-center  mb-[25px]">
        //             <img src="/phone.svg" alt="" />
        //         </div>
        //         <div className=" flex items-center justify-center">

        //             <div className=" font-normal text-center text-[17px] leading-none tracking-normal text-[rgba(26,26,26,1)] mb-[7px] w-[222px] h-[21px] ">
        //                 Enter your Mobile Number
        //             </div>

        //         </div>
                
        //         <div className=" flex items-center justify-center">

        //             <div
        //                 className="font-normal text-center text-[17px] leading-none tracking-normal mb-[7px] w-[338px] h-[21px]"
        //                 style={{ color: 'rgba(90, 90, 90, 1)' }}
        //             >
        //                 Enter your 10 Digit Mobile number
        //             </div>

        //         </div>


        //         <div className="  flex items-center justify-center"><div class=" w-[300px] h-[50px] top-[516px] left-[929px] rounded-[6px] border border-[rgba(3,145,35,0.2)] flex items-center px-4 mt-[20px]">
        //             <input
        //                 type="text"
        //                 placeholder="Enter mobile number"
        //                 className="w-full outline-none text-gray-700"
        //             />
        //         </div></div>
        //         <div className=" flex items-center justify-center mt-[15px]">

        //             <button
        //                 className=" flex flex-row items-center justify-center w-[300px] h-[44px] top-[586px] left-[929px] rounded-[6px] bg-[rgba(3,145,35,1)] gap-[10px] px-[20px] py-[12px]"
        //             >
        //                 <span className="text-white font-normal text-[16px] leading-[20px] tracking-normal" style={{ fontFamily: '"Mulish", sans-serif' }}>
        //                     Continue
        //                 </span>
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <>
        
           <div className="absolute top-1/2 left-[37%] -translate-x-1/2 -translate-y-1/2 right-[80px] w-[360px] h-[468px] rounded-[27px] bg-white shadow-[0px_4px_25px_rgba(3,145,35,0.2)]">
      <div className="flex flex-col h-full px-4 py-15 space-y-2">
        <div className="flex items-center justify-center mb-[25px]">
          <img src="/phone.svg" alt="" />
        </div>

        <div className="flex items-center justify-center">
          <div className="font-normal text-center text-[17px] leading-none tracking-normal text-[rgba(26,26,26,1)] mb-[7px] w-[222px] h-[21px]">
            Enter your Mobile Number
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="font-normal text-center text-[17px] leading-none tracking-normal mb-[7px] w-[338px] h-[21px]"
            style={{ color: 'rgba(90, 90, 90, 1)' }}
          >
            Enter your 10 Digit Mobile number
          </div>
        </div>

        {/* Formik Wrapper */}
        <Formik
          initialValues={{ mobile: '' }}
          validationSchema={MobileValidationSchema}
            //    onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col items-center justify-center mt-[20px] space-y-4">
              <div className="w-[300px] h-[50px] rounded-[6px] border border-[rgba(3,145,35,0.2)] flex items-center px-4">
                <Field
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  className="w-full outline-none text-gray-700"
                />
              </div>

              {/* Show error message */}
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-red-500 text-sm text-center w-[300px]"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex flex-row items-center justify-center w-[300px] h-[44px] rounded-[6px] bg-[rgba(3,145,35,1)] gap-[10px] px-[20px] py-[12px] disabled:opacity-70"
              >
                <span
                  className="text-white font-normal text-[16px] leading-[20px] tracking-normal"
                  style={{ fontFamily: '"Mulish", sans-serif' }}
                >
                  {isSubmitting ? 'Processing...' : 'Continue'}
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
        </>
    )

}