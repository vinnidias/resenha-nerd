import { api } from "@/api/api";
import CategorysNavbar from "@/components/CategorysNavbar";
import TopPostCard from "@/components/TopPostsCard";

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

export default async function Noticias() {
  const res = await fetch(`${api}/news`, { cache: "no-store" });
  const newsList: NewsProps[] = await res.json();

  return (
    <div className="flex flex-col mt-[-8.46rem] pt-[3.5em] min-h-[80vh]">
      <CategorysNavbar pageTitle={"📰 Notícias"}/>

      <div className="flex flex-col md:w-[70%] gap-20 py-12 2xl:pl-72 px-8 md:border-r border-blue-300">
        <h2 className="text-2xl font-bold">TODAS AS NOTÍCIAS EM UM SÓ LUGAR</h2>
        {newsList.map((item, index) => (
          <TopPostCard
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
    </div>
  );
}
