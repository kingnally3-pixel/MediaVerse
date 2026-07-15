import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  onClick,
}) {
  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-white",

    secondary:
      "border border-white/20 hover:bg-white/10 text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: .96 }}
      onClick={onClick}
      className={`rounded-xl px-8 py-4 font-semibold transition ${styles[variant]}`}
    >
      {children}
    </motion.button>
  );
}