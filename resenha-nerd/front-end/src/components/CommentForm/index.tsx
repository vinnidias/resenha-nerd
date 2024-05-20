"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/api/api";
import { useState } from "react";
import { revalidatePath } from "next/cache";

const CommentSchema = z.object({
  nickname: z.string().min(2, "Informe o eu nome ou apelido!"),
  email: z
    .string()
    .min(1, "Informe o seu email")
    .email({ message: "Informe um email válido" }),
  comment: z.string().min(1, "Não é possível enviar um comentário vazio"),
});

type CommentFormProp = z.infer<typeof CommentSchema>;

type ComponentProps = {
  discussionId: string;
};

export default function CommentForm({ discussionId }: ComponentProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    resetField,
  } = useForm({
    criteriaMode: "firstError",
    mode: "all",
    resolver: zodResolver(CommentSchema),
    defaultValues: {
      nickname: "",
      email: "",
      comment: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data: CommentFormProp) => {
    try {
      setIsLoading(true);
      const reader = await fetch(`${api}/reader`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname: data.nickname, email: data.email }),
        cache: "no-store",
      });

      const comment = await fetch(`${api}/discussioncomment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          discussionId: discussionId,
          content: data.comment,
          readerId: data.nickname,
        }),
        cache: "no-store",
      });

      const all = await Promise.all([reader, comment]);

      resetField("nickname");
      resetField("email");
      resetField("comment");
      console.log("Promisse all Result", all);
      setIsLoading(false);
      revalidatePath(`/discussao/${discussionId}`);
      window.location.reload();
    } catch (error) {
      console.log("Falha ao Carregar: ", error);
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-8 justify-self-end"
    >
      <>
        <label
          htmlFor="name"
          className={`flex flex-col min-w-full p-2 border focus-within:border-blue-300 ${
            errors.nickname &&
            "border-purple-400 focus-within:border-purple-400"
          }`}
        >
          <p
            className={`font-semibold ${
              errors.nickname
                ? "text-purple-400"
                : "text-slate-400 focus-within:text-blue-300"
            }`}
          >
            NOME OU APELIDO
          </p>
          <input
            className="outline-none bg-transparent autofill:bg-transparent"
            type="text"
            {...register("nickname")}
          />
        </label>
        {errors.nickname?.message && (
          <p className="text-purple-400 mt-[-2%]">{errors.nickname?.message}</p>
        )}
      </>

      <>
        <label
          htmlFor="email"
          className={`flex flex-col min-w-full p-2 border focus-within:border-blue-300 ${
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
          className={`flex flex-col min-w-full p-2  border focus-within:border-blue-300 ${
            errors.comment && "border-purple-400 focus-within:border-purple-400"
          } `}
        >
          <p
            className={`font-semibold ${
              errors.comment ? "text-purple-400" : "text-slate-400"
            }`}
          >
            ASSUNTO
          </p>
          <textarea
            cols={10}
            rows={10}
            className={`p-8 outline-none bg-transparent`}
            {...register("comment")}
          />
        </label>
        {errors.comment?.message && (
          <p className="text-purple-400 mt-[-2%]">{errors.comment?.message}</p>
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
