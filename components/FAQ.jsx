"use client"

import { useState } from 'react';

const faqs = [
  { question: "What services do you offer?", answer: "We provide a wide range of legal services including corporate law, family law, and more." },
  { question: "How do I schedule a consultation?", answer: "You can schedule a consultation by contacting us via phone or our online form." },
  { question: "What are your fees?", answer: "Our fees vary depending on the complexity of the case. Please contact us for more details." },
];

export default function FAQ({ id }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 mb-4">
            <h3
              className="cursor-pointer text-lg font-semibold py-4 text-black"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h3>
            {activeIndex === index && (
              <div className="transition-all duration-300 ease-in-out">
                <p className="text-gray-600 py-2">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}