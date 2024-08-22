// page.js
"use client";
import { ParallaxProvider } from 'react-scroll-parallax';
import HeroWithVideoBackground from "../../components/HeroWithVideoBackground";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import LeadForm from "../../components/LeadForm";
import ParallaxSection from "../../components/ParallaxSection";
import Timeline from "../../components/Timeline";
import Header from '../../components/Header';
import Banner from '../../components/Banner';


export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <ParallaxProvider>
      <ParallaxSection 
          imageUrl="/img/Birlesik-Krallik-Sponsor-Lisansi-Basvurularinda-Gercek-Sirketin-Tanimi-ve-Kriterleri-scaled.jpg" 
          title="Our Commitment to Excellence" 
          description="Providing top-notch legal services for over two decades" 
        />
        <HeroWithVideoBackground 
          videoSrc="/videoplayback.mp4" 
          title="Your Legal Partner for Success" 
          description="Experience unparalleled legal expertise" 
        />
        {/* <Timeline /> */}
        
        <Features id="features" />
        <Testimonials id="testimonials" />
        <ParallaxSection 
          imageUrl="/img/Firsat-Karti-Nedir-Kimler-Basvurabilir.jpg" 
          title="Expert Legal Advice" 
          description="Guiding you through complex legal challenges" 
        />
        <FAQ id="faq" />
        <ParallaxSection 
          imageUrl="/img/Ingiltere-icin-Visa-2.jpg" 
          title="Client-Centered Approach" 
          description="We prioritize your needs and interests" 
        />
            
        <footer className="bg-gray-900 text-white py-10 flex flex-col">

          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-7xl border-b border-gray-700 pb-10">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                      {/* <img src="logo.png" alt="Logo" className="h-10 w-25 mr-2"/> */}
                      <span className="text-2xl font-bold">LexLegal</span>
                  </div>
              </div>

              <div className="mb-8 md:mb-0">
                  <ul className="flex space-x-8 text-sm justify-center">
                      <li><a href="#" className="hover:text-gray-400">Our Lawyers</a></li>
                      <li><a href="#" className="hover:text-gray-400">Practice Area</a></li>
                      <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                      <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                  </ul>
              </div>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-7xl py-10">

              <div className="mb-8 md:mb-0 text-center md:text-left">
                  <p className="text-sm">
                      ADDRESS: Marylebone, London W1H 5PW | Meridien House, 42 Upper Berkeley S
                  </p>
                  <p className="text-sm">
                      <span className="font-semibold">Monday - Friday:</span> 10:00 - 6:00 PM
                  </p>
              </div>
              
              <div className="container mx-auto text-center flex flex-col items-center">
                  <div className="mt-4 flex justify-center md:justify-end space-x-4">
                      <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                      <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                  </div>
                  <div className="text-sm ">
                      © {new Date().getFullYear()} Lex Legal. All Rights Reserved.
                  </div>
              </div>
                  
              <div className="text-center md:text-right">
                  <p className="text-sm">
                      <a href="mailto:info@lexlegal.com" className="hover:text-gray-400">info@lexlegal.com</a>
                  </p>
                  <p className="text-sm">
                      <a href="tel:+447739699968" className="hover:text-gray-400">+44 77 3969 9968</a>
                  </p>
              </div>
          </div>

        </footer>

      </ParallaxProvider>
    </>
  );
}
