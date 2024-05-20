import { api } from "@/api/api";
import AuthorHeader from "@/components/AuthorHeader";
import Image from "next/image";
import { FaGithub, FaInstagram, FaTwitch } from "react-icons/fa6";

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
    github_link: string | null;
    intagram_link: string | null;
    reddit_link: string | null;
    twitch_link: string | null;
    twitter_link: string | null;
  };
}
export default async function Resenha({ params }: IParams) {
  const { id } = params;

  const res = await fetch(`${api}/reviewbyid?id=${id}`, {
    next: { revalidate: 1 },
  });

  const data: IResponseData = await res.json();

  const category = data.category;
  const title = data.title;
  const subtitle = data.subtitle;
  const content = data.content;
  const createdAt = data.created_at;
  const authotId = data.authorId;
  const authorImage = data.author.image;
  const authorInsta = data.author.intagram_link;
  const authorGithub = data.author.github_link;
  const authorTwitch = data.author.twitch_link;

  const formatedDate = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = formatedDate.format(new Date(createdAt));

  return (
    <div className="flex flex-col min-w-screen min-h-screen gap-20 pt-10 lg:px-[15%]">
      <div className="flex flex-col gap-2 w-full self-center px-2 md:mt-0 md:px-16">
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

      <AuthorHeader
        author={authotId}
        authorImage={authorImage || ""}
        date={date}
        authorInsta={authorInsta}
        authorGithub={authorGithub}
        authorTwitch={authorTwitch}
      />
      <div className="flex flex-col gap-20 pb-24 px-4 w-full py-8 lg:pl-2 lg:pr-4 2xl:pl-12 lg:border-r lg:border-blue-300">
        <p className="text-md lg:text-lg lg:mt-[-1em] 2xl:text-xl tracking-wide leading-9">
          {content}
        </p>
      </div>
      <div className="border flex w-[30%]">

      </div>
    </div>
  );
}
