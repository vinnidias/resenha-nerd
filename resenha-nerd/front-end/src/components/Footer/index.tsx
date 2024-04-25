import Link from "next/link";
import { FaArrowRight, FaGithub, FaInstagram, FaTwitch } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="relative flex justify-between w-full h-80 lg:h-64 bg-slate-700 pt-12 xl:px-[15%] px-2 lg?px-16">
      <div className="flex flex-col gap-8 w-[30%]">
        <Link
          href={"/"}
          className="font-semibold text-white hover:opacity-70 ease-in-out duration-700"
        >
          QUEM SOMOS
        </Link>
        <Link
          href={"/contato"}
          className="font-semibold text-white hover:opacity-70 ease-in-out duration-700"
        >
          CONTATO
        </Link>
        <Link
          href={"/contato"}
          className="font-semibold text-white hover:opacity-70 ease-in-out duration-700"
        >
          POLÍTICAS DE PRIVACIDADE
        </Link>
      </div>

      <div className="flex flex-col gap-8 w-[30%]">
        <a
          href=""
          target="_blank"
          className="flex items-center gap-4 font-semibold text-white hover:opacity-70 ease-in-out duration-700"
        >
          <FaInstagram className="text-lg"/> VISITE NOSSO INSTAGRAM
        </a>
        <a
          href=""
          target="_blank"
          className="flex items-center gap-4 font-semibold text-white hover:opacity-70 ease-in-out duration-700"
        >
          <FaTwitch className="text-lg"/> VISITE NOSSO CANAL DA TWITCH
        </a>
        <a
          href=""
          target="_blank"
          className="flex items-center gap-4  font-semibold text-white hover:opacity-70 ease-in-out duration-700"
        >
          <FaGithub className="text-lg"/> NOSSO GITHUB
        </a>
      </div>

      <div className="flex flex-col gap-8 w-[30%]">
        <p className="font-semibold text-white">ASSINE NOSSA NEWSLETTER</p>
        <form action="" className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <>
            <label
              htmlFor="email"
              className={`flex flex-col min-w-[80%] p-2 border focus-within:border-blue-300 text-slate-300`}
            >
              <p className={`font-semibold text-slate-400`}>EMAIL</p>
              <input className="outline-none bg-transparent" type="text" />
            </label>
          </>
          <button className="flex items-center self-end justify-center h-16 w-16 rounded-md bg-blue-300 text-white text-lg hover:bg-blue-400 ease-in-out duration-700">
            <FaArrowRight />
          </button>
        </form>
      </div>
      <div className="flex absolute bottom-0 left-0 w-full items-center justify-center bg-slate-300 h-8"> © Resenha Nerd 🤓 | 2024 | Todos os Direitos Reservados</div>
    </section>
  );
}
