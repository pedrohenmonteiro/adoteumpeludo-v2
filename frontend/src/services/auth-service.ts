export class AuthService {
    static async login(email: string, password: string) {
      const response = await fetch("http://localhost:8080/api/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
  
      return await response.json();
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
      window.location.href = "/sign-in"; 
    }
  }