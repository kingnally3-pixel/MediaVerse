import CategoryCard from "../cards/CategoryCard";

export default function Categories() {
  const categories = [
    {
      title: "Movies",
      description: "Discover blockbuster movies and timeless classics.",
      icon: "🎬",
      color: "shadow-cyan-500/30",
      path: "/movies",
    },
    {
      title: "Books",
      description: "Browse novels, biographies and educational books.",
      icon: "📚",
      color: "shadow-green-500/30",
      path: "/books",
    },
    {
      title: "Manga",
      description: "Read the latest manga from every genre.",
      icon: "📖",
      color: "shadow-pink-500/30",
      path: "/manga",
    },
    {
      title: "Comics",
      description: "Marvel, DC and independent comic collections.",
      icon: "🦸",
      color: "shadow-purple-500/30",
      path: "/comics",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-5xl font-black">
        Explore Categories
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            {...category}
          />
        ))}
      </div>
    </section>
  );
}