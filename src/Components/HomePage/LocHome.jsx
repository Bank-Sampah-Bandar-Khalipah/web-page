import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const LocHome = () => {

    const info = [
    {
        id: 1,
        icon: <MdOutlineEmail />,
        title: "Email",
        desc: (
        <a
            href="mailto:banksampahbandarkhalipah@gmail.com"
            className="hover:underline"
        >
            banksampahbandarkhalipah@gmail.com
        </a>
        ),
    },
    {
        id: 2,
        icon: <MdOutlineLocalPhone />,
        title: "Hubungi Kami",
        desc: (
        <a
            href="https://wa.me/6285361816750?text=Halo%20saya%20ingin%20bertanya%20tentang%20Bank%20Sampah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
        >
            (+62) 853-6181-6750 (Sony)
        </a>
        ),
    },
    {
        id: 3,
        icon: <GoLocation />,
        title: "Alamat",
        desc: (
        <a
            href="https://maps.app.goo.gl/UzSYFJrUUFhRuGNB6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
        >
            Jl. Besar Bandar Khalipah, Desa Bandar Khalipah, Kecamatan Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara, Indonesia. 
        </a>
        ),
    },
    ];

  return (
    <section className='container mx-auto section-spacing'>
        <div className='space-y-5 md:space-y-8'>
            <h1 className='text-center text-2xl md:text-4xl font-bold'>
                Hubungi Kami
            </h1>
            <p className='text-center'>
                Siap membuat perbedaan bersama? Koordinator kemitraan kami siap mendiskusikan peluang kolaborasi <br className='hidden md:block'/>dan menjawab pertanyaan yang Anda miliki.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center space-y-4'>
                <div className=''>
                    {info.map((item) => (
                        <div key={item.id} className='flex flex-col gap-2 my-5 text-2xl'>
                            {item.icon}
                            <div className='space-y-2 text-base'>
                                <h2 className='font-bold'>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* map */}
                <div className=''>
                    <iframe
                    title="Lokasi Bank Sampah"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15937.989361472815!2d98.7432867!3d3.6145786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031cfe73614cf8f%3A0x0!2zM8KwMzYnNTIuNSJOIDk4wrA0NCczNS44IkU!5e0!3m2!1sid!2sid!4v1721955900000!5m2!1sid!2sid
"
                    height="350"
                    className="w-full"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LocHome