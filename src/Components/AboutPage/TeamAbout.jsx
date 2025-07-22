import React, { useState, useRef, useEffect } from "react";
import dataTeam from "../../Data/DataTeam";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const TeamAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const cardWidth = 350 + 20; // width card (400px) + gap (20px)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, dataTeam.length - visibleCount)
    );
  };

  // Jumlah yang terlihat berdasarkan lebar layar container
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const count = Math.floor(containerWidth / cardWidth);
        setVisibleCount(count || 1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container mx-auto team-spacing">
      <div className="items-center gap-10 space-y-4">
        <h4 className="font-bold">Tim Kami</h4>
        <h1 className="text-3xl font-bold">
          Kenali Orang-Orang Hebat di Balik <br />
          Bank Sampah Bandar Khalipah
        </h1>

        <div className="relative">
          <div
            ref={containerRef}
            className="overflow-hidden w-full"
          >
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
              }}
            >
              {dataTeam.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 w-[350px] h-[280px] space-y-4 bg-white p-4"
                >
                  <div className="flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 border rounded-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <p className="text-gray-500">{item.role}</p>
                    <p className="text-justify text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi */}
          <div className="absolute -bottom-6 right-0 flex gap-4 pr-16">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="border-2 p-2 rounded-full disabled:opacity-30"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + visibleCount >= dataTeam.length}
              className="border-2 p-2 rounded-full disabled:opacity-30"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAbout;
