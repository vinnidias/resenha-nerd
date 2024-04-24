"use client";
import { useCategoryContext } from "@/contexts/categoryContext";
import CategorysNavbar from "../CategorysNavbar";
import TopDiscussionCard from "../TopDiscussionCard";
import AfiliateBlock from "../AfiliateBlock";

interface DiscussionCardProps {
  mainDiscussions: {
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
  }[];
}

export default function DiscussionListSection({
  mainDiscussions,
}: DiscussionCardProps) {
  const { categorySelected, setCategorySelected } = useCategoryContext();

  let filteredReviews = mainDiscussions.filter(
    (value) => value.category === categorySelected
  );

  return (
    <div className="flex flex-col mt-[-8.46rem] pt-[3.5em] min-h-[80vh]">
      <CategorysNavbar
        handleCategoryClick={(category) => setCategorySelected(category)}
        hlandleClearFilter={() => setCategorySelected("")}
        categorySelected={categorySelected}
        pageTitle={"✏️ Discussões"}
      />

      <div className="flex flex-col w-full lg:flex-row">
        <section className="flex flex-col md:w-[70%] min-h-screen gap-16 py-12 2xl:pl-72 px-8 lg:border-r border-blue-300">
          <h1 className="text-2xl font-bold">
            Discussões{" "}
            {categorySelected
              ? `Sobre ${categorySelected}`
              : "Mais Relevantes do Dia"}
          </h1>

          {filteredReviews.length === 0 && categorySelected && (
            <p>Nenhum resultado encontrado</p>
          )}

          {filteredReviews.length > 0
            ? filteredReviews.map((item) => (
                <TopDiscussionCard
                  author={item.author}
                  key={item.id}
                  authorId={item.authorId}
                  category={item.category}
                  title={item.title}
                  comments={item.comments}
                  content={item.content}
                  created_at={item.created_at}
                  id={item.id}
                />
              ))
            : mainDiscussions.map((item) => (
                <TopDiscussionCard
                  author={item.author}
                  key={item.id}
                  authorId={item.authorId}
                  category={item.category}
                  title={item.title}
                  comments={item.comments}
                  content={item.content}
                  created_at={item.created_at}
                  id={item.id}
                />
              ))}
        </section>
        <div className="flex flex-col min-h-screen lg:w-[30%] gap-8 p-16">
          <div className="block min-h-[74vh]"></div>
          <AfiliateBlock
            pubTitle="PROMOÇÃO AMAZON"
            link="https://amzn.to/3UbT0RU"
            image="https://github.com/vinnidias/resenha-nerd/assets/60718041/6abb5e70-1149-4df0-ab5a-f1825661df7e"
            title='Monitor Gamer Samsung T350 24"'
            subtitle="Com 33% de desconto no Prime"
          />

          <AfiliateBlock
            pubTitle="PROMOÇÃO AMAZON"
            link="https://amzn.to/3JtJKnc"
            image="https://github.com/vinnidias/resenha-nerd/assets/60718041/edd5afa5-31a7-4ac3-b0fc-305d07acd7ca"
            title="Headset sem Fio Pulse 3D Midnight Black - PlayStation 5"
            subtitle="Com 18% de desconto no Prime"
          />
        </div>
      </div>
    </div>
  );
}
