// Tambahan: import useNavigate dari react-router-dom
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataBlog from "../../Data/DataBlog";
import { getFirstSentence } from "../Utils/GetFirstSentence"; // tambahkan ini

const ITEMS_PER_PAGE = 6;

const KegiatanCard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate(); // inisialisasi navigate

  const filteredData =
    activeTab === "all"
      ? dataBlog
      : dataBlog.filter((item) => item.kategori === activeTab);

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
          {["all", "sosialisasi", "edukasi"].map((type) => (
            <li key={type}>
              <button
                onClick={() => {
                  setActiveTab(type);
                  setCurrentPage(1);
                }}
                className={`p-4 rounded-full font-semibold transition hover:underline ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
        {displayedData.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/detail-kegiatan/${item.id}`)}
            className="text-lg space-y-4 rounded-md shadow-md cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={item.gambar}
              alt={item.name}
              className="rounded-md h-60 w-full object-cover"
            />
            <p className="font-semibold px-4">{item.name}</p>
            <p className="text-base/loose opacity-50 px-4 py-2">
              {getFirstSentence(item.desc)}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        <button
          className="text-primary text-4xl"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-2 font-semibold ${
              currentPage === page
                ? "text-primary border-b-3 border-primary"
                : "text-black"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          className="text-primary text-4xl"
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
