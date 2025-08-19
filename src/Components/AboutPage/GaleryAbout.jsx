import React from 'react'
import dataGalery from '../../Data/DataGalery';

const GaleryAbout = () => {

    const {kolom1, kolom2, kolom3} = dataGalery();

  return (
    <section className='container mx-auto section-spacing'>
        <div className='space-y-10'>
            <h1 className='text-3xl font-bold'>Dokumentasi Kegiatan</h1>
            <div className="grid md:grid-cols-3 gap-4">
                <div className='space-y-4'>
                    {kolom1.map(item =>
                    <img key={item.id} src={item.img} alt={`img-${item.id}`} className='w-full h-80 object-cover' />
                    )}
                </div>
                {/* Kolom 2 - Selang-seling tinggi */}
                <div className='space-y-4'>
                    {kolom2.map((item, index) => (
                    <img
                        key={item.id}
                        src={item.img}
                        alt={`img-${item.id}`}
                        className={`w-full ${index % 2 === 0 ? 'h-50' : 'h-80'} object-cover`}
                    />
                    ))}
                </div>

                {/* Kolom 3 */}
                <div className='space-y-4'>
                    {kolom3.map(item => (
                    <img key={item.id} src={item.img} alt={`img-${item.id}`} className='w-full h-80 object-cover' />
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}
export default GaleryAbout