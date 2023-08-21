export default function Navbar() {
  return (
    <nav className="flex justify-between h-[5vh] shadow-sm p-2 pr-8 ">
      <h1>Resenha Nerd 🤓</h1>
      <input type="text" />
      <li className="list-none flex gap-10">
        <ul>Games</ul>
        <ul>Tecnologia</ul>
        <ul>Música</ul>
        <ul>Séries</ul>
        <ul>Filmes</ul>
        <ul>Animes</ul>
        <ul>HQs</ul>
        <ul>Mangás</ul>
      </li>

      <div>
        <p>🤓</p>
      </div>
    </nav>
  );
}
