import MainPostCard from "@/components/MainPostCard";
import bannerPath from "/assets/joker.jpg";

export default function Home() {
  const today = new Date();
  const banner = bannerPath;
  const title = "Section 1.10.32 of de Finibus Bonorum et Malorum";
  const subtitle =
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC";
  const post =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative top-0 border-black-2">
      <MainPostCard
        category="Tecnologia"
        author="Vini Dias"
        createdAt={today}
        bannerUrl={banner}
        title={title}
        subtitle={subtitle}
        post={post}
      />
    </main>
  );
}
