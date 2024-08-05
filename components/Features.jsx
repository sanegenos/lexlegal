"use client"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Features({ id }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

    return (
      <section id={id} className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
              <p className="text-gray-600">Over 25 years in the legal industry with a proven track record of success.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expertise</h3>
              <p className="text-gray-600">Specialized knowledge across a wide range of legal disciplines.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Focused</h3>
              <p className="text-gray-600">Personalized service with a commitment to achieving the best outcomes for our clients.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  