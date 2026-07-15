import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-cyan-400"
        >
          MediaVerse
        </Link>

        <ul className="hidden items-center gap-8 text-gray-300 md:flex">
          <li>
            <Link to="/movies" className="hover:text-cyan-400 transition">
              Movies
            </Link>
          </li>

          <li>
            <Link to="/books" className="hover:text-cyan-400 transition">
              Books
            </Link>
          </li>

          <li>
            <Link to="/manga" className="hover:text-cyan-400 transition">
              Manga
            </Link>
          </li>

          <li>
            <Link to="/comics" className="hover:text-cyan-400 transition">
              Comics
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-5 text-2xl">
          <FaShoppingCart className="cursor-pointer hover:text-cyan-400 transition" />
          <FaUserCircle className="cursor-pointer hover:text-cyan-400 transition" />
        </div>
      </nav>
    </header>
  );
}