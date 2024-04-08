import Link from "next/link";

interface IProps {
  id: string;
  author: string;
  category: string;
  title: string;
  subtitle: string;
  content: string;
  relevance: number;
  relevant: number;
  irrelevant: number;
  created_at: Date;
  updated_at: Date;
}

export default function MainReviewCard(props: IProps) {
  const {
    id,
    author,
    category,
    content,
    created_at,
    irrelevant,
    relevance,
    relevant,
    subtitle,
    title,
    updated_at,
  } = props;
  return (
    <Link
      href={`/resenha/${id}`}
      className="flex flex-col w-[100%] p-2 gap-4 ease-in-out duration-300 hover:border-b-4 hover:border-blue-300 hover:shadow-lg"
    >
      <div className="flex flex-col w-full gap-8 border-b border-blue-300">
        <p className="font-bold text-blue-400 text-sm">{category}</p>
        <div>
          <p className="font-semibold 2xl:text-xl md:text-lg text-sm">
            {title}
          </p>
          <p className="text-md lg:text-lg 2xl:text-xl">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-lg lg:text-xl tracking-wide leading-9 truncate">
            {content}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-8">
              <p className="text-md lg:text-md 2xl:text-lg">🤓 {author}</p>
              <p className="text-md lg:text-lg">
                {new Date(created_at).toLocaleDateString("pt-br")}
              </p>
            </div>
            <div className="flex gap-8">
              <p className="text-md lg:text-lg">
                ✏️{relevant} nerds se interessaram
              </p>
              <p className="text-md lg:text-lg">
                📁{irrelevant} nerds não curtiram
              </p>
              <p className="text-md lg:text-lg">
                🔥 {relevance}% de relevância
              </p>
            </div>
          </div>

          <p>{}</p>
        </div>
      </div>
    </Link>
  );
}
