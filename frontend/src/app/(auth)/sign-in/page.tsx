import { AuthView } from "@/modules/auth/ui/views/auth-view";
import { SignInSection } from "@/modules/auth/ui/sections/sign-in-section";

const SignInPage = () => {
  return (
    <AuthView>
      <SignInSection />
    </AuthView>
  );
};

export default SignInPage;
