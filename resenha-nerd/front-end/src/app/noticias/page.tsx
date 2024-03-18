import NewsNavbar from "@/components/NewsNavbar";
import TopPostCard from "@/components/TopPostsCard";
import { newsList } from "@/mockDatas/newsData";

export default function News() {
  return (
    <div className="flex flex-col mt-[-8.46rem] pt-[3.5em] min-h-[80vh]">
      <NewsNavbar />

      <div className="flex flex-col md:w-[70%] gap-20 py-12 2xl:pl-72 px-8 md:border-r border-blue-300">
        <h2 className="text-2xl font-bold">TODAS AS NOTÍCIAS EM UM SÓ LUGAR</h2>
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
    </div>
  );
}
