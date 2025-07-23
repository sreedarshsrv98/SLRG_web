
'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MobileValidationSchema } from '@/app/utils/ValidationSchema';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import { sendMobileNUmber } from '@/redux/slices/authSlice';




export default function RegisterMobileNumber() {

 const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {

    try {
      console.log(values,"ssssssssssssssssssssss")
     const res = await dispatch(sendMobileNUmber({ mobile: values.mobile }));
      console.log(res,"resresresresresresresresresresresresresresresresresresresresresresres")
      if (res?.payload?.success) {
        router.push('/verifyotp');
          localStorage.setItem('mobile', values.mobile);
      }
    } catch (err) {
      console.error('Error sending mobile number:', err);
    } finally {
      setSubmitting(false);
    }
  };



  return (


    <>

      <div className="   w-[360px] rounded-[27px] bg-white shadow-[0px_4px_25px_rgba(3,145,35,0.2)] py-5 px-4">
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
             onSubmit={handleSubmit}
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