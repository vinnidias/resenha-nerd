"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

interface IProps {
  newsList: {
    id: string;
    authorId: string;
    title: string;
    subtitle: string;
    category: string;
    content: string;
    image?: string;
    created_at: Date;
    updated_at?: Date;
  }[];
}

export default function MainPostCard(props: IProps) {
  const { newsList } = props;
  const [selected, setSelected] = useState(0);

  const listSliced = newsList.slice(0,4);

  const formatedDate = new Intl.DateTimeFormat("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="flex flex-col w-[100%] h-screen top-0 gap-40 items-center pt-[6em] overflow-hidden">
      <Image
        src={`data:image/jpeg;base64,${listSliced[selected].image}` || ""}
        alt="banner"
        className="w-[100vw] h-[100vh] absolute top-0 left-0 mt-[-4.8em] z-0 opacity-[.9] object-cover"
        width={200}
        height={160}
      />
      <div className="flex flex-col mt-24  w-[70%] p-[6em] px-12 gap-4 relative bg-gradient-to-tr from-black/70 to-blue-300/5 md:m-0 md:h-[60vh] md:w-[55vw] border-2 border-blue-300 rounded-md backdrop-blur-md ease-in-out duration-700">
        <Link
          href={`/noticia/${listSliced[selected].id}`}
          className=" hover:decoration-slice hover:decoration-blue-300"
        >
          <p className="text-md text-blue-200 font-bold ease-in-out duration-300 hover:border-b hover:border-blue-300 w-fit absolute top-0 mt-6">
            {listSliced[selected].category}
          </p>
          <p className="text-white text-2xl 2xl:text-5xl font-bold md:w-[70%] w-[90%] mb-12">
            {listSliced[selected].title}
          </p>
          <p className="text-white xl:w-[70%] w-full text-md lg:text-lg">
            {listSliced[selected].subtitle}
          </p>
          <div className="flex absolute bottom-0 mb-4 gap-6 text-white text-sm">
            <p>🤓 {listSliced[selected].authorId}</p>
            <p>
              {formatedDate.format(new Date(listSliced[selected].created_at))}
            </p>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-8 absolute bottom-[-10%] self-center md:right-0 md:bottom-0 md:m-2">
          <button
            className="text-2xl font-bold text-blue-300"
            onClick={() => {
              if (selected <= 0) {
                setSelected(listSliced.length - 1);
              } else {
                setSelected(selected - 1);
              }
            }}
          >
            <IoMdArrowRoundBack />
          </button>

          {newsList.map((_, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`w-3 h-3 border border-blue-300 rounded-lg cursor-pointer ${
                index === selected && "bg-blue-300"
              }`}
            ></div>
          ))}

          <button
            className="text-2xl font-bold text-blue-300"
            onClick={() => {
              if (selected === listSliced.length - 1) {
                setSelected(0);
              } else {
                setSelected(selected + 1);
              }
            }}
          >
            <IoMdArrowRoundForward />
          </button>
        </div>
      </div>
    </section>
  );
}
