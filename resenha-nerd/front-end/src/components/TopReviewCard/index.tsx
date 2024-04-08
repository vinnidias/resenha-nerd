import Link from "next/link";

interface IProps {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  relevance: string;
  createdAt: Date;
}

export default function TopReviewCard(props: IProps) {
  const { id, category, title, subtitle, author, relevance, createdAt } = props;
  const date = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <Link
      href={`/resenha/${id}`}
      className="flex flex-col w-[100%] p-2 gap-4 ease-in-out duration-300 hover:border-b-4 hover:border-blue-300 hover:shadow-lg"
    >
      <div className="flex justify-between pr-6">
        <p className="font-bold text-blue-400 text-sm">{category}</p>
        <p>🔥 {relevance} Relevante</p>
      </div>

      <p className="font-semibold 2xl:text-xl md:text-lg text-sm">{title}</p>
      <p>{subtitle}</p>
      <div className="flex justify-between md:pr-4 border-t border-blue-300 pt-1">
        <p className="text-xs md:text-sm">🤓 {author} </p>
        <p className="text-xs md:text-sm">{date.format(new Date(createdAt))}</p>
      </div>
    </Link>
  );
}
