import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useApp } from "../../context/AppContext";
export default function ProductCard({
  id,
  image,
  title,
  category,
  rating,
  price,
}) {
  const { addToCart } = useApp();
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-lg transition"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover"
        />

        <button className="absolute right-3 top-3 rounded-full bg-black/60 p-2">
          <FaHeart />
        </button>
      </div>

      <div className="p-5">
        <span className="text-sm text-cyan-400">
          {category}
        </span>

        <h3 className="mt-2 text-xl font-bold">
          {title}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {rating}
          </div>

          <span className="text-2xl font-bold">
            ${price}
          </span>
        </div>

        <button
  onClick={() =>
    addToCart({
      id,
      title,
      image,
      category,
      rating,
      price,
    })
  }
  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 transition hover:bg-cyan-400"
>
  <FaShoppingCart />
  Add to Cart
</button>
      </div>
    </motion.div>
  );
}