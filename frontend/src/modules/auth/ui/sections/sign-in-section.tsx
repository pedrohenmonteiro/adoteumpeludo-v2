"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SignInSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const loginSchema = z.object({
    email: z
      .string()
      .email("Digite um email válido")
      .nonempty("Email é obrigatório"),
    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .nonempty("Senha é obrigatória"),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setLoginError(null);

    try {
      const response = await fetch("http://localhost:8080/api/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          response.status === 401
            ? "Email ou senha incorretos"
            : "Erro ao realizar login"
        );
      }

      const responseData = await response.json();
      if (!responseData.idToken) {
        throw new Error("Autenticação falhou");
      }

      localStorage.setItem("idToken", responseData.idToken);
      localStorage.setItem(
        "tokenExpiry",
        String(Date.now() + responseData.expiresIn * 1000)
      );

      router.push("/");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message.includes("Failed to fetch") ||
            error.message.includes("NetworkError")
            ? "Erro de conexão com o servidor"
            : error.message
          : "Ocorreu um erro durante o login";

      setLoginError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full max-w-md">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-purple-900">
          Bem-vindo de volta!
        </h1>
        <p className="text-gray-600 mt-2">Faça login para continuar</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="seu@email.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="••••••••" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="text-sm text-purple-600 hover:text-purple-500"
            >
              Esqueceu a senha?
            </Link>
          </div>

          {loginError && (
            <div className="text-red-600 text-sm text-center p-2 bg-red-50 rounded-md">
              {loginError}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </Form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Não tem uma conta?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};
