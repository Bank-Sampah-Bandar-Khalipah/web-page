import React from "react";

const Card = ({ image, title, description, onClick, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl overflow-hidden border border-gray-200
        shadow-md hover:shadow-lg transition-all duration-500 ease-in-out
        cursor-pointer ${className}
      `}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      )}
      <div className="p-6 space-y-3">
        <h3 className="text-xl text-start font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="text-gray-600 text-justify leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
