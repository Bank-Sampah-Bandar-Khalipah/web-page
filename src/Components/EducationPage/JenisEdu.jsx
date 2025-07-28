import React from 'react'
import dataJenis from '../../Data/DataJenis'

const JenisEdu = () => {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='space-y-4'>
            <h1 className='text-3xl font-bold'>Belajar Memilah Sampah: <br className='hidden md:block'/>Organik, Anorganik, dan B3</h1>
            <p>Dengan memahami jenis sampah merah, biru, dan hijau, kita bisa <br className='hidden md:block'/>mulai memilah dari rumah dan ikut menjaga bumi kita bersama.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10">
            {dataJenis.map((item) => (
                <div key={item.id} className="space-y-4">
                <img
                    src={item.image}
                    alt="item"
                    className="w-full h-64 object-cover"
                />
                <div className="text-justify space-y-4">
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p>{item.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default JenisEdu