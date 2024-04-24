"use client";

import ContactForm from "@/components/ContactForm";

export default function Contato() {
  return (
    <div className="flex flex-col xl:flex-row max-w-screen min-h-screen xl:px-[15%]">
      <div className="flex flex-col min-w-[40%] min-h-full">
        <h1 className="font-bold text-2xl pl-16 pt-16 gap-12">
          💬 Fale Conosco
        </h1>
        <ContactForm />
      </div>
      <div className="flex flex-col gap-12 min-h-full">
        <div className="flex flex-col xl:max-w-[60%] p-16 gap-12">
        <h2 className="font-bold text-2xl">💡 Contato da Redação</h2>
          <p className="text-xl">
            Se deseja ser um autor, dar uma sujestão de pauta, matérias e
            notícias, entre em contato com{" "}
            <strong>redacao.resenhanerd@gmail.com</strong>
          </p>
        </div>
        <div className="flex flex-col xl:max-w-[60%] p-16 gap-12">
        <h3 className="font-bold text-2xl">📬 Comercial</h3>
          <p className="text-xl">
            Se interessou em anunciar a sua marca no site ou tem algum interesse comercial?! Entre em contato com nossa conta comercial,{" "} 
            <strong>comercial.resenhanerd@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
