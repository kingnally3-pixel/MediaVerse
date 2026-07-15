const PRODUCT_KEY = "mediaverse_products";

export function getProducts() {
  return JSON.parse(localStorage.getItem(PRODUCT_KEY)) || [];
}

export function saveProducts(products) {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
}

export function addProduct(product) {
  const products = getProducts();

  products.push({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...product,
  });

  saveProducts(products);
}

export function deleteProduct(id) {
  const products = getProducts().filter(
    product => product.id !== id
  );

  saveProducts(products);
}

export function updateProduct(updatedProduct) {
  const products = getProducts().map(product =>
    product.id === updatedProduct.id
      ? updatedProduct
      : product
  );

  saveProducts(products);
}