import { FaRecycle } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
const layanan = [
    {
        id:1,
        name: "Pengumpulan Sampah Rumah Tangga",
        icon: <FaTrashCan />,
        desc: "Kami menyediakan layanan pengumpulan sampah dari rumah ke rumah."
    },
    {
        id:2,
        name: "Program Daur Ulang yang Inovatif",
        icon: <FaRecycle />,
        desc: "Ikuti program daur ulang kami untuk mengubah sampah menjadi barang berguna."
    },
    {
        id:3,
        name: "Edukasi Masyarakat tentang Pengelolaan Sampah",
        icon: <FaPeopleGroup />,
        desc: "Kami memberikan edukasi tentang cara mengelola sampah dengan baik."
    },
]

const LayananHome = () => {
  return (
    <section className='container mx-auto'>
        <div className='section-spacing space-y-10 px-16'>
            <div className='w-1/2 space-y-6'>
                <h1 className='text-4xl font-semibold'>
                    Layanan terbaik untuk pengelolaan sampah
                </h1>
                <p>
                    Kami menawarkan layanan pengumpulan sampah rumah tangga yang efisien dan ramah lingkungan. Bergabunglah dengan program daur ulang kami untuk mengurangi limbah dan menjaga kebersihan lingkungan
                </p>
            </div>
            <div className='grid grid-cols-3'>
                {layanan.map((item) => (
                    <div key={item.id} className='text-2xl space-y-4'>
                        {item.icon}
                        <h2 className='font-semibold'>{item.name}</h2>
                        <p className='text-base'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default LayananHome