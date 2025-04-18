"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";

interface UserInfoSectionProps {
  username: string;
}

export const UserInfoSection = ({ username }: UserInfoSectionProps) => {
  const user = {
    name: "João Silva",
    avatar:
      "https://cdn.pixabay.com/photo/2020/04/09/19/59/man-5022931_1280.jpg",
    bio: "Amo animais e quero ajudar todos a encontrarem um lar!",
    location: "Londrina, PR",
  };

  return (
    <div className="bg-amber-50 border border-black shadow-md p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-black border-2">
          <Image
            src={user.avatar}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-black">{user.name}</h1>
          <p className="text-gray-800">@{username}</p>
          <p className="mt-2 text-gray-800">{user.bio}</p>
          <p className="mt-2 text-sm text-gray-800 flex gap-1">
            <MapPin /> {user.location}
          </p>
        </div>
      </div>
    </div>
  );
};
