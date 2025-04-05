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
import { useState } from "react";
import { AuthService } from "@/services/auth-service";
import { useRouter } from "next/navigation";

export const SignUpSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const router = useRouter();

  const signUpSchema = z.object({
    name: z
      .string()
      .min(3, "O nome deve ter pelo menos 3 caracteres")
      .nonempty("Nome é obrigatório"),
    email: z
      .string()
      .email("Digite um email válido")
      .nonempty("Email é obrigatório"),
    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .nonempty("Senha é obrigatória"),
  });

  type SignUpFormData = z.infer<typeof signUpSchema>;

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    setSignUpError(null);

    try {
      await AuthService.signUp({
        username: data.name,
        email: data.email,
        password: data.password,
      });
      router.push("/");
    } catch (error) {
      setSignUpError(
        error instanceof Error ? error.message : "Erro no cadastro"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 w-full max-w-md">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-purple-900">Crie sua conta</h1>
        <p className="text-gray-600 mt-2">
          Preencha os dados para se cadastrar
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Seu nome" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          {signUpError && (
            <div className="text-red-600 text-sm text-center p-2 bg-red-50 rounded-md">
              {signUpError}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </Form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
};
