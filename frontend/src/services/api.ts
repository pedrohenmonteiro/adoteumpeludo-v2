/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthService } from "./auth-service";

export const api = {
    async get(url: string) {
      return this.fetch(url, "GET");
    },
  
    async post(url: string, body: any) {
      return this.fetch(url, "POST", body);
    },
  
    async fetch(url: string, method: string, body?: any) {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
  
      const token = AuthService.getToken();
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
  
      const response = await fetch(`http://localhost:8080${url}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });
  
      if (response.status === 401) {
        AuthService.logout();
        throw new Error("Sessão expirada");
      }
  
      if (!response.ok) {
        throw new Error(await response.text());
      }
  
      return await response.json();
    },
  };