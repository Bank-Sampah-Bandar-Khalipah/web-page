import React from "react";
import { FiMail } from "react-icons/fi";
import Button from "../Ui/Button";
import { LuHandshake } from "react-icons/lu";

const PartnerInvitation = () => {
  return (
    <section className="bg-gradient-to-b from-[#0B1D51] to-[#2563EB] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Icon */}
          <FiMail className="h-12 w-12 mx-auto mb-6 text-white" />

          {/* Title */}
          <h2 className="font-bold text-3xl md:text-4xl mb-6">
            Tertarik untuk Bermitra?
          </h2>

          {/* Description */}
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Sebagai tim sukarelawan dari desa kecil, kami membutuhkan dukungan,
            komitmen, dan kemitraan Anda untuk memperluas jaringan dan hasil kerja
            kami. Mari bersama-sama ciptakan dampak yang lebih besar bagi lingkungan
            dan masyarakat!
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/6285361816750?text=Halo%20saya%20ingin%20bermitra%20dengan%20Bank%20Sampah"
              target="_blank"
              rel="noopener noreferrer"
            >
                <Button bgColor="white" textColor="#0B1D51" hoverColor="#E2E8F0" transitionMs={700}>
                Hubungi Kami Sekarang
                </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerInvitation;
