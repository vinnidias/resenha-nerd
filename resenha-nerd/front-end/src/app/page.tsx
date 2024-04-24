import MainPostCard from "@/components/MainPostCard";
import RecentNewsSection from "@/components/RecentNewsSection";
import { api } from "@/api/api";

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

export default async function Home() {
  const res = await fetch(`${api}/news`, { cache: "no-store" });
  const newsFetchList: NewsProps[] = await res.json();

  return (
    <main className="flex min-h-screen max-w-[100vw] flex-col items-center justify-between relative top-0 border-black-2">
      <MainPostCard newsList={newsFetchList} />
      <RecentNewsSection />
    </main>
  );
}
