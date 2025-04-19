import Link from "next/link";

export const HomeNavbar = () => {
  return (
    <header className="fixed top-6 left-0 right-0 h-12 bg-lime-300 flex px-4 z-50 border-b border-y border-lime-800">
      <nav
        className="flex items-center justify-between w-full text-white"
        aria-label="Main navigation"
      >
        <Link href="/">
          <span className="font-bold text-lime-900">Adote um Peludo</span>
        </Link>
        <ul className="flex gap-8 items-center text-lime-900">
          <li>
            <Link
              href="/post"
              className="hover:underline"
              aria-label="Encontrar um amigo"
            >
              Divulgar um pet
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="hover:underline"
              aria-label="Anunciar um Pet"
            >
              Entrar
            </Link>
          </li>
          <li>
            <Link
              href={`/register`}
              className="bg-white text-black px-4 py-2 hover:bg-gray-50 border border-black"
              aria-label="Cadastre-se"
            >
              Cadastre-se
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
