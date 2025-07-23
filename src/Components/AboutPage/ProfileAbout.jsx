import React from 'react'
import Image from '../../assets/images/sampah.webp'

const ProfileAbout = () => {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='flex items-center gap-10'>
            <div className='space-y-4 w-1/2'>
                <h4 className='font-bold'>Menjaga Lingkungan, Membangun Masa Depan</h4>
                <h1 className='text-3xl font-bold'>About Bank Sampah Bandar Khalipah</h1>
                <p className='text-justify'>
                    Bank Sampah Bandar Khalipah adalah sebuah inisiatif masyarakat di Kecamatan Percut Sei Tuan yang bertujuan untuk mengurangi jumlah sampah yang mencemari lingkungan dengan cara yang produktif dan berkelanjutan. Melalui sistem tabungan sampah, warga dapat menabung sampah anorganik dan mendapatkan nilai ekonomis dari sampah yang mereka setor.<br />
                    Kami percaya bahwa perubahan dimulai dari langkah kecil. Dengan mengedukasi masyarakat tentang pentingnya memilah dan mendaur ulang sampah, kami berharap dapat menciptakan lingkungan yang lebih bersih dan sehat bagi generasi mendatang. Kegiatan kami mencakup sosialisasi, pelatihan pengelolaan sampah, serta kolaborasi dengan sekolah dan komunitas lokal.<br />
                    Bergabunglah bersama kami dalam gerakan peduli lingkungan ini. Setor sampah, rawat bumi, dan ciptakan nilai untuk masa depan yang lebih baik.
                </p>
            </div>
            <div className='w-1/2'>
                <img src={Image} alt="sampah" className='w-full h-[80vh] object-cover' />
            </div>
        </div>
    </section>
  )
}

export default ProfileAbout