import CategorysNavbar from "@/components/CategorysNavbar";
import MainReviewCard from "@/components/MainReviewCard";

export default function Resenhas() {
  const mainReviews = [
    {
      author: "Vini Dias",
      category: "Games",
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      created_at: new Date(),
      irrelevant: 2,
      relevance: Number(((15 / 17) * 100).toFixed(0)),
      relevant: 15,
      subtitle:
        " Lorem Ipsum used since the 1500s is reproduced below for those",
      title: "Finibus Bonorum et Malorum",
      updated_at: new Date(),
    },
    {
      author: "Vitor Tarifa",
      category: "Games",
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      created_at: new Date(),
      irrelevant: 4,
      relevance: Number(((30 / 34) * 100).toFixed(0)),
      relevant: 30,
      subtitle:
        " Lorem Ipsum used since the 1500s is reproduced below for those",
      title: "Finibus Bonorum et Malorum",
      updated_at: new Date(),
    },
    {
      author: "Vini Dias",
      category: "Séries",
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      created_at: new Date(),
      irrelevant: 2,
      relevance: Number(((25 / 27) * 100).toFixed(0)),
      relevant: 25,
      subtitle:
        " Lorem Ipsum used since the 1500s is reproduced below for those",
      title: "Finibus Bonorum et Malorum",
      updated_at: new Date(),
    },
    {
      author: "Vini Dias",
      category: "Animes",
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      created_at: new Date(),
      irrelevant: 2,
      relevance: Number(((65 / 67) * 100).toFixed(0)),
      relevant: 65,
      subtitle:
        " Lorem Ipsum used since the 1500s is reproduced below for those",
      title: "Finibus Bonorum et Malorum",
      updated_at: new Date(),
    },
  ];
  return (
    <div className="flex flex-col mt-[-8.46rem] pt-[3.5em] min-h-[80vh]">
      <CategorysNavbar pageTitle={"✏️ Resenhas"} />

      <section className="flex flex-col md:w-[70%] gap-16 py-12 2xl:pl-72 px-8 md:border-r border-blue-300">
        <h1 className="text-2xl font-bold">RESENHAS RELEVANTES DO DIA</h1>
        {mainReviews.map((review, index) => (
          <MainReviewCard
            key={index}
            author={review.author}
            category={review.category}
            content={review.content}
            created_at={review.created_at}
            irrelevant={review.irrelevant}
            relevance={review.relevance}
            relevant={review.relevant}
            subtitle={review.subtitle}
            title={review.title}
            updated_at={review.updated_at}
          />
        ))}
      </section>
    </div>
  );
}
