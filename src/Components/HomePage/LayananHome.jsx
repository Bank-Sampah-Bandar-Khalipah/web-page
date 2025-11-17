import React from "react";
import { FaRecycle } from "react-icons/fa";
import { FaTrashCan, FaPeopleGroup } from "react-icons/fa6";
import Title from "../Ui/Title";
import ServiceCard from "../Ui/ServiceCard";

const layanan = [
  {
    id: 1,
    name: "Pengumpulan Sampah yang Efisien",
    icon: <FaTrashCan className="w-6 h-6" />,
    desc: "Sampah tidak lagi dibuang sembarangan dan dikelola lebih baik.",
  },
  {
    id: 2,
    name: "Program Daur Ulang yang Inovatif",
    icon: <FaRecycle className="w-6 h-6" />,
    desc: "Menciptakan program daur ulang yang inovatif untuk mengurangi penumpukan sampah.",
  },
  {
    id: 3,
    name: "Edukasi Masyarakat tentang Pengelolaan Sampah",
    icon: <FaPeopleGroup className="w-6 h-6" />,
    desc: "Memberikan edukasi tentang cara mengelola sampah dengan baik.",
  },
];

const LayananHome = () => {
  return (
    <section className="container mx-auto section-spacing">
      <div className="space-y-6 md:space-y-10 lg:px-8 text-center">
        <Title>Program Bank Sampah</Title>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Dengan dukungan warga, bank sampah hadir dalam membantu menciptakan
          lingkungan yang sehat dan berkelanjutan. <br className="hidden md:block" />
          Melalui sistem tabungan sampah, warga dapat menabung sampah anorganik
          dan mendapatkan nilai ekonomis dari sampah yang mereka setor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layanan.map((item) => (
            <ServiceCard
              key={item.id}
              icon={item.icon}
              title={item.name}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayananHome;
