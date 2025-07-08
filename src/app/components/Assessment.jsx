'use client';
import React, { useState, useRef, useEffect } from "react";

const mockQuestions = Array.from({ length: 40 }, (_, i) => {
    const id = i + 1;

    // Sample question templates (rotate for variety)
    const questions = [
        "How is waste segregation and disposal handled in the hospitality sector at the property?",
        "Are energy-efficient appliances used in guest rooms?",
        "Does the hotel have a policy for water conservation?",
        "Is recycling promoted to guests and staff?",
        "Are eco-friendly cleaning products used?",
        "Is there a training program on sustainability for staff?",
        "Does the hotel monitor energy consumption regularly?",
        "Are guests encouraged to reuse towels and linens?",
        "Does the hotel use renewable energy sources?",
        "Is food waste minimized and composted?",
    ];

    // Some sample options sets to rotate through
    const optionsList = [
        ["Excellent", "Good", "Average", "Poor"],
        ["Yes", "No"],
        ["Always", "Sometimes", "Never"],
        ["Implemented", "Partially Implemented", "Not Implemented"],
        ["High", "Medium", "Low"],
    ];

    // Cycle through questions and options
    const question = questions[i % questions.length];
    const options = optionsList[i % optionsList.length];
    // Random marks between 50 and 150 for variety
    const marks = 50 + Math.floor(Math.random() * 101);

    return {
        id,
        question: `${id}. ${question}`,
        options,
        selectedOption: null,
        marks,
    };
});


// Custom hook for managing form state
// Custom hook for form state management
function useQuestionForm(questions) {
    const [formData, setFormData] = useState(
        questions.map((q) => ({ ...q, selectedOption: null }))
    );

    const handleOptionChange = (questionId, option) => {
        setFormData((prevData) =>
            prevData.map((q) =>
                q.id === questionId ? { ...q, selectedOption: option } : q
            )
        );
    };

    return { formData, handleOptionChange };
}


