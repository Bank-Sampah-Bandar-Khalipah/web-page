  import React from 'react'
  import HeroImage from '../../assets/images/manfaatpage/bandarkhalipah.webp'

  const HeroAbout = () => {
    return (
      <section className="relative container mx-auto mb-12">
        {/* Background */}
        <img
          src={HeroImage}
          alt="sampah"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[60vh] w-full flex-col items-center justify-center px-6 py-12 text-center sm:px-10 md:px-16">
          <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
            Bersama BOHAI <br />
            Wujudkan Lingkungan Bersih & Bernilai
          </h1>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white drop-shadow-sm sm:text-base md:text-lg">
            BOHAI (Berkah Orang Tua Harapan Anak Indonesia) adalah tim penggerak Bank
            Sampah Bandar Khalipah yang mengajak masyarakat menyetor sampah, merawat
            bumi, dan menjadikannya tabungan bernilai.
          </p>
        </div>
      </section>
    )
  }

  export default HeroAbout