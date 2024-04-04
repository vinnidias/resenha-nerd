import Image from "next/image";
import { FaGithub, FaInstagram } from "react-icons/fa6";

interface IParams {
  params: { id: string };
}

interface IResponseData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  authorId: string;
  author: {
    nickname: string;
    image: string;
  };
}
export default async function Resenha({ params }: IParams) {
  const { id } = params;

  const res = await fetch(`http://localhost:3333/reviewbyid?id=${id}`, {
    cache: "no-store",
  });

  const data: IResponseData = await res.json();

  const category = data.category;
  const title = data.title;
  const subtitle = data.subtitle;
  const content = data.content;
  const createdAt = data.created_at;
  const authotId = data.authorId;
  const authorImage = data.author.image;

  const formatedDate = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = formatedDate.format(new Date(createdAt));

  return (
    <div className="flex flex-col min-w-screen min-h-screen gap-20 pt-10">
      <div className="flex flex-col gap-2 w-full lg:w-[70%] self-center px-2 md:mt-0 md:px-16 md:justify-center">
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
          <div className="flex h-16 w-16">
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
            {authotId}
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
      <div className="flex flex-col gap-20 pb-24 px-4 w-[full] lg:w-[50%] lg:ml-[15%] py-8 lg:pl-2 lg:pr-4 2xl:pl-12 lg:border-r lg:border-blue-300">
        <p className="text-md lg:text-lg lg:mt-[-1em] 2xl:text-xl tracking-wide leading-9">{content}</p>
      </div>
    </div>
  );
}
