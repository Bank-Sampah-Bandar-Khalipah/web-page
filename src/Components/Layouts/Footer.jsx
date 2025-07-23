import React from 'react'

const Footer = () => {

    const footItem = [
        {path: "/", label: "Tautan 1 informasi atau kontak lainnya"},
        {path: "/", label: "Tautan 2"},
        {path: "/", label: "Tautan 3"},
        {path: "/", label: "Tautan 4"},
    ]

    const moreInfo = [
        {label: "Jl. Dr. T. Mansur No. 9, Kampus Padang Bulan, Medan, 20155, Sumatera Utara"},
        {label: "banksamaphbandarkhalipah@gmail.com"},
        {label: "+628098980898"},
    ]
    
  return (
    <section className='p-10 rounded-t-2xl bg-[#DFE9F8]'>
        <div className='bg-white container mx-auto section-spacing rounded-3xl shadow-2xl p-10 justify-between'>
            <div className='md:flex md:gap-5 space-y-10'>
                <div className='space-y-2'>
                    <h1 className='text-2xl font-bold'>LOGO</h1>
                    <p className=''>Ayo gabung bersama kami, kumpulkan sampah dan jaga lingkungan.</p>
                </div>
                <div className='space-y-2'>
                    <h2>Kolom satu</h2>
                    <ul className='space-y-2'>
                        {footItem.map((item) => (
                            <li>{item.label}</li>
                        ))}
                    </ul>
                </div>
                <div className='space-y-2'>
                    <h2>Kolom dua</h2>
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