import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dataBlog from "../../Data/DataBlog";
import { getFirstSentence } from "../Utils/GetFirstSentence";

const ITEMS_PER_PAGE = 6;

const tabs = [
  { key: "all", label: "Semua" },
  { key: "sosialisasi", label: "Sosialisasi" },
  { key: "edukasi", label: "Edukasi" },
];

const KegiatanCard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Filter data berdasarkan kategori
  const filteredData =
    activeTab === "all"
      ? dataBlog
      : dataBlog.filter(
          (item) => item.kategori?.toLowerCase() === activeTab.toLowerCase()
        );

  const totalPages = Math.max(1, Math.ceil(filteredData.length / ITEMS_PER_PAGE));

  // Reset halaman kalau tab berubah
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [activeTab, filteredData.length, totalPages]);

  const displayedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="container mx-auto py-8 px-4 md:px-12">
      {/* Tabs Filter */}
      <div className="flex justify-center mb-6">
        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-5 bg-[#F7F9FC] p-3 rounded-full">
          {tabs.map((tab) => (
            <li key={tab.key}>
              <button
                onClick={() => {
                  setActiveTab(tab.key);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2 md:px-7 md:py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-[#0A2050] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-[#E9EFFD]"
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedData.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-12">
            Belum ada konten pada kategori ini.
          </div>
        ) : (
          displayedData.map((item) => {
            const firstText =
              item.konten.find((kontenItem) => kontenItem.type === "text")
                ?.content || "";
            const firstSentence = getFirstSentence(firstText);

            return (
              <div
                key={item.id}
                onClick={() => navigate(`/detail-kegiatan/${item.id}`)}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer flex flex-col"
              >
                {/* Gambar */}
                <div className="relative">
                  <img
                    src={
                      item.konten.find((k) => k.type === "image")?.content ||
                      "/default.jpg"
                    }
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#2F6FED] text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    {item.kategori || "Kategori"}
                  </span>
                </div>

                {/* Konten */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg text-[#0A2050] mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {firstSentence}
                  </p>
                  <span className="text-[#0A2050] font-semibold text-sm mt-auto flex items-center gap-1 hover:underline">
                    Baca Selengkapnya →
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-12">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-6 py-2 rounded-full border border-[#E0E3EB] text-[#0A2050] font-medium ${
            currentPage === 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#E9EFFD]"
          }`}
        >
          Sebelumnya
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition ${
              currentPage === page
                ? "bg-[#0A2050] text-white"
                : "border border-[#E0E3EB] text-[#0A2050] hover:bg-[#E9EFFD]"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-6 py-2 rounded-full border border-[#E0E3EB] text-[#0A2050] font-medium ${
            currentPage === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-[#E9EFFD]"
          }`}
        >
          Selanjutnya
        </button>
      </div>
    </section>
  );
};

export default KegiatanCard;
