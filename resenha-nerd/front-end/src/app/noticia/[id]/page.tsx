import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaGithub } from "react-icons/fa6";

import Iframe from "@/components/Iframe";

interface IParams {
  params: { id: string };
}
interface IResponseData {
  id: string;
  authorId: string;
  author: {
    nickname: string;
    image?: string;
  };
  title: string;
  subtitle: string;
  category: string;
  content: string;
  end_text?: string;
  image?: string;
  image_credits?: string;
  link?: string;
  created_at: Date;
  updated_at?: Date;
}

export default async function Noticia({ params }: IParams) {
  const { id } = params;
  const res = await fetch(`http://localhost:3333/newsbyid?id=${id}`, {
    cache: "no-store",
  });
  const data: IResponseData = await res.json();

  const title = data.title.toUpperCase();
  const subtitle = data.subtitle;
  const content = data.content;
  const imagePath = `data:image/jpeg;base64,${data.image}`;
  const category = data.category;
  const endText = data.end_text;
  const link = data.link;
  const author = data.authorId;
  const authorImage = data.author.image;
  const imageCredits = data.image_credits;
  const formatedDate = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = formatedDate.format(new Date(data.created_at));

  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      <div className="flex flex-col justify-start 2xl:gap-8 mt-24 h-screen md:mt-4 gap-2">
        <Image
          src={imagePath || ""}
          alt="Banner da notícia"
          width={460}
          height={300}
          className="min-w-[50%] self-center 2xl:mt-16 z-0 rounded-md lg:min-w-[45%]"
        />
        <div className="flex flex-col gap-0 w-full lg:w-[70%] self-center px-2 md:mt-0 md:px-16 md:justify-center">
          <p className="text-blue-500 font-bold 2xl:text-lg lg:text-md text-center lg:text-start">
            {category}
          </p>
          <h1 className="text-2xl lg:text-xl lg:mt-[-0.15em] 2xl:text-3xl font-bold mb-8 mt-8 text-center md:text-start">
            {title}
          </h1>
          <h2 className="text-md lg:text-lg lg:mt-[-1em] 2xl:text-xl">
            {subtitle}
          </h2>
        </div>
        <div className="flex w-full px-2 self-center justify-between items-center mt-16 lg:mt-0 lg:items-end h-20 lg:px-2 md:px-16 lg:w-[70%] lg:gap-40 border-t border-blue-300">
          <div className="flex gap-2 w-full items-end">
            <div className="flex h-16 w-16 justify-self-end">
              <Image
                src={`data:image/jpeg;base64,${authorImage}` || "" || ""}
                alt="foto do autor"
                width={200}
                height={200}
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
            <p className="text-md lg:text-md lg:px-2 2xl:text-lg font-bold">
              {" "}
              {author}
            </p>
            <p className="text-md lg:text-lg font-[500]">{date}</p>
          </div>

          <div className="flex gap-6 pb-1 lg:pr-8 2xl:pr-40 items-center">
            <a
              target="blank"
              href={"https://www.instagram.com/vinni.diass/"}
              className="text-3xl text-center text-blue-400"
            >
              {" "}
              <FaInstagram />
            </a>
            <a
              target="blank"
              href={"https://github.com/vinnidias"}
              className="text-3xl text-center text-blue-400 "
            >
              {" "}
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 px-4 w-[full] lg:w-[50%] lg:ml-[15%] py-8 lg:pl-2 lg:pr-4 2xl:pl-12 lg:border-r lg:border-blue-300">
        <p className="text-lg lg:text-xl tracking-wide leading-9">{content}</p>
        <Iframe link={link || ""} />
        <p className="text-lg lg:text-xl tracking-wide leading-9">{endText}</p>
      </div>

      <div className="flex w-full justify-center p-8"></div>
    </div>
  );
}
