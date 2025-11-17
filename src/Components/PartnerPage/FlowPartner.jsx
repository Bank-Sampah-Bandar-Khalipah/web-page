import React from "react";

const steps = [
  {
    id: 1,
    title: "Konsultasi Awal",
    desc: "Hubungi kami untuk diskusi kebutuhan dan tujuan kerjasama Anda",
  },
  {
    id: 2,
    title: "Survei & Perencanaan",
    desc: "Tim kami akan melakukan survei lokasi dan merancang program yang sesuai",
  },
  {
    id: 3,
    title: "Penandatanganan MoU",
    desc: "Kesepakatan kerjasama resmi dan penetapan komitmen bersama",
  },
  {
    id: 4,
    title: "Implementasi Program",
    desc: "Pelaksanaan program dengan dukungan penuh dari tim kami",
  },
  {
    id: 5,
    title: "Monitoring & Evaluasi",
    desc: "Pemantauan berkala dan evaluasi untuk perbaikan berkelanjutan",
  },
];

function FlowPartner() {
  return (
    <section className="section-spacing container mx-auto">
      {/* Heading */}
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Alur Kerjasama
        </h1>
        <p className="text-gray-500">
          Proses mudah untuk memulai kemitraan
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-start gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-300"
          >
            {/* Number Circle */}
            <div className="flex-shrink-0 bg-gradient-to-br from-[#0B1D51] to-[#1E3A8A] text-white font-semibold w-10 h-10 rounded-full flex items-center justify-center">
              {step.id}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlowPartner;
