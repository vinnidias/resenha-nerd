import { api } from "@/api/api";
import CommentForm from "@/components/CommentForm";
import { Metadata } from "next";
import Image from "next/image";
import { FaGithub, FaInstagram, FaTwitch } from "react-icons/fa6";

interface IParams {
  params: { id: string };
}

interface DiscussionCardProps {
  id: string;
  category: string;
  title: string;
  content: string;
  authorId: string;
  created_at: Date;
  author: {
    nickname: string;
    image: string;
    github_link: string;
    intagram_link: string;
    reddit_link: string;
    twitch_link: string;
    twitter_link: string;
  };
  comments: {
    id: string;
    author: {
      nickname: string;
      id: string;
    };
    content: string;
    created_at: Date;
  }[];
}

export const metadata: Metadata = {
  title: "Discussões",
  description:
    "Discussões e opiniões no universo dos Games, Música, Tecnologia, Séries, Filmes e Animes",
};

export default async function Discussao({ params }: IParams) {
  const { id } = params;

  const res = await fetch(`${api}/discussion?id=${id}`, {
    next: { revalidate: 1 },
  });
  const data: DiscussionCardProps = await res.json();

  const formatedDate = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = formatedDate.format(new Date(data.created_at));

  return (
    <div className="flex flex-col min-w-screen min-h-screen gap-20 pt-10 px-4 lg:px-[15%]">
      <div className="flex flex-col gap-2 w-full self-center px-2 md:mt-0 md:px-16 md:justify-center">
        <p className="text-blue-500 font-bold 2xl:text-lg lg:text-md text-center lg:text-start">
          {data.category}
        </p>
        <h1 className="text-2xl lg:text-xl lg:mt-[-0.15em] 2xl:text-3xl font-bold mb-8 mt-8 text-center md:text-start">
          {data.title}
        </h1>
        <p className="text-md lg:text-lg lg:mt-[-1em] 2xl:text-xl">
          {data.content}
        </p>
      </div>

      <div className="flex w-full px-2 self-center justify-between items-center mt-16 lg:mt-0 lg:items-end h-20 lg:px-2 md:px-16 lg:gap-40 border-t border-blue-300">
        <div className="flex gap-2 w-full items-end">
          <div className="flex h-16 w-16">
            <Image
              src={`data:image/jpeg;base64,${data.author.image}` || "" || ""}
              alt="foto do autor"
              width={200}
              height={200}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
          <p className="text-md lg:text-md lg:px-2 2xl:text-lg font-bold">
            {" "}
            {data.authorId}
          </p>
          <p className="text-md lg:text-lg font-[500]">{date}</p>
        </div>
        <div className="flex gap-6 pb-1 lg:pr-8 2xl:pr-40 items-center">
          {data.author.intagram_link && (
            <a
              target="blank"
              href={data.author.intagram_link}
              className="text-3xl text-center text-blue-400"
            >
              {" "}
              <FaInstagram />
            </a>
          )}
          {data.author.github_link && (
            <a
              target="blank"
              href={data.author.github_link}
              className="text-3xl text-center text-blue-400 "
            >
              {" "}
              <FaGithub />
            </a>
          )}

          {data.author.twitch_link && (
            <a
              target="blank"
              href={data.author.twitch_link}
              className="text-3xl text-center text-blue-400 "
            >
              {" "}
              <FaTwitch />
            </a>
          )}
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-start">💬 Comentários</h2>
      <div className="flex flex-col relative gap-20 pb-12 px-4 w-[full] lg:w-[70%] py-8 lg:pl-2 lg:pr-12 2xl:pl-12 lg:border-r lg:border-blue-300">
        {data.comments.length > 0 &&
          data.comments.map((item, index) => {
            const commentDate = formatedDate.format(new Date(item.created_at));
            return (
              <div
                className={`flex flex-col gap-4 border-b p-4 ${
                  data.comments.length - 1 === index && "mb-[20%]"
                }`}
                key={item.id}
              >
                <p className="flex gap-16 text-md lg:text-lg lg:mt-[-1em] font-semibold items-center justify-between pr-4">
                  🤓 {item.author.nickname}{" "}
                  <span className="font-normal text-sm justify-self-end">
                    {commentDate}
                  </span>
                </p>
                <p>{item.content}</p>
              </div>
            );
          })}

        <CommentForm discussionId={id} />
      </div>
    </div>
  );
}
