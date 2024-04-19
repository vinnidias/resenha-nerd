import { api } from "@/api/api";
import TopReviewCard from "../TopReviewCard";

interface ReviewsProps {
  id: string;
  authorId: string;
  category: string;
  title: string;
  subtitle: string;
  content: string;
  created_at: Date;
}

export default async function ReviewsList() {
  const reviewsRes = await fetch(`${api}/reviews`, { cache: "no-store" });
  const reviewsList: ReviewsProps[] = await reviewsRes.json();
  return (
    <div className="flex flex-col w-full py-[3em] pl-8 gap-24">
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
  );
}
