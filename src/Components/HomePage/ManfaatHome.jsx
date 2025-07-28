import React from 'react'
import dataManfaat from '../../Data/DataManfaat'

const ManfaatHome = () => {
  return (
    <section className='container mx-auto'>
        <div className='section-spacing'>
            <div className='text-center space-y-6'>
                <h1 className='text-4xl font-bold'>Manfaat Bank Sampah untuk <br />Masyarakat</h1>
                <p>Bank sampah berfungsi sebagai solusi dalam pengelolaan sampah. Dengan <br />mengedukasi masyarakat, kita dapat mengurangi dampak negatif sampah terhadap lingkungan.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {dataManfaat.map((item) =>(
                    <div key={item.id} className='flex flex-col gap-5 items-center my-10 text-center w-80'>
                        <img src={item.image} alt="item" className='rounded-xl' />
                        <div className='space-y-2 md:space-y-10'>
                            <h2 className='text-2xl font-bold'>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ManfaatHome