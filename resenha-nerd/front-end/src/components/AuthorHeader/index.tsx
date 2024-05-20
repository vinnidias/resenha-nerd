import Image from "next/image";
import { FaGithub, FaInstagram, FaTwitch } from "react-icons/fa6";

interface AuthorProps {
  authorImage: string;
  author: string;
  date: string;
  authorInsta?: string | null;
  authorGithub?: string | null;
  authorTwitch?: string | null;
}

export default function AuthorHeader({
  authorImage,
  author,
  date,
  authorInsta,
  authorGithub,
  authorTwitch,
}: AuthorProps) {
  return (
    <div className="flex w-full px-2 self-center justify-between items-center mt-16 lg:mt-0 lg:items-end h-20 lg:px-2 md:px-16 lg:gap-40 border-t border-blue-300">
      <div className="flex gap-2 w-full items-center lg:items-end">
        <div className="flex h-16 w-16 justify-self-end">
          <Image
            src={`data:image/jpeg;base64,${authorImage}`}
            alt="foto do autor"
            width={200}
            height={200}
            className="w-full h-full"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm lg:text-lg lg:px-2 2xl:text-lg font-bold">
            {" "}
            {author}
          </p>
          <p className="text-xs lg:text-md font-[500]">{date}</p>
        </div>
      </div>
      <div className="flex gap-6 pb-1 lg:pr-8 2xl:pr-40 items-center">
        {authorInsta && (
          <a
            target="blank"
            href={authorInsta}
            className="text-3xl text-center text-blue-400"
          >
            {" "}
            <FaInstagram />
          </a>
        )}
        {authorGithub && (
          <a
            target="blank"
            href={authorGithub}
            className="text-3xl text-center text-blue-400 "
          >
            {" "}
            <FaGithub />
          </a>
        )}

        {authorTwitch && (
          <a
            target="blank"
            href={authorTwitch}
            className="text-3xl text-center text-blue-400 "
          >
            {" "}
            <FaTwitch />
          </a>
        )}
      </div>
    </div>
  );
}
