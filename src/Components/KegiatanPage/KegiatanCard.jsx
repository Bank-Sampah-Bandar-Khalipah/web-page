import { useState } from "react";

import kumpulankegiatan from '../../assets/images/manfaatpage/bandarkhalipah.webp';
import kumpulankegiatan2 from '../../assets/images/manfaatpage/bandarkhalipah2.webp';
import kumpulankegiatan3 from '../../assets/images/manfaatpage/bandarkhalipah3.webp';
import kumpulankegiatan4 from '../../assets/images/manfaatpage/bandarkhalipah4.webp';

const kegiatan = [
  {
    id: 1,
    name: "PROGRAM AKSI EDUKASI MASYARAKAT",
    gambar: kumpulankegiatan,
    desc: "Kegiatan ini merupakan bagian dari program pengumpulan sampah rumah tangga secara langsung dari rumah ke rumah.",
    kategori: "pelatihan",
  },
  {
    id: 2,
    name: "SOSIALISASI PENGABDIAN MASYARAKAT DESA BINAAN UNIVERSITAS SUMATERA UTARA 2025",
    gambar: kumpulankegiatan2,
    desc: "Kami melakukan sosialisasi guna memberikan edukasi kepada masyarakat sekitar mengenai program kami.",
    kategori: "pelatihan",
  },
  {
    id: 3,
    name: "EDUKASI LINGKUNGAN UNTUK ANAK dan REMAJA",
    gambar: kumpulankegiatan3,
    desc: "Kegiatan ini ditujukan untuk memberikan edukasi kepada anak-anak dan remaja mengenai pentingnya mengelola sampah sejak dini.",
    kategori: "webinar",
  },
  {
    id: 4,
    name: "DISKUSI dan RAPAT KOORDINASI PENGELOLAAN SAMPAH BERBASIS KOMUNITAS",
    gambar: kumpulankegiatan4,
    desc: "Kegiatan ini merupakan forum diskusi yang melibatkan warga, tokoh masyarakat, dan tim pengelola bank sampah dalam merancang strategi pengelolaan sampah secara kolektif.",
    kategori: "webinar",
  },
];

const ITEMS_PER_PAGE = 4;

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
    <section className="container mx-auto section-spacing">
      {/* Filter Tabs */}
      <div className="flex items-center">
        <ul className="flex items-center gap-3 md:gap-6">
          {["all", "pelatihan", "webinar"].map((type) => (
            <li key={type}>
              <button
                onClick={() => {
                  setActiveTab(type);
                  setCurrentPage(1); // Reset ke page 1 saat tab diganti
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
              alt="Kegiatan"
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

        {/* Page Numbers */}
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
