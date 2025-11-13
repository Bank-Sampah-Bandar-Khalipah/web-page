import React from "react";
import { FaUsers, FaBuilding, FaTools } from "react-icons/fa";
import ServiceCard from "../Ui/ServiceCard";

const why = [
  {
    id: 1,
    icon: <FaUsers className="w-6 h-6" />,
    point: "Volume yang Bertambah",
    desc: "Pengumpulan sampah kami telah mencapai 220kg+ dan terus bertambah, melebihi kapasitas pengolahan saat ini.",
  },
  {
    id: 2,
    icon: <FaTools className="w-6 h-6" />,
    point: "Keahlian Teknis",
    desc: "Kami membutuhkan pengetahuan khusus dalam teknologi daur ulang canggih dan praktik berkelanjutan.",
  },
  {
    id: 3,
    icon: <FaBuilding className="w-6 h-6" />,
    point: "Dampak Komunitas",
    desc: "Bersama-sama, kita dapat menciptakan model yang dapat ditiru oleh lingkungan lain di seluruh dunia.",
  },
];

function WhyPartner() {
  return (
    <section className="section-spacing container mx-auto">
      {/* Heading */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Mengapa Kami Membutuhkan Kemitraan Anda
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Sebagai organisasi sukarela berbasis komunitas, kami telah membuktikan
          komitmen tetapi membutuhkan keahlian dan sumber daya eksternal untuk
          meningkatkan dampak dan melayani komunitas yang berkembang.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {why.map((item) => (
          <ServiceCard
            key={item.id}
            icon={item.icon}
            title={item.point}
            description={item.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyPartner;
