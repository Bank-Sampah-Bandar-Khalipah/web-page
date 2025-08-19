import React from "react";

function Card({ image, title, description, onClick, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-white hover:shadow-lg transition ${className}`}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      )}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
}

export default Card;
