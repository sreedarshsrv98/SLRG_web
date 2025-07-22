'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { verifyOtp } from '@/redux/slices/authSlice';
import React from 'react';
import { OtpValidationSchema } from '@/app/utils/ValidationSchema';
import toast from 'react-hot-toast'

export default function RegisterVerifyOtp() {

    const dispatch = useDispatch();
    const router = useRouter();
    const mobile = typeof window !== 'undefined' ? localStorage.getItem('mobile') : '';




    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const res = await dispatch(verifyOtp({ mobile, otp: values.otp }));
console.log(res,"ssssssssssssssssssssssssssssssssssss")
            if (res?.payload?.success) {

                localStorage.setItem("token", res.payload.token);
                localStorage.setItem("refreshToken", res.payload.refreshToken);


                // toast.success(res.payload.message || "Login successful");


                router.push("/introduction");
            }
        } catch (err) {
            console.error("OTP verification failed:", err);
            toast.error("OTP verification failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

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
                        +91 {mobile}
                    </div>

                </div>


                {/* <div className="  flex items-center justify-center">
                    <div class=" w-[300px] h-[50px] top-[516px] left-[929px] rounded-[6px] border border-[rgba(3,145,35,0.2)] flex items-center px-4 mt-[20px]">
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
                </div> */}
                <Formik
                    initialValues={{ otp: '' }}
                    validationSchema={OtpValidationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col items-center justify-center mt-[20px] space-y-4">
                            <div className="w-[300px] h-[50px] rounded-[6px] border border-[rgba(3,145,35,0.2)] flex items-center px-4">
                                <Field
                                    type="text"
                                    name="otp"
                                    placeholder="Enter OTP"
                                    className="w-full outline-none text-gray-700"
                                />
                            </div>

                            {/* Show error message */}
                            <ErrorMessage
                                name="otp"
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
                                    {isSubmitting ? 'Verifying...' : 'Verify'}
                                </span>
                            </button>
                        </Form>
                    )}
                </Formik>
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

            </div>
        </div>
    )

}