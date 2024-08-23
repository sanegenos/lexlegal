import React, { useState } from 'react';
import Image from 'next/image';

const ServiceCard = ({ image, title, content }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <div className="w-full md:w-1/3 mb-8">
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md p-6 md:p-10">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-auto md:h-48 object-cover"
        />
        <div className="pt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">{title}</h4>
          <a
            className="text-blue-600 font-semibold hover:underline flex items-center text-xl"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsContentVisible(!isContentVisible);
            }}
          >
            Daha fazla bilgi
            <Image
              src="img/long-arrow-blue.svg"
              alt="long-arrow"
              width={20}
              height={20}
              className="ml-2"
            />
          </a>
          {isContentVisible && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg text-xl">{content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
        image: "img/services-01.webp",
        altText: "service 1",
        title: "Süresiz Oturum Başvuruları",
        content: "Belirli bir süre boyunca ülkede yaşayan ve aranan kriterleri yerine getiren bireylere verilen göçmenlik statüsüdür. ILR (Indefinite Leave to Remain), Birleşik Krallık'ta herhangi bir süre kısıtlaması olmaksızın ikamet etmenize, kamu fonlarına erişmenize, çalışmanıza ve ülkeden serbestçe çıkıp tekrar girmenize olanak tanır."
      },
      {
        image: "img/services-03.webp",
        altText: "service 3",
        title: "Vatandaşlık Başvuruları",
        content: "İngiliz vatandaşlığı başvurusu, yasal gereklilikleri yerine getirenler için mümkündür. Vatandaşlığa başvurma koşulları, sahip olduğunuz oturum türüne göre değişiklik gösterir. Ancak, genellikle süresiz oturum hakkı alındıktan sonra en az 12 ay sonra vatandaşlık başvurusunda bulunulabilir."
      },
      {
        image: "img/services-02.webp",
        altText: "service 2",
        title: "Eş veya Partner Vizesi",
        content: "Aile vizesi kategorisine giren Birleşik Krallık eş vizesi, burada süresiz oturum izni sahibi veya Birleşik Krallık'ta yerleşik durumda olan kişilerin, ulkeye dışında yaşayan eşlerini Birleşik Krallık’a getirmesine ve burada yaşamasına olanak tanır."
      },
      {
        image: "img/services-04.webp",
        altText: "service 4",
        title: "Sponsor Lisansı",
        content: "Yabancı işçileri istihdam etmek isteyen şirketlerin sahip olmaları gereken lisans türüdür."
      },
      {
        image: "img/services-05.webp",
        altText: "service 5",
        title: "Nitelikli Çalışan Vizesi",
        content: "Önerilen maaş iş unvanınıza uygun olarak hükümetin belirlemiş olduğu birimlere uygun olmalıdır."
      },
      {
        image: "img/services-06.webp",
        altText: "service 6",
        title: "Ziyaretçi Vizesi",
        content: "Tatil amacıyla ülkeyi keşfetmek, ailesini veya arkadaşlarını ziyaret etmek veya başka özel bir sebeple İngiltere’ye gelmek isteyen kişiler bu vizeye başvuru yapabilirler."
      },
  ];

  return (
    <section id="services" className="bg-white py-16 relative z-20">
      <div className="container mx-auto flex flex-col max-w-7xl px-4 md:px-0">

        <div className="flex flex-col items-center">
          <div className="w-full lg:w-10/12 text-left mb-12 border-l-0 border-blue-500 pl-0">
            <h2 className="text-4xl text-center font-bold leading-tight">
              İngiltere'deki Göç ve Vize İşlemlerinize Kapsamlı Çözümler
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row px-4 md:px-0">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;