import React from "react";
import dataManfaat from "../../Data/DataManfaat";
import Card from "../Ui/Card";
import Title from "../Ui/Title";

const ManfaatHome = () => {
  return (
    <section className="container mx-auto section-spacing">
      <div className="text-center space-y-5 md:space-y-10">
        <Title>
          Manfaat Bank Sampah untuk <br className="hidden md:block" />
          Masyarakat
        </Title>
        <p className="text-gray-600">
          Bank sampah berfungsi sebagai solusi dalam pengelolaan sampah. Dengan{" "}
          <br className="hidden md:block" />
          mengedukasi masyarakat, kita dapat mengurangi dampak negatif sampah
          terhadap lingkungan.
        </p>

        {/* Grid Section */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            gap-8 mt-8
          "
        >
          {dataManfaat.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.desc}
              className="text-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManfaatHome;
