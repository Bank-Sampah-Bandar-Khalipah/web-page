import React from 'react'
import Image from '../../assets/images/logo.jpg'
import Title from '../Ui/Title'

const paragraphs = [
  `Bank Sampah Bandar Khalipah dikembangkan untuk menciptakan lingkungan desa yang lebih bersih, sehat, dan berkelanjutan. Inisiatif ini dimulai oleh tim BOHAI (Berkah Orang Tua Harapan Anak Indonesia) sebagai langkah nyata dalam menggerakkan masyarakat untuk peduli terhadap pengelolaan sampah.`,
  `Melalui sistem tabungan sampah, warga dapat menabung sampah anorganik dan memperoleh nilai ekonomis dari hasilnya. Selain mengurangi pencemaran lingkungan, kegiatan ini juga berperan dalam pemberdayaan masyarakat dan penguatan nilai sosial di tingkat desa.`,
  `Program ini juga berfokus pada prinsip GEDSI (Gender Equality, Disability, and Social Inclusion) memastikan setiap individu, tanpa terkecuali, dapat berpartisipasi aktif dalam menjaga kelestarian lingkungan.`,
  `Bersama, mari kita wujudkan desa yang bersih, inklusif, dan bernilai melalui gerakan peduli sampah.`
]

const ProfileAbout = () => {
  return (
    <section className='container mx-auto section-spacing'>
      <div className='grid lg:grid-cols-2 items-center gap-10'>
        <div className='order-2 md:order-1 space-y-4'>
          <h4 className='font-bold'>
            Dari 5 keluarga menjadi satu dusun menuju satu desa
          </h4>
          <Title className='text-left'>
            About Bank Sampah Bandar Khalipah
          </Title>

          {/* Setiap paragraf ditampilkan terpisah */}
          {paragraphs.map((text, index) => (
            <p key={index} className='text-justify'>
              {text}
            </p>
          ))}
        </div>

        <div className='order-1 md:order-2'>
          <img
            src={Image}
            alt="sampah"
            className='w-full h-[40vh] md:h-[80vh] object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default ProfileAbout
