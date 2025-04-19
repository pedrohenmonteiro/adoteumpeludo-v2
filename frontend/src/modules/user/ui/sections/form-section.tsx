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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

// Schema de validação
const petFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  description: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres"),
  imageUrl: z.string().url("URL da imagem inválida"),
  age: z.string().optional(),
  size: z.enum(["small", "medium", "large"]),
  temperament: z.string().optional(),
});

type PetFormData = z.infer<typeof petFormSchema>;

export const FormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<PetFormData>({
    resolver: zodResolver(petFormSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
      age: "",
      size: "medium",
      temperament: "",
    },
  });

  const onSubmit = async (data: PetFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falha ao cadastrar pet");
      }

      router.push("/user/pets");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Erro desconhecido"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Anunciar Novo Pet</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Nome */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome do pet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Descrição */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva o pet (personalidade, hábitos, etc.)"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* URL da Imagem */}
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>URL da Imagem</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Cole a URL de uma imagem do pet"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Idade */}
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idade (opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 2 anos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Porte */}
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Porte</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o porte" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="small">Pequeno</SelectItem>
                      <SelectItem value="medium">Médio</SelectItem>
                      <SelectItem value="large">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Temperamento */}
            <FormField
              control={form.control}
              name="temperament"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Temperamento (opcional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: Brincalhão, calmo, etc."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {submitError && (
            <div className="text-red-600 text-sm text-center p-2 bg-red-50 rounded-md">
              {submitError}
            </div>
          )}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="bg-white text-black px-4 py-2 hover:bg-gray-50 border border-black"
              onClick={() => router.back()}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="hover:bg-black hover:text-white px-4 py-2 bg-lime-300 text-black border border-black"
            >
              {isSubmitting ? "Enviando..." : "Anunciar Pet"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};
