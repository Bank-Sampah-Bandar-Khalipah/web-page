import React from 'react'
import dataManfaat from '../../Data/DataManfaat'

const ManfaatHome = () => {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='text-center space-y-5 md:space-y-10'>
            <h1 className='text-2xl md:text-4xl font-bold'>Manfaat Bank Sampah untuk <br className='hidden md:block'/>Masyarakat</h1>
            <p>Bank sampah berfungsi sebagai solusi dalam pengelolaan sampah. Dengan <br className='hidden md:block'/>mengedukasi masyarakat, kita dapat mengurangi dampak negatif sampah terhadap lingkungan.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {dataManfaat.map((item) =>(
                <div key={item.id} className='flex flex-col gap-5 items-center my-5 md:my-10 text-center w-80'>
                    <img src={item.image} alt="item" className='w-full h-64 object-cover' />
                    <div className='space-y-2 md:space-y-10'>
                        <h2 className='text-xl md:text-2xl font-bold'>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ManfaatHome