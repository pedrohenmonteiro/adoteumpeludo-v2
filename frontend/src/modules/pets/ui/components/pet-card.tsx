import Image from "next/image";
import Link from "next/link";

interface PetsCardProps {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
}

export const PetCard = ({ pet }: { pet: PetsCardProps }) => {
  return (
    <Link href={`/pets/${pet.id}`}>
      <div className="flex flex-col w-full group border bg-amber-50 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300">
        <Image
          src={pet.imageUrl}
          alt={pet.name}
          width={300}
          height={200}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-bold text-purple-950">{pet.name}</h2>
          <p className="text-gray-700 text-sm">{pet.description}</p>
        </div>
      </div>
    </Link>
  );
};
