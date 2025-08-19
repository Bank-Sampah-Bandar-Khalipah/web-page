import React from 'react'
import dataJenis from '../../Data/DataJenis'
import Card from "../Ui/Card"

const JenisEdu = () => {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='space-y-4'>
            <h1 className='text-3xl font-bold'>Belajar Memilah Sampah: <br className='hidden md:block'/>Organik, Anorganik, dan B3</h1>
            <p>Dengan memahami jenis sampah merah, biru, dan hijau, kita bisa <br className='hidden md:block'/>mulai memilah dari rumah dan ikut menjaga bumi kita bersama.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dataJenis.map((item) => (
                <Card
                    key={item.id}
                    image={item.image}
                    title={item.name}
                    description={item.desc}
                    className="text-justify space-y-4"
                />
            ))}
            </div>
        </div>
    </section>
  )
}

export default JenisEdu