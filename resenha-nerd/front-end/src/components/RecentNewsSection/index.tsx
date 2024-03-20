import { reviewsList } from "@/mockDatas/reviewsData";
import TopPostsCard from "../TopPostsCard";
import TopReviewCard from "../TopReviewCard";
import { api } from "@/api/api";

interface NewsProps {
  id: string;
  author: string;
  title: string;
  subtitle: string;
  category: string;
  content: string;
  image?: string;
  created_at: Date;
  updated_at?: Date;
}

export default async function RecentNewsSection() {
  const res = await fetch(`${api}/news`, { cache: "no-store" });
  const newsList: NewsProps[] = await res.json();

  return (
    <section className="flex flex-col md:flex-row w-[100%] px-2 md:px-[6em] 2xl:px-[12em] border-t border-blue-300">
      <div className="flex flex-col w-[100%] md:w-[60%] py-[3em] pr-2 md:pr-8 gap-24">
        <h2 className="text-2xl font-bold">📰 Notícias Recentes</h2>
        {newsList.map((item, index) => (
          <TopPostsCard
            id={item.id}
            category={item.category}
            author={item.author}
            createdAt={item.created_at}
            bannerUrl={item.image || ""}
            title={item.title}
            subtitle={item.subtitle}
            post={item.content}
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-col w-[100%] md:w-[40%] py-[3em] pl-8 md:border-l border-blue-300 gap-24">
        <h2 className="text-2xl font-bold">✏️ Resenhas em Destaque</h2>

        {reviewsList.map((item, index) => (
          <TopReviewCard
            author={item.author}
            category={item.category}
            title={item.title}
            subtitle={item.subtitle}
            createdAt={item.createdAt}
            relevance={item.relevance}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
