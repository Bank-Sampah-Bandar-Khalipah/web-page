import { useState } from "react";

import kumpulankegiatan from '../../assets/images/manfaatpage/bandarkhalipah.webp';
import kumpulankegiatan2 from '../../assets/images/manfaatpage/bandarkhalipah2.webp';
import kumpulankegiatan3 from '../../assets/images/manfaatpage/bandarkhalipah3.webp';
import kumpulankegiatan4 from '../../assets/images/manfaatpage/bandarkhalipah4.webp';
import kumpulankegiatan5 from '../../assets/images/kegiatan1.webp';
import kumpulankegiatan6 from '../../assets/images/kegiatan2.webp';
import kumpulankegiatan7 from '../../assets/images/kegiatan3.webp';
import kumpulankegiatan8 from '../../assets/images/ketuaRT.webp';

const kegiatan = [
  {
    id: 1,
    name: "PROGRAM AKSI EDUKASI MASYARAKAT",
    gambar: kumpulankegiatan,
    desc: "Kegiatan ini merupakan bagian dari program pengumpulan sampah rumah tangga secara langsung dari rumah ke rumah.",
    kategori: "edukasi",
  },
  {
    id: 2,
    name: "SOSIALISASI PENGABDIAN MASYARAKAT DESA BINAAN UNIVERSITAS SUMATERA UTARA 2025",
    gambar: kumpulankegiatan2,
    desc: "Kami melakukan sosialisasi guna memberikan edukasi kepada masyarakat sekitar mengenai program kami.",
    kategori: "sosialisasi",
  },
  {
    id: 3,
    name: "EDUKASI LINGKUNGAN UNTUK ANAK DAN REMAJA",
    gambar: kumpulankegiatan3,
    desc: "Kegiatan ini ditujukan untuk memberikan edukasi kepada anak-anak dan remaja mengenai pentingnya mengelola sampah sejak dini.",
    kategori: "edukasi",
  },
  {
    id: 4,
    name: "DISKUSI DAN RAPAT KOORDINASI PENGELOLAAN SAMPAH BERBASIS KOMUNITAS",
    gambar: kumpulankegiatan4,
    desc: "Kegiatan ini merupakan forum diskusi yang melibatkan warga, tokoh masyarakat, dan tim pengelola bank sampah dalam merancang strategi pengelolaan sampah secara kolektif.",
    kategori: "edukasi",
  },
  {
    id: 5,
    name: "SOSIALISASI DAN KATA SAMBUTAN OLEH PAK ASRON",
    gambar: kumpulankegiatan5,
    desc: "Kegiatan ini dilaksanakan di ruang terbuka dengan melibatkan warga sekitar dalam diskusi interaktif.",
    kategori: "sosialisasi",
  },
  {
    id: 6,
    name: "RAPAT KOORDINASI INTERNAL BERSAMA TOKOH DAN WARGA",
    gambar: kumpulankegiatan6,
    desc: "Rapat ini digelar secara informal bersama tokoh masyarakat dan perwakilan warga di lingkungan sekitar.",
    kategori: "edukasi",
  },
  {
    id: 7,
    name: "EDUKASI ANAK TENTANG PENGELOLAAN SAMPAH DAN TEKNOLOGI SEJAK DINI",
    gambar: kumpulankegiatan7,
    desc: "Kegiatan ini bertujuan untuk mengedukasi keluarga, khususnya anak-anak, tentang pentingnya menjaga kebersihan dan mengelola sampah dengan baik. Dengan pendekatan yang santai dan penuh interaksi pada anak-anak.",
    kategori: "edukasi",
  },
  {
    id: 8,
    name: "SOSIALISASI DAN KATA SAMBUTAN OLEH KETUA RT",
    gambar: kumpulankegiatan8,
    desc: "Dalam sambutannya, Ketua RT menyampaikan pentingnya kolaborasi antara warga, tokoh masyarakat, dan tim pengelola bank sampah dalam menjaga kebersihan lingkungan.",
    kategori: "sosialisasi",
  },
];

const ITEMS_PER_PAGE = 6;

const KegiatanCard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData =
    activeTab === "all"
      ? kegiatan
      : kegiatan.filter((item) => item.kategori === activeTab);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const displayedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="container mx-auto px-7 mt-10 mb-20">
      {/* Filter Tabs */}
      <div className="flex items-center">
        <ul className="flex items-center gap-3 md:gap-6">
          {["all", "sosialisasi", "edukasi"].map((type) => (
            <li key={type}>
              <button
                onClick={() => {
                  setActiveTab(type);
                  setCurrentPage(1);
                }}
                className={`p-4 rounded-full font-semibold transition ${
                  activeTab === type ? "bg-[#DFE9F8]" : ""
                }`}
              >
                {type === "all"
                  ? "Lihat Semua"
                  : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-15 md:px-10 gap-10">
        {displayedData.map((item) => (
          <div key={item.id} className="text-lg space-y-4 rounded-md shadow-md">
            <img
              src={item.gambar}
              alt={item.name}
              className="rounded-md h-60 w-600 object-cover"
            />
            <p className="font-semibold px-4">{item.name}</p>
            <p className="text-base/loose opacity-50 px-4 py-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        <button
          className="text-gray-400 text-4xl"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-2 font-semibold text-2xl ${
              currentPage === page
                ? "text-blue-800 border-b-3 border-blue-800"
                : "text-black"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          className="text-blue-800 text-4xl"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default KegiatanCard;
