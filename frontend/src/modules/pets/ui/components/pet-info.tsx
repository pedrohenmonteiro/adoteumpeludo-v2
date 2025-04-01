import { MapPin } from "lucide-react";

interface Props {
  petId: string;
}

export const PetInfo = (petId: Props) => {
  const petData = {
    petId,
    name: "Fido",
    age: "3 anos",
    breed: "Vira-lata",
    size: "Médio",
    gender: "Macho",
    description:
      "Um cachorro muito amigável e brincalhão. Adora crianças e outros animais. Está castrado e com todas as vacinas em dia.",
    location: "São Paulo, SP",
  };

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{petData.name}</h1>

      <div className="flex flex-wrap gap-4 mb-4">
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
          {petData.age}
        </span>
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
          {petData.breed}
        </span>
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
          {petData.size}
        </span>
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
          {petData.gender}
        </span>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Sobre</h2>
        <p className="text-gray-600">{petData.description}</p>
      </div>

      <div className="flex items-center text-gray-600">
        <span className="flex">
          <MapPin />
          {petData.location}
        </span>
      </div>
    </div>
  );
};
