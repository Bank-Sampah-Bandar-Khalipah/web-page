import React from 'react'
import Image from '../../assets/images/proses-sampah.webp';
import { BsDot } from "react-icons/bs";

const why = [
  {id:1, point:"Volume yang Bertambah", desc:"Pengumpulan sampah kami telah mencapai 220kg+ dan terus bertambah, melebihi kapasitas pengolahan saat ini."},
  {id:2, point:"Keahlian Teknis", desc:"Kami membutuhkan pengetahuan khusus dalam teknologi daur ulang canggih dan praktik berkelanjutan."},
  {id:3, point:"Dampak Komunitas", desc:"Bersama-sama, kita dapat menciptakan model yang dapat ditiru oleh lingkungan lain di seluruh dunia."},
]

function WhyPartner() {
  return (
    <section className='section-spacing mx-auto container'>
        <div className='space-y-4'>
            <h1 className='text-center text-2xl md:text-4xl font-bold'>Mengapa Kami Membutuhkan Kemitraan Anda</h1>
            <p className='text-center'>Sebagai organisasi sukarela berbasis komunitas, kami telah membuktikan komitmen tetapi <br className='hidden md:block'/>membutuhkan keahlian dan sumber daya eksternal untuk meningkatkan dampak dan melayani <br className='hidden md:block'/>komunitas yang berkembang.</p>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <img src={Image} alt="" className='h-[400px] w-full object-cover'/>
              <div>
                {why.map((item) => (
                  <div key={item.id} className='space-y-2 my-4 text-center md:text-left'>
                    <p className='text-2xl font-bold flex items-center'><BsDot/>{item.point}</p>
                    <p className=''>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </section>
  )
}

export default WhyPartner