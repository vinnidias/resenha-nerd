import TopPostsCard from "../TopPostsCard";
import TopReviewCard from "../TopReviewCard";
import { api } from "@/api/api";

interface NewsProps {
  id: string;
  authorId: string;
  title: string;
  subtitle: string;
  category: string;
  content: string;
  image?: string;
  created_at: Date;
  updated_at?: Date;
}

interface ReviewsProps {
  id: string;
  authorId: string;
  category: string;
  title: string;
  subtitle: string;
  content: string;
  created_at: Date;
}

export default async function RecentNewsSection() {
  const res = await fetch(`${api}/news`, { cache: "force-cache" });
  const reviewsRes = await fetch(`${api}/reviews`, { cache: "force-cache" });

  const reviewsList: ReviewsProps[] = await reviewsRes.json();
  const newsList: NewsProps[] = await res.json();

  return (
    <section className="flex flex-col lg:flex-row w-[100%] px-2 md:px-[6em] 2xl:px-[12em] border-t border-blue-300">
      <div className="flex flex-col w-[100%] lg:w-[60%] py-[3em] pr-2 md:pr-8 gap-24">
        <h2 className="text-2xl font-bold">📰 Notícias Recentes</h2>
        {newsList.map((item, index) => (
          <TopPostsCard
            id={item.id}
            category={item.category}
            author={item.authorId}
            createdAt={item.created_at}
            bannerUrl={item.image || ""}
            title={item.title}
            subtitle={item.subtitle}
            post={item.content}
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-col w-[100%] lg:w-[40%] py-[3em] pl-8 lg:border-l border-blue-300 gap-24">
        <h2 className="text-2xl font-bold">✏️ Resenhas em Destaque</h2>

        {reviewsList.map((item, index) => (
          <TopReviewCard
            id={item.id}
            author={item.authorId}
            category={item.category}
            title={item.title}
            subtitle={item.subtitle}
            createdAt={item.created_at}
            relevance={"90"}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
