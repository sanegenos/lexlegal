// ParallaxSection.jsx (вариант с фиксированным фоном)
export default function ParallaxSection({ imageUrl, title, description }) {
    return (
      <div
        className="relative bg-fixed bg-cover bg-center h-[75vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="text-center z-20 text-white">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{description}</p>
        </div>
      </div>
    );
  }
