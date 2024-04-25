import { api } from "@/api/api";
import DiscussionListSection from "@/components/DiscussionListSection";
import TopDiscussionCard from "@/components/TopDiscussionCard";
import { Metadata } from "next";

interface DiscussionCardProps {
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
}

export const metadata: Metadata = {
  title: "Discussões",
  description:
    "Discussões e opiniões no universo dos Games, Música, Tecnologia, Séries, Filmes e Animes",
};

export default async function Discussoes() {
  const res = await fetch(`${api}/discussions`, { next: {revalidate: 1} });
  const discussionList: DiscussionCardProps[] = await res.json();

  return <DiscussionListSection mainDiscussions={discussionList} />;
}
