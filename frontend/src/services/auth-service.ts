export class AuthService {
  // ========== Sign In ==========
  static async signIn(email: string, password: string) {
    const response = await fetch("http://localhost:8080/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Email ou senha incorretos");
    }

    const { idToken, expiresIn } = await response.json();
    this.setToken(idToken, expiresIn);

    return idToken;
  }

  // ========== Sign Up ==========
  static async signUp(data: {
    username: string;
    email: string;
    password: string;
    imageUrl?: string;
  }) {
    const response = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    // Opcional: Autentica automaticamente após o registro
    return this.signIn(data.email, data.password);
  }

  // ========== Token Management ==========
  private static setToken(token: string, expiresIn: number) {
    localStorage.setItem("idToken", token);
    localStorage.setItem("tokenExpiry", String(Date.now() + expiresIn * 1000));
  }

  static getToken(): string | null {
    return localStorage.getItem("idToken");
  }

  static isAuthenticated(): boolean {
    const token = this.getToken();
    const expiry = localStorage.getItem("tokenExpiry");
    return !!token && !!expiry && Date.now() < parseInt(expiry);
  }

  static logout() {
    localStorage.removeItem("idToken");
    localStorage.removeItem("tokenExpiry");
    window.location.href = "/sign-in"; // Força recarregamento para limpar estados
  }
}