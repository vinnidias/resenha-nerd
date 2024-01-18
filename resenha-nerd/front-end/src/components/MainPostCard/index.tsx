import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PostsCarousel from "./PostCarousel";

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
      className={`flex flex-col gap-2 absolute w-screen h-screen max-w-[100%] top-0 items-center pt-[12em] mt-[-4em]`}
    >
      <Image
        src={bannerUrl}
        alt="banner"
        className="w-[100vw] h-[100vh] absolute top-0 left-0 z-0 opacity-[.7] object-cover"
      />
      <div className="flex flex-col relative opacity-1 p-[6em] px-12 gap-4 border-2 border-blue-300 h-[60vh] md:w-[55vw] w-[90%]  backdrop-blur-md">
        <Link
          href={"/"}
          className="text-sm text-blue-200 hover:border-b-[1px] w-fit absolute top-0 mt-6"
        >
          {category}
        </Link>
        <h2 className="text-white md:text-5xl text-2xl font-bold z-10 md:w-[50%] w-[90%] mb-4">
          {title}
        </h2>
        <p className="text-white md:w-[70%] text-sm z-10">{subtitle}</p>
        {/* <p className="text-white z-10">{post}</p> */}
        <div className="flex absolute bottom-0 mb-4 gap-6 text-white text-sm">
          <p>Resenheiro {author}</p>
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
