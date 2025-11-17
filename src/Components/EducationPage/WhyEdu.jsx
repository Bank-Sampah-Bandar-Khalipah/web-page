import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image1 from "../../assets/images/bu-sony.webp";
import Image2 from "../../assets/images/proses-nimbang.webp";

const WhyEdu = () => {
  const educationSections = [
    {
      image: Image1,
      title: "Pentingnya Bank Sampah",
      description:
        "Bank sampah hadir sebagai solusi atas dua masalah utama: penumpukan sampah dan keterbatasan ekonomi warga. Melalui edukasi dan sistem yang teratur, masyarakat diajak melihat sampah sebagai aset, bukan limbah, sehingga tercipta kebiasaan baru yang mendukung lingkungan bersih dan peningkatan kesejahteraan.",
      points: [
        "Mengurangi penumpukan sampah di lingkungan sekitar.",
        "Memberikan nilai ekonomi dari sampah yang dipilah dan ditabung.",
        "Membangun kebiasaan baru yang mendukung lingkungan bersih dan sejahtera.",
      ],
    },
    {
      image: Image2,
      title: "Manfaat Edukasi Pengelolaan Sampah",
      description:
        "Edukasi pengelolaan sampah membantu masyarakat memahami pentingnya memilah, mengelola, dan mendaur ulang sampah. Dengan pemahaman yang baik, masyarakat dapat mengurangi dampak lingkungan dan meningkatkan kualitas hidup.",
      points: [
        "Menumbuhkan kesadaran lingkungan sejak dini.",
        "Meningkatkan kolaborasi antarwarga untuk pengelolaan sampah terpadu.",
        "Mendorong penerapan prinsip 3R (Reduce, Reuse, Recycle) di kehidupan sehari-hari.",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {educationSections.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10 max-w-6xl mx-auto`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-[1200ms] ease-in-out hover:scale-105"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <div
                className="
                  bg-white rounded-2xl shadow-lg p-8 
                  transition-all duration-700 ease-in-out 
                  hover:shadow-2xl hover:-translate-y-2 hover:border-l-8 hover:border-blue-600
                "
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Poin Penting:
                  </h4>
                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-blue-600 mt-1" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyEdu;
