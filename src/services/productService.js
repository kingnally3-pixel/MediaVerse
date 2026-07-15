import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../utils/localDatabase";

const productService = {
  getAll() {
    return getProducts();
  },

  create(product) {
    addProduct(product);
  },

  update(product) {
    updateProduct(product);
  },

  remove(id) {
    deleteProduct(id);
  },
};

export default productService;