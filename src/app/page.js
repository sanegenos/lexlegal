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


export default function Home() {
  return (
    <ParallaxProvider>
      <HeroWithVideoBackground 
        videoSrc="/videoplayback.mp4" 
        title="Your Legal Partner for Success" 
        description="Experience unparalleled legal expertise" 
      />
      <Timeline />
      <ParallaxSection 
        imageUrl="/img/Birlesik-Krallik-Sponsor-Lisansi-Basvurularinda-Gercek-Sirketin-Tanimi-ve-Kriterleri-scaled.jpg" 
        title="Our Commitment to Excellence" 
        description="Providing top-notch legal services for over two decades" 
      />
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
      <LeadForm id="contact" />

      <footer className="bg-white text-black py-10 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Lex Legal. All Rights Reserved.
        </p>
      </footer>
    </ParallaxProvider>
  );
}
