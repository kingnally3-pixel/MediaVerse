import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryCard({
  title,
  description,
  icon,
  color,
  path,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={path}>
        <div
          className={`rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:${color}`}
        >
          <div className="mb-6 text-6xl">{icon}</div>

          <h2 className="mb-3 text-2xl font-bold">
            {title}
          </h2>

          <p className="text-gray-300">
            {description}
          </p>

          <div className="mt-6 text-cyan-400 font-semibold">
            Explore →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}