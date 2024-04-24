import { api } from "@/api/api";

import NewsList from "@/components/NewsList";

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
  const res = await fetch(`${api}/news`, { cache: "force-cache" });
  const newsList: NewsProps[] = await res.json();

  return <NewsList newsList={newsList} />;
}
