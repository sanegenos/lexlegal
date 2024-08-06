import { useState, useEffect, useRef } from 'react';

const timelineData = [
    { year: 2011, event: "Company Founding" },
    { year: 2014, event: "Opening of the first regional office" },
    { year: 2017, event: "Victory in a major corporate case" },
    { year: 2018, event: "Expansion of practice to the international level" },
    { year: 2021, event: "Launch of the pro-bono program" },
    { year: 2022, event: "Introduction of innovative technologies into legal practice" },
    { year: 2023, event: "Celebrating the company's 15th anniversary" },
];

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState({});
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevItems) => ({
              ...prevItems,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Journey</h2>
        <div className="relative text-black" ref={timelineRef}>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-400 to-gray-200"></div>
        {timelineData.map((item, index) => (
            <div
            key={item.year}
            id={`timeline-item-${index}`}
            className={`timeline-item relative mb-16 ${
                index % 2 === 0 ? 'left-timeline' : 'right-timeline'
            }`}
            >
            <div
                className={`flex items-center transition-all duration-700 ease-in-out ${
                visibleItems[`timeline-item-${index}`]
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
            >
                {/* Иконка перед карточкой */}
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg mr-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </div>

                {/* Карточка с контентом */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">{item.year}</h3>
                <p className="text-gray-700">{item.event}</p>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
  );
}