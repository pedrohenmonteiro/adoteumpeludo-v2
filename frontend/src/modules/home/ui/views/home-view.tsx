interface HomeViewProps {
  children: React.ReactNode;
}

export const HomeView = ({ children }: HomeViewProps) => {
  return (
    <div className="max-w-[1600px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      {children}
    </div>
  );
};
