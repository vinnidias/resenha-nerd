interface IParams {
  params: { id: string };
}

export default async function Discussao({ params }: IParams) {
  const { id } = params;

  return (
    <div className="flex flex-col w-full min-h-screen items-center p-16">
      <h1>Discussão </h1>
      <h2>{id}</h2>
    </div>
  );
}
