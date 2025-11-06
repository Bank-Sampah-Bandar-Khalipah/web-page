import { useEffect, useState } from 'react';
import HeroImage1 from '../../assets/images/manfaatpage/bandarkhalipah2.webp';
import HeroImage2 from '../../assets/images/manfaatpage/bandarkhalipah.webp';
import HeroImage3 from '../../assets/images/partisipasi1.webp';
import { useNavigate } from 'react-router-dom'
import { IoPeopleOutline  } from "react-icons/io5";
import Button from "../Ui/Button"

const images = [HeroImage1, HeroImage2, HeroImage3];

const HeroHome = () => {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Ubah slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Durasi fade out
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative container mx-auto h-[100vh] overflow-hidden'>
      {/* Background Images Stack */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`hero-${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center text-center md:text-left px-4 md:px-16 space-y-4">
        <h1 className="text-white text-xl md:text-3xl font-bold drop-shadow-md md:w-1/2">
          Selamat Datang di <br /><span className='text-4xl md:text-6xl'>Bank Sampah Bandar Khalipah</span>
        </h1>
        <p className="text-white max-w-2xl drop-shadow-sm">
          Ayo jaga lingkungan dengan mengumpulkan sampah.
        </p>
        <Button
          className="gap-2 w-fit px-4 inline-flex items-center mx-auto md:mx-0"
          onClick={() => navigate('/partner')}
        >
          <IoPeopleOutline />
          Bermitra Dengan Kami
        </Button>
      </div>

      {/* Dot Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroHome;