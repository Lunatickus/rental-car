import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("pages/HomePage"));
const CatalogPage = lazy(() => import("pages/CatalogPage"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
