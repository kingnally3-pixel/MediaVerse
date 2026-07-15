import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <Container>

        <motion.div
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:.8 }}
          className="mx-auto max-w-5xl text-center"
        >

          <span className="rounded-full border border-cyan-400 px-6 py-2 text-cyan-400">
            Premium Digital Marketplace
          </span>

          <h1 className="mt-10 text-5xl font-black leading-tight md:text-8xl">
            Discover Your Next
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Favorite Story
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-300">
            Movies, Books, Manga and Comics —
            all in one beautifully designed marketplace.
          </p>

          <div className="mx-auto mt-12 flex max-w-xl items-center rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">

            <FaSearch className="ml-4 text-cyan-400" />

            <input
              type="text"
              placeholder="Search movies, books, manga..."
              className="w-full bg-transparent px-4 py-3 outline-none"
            />

          </div>

          <div className="mt-10 flex justify-center gap-5">

            <Button>
              Explore
            </Button>

            <Button variant="secondary">
              Trending
            </Button>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}