import React, { useState } from 'react';
import dataGalery from '../../Data/DataGalery';

const GaleryAbout = () => {
  const { kolom1, kolom2, kolom3 } = dataGalery();

  const [showAll, setShowAll] = useState(false);

  const LIMIT = 2;
  const sliceData = (data) => (showAll ? data : data.slice(0, LIMIT));

  return (
    <section className="container mx-auto section-spacing">
      <div className="space-y-8 relative">

        <h1 className="text-3xl font-bold text-center md:text-left">
          Dokumentasi Kegiatan
        </h1>

        {/* WRAPPER untuk efek masking */}
        <div className={`relative transition-all duration-500 overflow-hidden`}>

          {/* GRID */}
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
              transition-all duration-500
              ${showAll ? "max-h-none" : "max-h-[620px]"} 
            `}
          >
            {/* Kolom 1 */}
            <div className="space-y-5">
              {sliceData(kolom1).map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt={`img-${item.id}`}
                  className="w-full h-72 md:h-80 object-cover rounded-xl shadow-sm transition-transform hover:scale-[1.02] duration-300"
                />
              ))}
            </div>

            {/* Kolom 2 */}
            <div className="space-y-5">
              {sliceData(kolom2).map((item, index) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt={`img-${item.id}`}
                  className={`w-full ${
                    index % 2 === 0 ? 'h-56' : 'h-80'
                  } object-cover rounded-xl shadow-sm transition-transform hover:scale-[1.02] duration-300`}
                />
              ))}
            </div>

            {/* Kolom 3 */}
            <div className="space-y-5">
              {sliceData(kolom3).map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt={`img-${item.id}`}
                  className="w-full h-72 md:h-80 object-cover rounded-xl shadow-sm transition-transform hover:scale-[1.02] duration-300"
                />
              ))}
            </div>
          </div>

          {/* Efek Gradient - muncul saat belum showAll */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>

        {/* Tombol Load More */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-[#0A2050] hover:bg-[#12306D] text-white rounded-full shadow-md transition-all duration-300 font-semibold"
          >
            {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default GaleryAbout;
