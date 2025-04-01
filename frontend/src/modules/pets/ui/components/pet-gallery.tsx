import Image from "next/image";

interface Props {
  petId: string;
}

export const PetGallery = ({ petId }: Props) => {
  const petPhoto =
    "https://img.nsctotal.com.br/wp-content/uploads/2023/10/Pets-Banco-de-imagens-1.jpg";

  return (
    <div className="h-full">
      <Image
        src={petPhoto}
        alt={`Pet ${petId}`}
        width={800}
        height={600}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
};
