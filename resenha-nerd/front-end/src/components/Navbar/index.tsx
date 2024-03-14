"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const navList = [
    {
      name: "Destaques",
      link: "/",
    },
    {
      name: "Notícias",
      link: "/",
    },
    {
      name: "Resenhas",
      link: "/",
    },
    {
      name: "Enquetes",
      link: "/",
    },
    {
      name: "Discussões",
      link: "/",
    },
  ];

  console.log(menuIsVisible);
  return (
    <nav className="flex-col justify-between sticky top-0 h-[3em] md:h-[5em] min-h-fit shadow-md max-w-screen p-2 md:px-[15em] backdrop-blur-md z-10">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <MobileMenu onClick={() => setMenuIsVisible(!menuIsVisible)} />
          <Link href={"/"} className="text-white "> Resenha Nerd 🤓</Link>
        </div>

        {/* <p className="flex justify-center items-center gap-2 relative border-2 rounded-lg py-1">
          <input type="text" className="bg-transparent h-4 w-44" />{" "}
          <RiSearch2Line className="absolute right-1 my-4" />{" "}
        </p> */}
      </div>
      <div className="hidden md:flex justify-center items-center gap-2 border-t-[1px] border-t-blue-300 mt-2 pt-2">
        <ul className=" list-none flex gap-10">
          {navList.map((item, index) => (
            <li
              key={index}
              className="text-sm ease-in-out duration-300 hover:border-b-4 hover:border-blue-400 h-[2.2em]"
            >
              <Link href={item.link} className="text-white hover:text-blue-300"> {item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {menuIsVisible && (
        <div className="flex md:hidden mt-5 ml-[-1%]">
          <ul className="list-none flex flex-col gap-2 backdrop-blur-lg shadow-md px-5">
            {navList.map((item, index) => (
              <li
                key={index}
                className="text-sm ease-in-out duration-300 hover:border-b-4 hover:border-blue-400 h-[2.2em]"
              >
                <Link href={item.link} className="text-white"> {item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
