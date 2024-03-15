import bannerPath from "/assets/joker.jpg";
import bannerTest2 from "/assets/tesla.jpg";
import bannerTest3 from "/assets/bills.jpg";
import bannerTest4 from "/assets/tol-trials.jpg";
import bannerTest5 from "/assets/Dro.jpg";
import bannerTest6 from "assets/Oppenheimer.jpg";
import MainPostCard from "@/components/MainPostCard";
import TopPostCard from "@/components/TopPostsCard";
import TopReviewCard from "@/components/TopReviewCard";


export default function Home() {
  const today = new Date();
  const banner = bannerPath;
  const title = "Section 1.10.32 of de Finibus Bonorum et Malorum";
  const subtitle =
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC";
  const post =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <main className="flex min-h-screen max-w-[100vw] flex-col items-center justify-between relative top-0 border-black-2">
      <MainPostCard
        category="Tecnologia"
        author="Vini Dias"
        createdAt={today}
        bannerUrl={bannerTest6}
        title={title}
        subtitle={subtitle}
        post={post}
      />
      <section className="flex flex-col md:flex-row w-[100%] px-2 md:px-[6em] 2xl:px-[12em] border-t border-blue-300">
        <div className="flex flex-col w-[100%] md:w-[60%] py-[3em] pr-2 md:pr-8 gap-24">
          <h2 className="text-2xl font-bold">📰 Notícias Recentes</h2>
          <TopPostCard
            category="Games"
            author="Vini Dias"
            createdAt={today}
            bannerUrl={bannerTest4}
            title={"Prepare o croção para o lançamento de The Outlast Trials."}
            subtitle={subtitle}
            post={post}
          />
          <TopPostCard
            category="Animes"
            author="Lari B."
            createdAt={today}
            bannerUrl={bannerTest3}
            title={"Os personagens mais temidos pro Freeza segundo o próprio mestre Akira."}
            subtitle={subtitle}
            post={post}
          />
          <TopPostCard
            category="Música"
            author="Dro"
            createdAt={today}
            bannerUrl={bannerTest5}
            title={"Dro fala sobre carreira e projetos em conversa com A Pista Jornal."}
            subtitle={subtitle}
            post={post}
          />
          <TopPostCard
            category="Tecnologia"
            author="Vini Dias"
            createdAt={today}
            bannerUrl={bannerTest2}
            title={"Robôs humanoides da Tesla, seria o incício do Fim?!"}
            subtitle={subtitle}
            post={post}
          />

          <TopPostCard
            category="Cinema"
            author="Rui Curaj"
            createdAt={today}
            bannerUrl={bannerTest6}
            title={"Lista completa de indicados e ganhadores do Oscar 2024"}
            subtitle={subtitle}
            post={post}
          />
        </div>
        <div className="flex flex-col w-[100%] md:w-[40%] py-[3em] pl-8 md:border-l border-blue-300 gap-24">
          <h2 className="text-2xl font-bold">✏️ Resenhas em Destaque</h2>
          <TopReviewCard 
          author="Vinni Dias"
          category="Games"
          title="GTA 6 no site da Rockstar"
          subtitle="Finalmente GTA 6  no site, vamos discutir sobre a relevância e como a Rockstar está lidando com GTA após primeiro anúncio"
          createdAt={today}
          relevance="90%"
          />
          <TopReviewCard 
          author="Vinni Dias"
          category="Games"
          title="GTA 6 no site da Rockstar"
          subtitle="Finalmente GTA 6  no site, vamos discutir sobre a relevância e como a Rockstar está lidando com GTA após primeiro anúncio"
          createdAt={today}
          relevance="90%"
          />
          <TopReviewCard 
          author="Vinni Dias"
          category="Games"
          title="GTA 6 no site da Rockstar"
          subtitle="Finalmente GTA 6  no site, vamos discutir sobre a relevância e como a Rockstar está lidando com GTA após primeiro anúncio"
          createdAt={today}
          relevance="90%"
          />
          <TopReviewCard 
          author="Vinni Dias"
          category="Games"
          title="GTA 6 no site da Rockstar"
          subtitle="Finalmente GTA 6  no site, vamos discutir sobre a relevância e como a Rockstar está lidando com GTA após primeiro anúncio"
          createdAt={today}
          relevance="90%"
          />
          <TopReviewCard 
          author="Vinni Dias"
          category="Games"
          title="GTA 6 no site da Rockstar"
          subtitle="Finalmente GTA 6  no site, vamos discutir sobre a relevância e como a Rockstar está lidando com GTA após primeiro anúncio"
          createdAt={today}
          relevance="90%"
          />
        </div>
      </section>
    </main>
  );
}
