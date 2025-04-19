import { UserInfoSection } from "@/modules/user/ui/sections/user-info-section";
import { UserPetsSection } from "@/modules/user/ui/sections/user-pets-section";
import { UserView } from "@/modules/user/ui/views/profile-view";

interface PageProps {
  params: { username: string };
}

const Page = ({ params }: PageProps) => {
  params.username = "Rodolfo";
  return (
    <UserView>
      <UserInfoSection username={params.username} />
      <UserPetsSection username={params.username} />
    </UserView>
  );
};

export default Page;
