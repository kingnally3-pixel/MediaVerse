import ProductCard from "../cards/ProductCard";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const demoProducts = [
  {
    id: 1,
    title: "Spider-Man",
    category: "Comic",
    rating: 4.9,
    price: 15.99,
    image: "https://picsum.photos/400/600?random=1",
  },
  {
    id: 2,
    title: "Attack on Titan",
    category: "Manga",
    rating: 4.8,
    price: 12.99,
    image: "https://picsum.photos/400/600?random=2",
  },
  {
    id: 3,
    title: "Interstellar",
    category: "Movie",
    rating: 5.0,
    price: 19.99,
    image: "https://picsum.photos/400/600?random=3",
  },
  {
    id: 4,
    title: "Atomic Habits",
    category: "Book",
    rating: 4.7,
    price: 18.99,
    image: "https://picsum.photos/400/600?random=4",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Featured Products"
          subtitle="Explore some of our most popular items."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {demoProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}