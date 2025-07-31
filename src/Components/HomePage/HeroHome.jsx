import { useEffect, useState } from 'react';
import HeroImage1 from '../../assets/images/manfaatpage/bandarkhalipah2.webp';
import HeroImage2 from '../../assets/images/manfaatpage/bandarkhalipah.webp';
import HeroImage3 from '../../assets/images/partisipasi1.webp';

const images = [HeroImage1, HeroImage2, HeroImage3];

const HeroHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ubah slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='container mx-auto relative h-[100vh] overflow-hidden'>
      {/* Background Image */}
      <img
        src={images[currentIndex]}
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center text-center md:text-left px-4 md:px-16">
        <h1 className="text-white text-xl md:text-3xl font-bold drop-shadow-md md:w-1/2">
          Selamat Datang di <br /><span className='text-4xl md:text-6xl'>Bank Sampah Bandar Khalipah</span>
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl max-w-2xl drop-shadow-sm">
          Ayo jaga lingkungan dengan mengumpulkan sampah.
        </p>
      </div>

      {/* Dot Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroHome;
