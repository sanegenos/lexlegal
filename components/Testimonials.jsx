"use client"
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const testimonials = [
  { name: "John Doe", feedback: "Exceptional service.", rating: 5 },
  { name: "Jane Smith", feedback: "Highly professional.", rating: 4 },
  { name: "Michael Johnson", feedback: "Top-notch advice.", rating: 5 },
];

export default function Testimonials({ id }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id={id} className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 text-gray-800 shadow-lg rounded-lg">
              <p className="text-lg mb-4">"{testimonial.feedback}"</p>
              <div className="flex items-center">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927a.998.998 0 011.902 0l1.518 3.09 3.42.497a.998.998 0 01.554 1.705l-2.472 2.409.583 3.403a.998.998 0 01-1.45 1.054L10 13.347l-3.054 1.605a.998.998 0 01-1.45-1.054l.583-3.403L3.607 8.22a.998.998 0 01.554-1.705l3.42-.497L9.049 2.927z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}