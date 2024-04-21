"use client";

import { useCategoryContext } from "@/contexts/categoryContext";
import CategorysNavbar from "../CategorysNavbar";
import MainReviewCard from "../MainReviewCard";

interface IReviewsProps {
  mainReviews: {
    id: string;
    authorId: string;
    category: string;
    title: string;
    subtitle: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    author: {
      image: string;
      nickname: string;
    };
  }[];
}

export default function ReviewsListSection({ mainReviews }: IReviewsProps) {
  const { categorySelected, setCategorySelected } = useCategoryContext();

  let filteredReviews = mainReviews.filter(
    (value) => value.category === categorySelected
  );

  return (
    <div className="flex flex-col mt-[-8.46rem] pt-[3.5em] min-h-[80vh]">
      <CategorysNavbar
        handleCategoryClick={(category) => setCategorySelected(category)}
        hlandleClearFilter={() => setCategorySelected("")}
        categorySelected={categorySelected}
        pageTitle={"✏️ Resenhas"}
      />

      <section className="flex flex-col md:w-[70%] min-h-screen gap-16 py-12 2xl:pl-72 px-8 md:border-r border-blue-300">
        <h1 className="text-2xl font-bold">RESENHAS RELEVANTES DO DIA</h1>

        {filteredReviews.length === 0 && categorySelected && (
          <p>Nenhum resultado encontrado</p>
        )}

        {filteredReviews.length > 0
          ? filteredReviews.map((review, index) => (
              <MainReviewCard
                key={index}
                id={review.id}
                author={review.authorId}
                category={review.category}
                content={review.content}
                created_at={review.created_at}
                irrelevant={1}
                relevance={90}
                relevant={10}
                subtitle={review.subtitle}
                title={review.title}
                updated_at={review.updated_at}
              />
            ))
          : mainReviews.map((review, index) => (
              <MainReviewCard
                key={index}
                id={review.id}
                author={review.authorId}
                category={review.category}
                content={review.content}
                created_at={review.created_at}
                irrelevant={1}
                relevance={90}
                relevant={10}
                subtitle={review.subtitle}
                title={review.title}
                updated_at={review.updated_at}
              />
            ))}
      </section>
    </div>
  );
}
