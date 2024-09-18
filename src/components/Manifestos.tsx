import React from "react";
import ManifestosCard from "./ManifestosCard";

const Manifestos: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8" id="Manifestos">
      <h5 className="text-center text-black font-bold"><b>Manifestos</b></h5>
      <h2 className="text-center text-red-700 font-bold mb-8">Find and study each candidates manifesto</h2>
      <div className="flex justify-center gap-8">
        {/* Card for Anura */}
        <ManifestosCard  description={"Anura Kumara Dissanayake is a Sri Lankan politician known for advocating social justice, economic reform, and anti-corruption through the JVP."} name="npp"pdfLink="https://drive.google.com/file/d/1O2trSbaFZAlNAjo96fs9fzhBcNrU_5gT/view?usp=sharing" />

        {/* Card for Sajith */}
        <ManifestosCard  description={"Sajith Premadasa is a Sri Lankan politician, leader of the SJB, advocating for social welfare, youth empowerment, and infrastructure development."} name="sjb" pdfLink="https://drive.google.com/file/d/1Fz845fYxwCOoE_nv9yqiEqhFQngaCLNw/view?usp=sharing"/>

        {/* Card for Ranil */}
        <ManifestosCard  description={"Ranil Wickremesinghe is a veteran Sri Lankan politician, former Prime Minister, and leader of the UNP, focusing on economic development.         "} name="rw" pdfLink="https://drive.google.com/file/d/1Jnb4aIXfV9PQm5PK3q6Xysnb4Y-0UIqr/view?usp=sharing"/>

        {/* Card for Namal */}
        <ManifestosCard description={"Namal Rajapaksa is a Sri Lankan politician, son of former President Mahinda Rajapaksa, serving as a member of parliament since 2010.              "} name="np"  pdfLink="https://drive.google.com/file/d/1matW4nvkpUOyX9xOAWSRLo1WhtmvCCx9/view?usp=sharing"/>
      </div>
    </div>
  );
};

export default Manifestos;
