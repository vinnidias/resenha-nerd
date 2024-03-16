import Link from "next/link";

export default function NewsNavbar() {
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
    <nav className="flex w-full px-8 pt-28 gap-24 h-48 items-center bg-gradient-to-r from-slate-600 to-slate-400 shadow-md">
      <h1 className="text-2xl text-white font-bold">📰 Notícias</h1>
      <ul className="flex w-[50%] ml-[14%] items-center pt-4 justify-between gap-6 h-20">
        {categorys.map((category, index) => (
          <li key={index} className="text-sm pt-4 ease-in-out duration-300 hover:border-b-4 hover:border-blue-400 h-full">
            <Link href={category.link} className="text-white hover:text-white">{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
