'use client';
import React, { useState, useRef, useEffect } from 'react';

export const mockQuestions = [
  {
    section: "I. ഖരമാലിന്യ ശേഖരണ - സംസ്കരണ സംവിധാനങ്ങൾ",
    description: "ആശുപത്രി ജീവനക്കാർ , രോഗികൾ, സന്ദർശകർക്ക് ഉപയോഗിക്കുന്നതിനുള്ള ശുചിമുറികളുടെ വിവരങ്ങൾ.",
    questions: [
      {
        id: 1,
        type: "radio",
        question: "മാലിന്യ ശേഖരണത്തിനുള്ള വ്യവസ്ഥ hospital ൽ ഉണ്ടോ?",
        description: null,
        options: ["ഉണ്ട്", "ഇല്ല"],
        selectedOption: null,
        marks: 2,
      },
      {
        id: 2,
        type: "input",
        question: "മാലിന്യം എത്ര ദിവസത്തിൽ ഒറ്റമായി ശേഖരിക്കുന്നു?",
        description: "ഉദാ: പ്രതിവാരമാണ് / ദിവസേന / മാസത്തിൽ ഒരിക്കൽ",
        answer: "",
        marks: 2,
      },
{
  id: 3,
  type: "single-select",
  question: "മാലിന്യം എവിടെ സംഭരിക്കുന്നു?",
  description: null,
  options: [
    { id: 1, value: "പ്ലാസ്റ്റിക് ബിൻ" },
    { id: 2, value: "മെറ്റൽ ബിൻ" },
    { id: 3, value: "കൂടുകൂട്ടിയ സ്ഥലം" },
    { id: 4, value: "തറയിൽ" }
  ],
  selectedOption: null,
  marks: 3,
},

      {
        id: 4,
        type: "group",
        question: "മാലിന്യ ശേഖരണ യൂണിറ്റുകൾ സംബന്ധിച്ച വിശദാംശങ്ങൾ",
        description: "താഴെ sub-questions ഉണ്ട്",
        subQuestions: [
          {
            id: "4.1",
            type: "radio",
            question: "ശേഖരണ യൂണിറ്റുകൾ സജീവമാണോ?",
            options: ["അതെ", "അല്ല"],
            selectedOption: null,
          },
          {
            id: "4.2",
            type: "input",
            question: "സജ്ജമല്ലെങ്കിൽ എന്താണ് പ്രധാന കാരണമെന്ന് വിശദീകരിക്കുക",
            answer: "",
          },
        ],
        marks: 3,
      },
      {
        id: 5,
        type: "radio",
        question: "അധിക കാലം ശേഖരിച്ച മാലിന്യം നീക്കം ചെയ്യുന്നതിനുള്ള സംവിധാനം ഉണ്ടോ?",
        description: null,
        options: ["ഉണ്ട്", "ഇല്ല"],
        selectedOption: null,
        marks: 2,
      },
      {
        id: 6,
        type: "input",
        question: "മാലിന്യ നീക്കം നടത്തുന്ന ദിവസങ്ങൾ ഏവയാണ്?",
        description: null,
        answer: "",
        marks: 2,
      },
      {
        id: 7,
        type: "multi-select",
        question: "മാലിന്യം നീക്കം ചെയ്യുന്നത് ആരാണ്?",
        description: null,
        options: ["സ്വന്തം ജീവനക്കാർ", "പൊതു സ്ഥാപനങ്ങൾ", "അനുമതിയുള്ള കരാർ തൊഴിലാളികൾ"],
        selectedOptions: [],
        marks: 3,
      },
      {
        id: 8,
        type: "radio",
        question: "പുനരുപയോഗത്തിനുള്ള മാലിന്യങ്ങള്‍ വേര്‍തിരിച്ച് ശേഖരിക്കുന്നുണ്ടോ?",
        description: null,
        options: ["ഉണ്ട്", "ഇല്ല"],
        selectedOption: null,
        marks: 2,
      },
      {
        id: 9,
        type: "input",
        question: "പുനരുപയോഗ മാലിന്യ ശേഖരണത്തിന് പ്രത്യേകം ലേബലുകൾ ഉണ്ടോ?",
        description: "ഉദാ: പച്ച ബിൻ, നീല ബിൻ എന്നിവ",
        answer: "",
        marks: 2,
      },
      {
        id: 10,
        type: "radio",
        question: "ആര് ആണ് മാലിന്യ ശേഖരണത്തിന് ഉത്തരവാദി?",
        description: null,
        options: ["Facility Manager", "Cleaner", "Security", "Supervisor"],
        selectedOption: null,
        marks: 2,
      },
    ],
  },
  {
    section: "II. ജൈവമാലിന്യ സംസ്കരണ സംവിധാനങ്ങൾ",
    description: "ഭക്ഷണമാലിന്യം, ഇലകൾ, പച്ചക്കറി ശേഷിപ്പുകൾ എന്നിവയുടെ സംസ്കരണം.",
    questions: [
      {
        id: 11,
        type: "multi-select",
        question: "ജൈവമാലിന്യ സംസ്കരണ രീതികൾ തിരഞ്ഞെടുക്കുക",
        description: null,
        options: ["വെർമി കമ്പോസ്റ്റിംഗ്", "ബയോ ഗ്യാസ്", "പിറ്റ് കമ്പോസ്റ്റിംഗ്", "ആന്റീരോബിക് ട്രീറ്റ്‌മെന്റ്"],
        selectedOptions: [],
        marks: 3,
      },
      {
        id: 12,
        type: "group",
        question: "ജൈവമാലിന്യ യൂണിറ്റുകൾ ഉപയോഗിക്കുന്നതിൽ സജ്ജത",
        description: "താഴെ sub-questions ഉണ്ട്",
        subQuestions: [
          {
            id: "12.1",
            type: "radio",
            question: "യൂണിറ്റ് പ്രവർത്തനക്ഷമമാണോ?",
            options: ["അതെ", "അല്ല"],
            selectedOption: null,
          },
          {
            id: "12.2",
            type: "input",
            question: "പ്രവർത്തനക്ഷമമല്ലെങ്കിൽ കാരണം എന്താണ്?",
            answer: "",
          },
        ],
        marks: 3,
      },
      {
        id: 13,
        type: "radio",
        question: "ജൈവമാലിന്യ സംസ്കരണത്തിന് ആന്തരിക സംവിധാനം ഉണ്ടോ?",
        description: null,
        options: ["ഉണ്ട്", "ഇല്ല"],
        selectedOption: null,
        marks: 2,
      },
      {
        id: 14,
        type: "input",
        question: "ജൈവമാലിന്യ സംസ്കരണ യൂണിറ്റിന്റെ തരം രേഖപ്പെടുത്തുക",
        description: null,
        answer: "",
        marks: 2,
      },
      {
        id: 15,
        type: "radio",
        question: "സംസ്കരണത്തിനായി വേർതിരിച്ചുവയ്ക്കുന്ന സമയം ദിവസത്തിൽ എത്രമാത്രം?",
        description: null,
        options: ["30 മിനിറ്റ്", "1 മണിക്കൂർ", "2 മണിക്കൂർ", "മറ none"],
        selectedOption: null,
        marks: 2,
      },
      {
        id: 16,
        type: "multi-select",
        question: "ജൈവമാലിന്യ സംസ്കരണ യൂണിറ്റുകൾ എവിടെയാണ് സ്ഥാപിച്ചിരിക്കുന്നത്?",
        description: null,
        options: ["കിച്ചൻ സമീപം", "പിന്നിലെ പ്രദേശം", "ഉള്ളിലെ ഷെഡ്", "അലക്കൽ ശാലയ്ക്ക് സമീപം"],
        selectedOptions: [],
        marks: 3,
      },
      {
        id: 17,
        type: "group",
        question: "ജൈവമാലിന്യ യൂണിറ്റിന്റെ സ്റ്റാറ്റസ് വിശദീകരിക്കുക",
        description: "താഴെ sub-questions ഉണ്ട്",
        subQuestions: [
          {
            id: "17.1",
            type: "radio",
            question: "പ്രതിദിനം യൂണിറ്റ് ഉപയോഗിക്കുന്നുണ്ടോ?",
            options: ["അതെ", "അല്ല"],
            selectedOption: null,
          },
          {
            id: "17.2",
            type: "input",
            question: "ഉപയോഗിക്കാറില്ലെങ്കിൽ എന്താണ് കാരണം?",
            answer: "",
          },
        ],
        marks: 3,
      },
      {
        id: 18,
        type: "radio",
        question: "ജൈവമാലിന്യ പ്രോസസിൽ പങ്കാളികളായ ജീവനക്കാരുടെ എണ്ണം?",
        description: null,
        options: ["1-2", "3-5", "5-10", "10+"],
        selectedOption: null,
        marks: 2,
      },
      {
        id: 19,
        type: "input",
        question: "വാർഷികമായി എത്ര ടൺ ജൈവമാലിന്യം സംസ്കരിക്കുന്നു?",
        description: null,
        answer: "",
        marks: 2,
      },
      {
        id: 20,
        type: "radio",
        question: "സൃഷ്ടിച്ച കമ്പോസ്റ്റ് സംവരണം ചെയ്യുന്നുണ്ടോ?",
        description: null,
        options: ["ഉണ്ട്", "ഇല്ല"],
        selectedOption: null,
        marks: 2,
      },
      {
        id: 21,
        type: "radio",
        question: "ജൈവമാലിന്യ പ്രോസസിൽ പങ്കാളികളായ ജീവനക്കാരുടെ എണ്ണം?",
        description: null,
        options: ["1-2", "3-5", "5-10", "10+"],
        selectedOption: null,
        marks: 2,
      },
      {
        id: 22,
        type: "input",
        question: "വാർഷികമായി എത്ര ടൺ ജൈവമാലിന്യം സംസ്കരിക്കുന്നു?",
        description: null,
        answer: "",
        marks: 2,
      },
      {
        id: 23,
        type: "radio",
        question: "സൃഷ്ടിച്ച കമ്പോസ്റ്റ് സംവരണം ചെയ്യുന്നുണ്ടോ?",
        description: null,
        options: ["ഉണ്ട്", "ഇല്ല"],
        selectedOption: null,
        marks: 2,
      },
       {
        id: 24,
        type: "input",
        question: "ജൈവമാലിന്യ സംസ്കരണ യൂണിറ്റിന്റെ തരം രേഖപ്പെടുത്തുക",
        description: null,
        answer: "",
        marks: 2,
      },
      {
        id: 25,
        type: "radio",
        question: "സംസ്കരണത്തിനായി വേർതിരിച്ചുവയ്ക്കുന്ന സമയം ദിവസത്തിൽ എത്രമാത്രം?",
        description: null,
        options: ["30 മിനിറ്റ്", "1 മണിക്കൂർ", "2 മണിക്കൂർ", "മറ none"],
        selectedOption: null,
        marks: 2,
      },
      {
        id: 26,
        type: "multi-select",
        question: "ജൈവമാലിന്യ സംസ്കരണ യൂണിറ്റുകൾ എവിടെയാണ് സ്ഥാപിച്ചിരിക്കുന്നത്?",
        description: null,
        options: ["കിച്ചൻ സമീപം", "പിന്നിലെ പ്രദേശം", "ഉള്ളിലെ ഷെഡ്", "അലക്കൽ ശാലയ്ക്ക് സമീപം"],
        selectedOptions: [],
        marks: 3,
      },
      {
        id: 27,
        type: "group",
        question: "ജൈവമാലിന്യ യൂണിറ്റിന്റെ സ്റ്റാറ്റസ് വിശദീകരിക്കുക",
        description: "താഴെ sub-questions ഉണ്ട്",
        subQuestions: [
          {
            id: "17.1",
            type: "radio",
            question: "പ്രതിദിനം യൂണിറ്റ് ഉപയോഗിക്കുന്നുണ്ടോ?",
            options: ["അതെ", "അല്ല"],
            selectedOption: null,
          },
          {
            id: "17.2",
            type: "input",
            question: "ഉപയോഗിക്കാറില്ലെങ്കിൽ എന്താണ് കാരണം?",
            answer: "",
          },
        ],
        marks: 3,
      },
    ]
  }
];



