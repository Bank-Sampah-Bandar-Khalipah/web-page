import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import Button from "../Ui/Button";

import HeroImage1 from "../../assets/images/manfaatpage/bandarkhalipah2.webp";
import HeroImage2 from "../../assets/images/manfaatpage/bandarkhalipah.webp";
import HeroImage3 from "../../assets/images/partisipasi1.webp";

const images = [HeroImage1, HeroImage2, HeroImage3];

const HeroHome = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] md:h-[90vh] overflow-hidden flex items-center">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`hero-${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-16 space-y-4 w-full">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-md leading-tight">
          Selamat Datang di website<br />
          <span className="text-4xl md:text-6xl text-[#E9EFFD]">BOHAI</span>
        </h1>
        <p className="text-white text-lg md:text-2xl font-semibold drop-shadow-sm">
          Berkah Orang Tua Harapan Anak Indonesia.
        </p>
        <p className="text-white text-sm md:text-base max-w-xl drop-shadow-sm leading-relaxed">
          Tim yang mengelola Bank Sampah Bandar Khalipah. Bersama kami jaga
          lingkungan dengan mengumpulkan sampah.
        </p>
        <Button
          className="gap-2 w-fit px-4 py-2 inline-flex items-center mx-auto md:mx-0 text-sm md:text-base"
          onClick={() => navigate("/partner")}
        >
          <IoPeopleOutline />
          Bermitra Dengan Kami
        </Button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-6 md:w-8"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroHome;
