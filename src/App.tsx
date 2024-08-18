import { useDispatch } from "react-redux";
import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.jsx";
import { AppRoutes } from "./components/Routes/AppRoutes.js";
import { SidePoster } from "./components/SidePoster/SidePoster.jsx";
import { UserSignUpForm } from "./components/User/UserSignUpForm.jsx";
import { Poster } from "./components/Poster/Poster.jsx";
import { UserForm } from "./components/User/UserForm.jsx";
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
      <UserForm />
      <div className="container">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}
