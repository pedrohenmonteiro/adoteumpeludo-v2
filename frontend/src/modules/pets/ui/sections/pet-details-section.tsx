import { PetGallery } from "../components/pet-gallery";
import { PetInfo } from "../components/pet-info";

interface Props {
  petId: string;
}

export const PetDetailsSection = ({ petId }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex gap-8">
        <div className="md:w-1/2 lg:w-3/5 mb-8 md:mb-0">
          <PetGallery petId={petId} />
        </div>

        <div className="md:w-1/2 lg:w-2/5">
          <PetInfo petId={petId} />
        </div>
      </div>
    </div>
  );
};
