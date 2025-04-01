import { PetGallery } from "../components/pet-gallery";
import { PetInfo } from "../components/pet-info";

interface Props {
  petId: string;
}

export const PetDetailsSection = ({ petId }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        {/* Galeria de fotos */}
        <div className="md:w-1/2">
          <PetGallery petId={petId} />
        </div>

        {/* Informações do pet */}
        <div className="md:w-1/2 p-8">
          <PetInfo petId={petId} />
        </div>
      </div>
    </div>
  );
};
