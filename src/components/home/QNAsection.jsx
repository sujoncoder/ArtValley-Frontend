"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const QnaSection = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is Art Valley?",
      answer:
        "Art Valley is an online platform dedicated to showcasing a diverse collection of artworks from around the world. We feature both established and emerging artists across various genres and styles.",
    },
    {
      id: 2,
      question: "How can I explore artworks on Art Valley?",
      answer:
        "You can explore artworks on Art Valley by browsing through our curated collections, searching for specific artists or artworks, and engaging in our community discussions and events.",
    },
    {
      id: 3,
      question: "Is Art Valley free to use?",
      answer:
        "Yes, Art Valley is free to use. You can browse artworks, read articles, and participate in community activities without any cost. However, certain artworks or features may require a subscription or purchase.",
    },
    {
      id: 4,
      question: "How can artists showcase their work on Art Valley?",
      answer:
        "Artists can showcase their work on Art Valley by creating a profile, uploading their artworks, and adding descriptions and tags. Our platform helps artists reach a global audience and connect with art enthusiasts.",
    },
  ]);

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Q&A
        </h2>
        <div className="space-y-4">
          {questions.map((qna) => (
            <div
              key={qna.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(qna.id)}
                className="w-full text-left py-6 px-6 flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {qna.question}
                </span>
                <span>
                  {activeQuestion === qna.id ? (
                    <FiChevronUp className="w-6 h-6" />
                  ) : (
                    <FiChevronDown className="w-6 h-6" />
                  )}
                </span>
              </button>
              {activeQuestion === qna.id && (
                <div className="p-6">
                  <p className="text-gray-600">{qna.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QnaSection;
