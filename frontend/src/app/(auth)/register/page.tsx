import { SignUpSection } from "@/modules/auth/ui/sections/sign-up-section";
import { AuthView } from "@/modules/auth/ui/views/auth-view";

const SignInPage = () => {
  return (
    <AuthView>
      <SignUpSection />
    </AuthView>
  );
};

export default SignInPage;
