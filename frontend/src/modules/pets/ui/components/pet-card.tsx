import Image from "next/image";

interface PetsCardProps {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
}

export const PetCard = ({ pet }: { pet: PetsCardProps }) => {
  return (
    <div className="flex flex-col gap-4 w-full group border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300">
      <Image
        src={pet.imageUrl}
        alt={pet.name}
        width={300}
        height={200}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800">{pet.name}</h2>
        <p className="text-gray-700 text-sm">{pet.description}</p>
        <button className="mt-4 bg-amber-400 text-amber-800 py-2 rounded-lg shadow hover:bg-amber-500 transition duration-200">
          Adotar
        </button>
      </div>
    </div>
  );
};
