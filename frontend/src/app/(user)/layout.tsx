import { HomeNavbar } from "@/modules/home/ui/components/home-navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeNavbar />
      <div className="flex min-h-screen pt-[4rem]">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </>
  );
};

export default Layout;
