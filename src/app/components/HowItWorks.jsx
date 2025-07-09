"use client";
import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(null);
  const steps = [
    {
      title: "Self Assessment",
      content:
        "Institutions begin by conducting a basic self-evaluation using a simplified questionnaire to understand their current sanitation and waste management status.",
    },
    {
      title: "Field Visit by Trained Staff",
      content:
        "Institutions begin by conducting a basic self-evaluation using a simplified questionnaire to understand their current sanitation and waste management status",
    },
    {
      title: "On-Site Evaluation",
      content:
        "Institutions begin by conducting a basic self-evaluation using a simplified questionnaire to understand their current sanitation and waste management status",
    },
    {
      title: "Data Analysis & Review",
      content:
        "Institutions begin by conducting a basic self-evaluation using a simplified questionnaire to understand their current sanitation and waste management status",
    },
    {
      title: "Certification",
      content:
        "Institutions begin by conducting a basic self-evaluation using a simplified questionnaire to understand their current sanitation and waste management status",
    },
  ];
  const handleToggle = (index) => {
    // Toggle same tab (open/close)
    if (activeIndex === index) {
      setActiveIndex(null); // close if already open
    } else {
      setActiveIndex(index); // open clicked tab
    }
  };
  return (
    <>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 ">
        {/* Section Heading */}
        <div className="max-w-[1300px] mx-auto">
          <h2 className="font-[Mulish] font-bold text-[26px] leading-[100%] text-[#01295A] text-left mb-6">
            How it Works?
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-[1300px] mx-auto">
          {/* Video - first on mobile, right on desktop */}
          <div className="order-1 md:order-2 col-span-12 md:col-span-7">
            <div className="w-full rounded-[30px] overflow-hidden border-[8px] border-white shadow-[4px_4px_20px_0px_#0089CF1A] bg-white">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-[30px]"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Accordion - second on mobile, left on desktop */}
          <div className="order-2 md:order-1 col-span-12 md:col-span-5">
            <div className="space-y-4">
              {steps.map((step, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    className="rounded-[10px] bg-white overflow-hidden shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => handleToggle(index)}
                      className="w-full flex items-center justify-between px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-[#E8FDE9] p-2 rounded-md">
                          <img
                            src="/questionmark.svg"
                            alt="step icon"
                            className="w-5 h-5"
                          />
                        </div>
                        <span className="font-[Mulish] font-semibold text-[16px] leading-[26px] tracking-[0] text-[#333333] text-left">
                          {step.title}
                        </span>
                      </div>

                      {isActive ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>

                    {/* <div
                      className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                        isActive
                          ? "max-h-[500px] opacity-100 py-3 px-4"
                          : "max-h-0 opacity-0 px-4"
                      } bg-[#0391231A] text-[#2A2A2A] text-sm font-[Mulish] font-medium leading-[22px]`}
                    >
                      {step.content}
                    </div> */}
                    <div
                      className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                        isActive
                          ? "max-h-[500px] opacity-100 py-3 px-4"
                          : "max-h-0 opacity-0 px-4"
                      } bg-[#0391231A] text-[#5A5A5A] text-[14px] font-bold font-[Mulish] leading-[100%] tracking-[0]`}
                    >
                      {step.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
