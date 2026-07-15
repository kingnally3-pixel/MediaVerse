import { useState } from "react";
import { addProduct } from "../../../utils/localDatabase";

export default function ProductForm({ onSave }) {
  const [form, setForm] = useState({
    title: "",
    image: "",
    price: "",
    category: "Movies",
    description: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    addProduct({
      ...form,
      price: Number(form.price),
    });

    onSave();

    setForm({
      title: "",
      image: "",
      price: "",
      category: "Movies",
      description: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-slate-900 p-6"
    >
      <input
        name="title"
        placeholder="Product Name"
        value={form.title}
        onChange={handleChange}
        className="w-full rounded p-3 text-black"
      />

      <input
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
        className="w-full rounded p-3 text-black"
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="w-full rounded p-3 text-black"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full rounded p-3 text-black"
      >
        <option>Movies</option>
        <option>Books</option>
        <option>Manga</option>
        <option>Comics</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full rounded p-3 text-black"
      />

      <button className="rounded-lg bg-cyan-500 px-6 py-3 font-bold">
        Add Product
      </button>
    </form>
  );
}