import MainPostCard from "@/components/MainPostCard";
import TopPostCard from "@/components/TopPostsCard";
import TopReviewCard from "@/components/TopReviewCard";

import { newsList } from "@/mockDatas/newsData";
import { reviewsList } from "@/mockDatas/reviewsData";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[100vw] flex-col items-center justify-between relative top-0 border-black-2">
      <MainPostCard
        category={newsList[0].category}
        author={newsList[0].author}
        createdAt={newsList[0].cratedAt}
        bannerUrl={newsList[0].bannerUrl}
        title={newsList[0].title}
        subtitle={newsList[0].subtitle}
        post={newsList[0].post}
      />
      <section className="flex flex-col md:flex-row w-[100%] px-2 md:px-[6em] 2xl:px-[12em] border-t border-blue-300">
        <div className="flex flex-col w-[100%] md:w-[60%] py-[3em] pr-2 md:pr-8 gap-24">
          <h2 className="text-2xl font-bold">📰 Notícias Recentes</h2>
          {newsList.map((item, index) => (
            <TopPostCard
              category={item.category}
              author={item.author}
              createdAt={item.cratedAt}
              bannerUrl={item.bannerUrl}
              title={item.title}
              subtitle={item.subtitle}
              post={item.post}
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
    </main>
  );
}
