import React, { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What does MindsFlare actually do?",
      answer:
        "MindsFlare summarizes long YouTube study videos and playlists into crisp, structured notes — saving you hours of manual note-taking.",
    },
    {
      question: "Can I use it for any subject or topic?",
      answer:
        "Yes! MindsFlare works on any video with clear spoken content — be it programming, biology, UPSC prep, or any other subject.",
    },
    {
      question: "Do I need to watch the full video?",
      answer:
        "Not at all. MindsFlare extracts the key information and provides you with bite-sized notes and timelines instantly.",
    },
    {
      question: "Is it free to use?",
      answer:
        "There is a free trial available. Premium features — like unlimited video processing, export to PDF, and priority speed — are available via subscription.",
    },
    {
      question: "Is this allowed for academic use?",
      answer:
        "Yes. MindsFlare is designed to help you study smarter. It’s like having a friend summarize content for you — not for cheating, just efficient learning.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-white focus:outline-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <p className="text-gray-400 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
