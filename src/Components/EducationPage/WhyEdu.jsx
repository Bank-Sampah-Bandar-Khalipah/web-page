import React from 'react'
import Image from '../../assets/images/bu-sony.webp'

const WhyEdu = () => {

    const point = [
        {id:1, point: "Mengurangi penumpukan sampah yang ada di lingkungan sekitar."},
        {id:2, point: "Memberikan nilai ekonomi dari sampah yang dipilah dan ditabung."},
        {id:3, point: "Membuat kebiasaan baru yang mendukung lingkungan bersih dan peningkatan kesejahteraan."},
    ]

  return (
    <section className='container mx-auto section-spacing'>
        <div className='grid md:grid-cols-2 gap-5 items-center h-[420px]'>
            <div>
                <img src={Image} alt="foto" className='h-[400px] w-full object-cover'/>
            </div>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold'>Pentingnya Bank Sampah</h1>
                <p className='text-justify'>Bank sampah hadir sebagai solusi atas dua masalah utama: penumpukan sampah dan keterbatasan ekonomi warga. Melalui edukasi dan sistem yang teratur, masyarakat diajak melihat sampah sebagai aset, bukan limbah, sehingga tercipta kebiasaan baru yang mendukung lingkungan bersih dan peningkatan kesejahteraan.</p>
                <div>
                    {point.map((item) => (
                        <div key={item.id} className='flex items-center gap-2'>
                            <p>-</p>
                            <p>{item.point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyEdu