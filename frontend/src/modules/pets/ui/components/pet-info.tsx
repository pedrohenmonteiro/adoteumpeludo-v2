import { Mail, MapPin, Phone } from "lucide-react";

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
    location: "Londrina, PR",
    owner: {
      name: "Fulana Silva",
      email: "fulana.silva@example.com",
      phone: "(43) 99999-0000",
    },
  };

  return (
    <div className="mb-6 p-6 bg-white border border-black">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{petData.name}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-amber-100 text-amber-800 border border-amber-800 px-3 py-1 text-sm font-medium">
          {petData.age}
        </span>
        <span className="bg-amber-100 text-amber-800 border border-amber-800 px-3 py-1 text-sm font-medium">
          {petData.breed}
        </span>
        <span className="bg-amber-100 text-amber-800 border border-amber-800 px-3 py-1 text-sm font-medium">
          {petData.size}
        </span>
        <span className="bg-amber-100 text-amber-800 border border-amber-800 px-3 py-1 text-sm font-medium">
          {petData.gender}
        </span>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Sobre</h2>
        <p className="text-gray-800 leading-relaxed">{petData.description}</p>

        <div className="flex items-center gap-2 text-gray-600 mt-6">
          <MapPin className="text-gray-800" />
          <span>{petData.location}</span>
        </div>
      </div>

      <div className="border-t border-black pt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Contato do Anunciante
        </h2>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              {petData.owner.name}
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-gray-500 flex-shrink-0" size={20} />
              <a
                href={`mailto:${petData.owner.email}`}
                className="text-gray-800 break-all"
              >
                {petData.owner.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-gray-800 flex-shrink-0" size={20} />
              <a
                href={`tel:${petData.owner.phone.replace(/\D/g, "")}`}
                className="text-gray-800 hover:text-gray-900 hover:underline"
              >
                {petData.owner.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
