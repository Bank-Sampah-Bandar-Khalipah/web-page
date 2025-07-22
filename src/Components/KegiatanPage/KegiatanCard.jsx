import kumpulankegiatan from '../../assets/images/sampah.webp'

const kegiatan = [
    {
        id:1,
        name: "Headline",
        gambar: kumpulankegiatan,
        desc: "Kami menyediakan layanan pengumpulan sampah dari rumah ke rumah."
    },
    {
        id:2,
        name: "Headline",
        gambar: kumpulankegiatan,
        desc: "Ikuti program daur ulang kami untuk mengubah sampah menjadi barang berguna."
    },
    {
        id:3,
        name: "Headline",
        gambar: kumpulankegiatan,
        desc: "Kami memberikan edukasi tentang cara mengelola sampah dengan baik."
    },
    {
        id:1,
        name: "Headline",
        gambar: kumpulankegiatan,
        desc: "Kami menyediakan layanan pengumpulan sampah dari rumah ke rumah."
    },
    {
        id:2,
        name: "Headline",
        gambar: kumpulankegiatan,
        desc: "Ikuti program daur ulang kami untuk mengubah sampah menjadi barang berguna."
    },
    {
        id:3,
        name: "Headline",
        gambar: kumpulankegiatan,
        desc: "Kami memberikan edukasi tentang cara mengelola sampah dengan baik."
    },
]

const KegiatanCard = () => {
  return (
    <section className="container mx-auto px-7 mt-10">
        <div className="flex items-center px-7">
            <ul className="flex items-center gap-6">
                <li className="bg-[#DFE9F8] p-4 rounded-full"><a href="" className="font-semibold">Lihat Semua</a></li>
                <li><a href="" className="font-semibold">Pelatihan</a></li>
                <li><a href="" className="font-semibold">Webinar</a></li>
            </ul>
        </div>

        <div className="grid grid-cols-3 mt-20 px-10 gap-10">
            {kegiatan.map((item) => (
                <div key={item.id} className='text-2xl space-y-4 rounded-md shadow-md'>
                    <img src={item.gambar} alt="Kegiatan Image" className='rounded-md'/>
                        <p className='font-semibold px-4'>{item.name}</p>
                        <p className='text-base/loose opacity-50 px-4'>{item.desc}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default KegiatanCard