import { useDispatch, useSelector } from "react-redux";
import { Products } from "../Products/Products";
import { Categories } from "../Categories/Categories";
import { Banner } from "../Banner/Banner";
import {filterByPrice} from "../../features/products/productsSlice.js"
import { useEffect } from "react";
export const Home = () => {
  const dispath = useDispatch();
  const {products: {list, filtered}, categories } = useSelector((state) => state);

  useEffect(()=>{
    if (!list.length) return
    dispath(filterByPrice(50))
  },[dispath, list.length])

  return (
    <>
      <div>
        <Products products={list} amount={8} title="Trending"/>
        <Categories categories={categories.list} amount={5} title="View" />
        <Banner />
        <Products products={filtered} amount={8} title="Less than 50$" style={{marginTop: 40}}/>

      </div>
    </>
  );
};
