import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IProps {
  bannerUrl: StaticImageData;
  category: string;
  author: string;
  createdAt: Date;
  title: string;
  subtitle: string;
  post: string;
}

export default function MainPostCard(props: IProps) {
  const { bannerUrl, category, author, createdAt, title, subtitle, post } =
    props;

  const toLocaleDate = createdAt.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // const slides = [
  //   "https://i.ibb.co/ncrXc2V/1.png",
  //   "https://i.ibb.co/B3s7v4h/2.png",
  //   "https://i.ibb.co/XXR8kzF/3.png",
  //   "https://i.ibb.co/yg7BSdM/4.png",
  // ];
  return (
    <section
      className={`flex flex-col gap-2 w-[100%] h-screen top-0 items-center pt-[6em]`}
    >
      <Image
        src={bannerUrl}
        alt="banner"
        className="w-[100vw] h-[100vh] absolute top-0 left-0 mt-[-4.2em] z-0 opacity-[.9] object-cover"
      />
      <div className="flex flex-col relative opacity-1 p-[6em] px-12 gap-4 border-2 border-blue-300 rounded-md md:h-[60vh] md:w-[55vw] w-[90%]  backdrop-blur-md">
        <Link
          href={"/"}
          className="text-sm text-blue-200 hover:border-b-[1px] w-fit absolute top-0 mt-6"
        >
          {category}
        </Link>
        <h2 className="text-white text-2xl 2xl:text-5xl font-bold z-10 md:w-[50%] w-[90%] mb-4">
          {title}
        </h2>
        <p className="text-white xl:w-[70%] w-full text-sm z-10">{subtitle}</p>
        {/* <p className="text-white z-10">{post}</p> */}
        <div className="flex absolute bottom-0 mb-4 gap-6 text-white text-sm">
          <p>🤓 {author}</p>
          <p>{toLocaleDate}</p>
        </div>
      </div>
      <div>

      </div>
      {/* <PostsCarousel>
        {slides.map((s, i) => (
          <Image src={s} alt="imagem do banner" key={i} width={300} height={60}/>
        ))}
      </PostsCarousel> */}
    </section>
  );
}
