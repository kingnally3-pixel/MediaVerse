import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/sections/Hero";
import Categories from "../../components/sections/Categories";
import FeaturedProducts from "../../components/sections/FeaturedProducts";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </MainLayout>
  );
}