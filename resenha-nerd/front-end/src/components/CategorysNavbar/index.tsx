import Link from "next/link";

interface IProps {
  pageTitle: string;
}

export default function CategorysNavbar(props: IProps) {
  const { pageTitle } = props;
  const categorys = [
    {
      name: "Games",
      link: "/noticias",
    },
    {
      name: "Tecnologia",
      link: "/noticias",
    },
    {
      name: "Música",
      link: "/noticias",
    },
    {
      name: "Series",
      link: "/noticias",
    },
    {
      name: "Cinema",
      link: "/noticias",
    },
    {
      name: "Animes",
      link: "/noticias",
    },
  ];

  return (
    <nav className="flex w-full md:px-8 pl-1 pt-28  md:gap-24 h-48 items-center bg-gradient-to-r from-slate-600 to-slate-400 shadow-md">
      <h1 className="text-lg mb-20 md:mb-0 md:text-2xl text-white font-bold">
        {pageTitle}
      </h1>
      <ul className="flex text-sm md:w-[50%] md:ml-[14%] items-center md:pt-4 pt-4 justify-between gap-6 h-20  border-black">
        {categorys.map((category, index) => (
          <li
            key={index}
            className="text-sm pt-4 ease-in-out duration-300 hover:border-b-4 hover:border-blue-400 h-full"
          >
            <Link href={category.link} className="text-white hover:text-white">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
