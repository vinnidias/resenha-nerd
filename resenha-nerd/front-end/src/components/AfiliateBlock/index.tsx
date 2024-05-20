import Image from "next/image";

interface AfiliateProps {
  pubTitle: string;
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export default function AfiliateBlock({
  pubTitle,
  image,
  title,
  subtitle,
  link,
}: AfiliateProps) {
  return (
    <aside className="border rounded-md flex flex-col min-h-[30vh] w-full lg:max-w-[70%] bg-white px-4 pt-2 items-center shadow-md hover:scale-105 hover:shadow-sm ease-in-out duration-500">
      <a href={link} target="_blank" className="flex flex-col gap-4 text-center relative">
        <strong className="text-lg absolut top-0 mt-2 mb-8">{pubTitle.toUpperCase()}</strong>
        <Image
          // src={`data:image/jpeg;base64,${image}` || ""}
          src={image}
          alt="Banner da loja"
          width={60}
          height={100}
          className="self-center hover:scale-150 ease-in-out duration-700 mb-8"
        />

        <strong>{title}</strong>
        <p>{subtitle}</p>
      </a>
    </aside>
  );
}
