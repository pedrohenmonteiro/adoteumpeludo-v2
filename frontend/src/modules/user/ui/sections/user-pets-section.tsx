"use client";

import { PetCard } from "@/modules/pets/ui/components/pet-card";

interface UserPetsSectionProps {
  username: string;
}

export const UserPetsSection = ({}: UserPetsSectionProps) => {
  const userPets = [
    {
      id: 1,
      imageUrl:
        "https://www.direcional.com.br/wp-content/uploads/2022/08/cachorro-para-apartamento.jpg",
      name: "Rex",
      description: "Cachorro brincalhão de 2 anos",
    },
    {
      id: 2,
      imageUrl:
        "https://www.direcional.com.br/wp-content/uploads/2022/08/cachorro-para-apartamento.jpg",
      name: "Rex",
      description: "Cachorro brincalhão de 2 anos",
    },
    {
      id: 3,
      imageUrl:
        "https://www.direcional.com.br/wp-content/uploads/2022/08/cachorro-para-apartamento.jpg",
      name: "Rex",
      description: "Cachorro brincalhão de 2 anos",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-black mb-4">Pets para adoção</h2>
      <div className="gap-4 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 [@media(min-width:1600px)]:grid-cols-5">
        {userPets.map((pet) => (
          <div key={pet.id}>
            <PetCard pet={pet} />
          </div>
        ))}
      </div>
    </div>
  );
};
