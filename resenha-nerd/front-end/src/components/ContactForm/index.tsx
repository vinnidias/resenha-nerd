"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/api/api";
import { useState } from "react";

const ContactSchema = z.object({
  name: z
    .string()
    .min(3, "Informe o seu Nome ou Apelido com, pelo menos, 3 carcteres"),
  email: z
    .string()
    .min(1, "Informe o seu Email")
    .email({ message: "Endereço de email inválido" }),
  subject: z.string().min(1, "Informe o assunto da mensagem"),
  message: z.string().min(1, "Informe a Mensagem a ser enviada"),
});

type ContactFormProps = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    resetField,
  } = useForm({
    criteriaMode: "firstError",
    mode: "all",
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data: ContactFormProps) => {
    try {
      setIsLoading(true);
      await fetch(`${api}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      });
      resetField("name");
      resetField("email");
      resetField("subject");
      resetField("message");
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao enviar: ", error);
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="border-b xl:border-r flex flex-col p-16 gap-12 w-full h-full"
    >
      <>
        <label
          htmlFor="name"
          className={`flex flex-col min-w-full p-2 border mb-[-1%] focus-within:border-blue-300 ${
            errors.name && "border-purple-400 focus-within:border-purple-400"
          }`}
        >
          <p
            className={`font-semibold ${
              errors.name
                ? "text-purple-400"
                : "text-slate-400 focus-within:text-blue-300"
            }`}
          >
            NOME
          </p>
          <input
            className="outline-none bg-transparent autofill:bg-transparent"
            type="text"
            {...register("name")}
          />
        </label>
        {errors.name?.message && (
          <p className="text-purple-400 mt-[-2%]">{errors.name?.message}</p>
        )}
      </>

      <>
        <label
          htmlFor="email"
          className={`flex flex-col min-w-full p-2 border mb-[-1%] focus-within:border-blue-300 ${
            errors.email && "border-purple-400 focus-within:border-purple-400"
          }`}
        >
          <p
            className={`font-semibold ${
              errors.email ? "text-purple-400" : "text-slate-400"
            }`}
          >
            EMAIL
          </p>
          <input
            className="outline-none bg-transparent"
            {...register("email")}
            type="text"
          />
        </label>
        {errors.email?.message && (
          <p className="text-purple-400 mt-[-2%]">{errors.email?.message}</p>
        )}
      </>

      <>
        <label
          htmlFor="subject"
          className={`flex flex-col min-w-full p-2 border mb-[-1%] focus-within:border-blue-300 ${
            errors.subject && "border-purple-400 focus-within:border-purple-400"
          }`}
        >
          <p
            className={`font-semibold ${
              errors.subject ? "text-purple-400" : "text-slate-400"
            }`}
          >
            ASSUNTO
          </p>
          <input
            className="outline-none bg-transparent"
            type="text"
            {...register("subject")}
          />
        </label>
        {errors.subject?.message && (
          <p className="text-purple-400 mt-[-2%]">{errors.subject?.message}</p>
        )}
      </>

      <>
        <label
          htmlFor="message"
          className={`flex flex-col min-w-full h-80 p-2 border mb-[-1%] focus-within:border-blue-300 ${
            errors.message && "border-purple-400 focus-within:border-purple-400"
          }`}
        >
          <p
            className={`font-semibold ${
              errors.message ? "text-purple-400" : "text-slate-400"
            }`}
          >
            MENSAGEM
          </p>
          <textarea
            className="flex outline-none bg-transparent flex-wrap h-full"
            {...register("message")}
          />
        </label>
        {errors.message?.message && (
          <p className="text-purple-400 mt-[-2%]">{errors.message?.message}</p>
        )}
      </>
      <button
        type="submit"
        className="bg-blue-400 text-white font-semibold p-4 w-fit self-end rounded-md hover:bg-blue-300 ease-in-out duration-700"
      >
        {isLoading ? "ENVIANDO..." : "ENVIAR"}
      </button>
    </form>
  );
}
