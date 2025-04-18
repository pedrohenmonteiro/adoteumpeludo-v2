import React from "react";

interface Props {
  children: React.ReactNode;
}

export const PetView = ({ children }: Props) => {
  return (
    <div className="flex flex-col max-w-[1600px] mx-auto pt-2.5 px-4">
      {children}
    </div>
  );
};
