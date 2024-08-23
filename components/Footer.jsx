// components/Map.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10 flex flex-col">

      <div className="container mx-auto flex flex-col md:flex-row md:justify-stretch md:items-center max-w-7xl border-b border-gray-700 pb-10">
        <div className="mb-8 md:mb-0 text-center md:text-left self-center">
          <div className="flex flex-col md:flex-row md:items-start mb-4 space-y-4 md:space-y-0 md:space-x-6">
            <div className='w-48'>
              <span className="text-4xl font-bold">Lex Legal</span>
            </div>
            <div className="flex space-x-4">
              <div className="w-24 flex justify-center ">
                <img loading="lazy" src="img/oisc.gif" alt="Office of the Immigration Services Commissioner" className="h-auto w-16 md:h-20 md:w-auto" />
              </div>
              <div className='w-48 text-left'>
                <span className="text-xl text-left">Office of the Immigration<br />
                  Services Commissioner<br />
                  Register No: F201700024
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-24 md:w-auto">
                <img loading="lazy" src="img/ico-logo.png" alt="Information Commissioner’s Office" className="h-auto w-24 md:h-20 md:w-auto" />
              </div>
              <div className='w-60 text-left'>
                <span className="text-xl text-left">Information Commissioner’s Office<br/> 
                  Reference Number:
                  ZB295269
                </span>
              </div>
            </div>

            <div className="md:pr-6 md:w-72">
              <img loading="lazy" src="img/gdpr-compliance.png" alt="Information Commissioner’s Office" className="h-auto w-24 md:h-20 md:w-auto" />
            </div>

          </div>
        </div>

        {/* <div className="block mb-0">
          <ul className="flex flex-row space-y-0 md:space-x-8 text-xl justify-around md:justify-start">
            <li><a href="#ourteam" className="hover:text-gray-400">Ekibimiz</a></li>
            <li><a href="#services" className="hover:text-gray-400">Hizmetlerimiz</a></li>
            <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#contact" className="hover:text-gray-400">İletişim</a></li>
          </ul>
        </div> */}
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between max-w-7xl p-10">

        <div className="mb-8 md:mb-0 text-left">
          <a href="https://maps.app.goo.gl/k4jSaiAuCUpUqcaz6" target="_blank" className="text-xl">Lex Legal <br/>
            Meridien House <br/>
            42 Upper Berkeley Street <br/>
            London W1H 5PW <br/>
            Pazartesi – Cuma 09:00 – 18:00
          </a>
        </div>

        <div className="text-center flex flex-col items-center">

          <div className="mt-4 flex justify-center md:justify-end space-x-4">
            <a href="https://www.instagram.com/lexlegal_ltd/" aria-label="Instagram" className="text-gray-600 hover:text-gray-900"><FaInstagram size={30} style={{ color: '#C13584' }} /></a>
            <a href="https://tr.linkedin.com/company/lexlegal-ltd" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900"><FaLinkedin size={30} style={{ color: '#0A66C2' }} /></a>
            <a href="https://www.youtube.com/@LexLegalLtd" aria-label="YouTube" className="text-gray-600 hover:text-gray-900"><FaYoutube size={30} style={{ color: '#FF0000' }} /></a>
            <a href="https://twitter.com/lexlegal_uk" aria-label="Twitter" className="text-gray-600 hover:text-gray-900"><FaTwitter size={30} style={{ color: '#00acee' }} /></a>
            <a href="https://www.facebook.com/lexlegaluk" aria-label="Facebook" className="text-gray-600 hover:text-gray-900"><FaFacebook size={30} style={{ color: '#3b5998' }} /></a>
          </div>
          <div className="text-xl mt-4">
            © 2024 - Lex Legal All Rights Reserved
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xl"><a href="mailto:info@lexlegal.com" className="hover:text-gray-400">contact@lexlegal.com</a></p>
          <p className="text-xl"><a href="tel:+447739699968" className="hover:text-gray-400">+44 77 3969 9968</a></p>
          <p className="text-xl"><a href="tel:+442039880575" className="hover:text-gray-400">+44 20 3988 0575</a></p> 
        </div>
      </div>

    </footer>
  );
}
