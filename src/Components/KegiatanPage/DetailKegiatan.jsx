import { useParams, useNavigate } from "react-router-dom";
import dataBlog from "../../Data/DataBlog";

const DetailKegiatan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const kegiatan = dataBlog.find((item) => item.id.toString() === id);

  if (!kegiatan) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold">Kegiatan tidak ditemukan</h1>
      </div>
    );
  }

  // Buat list berita selain yang sedang dibuka
  const otherNews = dataBlog.filter((item) => item.id.toString() !== id);

  return (
    <section className="container mx-auto section-spacing mt-15 grid lg:grid-cols-4 gap-10">
      {/* Konten Utama */}
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-bold mb-2">{kegiatan.name}</h1>

        {kegiatan.konten.map((item, index) => {
            if (item.type === "text") {
            return (
                <p key={index} className="text-lg leading-relaxed text-justify mb-4">
                {item.content}
                </p>
            );
            } else if (item.type === "image") {
            return (
                <img
                key={index}
                src={item.content}
                alt={`Gambar ${index + 1}`}
                className="w-full h-96 object-cover mb-6"
                />
            );
            }
            return null;
        })}
      </div>

      {/* Sidebar - Berita Terkini */}
      <aside className="lg:col-span-1 border-l pl-4">
        <h2 className="bg-[#0B1D51] text-white px-4 py-2 font-bold mb-4">Kegiatan Lainnya</h2>
        <ul className="space-y-4 text-sm">
          {otherNews.map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(`/detail-kegiatan/${item.id}`)}
              className="cursor-pointer hover:underline"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default DetailKegiatan;
