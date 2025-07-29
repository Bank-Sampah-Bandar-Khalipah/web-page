import { FaRecycle } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
const layanan = [
    {
        id:1,
        name: "Pengumpulan Sampah yang Efisien",
        icon: <FaTrashCan />,
        desc: "Sampah tidak lagi di buang sembarangan dan dikelola lebih baik."
    },
    {
        id:2,
        name: "Program Daur Ulang yang Inovatif",
        icon: <FaRecycle />,
        desc: "Menciptakan program daur ulang yang inovatif untuk mengurangi penumpukan sampah."
    },
    {
        id:3,
        name: "Edukasi Masyarakat tentang Pengelolaan Sampah",
        icon: <FaPeopleGroup />,
        desc: "Memberikan edukasi tentang cara mengelola sampah dengan baik."
    },
]

const LayananHome = () => {
  return (
    <section className='container mx-auto section-spacing'>
        <div className='space-y-10 lg:px-8 text-center'>
            <div className='space-y-6'>
                <h1 className='text-4xl font-bold'>
                    Program Bank Sampah
                </h1>
                <p>
                    Dengan dukungan warga, bank sampah hadir dalam membantu untuk lingkungan yang sehat dan berkelanjutan. <br />Melalui sistem tabungan sampah, warga dapat menabung sampah anorganik dan mendapatkan nilai ekonomis <br />dari sampah yang mereka setor. 
                </p>
            </div>
            <div className='grid md:grid-cols-3 gap-5 md:gap-3'>
                {layanan.map((item) => (
                    <div key={item.id} className='text-2xl space-y-2 md:space-y-4'>
                        <p className="flex justify-center">{item.icon}</p>
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