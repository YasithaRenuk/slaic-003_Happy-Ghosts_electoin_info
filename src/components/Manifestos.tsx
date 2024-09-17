import React from "react";
import ManifestosCard from "./ManifestosCard";

const Manifestos: React.FC = () => {
  const description =
    "Majority of people are about to give their chance for this guy wow patta patat pata elama gemmac thawa monahari methanta danna one";

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8" id="Manifestos">
      <h5 className="text-center text-black font-bold">Manifestos</h5>
      <h2 className="text-center text-red-700 font-bold mb-8">Find and study each candidates manifesto</h2>
      <div className="flex justify-center gap-8">
        {/* Card for Anura */}
        <ManifestosCard  description={description} name="npp"pdfLink="https://drive.google.com/file/d/1O2trSbaFZAlNAjo96fs9fzhBcNrU_5gT/view?usp=sharing" />

        {/* Card for Sajith */}
        <ManifestosCard  description={description} name="sjb" pdfLink="https://drive.google.com/file/d/1Fz845fYxwCOoE_nv9yqiEqhFQngaCLNw/view?usp=sharing"/>

        {/* Card for Ranil */}
        <ManifestosCard  description={description} name="rw" pdfLink="https://drive.google.com/file/d/1Jnb4aIXfV9PQm5PK3q6Xysnb4Y-0UIqr/view?usp=sharing"/>

        {/* Card for Namal */}
        <ManifestosCard description={description} name="np"  pdfLink="https://drive.google.com/file/d/1matW4nvkpUOyX9xOAWSRLo1WhtmvCCx9/view?usp=sharing"/>
      </div>
    </div>
  );
};

export default Manifestos;
