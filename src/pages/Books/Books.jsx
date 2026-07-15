import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { getBooks } from "../../services/booksService";
import ProductCard from "../../components/cards/ProductCard";
import Container from "../../components/ui/Container";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const data = await getBooks("fiction");
      setBooks(data);
    }

    loadBooks();
  }, []);

  return (
    <MainLayout>
      <Container>
        <h1 className="my-10 text-5xl font-black">
          Books
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <ProductCard
              key={book.id}
              title={book.volumeInfo.title}
              category="Book"
              rating="4.5"
              price="Free"
              image={
                book.volumeInfo.imageLinks?.thumbnail ||
                "https://via.placeholder.com/300x450"
              }
            />
          ))}
        </div>
      </Container>
    </MainLayout>
  );
}