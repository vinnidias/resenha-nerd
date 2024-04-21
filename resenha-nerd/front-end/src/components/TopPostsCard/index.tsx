import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IProps {
  id: string;
  bannerUrl: string | StaticImageData;
  category: string;
  author: string;
  createdAt: Date;
  title: string;
  subtitle: string;
  post: string;
}

export default function TopPostsCard(props: IProps) {
  const { id, bannerUrl, category, author, createdAt, title, subtitle, post } =
    props;

  const formatedDate = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const dbDate = new Date(createdAt);

  return (
    <Link
      href={`/noticia/${id}`}
      className="flex flex-row w-[100%] md:w-400 h-100 gap-4 p-2 items-center ease-in-out duration-300 hover:border-b-4 hover:border-blue-300 hover:shadow-lg"
    >
      <Image
        src={`data:image/jpeg;base64,${bannerUrl}`}
        alt="banner"
        width={215}
        height={120}
        className="aspect-auto rounded-md"
      />
      <div className="flex flex-col gap-1 md:gap-4 w-[70%] max-w-[80%]">
        <p className="font-bold text-blue-400 text-sm lg:text-lg">{category}</p>
        <p className="font-semibold 2xl:text-2xl md:text-lg text-sm">{title}</p>
        <div className="flex justify-between md:pr-4 border-t border-blue-300 pt-1">
          <p className="text-xs md:text-lg">🤓 {author} </p>
          <p className="text-xs md:text-lg">{formatedDate.format(dbDate)}</p>
        </div>
      </div>
    </Link>
  );
}
