interface IProps {
  link: string;
}

export default function Iframe(props: IProps) {
  const { link } = props;

  return (
    <iframe
    className="rounded-lg w-full"
      src={link}
      width="853"
      height="480"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    >
      {" "}
    </iframe>
  );
}
