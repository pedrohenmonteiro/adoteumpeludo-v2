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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const SignInSection = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     // Simulando uma chamada de API
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     router.push("/");
  //   } catch (error) {
  //     console.error("Login error:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

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
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-purple-900">
          Bem-vindo de volta!
        </h1>
        <p className="text-gray-600 mt-2">Faça login para continuar</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4 flex flex-col">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="seu@email.com" />
                  </FormControl>
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
                    <Input {...field} placeholder="••••••••" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-between mt-8">
            <a
              href="#"
              className="text-sm text-purple-600 hover:text-purple-500"
            >
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </Form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Não tem uma conta?{" "}
          <a
            href="/sign-up"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};
