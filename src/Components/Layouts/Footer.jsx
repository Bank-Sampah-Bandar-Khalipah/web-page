import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "/logo1.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0B1D51] text-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Deskripsi */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-md">
              <img
                src={logo}
                alt="Bank Sampah BK"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-bold text-lg">Bank Sampah Bohai</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Bersama kelola sampah, ciptakan lingkungan bersih untuk generasi
            masa depan.
          </p>
        </div>

        {/* Navigasi Cepat */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Navigasi Cepat</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-blue-300 transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-300 transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/partner"
                className="hover:text-blue-300 transition-colors"
              >
                Kerjasama
              </Link>
            </li>
            <li>
              <Link
                to="/edu"
                className="hover:text-blue-300 transition-colors"
              >
                Edukasi
              </Link>
            </li>
            <li>
              <Link to="/kegiatan" className="hover:text-blue-300 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Kontak</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FiMapPin className="flex-shrink-0 text-white text-lg mt-0.5" />
              <span>
                Jl. Besar Bandar Khalipah, Desa Bandar Khalipah, Percut Sei Tuan, Deli Serdang
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="flex-shrink-0 text-white text-lg" />
              <span>+62 853-6181-6750 (Sony)</span>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="flex-shrink-0 text-white text-lg" />
              <span>banksampahbandarkhalipah@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Ikuti Kami */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Ikuti Kami</h3>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-blue-500 transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-pink-500 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-sky-400 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 text-center py-6 text-sm text-gray-300">
        © {new Date().getFullYear()} Bank Sampah Bandar Khalipah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
