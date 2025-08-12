  import React from 'react'
  import HeroImage from '../../assets/images/manfaatpage/bandarkhalipah.webp'

  const HeroAbout = () => {
    return (
      <section className='container mx-auto mb-12'>
          <img
            src={HeroImage}
            alt="sampah"
            className="absolute inset-0 h-[65vh] w-full object-cover"
          />
        
        <div className="absolute inset-0 h-[65vh] bg-black opacity-50"></div>
        
        <div className="relative h-[60vh] w-full overflow-hidden">
          {/* Gambar Background */}

          {/* Overlay */}

          {/* Teks di atas gambar */}
          <div className="relative z-10 flex h-full flex-col justify-center md:px-16 mt-10 text-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md">
              Bersama Wujudkan <br />Lingkungan Bersih & Bernilai
            </h1>
            <p className="text-white mt-4 drop-shadow-sm">
              Setor sampah, rawat bumi, dan ubah limbah menjadi tabungan. Bergabunglah bersama kami <br />dalam gerakan sadar lingkungan di Bandar Khalipah.
            </p>
          </div>
        </div>
      </section>
    )
  }

  export default HeroAbout