const itemWidth = 42;
const visibleCount = 24;

export default function QuestionnaireForm() {
    const flattened = mockQuestions.flatMap((section) =>
        section.questions?.map((q) => ({
            ...q,
            sectionTitle: section.section,
            sectionDescription: section.description,
        }))
    );

    const [formData, setFormData] = useState(
        flattened?.map((q) => ({
            id: q.id,
            selectedOption: null,
        }))
    );
    console.log(formData,"formDataformDataformDataformData")
    const [currentQuestionId, setCurrentQuestionId] = useState(flattened[0].id);

    const containerRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const maxOffset = Math.max(0, (flattened.length - visibleCount) * itemWidth);

    const setQuestion = (id) => setCurrentQuestionId(id);

    const handleOptionChange = (id, value) => {
        console.log(value,"aaaaaaaaaaaaaaa")
        setFormData((prev) =>
            prev?.map((q) => (q?.id === id ? { ...q, selectedOption: value } : q))
        );
    };
//     const handleOptionChange = (id, value) => {
//     setFormData((prev) => ({
//         ...prev,
//         [id]: value,
//     }));
// };


    const handleScrollLeft = () => setOffset((prev) => Math.max(0, prev - itemWidth * visibleCount));
    const handleScrollRight = () => setOffset((prev) => Math.min(maxOffset, prev + itemWidth * visibleCount));

    const currentQuestion = flattened.find((q) => q.id === currentQuestionId);
    const prevQuestion = flattened[flattened.findIndex((q) => q.id === currentQuestionId) - 1];
    const isNewSection = !prevQuestion || currentQuestion.sectionTitle !== prevQuestion.sectionTitle;

    //   const renderQuestionInput = (q) => {
    //     switch (q.type) {
    //       case 'radio':
    //         return q?.options?.map((opt) => (
    //           <label key={opt} className="block my-2">
    //             <input
    //               type="radio"
    //               name={`q-${q.id}`}
    //               value={opt}
    //               onChange={() => handleOptionChange(q.id, opt)}
    //             />{' '}
    //             {opt}
    //           </label>
    //         ));
    //       case 'input':
    //         return (
    //           <input
    //             type="text"
    //             className="border p-2 rounded w-full"
    //             onChange={(e) => handleOptionChange(q.id, e.target.value)}
    //           />
    //         );
    //       case 'multi-select':
    //         return q?.options?.map((opt) => (
    //           <label key={opt} className="block my-2">
    //             <input
    //               type="checkbox"
    //               value={opt}
    //               onChange={() => handleOptionChange(q.id, opt)}
    //             />{' '}
    //             {opt}
    //           </label>
    //         ));
    //       case 'group':
    //         return q?.fields?.map((field, i) => (
    //           <div key={i} className="my-2">
    //             <label>{field.label}</label>
    //             <input type="text" className="border p-2 rounded w-full" />
    //           </div>
    //         ));
    //       default:
    //         return null;
    //     }
    //   };
    const renderQuestionInput = (q) => {
        switch (q.type) {
            case 'radio':
                return q.options.map((opt) => (
                    <label key={opt} className="block my-2">
                        <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={opt}
                            checked={formData[q.id] === opt}
                            onChange={() => handleOptionChange(q.id, opt)}
                        />{' '}
                        {opt}
                    </label>
                ));
                   case 'single-select': // ✅ Add support for single-select button style
            return (
                <div className="grid gap-2 sm:grid-cols-2">
  {q.options.map((opt) => (
    <button
      key={opt.id}
      onClick={() => handleOptionChange(q.id, opt)}
      className={`
        w-full rounded-[6px] border transition-colors duration-300
        ${formData[q.id]?.id === opt.id
          ? "bg-[rgba(1,41,90,1)] border-[rgba(1,41,90,1)] text-white"
          : "bg-[rgba(3,145,35,0.1)] border-[rgba(3,145,35,0.5)] text-[rgba(3,145,35,1)]"}
        h-[40px] sm:h-[46px] px-4 sm:px-10 text-sm sm:text-base
      `}
      style={{ gap: "8px", transform: "rotate(0deg)", borderWidth: "1px" }}
    >
      {opt.value}
    </button>
  ))}
</div>

            );
            case 'input':
                return (
                    <input
                        type="text"
                        className="border p-2 rounded w-full"
                        // value={formData[q?.id] || ''}
                        onChange={(e) => handleOptionChange(q.id, e.target.value)}
                    />
                );
            case 'multi-select':
                return q?.options?.map((opt) => (
                    <label key={opt} className="block my-2">
                        <input
                            type="checkbox"
                            value={opt}
                            checked={Array.isArray(formData[q.id]) && formData[q.id].includes(opt)}
                            onChange={() => handleOptionChange(q.id, opt)}
                        />{' '}
                        {opt}
                    </label>
                ));
            case 'group':
                return (
                    <div className="space-y-4">
                        {q.subQuestions.map((subQ) => (
                            <div key={subQ.id}>
                                <div className="font-semibold">{subQ.question}</div>
                                {renderQuestionInput(subQ)}
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };
    console.log(currentQuestion,
        "currentQuestioncurrentQuestioncurrentQuestioncurrentQuestion"
    )
    return (


        <>
            {/* Header Section */}

            <div
                //   className="relative h-auto rounded-[6px] gap-[10px] mx-auto px-4 max-w-[1118px] py-5 "
                className="relative h-auto rounded-[6px] gap-[10px] mx-4 sm:mx-6 md:mx-auto px-4 max-w-[1118px] py-5"
                style={{
                    backgroundColor: 'rgba(3, 145, 35, 0.1)',
                    opacity: 1,
                }}
            >
                <div className="w-full font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mb-2">
                    Gap Assessment Phase 1
                </div>

                <div className="flex flex-row gap-4 w-full">

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
                <div className="w-full font-mulish font-bold text-[20px] leading-[26px] text-left mb-4 mt-10 text-[rgba(23,147,51,1)]">
                    {currentQuestion.sectionTitle}
                </div>
                <div className="w-full font-mulish font-normal text-[16px] leading-[100%] text-left mb-6 text-[rgba(90,90,90,1)]">
                    {currentQuestion.sectionDescription}
                </div>

            </div>

            <div
                // className="relative h-auto rounded-[6px] gap-[10px] mx-auto px-8 py-8 max-w-[1118px]"
                className="relative h-auto rounded-[6px] gap-[10px] mx-4 sm:mx-6 md:mx-auto px-6 max-w-[1118px] py-7"

                style={{
                    backgroundColor: 'rgba(3, 145, 35, 0.1)',
                    opacity: 1,
                }}
            >
                {currentQuestion?.subQuestions?.length > 0 && <><div className="w-full font-mulish font-semibold text-[16px] leading-[100%]  mb-3 text-left text-[rgba(26,26,26,1)]">
                    {currentQuestion.question}
                </div>  <div className="w-full font-mulish font-normal text-[16px] leading-[100%] text-left mb-6 text-[rgba(90,90,90,1)]">
                        {currentQuestion?.description}
                    </div> </>}





                <div className="flex justify-between w-full">
                    <div className="flex flex-col">

                    </div>
                    <div className="font-mulish font-semibold text-[16px] leading-[26px] text-[rgba(26,26,26,1)] ">
                        <span className="text-[rgba(3,145,35,1)]">6</span> /40 Questions
                    </div>
                </div>



                <div className="mb-6">
                    {!currentQuestion?.subQuestions?.length > 0 && <div className="font-mulish font-bold text-[18px] leading-[100%] text-[rgba(42,42,42,1)] text-left mt-4 mb-5 px-3">
                        {currentQuestion ? `${currentQuestion.id}. ${currentQuestion.question}` : ""}
                    </div>}



                    <div className="w-full  gap-4 px-3 mt-2">
                        {/* {currentQuestion?.options?.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleOptionChange(currentQuestion.id, option)}
                                className={`
        w-full rounded-[6px] opacity-100 border transition-colors duration-300
        ${currentQuestion.selectedOption === option
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
                        ))} */}
                        {renderQuestionInput(currentQuestion)}
                    </div>

                </div>

                {/* Pagination controls */}
                <div className="w-full rounded-[10px] py-[10px] bg-[rgba(3,145,35,0.05)] mt-5 overflow-hidden">
                    <div className="flex items-center gap-2 px-4">
                        <button
                            onClick={handleScrollLeft}
                            disabled={offset === 0}
                            className="w-8 h-8 rounded-full border border-[rgba(238,238,238,1)] bg-[rgba(255,255,255,0.3)] opacity-30 disabled:opacity-30 flex items-center justify-center"
                        >
                            <img src="/keyboard_double_arrow_left.svg" width="24" height="24" alt="Left" />
                        </button>

                        <div className="overflow-hidden" style={{ width: `${visibleCount * itemWidth}px` }}>
                            <div
                                className="flex gap-[10px] transition-transform duration-300"
                                ref={containerRef}
                                style={{ transform: `translateX(-${offset}px)` }}
                            >
                                {flattened?.map((q, idx) => {
                                    const status = formData?.find((f) => f.id === q.id);
                                    const isCurrent = q.id === currentQuestionId;
                                    const isAnswered = status?.selectedOption !== null;
                                    const isSkipped = status?.selectedOption === null && q.id < currentQuestionId;

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
                                            onClick={() => setQuestion(q.id)}
                                            className={`min-w-[32px] h-8 px-[11px] py-[6px] rounded-full border text-sm flex items-center justify-center cursor-pointer select-none ${fontWeight}`}
                                            style={{ backgroundColor: bgColor, borderColor, color, borderWidth: "1px" }}
                                        >
                                            {q.id}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        <button
                            onClick={handleScrollRight}
                            disabled={offset >= maxOffset}
                            className="w-8 h-8 rounded-full border border-[rgba(238,238,238,1)] bg-[rgba(255,255,255,0.3)] opacity-30 disabled:opacity-30 flex items-center justify-center"
                        >
                            <img src="/keyboard_double_arrow_right.svg" width="24" height="24" alt="Right" />
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

                    {/* <div className="flex flex-row justify-between items-center gap-x-2 flex-wrap sm:flex-nowrap"> */}
                    <div className="flex flex-row justify-end sm:justify-between items-center gap-x-2 flex-wrap sm:flex-nowrap">
                        <button
                            className="
      w-[100px] sm:w-[125px]
      h-[28px] sm:h-[40px]
      px-[6px] sm:px-[15px]
      py-[4px] sm:py-[10px]
      text-[11px] sm:text-[16px]
      rounded-[6px]
      border border-[#1A1A1A]
      hover:bg-[#1A1A1A] hover:text-white
      active:scale-95 active:bg-[#111111]
      transition-all duration-150 ease-in-out
      mb-2 sm:mb-0
    "
                        >
                            <span className="font-bold leading-[100%] tracking-[0] font-mulish text-[#1A1A1A] hover:text-white">
                                Save Draft
                            </span>
                        </button>

                        <button
                            className="
      w-[100px] sm:w-[125px]
      h-[28px] sm:h-[40px]
      px-[6px] sm:px-[15px]
      py-[4px] sm:py-[10px]
      text-[11px] sm:text-[16px]
      rounded-[6px]
      bg-white bg-opacity-50
      hover:bg-opacity-75
      active:scale-95 active:bg-opacity-90
      transition-all duration-150 ease-in-out
      mb-2 sm:mb-0
    "
                        >
                            <span className="font-bold leading-[100%] tracking-[0] font-mulish text-[#1A1A1A]">
                                Previous
                            </span>
                        </button>

                        <button
                            className="
      w-[100px] sm:w-[125px]
      h-[28px] sm:h-[40px]
      px-[6px] sm:px-[15px]
      py-[4px] sm:py-[10px]
      text-[11px] sm:text-[16px]
      rounded-[6px]
      text-white bg-[rgba(3,145,35,1)]
      hover:bg-[rgba(3,130,31,1)]
      active:scale-95 active:bg-[rgba(2,110,26,1)]
      transition-all duration-150 ease-in-out
      mb-2 sm:mb-0
    "
                        >
                            <span className="font-bold leading-[100%] tracking-[0] font-mulish text-white">
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