import React from 'react'
import Img1 from '../../assets/images/manfaatpage/bandarkhalipah.webp'
import Img2 from '../../assets/images/manfaatpage/bandarkhalipah2.webp'
import Img3 from '../../assets/images/manfaatpage/bandarkhalipah3.webp'
import Img4 from '../../assets/images/manfaatpage/bandarkhalipah4.webp'
import Img5 from '../../assets/images/manfaatpage/bandarkhalipah5.webp'
import Img6 from '../../assets/images/manfaatpage/bandarkhalipah6.webp'
import Img7 from '../../assets/images/kegiatan1.webp'
import Img8 from '../../assets/images/kegiatan2.webp'
import Img9 from '../../assets/images/kegiatan3.webp'
import Img10 from '../../assets/images/kegiatan4.webp'


const GaleryAbout = () => {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='space-y-10'>
            <h1 className='text-3xl font-bold'>Dokumentasi Kegiatan</h1>
            <div class="grid md:grid-cols-3 gap-4">
                <div className='space-y-4'>
                    <img src={Img1} alt="" className='w-full h-80 object-cover'/>
                    <img src={Img2} alt="" className='w-full h-80 object-cover'/>
                    <img src={Img8} alt="" className='w-full h-80 object-cover'/>
                </div>
                <div className='space-y-4'>
                    <img src={Img3} alt="" className='w-full h-50 object-cover'/>
                    <img src={Img6} alt="" className='w-full h-50 object-cover'/>
                    <img src={Img5} alt="" className='w-full h-80 object-cover'/>
                    <img src={Img9} alt="" className='w-full h-100 object-cover'/>
                </div>
                <div className='space-y-4'>
                    <img src={Img4} alt="" className='w-full h-80 object-cover'/>
                    <img src={Img7} alt="" className='w-full h-80 object-cover'/>
                    <img src={Img10} alt="" className='w-full h-80 object-cover'/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default GaleryAbout