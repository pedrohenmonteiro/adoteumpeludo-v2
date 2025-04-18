import { UserInfoSection } from "@/modules/user/ui/sections/user-info-section";
import { UserPetsSection } from "@/modules/user/ui/sections/user-pets-section";
import { UserProfileView } from "@/modules/user/ui/views/profile-view";

interface PageProps {
  params: { username: string };
}

const Page = ({ params }: PageProps) => {
  params.username = "Rodolfo";
  return (
    <UserProfileView>
      <UserInfoSection username={params.username} />
      <UserPetsSection username={params.username} />
    </UserProfileView>
  );
};

export default Page;
