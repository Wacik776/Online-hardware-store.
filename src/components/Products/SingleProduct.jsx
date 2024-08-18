import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { SidePoster } from "../SidePoster/SidePoster";
import { ROUTES } from "../../utils/routes";
import { Product } from "./Product";
import { Products } from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProducts } from "../../features/products/productsSlice";

export const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { related, list } = useSelector((state) => state.products);
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME); //redirect
    }
  }, [isLoading, isFetching, isSuccess, navigate]);
  useEffect(() => {
    if (!data || !list.length) return;
    if (data) {
      dispatch(getRelatedProducts(data.category.id));
    }
  }, [data, dispatch, list.length ]);
  return (
    <div>
      <div style={{ display: "flex", gap: 20 }}>
        <SidePoster poster={""} />
        {data !== undefined ? (
          <Product {...data} />
        ) : (
          <section
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Loading...
          </section>
        )}
      </div>
      <Products style={{marginTop: 20}} products={related} amount={4} title={"Related Products"} />
    </div>
  );
};
