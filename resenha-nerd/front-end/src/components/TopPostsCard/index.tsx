import Image, { StaticImageData } from "next/image";

interface IProps {
  bannerUrl: StaticImageData;
  category: string;
  author: string;
  createdAt: Date;
  title: string;
  subtitle: string;
  post: string;
}

export default function TopPostCard(props: IProps) {
  const { bannerUrl, category, author, createdAt, title, subtitle, post } =
    props;
  const date = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="flex flex-row w-[100%] md:w-400 h-100 gap-4 p-2 items-center">
      <Image
        src={bannerUrl}
        alt="banner"
        className="w-[215px] h-[120px] aspect-auto rounded-md"
      />
      <div className="flex flex-col gap-1 md:gap-4 w-[70%] max-w-[80%]">
        <p className="font-bold text-blue-400 text-sm">{category}</p>
        <p className="font-semibold 2xl:text-xl md:text-lg text-sm">{title}</p>
        <div className="flex justify-between md:pr-4 border-t border-blue-300 pt-1">
          <p className="text-xs md:text-sm">🤓 {author} </p>
          <p className="text-xs md:text-sm">{date.format(createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
