interface AuthViewProps {
  children: React.ReactNode;
}

export const AuthView = ({ children }: AuthViewProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};
