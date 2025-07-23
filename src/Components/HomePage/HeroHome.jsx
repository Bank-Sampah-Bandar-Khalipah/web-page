  import HeroImage from '../../assets/images/manfaatpage/bandarkhalipah2.webp'

const HeroHome = () => {
  return (
    <section className='container mx-auto'>
        <img
          src={HeroImage}
          alt="sampah"
          className="absolute inset-0 h-full w-full object-cover"
        />
      
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative h-[100vh] w-full overflow-hidden">
        {/* Gambar Background */}

        {/* Overlay */}

        {/* Teks di atas gambar */}
        <div className="relative z-10 flex h-full flex-col justify-center px-16">
          <h1 className="text-white text-xl md:text-3xl font-bold drop-shadow-md w-1/2">
            Selamat Datang di <br /><span className='text-4xl md:text-6xl'>Bank Sampah Bandar Khalipah</span>
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl max-w-2xl drop-shadow-sm">
            Ayo jaga lingkungan dengan mengumpulkan sampah.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroHome