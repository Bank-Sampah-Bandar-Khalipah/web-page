import React from 'react'
import Button from "../Ui/Button"
import { LuHandshake } from "react-icons/lu";



export default function HeroPartner() {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='flex flex-col items-center mt-20 space-y-5'>
            <p className='bg-gradient-to-r from-[#0B1D51] to-[#1E3A8A] rounded-2xl font-semibold px-3 py-1 text-white'>Kemitraan Komunitas</p>
            <h1 className='text-center text-4xl md:text-6xl font-bold'>Membangun Masa Depan <br />Berkelanjutan Bersama</h1>
            <p className='md:text-xl text-center'>Inisiatif daur ulang berbasis komunitas yang mengubah lingkungan kita <br />menjadi lingkungan berkelanjutan dan bebas sampah melalui aksi sukarela <br />dan inovasi.</p>
            <a
              href="https://wa.me/6285361816750?text=Halo%20saya%20ingin%20bermitra%20dengan%20Bank%20Sampah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className='gap-2'>
                <LuHandshake />
                Bermitra Dengan Kami
              </Button>
            </a>

        </div>
    </section>
  )
}
