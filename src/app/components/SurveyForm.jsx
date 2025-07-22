import React from "react";

const SurveyForm = ({ questions }) => {
  return (
    <div className="space-y-8">
      {questions.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border p-4 rounded-lg shadow bg-white">
          <h2 className="text-lg font-semibold text-gray-800">{section.section}</h2>
          <p className="text-sm text-gray-600 mb-4">{section.description}</p>

          {section.questions.map((q, index) => (
            <div key={q.id} className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">
                {q.id}. {q.question}
              </label>
              {q.description && (
                <p className="text-sm text-gray-500 mb-2">{q.description}</p>
              )}

              {/* Render based on type */}
              {q.type === "radio" && (
                <div className="space-y-2">
                  {q.options.map((opt, i) => (
                    <label key={i} className="inline-flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={opt}
                        className="form-radio text-blue-600"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              )}

              {q.type === "input" && (
                <input
                  type="text"
                  name={`question-${q.id}`}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  placeholder="Write your answer..."
                />
              )}

              {q.type === "multi-select" && (
                <div className="space-y-2">
                  {q.options.map((opt, i) => (
                    <label key={i} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name={`question-${q.id}`}
                        value={opt}
                        className="form-checkbox text-blue-600"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              )}

              {q.type === "group" && (
                <div className="bg-gray-50 p-4 rounded-md border mt-2 space-y-4">
                  {q.subQuestions.map((sub, i) => (
                    <div key={sub.id}>
                      <label className="block font-medium text-gray-700 mb-1">
                        {sub.id}. {sub.question}
                      </label>
                      {sub.description && (
                        <p className="text-sm text-gray-500 mb-2">
                          {sub.description}
                        </p>
                      )}

                      {sub.type === "input" && (
                        <input
                          type="text"
                          name={`subquestion-${sub.id}`}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      )}

                      {sub.type === "radio" && (
                        <div className="space-y-2">
                          {sub.options.map((opt, j) => (
                            <label key={j} className="inline-flex items-center space-x-2">
                              <input
                                type="radio"
                                name={`subquestion-${sub.id}`}
                                value={opt}
                                className="form-radio text-blue-600"
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <p className="text-xs text-gray-400 mt-2">Marks: {q.marks}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SurveyForm;
