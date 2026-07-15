import { useEffect, useState } from "react";

import ProductForm from "./components/ProductForm";

import {
  deleteProduct,
  getProducts,
} from "../../utils/localDatabase";

export default function Products() {
  const [products, setProducts] = useState([]);

  function loadProducts() {
    setProducts(getProducts());
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Products
      </h1>

      <ProductForm onSave={loadProducts} />

      <div className="mt-10 space-y-4">
        {products.map(product => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-5"
          >
            <div>
              <h2 className="font-bold">
                {product.title}
              </h2>

              <p>${product.price}</p>

              <small>{product.category}</small>
            </div>

            <button
              onClick={() => {
                deleteProduct(product.id);
                loadProducts();
              }}
              className="rounded bg-red-600 px-4 py-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}