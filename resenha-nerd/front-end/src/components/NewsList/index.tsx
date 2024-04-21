"use client";

import CategorysNavbar from "../CategorysNavbar";
import { useCategoryContext } from "@/contexts/categoryContext";
import TopPostsCard from "../TopPostsCard";

interface IProps {
  newsList: {
    id: string;
    authorId: string;
    title: string;
    subtitle: string;
    category: string;
    content: string;
    image?: string;
    created_at: Date;
    updated_at?: Date;
  }[];
}

export default function NewsList({ newsList }: IProps) {
  const { categorySelected, setCategorySelected } = useCategoryContext();
  let filteredNews = newsList.filter(
    (value) => value.category === categorySelected
  );
  return (
    <div className="flex flex-col mt-[-8.46rem] pt-[3.5em] min-h-[80vh]">
      <CategorysNavbar
        pageTitle={"📰 Notícias"}
        handleCategoryClick={(category) => setCategorySelected(category)}
        hlandleClearFilter={() => setCategorySelected("")}
        categorySelected={categorySelected}
      />

      <div className="flex flex-col lg:w-[70%] min-h-screen gap-20 py-12 2xl:pl-[15%] px-8 lg:border-r border-blue-300">
        <h2 className="text-2xl font-bold">TODAS AS NOTÍCIAS EM UM SÓ LUGAR</h2>
        {filteredNews.length === 0 && categorySelected && (
          <p>Nenhum resultado encontrado</p>
        )}
        {filteredNews.length > 0
          ? filteredNews.map((item, index) => (
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
            ))
          : newsList.map((item, index) => (
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
    </div>
  );
}
