import { PetDetailsSection } from "@/modules/pets/ui/sections/pet-details-section";
import { PetView } from "@/modules/pets/ui/views/pet-view";

const Page = () => {
  return (
    <PetView>
      <PetDetailsSection petId="123" />
    </PetView>
  );
};

export default Page;
