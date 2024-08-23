// components/Banner.jsx
export default function Banner() {
    return (
        <section id="banner" className="bg-cover bg-center bg-white bg-no-repeat py-16 relative min-h-96"
            style={{ backgroundImage: "url('img/London-Banner.webp')" }} >
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-start justify-between max-w-6xl px-6 md:px-16 lg:w-10/12">
            <div className="max-w-lg z-30 mb-8 md:mb-0">
                <h1 className="text-4xl text-white mb-4 text-left">İngiltere’ye Yerleşim Sürecinizde Profesyonel Destek</h1>
                <p className="text-xl mb-8 text-white">
                Lex Legal olarak İngiltere ile ilgili tüm vize süreçleriniz ve hukuksal konularınızda destek almak için iletişim formuna bilgilerinizi bırakabilirsiniz."
                </p>
                <a href="https://web.whatsapp.com/send?phone=447739699968&text=" target="_blank" className="text-xl inline-block bg-green-500 py-3 px-6 rounded-md hover:bg-green-400 transition text-white">
                Whatsapp
                </a>
            </div>

            <div className="mx-auto text-white text-center bg-gray-600 bg-opacity-10 rounded-lg p-6 shadow-lg z-20 w-full md:w-auto">
                <h2 className="text-4xl text-left mb-4">Ücretsiz ön görüşme için ekibimiz en kısa sürede size dönüş yapacaktır</h2>
                <p className="text-xl text-left mb-8">Tüm vize süreçleriniz ve hukuksal konularınızda destek için formu doldurabilirsiniz.</p>

                <form action="https://submit-form.com/T6Pj3IKoD">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1">
                        <label htmlFor="firstName" className="block text-white mb-1 text-xl">Ad</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Adınız" required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl" />
                        </div>
                        <div className="flex-1">
                        <label htmlFor="lastName" className="block text-white mb-1 text-xl">Soyad</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Soyadınız"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1">
                        <label htmlFor="email" className="block text-white mb-1 text-xl">Email*</label>
                        <input type="email" id="email" name="email" placeholder="adsoyad@gmail.com" autoComplete="on" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl" />
                        </div>
                        <div className="flex-1">
                        <label htmlFor="phone" className="block text-white mb-1 text-xl">Telefon No</label>
                        <input type="tel" id="phone" name="phone" placeholder="+12 34 5556 7890" autoComplete="on"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="service" className="block text-white mb-1 text-xl">Konu*</label>
                        <select id="service" name="service" required
                        className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl">
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
                        <label htmlFor="message" className="block text-white mb-1 text-xl">Mesajınız</label>
                        <textarea id="message" name="message" placeholder="İstediğinizi yazın"
                        className="text-gray-500 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 text-xl"></textarea>
                    </div>
                    <button type="submit" target="_blank" className="w-full self-center bg-white text-xl text-black font-semibold py-2 rounded hover:bg-gray-300 transition duration-300 uppercase">
                        Gönder
                    </button>
                </form>
            </div>
            </div>
        </section>
    );
  }
  