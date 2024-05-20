interface IProps {
  link: string;
}

export default function Iframe(props: IProps) {
  const { link } = props;

  return (
    <iframe
      className="rounded-lg w-full h-[40vh]"
      src={link}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    >
      {" "}
    </iframe>
  );
}
