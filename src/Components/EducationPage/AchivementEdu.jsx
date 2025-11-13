import React from 'react'
import CountUp from 'react-countup'
import Image from '../../assets/images/sampah.webp'

const AchivementEdu = () => {

  const sampah = [
    {id:1, total:80, desc:"Partisipasi Warga", suffix:"%"},
    {id:2, total:100, desc:"Setoran Sampah per Bulan", suffix:"kg"},
    {id:3, total:100, desc:"Sampah Kertas", suffix:"kg+"},
    {id:4, total:50, desc:"Sampah Jenis Lainnya", suffix:"kg+"},
  ]

  return (
    <section className='container mx-auto section-spacing'>
        <div className='text-center space-y-4'>
            <p>Bersama Kita Pilah, Bersama Kita Jaga Bandar Khalipah.</p>
            <h2 className='text-lg md:text-xl font-bold'>
                Bank Sampah Bandar Khalipah bukan hanya tempat menyetorkan sampah,<br className='hidden lg:block'/> 
                tetapi juga ruang tumbuhnya kesadaran warga akan pentingnya kebersihan dan cinta lingkungan. 
                <br className='hidden lg:block'/>Di sini, warga diajak memilah sampah dari rumah dan melihat nilai dari barang bekas,
                membangun <br className='hidden lg:block'/>budaya yang lebih peduli pada alam.
            </h2>
        </div>
    </section>
  )
}

export default AchivementEdu
