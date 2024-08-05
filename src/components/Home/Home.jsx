import { useSelector } from "react-redux";
// import { Poster } from "../Poster/Poster";
import { Products } from "../Products/Products";
import { Categories } from "../Categories/Categories";
export const Home = () => {
  const {products, categories } = useSelector((state) => state);
  return (
    <>
      <div>
        
        <Products products={products.list} amount={5} title="Trending"/>
        <Categories categories={categories.list} amount={5} title="View" />
      </div>
    </>
  );
};
