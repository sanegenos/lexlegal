import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    title: "Great team and professional service",
    content: "I worked with Lex Legal for the skilled worker visa. They have worked very meticulously from the beginning of the process and provided accurate guidance. Every time I wrote to them, I received an instant reply and they were always accessible. I would like to thank the whole Lex Legal team, especially Kerim. It was a good chance to meet you. I would recommend Lex Legal to everyone with peace of mind.",
    logo: "img/black-google-plus.png",
    link: "https://maps.app.goo.gl/k4jSaiAuCUpUqcaz6"
  },
  {
    title: "Great Team & Good Service",
    content: "Lex Legal made the entire process easier for us for our all applications. They are really friendly and understanding team. They answer any questions you may have during this stressful period. I strongly suggest you to work with them. I would like to thank the entire team, especially Mr. Halil Ibrahim and Mr. Kerim. We were very pleased to work with you.",
    logo: "img/black-google-plus.png",
    link: "https://maps.app.goo.gl/k4jSaiAuCUpUqcaz6"
  },
  {
    title: "Communication is excellent and that makes all the difference!",
    content: "They have been advising us from the beginning of our ECAA visa until naturalisation. Main difference to any other immigration advisor is the communication, they have multiple advisors assigned to your case and you can get answers to any questions through the group of advisors instantly.",
    logo: "img/black-google-plus.png",
    link: "https://maps.app.goo.gl/k4jSaiAuCUpUqcaz6"
  },
  {
    title: "---",
    content: "Lex Legal ekibi, basvurularimizda tum sureci bizim icin cok kolaylastirdi. Gercekten arkadasca ve anlayisla yaklasiyorlar. Bu stresli surecte akliniza takilan her turlu soruya yanit vererek sizi rahatlatiyorlar. Siddetle tavsiye ediyorum kendileriyle calismanizi. Basta Halil Ibrahim Bey ve Kerim Bey olmak uzere tum ekibe cok tesekkur ederim. Sizlerle calismis olmak bizi cok memnun etti.",
    logo: "img/t-pilot.jpg",
    link: "https://www.trustpilot.com/review/lexlegal.com"
  },
  {
    title: "---",
    content: "team, especially Kerim. It was a good chance to meet you. I would recommend Lex Legal to everyone with peace of mind.",
    logo: "img/black-google-plus.png",
    link: "https://maps.app.goo.gl/k4jSaiAuCUpUqcaz6"
  },
  {
    title: "Lex Legal is a humane, highly motivated and collaborative team.",
    content: "Lex Legal firm does its job nicely and solidly. I could reach any time I wanted to reach out to ask a question or follow up. We objected to the refusal for the Ankara Agreement visa in March 2021. Finally we got the good news. Thank you Lex Legal for their efforts and contributions.",
    logo: "img/black-google-plus.png",
    link: "https://maps.app.goo.gl/k4jSaiAuCUpUqcaz6"
  },
  {
    title: "---",
    content: "Lex Legal firmasi Isini guzel ve saglam yapiyor. Soru sormak veya takip icin Ulasmak istedigim herzaman ulasabildim.Ankara Anlasmasi vizesi icin red cevabina mart 2021 de itiraz ettik. en sonunda guzel haberi aldik. Lex Legal'e gayretleri ve katkilari icin tesekkur ederim.",
    logo: "img/black-google-plus.png",
    link: "https://maps.app.goo.gl/k4jSaiAuCUpUqcaz6"
  },
  {
    title: "I was really impressed with the service…",
    content: "I was really impressed with the service provided by Lex Legal team.there is an amazing structure of process from start to finish with everything concluded in a timely manor. The team is very friendly and professional.I would 100% recommend anyone who who needs a law firm in London.",
    logo: "img/t-pilot.jpg",
    link: "https://www.trustpilot.com/review/lexlegal.com"
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonial-section" className="bg-gray-100 py-10 m-2 p-2">
      <div className="max-w-7xl mx-auto overflow-hidden relative">
        <div className="w-full text-left mb-8">
          <h5 className="text-4xl font-semibold uppercase text-center">Sİzden gelenler</h5>
        </div>

        <div className="flex flex-col ">

          <button 
            className="w-10 h-10 bg-gray-600 bg-opacity-50 text-white rounded-lg p-2 m-auto"
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
          >
            &lArr;
          </button>

          <div className="overflow-hidden flex-grow">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <blockquote className="text-center">
                    <h2 className="text-xl text-wrap uppercase">{testimonial.title}</h2>
                    <p className="text-xl text-wrap italic">{testimonial.content}</p>
                    <footer className="mt-4 text-blue-600">
                      <a href={testimonial.link} className="w-full flex justify-center items-center">
                        <Image src={testimonial.logo} alt="Logo" width={100} height={100} className="mr-2 h-auto" />
                        &rarr;
                      </a>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="w-10 h-10 bg-gray-600 bg-opacity-50 text-white rounded-lg p-2 m-auto"
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
          >
            &rArr;
          </button>

          <div className="flex flex-row space-y-4 space-x-4 mb-8">
            <a href="https://www.trustpilot.com/review/lexlegal.com" className="w-full flex justify-center items-center">
              <Image src="img/t-pilot.jpg" alt="Pilot testimonial" width={200} height={100} />
            </a>
            <a href="https://maps.app.goo.gl/k4jSaiAuCUpUqcaz6" className="w-full flex justify-center items-center">
              <Image src="img/black-google-plus.png" target="_blank" alt="Google Plus testimonial" width={200} height={100} />
            </a>
          </div>

          </div>

        </div>

    </section>
  );
};

export default TestimonialSection;