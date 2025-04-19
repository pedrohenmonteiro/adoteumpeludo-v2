"use client";

import { PetCard } from "@/modules/pets/ui/components/pet-card";

const pets = [
  {
    id: 1,
    imageUrl:
      "https://img.nsctotal.com.br/wp-content/uploads/2023/10/Pets-Banco-de-imagens-1.jpg",
    name: "Fido",
    description: "Um cachorro amigável e brincalhão.",
  },
  {
    id: 2,
    imageUrl:
      "https://img.nsctotal.com.br/wp-content/uploads/2023/10/Pets-Banco-de-imagens-1.jpg",
    name: "Miau",
    description: "Um gato curioso que adora explorar.",
  },
  {
    id: 3,
    imageUrl:
      "https://img.nsctotal.com.br/wp-content/uploads/2023/10/Pets-Banco-de-imagens-1.jpg",
    name: "Pingo",
    description: "Um coelho fofo e adorável.",
  },
  {
    id: 4,
    imageUrl:
      "https://img.nsctotal.com.br/wp-content/uploads/2023/10/Pets-Banco-de-imagens-1.jpg",
    name: "Lulu",
    description: "Uma cadela leal e protetora.",
  },
  {
    id: 5,
    imageUrl:
      "https://img.nsctotal.com.br/wp-content/uploads/2023/10/Pets-Banco-de-imagens-1.jpg",
    name: "Nina",
    description: "Uma gatinha carinhosa e tranquila.",
  },
  {
    id: 6,
    imageUrl:
      "https://img.nsctotal.com.br/wp-content/uploads/2023/10/Pets-Banco-de-imagens-1.jpg",
    name: "Bunny",
    description: "Um coelho brincalhão que ama cenouras.",
  },
];

export const HomePetSection = () => {
  return (
    <div>
      <div className="gap-4 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 [@media(min-width:1600px)]:grid-cols-5 mt-6">
        {pets.map((pet) => (
          <div key={pet.id}>
            <PetCard pet={pet} />
          </div>
        ))}
      </div>
    </div>
  );
};
