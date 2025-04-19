interface UserProfileViewProps {
  children: React.ReactNode;
}

export const UserView = ({ children }: UserProfileViewProps) => {
  return (
    <div className="max-w-[1600px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-10">
      {children}
    </div>
  );
};
