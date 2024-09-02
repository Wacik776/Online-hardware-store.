/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import style from "../../styles/categories/singleCategory.module.scss";
import { Products } from "../../components/Products/Products";
import { useSelector } from "react-redux";

export const Category = () => {
  const { id } = useParams();
  const [cat, setCat] = useState("");
  const { list } = useSelector(({ categories }) => categories);

  useEffect(() => {
    if (!id || !list.length) return;
    const { name } = list.find((item) => item.id === id * 1);
    setCat(name);
  });

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };
  const defaultParams = {
    categoryId: id,
    ...defaultValues,
  };
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  useEffect(() => {
    if (!id) return;
    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  const { data, isLoading, isSuccess } = useGetProductsQuery(params);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setParams({ ...params, ...values });
  };
  return (
    <section className={style.wrapper}>
      <h2 className={style.title}>{cat}</h2>
      <form onSubmit={handleSubmit} className={style.filters}>
        <div className={style.filter}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Filter by product name"
            value={values.title}
          />
        </div>
        <div className={style.filter}>
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
          />
        </div>
        <div className={style.filter}>
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
          />
        </div>
        <button type="submit" hidden></button>
      </form>
      {isLoading ? (
        <div className="">Loading...</div>
      ) : !isSuccess || !data.length ? (
        <div className={style.back}>
          <span>No result</span>
          <button>Reset</button>
        </div>
      ) : (
        <div style={{ padding: 20 }}>
          <Products
            title=""
            products={data}
            style={{ padding: 0 }}
            amount={data.length}
          />
        </div>
      )}
    </section>
  );
};
