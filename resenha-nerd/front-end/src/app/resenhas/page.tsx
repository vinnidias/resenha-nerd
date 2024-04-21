import { api } from "@/api/api";

import CategorysNavbar from "@/components/CategorysNavbar";
import MainReviewCard from "@/components/MainReviewCard";
import ReviewsListSection from "@/components/ReviewsListSection";

interface IReviewsProps {
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
}

export default async function Resenhas() {
  const response = await fetch(`${api}/reviews`, { cache: "force-cache" });
  const mainReviews: IReviewsProps[] = await response.json();

  return <ReviewsListSection mainReviews={mainReviews} />;
}
