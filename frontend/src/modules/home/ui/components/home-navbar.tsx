import Link from "next/link";

export const HomeNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-12 bg-purple-500 flex px-4 z-50">
      <nav
        className="flex items-center justify-between w-full text-white"
        aria-label="Main navigation"
      >
        <Link href="/">
          <span className="font-bold">Adote um Peludo</span>
        </Link>
        <ul className="flex gap-8 items-center">
          <li>
            <a
              href="/encontrar-amigo"
              className="hover:underline"
              aria-label="Encontrar um amigo"
            >
              Anunciar um pet
            </a>
          </li>
          <li>
            <a
              href="/anunciar-pet"
              className="hover:underline"
              aria-label="Anunciar um Pet"
            >
              Entrar
            </a>
          </li>
          <li>
            <button
              className="bg-white text-purple-500 px-4 py-1 rounded-md hover:bg-gray-200"
              aria-label="Cadastre-se"
            >
              Cadastre-se
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
