// page.js
"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import ServicesSection from '../../components/ServicesSection';
import TestimonialSection from '../../components/Testimonials';

export default function Home() {

  return (
    <>
      <header id="header" className="bg-white py-4 flex flex-col justify-center items-center w-full border-b relative z-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 border-b">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/lexlegal_ltd/" aria-label="Instagram" className="text-gray-600 hover:text-gray-900"><FaInstagram size={30} style={{ color: '#C13584' }} /></a>
            <a href="https://tr.linkedin.com/company/lexlegal-ltd" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900"><FaLinkedin size={30} style={{ color: '#0A66C2' }} /></a>
            <a href="https://www.youtube.com/@LexLegalLtd" aria-label="YouTube" className="text-gray-600 hover:text-gray-900"><FaYoutube size={30} style={{ color: '#FF0000' }} /></a>
            <a href="https://twitter.com/lexlegal_uk" aria-label="Twitter" className="text-gray-600 hover:text-gray-900"><FaTwitter size={30} style={{ color: '#00acee' }} /></a>
            <a href="https://www.facebook.com/lexlegaluk" aria-label="Facebook" className="text-gray-600 hover:text-gray-900"><FaFacebook size={30} style={{ color: '#3b5998' }} /></a>
          </div>

          <div className="flex items-center mb-4 md:mb-0">
            <img src="img/logolegal.png" />
          </div>

          <div>
            <a href="tel:+447739699968" className="text-blue-700 hover:text-blue-900 pb-3 border-b border-blue-700 hover:border-blue-900 uppercase">Bİzİ arayın</a>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center py-6 space-x-4 max-w-7xl">
          <a href="/" className="text-blue-700 hover:text-blue-900">Ana Sayfa</a>
          <a href="#about" className="text-blue-700 hover:text-blue-900">Hakkımızda</a>
          <a href="#ourteam" className="text-blue-700 hover:text-blue-900">Ekibimiz</a>
          <a href="#services" className="text-blue-700 hover:text-blue-900">Hizmetlerimiz</a>
          <a href="#blog" className="text-blue-700 hover:text-blue-900">Blog</a>
          <a href="#contact" className="text-blue-700 hover:text-blue-900">İletişim</a>
        </nav>
      </header>

      <section id="banner" className="bg-cover bg-center bg-white bg-no-repeat py-16 relative min-h-96"
        style={{ backgroundImage: "url('img/London-Banner.webp')" }} >
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-start justify-between max-w-6xl px-6 md:px-16 lg:w-10/12">
          <div className="max-w-lg z-30 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-4 text-left">İngiltere’ye Yerleşim Sürecinizde Profesyonel Destek</h1>
            <p className="text-base md:text-lg mb-8 text-white">
              Lex Legal olarak İngiltere ile ilgili tüm vize süreçleriniz ve hukuksal konularınızda destek almak için iletişim formuna bilgilerinizi bırakabilirsiniz."
            </p>
            <a href="https://web.whatsapp.com/send?phone=447739699968&text=" className="inline-block bg-green-500 py-3 px-6 rounded-md hover:bg-green-400 transition text-white">
              Whatsapp
            </a>
          </div>

          <div className="mx-auto text-white text-center bg-gray-600 bg-opacity-10 rounded-lg p-6 shadow-lg z-20 w-full md:w-auto">
            <h2 className="text-2xl md:text-3xl text-left font-bold mb-4">Ön Görüşme Formu</h2>
            <p className="text-base md:text-lg text-left mb-8">Tüm vize süreçleriniz ve hukuksal konularınızda destek için formu doldurabilirsiniz.</p>

            <form action="https://submit-form.com/T6Pj3IKoD">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-white mb-1">Ad</label>
                  <input type="text" id="firstName" name="firstName" placeholder="Adınız*" required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-white mb-1">Soyad</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Soyadınız"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-white mb-1">Email*</label>
                  <input type="email" id="email" name="email" placeholder="adsoyad@gmail.com" autoComplete="on" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-white mb-1">Telefon No</label>
                  <input type="tel" id="phone" name="phone" placeholder="0123456789" autoComplete="on"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-white mb-1">Konu*</label>
                <select id="service" name="service" required
                  className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="suresiz">Süresiz Oturum Başvuruları</option>
                  <option value="vatandaslik">Vatandaşlık Başvuruları</option>
                  <option value="partner">Eş veya Partner Vizesi</option>
                  <option value="sponsor">Sponsor Lisansı</option>
                  <option value="calisan">Nitelikli Çalışan Vizesi</option>
                  <option value="turistic">Ziyaretçi Vizesi</option>
                  <option value="ogrenci">Öğrenci Vizesi</option>
                  <option value="atavize">Birleşik Krallık Ata Vizesi</option>
                  <option value="mezumvize">Birleşik Krallık Mezun Vizesi</option>
                  <option value="kurucuvize">Yenilikçi Kurucu Vize</option>
                  <option value="yetenekvize">Küresel Yetenek Vizesi</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white mb-1">Mesajınız</label>
                <textarea id="message" name="message" placeholder="İstediğinizi yazın"
                  className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
              </div>
              <button type="submit" className="w-full self-center bg-white text-black font-semibold py-2 rounded hover:bg-gray-300 transition duration-300 uppercase">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>

      <ServicesSection />

      <TestimonialSection />

      <footer id="footer" className="bg-gray-900 text-white py-10 flex flex-col">

        <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center max-w-7xl border-b border-gray-700 pb-10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-start mb-4 space-y-4 md:space-y-0 md:space-x-6">
              <span className="text-2xl font-bold">LexLegal</span>
              <div className="flex justify-between space-x-4">
                <img loading="lazy" src="img/oisc.gif" alt="Office of the Immigration Services Commissioner" className="h-auto w-24 md:h-20 md:w-auto" />
                <span className="text-lg text-left font-bold">Office of the Immigration<br />
                  Services Commissioner
                  Register No: F201700024
                </span>
              </div>
              <div className="flex justify-between space-x-4">
                <img loading="lazy" src="img/ico-logo.png" alt="Information Commissioner’s Office" className="h-auto w-24 md:h-20 md:w-auto" />
                <span className="text-lg text-left font-bold">Information Commissioner’s Office
                  Reference Number: ZB295269</span>
              </div>
              <div className="md:pr-6 md:w-72">
                <img loading="lazy" src="img/gdpr-compliance.png" alt="Information Commissioner’s Office" className="h-auto w-24 md:h-20 md:w-auto" />
              </div>
            </div>
          </div>

          <div className="block mb-0">
            <ul className="flex flex-row space-y-0 md:space-x-8 text-sm justify-around md:justify-start">
              <li><a href="#ourteam" className="hover:text-gray-400">Ekibimiz</a></li>
              <li><a href="#services" className="hover:text-gray-400">Hizmetlerimiz</a></li>
              <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#contact" className="hover:text-gray-400">İletişim</a></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-7xl py-10">

          <div className="mb-8 md:mb-0 text-center md:text-left">
            <p className="text-sm">ADDRES: London W1H 5PW | Meridien House, 42 Upper Berkeley Street</p>
            <p className="text-sm"><span className="font-semibold">Monday - Friday:</span> 09:00 AM - 6:00 PM</p>
          </div>

          <div className="text-center flex flex-col items-center">

            <div className="mt-4 flex justify-center md:justify-end space-x-4">
              <a href="https://www.instagram.com/lexlegal_ltd/" aria-label="Instagram" className="text-gray-600 hover:text-gray-900"><FaInstagram size={30} style={{ color: '#C13584' }} /></a>
              <a href="https://tr.linkedin.com/company/lexlegal-ltd" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900"><FaLinkedin size={30} style={{ color: '#0A66C2' }} /></a>
              <a href="https://www.youtube.com/@LexLegalLtd" aria-label="YouTube" className="text-gray-600 hover:text-gray-900"><FaYoutube size={30} style={{ color: '#FF0000' }} /></a>
              <a href="https://twitter.com/lexlegal_uk" aria-label="Twitter" className="text-gray-600 hover:text-gray-900"><FaTwitter size={30} style={{ color: '#00acee' }} /></a>
              <a href="https://www.facebook.com/lexlegaluk" aria-label="Facebook" className="text-gray-600 hover:text-gray-900"><FaFacebook size={30} style={{ color: '#3b5998' }} /></a>
            </div>
            <div className="text-sm mt-4">
              © 2024 - LexLegal All Rights Reserved
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm"><a href="mailto:info@lexlegal.com" className="hover:text-gray-400">info@lexlegal.com</a></p>
            <p className="text-sm"><a href="tel:+447739699968" className="hover:text-gray-400">+44 77 3969 9968</a></p>
          </div>
        </div>

      </footer>

    </>
  );
}
