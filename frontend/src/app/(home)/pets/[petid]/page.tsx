import { PetView } from "@/modules/pets/ui/views/pet-view";

const petId = "000-mocked-000-id";

const Page = () => {
  return (
    <>
      <PetView petId={petId} />
    </>
  );
};

export default Page;
