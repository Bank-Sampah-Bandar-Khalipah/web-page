import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '/logo1.svg'

const Footer = () => {
  const footItem = [
    { id: 1, path: "https://web.facebook.com/?locale=id_ID&_rdc=1&_rdr#", label: "Facebook", icon: <FaFacebook /> },
    { id: 2, path: "/", label: "Instagram", icon: <FaInstagram /> },
    { id: 3, path: "https://wa.me/6285361816750?text=Halo%20saya%20ingin%20bertanya%20tentang%20Bank%20Sampah", label: "Whatsapp", icon: <FaWhatsapp /> },
    { id: 4, path: "https://youtu.be/r6X5SRp2hvA?si=7fR-nCJC4euDwiK-", label: "Youtube", icon: <FaYoutube /> },
  ]

  const moreInfo = [
    { id: 1, label: "Jl. Besar Bandar Khalipah, Desa Bandar Khalipah, Kecamatan Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara, Indonesia." },
    { id: 2, label: "banksampahbandarkhalipah@gmail.com" },
    { id: 3, label: "(+62) 853-6181-6750 (Sony)" },
  ]
  
  return (
    <section className='p-5 md:p-10 rounded-t-2xl bg-[#0B1D51]'>
        <div className='bg-white container mx-auto section-spacing rounded-3xl shadow-2xl p-10'>

            {/* Konten Utama */}
            <div className='flex flex-col md:flex-row gap-6'>
            
            {/* Logo & Deskripsi */}
            <div className='space-y-4'>
                <img src={logo} alt="Logo Bank Sampah" className='w-20'/>
                <p>Ayo gabung bersama kami, kumpulkan sampah dan jaga lingkungan.</p>
            </div>
            
            {/* Sosial Media */}
            <div className='space-y-4'>
                <h2 className='font-semibold text-lg'>Sosial Media</h2>
                <ul className='space-y-4'>
                {footItem.map((item) => (
                    <li key={item.id}>
                    <Link 
                        to={item.path} 
                        className='flex items-center space-x-2 transition'
                    >
                        <span className='text-2xl'>{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            
            {/* Kontak */}
            <div className='space-y-4'>
                <h2 className='font-semibold text-lg'>Kontak</h2>
                <ul className='space-y-2'>
                {moreInfo.map((item) => (
                    <li key={item.id}>{item.label}</li>
                ))}
                </ul>
            </div>
            </div>

            {/* Garis Pembatas & Copyright */}
            <div className='mt-8'>
            <hr className="border-t border-gray-300 mb-6" />
            <p className='text-center font-bold'>
                &copy; 2025 Bank Sampah Bandar Khalipah
            </p>
            </div>

        </div>
    </section>
  )
}

export default Footer
