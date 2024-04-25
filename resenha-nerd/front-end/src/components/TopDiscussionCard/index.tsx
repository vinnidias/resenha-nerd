import Link from "next/link";

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
  };
  comments: {
    author: {
      nickname: string;
      id: string;
      email: string;
    };
    content: string;
  }[];
}

export default function TopDiscussionCard(props: DiscussionCardProps) {
  const { id, content, category, title, authorId, created_at, comments } =
    props;
  const date = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <Link
      href={`/discussao/${id}`}
      className="flex flex-col w-[100%] p-2 gap-4 ease-in-out duration-300 hover:border-b-4 hover:border-blue-300 hover:shadow-lg"
    >
      <div className="flex justify-between pr-6">
        <p className="font-bold text-blue-400 text-sm lg:text-lg">{category}</p>
      </div>

      <p className="font-semibold 2xl:text-2xl md:text-lg text-md">{title}</p>
      <p className="2xl:text-2xl md:text-lg text-lg">{content}</p>
      <div className="flex justify-between md:pr-4 border-t border-blue-300 pt-1">
        <div className="flex gap-12 w-[50%]">
          <p className="text-xs md:text-lg">🤓 {authorId} </p>
          <p className="text-xs md:text-lg">
            {date.format(new Date(created_at))}
          </p>
        </div>

        {comments.length > 0 && (
          <p>
            💬 {comments.length} comentário{comments.length > 1 && "s"}
          </p>
        )}
      </div>
    </Link>
  );
}
