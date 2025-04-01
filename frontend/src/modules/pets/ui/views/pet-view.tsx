import { PetDetailsSection } from "../sections/pet-details-section";

interface Props {
  petId: string;
}

export const PetView = ({ petId }: Props) => {
  petId = "123";

  return (
    <div className="flex flex-col max-w-[1600px] mx-auto pt-2.5 px-4">
      <PetDetailsSection petId={petId} />
    </div>
  );
};
