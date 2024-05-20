import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaGithub, FaTwitch } from "react-icons/fa6";

import Iframe from "@/components/Iframe";
import ReviewsList from "@/components/ReviewsList";
import { api } from "@/api/api";
import AuthorHeader from "@/components/AuthorHeader";
import AfiliateBlock from "@/components/AfiliateBlock";

interface IParams {
  params: { id: string };
}
interface IResponseData {
  id: string;
  authorId: string;
  author: {
    nickname: string;
    image?: string;
    github_link: string | null;
    intagram_link: string | null;
    reddit_link: string | null;
    twitch_link: string | null;
    twitter_link: string | null;
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

  const res = await fetch(`${api}/newsbyid?id=${id}`, { cache: "force-cache" });

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
  const authorInsta = data.author.intagram_link;
  const authorGithub = data.author.github_link;
  const authorTwitch = data.author.twitch_link;
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
    <div className="flex flex-col min-w-screen min-h-screen lg:px-[15%]">
      <div className="flex flex-col justify-start 2xl:gap-8 mt-24 h-screen md:mt-4 gap-2">
        <Image
          src={imagePath || ""}
          alt="Banner da notícia"
          width={460}
          height={300}
          className="min-w-[50%] self-center 2xl:mt-16 z-0 rounded-md lg:min-w-[45%]"
        />
        <div className="flex flex-col gap-0 w-full self-center px-2 md:mt-0 md:px-16 ">
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
          author={author}
          authorImage={authorImage || ""}
          date={date}
          authorInsta={authorInsta}
          authorGithub={authorGithub}
          authorTwitch={authorTwitch}
        />
      </div>
      <div className="flex flex-col lg:flex-row w-ful">
        <div className="flex flex-col gap-20 px-8 w-full py-8 lg:pl-2 lg:pr-4 2xl:pl-12 border-r border-blue-300">
          <p className="text-lg lg:text-xl tracking-wide leading-9">
            {content}
          </p>
          <Iframe link={link || ""} />
          <p className="text-lg lg:text-xl tracking-wide leading-9">
            {endText}
          </p>
        </div>
        <div className="flex flex-col lg:w-[40%] pl-8 gap-8">
          <div className="h-[74vh]"></div>
          <AfiliateBlock
            pubTitle="PROMOÇÃO AMAZON"
            link="https://amzn.to/3UbT0RU"
            image="https://github.com/vinnidias/resenha-nerd/assets/60718041/6abb5e70-1149-4df0-ab5a-f1825661df7e"
            title='Monitor Gamer Samsung T350 24"'
            subtitle="Com 33% de desconto no Prime"
          />

          <AfiliateBlock
            pubTitle="PROMOÇÃO AMAZON"
            link="https://amzn.to/3JtJKnc"
            image="https://github.com/vinnidias/resenha-nerd/assets/60718041/edd5afa5-31a7-4ac3-b0fc-305d07acd7ca"
            title="Headset sem Fio Pulse 3D Midnight Black - PlayStation 5"
            subtitle="Com 18% de desconto no Prime"
          />
          <ReviewsList />
        </div>
      </div>
    </div>
  );
}
