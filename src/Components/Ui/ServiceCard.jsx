import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all duration-300">
      <div className="flex justify-center md:justify-start mb-4">
        <div className="bg-gradient-to-br from-[#0B1D51] to-[#1E3A8A] p-3 rounded-xl text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
