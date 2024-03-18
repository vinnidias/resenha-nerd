import MainPostCard from "@/components/MainPostCard";
import TopPostCard from "@/components/TopPostsCard";
import TopReviewCard from "@/components/TopReviewCard";

import { newsList } from "@/mockDatas/newsData";
import { reviewsList } from "@/mockDatas/reviewsData";
import Image from "next/image";
import RecentNewsSection from "@/components/RecentNewsSection";

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
      <RecentNewsSection />
    </main>
  );
}
