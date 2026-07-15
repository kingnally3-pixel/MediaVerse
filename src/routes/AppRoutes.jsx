import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Books from "../pages/Books/Books";
import Manga from "../pages/Manga/Manga";
import Comics from "../pages/Comics/Comics";
import AdminDashboard from "../dashboard/admin/AdminDashboard";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Products from "../dashboard/admin/Products";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/books" element={<Books />} />
      <Route path="/manga" element={<Manga />} />
      <Route path="/comics" element={<Comics />} />
      <Route
  path="/admin"
  element={
    <ProtectedRoute role="manager">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
    <Route path="/admin/products" element={<Products />} />
    </Routes>
  );
}