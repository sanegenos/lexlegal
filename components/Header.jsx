// components/Header.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope, FaPhone, FaMap } from 'react-icons/fa';

export default function Header() {
    return (
        <header id="header" className="bg-white py-2 flex flex-col justify-center items-center w-full border-b relative z-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-b">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://www.instagram.com/lexlegal_ltd/" aria-label="Instagram" className="text-gray-600 hover:text-gray-900"><FaInstagram size={20} style={{ color: '#C13584' }} /></a>
                    <a href="https://tr.linkedin.com/company/lexlegal-ltd" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900"><FaLinkedin size={20} style={{ color: '#0A66C2' }} /></a>
                    <a href="https://www.youtube.com/@LexLegalLtd" aria-label="YouTube" className="text-gray-600 hover:text-gray-900"><FaYoutube size={20} style={{ color: '#FF0000' }} /></a>
                    <a href="https://twitter.com/lexlegal_uk" aria-label="Twitter" className="text-gray-600 hover:text-gray-900"><FaTwitter size={20} style={{ color: '#00acee' }} /></a>
                    <a href="https://www.facebook.com/lexlegaluk" aria-label="Facebook" className="text-gray-600 hover:text-gray-900"><FaFacebook size={20} style={{ color: '#3b5998' }} /></a>
                    <a href="mailto:contact@lexlegal.com" aria-label="Facebook" className="text-gray-600 hover:text-gray-900"><FaEnvelope size={20} style={{ color: '#0A66C2' }} /></a>
                    <a href="https://maps.app.goo.gl/k4jSaiAuCUpUqcaz6" aria-label="Facebook" className="text-gray-600 hover:text-gray-900"><FaMap size={20} style={{ color: '#3b5998' }} /></a>
                    <a href="tel:+442039880575" aria-label="Facebook" className="text-gray-600 hover:text-gray-900"><FaPhone size={20} style={{ color: '#0A66C2' }} /></a>
                </div>

                <div className="flex items-center mb-4 md:mb-0 max-w-72">
                    <img src="img/logolegal.png" />
                </div>

                <div className="flex flex-col item-center justify-center">
                    <div>
                        <a href="tel:+442039880575" className="hover:text-blue-900 uppercase text-xl text-left">+44 20 3988 0575 </a>
                        <a href="tel:+447739699968" className="hover:text-blue-900 uppercase text-xl text-left"> | +44 77 3969 9968</a>
                    </div>
                    <a href="tel:+447739699968" className="text-white hover:text-blue-900 bg-blue-700 hover:bg-blue-300 rounded-2xl py-1 px-5 mb-1 border-b border-blue-700 hover:border-blue-900 uppercase font-[Arial] font-black text-lg">Bİzİmle hemen İletİşİme geçİn</a>
                </div>
            </div>

            {/* <nav className="flex flex-wrap justify-center py-6 space-x-4 max-w-7xl">
                <a href="/" className="text-blue-700 hover:text-blue-900">Ana Sayfa</a>
                <a href="#about" className="text-blue-700 hover:text-blue-900">Hakkımızda</a>
                <a href="#ourteam" className="text-blue-700 hover:text-blue-900">Ekibimiz</a>
                <a href="#services" className="text-blue-700 hover:text-blue-900">Hizmetlerimiz</a>
                <a href="#blog" className="text-blue-700 hover:text-blue-900">Blog</a>
                <a href="#contact" className="text-blue-700 hover:text-blue-900">İletişim</a>
            </nav> */}
        </header>
    );
  }