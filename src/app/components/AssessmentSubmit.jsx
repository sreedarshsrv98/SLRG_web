'use client';
import React, { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";



export default function AssessmentSubmit() {
    const progressSteps = [
        { label: "Self Assessment", status: "completed" },
        { label: "In Review", status: "completed" },
        { label: "Approval", status: "completed" },
        { label: "Certified", status: "pending" }
    ];
    const totalSteps = progressSteps.length;
    const completedSteps = progressSteps.filter((s) => s.status === "completed").length;

    const completedWidth = ((completedSteps - 1) / (totalSteps - 1)) * 100;
    return (


        <>
            <div className="flex flex-col items-center justify-start  mb-4">

                <img src="/check_mark.svg" alt="" />

                <div className="mb-4 p-2 text-center font-mulish font-semibold text-[25px] leading-[100%] text-custom-blue" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                    Self Assessment Submitted Successfully!
                </div>


            </div>
            <div
                className="relative h-auto rounded-[20px] gap-[10px] mx-auto px-6 max-w-[1118px] py-7"
                style={{
                    backgroundColor: 'rgba(3, 145, 35, 0.1)',
                    opacity: 1,
                }}
            >



                <div className="flex flex-col sm:flex-row gap-6 w-full px-4">
                    {/* Column 1 */}
                    <div className="flex-1">
                        <div className="flex flex-col space-y-4">
                            <div>
                                <div className="p-1 font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Reference ID
                                </div>
                                <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    987456232364
                                </div>
                            </div>

                            <div>
                                <div className="p-1 font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Institution Type
                                </div>
                                <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    Hospitality
                                </div>
                            </div>

                            <div>
                                <div className="p-1 font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    District
                                </div>
                                <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    Kannur
                                </div>
                            </div>

                            <div>
                                <div className="p-1 font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Submitted By
                                </div>
                                <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    Suchitwa Mission, 03 Jan 2025, 02:20pm
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex-1">
                        <div className="flex flex-col space-y-4">
                            <div>
                                <div className="p-1 font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Institution Name
                                </div>
                                <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    Radisson Blue
                                </div>
                            </div>

                            <div>
                                <div className="p-1 font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Mobile
                                </div>
                                <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    9876543210
                                </div>
                            </div>

                            <div>
                                <div className="p-1 font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Localbody
                                </div>
                                <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    Thalassery
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-25 mx-auto mt-10">
                <div className="font-bold text-[26px] leading-[100%] tracking-[0] text-[rgba(1,41,90,1)] font-[Lexend]">
                    Tracking Details
                </div>
            </div>



            <div className="bg-green-50  px-6">


                <div className="relative w-full max-w-5xl mx-auto h-4">
                    {/* Gray base background (pending steps) */}
                    <div className="absolute top-1/2 left-0 w-full h-3.5 rounded-full bg-[rgba(90,90,90,1)] transform -translate-y-1/2 z-0" />

                    {/* Green completed background */}
                    <div
                        className="absolute top-1/2 left-0 h-3.5 rounded-full bg-[rgba(3,145,35,1)] transform -translate-y-1/2 z-10 transition-all duration-500"
                        style={{ width: `${completedWidth}%` }}
                    />


                    <div
                        className="absolute top-1/2 left-0 w-full h-[2px] transform -translate-y-1/2 z-20 pointer-events-none"
                        style={{
                            borderTop: "2px dashed white",
                            borderColor: "white",
                            opacity: 1,
                        }}
                    />
                    {/* Steps */}
                    <div className="relative flex justify-between items-center z-30 mt-8">
                        {progressSteps.map((step, index) => {
                            const completed = step.status === "completed";

                            return (
                                <div className="flex flex-col items-center text-center w-1/4" key={index}>
                                    <div className="w-8 h-8 bg-white shadow rounded-md flex items-center justify-center z-10">
                                        <Check
                                            size={18}
                                             strokeWidth={4}
                                            className={`${completed ? "text-green-700" : "text-gray-500"}`}
                                        />
                                    </div>
                                    <span className="mt-2 text-[16px] leading-[100%] tracking-[0] text-[rgba(1,41,90,1)] font-[Mulish]  text-center">
                                        {step.label}
                                    </span>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </>





    );
}