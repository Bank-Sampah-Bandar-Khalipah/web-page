import React from 'react'
import CountUp from 'react-countup'
import Image from '../../assets/images/manfaatpage/bandarkhalipah3.webp'

const AchivementEdu = () => {

  const sampah = [
    {id:1, total:80, desc:"Partisipasi Warga", suffix:"%"},
    {id:2, total:1000, desc:"Setoran Sampah per Bulan", suffix:"+"},
    {id:3, total:10000, desc:"Sampah Plastik", suffix:"+"},
    {id:4, total:100, desc:"Sampah Jenis Lainnya", suffix:"+"},
  ]

  return (
    <section className='container mx-auto section-spacing'>
        <div className='grid md:grid-cols-2 gap-5 items-center'>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold'>Sorot Pencapaian Pengelolaan Sampah</h1>
                <p className='text-justify'>Dengan dukungan masyarakat dan sistem pengelolaan yang baik, kami berhasil mengumpulkan ratusan ton sampah dari berbagai wilayah. Data ini menunjukkan peningkatan signifikan setiap bulannya, sekaligus membuktikan bahwa kebiasaan memilah sampah dapat memberikan dampak nyata bagi lingkungan.</p>
                <div className='grid grid-cols-2'>
                    {sampah.map((item) => (
                        <div key={item.id} className='items-center gap-3 my-5 text-3xl font-bold'>
                            <CountUp
                            end={item.total} 
                            duration={2} 
                            suffix={item.suffix}
                            enableScrollSpy
                            scrollSpyOnce
                            />
                            <p className='text-base font-normal'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <img src={Image} alt="foto" />
            </div>
        </div>
        <div className='text-center mt-20 space-y-4'>
            <p>Bersama Kita Pilah, Bersama Kita Jaga Bandar Khalipah.</p>
            <h2 className='text-xl font-bold'>Bank Sampah Bandar Khalipah bukan hanya tempat menyetorkan sampah,<br className='hidden md:block'/> tetapi juga ruang tumbuhnya kesadaran warga akan pentingnya kebersihan dan cinta lingkungan. <br className='hidden md:block'/>Di sini, warga diajak memilah sampah dari rumah dan melihat nilai dari barang bekas, membangun <br className='hidden md:block'/>budaya yang lebih peduli pada alam.</h2>
        </div>
    </section>
  )
}

export default AchivementEdu