interface IParams {
  params: { id: string };
}
interface IResponseData{
  id: string;
  author: string;
  title: string;
  subtitle: string;
  category: string;
  content: string;
  image?: string;
  created_at: Date;
  updated_at?: Date;
}

export default async function Noticia({ params }: IParams) {
  const { id } = params;
  const res = await fetch(`http://localhost:3333/newsbyid?id=${id}`);
  const data = await res.json();

  console.log("response: ", data);
  console.log("id: ", id);

  return <h1>Notícia</h1>;
}
