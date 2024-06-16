"use client";

import { useState } from "react";

const ArtStyleQuizSection = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [quizResults, setQuizResults] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Which colors do you prefer in art?",
      options: ["Bright and bold", "Subtle and muted", "Monochrome"],
    },
    {
      id: 2,
      question: "What kind of textures appeal to you?",
      options: [
        "Smooth and glossy",
        "Textured and rough",
        "Minimalist and clean",
      ],
    },
    {
      id: 3,
      question: "Which subject matter interests you the most?",
      options: [
        "Nature and landscapes",
        "Urban scenes and architecture",
        "Abstract concepts",
      ],
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleQuizSubmit = () => {
    // Logic to process quiz results based on selectedOption
    // Example logic:
    let result = "";
    if (selectedOption === "Bright and bold") {
      result = "Impressionist Art";
    } else if (selectedOption === "Subtle and muted") {
      result = "Realism";
    } else if (selectedOption === "Monochrome") {
      result = "Minimalism";
    }
    setQuizResults(result);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Art Style Quiz
        </h2>
        <div className="max-w-lg mx-auto">
          {quizResults ? (
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-xl font-semibold text-gray-800 mb-4">
                Based on your preferences, your art style is:
              </p>
              <p className="text-2xl font-bold text-blue-500 mb-4">
                {quizResults}
              </p>
              <p className="text-gray-600">
                Start exploring artworks in this style on Art Valley!
              </p>
            </div>
          ) : (
            <div>
              {questions.map((question) => (
                <div
                  key={question.id}
                  className="bg-white rounded-lg shadow-lg mb-6"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {question.question}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {question.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionSelect(option)}
                          className={`px-4 py-2 rounded-md text-sm font-medium ${
                            selectedOption === option
                              ? "bg-blue-500 text-white"
                              : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-200"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center">
                <button
                  onClick={handleQuizSubmit}
                  className={`bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium ${
                    selectedOption
                      ? "hover:bg-blue-600"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!selectedOption}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtStyleQuizSection;