export default function Assessment() {

    const { formData, handleOptionChange } = useQuestionForm(mockQuestions);

    // Pagination / scrolling state
    const containerRef = useRef(null);
    const itemWidth = 54; // width of span + gap (32 + 22 for padding + margin/gap)
    const visibleCount = 25; // number of spans visible at once (adjust as needed)
    const [offset, setOffset] = useState(0);
    const [currentQuestionId, setCurrentQuestionId] = useState(formData[0]?.id || 1);

    // Calculate max offset based on number of pages
    const pages = formData.map((q) => q.id);
    const maxOffset = Math.max(0, (pages.length - visibleCount) * itemWidth);

    // Scroll handlers
    const handleScrollLeft = () => {
        setOffset((prev) => Math.max(prev - itemWidth, 0));
    };

    const handleScrollRight = () => {
        setOffset((prev) => Math.min(prev + itemWidth, maxOffset));
    };

    // Update current question selection and reset offset to keep visible
    const setQuestion = (id) => {
        setCurrentQuestionId(id);

        // Calculate which page index is clicked
        const idx = pages.indexOf(id);

        // Scroll container if needed to keep selected page visible
        const newOffset = Math.min(
            Math.max(0, (idx - Math.floor(visibleCount / 2)) * itemWidth),
            maxOffset
        );
        setOffset(newOffset);
    };

    // Get current question object for rendering options
    const currentQuestion = formData.find((q) => q.id === currentQuestionId);
    return (


        <>
            {/* Header Section */}
            <div
                className="relative h-auto rounded-[6px] gap-[10px] mx-auto px-4 max-w-[1118px] py-5"
                style={{
                    backgroundColor: 'rgba(3, 145, 35, 0.1)',
                    opacity: 1,
                }}
            >
                <div className="w-full font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mb-2">
                    Gap Assessment Phase 1
                </div>

                <div className="flex flex-row gap-4 w-full">
                    {/* Column 1 */}
                    <div className="flex-1">
                        <div className="flex flex-col space-y-4">
                            <div>
                                <div className="p-1  font-semibold font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Institution Name
                                </div>
                                <div className="p-1  font-semibold font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    Radison Blue
                                </div>
                            </div>
                            <div>
                                <div className="p-1  font-semibold font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    District
                                </div>
                                <div className="p-1 font-semibold font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    Kannur
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex-1">
                        <div className="flex flex-col space-y-4">
                            <div>
                                <div className="p-1 font-semibold font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Institution Type
                                </div>
                                <div className="p-1 font-semibold font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    Hospitality
                                </div>
                            </div>
                            <div>
                                <div className="p-1 font-semibold font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Localbody
                                </div>
                                <div className="p-1 font-semibold font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    Thalassery
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex-1">
                        <div className="flex flex-col space-y-4">
                            <div>
                                <div className="p-1 font-semibold font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                    Mobile
                                </div>
                                <div className="p-1 font-semibold font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                    9876543210
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instructions Section */}
            <div className="relative h-auto rounded-[6px] gap-[10px] mx-auto px-4 max-w-[1118px]">
                <div className="w-full font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mb-6 mt-10">
                    Answer below questions to get rating.
                </div>
            </div>

            {/* Questions Header */}
            <div
                className="relative h-auto rounded-[6px] gap-[10px] mx-auto px-8 py-8 max-w-[1118px]"
                style={{
                    backgroundColor: 'rgba(3, 145, 35, 0.1)',
                    opacity: 1,
                }}
            >
                <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <div className="font-mulish font-bold text-[20px] leading-[26px] text-[rgba(26,26,26,1)] ">
                            Questions
                        </div>
                    </div>
                    <div className="font-mulish font-semibold text-[16px] leading-[26px] text-[rgba(26,26,26,1)] ">
                        <span className="text-[rgba(3,145,35,1)]">6</span> /40 Questions
                    </div>
                </div>


                {/* Question Display */}
                <div className="mb-6">
                    <div className="font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mt-4 mb-5 px-3">
                        {currentQuestion ? `${currentQuestion.id}. ${currentQuestion.question}` : ""}
                    </div>

                    {/* <div className="w-1/2 grid grid-cols-2 gap-4 px-3 mt-2">
                        {currentQuestion?.options.map((option) => (

                            <button
                                key={option}
                                onClick={() => handleOptionChange(currentQuestion.id, option)}
                                className={`w-full rounded-[6px] opacity-100 border transition-colors duration-300
                ${currentQuestion.selectedOption === option
                                        ? "bg-[rgba(1,41,90,1)] border-[rgba(1,41,90,1)] text-white"
                                        : "bg-[rgba(3,145,35,0.1)] border-[rgba(3,145,35,0.5)] text-[rgba(3,145,35,1)]"
                                    }
              `}
                                style={{
                                    height: "46px",
                                    gap: "8px",
                                    transform: "rotate(0deg)",
                                    borderWidth: "1px",
                                    padding: "10px",
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div> */}
                    <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 mt-2">
  {currentQuestion?.options.map((option) => (
    <button
      key={option}
      onClick={() => handleOptionChange(currentQuestion.id, option)}
      className={`
        w-full rounded-[6px] opacity-100 border transition-colors duration-300
        ${
          currentQuestion.selectedOption === option
            ? "bg-[rgba(1,41,90,1)] border-[rgba(1,41,90,1)] text-white"
            : "bg-[rgba(3,145,35,0.1)] border-[rgba(3,145,35,0.5)] text-[rgba(3,145,35,1)]"
        }
        h-[40px] sm:h-[46px] px-4 sm:px-10 text-sm sm:text-base
      `}
      style={{
        gap: "8px",
        transform: "rotate(0deg)",
        borderWidth: "1px",
      }}
    >
      {option}
    </button>
  ))}
</div>

                </div>

                {/* Pagination controls */}
                <div className="w-full rounded-[10px] py-[10px] bg-[rgba(3,145,35,0.05)] mt-5 overflow-hidden">
                    <div className="flex items-center gap-2 px-4">
                        {/* Left button */}
                        <button
                            onClick={handleScrollLeft}
                            disabled={offset === 0}
                            className="w-8 h-8 rounded-full border border-[rgba(238,238,238,1)] bg-[rgba(255,255,255,0.3)] opacity-30 disabled:opacity-30 flex items-center justify-center"
                        >
                            <img
                                src="/keyboard_double_arrow_left.svg"
                                style={{ width: "24px", height: "24px" }}
                                alt="Left"
                            />
                        </button>

                        {/* Scrollable pages */}
                        <div
                            className="overflow-hidden"
                            style={{ width: `${visibleCount * itemWidth}px` }}
                        >
                            <div
                                className="flex gap-[10px] transition-transform duration-300"
                                ref={containerRef}
                                style={{
                                    transform: `translateX(-${offset}px)`,
                                }}
                            >
                                {pages.map((pageNumber, idx) => {
                                    // Determine status of question for coloring:
                                    const question = formData.find((q) => q.id === pageNumber);
                                    const isCurrent = pageNumber === currentQuestionId;
                                    const isAnswered = question?.selectedOption !== null;
                                    const isSkipped = question?.selectedOption === null && pageNumber < currentQuestionId;

                                    // Base styles
                                    let bgColor = "rgba(255, 255, 255, 0.3)";
                                    let borderColor = "rgba(238, 238, 238, 1)";
                                    let color = "#333";
                                    let fontWeight = "";

                                    if (isCurrent) {
                                        if (isAnswered) {
                                            bgColor = "rgba(3, 145, 35, 0.25)";
                                            borderColor = "rgba(3, 145, 35, 0.1)";
                                            color = "#034d15";
                                            fontWeight = "font-bold";
                                        } else if (isSkipped) {
                                            bgColor = "rgba(227, 112, 30, 0.2)";
                                            borderColor = "rgba(227, 112, 30, 0.3)";
                                            color = "#b55c12";
                                            fontWeight = "font-bold";
                                        } else {
                                            fontWeight = "font-bold";
                                        }
                                    } else if (isAnswered) {
                                        bgColor = "rgba(3, 145, 35, 0.25)";
                                        borderColor = "rgba(3, 145, 35, 0.1)";
                                        color = "#034d15";
                                    } else if (isSkipped) {
                                        bgColor = "rgba(227, 112, 30, 0.2)";
                                        borderColor = "rgba(227, 112, 30, 0.3)";
                                        color = "#b55c12";
                                    }

                                    return (
                                        <span
                                            key={idx}
                                            className={`min-w-[32px] h-8 px-[11px] py-[6px] rounded-full border text-sm flex items-center justify-center cursor-pointer select-none ${fontWeight}`}
                                            style={{
                                                backgroundColor: bgColor,
                                                borderColor,
                                                color,
                                                borderWidth: "1px",
                                            }}
                                            onClick={() => setQuestion(pageNumber)}
                                        >
                                            {pageNumber}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right button */}
                        <button
                            onClick={handleScrollRight}
                            disabled={offset >= maxOffset}
                            className="w-8 h-8 rounded-full border border-[rgba(238,238,238,1)] bg-[rgba(255,255,255,0.3)] opacity-30 disabled:opacity-30 flex items-center justify-center"
                        >
                            <img
                                src="/keyboard_double_arrow_right.svg"
                                style={{ width: "24px", height: "24px" }}
                                alt="Right"
                            />
                        </button>
                    </div>
                </div>


                <div className="flex flex-row justify-between mt-4">
                    <div className="flex flex-row justify-between items-center gap-x-3">
                        <div className="w-[78.424px] h-[38px] flex items-center justify-center gap-[2px] rounded-[30px] px-[10px] py-[6px] border"
                            style={{
                                backgroundColor: "rgba(3, 145, 35, 0.1)",
                                borderColor: "rgba(3, 145, 35, 0.5)"
                            }}
                        >
                            <span className="font-mulish font-black text-[16px] leading-[26px] text-[rgba(3,145,35,1)]">
                                16
                            </span>
                            / <span className="font-mulish font-black text-[16px] leading-[26px] text-[rgba(1,41,90,1)]">
                                150
                            </span>

                        </div>

                        <div className="font-mulish font-bold text-[16px] leading-[26px] text-[rgba(26,26,26,1)]">
                            Marks
                        </div>



                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-3 flex-wrap sm:flex-nowrap">
                        <button
                            className="
      w-full sm:w-[125px] 
      h-[32px] sm:h-[40px] 
      gap-[8px] sm:gap-[10px] 
      rounded-[6px]
      px-[10px] sm:px-[15px] 
      py-[6px] sm:py-[10px] 
      border border-[#1A1A1A]
      hover:bg-[#1A1A1A] hover:text-white
      active:scale-95 active:bg-[#111111]
      transition-all duration-150 ease-in-out
      mb-2 sm:mb-0
    "
                        >
                            <span className="font-bold text-[14px] sm:text-[16px] leading-[100%] tracking-[0] text-[#1A1A1A] font-mulish hover:text-white">
                                Save Draft
                            </span>
                        </button>

                        <button
                            className="
      w-full sm:w-[125px] 
      h-[32px] sm:h-[40px] 
      gap-[8px] sm:gap-[10px] 
      rounded-[6px]
      px-[10px] sm:px-[15px] 
      py-[6px] sm:py-[10px] 
      bg-white bg-opacity-50
      hover:bg-opacity-75
      active:scale-95 active:bg-opacity-90
      transition-all duration-150 ease-in-out
      mb-2 sm:mb-0
    "
                        >
                            <span className="font-bold text-[14px] sm:text-[16px] leading-[100%] tracking-[0] text-[#1A1A1A] font-mulish">
                                Previous
                            </span>
                        </button>

                        <button
                            className="
      w-full sm:w-[125px] 
      h-[32px] sm:h-[40px] 
      gap-[8px] sm:gap-[10px] 
      rounded-[6px]
      px-[10px] sm:px-[15px] 
      py-[6px] sm:py-[10px] 
      text-white bg-[rgba(3,145,35,1)]
      hover:bg-[rgba(3,130,31,1)]
      active:scale-95 active:bg-[rgba(2,110,26,1)]
      transition-all duration-150 ease-in-out
      mb-2 sm:mb-0
    "
                        >
                            <span className="font-bold text-[14px] sm:text-[16px] leading-[100%] tracking-[0] text-white font-mulish">
                                Next
                            </span>
                        </button>
                    </div>




                    {/* more items */}
                </div>


            </div>

        </>





    );
}