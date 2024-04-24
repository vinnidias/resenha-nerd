import { api } from "@/api/api";
import DiscussionListSection from "@/components/DiscussionListSection";
import TopDiscussionCard from "@/components/TopDiscussionCard";

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

export default async function Discussoes() {
  const res = await fetch(`${api}/discussions`, {cache: "force-cache"});
  const discussionList: DiscussionCardProps[] = await res.json();

  return <DiscussionListSection mainDiscussions={discussionList} />;
}
