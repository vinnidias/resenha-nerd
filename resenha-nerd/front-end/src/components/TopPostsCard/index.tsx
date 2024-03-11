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
    <div className="flex w-400 h-100 gap-4">
      <Image
        src={bannerUrl}
        alt="banner"
        className="w-[215px] h-[120px] aspect-auto rounded-md"
      />
      <div className="flex flex-col gap-4 w-[70%] max-w-[80%]">
        <p className="font-bold text-blue-400">{category}</p>
        <p className="font-semibold 2xl:text-xl text-lg">{title}</p>
        <div className="flex justify-between pr-4 border-t border-blue-300 pt-1">
          <p className="text-sm">🤓 {author} </p>
          <p className="text-sm">{date.format(createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
