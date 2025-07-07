'use client';
import React, { useState } from "react";

const mockQuestions = [
    {
        id: 1,
        question: "How is waste segregation and disposal handled in the hospitality sector at the property?",
        options: ["Excellent", "Good", "Average", "Poor"],
        selectedOption: null,
        marks: 150,
    },
];

// Custom hook for managing form state
function useQuestionForm(questions) {
    const [formData, setFormData] = useState(
        questions.map((question) => ({
            ...question,
            selectedOption: null,
        }))
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

    // Function to navigate to the next question
    const handleNext = () => {
        console.log("Navigating to the next question...");
    };

    // Function to save draft
    const handleSaveDraft = () => {
        console.log("Saving draft...");
    };

    return (
        <>

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
                                    <div className="p-1 font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                        Institution Name
                                    </div>
                                    <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                        Radison Blue
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
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex-1">
                            <div className="flex flex-col space-y-4">
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
                                        Localbody
                                    </div>
                                    <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                        Thalassery
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="flex-1">
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <div className="p-1 font-mulish font-medium text-[16px] leading-[100%]" style={{ color: 'rgba(90, 90, 90, 1)' }}>
                                        Mobile
                                    </div>
                                    <div className="p-1 font-mulish font-semibold text-[16px] leading-[100%]" style={{ color: 'rgba(1, 41, 90, 1)' }}>
                                        9876543210
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Instructions Section */}
                <div className="relative h-auto rounded-[6px] gap-[10px] mx-auto px-4 max-w-[1118px]">
                    <div className="w-full font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mb-2 mt-10">
                        Answer below questions to get rating.
                    </div>
                </div>

                {/* Questions Header */}
                <div
                    className="relative h-auto rounded-[6px] gap-[10px] mx-auto px-4 max-w-[1118px]"
                    style={{
                        backgroundColor: 'rgba(3, 145, 35, 0.1)',
                        opacity: 1,
                    }}
                >
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col">
                            <div className="font-mulish font-bold text-[20px] leading-[26px] text-[rgba(26,26,26,1)] p-4">
                                Questions
                            </div>
                        </div>
                        <div className="font-mulish font-semibold text-[16px] leading-[26px] text-[rgba(26,26,26,1)] p-4">
                            <span className="text-[rgba(3,145,35,1)]">6</span> /40 Questions
                        </div>
                    </div>

                    {/* Question List */}
                    {formData?.map((question, index) => (
                        <div key={question.id} className="mb-6">
                            <div className="w-full font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mt-4 mb-5 px-3">
                                {index + 1}. {question.question}
                            </div>

                            <div className="w-1/2 grid grid-cols-2 gap-4 px-3 mt-2">
                                {question.options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionChange(question.id, option)}
                                        className={`w-full rounded-[6px] opacity-100 border transition-colors duration-300
    ${question.selectedOption === option
                                                ? 'bg-[rgba(1,41,90,1)] border-[rgba(1,41,90,1)] text-white'
                                                : 'bg-[rgba(3,145,35,0.1)] border-[rgba(3,145,35,0.5)] text-[rgba(3,145,35,1)]'
                                            }
  `}
                                        style={{
                                            height: '46px',
                                            gap: '8px',
                                            transform: 'rotate(0deg)',
                                            borderWidth: '1px',
                                            padding: '10px',
                                        }}
                                    >
                                        {option}
                                    </button>

                                ))}
                            </div>

                            <div
                                className="w-full h-auto rounded-[10px] py-[10px] bg-[rgba(3,145,35,0.05)] opacity-100 mt-5"
                            >
                              <div className="flex items-center space-x-2">
                                    <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                                        t
                                    </button>
                                    {[1, 2, 3, 4, 2, 9, 9, 10, 13, 12, 13, 15, 13, 18, 20, 21, 23,1, 2, 3, 4, 2, 9, 9, 10, 13,  23].map(
                                        (pageNumber, idx) => (
                                            <span
                                                key={idx}
                                                className={`bg-green-200 text-green-800 px-2 py-1 rounded ${pageNumber === question.id ? "font-bold" : ""
                                                    }`}
                                            >
                                                {pageNumber}
                                            </span>
                                        )
                                    )}
                                    <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                                        uy
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                


                                {/* <div className="flex items-center space-x-4">
                                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded">
                                        {question.id}
                                    </span>
                                    <span>{question.marks} Marks</span>
                                    <button
                                        onClick={handleSaveDraft}
                                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                                    >
                                        Save Draft
                                    </button>
                                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                                        Previous
                                    </button>
                                    <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                                        lux
                                    </button>
                                </div> */}
                            </div>

                        </div>
                    ))}
                </div>
            </>

            {/* <div
                className="relative h-auto rounded-[6px]  gap-[10px] mx-auto px-4 max-w-[1118px]   py-5  "
                style={{
                    backgroundColor: 'rgba(3, 145, 35, 0.1)',
                    opacity: 1,
                }}
            >
                <div className="w-full font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mb-2">
                    Gap Assessment Phase 1
                </div>





                <div className="flex flex-row gap-4 w-full">

                    <div className="flex-1   ">
                        <div className="flex flex-col space-y-4">

                            <div className="flex-1 "> <div className="flex flex-col">

                                <div>
                                    <div
                                        className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                        style={{ color: 'rgba(90, 90, 90, 1)' }}
                                    >
                                        Institution Name
                                    </div>

                                </div>


                                <div>
                                    <div
                                        className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                        style={{ color: 'rgba(1, 41, 90, 1)' }}
                                    >Radison Blue</div>
                                </div>
                            </div></div>
                            <div className="flex-1 "> <div className="flex flex-col">

                                <div>
                                    <div
                                        className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                        style={{ color: 'rgba(90, 90, 90, 1)' }}
                                    >
                                        District
                                    </div>

                                </div>


                                <div>
                                    <div
                                        className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                        style={{ color: 'rgba(1, 41, 90, 1)' }}
                                    >Kannur</div>
                                </div>
                            </div></div>

                        </div>


                    </div>
                    <div className="flex-1 ">
                        <div className="flex flex-col space-y-4">

                            <div className="flex-1 "> <div className="flex flex-col">

                                <div>
                                    <div
                                        className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                        style={{ color: 'rgba(90, 90, 90, 1)' }}
                                    >
                                        Institution Type
                                    </div>

                                </div>


                                <div>
                                    <div
                                        className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                        style={{ color: 'rgba(1, 41, 90, 1)' }}
                                    >Hospitality</div>
                                </div>
                            </div></div>
                            <div className="flex-1 "> <div className="flex flex-col">

                                <div>
                                    <div
                                        className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                        style={{ color: 'rgba(90, 90, 90, 1)' }}
                                    >
                                        Localbody
                                    </div>

                                </div>


                                <div>
                                    <div
                                        className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                        style={{ color: 'rgba(1, 41, 90, 1)' }}
                                    >Thalassery</div>
                                </div>
                            </div></div>

                        </div></div>
                    <div className="flex-1 ">
                        <div className="flex flex-col space-y-4">

                            <div className="flex-1 "> <div className="flex flex-col">

                                <div>
                                    <div
                                        className="p-1 font-mulish font-medium text-[16px] leading-[100%] align-middle"
                                        style={{ color: 'rgba(90, 90, 90, 1)' }}
                                    >
                                        Mobile
                                    </div>

                                </div>


                                <div>
                                    <div
                                        className="p-1 font-mulish font-semibold text-[16px] leading-[100%] align-middle tracking-normal"
                                        style={{ color: 'rgba(1, 41, 90, 1)' }}
                                    >9876543210</div>
                                </div>
                            </div></div>


                        </div></div>

                </div>

            </div>
            <div
                className="relative h-auto rounded-[6px]  gap-[10px] mx-auto px-4 max-w-[1118px]  "
            // style={{
            //     backgroundColor: 'rgba(3, 145, 35, 0.1)',
            //     opacity: 1,
            // }}
            >
                <div className="w-full font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mb-2 mt-10 px  ">
                    Answer below questions to get rating.
                </div>

            </div>

            <div
                className="relative h-auto rounded-[6px]  gap-[10px] mx-auto px-4 max-w-[1118px]  "
                style={{
                    backgroundColor: 'rgba(3, 145, 35, 0.1)',
                    opacity: 1,
                }}
            >

                <div className="flex justify-between w-full">
                  
                    <div className="flex flex-col">
                        <div className="font-mulish font-bold text-[20px] leading-[26px] text-[rgba(26,26,26,1)] p-4">Questions</div>

                    </div>

              
                    <div className="font-mulish font-semibold text-[16px] leading-[26px] text-[rgba(26,26,26,1)] p-4">  <span className="font-mulish font-semibold text-[16px] leading-[26px] text-[rgba(3,145,35,1)]">
                        {" "} 6
                    </span>
                        {" "}/40 Questions</div>
                </div>
                <div className="w-full font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mt-3 px-3">
                    6. How is waste segregation and disposal handled in the hospitality sector at the property?
                </div>

                    <div className="grid grid-cols-2 gap-4">
                                {question.options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionChange(question.id, option)}
                                        className={`px-4 py-2 rounded ${question.selectedOption === option
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
            </div> */}


            {/* <div className="bg-gray-900 text-white min-h-screen">
             

            
                <main className="flex-1 p-4 bg-green-100">
                    <h1 className="text-2xl font-bold mb-4">Questions</h1>

            
                    {formData.map((question, index) => (
                        <div key={question.id} className="mb-8">
                            <p className="text-lg mb-4">{question.question}</p>

                            <div className="grid grid-cols-2 gap-4">
                                {question.options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionChange(question.id, option)}
                                        className={`px-4 py-2 rounded ${question.selectedOption === option
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                 
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                                        t
                                    </button>
                                    {[1, 2, 3, 4, 2, 9, 9, 10, 13, 12, 13, 15, 13, 18, 20, 21, 23].map(
                                        (pageNumber, idx) => (
                                            <span
                                                key={idx}
                                                className={`bg-green-200 text-green-800 px-2 py-1 rounded ${pageNumber === question.id ? "font-bold" : ""
                                                    }`}
                                            >
                                                {pageNumber}
                                            </span>
                                        )
                                    )}
                                    <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                                        uy
                                    </button>
                                </div>

                            
                                <div className="flex items-center space-x-4">
                                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded">
                                        {question.id}
                                    </span>
                                    <span>{question.marks} Marks</span>
                                    <button
                                        onClick={handleSaveDraft}
                                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                                    >
                                        Save Draft
                                    </button>
                                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                                        Previous
                                    </button>
                                    <button className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                                        lux
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </div> */}

        </>
    );
}