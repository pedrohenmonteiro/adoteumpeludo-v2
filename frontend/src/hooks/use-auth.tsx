import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "../services/auth-service";

export const useAuth = (redirectIfUnauthenticated = false) => {
  const router = useRouter();

  useEffect(() => {
    if (redirectIfUnauthenticated && !AuthService.isAuthenticated()) {
      router.push("/sign-in");
    }
  }, [router, redirectIfUnauthenticated]);

  return {
    isAuthenticated: AuthService.isAuthenticated(),
    logout: AuthService.logout,
  };
};
