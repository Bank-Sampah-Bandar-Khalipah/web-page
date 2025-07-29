import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    const footItem = [
        { path: "https://web.facebook.com/?locale=id_ID&_rdc=1&_rdr#", label: "Facebook", icon: <FaFacebook /> },
        { path: "/", label: "Instagram", icon: <FaInstagram /> },
        { path: "/", label: "Whatsapp", icon: <FaWhatsapp /> },
        { path: "/", label: "Youtube", icon: <FaYoutube /> },
    ]

    const moreInfo = [
        {label: "Jl. Besar Bandar Khalipah, Desa Bandar Khalipah, Kecamatan Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara, Indonesia."},
        {label: "banksampahbandarkhalipah@gmail.com"},
        {label: "+628098980898"},
    ]
    
  return (
    <section className='p-10 rounded-t-2xl bg-[#0B1D51]'>
        <div className='bg-white container mx-auto section-spacing rounded-3xl shadow-2xl p-10 justify-between'>
            <div className='grid md:grid-cols-2 md:gap-5'>
                <div className='flex'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>LOGO</h1>
                        <p className=''>Ayo gabung bersama kami, kumpulkan sampah dan jaga lingkungan.</p>
                    </div>
                    <div className='space-y-4'>
                        <h2>Sosial Media</h2>
                        <ul className='space-y-4'>
                            {footItem.map((item) => (
                                <Link 
                                key={item.id} 
                                to={item.path} 
                                className='flex items-center space-x-2'>
                                    <span className='text-2xl'>{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='space-y-4'>
                    <h2>Kontak</h2>
                    <ul className='space-y-2'>
                        {moreInfo.map((item) => (
                            <li>{item.label}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <hr className="border-t border-gray-300 mt-18 mb-6" />
                <p className='text-center'>Copyright &copy; 2025 Bank Sampah Bandar Khalipah</p>
            </div>
        </div>

    </section>
  )
}

export default Footer