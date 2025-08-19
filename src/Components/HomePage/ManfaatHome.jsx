import React from 'react'
import dataManfaat from '../../Data/DataManfaat'
import Card from "../Ui/Card"
import Title from '../Ui/Title'

const ManfaatHome = () => {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='text-center space-y-5 md:space-y-10'>
            <Title>Manfaat Bank Sampah untuk <br className='hidden md:block'/>
                Masyarakat
            </Title>
            <p>
                Bank sampah berfungsi sebagai solusi dalam pengelolaan sampah. Dengan <br className='hidden md:block'/>mengedukasi masyarakat, kita dapat mengurangi dampak negatif sampah terhadap lingkungan.
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {dataManfaat.map((item) =>(
                <Card
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.desc}
                    className="w-80 text-center"
                />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ManfaatHome