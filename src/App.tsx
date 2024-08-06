import { useDispatch } from "react-redux";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./components/Routes/AppRoutes";
import { SidePoster } from "./components/SidePoster/SidePoster.jsx";
import { Poster } from "./components/Poster/Poster.jsx";
import "./styles/app.scss";
import { useEffect } from "react";
import { getCategories } from "./features/categories/categoriesSlice.js";
import { getProducts } from "./features/products/productsSlice.js";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  });
  return (
    <div className="app">
      <Header />
      <div className="container">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}
