import React from 'react'
import Image from '../../assets/images/logo.jpg'
import Title from '../Ui/Title'


const ProfileAbout = () => {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='grid lg:grid-cols-2 items-center gap-10'>
            <div className='order-2 md:order-1 space-y-4'>
                <h4 className='font-bold'>Dari 5 keluarga menjadi satu dusun menuju satu desa</h4>
                <Title className='text-left'>About Bank Sampah Bandar Khalipah</Title>
                <p className='text-justify'>
                    Bank Sampah Bandar Khalipah adalah sebuah inisiatif masyarakat di Kecamatan Percut Sei Tuan yang bertujuan untuk mengurangi jumlah sampah yang mencemari lingkungan dengan cara yang produktif dan berkelanjutan. Melalui sistem tabungan sampah, warga dapat menabung sampah anorganik dan mendapatkan nilai ekonomis dari sampah yang mereka setor.<br />
                    Kami percaya bahwa perubahan dimulai dari langkah kecil. Dengan mengedukasi masyarakat tentang pentingnya memilah dan mendaur ulang sampah, kami berharap dapat menciptakan lingkungan yang lebih bersih dan sehat bagi generasi mendatang. Kegiatan kami mencakup sosialisasi, pelatihan pengelolaan sampah, serta kolaborasi dengan sekolah dan komunitas lokal.<br />
                    Bergabunglah bersama kami dalam gerakan peduli lingkungan ini. Setor sampah, rawat bumi, dan ciptakan nilai untuk masa depan yang lebih baik.
                </p>
            </div>
            <div className='order-1 md:order-2'>
                <img src={Image} alt="sampah" className='w-full h-[40vh] md:h-[80vh] object-cover' />
            </div>
        </div>
    </section>
  )
}

export default ProfileAbout