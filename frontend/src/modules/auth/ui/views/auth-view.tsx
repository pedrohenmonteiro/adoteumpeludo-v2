import Image from "next/image";

interface AuthViewProps {
  children: React.ReactNode;
}

export const AuthView = ({ children }: AuthViewProps) => {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1594387992816-65f5d74c1de0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gato e cachorro"
          width={800}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};
